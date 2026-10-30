// ============================================================
// PAGE.JS — handles all sub-pages inside /page/
// Reads INFO from ../data/info.js (loaded before this script)
// ============================================================

'use strict';

// ============================================================
// Icons (subset used on sub-pages)
// ============================================================
const PAGE_ICONS = {
  home: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
};

// ============================================================
// Helpers
// ============================================================
const $p = id => document.getElementById(id);
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

// ============================================================
// NAV (sub-page version — links between pages)
// ============================================================
function buildNav(currentPage) {
  const logo = $p('nav-logo');
  logo.textContent = INFO.shortName || INFO.name;
  logo.href = '../index.html';

  const ul = $p('nav-links');

  const items = [
    { page: null,             href: '../index.html',         label: 'Home'            },
    { page: 'research',       href: 'research.html',         label: 'Research/Software' },
    { page: 'publications',   href: 'publications.html',     label: 'Publications'    },
    { page: 'workexperience', href: 'workexperience.html',   label: 'Work Experience' },
    { page: 'awards',         href: 'awards.html',           label: 'Awards'          },
    { page: 'education',      href: 'education.html',        label: 'Education'       },
    { page: 'news',           href: 'news.html',             label: 'News/Update'            },
    { page: 'gallery',        href: 'gallery.html',          label: 'Gallery'         },
    { page: 'contact',        href: 'contact.html',          label: 'Contact'         },
  ];

  items.forEach(item => {
    const li = document.createElement('li');
    const a  = document.createElement('a');
    a.href = item.href;
    a.textContent = item.label;
    if (item.external) { a.target = '_blank'; a.rel = 'noopener'; }
    if (item.page === currentPage) a.classList.add('active');
    li.appendChild(a);
    ul.appendChild(li);
  });

  // Hamburger toggle
  const toggle = document.querySelector('.nav-toggle');
  toggle.addEventListener('click', () => ul.classList.toggle('open'));
  ul.addEventListener('click', e => { if (e.target.tagName === 'A' && !e.target.closest('[target]')) ul.classList.remove('open'); });
}

// ============================================================
// PAGE BANNER (dark header beneath nav)
// ============================================================
function buildBanner(title, meta) {
  const banner = $p('page-banner');
  if (!banner) return;

  banner.innerHTML = `
    <div class="container">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="../index.html">Home</a>
        <span class="breadcrumb-sep">/</span>
        <span>${title}</span>
      </nav>
      <h1>${title}</h1>
      ${meta ? `<p class="page-banner-meta">${meta}</p>` : ''}
    </div>
  `;
}

// ============================================================
// FOOTER
// ============================================================
function buildFooter() {
  const footer = $p('site-footer');
  if (!footer) return;
  const yr = new Date().getFullYear();
  footer.innerHTML = `
    <p>&copy; ${yr} ${INFO.name} &middot; ${INFO.institution}</p>
    <p style="margin-top:.4rem;font-size:.73rem;opacity:.7;">Last updated: ${INFO.lastUpdated || yr}</p>
  `;
}

// ============================================================
// SCROLL-TO-TOP
// ============================================================
function initScrollTop() {
  const btn = $p('scroll-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// CONTENT RENDERERS
// Each function receives the <main id="page-content"> element
// ============================================================

// ---- About ----
function renderAbout(main) {
  const paras = (Array.isArray(INFO.bio) ? INFO.bio : [INFO.bio])
    .map(p => `<p>${p}</p>`).join('');

  main.innerHTML = `
    <div class="container">
      <div class="hero-grid" style="padding-bottom:2.5rem;border-bottom:1px solid var(--clr-border);margin-bottom:2.5rem;">
        <div class="hero-info">
          <h2 style="font-size:1.6rem;margin-bottom:.25rem;">${INFO.name}</h2>
          <p class="hero-subtitle">${INFO.title}</p>
          <p class="hero-institution">${[INFO.department, INFO.institution].filter(Boolean).join(' &middot; ')}</p>
          ${INFO.location ? `<p style="font-size:.82rem;color:var(--clr-muted);margin-bottom:1.25rem;">${INFO.location}</p>` : ''}
          <div class="hero-links">
            ${INFO.links.email ? `<a href="mailto:${INFO.links.email}" class="hero-link hero-link-primary">Email</a>` : ''}
            ${INFO.links.cv    ? `<a href="../${INFO.links.cv}" class="hero-link hero-link-outline" target="_blank">CV / Résumé</a>` : ''}
            ${INFO.links.scholar ? `<a href="${INFO.links.scholar}" class="hero-link hero-link-outline" target="_blank">Google Scholar</a>` : ''}
          </div>
        </div>
        <div class="hero-photo-wrap">
          <img class="hero-photo" src="${INFO.photo}" alt="Photo of ${INFO.name}" onerror="this.style.display='none'">
        </div>
      </div>

      <h2 class="section-title" style="margin-bottom:1.25rem;">Biography</h2>
      <div class="about-body">${paras}</div>

      ${INFO.researchTags && INFO.researchTags.length ? `
        <div style="margin-top:2.5rem;">
          <h3 style="font-size:.85rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--clr-muted);margin-bottom:.85rem;">Research Keywords</h3>
          <div class="hero-tags">${INFO.researchTags.map(t => `<span class="hero-tag">${t}</span>`).join('')}</div>
        </div>
      ` : ''}
    </div>
  `;
}

// ---- Research ----
function renderResearch(main) {
  const interests = INFO.research || [];
  const projects  = INFO.researchProjects || [];
  const software  = INFO.software || [];

  const headerFigures = [
    { src: "../assets/iterativeproject.png", alt: "Iterative research project framework" },
    { src: "../assets/goal.png", alt: "Research goals framework" },
    { src: "../assets/lab.png", alt: "Research laboratory vision" },
  ];

  const endOfLifeFigures = [
    { src: "../assets/recycle.png", alt: "Product end-of-life recycling framework" },
    { src: "../assets/sustain.png", alt: "Sustainable product end-of-life framework" },
    { src: "../assets/allocation.png", alt: "Product end-of-life allocation framework" },
  ];

  const processModelingFigures = [
    { src: "../assets/methanol.png", alt: "Methanol process modeling framework" },
    { src: "../assets/gasification.png", alt: "Gasification process modeling framework" },
    null,
  ];

  const sustainableCircularFigures = [
    { src: "../assets/circularsystem.png", alt: "Sustainable and circular systems engineering framework" },
    null,
    null,
  ];

  const interestCards = interests.map((r, i) => `
    <div class="research-interest-block">
      <div class="research-card">
        ${r.icon ? `<div class="research-icon">${r.icon}</div>` : ''}
        <h3>${r.title}</h3>
        <p>${r.description}</p>
      </div>
      <div class="research-header-figures">
        ${(i === 0 ? endOfLifeFigures : i === 1 ? processModelingFigures : i === 2 ? sustainableCircularFigures : headerFigures).map(fig => fig ? `
          <figure class="research-interest-figure research-zoom-trigger" tabindex="0" role="button" aria-label="Enlarge ${fig.alt}">
            <img src="${fig.src}" alt="${fig.alt}" loading="lazy">
          </figure>
        ` : `<div class="research-interest-figure research-figure-empty" aria-hidden="true"></div>`).join('')}
      </div>
    </div>
  `).join('');

  const softwareCards = software.map(s => {
    const tags = (s.tags || []).map(t => `<span class="pub-tag">${t}</span>`).join('');
    const links = Object.entries(s.links || {})
      .filter(([, url]) => url)
      .map(([label, url]) => `<a href="${url}" class="pub-link" target="_blank" rel="noopener">${label === 'software' ? 'Launch Software' : cap(label)}</a>`)
      .join('');
    return `
      <div class="software-card">
        <div class="software-content">
          <div class="rp-header">
            <h3 class="rp-title">${s.title}</h3>
            <span class="rp-status rp-status--ongoing">Software</span>
          </div>
          <p class="rp-description">${s.description}</p>
          ${tags ? `<div class="pub-tags">${tags}</div>` : ''}
          ${links ? `<div class="pub-links">${links}</div>` : ''}
        </div>
        <div class="software-image">
          <img src="../assets/Battery%20Recycling%20Knowledge%20Intelligence%20Infographic.png" alt="Battery Recycling Literature-Driven Network Intelligence Module infographic" loading="lazy">
        </div>
      </div>
    `;
  }).join('');

  const projectCards = projects.map(p => {
    const tags  = (p.tags  || []).map(t => `<span class="pub-tag">${t}</span>`).join('');
    const links = Object.entries(p.links || {})
      .filter(([, url]) => url)
      .map(([label, url]) => `<a href="${url}" class="pub-link" target="_blank" rel="noopener">${cap(label)}</a>`)
      .join('');
    const statusClass = p.status ? `rp-status--${p.status.toLowerCase()}` : '';
    return `
      <div class="rp-card">
        ${p.image ? `<div class="rp-image"><img src="${p.image}" alt="${p.title}" loading="lazy"></div>` : ''}
        <div class="rp-content">
          <div class="rp-header">
            <h3 class="rp-title">${p.title}</h3>
            ${p.status ? `<span class="rp-status ${statusClass}">${p.status}</span>` : ''}
          </div>
          <p class="rp-description">${p.description}</p>
          ${tags  ? `<div class="pub-tags">${tags}</div>`  : ''}
          ${links ? `<div class="pub-links">${links}</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  main.innerHTML = `
    <div class="container">
      ${interests.length ? `
        <h2 class="section-title">Research Interests</h2>
        <div class="research-header-figures">
          ${headerFigures.map(fig => `
            <figure class="research-interest-figure research-zoom-trigger" tabindex="0" role="button" aria-label="Enlarge ${fig.alt}">
              <img src="${fig.src}" alt="${fig.alt}" loading="lazy">
            </figure>
          `).join('')}
        </div>
        <div class="rp-list" style="margin-bottom:3rem;">${interestCards}</div>
      ` : ''}
      ${software.length ? `
        <h2 class="section-title">Software Tools</h2>
        <div class="rp-list" style="margin-bottom:3rem;">${softwareCards}</div>
      ` : ''}
      ${projects.length ? `
        <h2 class="section-title">Research Projects</h2>
        <div class="rp-list">${projectCards}</div>
      ` : ''}
    </div>
    <div id="research-lightbox" class="research-lightbox" aria-hidden="true" role="dialog" aria-modal="true" aria-label="Enlarged research figure">
      <button type="button" class="research-lightbox-close" aria-label="Close enlarged figure">&times;</button>
      <img class="research-lightbox-img" src="" alt="">
    </div>
  `;

  const lightbox = main.querySelector('#research-lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.research-lightbox-img') : null;
  const closeBtn = lightbox ? lightbox.querySelector('.research-lightbox-close') : null;

  function openResearchFigure(img) {
    if (!lightbox || !lightboxImg || !img) return;
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function closeResearchFigure() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lightboxImg.removeAttribute('src');
  }

  main.querySelectorAll('.research-zoom-trigger').forEach(figure => {
    const img = figure.querySelector('img');
    figure.addEventListener('click', () => openResearchFigure(img));
    figure.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openResearchFigure(img);
      }
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeResearchFigure);
  if (lightbox) {
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) closeResearchFigure();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('open')) {
      closeResearchFigure();
    }
  });
}

// ---- Publications ----
function renderPublications(main) {
  const pubs        = INFO.publications;
  const articles    = pubs.filter(p => p.type === 'journal' || p.type === 'preprint' || p.type === 'book-chapter');
  const conferences = pubs.filter(p => p.type === 'conference' || p.type === 'workshop');

  function pubHTML(pub) {
    const tags  = (pub.tags  || []).map(t => `<span class="pub-tag">${t}</span>`).join('');
    const links = Object.entries(pub.links || {})
      .filter(([, url]) => url)
      .map(([label, url]) => `<a href="${url}" class="pub-link" target="_blank" rel="noopener">${cap(label)}</a>`)
      .join('');
    return `
      <div class="pub-item${pub.featured ? ' featured' : ''}">
        ${pub.featured ? '<span class="pub-badge">Featured</span>' : ''}
        <div class="pub-title">${pub.title}</div>
        <div class="pub-authors">${pub.authors}</div>
        <div class="pub-venue"><strong>${pub.venue}</strong> &middot; ${pub.year}</div>
        ${tags  ? `<div class="pub-tags">${tags}</div>`  : ''}
        ${links ? `<div class="pub-links">${links}</div>` : ''}
      </div>
    `;
  }

  main.innerHTML = `
    <div class="container">
      <div class="pub-summary">
        <div class="pub-summary-stat">
          <span class="pub-summary-num">${pubs.length}</span>
          <span class="pub-summary-label">Total Outcomes</span>
        </div>
        <div class="pub-summary-stat">
          <span class="pub-summary-num">${articles.length}</span>
          <span class="pub-summary-label">Peer-reviewed Articles</span>
        </div>
        <div class="pub-summary-stat">
          <span class="pub-summary-num">${conferences.length}</span>
          <span class="pub-summary-label">Conference Papers/Presentations</span>
        </div>
      </div>

      ${articles.length ? `
        <h2 class="section-title">Articles &amp; Book Chapters</h2>
        <div class="pub-list" style="margin-bottom:2.5rem;">${articles.map(pubHTML).join('')}</div>
      ` : ''}

      ${conferences.length ? `
        <h2 class="section-title">Conferences</h2>
        <div class="pub-list">${conferences.map(pubHTML).join('')}</div>
      ` : ''}
    </div>
  `;
}

// ---- Awards ----
function renderAwards(main) {
  if (!INFO.awards || !INFO.awards.length) {
    main.innerHTML = '<div class="container"><p>No awards listed.</p></div>';
    return;
  }

  const items = INFO.awards.map(a => `
    <div class="award-item">
      <div class="award-year">${a.year}</div>
      <div class="award-content">
        <div class="award-title">${a.title}</div>
        <div class="award-org">${a.organization}</div>
        ${a.description ? `<div class="award-desc">${a.description}</div>` : ''}
      </div>
    </div>
  `).join('');

  main.innerHTML = `<div class="container"><div class="awards-list">${items}</div></div>`;
}

// ---- Education ----
function renderEducation(main) {
  if (!INFO.education || !INFO.education.length) {
    main.innerHTML = '<div class="container"><p>No education listed.</p></div>';
    return;
  }

  const items = INFO.education.map(e => {
    const meta = [];
    if (e.advisor) meta.push(`Advisor: ${e.advisor}`);
    if (e.thesis)  meta.push(`Thesis: <em>${e.thesis}</em>`);
    if (e.honors)  meta.push(e.honors);

    return `
      <div class="edu-item">
        <div class="edu-degree">${e.degree}</div>
        <div class="edu-institution">${e.institution}</div>
        <div class="edu-year">${e.year}</div>
        ${meta.length ? `<div class="edu-meta">${meta.join('<br>')}</div>` : ''}
      </div>
    `;
  }).join('');

  main.innerHTML = `<div class="container"><div class="edu-timeline">${items}</div></div>`;
}

// ---- Work Experience ----
function renderWorkExperience(main) {
  const jobs = INFO.workExperience || [];

  if (!jobs.length) {
    main.innerHTML = '<div class="container"><p>No work experience listed.</p></div>';
    return;
  }

  const items = jobs.map(j => {
    const bullets = (j.highlights || []).map(h => `<li>${h}</li>`).join('');
    return `
      <div class="edu-item">
        <div class="edu-degree">${j.role}</div>
        <div class="edu-institution">${j.organization}${j.department ? ` &middot; ${j.department}` : ''}</div>
        <div class="edu-year">${j.period}</div>
        ${j.location ? `<div class="edu-meta">${j.location}</div>` : ''}
        ${j.description ? `<div class="edu-meta" style="margin-top:.35rem;">${j.description}</div>` : ''}
        ${bullets ? `<ul class="work-highlights">${bullets}</ul>` : ''}
      </div>
    `;
  }).join('');

  main.innerHTML = `<div class="container"><div class="edu-timeline">${items}</div></div>`;
}

// ---- Contact ----
function renderContact(main) {
  main.innerHTML = `
    <div class="container">
      <div class="about-body">
        <h2 class="section-title">Contact Information</h2>
        <p><strong>Address:</strong> ${INFO.location || ''}</p>
        <p><strong>Email:</strong> <a href="mailto:${INFO.email}">${INFO.email}</a></p>
        <p><strong>Mobile:</strong> ${INFO.mobile || ''}</p>
        ${INFO.links && INFO.links.linkedin ? `<p><strong>LinkedIn:</strong> <a href="${INFO.links.linkedin}" target="_blank" rel="noopener">View profile</a></p>` : ''}
      </div>
    </div>
  `;
}

// ---- News ----
function renderNews(main) {
  const news = INFO.news || [];

  if (!news.length) {
    main.innerHTML = '<div class="container"><p>No news yet.</p></div>';
    return;
  }

  const items = news.map(n => `
    <div class="news-item">
      <div class="news-date">${n.date}</div>
      <div class="news-text">${n.text}</div>
    </div>
  `).join('');

  main.innerHTML = `<div class="container"><div class="news-list">${items}</div></div>`;
}

// ---- Gallery ----
function renderGallery(main) {
  const photos = INFO.gallery || [];

  if (!photos.length) {
    main.innerHTML = '<div class="container"><p>No photos yet.</p></div>';
    return;
  }

  const categories = ['All', ...new Set(photos.map(p => p.category).filter(Boolean))];

  const catBtns = categories.map((c, i) => {
    const n = c === 'All' ? photos.length : photos.filter(p => p.category === c).length;
    return `<button class="pub-filter-btn${i === 0 ? ' active' : ''}" data-cat="${c}">${c} <span style="opacity:.6">(${n})</span></button>`;
  }).join('');

  const cards = photos.map((photo, i) => `
    <div class="gallery-card" data-index="${i}" data-cat="${photo.category || ''}">
      ${photo.category ? `<span class="gallery-card-cat">${photo.category}</span>` : ''}
      <img src="${photo.thumb || photo.url}" alt="${photo.caption || ''}" loading="lazy">
      <div class="gallery-card-overlay">
        <p class="gallery-card-caption">${photo.caption || ''}</p>
      </div>
    </div>
  `).join('');

  main.innerHTML = `
    <div class="container">
      <div class="gallery-filters">${catBtns}</div>
      <div class="gallery-grid">${cards}</div>
    </div>

    <!-- Lightbox (outside container, full-viewport) -->
    <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Photo lightbox">
      <button class="lightbox-btn lightbox-prev" id="lb-prev" aria-label="Previous photo">&#8592;</button>
      <div class="lightbox-inner">
        <button class="lightbox-close" id="lb-close" aria-label="Close lightbox">&times;</button>
        <img class="lightbox-img" id="lb-img" src="" alt="">
        <p class="lightbox-caption" id="lb-caption"></p>
        <span class="lightbox-counter" id="lb-counter"></span>
      </div>
      <button class="lightbox-btn lightbox-next" id="lb-next" aria-label="Next photo">&#8594;</button>
    </div>
  `;

  // ---- Category filter ----
  main.querySelectorAll('.pub-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      main.querySelectorAll('.pub-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      main.querySelectorAll('.gallery-card').forEach(card => {
        card.style.display = (cat === 'All' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });

  // ---- Lightbox ----
  const lightbox = document.getElementById('lightbox');
  const lbImg    = document.getElementById('lb-img');
  const lbCap    = document.getElementById('lb-caption');
  const lbCtr    = document.getElementById('lb-counter');
  const lbClose  = document.getElementById('lb-close');
  const lbPrev   = document.getElementById('lb-prev');
  const lbNext   = document.getElementById('lb-next');

  let current = 0;

  function open(index) {
    current = ((index % photos.length) + photos.length) % photos.length;
    const p = photos[current];
    lbImg.src    = p.url;
    lbImg.alt    = p.caption || '';
    lbCap.textContent = p.caption || '';
    lbCtr.textContent = `${current + 1} / ${photos.length}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function close() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { lbImg.src = ''; }, 250);
  }

  main.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', () => open(parseInt(card.dataset.index, 10)));
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => open(current - 1));
  lbNext.addEventListener('click', () => open(current + 1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      { e.preventDefault(); close(); }
    if (e.key === 'ArrowLeft')   { e.preventDefault(); open(current - 1); }
    if (e.key === 'ArrowRight')  { e.preventDefault(); open(current + 1); }
  });
}

// ============================================================
// PAGE REGISTRY
// ============================================================
const PAGES = {
  about: {
    title:  'About',
    meta:   null,
    render: renderAbout,
  },
  research: {
    title:  'Research/Software',
    meta:   'Research interests, software tools &amp; active projects',
    render: renderResearch,
  },
  publications: {
    title:  'Publications',
    meta:   () => `${INFO.publications.length} publications`,
    render: renderPublications,
  },
  workexperience: {
    title:  'Work Experience',
    meta:   'Professional &amp; research positions',
    render: renderWorkExperience,
  },
  awards: {
    title:  'Awards &amp; Honors',
    meta:   'Recognition &amp; fellowships',
    render: renderAwards,
  },
  education: {
    title:  'Education',
    meta:   'Academic background',
    render: renderEducation,
  },
  news: {
    title:  'News/Update',
    meta:   () => `${(INFO.news || []).length} updates`,
    render: renderNews,
  },
  gallery: {
    title:  'Gallery',
    meta:   () => `${(INFO.gallery || []).length} photos`,
    render: renderGallery,
  },
  contact: {
    title:  'Contact',
    meta:   'Get in touch',
    render: renderContact,
  },
};

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const pageKey = document.body.dataset.page;
  const page    = PAGES[pageKey];

  if (page) {
    const meta = typeof page.meta === 'function' ? page.meta() : page.meta;
    document.title = `${page.title.replace(/&amp;/g, '&')} — ${INFO.name}`;
    buildNav(pageKey);
    buildBanner(page.title, meta);
    page.render($p('page-content'));
  } else {
    buildNav(null);
  }

  buildFooter();
  initScrollTop();
});
