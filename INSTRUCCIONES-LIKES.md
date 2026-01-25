# 🍕 Sistema de Likes - Instrucciones de Setup

## 📋 Paso 1: Ejecutar SQL en Supabase

1. Ve a tu proyecto Supabase: https://ovvgzvsuuljtwljkbysd.supabase.co
2. Navega a: **SQL Editor** (en el menú lateral)
3. Haz clic en **"New Query"**
4. Abre el archivo `supabase-setup.sql` que está en la raíz del proyecto
5. **Copia todo el contenido** del archivo SQL
6. **Pégalo** en el SQL Editor de Supabase
7. Haz clic en **"Run"** (o presiona Cmd/Ctrl + Enter)
8. Deberías ver: ✅ "Success. No rows returned"

## 🔍 Paso 2: Verificar que se creó correctamente

1. Ve a: **Table Editor** (en el menú lateral de Supabase)
2. Deberías ver una nueva tabla llamada: `giorgios_pizza_likes`
3. Haz clic en ella para ver su estructura

## 🚀 Paso 3: Probar la app

1. **Reinicia el servidor de desarrollo:**
   ```bash
   # Detén el servidor (Ctrl+C)
   npm start
   ```

2. **Abre la app en tu navegador**

3. **Prueba el sistema:**
   - Entra a cualquier pizza
   - Verás un botón con un corazón blanco 🤍 y "0 me gusta"
   - Haz clic en el botón → se pone rojo ❤️ y el contador aumenta
   - Vuelve a hacer clic → se quita el like
   - Cierra y abre la app → el like debería persistir

## 🎨 ¿Qué hace el sistema?

### Funcionalidad:
- ✅ Botón de "me gusta" en cada pizza
- ✅ Contador de likes visible
- ✅ Un usuario solo puede dar 1 like por pizza (detectado por IP)
- ✅ Los likes persisten en Supabase
- ✅ También se guardan en localStorage como backup
- ✅ Animación al hacer clic

### Prevención de votos múltiples:
- Por **IP del usuario** (en producción en Vercel)
- Por **localStorage** (como backup)
- Por **constraint en base de datos** (UNIQUE)

## 🐛 Troubleshooting

### ❌ Error al dar like
- Verifica que ejecutaste el SQL correctamente
- Revisa la consola del navegador (F12)
- Verifica las credenciales de Supabase en `.env.local`

### ❌ Los likes no se guardan
- Asegúrate de que Supabase está corriendo
- Verifica que las políticas RLS se crearon (en SQL)
- Mira los logs en: Supabase Dashboard → Logs

### ❌ Página en blanco
- Reinicia el servidor de desarrollo
- Limpia la caché del navegador (Cmd/Ctrl + Shift + R)

## 📊 Ver estadísticas en Supabase

Para ver qué pizzas tienen más likes:

1. Ve a **SQL Editor** en Supabase
2. Ejecuta:
   ```sql
   SELECT * FROM giorgios_pizza_likes_count 
   ORDER BY likes_count DESC;
   ```

## 🎯 Próximos pasos (opcional)

- [ ] Añadir ranking de pizzas más gustadas en el menú
- [ ] Animación más elaborada al dar like
- [ ] Sistema de comentarios
- [ ] Compartir pizza favorita en redes sociales
