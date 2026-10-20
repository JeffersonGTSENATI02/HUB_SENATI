/**
 * ==========================================================
 * DEV HUB SENATI - LÓGICA DE INTERACCIÓN, FILTRADO Y BÚSQUEDA
 * Portal Tecnológico Oficial de Recursos de Programación
 * Desarrollado con JavaScript Vanilla (ES6+) Modular y Reactivo
 * ==========================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // ---------------------------------------------------------
  // 1. DATASET DE RECURSOS TECNOLÓGICOS (12 RECURSOS CURADOS)
  // ---------------------------------------------------------
  const resourcesData = [
    {
      id: 1,
      title: 'MDN Web Docs',
      category: 'documentacion',
      categoryName: 'Documentación',
      icon: 'fa-brands fa-firefox-browser',
      iconClass: 'cat-documentacion',
      description: 'La documentación técnica estándar de la industria para HTML5, CSS3 y JavaScript moderno con guías oficiales, ejemplos interactivos y compatibilidad.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'W3C'],
      url: 'https://developer.mozilla.org/es/',
      useCase: 'Esencial para las clases de frontend en SENATI, evitando tutoriales desactualizados y consultando la especificación web oficial.'
    },
    {
      id: 2,
      title: 'GitHub & Git',
      category: 'herramientas',
      categoryName: 'Herramientas',
      icon: 'fa-brands fa-github',
      iconClass: 'cat-herramientas',
      description: 'Plataforma líder mundial de control de versiones y colaboración de código mediante Git. Permite gestionar repositorios, Pull Requests y GitHub Pages.',
      tags: ['Git', 'GitHub', 'CI/CD', 'Open Source', 'Deploy'],
      url: 'https://github.com/',
      useCase: 'Competencia técnica clave para la entrega colaborativa de proyectos de software y creación del portafolio profesional de los alumnos de SENATI.'
    },
    {
      id: 3,
      title: 'Visual Studio Code',
      category: 'herramientas',
      categoryName: 'Herramientas',
      icon: 'fa-solid fa-code',
      iconClass: 'cat-herramientas',
      description: 'El editor de código fuente más popular, ligero y extensible de Microsoft. Compatible con emmet, depurador integrado, terminal y extensiones como Live Server.',
      tags: ['Editor', 'VS Code', 'Extensiones', 'IntelliSense', 'Microsoft'],
      url: 'https://code.visualstudio.com/',
      useCase: 'El entorno de desarrollo integrado principal configurado en los laboratorios de cómputo de la carrera de Tecnologías de la Información en SENATI.'
    },
    {
      id: 4,
      title: 'Node.js',
      category: 'backend',
      categoryName: 'Backend',
      icon: 'fa-brands fa-node-js',
      iconClass: 'cat-backend',
      description: 'Entorno de ejecución multiplataforma para JavaScript en el servidor basado en el motor V8 de Google Chrome, ideal para APIs REST y microservicios.',
      tags: ['Node.js', 'Express', 'APIs REST', 'Backend', 'NPM'],
      url: 'https://nodejs.org/es',
      useCase: 'Permite unificar el aprendizaje de frontend y backend con un solo lenguaje (JavaScript) en los proyectos integradores de software.'
    },
    {
      id: 5,
      title: 'Frontend Mentor',
      category: 'frontend',
      categoryName: 'Frontend',
      icon: 'fa-solid fa-laptop-code',
      iconClass: 'cat-frontend',
      description: 'Plataforma de retos prácticos con diseños profesionales en Figma para maquetar interfaces reales con HTML semántico, CSS responsivo y JavaScript.',
      tags: ['Frontend', 'CSS Grid', 'Retos', 'Figma', 'Portafolio'],
      url: 'https://www.frontendmentor.io/',
      useCase: 'Excelente para que los estudiantes pongan a prueba sus habilidades de maquetación y construyan proyectos sólidos para sus CVs.'
    },
    {
      id: 6,
      title: 'Stack Overflow',
      category: 'comunidad',
      categoryName: 'Comunidad',
      icon: 'fa-brands fa-stack-overflow',
      iconClass: 'cat-comunidad',
      description: 'La mayor comunidad de preguntas y respuestas sobre programación y depuración de software a nivel mundial.',
      tags: ['Comunidad', 'Q&A', 'Debugging', 'Algoritmos', 'Soluciones'],
      url: 'https://stackoverflow.com/',
      useCase: 'Herramienta diaria de resolución de dudas técnicas, excepciones de consola y buenas prácticas en lenguajes de programación.'
    },
    {
      id: 7,
      title: 'React.js',
      category: 'frontend',
      categoryName: 'Frontend',
      icon: 'fa-brands fa-react',
      iconClass: 'cat-frontend',
      description: 'Librería frontend desarrollada por Meta para crear interfaces de usuario interactivas basadas en componentes reutilizables y estado reactivo.',
      tags: ['React', 'JSX', 'Hooks', 'Single Page Apps', 'Componentes'],
      url: 'https://react.dev/',
      useCase: 'Tecnología de alta demanda en el mercado peruano enseñada en los módulos avanzados de desarrollo de aplicaciones web.'
    },
    {
      id: 8,
      title: 'Python Software',
      category: 'backend',
      categoryName: 'Backend',
      icon: 'fa-brands fa-python',
      iconClass: 'cat-backend',
      description: 'Lenguaje de programación versátil, potente y de sintaxis limpia utilizado en backend (Django, FastAPI), scripts de automatización e Inteligencia Artificial.',
      tags: ['Python', 'FastAPI', 'Backend', 'Automatización', 'IA'],
      url: 'https://www.python.org/',
      useCase: 'Fundamental en los cursos de algoritmos, lógica de programación y primeros pasos en servicios web del plan de estudios de SENATI.'
    },
    {
      id: 9,
      title: 'PostgreSQL',
      category: 'backend',
      categoryName: 'Backend',
      icon: 'fa-solid fa-database',
      iconClass: 'cat-backend',
      description: 'El motor de base de datos relacional y orientado a objetos de código abierto más avanzado, robusto y confiable del mundo empresarial.',
      tags: ['SQL', 'PostgreSQL', 'Base de Datos', 'ACID', 'Consultas'],
      url: 'https://www.postgresql.org/',
      useCase: 'Utilizado en los laboratorios de bases de datos para diseño de diagramas entidad-relación, consultas complejas y procedimientos almacenados.'
    },
    {
      id: 10,
      title: 'Supabase (BaaS)',
      category: 'backend',
      categoryName: 'Backend',
      icon: 'fa-solid fa-bolt',
      iconClass: 'cat-backend',
      description: 'Alternativa open source a Firebase que provee base de datos Postgres en tiempo real, autenticación de usuarios, almacenamiento y APIs instantáneas.',
      tags: ['Supabase', 'PostgreSQL', 'Auth', 'Realtime', 'Cloud'],
      url: 'https://supabase.com/',
      useCase: 'Permite a los estudiantes desplegar backends seguros en la nube en cuestión de minutos sin tener que configurar servidores físicos.'
    },
    {
      id: 11,
      title: 'Docker',
      category: 'herramientas',
      categoryName: 'Herramientas',
      icon: 'fa-brands fa-docker',
      iconClass: 'cat-herramientas',
      description: 'Plataforma de virtualización a nivel de sistema operativo para empaquetar aplicaciones y sus dependencias dentro de contenedores estandarizados.',
      tags: ['Docker', 'DevOps', 'Contenedores', 'Microservicios', 'Linux'],
      url: 'https://www.docker.com/',
      useCase: 'Asegura que el código de los estudiantes funcione exactamente igual en su computadora de casa que en los servidores de evaluación de SENATI.'
    },
    {
      id: 12,
      title: 'Dev.to Community',
      category: 'comunidad',
      categoryName: 'Comunidad',
      icon: 'fa-brands fa-dev',
      iconClass: 'cat-comunidad',
      description: 'Comunidad abierta de programadores para compartir artículos técnicos, tutoriales paso a paso, debates y tendencias de software.',
      tags: ['Comunidad', 'Artículos', 'Tutoriales', 'Career', 'Tech Trends'],
      url: 'https://dev.to/',
      useCase: 'Fomenta el hábito de lectura técnica y networking profesional entre los alumnos que se inician en la industria IT.'
    }
  ];

  // ---------------------------------------------------------
  // 2. ESTADO DE LA APLICACIÓN
  // ---------------------------------------------------------
  let currentCategory = 'todos';
  let searchTerm = '';
  let favorites = JSON.parse(localStorage.getItem('devhub_senati_favs') || '[]');
  let activeModalResource = null;

  // ---------------------------------------------------------
  // 3. REFERENCIAS A ELEMENTOS DEL DOM
  // ---------------------------------------------------------
  const mainHeader = document.getElementById('main-header') || document.querySelector('.header');
  const navToggle = document.getElementById('nav-toggle') || document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const themeToggle = document.getElementById('theme-toggle');

  const searchInput = document.getElementById('resource-search') || document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const resourcesGrid = document.getElementById('resources-grid');
  const resultsCount = document.getElementById('results-count');
  const emptyState = document.getElementById('empty-state');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const randomBtn = document.getElementById('random-btn');
  const totalResourcesStat = document.getElementById('total-resources-stat');

  // Modal
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

  // Toasts
  const toastContainer = document.getElementById('toast-container');

  // ---------------------------------------------------------
  // 4. INICIALIZACIÓN DEL NAVBAR Y HEADER FIJO
  // ---------------------------------------------------------
  function initNavbar() {
    // A. Detección de scroll para efecto Glassmorphism (.scrolled)
    const handleScroll = () => {
      if (window.scrollY > 25) {
        mainHeader?.classList.add('scrolled');
      } else {
        mainHeader?.classList.remove('scrolled');
      }
      updateActiveNavLink();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Chequeo inicial

    // B. Menú Móvil Hamburguesa Interactivo
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        document.body.classList.toggle('nav-open', isOpen);

        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
      });
    }

    // C. Cerrar menú móvil al hacer clic en un enlace de navegación
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          document.body.classList.remove('nav-open');
          navToggle?.setAttribute('aria-expanded', 'false');
          const icon = navToggle?.querySelector('i');
          if (icon) icon.className = 'fa-solid fa-bars';
        }
      });
    });

    // D. Cerrar menú al presionar tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        document.body.classList.remove('nav-open');
        navToggle?.setAttribute('aria-expanded', 'false');
        const icon = navToggle?.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars';
      }
    });

    // E. Actualizar enlace activo en base al scroll visible (ScrollSpy)
    function updateActiveNavLink() {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 120;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }
  }

  // ---------------------------------------------------------
  // 5. RENDERIZADO DEL CATÁLOGO DE RECURSOS
  // ---------------------------------------------------------
  function renderResources(category = currentCategory, query = searchTerm) {
    if (!resourcesGrid) return;

    const cleanQuery = (query || '').toLowerCase().trim();

    const filtered = resourcesData.filter(item => {
      const matchesCategory = category === 'todos' || item.category === category;
      const matchesSearch = !cleanQuery ||
        item.title.toLowerCase().includes(cleanQuery) ||
        item.description.toLowerCase().includes(cleanQuery) ||
        item.categoryName.toLowerCase().includes(cleanQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(cleanQuery));

      return matchesCategory && matchesSearch;
    });

    // Actualizar texto del contador de resultados
    if (resultsCount) {
      if (cleanQuery) {
        resultsCount.textContent = `Mostrando ${filtered.length} recursos encontrados para "${cleanQuery}"`;
      } else {
        resultsCount.textContent = `Mostrando ${filtered.length} de ${resourcesData.length} recursos disponibles`;
      }
    }

    // Manejo de Estado Vacío (Empty State)
    if (filtered.length === 0) {
      resourcesGrid.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }

    if (emptyState) emptyState.classList.add('hidden');

    // Construcción del HTML dinámico de cada tarjeta
    resourcesGrid.innerHTML = filtered.map(item => {
      const isFav = favorites.includes(item.id);
      return `
        <article class="resource-card" data-id="${item.id}" data-category="${item.category}">
          <div class="card-top">
            <div class="card-icon-wrapper ${item.iconClass}">
              <i class="${item.icon}" aria-hidden="true"></i>
            </div>
            <div class="card-actions">
              <button 
                class="btn-favorite ${isFav ? 'active' : ''}" 
                data-fav-id="${item.id}"
                title="${isFav ? 'Quitar de favoritos' : 'Guardar en favoritos'}"
                aria-label="Marcar ${escapeHTML(item.title)} como favorito"
              >
                <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
            </div>
          </div>

          <span class="card-category-badge">${escapeHTML(item.categoryName)}</span>
          <h3 class="card-title">${escapeHTML(item.title)}</h3>
          <p class="card-description">${escapeHTML(item.description)}</p>

          <div class="card-tags">
            ${item.tags.map(t => `<span class="tag-pill">${escapeHTML(t)}</span>`).join('')}
          </div>

          <div class="card-footer">
            <button class="btn btn-secondary btn-sm view-details-btn" data-detail-id="${item.id}">
              <i class="fa-solid fa-circle-info"></i> Detalles
            </button>
            <a 
              href="${item.url}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn btn-primary btn-sm"
              title="Visitar sitio oficial de ${escapeHTML(item.title)}"
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i> Abrir
            </a>
          </div>
        </article>
      `;
    }).join('');

    // Reasignar eventos interactivos a los nuevos botones
    attachCardListeners();
  }

  // ---------------------------------------------------------
  // 6. EVENTOS DE LAS TARJETAS (DETALLES Y FAVORITOS)
  // ---------------------------------------------------------
  function attachCardListeners() {
    // Botón de detalles modal
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-detail-id'), 10);
        openDetailsModal(id);
      });
    });

    // Botón de favoritos con localStorage
    document.querySelectorAll('.btn-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-fav-id'), 10);
        toggleFavorite(id);
      });
    });
  }

  // Guardar o remover de favoritos
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
    renderResources(currentCategory, searchTerm);
  }

  // ---------------------------------------------------------
  // 7. INICIALIZACIÓN DE FILTROS POR CATEGORÍA
  // ---------------------------------------------------------
  function initFilters() {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category') || 'todos';
        renderResources(currentCategory, searchTerm);
      });
    });

    // Actualizar contadores numéricos en los botones de categoría
    updateCategoryCounts();

    // Botón de restablecer filtros en el estado vacío
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', () => {
        currentCategory = 'todos';
        searchTerm = '';
        if (searchInput) searchInput.value = '';
        if (clearSearchBtn) clearSearchBtn.classList.add('hidden');

        filterBtns.forEach(b => {
          b.classList.toggle('active', b.getAttribute('data-category') === 'todos');
        });

        renderResources('todos', '');
        showToast('Filtros y buscador restablecidos', 'info');
      });
    }
  }

  function updateCategoryCounts() {
    const counts = {
      todos: resourcesData.length,
      frontend: 0,
      backend: 0,
      herramientas: 0,
      documentacion: 0,
      comunidad: 0
    };

    resourcesData.forEach(r => {
      if (counts[r.category] !== undefined) {
        counts[r.category]++;
      }
    });

    Object.keys(counts).forEach(cat => {
      const badge = document.getElementById(`count-${cat}`);
      if (badge) badge.textContent = counts[cat];
    });

    // Actualizar estadística en Hero
    if (totalResourcesStat) {
      totalResourcesStat.textContent = `${resourcesData.length}+`;
    }
  }

  // ---------------------------------------------------------
  // 8. BUSCADOR EN TIEMPO REAL
  // ---------------------------------------------------------
  function initSearch() {
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value;

      if (searchTerm.trim().length > 0) {
        clearSearchBtn?.classList.remove('hidden');
      } else {
        clearSearchBtn?.classList.add('hidden');
      }

      renderResources(currentCategory, searchTerm);
    });

    clearSearchBtn?.addEventListener('click', () => {
      searchInput.value = '';
      searchTerm = '';
      clearSearchBtn.classList.add('hidden');
      searchInput.focus();
      renderResources(currentCategory, '');
    });
  }

  // ---------------------------------------------------------
  // 9. MODAL DE DETALLES TÉCNICOS INTERACTIVO
  // ---------------------------------------------------------
  function openDetailsModal(id) {
    const resource = resourcesData.find(r => r.id === id);
    if (!resource || !modalBackdrop) return;

    activeModalResource = resource;

    if (modalIcon) {
      modalIcon.className = `modal-icon-badge ${resource.iconClass}`;
      modalIcon.innerHTML = `<i class="${resource.icon}"></i>`;
    }
    if (modalCategory) modalCategory.textContent = resource.categoryName;
    if (modalTitle) modalTitle.textContent = resource.title;
    if (modalDescription) modalDescription.textContent = resource.description;
    if (modalUseCase) modalUseCase.textContent = resource.useCase;
    if (modalLinkBtn) modalLinkBtn.href = resource.url;

    if (modalTags) {
      modalTags.innerHTML = resource.tags
        .map(tag => `<span class="tag-pill">${escapeHTML(tag)}</span>`)
        .join('');
    }

    modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Bloquea scroll de fondo
  }

  function closeDetailsModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
    activeModalResource = null;
  }

  function initModalEvents() {
    modalCloseBtn?.addEventListener('click', closeDetailsModal);

    modalBackdrop?.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeDetailsModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalBackdrop && !modalBackdrop.classList.contains('hidden')) {
        closeDetailsModal();
      }
    });

    // Copiar enlace del recurso al portapapeles
    modalCopyBtn?.addEventListener('click', () => {
      if (activeModalResource && activeModalResource.url) {
        navigator.clipboard.writeText(activeModalResource.url)
          .then(() => {
            showToast(`¡Enlace de "${activeModalResource.title}" copiado al portapapeles!`, 'success');
          })
          .catch(() => {
            showToast('No se pudo copiar el enlace', 'info');
          });
      }
    });
  }

  // ---------------------------------------------------------
  // 10. RECURSO ALEATORIO INTERACTIVO
  // ---------------------------------------------------------
  function initRandom() {
    if (!randomBtn) return;
    randomBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * resourcesData.length);
      const chosen = resourcesData[randomIndex];
      openDetailsModal(chosen.id);
      showToast(`¡Recurso sugerido: ${chosen.title}!`, 'info');
    });
  }

  // ---------------------------------------------------------
  // 11. SISTEMA DINÁMICO DE TOAST NOTIFICATIONS
  // ---------------------------------------------------------
  function showToast(message, type = 'info') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';

    let iconClass = 'fa-solid fa-circle-info';
    if (type === 'success') iconClass = 'fa-solid fa-circle-check';
    if (type === 'alert') iconClass = 'fa-solid fa-triangle-exclamation';

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

  // ---------------------------------------------------------
  // 12. SELECTOR DE TEMA (MODO OSCURO DARK TECH / CLARO)
  // ---------------------------------------------------------
  function initTheme() {
    const savedTheme = localStorage.getItem('devhub_senati_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle?.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('devhub_senati_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Modo ${newTheme === 'dark' ? 'Oscuro Tech' : 'Claro'} activado`, 'info');
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (!icon) return;

    if (theme === 'light') {
      icon.className = 'fa-solid fa-sun';
      themeToggle.title = 'Cambiar a modo oscuro';
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggle.title = 'Cambiar a modo claro';
    }
  }

  // ---------------------------------------------------------
  // 13. FUNCIÓN DE SEGURIDAD (ESCAPE HTML)
  // ---------------------------------------------------------
  function escapeHTML(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---------------------------------------------------------
  // 14. INICIALIZACIÓN GLOBAL
  // ---------------------------------------------------------
  initNavbar();
  initTheme();
  initFilters();
  initSearch();
  initModalEvents();
  initRandom();
  renderResources('todos', '');

  console.log('🚀 Dev HUB SENATI inicializado correctamente.');
});
