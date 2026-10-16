/**
 * ==========================================================
 * DEV HUB SENATI - LÓGICA DE INTERACCIÓN, BÚSQUEDA Y FILTRADO
 * Tecnologías: JavaScript ES6+ Modular y Reactivo
 * ==========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DATASET DE RECURSOS DE PROGRAMACIÓN (MÁS DE 6 RECURSOS CURADOS)
  const resourcesData = [
    {
      id: 1,
      title: 'MDN Web Docs',
      category: 'frontend',
      categoryName: 'Frontend / Docs',
      icon: 'fa-brands fa-firefox-browser',
      iconClass: 'cat-frontend',
      description: 'La biblia de referencia técnica para HTML5, CSS3 y JavaScript moderno con guías, estándares W3C y ejemplos interactivos.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs'],
      url: 'https://developer.mozilla.org/es/',
      useCase: 'Fundamental en SENATI para dominar la base de maquetación semántica y consultas de especificaciones oficiales de JavaScript sin depender de tutoriales desactualizados.'
    },
    {
      id: 2,
      title: 'React.js',
      category: 'frontend',
      categoryName: 'Frontend',
      icon: 'fa-brands fa-react',
      iconClass: 'cat-frontend',
      description: 'Librería líder de JavaScript basada en componentes para construir interfaces de usuario reactivas, declarativas y de alto rendimiento.',
      tags: ['React', 'JSX', 'Hooks', 'Single Page Apps'],
      url: 'https://react.dev/',
      useCase: 'Requisito principal en el mercado laboral peruano y proyectos avanzados del ciclo de formación en desarrollo de software.'
    },
    {
      id: 3,
      title: 'Node.js',
      category: 'backend',
      categoryName: 'Backend',
      icon: 'fa-brands fa-node-js',
      iconClass: 'cat-backend',
      description: 'Entorno de ejecución multiplataforma para JavaScript en el servidor basado en el motor V8 de Google Chrome.',
      tags: ['Node.js', 'Express', 'APIs REST', 'JavaScript Server'],
      url: 'https://nodejs.org/es',
      useCase: 'Permite a los estudiantes programar tanto el frontend como el backend con un único lenguaje unificado (JavaScript), simplificando el aprendizaje.'
    },
    {
      id: 4,
      title: 'Python Software',
      category: 'backend',
      categoryName: 'Backend',
      icon: 'fa-brands fa-python',
      iconClass: 'cat-backend',
      description: 'Lenguaje de programación versátil, legible y poderoso utilizado ampliamente en desarrollo backend, scripting, ciencia de datos e IA.',
      tags: ['Python', 'FastAPI', 'Django', 'Automatización'],
      url: 'https://www.python.org/',
      useCase: 'Excelente para cursos de fundamentos de algoritmos, microservicios backend y proyectos de automatización en SENATI.'
    },
    {
      id: 5,
      title: 'PostgreSQL',
      category: 'database',
      categoryName: 'Bases de Datos',
      icon: 'fa-solid fa-database',
      iconClass: 'cat-database',
      description: 'El sistema de gestión de base de datos relacional y orientado a objetos de código abierto más avanzado y confiable del mundo.',
      tags: ['SQL', 'Relacional', 'ACID', 'JSON Support'],
      url: 'https://www.postgresql.org/',
      useCase: 'Estándar para las prácticas de modelado de datos relacionales, procedimientos almacenados y transacciones seguras en laboratorios de software.'
    },
    {
      id: 6,
      title: 'Supabase (BaaS)',
      category: 'database',
      categoryName: 'Bases de Datos',
      icon: 'fa-solid fa-bolt',
      iconClass: 'cat-database',
      description: 'Alternativa open source a Firebase que proporciona Base de datos Postgres en tiempo real, autenticación, almacenamiento y APIs instantáneas.',
      tags: ['PostgreSQL', 'Auth', 'Realtime', 'Cloud DB'],
      url: 'https://supabase.com/',
      useCase: 'Ideal para que los alumnos de SENATI desplieguen proyectos integradores completos sin necesidad de configurar infraestructura de servidores compleja.'
    },
    {
      id: 7,
      title: 'Git & GitHub',
      category: 'tools',
      categoryName: 'Herramientas',
      icon: 'fa-brands fa-git-alt',
      iconClass: 'cat-tools',
      description: 'Sistema de control de versiones distribuido y plataforma en la nube para hospedar repositorios, colaborar en equipo y gestionar Pull Requests.',
      tags: ['Git', 'GitHub', 'CI/CD', 'Open Source'],
      url: 'https://git-scm.com/',
      useCase: 'Competencia técnica obligatoria en SENATI para entrega de proyectos colaborativos, control de cambios y portafolio profesional en GitHub.'
    },
    {
      id: 8,
      title: 'Visual Studio Code',
      category: 'tools',
      categoryName: 'Herramientas',
      icon: 'fa-solid fa-code',
      iconClass: 'cat-tools',
      description: 'Editor de código fuente ligero, rápido y altamente extensible con soporte integrado para depuración, Git y miles de extensiones.',
      tags: ['Editor', 'Extensiones', 'IntelliSense', 'Microsoft'],
      url: 'https://code.visualstudio.com/',
      useCase: 'El entorno de desarrollo estándar recomendado y utilizado en todas las aulas y laboratorios de cómputo de SENATI.'
    },
    {
      id: 9,
      title: 'Postman API Platform',
      category: 'tools',
      categoryName: 'Herramientas',
      icon: 'fa-solid fa-paper-plane',
      iconClass: 'cat-tools',
      description: 'Plataforma líder para diseñar, probar, simular y documentar APIs REST y GraphQL de manera interactiva.',
      tags: ['APIs', 'Testing', 'HTTP', 'Documentación'],
      url: 'https://www.postman.com/',
      useCase: 'Permite probar los endpoints y respuestas JSON de las APIs construidas en las prácticas antes de conectarlas a la interfaz web.'
    },
    {
      id: 10,
      title: 'ChatGPT & OpenAI Docs',
      category: 'ai',
      categoryName: 'IA & Docs',
      icon: 'fa-solid fa-brain',
      iconClass: 'cat-ai',
      description: 'Herramientas y APIs de Inteligencia Artificial generativa para asistencia en depuración de código, refactorización y documentación técnica.',
      tags: ['Inteligencia Artificial', 'Prompt Engineering', 'Productividad'],
      url: 'https://platform.openai.com/docs',
      useCase: 'Asistente de estudio para comprender errores de compilación, generar casos de prueba y acelerar el aprendizaje de nuevas sintaxis.'
    },
    {
      id: 11,
      title: 'Tailwind CSS',
      category: 'frontend',
      categoryName: 'Frontend',
      icon: 'fa-solid fa-wind',
      iconClass: 'cat-frontend',
      description: 'Framework CSS orientado a utilidades que permite construir rápidamente interfaces personalizadas sin salir de tu HTML.',
      tags: ['CSS', 'Utilidades', 'Responsive', 'Diseño Moderno'],
      url: 'https://tailwindcss.com/',
      useCase: 'Acelera el desarrollo visual de maquetas responsive durante hackathons y proyectos de fin de módulo.'
    },
    {
      id: 12,
      title: 'Roadmap.sh',
      category: 'ai',
      categoryName: 'IA & Docs',
      icon: 'fa-solid fa-map-location-dot',
      iconClass: 'cat-ai',
      description: 'Rutas de aprendizaje interactivas guiadas por la comunidad internacional para Frontend, Backend, DevOps, Ciberseguridad y más.',
      tags: ['Guías', 'Roadmaps', 'Carrera Tech', 'Autodidacta'],
      url: 'https://roadmap.sh/',
      useCase: 'Brinda una visión clara de qué habilidades aprender paso a paso para insertarse con éxito en la industria de la tecnología.'
    }
  ];

  // 2. ESTADO GLOBAL DE LA APLICACIÓN
  let currentCategory = 'todos';
  let searchTerm = '';
  let favorites = JSON.parse(localStorage.getItem('devhub_senati_favs') || '[]');

  // 3. ELEMENTOS DEL DOM
  const resourcesGrid = document.getElementById('resources-grid');
  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const emptyState = document.getElementById('empty-state');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const resultsCount = document.getElementById('results-count');
  const totalResourcesStat = document.getElementById('total-resources-stat');
  const themeToggle = document.getElementById('theme-toggle');
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const randomBtn = document.getElementById('random-btn');
  const toastContainer = document.getElementById('toast-container');

  // Elementos del Modal
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalIcon = document.getElementById('modal-icon');
  const modalCategory = document.getElementById('modal-category');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalUseCase = document.getElementById('modal-usecase');
  const modalTags = document.getElementById('modal-tags');
  const modalCopyBtn = document.getElementById('modal-copy-btn');
  const modalLinkBtn = document.getElementById('modal-link-btn');
  let currentActiveResource = null;

  // 4. INICIALIZACIÓN
  initTheme();
  updateCategoryBadges();
  renderResources();

  if (totalResourcesStat) {
    totalResourcesStat.textContent = `${resourcesData.length}+`;
  }

  // 5. FUNCIÓN DE RENDERIZADO DE TARJETAS
  function renderResources() {
    const filtered = resourcesData.filter(item => {
      const matchesCategory = currentCategory === 'todos' || item.category === currentCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch = 
        !term ||
        item.title.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.tags.some(tag => tag.toLowerCase().includes(term)) ||
        item.categoryName.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });

    // Actualizar contador
    if (resultsCount) {
      resultsCount.textContent = `Mostrando ${filtered.length} de ${resourcesData.length} recursos disponibles`;
    }

    // Manejo de estado vacío
    if (filtered.length === 0) {
      resourcesGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    // Inyectar HTML dinámico de las tarjetas
    resourcesGrid.innerHTML = filtered.map(item => {
      const isFav = favorites.includes(item.id);
      return `
        <article class="resource-card" data-id="${item.id}">
          <div class="card-top">
            <div class="card-icon-wrapper ${item.iconClass}">
              <i class="${item.icon}"></i>
            </div>
            <div class="card-actions">
              <button class="btn-favorite ${isFav ? 'active' : ''}" 
                      data-fav-id="${item.id}" 
                      title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
                      aria-label="Marcar como favorito">
                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
            </div>
          </div>
          
          <span class="card-category-badge">${item.categoryName}</span>
          <h3 class="card-title">${escapeHTML(item.title)}</h3>
          <p class="card-description">${escapeHTML(item.description)}</p>

          <div class="card-tags">
            ${item.tags.map(tag => `<span class="tag-pill">${escapeHTML(tag)}</span>`).join('')}
          </div>

          <div class="card-footer">
            <button class="btn btn-secondary btn-sm view-details-btn" data-detail-id="${item.id}">
              <i class="fa-solid fa-circle-info"></i> Detalles
            </button>
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir
            </a>
          </div>
        </article>
      `;
    }).join('');

    // Reasignar eventos a los nuevos botones generados
    attachCardEvents();
  }

  // 6. EVENTOS DE LAS TARJETAS (DETALLES Y FAVORITOS)
  function attachCardEvents() {
    // Abrir detalles
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-detail-id'), 10);
        openDetailsModal(id);
      });
    });

    // Guardar / Quitar Favorito
    document.querySelectorAll('.btn-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-fav-id'), 10);
        toggleFavorite(id);
      });
    });
  }

  // 7. FAVORITOS CON LOCALSTORAGE
  function toggleFavorite(id) {
    const resource = resourcesData.find(r => r.id === id);
    if (!resource) return;

    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
      showToast(`"${resource.title}" eliminado de tus favoritos`, 'info');
    } else {
      favorites.push(id);
      showToast(`¡"${resource.title}" añadido a tus favoritos!`, 'success');
    }

    localStorage.setItem('devhub_senati_favs', JSON.stringify(favorites));
    renderResources();
  }

  // 8. BUSCADOR EN TIEMPO REAL
  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    if (searchTerm.trim().length > 0) {
      clearSearchBtn.classList.remove('hidden');
    } else {
      clearSearchBtn.classList.add('hidden');
    }
    renderResources();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    clearSearchBtn.classList.add('hidden');
    searchInput.focus();
    renderResources();
  });

  // 9. FILTRADO POR CATEGORÍAS
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderResources();
    });
  });

  // Botón restablecer filtros en estado vacío
  resetFiltersBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchTerm = '';
    clearSearchBtn.classList.add('hidden');
    currentCategory = 'todos';
    filterBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-category') === 'todos');
    });
    renderResources();
    showToast('Filtros restablecidos', 'info');
  });

  // 10. RECURSO ALEATORIO
  randomBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * resourcesData.length);
    const randomResource = resourcesData[randomIndex];
    openDetailsModal(randomResource.id);
    showToast(`Explorando: ${randomResource.title}`, 'info');
  });

  // 11. CONTADORES EN LOS BOTONES DE FILTRO
  function updateCategoryBadges() {
    const counts = {
      todos: resourcesData.length,
      frontend: 0,
      backend: 0,
      database: 0,
      tools: 0,
      ai: 0
    };

    resourcesData.forEach(r => {
      if (counts[r.category] !== undefined) {
        counts[r.category]++;
      }
    });

    Object.keys(counts).forEach(cat => {
      const el = document.getElementById(`count-${cat}`);
      if (el) el.textContent = counts[cat];
    });
  }

  // 12. MODAL DE DETALLES INTERACTIVO
  function openDetailsModal(id) {
    const resource = resourcesData.find(r => r.id === id);
    if (!resource) return;

    currentActiveResource = resource;

    modalIcon.className = `modal-icon-badge ${resource.iconClass}`;
    modalIcon.innerHTML = `<i class="${resource.icon}"></i>`;
    modalCategory.textContent = resource.categoryName;
    modalTitle.textContent = resource.title;
    modalDescription.textContent = resource.description;
    modalUseCase.textContent = resource.useCase;
    modalLinkBtn.href = resource.url;

    modalTags.innerHTML = resource.tags
      .map(tag => `<span class="tag-pill">${escapeHTML(tag)}</span>`)
      .join('');

    modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  }

  function closeModal() {
    modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
    currentActiveResource = null;
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Copiar Enlace al portapapeles
  modalCopyBtn.addEventListener('click', () => {
    if (currentActiveResource && currentActiveResource.url) {
      navigator.clipboard.writeText(currentActiveResource.url)
        .then(() => {
          showToast(`¡Enlace de ${currentActiveResource.title} copiado!`, 'success');
        })
        .catch(() => {
          showToast('No se pudo copiar el enlace', 'info');
        });
    }
  });

  // 13. SISTEMA DE TOAST NOTIFICATIONS
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-info';

    toast.innerHTML = `
      <i class="${iconClass}"></i>
      <span>${escapeHTML(message)}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // 14. CAMBIAR TEMA CLARO / OSCURO (THEME SWITCHER)
  function initTheme() {
    const savedTheme = localStorage.getItem('devhub_senati_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('devhub_senati_theme', nextTheme);
    updateThemeIcon(nextTheme);
    showToast(`Tema ${nextTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`, 'info');
  });

  function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
      icon.className = 'fa-solid fa-sun';
      themeToggle.title = 'Cambiar a modo oscuro';
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggle.title = 'Cambiar a modo claro';
    }
  }

  // 15. MENÚ MÓVIL (HAMBURGER)
  menuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
    const icon = menuToggle.querySelector('i');
    if (isActive) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });

  // Cerrar menú al hacer click en enlaces
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });

  // 16. SEGURIDAD: ESCAPAR STRINGS HTML
  function escapeHTML(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
