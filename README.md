# 🚀 Dev HUB SENATI

> **Portal Colaborativo de Recursos Tecnológicos y Herramientas de Programación**  
> Proyecto desarrollado por estudiantes de Tecnologías de la Información / ETI de **SENATI**.

---

## 📋 Descripción del Proyecto
**Dev HUB SENATI** es una plataforma web interactiva y moderna diseñada para centralizar, categorizar y facilitar el acceso a recursos tecnológicos, librerías, documentación oficial y herramientas esenciales para el aprendizaje de programación y desarrollo de software.

---

## 🛠️ Tecnologías Empleadas
- **HTML5**: Estructura semántica, accesibilidad y metadatos SEO.
- **CSS3 Moderno**: CSS Grid, Flexbox, Variables CSS personalizadas, soporte de modo oscuro/claro (Dark/Light mode) y diseño 100% responsive (móvil, tablet y PC).
- **JavaScript (ES6+)**: Lógica reactiva para catálogo dinámico, buscador en tiempo real, filtrado por tecnología, modales interactivos y persistencia con `localStorage`.
- **Git & GitHub**: Control de versiones colaborativo con ramas de funcionalidad y Pull Requests.

---

## ✨ Características Obligatorias Implementadas

| N° | Requerimiento | Estado | Detalle de Implementación |
|:--:|:---|:---:|:---|
| **1** | **Página de Inicio** | ✅ | Hero section moderno con nombre del portal, descripción, badges, métricas dinámicas y menú de navegación fijo sticky. |
| **2** | **Catálogo de Recursos** | ✅ | 12 recursos tecnológicos completos (Frontend, Backend, Bases de Datos, Herramientas, IA y Docs) superando el mínimo de seis. |
| **3** | **Filtrado por Categorías** | ✅ | Botones interactivos con contadores que filtran en tiempo real los recursos mediante JavaScript. |
| **4** | **Buscador en Tiempo Real** | ✅ | Input dinámico con detección de pulsaciones de teclas para buscar por título, tags, descripción y categoría. |
| **5** | **Diseño Adaptable (Responsive)** | ✅ | Totalmente adaptable a computadoras de escritorio, laptops, tablets y smartphones con menú hamburguesa. |
| **6** | **Interactividad Completa** | ✅ | Ventana modal con información detallada de cada recurso, copia de enlaces al portapapeles con notificaciones Toast, selector de favoritos y modo oscuro/claro. |
| **7** | **Información del Equipo** | ✅ | Tarjetas con nombres de los integrantes, especialidad, responsabilidades detalladas y rama de Git asignada. |

---

## 👥 Equipo de Desarrollo y Responsabilidades

| Integrante | Rol / Especialidad | Responsabilidades Asignadas | Rama de Git |
|:---|:---|:---|:---|
| **Jose Guisado** | Líder Técnico & Arquitectura | Configuración inicial del repositorio, estructura HTML semántica, reglas de colaboración y revisión de PRs. | `feature/inicio-arquitectura` |
| **Integrante 2** | Diseñador UI/UX & CSS | Paleta de colores SENATI/Tech, diseño responsive con CSS Grid/Flexbox, tipografía y switch modo oscuro/claro. | `feature/estilos-responsive` |
| **Integrante 3** | Desarrollador Frontend JS | Lógica del motor de búsqueda en tiempo real, dataset de recursos y filtrado dinámico por categorías. | `feature/buscador-filtros` |
| **Integrante 4** | Interactividad & QA | Modales de detalles, notificaciones Toast, sistema de favoritos con LocalStorage y pruebas de compatibilidad. | `feature/interactividad-modales` |

---

## 🌿 Flujo de Trabajo en Git (Buenas Prácticas)

### 1. Convención de Ramas
Nadie sube código directamente a `main`. Cada miembro crea una rama derivada para su tarea:
```bash
# Crear y moverse a su rama de trabajo
git checkout -b feature/nombre-de-la-funcionalidad
```

### 2. Commits Descriptivos (Conventional Commits)
Se deben redactar mensajes claros que describan exactamente qué se añadió o corrigió:
- `feat: agregar buscador en tiempo real para recursos de programación`
- `style: implementar paleta de colores y modo oscuro en css`
- `docs: actualizar documentación de integrantes y responsabilidades`
- `fix: corregir evento de cierre del modal en dispositivos móviles`

### 3. Flujo para Subir Cambios y Crear un Pull Request (PR)
```bash
# 1. Agregar cambios al área de preparación
git add .

# 2. Confirmar los cambios con un mensaje descriptivo
git commit -m "feat: agregar catálogo dinámico con 12 recursos"

# 3. Subir la rama a GitHub
git push -u origin feature/nombre-de-la-funcionalidad
```

### 4. Solicitud de Integración (Pull Request) en GitHub
1. Ingresar al repositorio en GitHub: [HUB_SENATI](https://github.com/JoseGuisadoNuevo87762/HUB_SENATI).
2. Hacer clic en el botón verde **Compare & pull request**.
3. Describir los cambios realizados y solicitar la revisión al Líder Técnico.
4. Una vez revisado y aprobado, se realiza el **Merge pull request** a la rama principal `main`.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JoseGuisadoNuevo87762/HUB_SENATI.git
   ```
2. Entra a la carpeta del proyecto:
   ```bash
   cd HUB_SENATI
   ```
3. Abre el archivo `index.html` en tu navegador web preferido (Google Chrome, Edge, Firefox) o utiliza la extensión **Live Server** de Visual Studio Code.

---

© 2026 **Dev HUB SENATI** - Formando a los profesionales del futuro.
