# 🚀 Dev HUB SENATI

> **Portal Web Centralizado de Recursos Tecnológicos y Herramientas de Programación**  
> Proyecto formativo colaborativo desarrollado para la carrera de **Tecnologías de la Información / Desarrollo de Software** de **SENATI**.

[![GitHub Pages](https://img.shields.io/badge/Despliegue-GitHub%20Pages-00d2ff?style=for-the-badge&logo=github)](https://github.com/JeffersonGTSENATI02/HUB_SENATI.git)
[![Licencia](https://img.shields.io/badge/Licencia-Educativa%20SENATI-005691?style=for-the-badge)](LICENSE)
[![Código Abierto](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-10b981?style=for-the-badge)](INDEX.html)

---

## 🎯 Problemática y Solución del Sistema

### 1. La Problemática
Durante su proceso de formación, los estudiantes de desarrollo de software se enfrentan a un ecosistema tecnológico saturado y disperso: documentación no estandarizada, cientos de librerías en foros independientes, herramientas desactualizadas y enlaces rotos distribuidos por internet. Esta dispersión genera pérdida de tiempo productivo, dificultades para resolver errores de código y falta de un criterio unificado en las entregas de proyectos académicos.

### 2. La Solución: Dev HUB SENATI
**Dev HUB SENATI** resuelve esta problemática ofreciendo una plataforma web intuitiva, colaborativa y con estética *"Dark Tech"* que centraliza recursos tecnológicos curados (Frontend, Backend, Herramientas, Documentación y Comunidad). El portal permite a los alumnos explorar tecnologías, realizar búsquedas predictivas en tiempo real, filtrar por categorías y acceder de inmediato a la documentación y repositorios oficiales.

---

## 👥 Equipo de Desarrollo y Responsabilidades

El proyecto ha sido construido de manera colaborativa bajo la metodología de trabajo en equipo de SENATI, donde cada estudiante lideró un área técnica clave:

| N° | Estudiante | Rol Oficial / Especialidad | Responsabilidades Asignadas | Rama Git |
|:--:|:---|:---|:---|:---|
| **1** | **García García, Luis Gonzalo** | **Catálogo de Recursos & Filtrado** | • Curaduría técnica del catálogo (12 recursos completos).<br>• Lógica de filtrado dinámico en el DOM con atributos `data-category`.<br>• Conteo reactivo de recursos por categorías con insignias en tiempo real. | `feature/catalogo-filtros` |
| **2** | **Pariona Cosi, Natalie Alexsandra** | **Página de Inicio & UI Base** | • Maquetación del Header fijo/sticky con transición al hacer scroll (`.scrolled`) y Glassmorphism.<br>• Navbar accesible con menú hamburguesa responsivo y accesibilidad ARIA.<br>• Hero Section con título tipográfico de impacto, solución a la dispersión de herramientas, métricas y mockup de consola de código.<br>• Definición del sistema de diseño y paleta Dark Tech (`#0a0f1d`, `#111827`, `#005691`, `#00d2ff`). | `pariona-dev-v2` |
| **3** | **Reynaga Aro, Miguel Ángel** | **Buscador & Interactividad JS** | • Motor de búsqueda en tiempo real sobre títulos, descripciones y tags.<br>• Manejo dinámico del Estado Vacío (*Empty State*) con botón de restablecimiento.<br>• Ventana modal con información detallada de uso práctico en SENATI.<br>• Sistema de notificaciones Toast dinámicas y persistencia de favoritos con `localStorage`. | `feature/buscador-interactividad` |
| **4** | **Trujillo Grados, Jefferson Silvio Eduardo** | **Responsive, QA & GitHub Pages** | • Adaptación 100% responsiva con CSS Grid, Flexbox y media queries (`@media (max-width: 768px)`).<br>• Pruebas de compatibilidad multidispositivo y validación de estándares W3C.<br>• Configuración del repositorio y pipeline de despliegue continuo en GitHub Pages. | `feature/responsive-testing-deploy` |

---

## 🛠️ Especificaciones Técnicas y Arquitectura

El proyecto cumple con los más altos estándares de desarrollo frontend nativo sin librerías ni frameworks externos:

1. **HTML5 Semántico y Accesible**:
   - Estructuración limpia mediante etiquetas semánticas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
   - Atributos ARIA (`aria-expanded`, `aria-label`, `aria-controls`, `aria-live`, `aria-modal`) para máxima inclusión digital.
   - Identificadores clave estandarizados: `#inicio`, `#recursos`, `#categorias`, `#buscador`, `#equipo`.

2. **CSS3 Nativo con Estética "Dark Tech"**:
   - Paleta cromática oficial:
     * Fondos: `#0a0f1d` (principal), `#111827` (tarjetas), `#1e293b` (hover).
     * Acentos: Azul institucional SENATI modernizado (`#005691`), Cyan brillante (`#00d2ff`) y degradado `linear-gradient(135deg, #00d2ff, #005691)`.
     * Textos: Blanco `#f8fafc` y gris neutro `#94a3b8`.
   - Efecto Glassmorphism con `backdrop-filter: blur(12px)`.
   - Header dinámico: agrega clase `.scrolled` al desplazar la página hacia abajo.
   - Totalmente responsivo para teléfonos inteligentes, tablets, laptops y pantallas 4K.

3. **JavaScript Vanilla (ES6+) Modular**:
   - Lógica modularizada bajo el evento `DOMContentLoaded`.
   - Funciones desacopladas obligatorias:
     * `initNavbar()`: Menú móvil, detector de scroll con `.scrolled` y bloqueo de scroll de fondo.
     * `renderResources(filter, query)`: Renderizado reactivo de tarjetas dinámicas con enlaces funcionales.
     * `initFilters()`: Filtrado reactivo al pulsar botones de categoría con clase `.active`.
     * `initSearch()`: Búsqueda predictiva instantánea con evento `input` y manejo de *Empty State*.
     * `showToast(message, type)`: Retroalimentación visual inmediata tras interactuar con la interfaz.
   - Persistencia de favoritos y tema con la API de `localStorage`.

---

## 🌿 Flujo de Trabajo en Git y Buenas Prácticas Colaborativas

Para garantizar una integración continua sin conflictos de código en el equipo, se adoptó el siguiente estándar:

### 1. Convención de Ramas
La rama principal `main` siempre permanece estable y lista para producción. Ningún integrante sube cambios directamente a `main`. Cada miembro crea su propia rama con el prefijo correspondiente:

```bash
# Ejemplo: cambiar a la rama de desarrollo de inicio y navbar
git checkout -b na-pariona-dev4
```

### 2. Formato de Commits Descriptivos (Conventional Commits)
Cada commit debe explicar el valor agregado al repositorio:
- `feat: implementar header con glassmorphism y navbar responsivo`
- `style: integrar paleta dark tech senati y variables css3`
- `fix: corregir visibilidad del empty state en busquedas sin resultados`
- `docs: actualizar tabla de responsabilidades y guia de despliegue`

### 3. Procedimiento para Subir Cambios y Crear un Pull Request (PR)
```bash
# 1. Verificar los archivos modificados
git status

# 2. Añadir los cambios al área de preparación (stage)
git add .

# 3. Registrar el commit descriptivo
git commit -m "feat: culminar pagina de inicio, catalogo y sistema responsivo"

# 4. Enviar la rama al repositorio remoto en GitHub
git push -u origin na-pariona-dev4
```

### 4. Revisión de Código y Merge
1. Ingresar al repositorio en GitHub: [https://github.com/JeffersonGTSENATI02/HUB_SENATI.git]
2. Hacer clic en **Compare & pull request**.
3. Describir las funciones incorporadas y asignar como revisor al líder técnico.
4. Tras la aprobación de las pruebas de QA, realizar el **Merge pull request** hacia la rama `main`.

---

## 💻 Instrucciones para Ejecución Local

Para visualizar y trabajar en el proyecto desde tu computadora:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/JeffersonGTSENATI02/HUB_SENATI.git
   ```

2. **Visualizar la aplicación**:
   - **Opción A (Recomendada)**: Clic derecho sobre `INDEX.html` y seleccionar **"Open with Live Server"** (en VS Code).
   - **Opción B**: Hacer doble clic directamente sobre el archivo `INDEX.html` para abrirlo en cualquier navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Brave).

---

## 🌐 Despliegue en GitHub Pages

La plataforma está configurada para alojarse de forma gratuita y pública mediante **GitHub Pages**:

1. En el repositorio de GitHub, navegar a **Settings** > **Pages**.
2. En la sección **Branch**, seleccionar la rama `main` y la carpeta `/ (root)`.
3. Hacer clic en **Save**.
4. En cuestión de minutos, el portal estará en línea en la URL oficial:
   👉 **`https://github.com/JeffersonGTSENATI02/HUB_SENATI.git`**

---

## 📚 Estructura de Archivos del Proyecto

```text
HUB_SENATI/
├── INDEX.html          # Estructura semántica HTML5, metadatos y secciones del portal
├── css/
│   └── style.css       # Sistema de diseño Dark Tech, variables, Grid y media queries
├── js/
│   └── app.js          # Dataset de recursos, lógica de filtros, buscador y modales
└── README.md           # Documentación técnica completa y guía de contribución
```

---

© 2026 **Dev HUB SENATI** - Desarrollado por estudiantes de SENATI con fines educativos y de contribución a la comunidad técnica nacional.
