# Ecommerce Boutique (React + Vite + TypeScript)

Proyecto base para un catálogo de e-commerce que sigue una separación inspirada en MVC: **models** para los tipos de dominio, **services** para la fuente de datos, **controllers** para construir view models y **views** para los componentes de interfaz.

## Scripts disponibles

- `npm install` para instalar dependencias
- `npm run dev` para el servidor de desarrollo
- `npm run build` para generar la build de producción
- `npm run preview` para revisar la build
- `npm run lint` para validar el estilo de código

## Estructura

- `src/models`: Tipos de datos del dominio (productos, promociones).
- `src/services`: Capa de acceso a datos o integraciones. Actualmente usa datos mock.
- `src/controllers`: Orquestación que convierte datos en view models listos para la UI.
- `src/views`: Componentes de UI divididos por layouts, páginas y componentes reutilizables.
- `src/styles`: Variables de tema y estilos globales.

El diseño es modular y listo para añadir una capa de carrito o nuevas páginas sin romper las responsabilidades.
