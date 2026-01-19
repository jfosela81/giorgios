import { ScrollViewStyleReset } from 'expo-router/html';
import { type PropsWithChildren } from 'react';

export default function Root({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no" />
        
        {/* PWA Meta Tags */}
        <meta name="theme-color" content="#8B4513" />
        <meta name="description" content="Pizzas artesanales hechas con amor - Carta digital de Giorgio's" />
        
        {/* Apple Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Giorgio's" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        <ScrollViewStyleReset />
      </head>
      <body>{children}</body>
    </html>
  );
}
