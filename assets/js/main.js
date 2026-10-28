// ============================================================
// MAIN.JS — home page (index.html) only
// ============================================================

const ICONS = {
  email: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  cv:     `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
  scholar:`<svg width="13" height="13" viewBox="0 0 512 512" fill="currentColor"><path d="M256 411.12L0 202.667 256 0l256 202.667L256 411.12zM256 512c-77.333 0-142.933-25.6-196.267-76.8L256 285.867l196.267 149.333C398.933 486.4 333.333 512 256 512z"/></svg>`,
  github: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`,
  linkedin:`<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  twitter:`<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  orcid:  `<svg width="13" height="13" viewBox="0 0 256 256" fill="currentColor"><path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM86.3 186.2H70.9V79.1h15.4v107.1zm-7.7-122c-4.9 0-8.9-4-8.9-8.9s4-8.9 8.9-8.9 8.9 4 8.9 8.9-4 8.9-8.9 8.9zm58.1 122H121V132.1c0-12.5-4.5-21-15.8-21-8.6 0-13.7 5.8-16 11.4-.8 2-.9 4.7-.9 7.4v56.3h-15.4V100h14.8v10.4c2.9-4.5 8.2-10.9 20.3-10.9 14.8 0 25.9 9.7 25.9 30.5v56.2z"/></svg>`,
};

const $ = id => document.getElementById(id);

// ============================================================
// NAV — links point to sub-pages
// ============================================================
function buildNav() {
  const logo = $('nav-logo');
  logo.textContent = INFO.shortName || INFO.name;
  logo.href = '#';

  const ul = $('nav-links');

  const items = [
    { href: 'page/research.html',        label: 'Research/Software' },
    { href: 'page/publications.html',    label: 'Publications'    },
    { href: 'page/workexperience.html',  label: 'Work Experience' },
    { href: 'page/awards.html',          label: 'Awards'          },
    { href: 'page/education.html',       label: 'Education'       },
    { href: 'page/news.html',            label: 'News/Update'            },
    { href: 'page/gallery.html',         label: 'Gallery'         },
  ];

  items.push({ href: 'page/contact.html', label: 'Contact' });

  items.forEach(item => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    if (item.external) { a.target = '_blank'; a.rel = 'noopener'; }
    li.appendChild(a);
    ul.appendChild(li);
  });

  const toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', () => ul.classList.toggle('open'));
  ul.addEventListener('click', () => ul.classList.remove('open'));
}

// ============================================================
// HERO
// ============================================================
function buildHero() {
  const section = $('hero');
  const L = INFO.links;

  const linkDefs = [
    { key: 'email',    label: 'Email',       icon: ICONS.email,    primary: true,  href: `mailto:${L.email}` },
    { key: 'cv',       label: 'CV / Résumé', icon: ICONS.cv,       primary: false, href: L.cv,          external: true },
    { key: 'scholar',  label: 'Scholar',     icon: ICONS.scholar,  primary: false, href: L.scholar,     external: true },
    { key: 'github',   label: 'GitHub',      icon: ICONS.github,   primary: false, href: L.github,      external: true },
    { key: 'linkedin', label: 'LinkedIn',    icon: ICONS.linkedin, primary: false, href: L.linkedin,    external: true },
    { key: 'twitter',  label: 'Twitter / X', icon: ICONS.twitter,  primary: false, href: L.twitter,     external: true },
    { key: 'orcid',    label: 'ORCID',       icon: ICONS.orcid,    primary: false, href: L.orcid,       external: true },
  ];

  const buttons = linkDefs
    .filter(d => L[d.key])
    .map(d => {
      const cls    = d.primary ? 'hero-link hero-link-primary' : 'hero-link hero-link-outline';
      const target = d.external ? 'target="_blank" rel="noopener"' : '';
      return `<a href="${d.href}" class="${cls}" ${target}>${d.icon} ${d.label}</a>`;
    })
    .join('');

  const tags = (INFO.researchTags || [])
    .map(t => `<span class="hero-tag">${t}</span>`)
    .join('');

  const institution = [INFO.department, INFO.institution]
    .filter(Boolean).join(' &middot; ');

  section.innerHTML = `
    <div class="container">
      <div class="hero-grid">
        <div class="hero-info">
          <h1>${INFO.name}</h1>
          <p class="hero-subtitle">${INFO.title}</p>
          <p class="hero-institution">${institution}</p>
          ${INFO.mission ? `<p class="hero-mission">${INFO.mission}</p>` : ''}
          ${tags ? `<div class="hero-tags">${tags}</div>` : ''}
          <div class="hero-links">${buttons}</div>
        </div>
        <div class="hero-photo-wrap">
          <img
            class="hero-photo"
            src="${INFO.photo}"
            alt="Photo of ${INFO.name}"
            loading="eager"
            onerror="this.style.display='none'"
          >
        </div>
      </div>
    </div>
  `;
}


// ============================================================
// ABOUT — merged into the home page
// ============================================================
function buildAbout() {
  const section = $('about');
  if (!section) return;

  const paras = (Array.isArray(INFO.bio) ? INFO.bio : [INFO.bio])
    .filter(Boolean)
    .map(p => `<p>${p}</p>`)
    .join('');

  section.innerHTML = `
    <div class="container">
      <h2 class="section-title">About Dr. Avan</h2>
      <div class="about-body">${paras}</div>
    </div>
  `;
}

function buildFooter() {
  const footer = $('site-footer');
  if (!footer) return;
  const yr = new Date().getFullYear();
  footer.innerHTML = `
    <p>&copy; ${yr} ${INFO.name} &middot; ${INFO.institution}</p>
    <p style="margin-top:.4rem;font-size:.73rem;opacity:.7;">Last updated: ${INFO.lastUpdated || yr}</p>
  `;
}

function initScrollTop() {
  const btn = $('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  document.title = `${INFO.name} | ${INFO.title}`;
  buildNav();
  buildHero();
  buildAbout();
  buildFooter();
  initScrollTop();
});
