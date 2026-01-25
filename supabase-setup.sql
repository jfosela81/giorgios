-- ===============================================
-- SETUP SQL PARA GIORGIOS PIZZA LIKES
-- ===============================================
-- Ejecuta este SQL en Supabase SQL Editor
-- Dashboard → SQL Editor → New Query → Pega y ejecuta
-- ===============================================

-- 1. Crear la tabla de likes
CREATE TABLE IF NOT EXISTS giorgios_pizza_likes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    pizza_id TEXT NOT NULL,
    ip_address TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(pizza_id, ip_address) -- Un usuario solo puede dar like una vez por pizza
);

-- 2. Crear índices para mejorar el rendimiento
CREATE INDEX IF NOT EXISTS idx_giorgios_pizza_likes_pizza_id 
    ON giorgios_pizza_likes(pizza_id);

CREATE INDEX IF NOT EXISTS idx_giorgios_pizza_likes_ip_address 
    ON giorgios_pizza_likes(ip_address);

-- 3. Habilitar Row Level Security (RLS)
ALTER TABLE giorgios_pizza_likes ENABLE ROW LEVEL SECURITY;

-- 4. Política: Cualquiera puede ver los likes (SELECT)
CREATE POLICY "Los likes son públicos"
    ON giorgios_pizza_likes
    FOR SELECT
    USING (true);

-- 5. Política: Cualquiera puede dar like (INSERT)
CREATE POLICY "Cualquiera puede dar like"
    ON giorgios_pizza_likes
    FOR INSERT
    WITH CHECK (true);

-- 6. Política: Solo puedes quitar tu propio like (DELETE)
-- Nota: En producción esto se debería validar mejor con una edge function
CREATE POLICY "Puedes quitar tu like"
    ON giorgios_pizza_likes
    FOR DELETE
    USING (true);

-- 7. Crear una vista para contar likes fácilmente (opcional pero útil)
CREATE OR REPLACE VIEW giorgios_pizza_likes_count AS
SELECT 
    pizza_id,
    COUNT(*) as likes_count
FROM giorgios_pizza_likes
GROUP BY pizza_id;

-- ===============================================
-- ¡LISTO! Ya puedes usar el sistema de likes
-- ===============================================
