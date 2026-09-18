/**
 * MAIN APP JAVASCRIPT
 * Controls navigation, theme switcher, typewriter animation, project filtering,
 * modal dialogs, contact form handling, and toast notifications.
 */

// --- Project Showcase Database ---
const PROJECTS_DATA = [
  {
    id: 'devflow',
    title: 'DevFlow - Developer Workflow Suite',
    category: 'fullstack',
    categoryBadge: 'Full Stack',
    desc: 'An end-to-end developer productivity workspace integrating task tracking, GitHub webhooks, telemetry, and automated sprint metrics.',
    imageSvg: `
      <svg viewBox="0 0 600 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#4f46e5" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="#0d1424"/>
        <circle cx="120" cy="90" r="60" fill="url(#g1)" opacity="0.3"/>
        <rect x="50" y="50" width="500" height="240" rx="12" fill="#162033" stroke="rgba(255,255,255,0.1)" stroke-width="2"/>
        <circle cx="80" cy="75" r="5" fill="#ef4444"/>
        <circle cx="95" cy="75" r="5" fill="#f59e0b"/>
        <circle cx="110" cy="75" r="5" fill="#10b981"/>
        <rect x="80" y="105" width="130" height="70" rx="8" fill="#1e293b"/>
        <rect x="230" y="105" width="130" height="70" rx="8" fill="#1e293b"/>
        <rect x="380" y="105" width="140" height="70" rx="8" fill="#1e293b"/>
        <rect x="80" y="195" width="280" height="70" rx="8" fill="#1e293b"/>
        <rect x="380" y="195" width="140" height="70" rx="8" fill="#6366f1" opacity="0.8"/>
        <text x="300" y="318" fill="#94a3b8" font-family="monospace" font-size="14" text-anchor="middle">DevFlow Workspace Dashboard</text>
      </svg>
    `,
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'WebSockets'],
    details: {
      problem: 'Engineering teams often struggle with context switching between issue trackers, CI/CD telemetry, and code review updates.',
      solution: 'DevFlow unifies pull requests, build health, and sprint burndowns in a high-speed real-time portal powered by WebSockets.',
      features: [
        'Real-time WebSocket event feeds for GitHub commits & build triggers',
        'Interactive Kanban drag-and-drop board with optimistic UI updates',
        'Role-based access control with JWT authentication and bcrypt',
        'Containerized with Docker Compose for seamless local and production deployments'
      ],
      metrics: 'Reduced team onboarding time by 35% and cut context switching interruptions.'
    },
    demoUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'cloudpulse',
    title: 'CloudPulse - Distributed Metrics Sentinel',
    category: 'backend',
    categoryBadge: 'Backend & DevOps',
    desc: 'High-throughput time-series telemetry collector and alert engine designed for microservice health analysis.',
    imageSvg: `
      <svg viewBox="0 0 600 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#06b6d4" />
            <stop offset="100%" stop-color="#10b981" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="#0c1825"/>
        <rect x="50" y="50" width="500" height="240" rx="12" fill="#132438" stroke="rgba(6, 182, 212, 0.2)" stroke-width="2"/>
        <polyline points="80,240 140,190 200,210 260,150 320,180 380,120 440,160 510,100" fill="none" stroke="url(#g2)" stroke-width="4"/>
        <circle cx="510" cy="100" r="7" fill="#06b6d4"/>
        <text x="300" y="318" fill="#94a3b8" font-family="monospace" font-size="14" text-anchor="middle">CloudPulse Live Telemetry Graph</text>
      </svg>
    `,
    tags: ['Go / Python', 'Redis', 'TimescaleDB', 'Prometheus', 'Grafana'],
    details: {
      problem: 'Detecting latent spikes across multi-region services before users notice degradation.',
      solution: 'Engineered an in-memory aggregation pipeline with Redis streams and alerting hooks to Discord/Slack.',
      features: [
        'Ingests up to 10,000 metric datapoints/sec with low CPU overhead',
        'Configurable threshold and anomaly detection algorithms',
        'Automated webhook dispatch for pager integration',
        'RESTful query API with sub-15ms response times'
      ],
      metrics: 'Successfully simulated and monitored 50 concurrent simulated server instances.'
    },
    demoUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'neuralcode',
    title: 'NeuralAudit - AI Pull Request Auditor',
    category: 'ai-tools',
    categoryBadge: 'AI & Automation',
    desc: 'Automated GitHub Action bot that reviews incoming pull requests for security vulnerabilities, syntax gotchas, and performance anti-patterns.',
    imageSvg: `
      <svg viewBox="0 0 600 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ec4899" />
            <stop offset="100%" stop-color="#8b5cf6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="#180e29"/>
        <rect x="50" y="50" width="500" height="240" rx="12" fill="#25163e" stroke="rgba(236, 72, 153, 0.2)" stroke-width="2"/>
        <circle cx="150" cy="170" r="45" fill="none" stroke="url(#g3)" stroke-width="4"/>
        <circle cx="300" cy="170" r="45" fill="none" stroke="url(#g3)" stroke-width="4"/>
        <circle cx="450" cy="170" r="45" fill="none" stroke="url(#g3)" stroke-width="4"/>
        <line x1="195" y1="170" x2="255" y2="170" stroke="#8b5cf6" stroke-width="3" stroke-dasharray="5,5"/>
        <line x1="345" y1="170" x2="405" y2="170" stroke="#ec4899" stroke-width="3" stroke-dasharray="5,5"/>
        <text x="300" y="318" fill="#d8b4fe" font-family="monospace" font-size="14" text-anchor="middle">NeuralAudit AI Review Engine</text>
      </svg>
    `,
    tags: ['Python', 'FastAPI', 'OpenAI API', 'GitHub API', 'Docker'],
    details: {
      problem: 'Senior engineers spend countless hours catching trivial syntax blunders, SQL injection risks, and missing tests.',
      solution: 'Built a lightweight webhook service that parses Git diffs, chunks files, and generates inline PR comments.',
      features: [
        'AST-guided diff chunking to respect token context boundaries',
        'Detects sensitive secrets and credentials before merge',
        'Constructs concise summary table for pull request descriptions',
        'Customizable rule sets per repository through a .neuralaudit.yml file'
      ],
      metrics: 'Flagged 94% of synthetic vulnerability benchmarks.'
    },
    demoUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'cryptoview',
    title: 'CryptoSphere - DeFi Portfolio Tracker',
    category: 'frontend',
    categoryBadge: 'Frontend UI',
    desc: 'Interactive financial dashboard featuring real-time candlestick charts, portfolio PnL calculator, and currency converter.',
    imageSvg: `
      <svg viewBox="0 0 600 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" />
            <stop offset="100%" stop-color="#ef4444" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="#1a140b"/>
        <rect x="50" y="50" width="500" height="240" rx="12" fill="#291e10" stroke="rgba(245, 158, 11, 0.2)" stroke-width="2"/>
        <rect x="100" y="120" width="22" height="90" rx="3" fill="#10b981"/>
        <line x1="111" y1="90" x2="111" y2="230" stroke="#10b981" stroke-width="2"/>
        <rect x="160" y="140" width="22" height="70" rx="3" fill="#ef4444"/>
        <line x1="171" y1="110" x2="171" y2="240" stroke="#ef4444" stroke-width="2"/>
        <rect x="220" y="100" width="22" height="110" rx="3" fill="#10b981"/>
        <line x1="231" y1="70" x2="231" y2="230" stroke="#10b981" stroke-width="2"/>
        <rect x="280" y="130" width="22" height="90" rx="3" fill="#10b981"/>
        <line x1="291" y1="100" x2="291" y2="240" stroke="#10b981" stroke-width="2"/>
        <text x="300" y="318" fill="#fcd34d" font-family="monospace" font-size="14" text-anchor="middle">CryptoSphere Financial Dashboard</text>
      </svg>
    `,
    tags: ['JavaScript (ES6+)', 'Chart.js', 'CoinGecko REST API', 'CSS Grid', 'LocalStorage'],
    details: {
      problem: 'Existing crypto trackers are sluggish, riddled with ads, and lack private offline wallet valuation.',
      solution: 'Created a snappy, client-side only dashboard storing user preferences locally without tracking cookies.',
      features: [
        'Live candlestick charts with interactive tooltips and timeframe selectors',
        'Offline portfolio persistence using browser localStorage',
        'Dark and light responsive chart styling',
        'Custom alerts when asset prices cross specified thresholds'
      ],
      metrics: 'Perfect 100/100 Lighthouse Performance score.'
    },
    demoUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'kanbanlite',
    title: 'FlowBoard - Minimalist Drag & Drop Task Manager',
    category: 'frontend',
    categoryBadge: 'Frontend UI',
    desc: 'Accessible, keyboard-navigable task management app with custom column workflows and markdown support.',
    imageSvg: `
      <svg viewBox="0 0 600 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#121820"/>
        <rect x="70" y="70" width="130" height="180" rx="8" fill="#1c2533" stroke="rgba(255,255,255,0.06)"/>
        <rect x="235" y="70" width="130" height="180" rx="8" fill="#1c2533" stroke="rgba(255,255,255,0.06)"/>
        <rect x="400" y="70" width="130" height="180" rx="8" fill="#1c2533" stroke="rgba(255,255,255,0.06)"/>
        <rect x="85" y="105" width="100" height="40" rx="6" fill="#2a374a"/>
        <rect x="85" y="155" width="100" height="40" rx="6" fill="#2a374a"/>
        <rect x="250" y="105" width="100" height="50" rx="6" fill="#6366f1"/>
        <text x="300" y="318" fill="#94a3b8" font-family="monospace" font-size="14" text-anchor="middle">FlowBoard Kanban Workspace</text>
      </svg>
    `,
    tags: ['Vanilla HTML5', 'Modern CSS', 'HTML Drag and Drop API', 'Web Storage'],
    details: {
      problem: 'Heavyweight enterprise project managers carry massive script overhead and sluggish drag latency.',
      solution: 'Engineered a 0-dependency, sub-15KB task tool relying purely on native HTML5 Drag and Drop events.',
      features: [
        'Native HTML5 drag-and-drop mechanics with tactile drop indicator',
        'ARIA attributes and full keyboard arrow navigation for screen readers',
        'Live search filtering across boards and tags',
        'Export/Import board state as JSON file'
      ],
      metrics: 'Zero external runtime dependencies.'
    },
    demoUrl: '#',
    repoUrl: 'https://github.com'
  },
  {
    id: 'apigateway',
    title: 'GateKeeper - Rate Limiting & Auth Reverse Proxy',
    category: 'backend',
    categoryBadge: 'Backend & Systems',
    desc: 'Lightweight reverse proxy service featuring token bucket rate-limiting, JWT validation, and upstream health checking.',
    imageSvg: `
      <svg viewBox="0 0 600 340" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#111726"/>
        <polygon points="120,170 240,90 240,250" fill="#3b82f6" opacity="0.3"/>
        <polygon points="480,170 360,90 360,250" fill="#10b981" opacity="0.3"/>
        <circle cx="300" cy="170" r="40" fill="#1e293b" stroke="#6366f1" stroke-width="3"/>
        <text x="300" y="176" fill="#a5b4fc" font-family="monospace" font-size="18" text-anchor="middle">PROXY</text>
        <text x="300" y="318" fill="#94a3b8" font-family="monospace" font-size="14" text-anchor="middle">GateKeeper Proxy Architecture</text>
      </svg>
    `,
    tags: ['Node.js', 'TypeScript', 'Redis', 'Docker', 'Jest'],
    details: {
      problem: 'Unprotected backend microservices are vulnerable to DDoS bursts and inconsistent auth header verification.',
      solution: 'A pluggable edge gateway enforcing sliding-window rate limits with Redis and token introspection.',
      features: [
        'Token Bucket & Sliding Window rate-limiting algorithm',
        'HMAC and RSA-256 JWT signature verification middleware',
        'Circuit breaker pattern to prevent cascade server crashes',
        'Structured logging and latency percentile metrics'
      ],
      metrics: 'Benchmarked at 8,500 req/s with median latency under 4ms.'
    },
    demoUrl: '#',
    repoUrl: 'https://github.com'
  }
];

// --- Typewriter Effect ---
class Typewriter {
  constructor(elementId, phrases, typeSpeed = 90, deleteSpeed = 45, pause = 1800) {
    this.el = document.getElementById(elementId);
    this.phrases = phrases;
    this.typeSpeed = typeSpeed;
    this.deleteSpeed = deleteSpeed;
    this.pause = pause;
    this.phraseIndex = 0;
    this.charIndex = 0;
    this.isDeleting = false;

    if (this.el) {
      this.type();
    }
  }

  type() {
    const currentPhrase = this.phrases[this.phraseIndex];
    
    if (this.isDeleting) {
      this.charIndex--;
      this.el.textContent = currentPhrase.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.el.textContent = currentPhrase.substring(0, this.charIndex);
    }

    let delay = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.charIndex === currentPhrase.length) {
      delay = this.pause;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 400;
    }

    setTimeout(() => this.type(), delay);
  }
}

// --- Theme Management ---
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const currentTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(toggleBtn, currentTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
      updateThemeIcon(toggleBtn, newTheme);
      showToast(`Theme changed to ${newTheme} mode`, 'info');
    });
  }
}

function updateThemeIcon(btn, theme) {
  if (!btn) return;
  btn.innerHTML = theme === 'dark' ? '🌙' : '☀️';
  btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

// --- Navbar & Scroll Spy ---
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');
  const backToTopBtn = document.getElementById('back-to-top');

  // Sticky Navbar Blur & Back to top
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    if (scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Scroll spy
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.innerHTML = '☰';
      });
    });
  }

  // Smooth scroll back to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// --- Dynamic Project Rendering & Filtering ---
function renderProjects(category = 'all') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const filtered = category === 'all' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === category);

  filtered.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-category', project.category);

    const tagsHtml = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-img-wrapper">
        <div class="project-banner-svg">${project.imageSvg}</div>
        <span class="project-badge-type">${project.categoryBadge}</span>
      </div>
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.desc}</p>
        <div class="project-tags">${tagsHtml}</div>
        <div class="project-actions">
          <button class="btn btn-secondary btn-sm open-details-btn" data-id="${project.id}">
            Case Study & Details ↗
          </button>
          <div class="project-link-group">
            <a href="${project.repoUrl}" target="_blank" rel="noopener" class="icon-link" title="Source Code">
              <span>GitHub</span>
            </a>
            <a href="${project.demoUrl}" class="icon-link" title="Live Demo">
              <span>Live ↗</span>
            </a>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach modal trigger listeners
  grid.querySelectorAll('.open-details-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-id');
      openProjectModal(projId);
    });
  });
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });
}

// --- Project Modal Dialog ---
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const overlay = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body-content');

  const featureList = project.details.features.map(f => `<li>${f}</li>`).join('');
  const tagsList = project.tags.map(t => `<span class="project-tag">${t}</span>`).join('');

  modalBody.innerHTML = `
    <span class="section-tag">${project.categoryBadge}</span>
    <h2 class="modal-title">${project.title}</h2>
    <div class="project-tags" style="margin-bottom: 1.25rem;">${tagsList}</div>
    
    <div style="border-radius: 10px; overflow: hidden; height: 210px; margin-bottom: 1.5rem;">
      ${project.imageSvg}
    </div>

    <h3 class="modal-section-heading">Overview & The Problem</h3>
    <p class="modal-text">${project.details.problem}</p>

    <h3 class="modal-section-heading">Engineering Solution</h3>
    <p class="modal-text">${project.details.solution}</p>

    <h3 class="modal-section-heading">Key Technical Features</h3>
    <ul class="modal-features">${featureList}</ul>

    <h3 class="modal-section-heading">Impact & Benchmarks</h3>
    <p class="modal-text"><strong>Result:</strong> ${project.details.metrics}</p>

    <div class="modal-footer-actions">
      <a href="${project.repoUrl}" target="_blank" rel="noopener" class="btn btn-primary">
        View Repository on GitHub
      </a>
      <a href="${project.demoUrl}" class="btn btn-secondary">
        Launch Live Demo
      </a>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const overlay = document.getElementById('project-modal');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

function initModalHandlers() {
  const overlay = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);

  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeProjectModal();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProjectModal();
  });
}

// --- Animated Stats Counter ---
function initStatsCounter() {
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  let started = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !started) {
      started = true;
      document.querySelectorAll('.stat-number').forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'), 10) || 0;
        const duration = 1600;
        const step = target / (duration / 25);
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            stat.textContent = target + (stat.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            stat.textContent = Math.floor(current) + (stat.getAttribute('data-suffix') || '');
          }
        }, 25);
      });
    }
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

// --- Contact Form & Toast Feedback ---
function initContactForm() {
  const form = document.getElementById('contact-form');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast('Please fill out all required fields.', 'info');
        return;
      }

      // Simulate sending
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Transmitting message...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        form.reset();
        showToast('Thank you! Your message has been transmitted successfully.', 'success');
      }, 1000);
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'alex.morgan.dev@example.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`, 'success');
      }).catch(() => {
        showToast('Failed to copy. Please manually copy email address.', 'info');
      });
    });
  }
}

// --- Toast System ---
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// --- Init Everything on DOM Ready ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();

  new Typewriter('typewriter-role', [
    'Full-Stack Software Engineer',
    'JavaScript & Python Developer',
    'Distributed Systems Enthusiast',
    'Open-Source Builder'
  ], 80, 45, 1800);

  renderProjects('all');
  initProjectFilters();
  initModalHandlers();
  initStatsCounter();
  initContactForm();
});
