import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function usePizzaLikes(pizzaId: string) {
  const [likes, setLikes] = useState<number>(0);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadLikes();
    checkIfUserLiked();
  }, [pizzaId]);

  const loadLikes = async () => {
    try {
      if (!supabase) {
        setLikes(0);
        setLoading(false);
        return;
      }

      const { count, error } = await supabase
        .from('giorgios_pizza_likes')
        .select('*', { count: 'exact', head: true })
        .eq('pizza_id', pizzaId);

      if (error) throw error;
      setLikes(count || 0);
    } catch (error) {
      console.error('Error loading likes:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkIfUserLiked = async () => {
    try {
      // Primero verificamos en AsyncStorage (localStorage para React Native)
      const localLikes = await AsyncStorage.getItem('giorgios_liked_pizzas');
      const likedPizzas = localLikes ? JSON.parse(localLikes) : [];
      
      if (likedPizzas.includes(pizzaId)) {
        setHasLiked(true);
        return;
      }

      // Verificamos por IP en Supabase
      // Nota: La IP se obtendrá en el servidor/edge function en producción
      // Por ahora usamos solo localStorage
    } catch (error) {
      console.error('Error checking if user liked:', error);
    }
  };

  const toggleLike = async () => {
    try {
      if (hasLiked) {
        // Quitar like
        await removeLike();
      } else {
        // Añadir like
        await addLike();
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const addLike = async () => {
    try {
      if (!supabase) {
        console.warn('Supabase not configured');
        return;
      }

      // Obtener IP del cliente (en producción esto vendría del servidor)
      const clientIp = await getClientIp();

      const { error } = await supabase
        .from('giorgios_pizza_likes')
        .insert([{ pizza_id: pizzaId, ip_address: clientIp }]);

      if (error) throw error;

      // Guardar en AsyncStorage
      const localLikes = await AsyncStorage.getItem('giorgios_liked_pizzas');
      const likedPizzas = localLikes ? JSON.parse(localLikes) : [];
      likedPizzas.push(pizzaId);
      await AsyncStorage.setItem('giorgios_liked_pizzas', JSON.stringify(likedPizzas));

      setHasLiked(true);
      setLikes(prev => prev + 1);
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };

  const removeLike = async () => {
    try {
      if (!supabase) {
        console.warn('Supabase not configured');
        return;
      }

      const clientIp = await getClientIp();

      const { error } = await supabase
        .from('giorgios_pizza_likes')
        .delete()
        .eq('pizza_id', pizzaId)
        .eq('ip_address', clientIp);

      if (error) throw error;

      // Remover de AsyncStorage
      const localLikes = await AsyncStorage.getItem('giorgios_liked_pizzas');
      const likedPizzas = localLikes ? JSON.parse(localLikes) : [];
      const updatedLikes = likedPizzas.filter((id: string) => id !== pizzaId);
      await AsyncStorage.setItem('giorgios_liked_pizzas', JSON.stringify(updatedLikes));

      setHasLiked(false);
      setLikes(prev => prev - 1);
    } catch (error) {
      console.error('Error removing like:', error);
    }
  };

  const getClientIp = async (): Promise<string> => {
    try {
      // En web podemos obtener la IP
      if (typeof window !== 'undefined') {
        // Intentar obtener IP real (esto funciona en Vercel)
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
      }
      // Fallback para desarrollo
      return 'local-dev';
    } catch (error) {
      // Si falla, usar un identificador único basado en dispositivo
      let deviceId = await AsyncStorage.getItem('giorgios_device_id');
      if (!deviceId) {
        deviceId = `device-${Date.now()}-${Math.random()}`;
        await AsyncStorage.setItem('giorgios_device_id', deviceId);
      }
      return deviceId;
    }
  };

  return {
    likes,
    hasLiked,
    loading,
    toggleLike,
  };
}
