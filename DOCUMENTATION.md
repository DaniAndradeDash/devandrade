# Documentación del Proyecto: DevAndrade

Este documento detalla la estructura, funcionamiento y mantenimiento del sitio web de portafolio DevAndrade.

## Tabla de Contenidos
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Sección de Proyectos](#sección-de-proyectos)
3. [Cómo agregar o editar proyectos](#cómo-agregar-o-editar-proyectos)

---

## Estructura del Proyecto

El proyecto está construido con **React**, **Vite** y **Tailwind CSS**.

- `/src/components/`: Componentes reutilizables de UI.
- `/src/components/sections/`: Secciones principales del sitio (Hero, Portfolio, Skills, etc.).
- `/src/pages/`: Páginas completas.
- `/src/lib/`: Utilidades.

---

## Sección de Proyectos

La sección de proyectos se encuentra en `/src/components/sections/PortfolioSection.jsx`.

Esta sección utiliza un array de objetos para definir los proyectos mostrados en la cuadrícula.

---

## Cómo agregar o editar proyectos

Para gestionar los proyectos del portafolio, debes editar el archivo `/src/components/sections/PortfolioSection.jsx`.

### Ubicación del código
Busca la constante `projects` dentro del componente `PortfolioSection`.

### Estructura de un Proyecto
Cada objeto en el array `projects` tiene la siguiente estructura:

```javascript
{
  id: 1, // Identificador único (número)
  title: 'Título del Proyecto',
  description: 'Descripción breve del proyecto.',
  image: 'URL_DE_LA_IMAGEN',
  technologies: ['React', 'Next.js', 'Tailwind'], // Array de etiquetas de tecnologías
  link: 'https://ejemplo.com/tu-proyecto' // Enlace al proyecto
},
```

### Pasos para Editar/Agregar
1. **Editar:** Localiza el objeto con el `id` correspondiente y modifica los campos (`title`, `description`, `image`, `technologies`, `link`).
2. **Agregar:** Copia un objeto existente y añádelo dentro del array `projects`, asegurándote de darle un `id` único.
3. **Guardar:** Guarda el archivo y el componente se actualizará automáticamente (gracias a Vite).

> **Nota:** Si no agregas un enlace (`link`), al hacer clic en el proyecto se mostrará una notificación indicando que está "En desarrollo".
