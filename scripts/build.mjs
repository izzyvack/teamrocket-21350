// Build static pages from the team's editable content.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { team, programs, robots, members, seasons, outreach, sponsors, sponsorships } from '../team-data.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../public');
const suppliedBasePath = String(process.env.SITE_BASE_PATH || '').trim();
const basePath = '/' + suppliedBasePath.replace(/^\/+|\/+$/g, '') + '/';
const normalizedBasePath = basePath === '//' ? '/' : basePath;
await mkdir(resolve(root, 'assets'), { recursive: true });
const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// All decorative stars use the same unfilled, five-point outline.
const starPoints = '24,3 30.2,16.2 44.7,18 34,28 36.8,42.5 24,35.5 11.2,42.5 14,28 3.3,18 17.8,16.2';
const star = (className = '') => `<svg class="star ${className}" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><polygon points="${starPoints}"/></svg>`;
const plus = '<span class="plus" aria-hidden="true">+</span>';
const ext = (href, label, cls = 'text-link') => `<a class="${esc(cls)}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}<span class="sr-only"> (opens in a new tab)</span></a>`;
const btn = (href, label, cls = '') => `<a class="button ${cls}" href="${esc(href)}">${label}</a>`;
const photo = (src, alt, caption = '', cls = '', priority = false) => `<figure class="photo ${cls}"><a class="photo-open" href="${esc(src)}" data-lightbox data-caption="${esc(caption || alt)}" aria-label="Enlarge photo: ${esc(alt)}"><img src="${esc(src)}" alt="${esc(alt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><span class="photo-expand" aria-hidden="true">+</span></a>${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}</figure>`;
function outreachPhotos(entry) {
  const images = entry.images || (entry.image ? [{ src: entry.image, alt: entry.imageAlt || entry.title, caption: entry.imageCaption }] : []);
  if (!images.length) return '';
  return `<div class="outreach-gallery${entry.compactPhotos ? ' outreach-gallery-compact' : ''}${images.length === 1 ? ' outreach-gallery-single' : ''}">${images.map(p => photo(p.src, p.alt || entry.title, p.caption || '', 'outreach-photo')).join('')}</div>`;
}

const links = [['team', 'Team'], ['robot', 'Robot'], ['outreach', 'Outreach'], ['awards', 'Achievements'], ['support', 'Sponsors'], ['contact', 'Contact']];
function header(page) {
  return `<header class="site-header"><div class="nav-shell">
    <a class="brand" href="index.html" aria-label="Team Rocket home"><img class="brand-mark" src="${esc(team.logo)}" alt="" width="46" height="54"><span class="brand-type">TEAM ROCKET<span>FTC ${esc(team.number)}</span></span></a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav"><span class="menu-word">Menu</span><span class="menu-lines" aria-hidden="true"></span></button>
    <nav id="main-nav" class="main-nav" aria-label="Main navigation">${links.map(([id, label]) => `<a href="${id}.html" ${page === id ? 'aria-current="page"' : ''}>${label}</a>`).join('')}</nav>
  </div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="container">
    <div class="footer-top"><div class="footer-identity"><a href="index.html" class="footer-name">TEAM ROCKET</a><p>FTC ${esc(team.number)}<br>${esc(team.location)}</p></div>
      <nav class="footer-links" aria-label="Footer navigation"><a href="team.html">Our team</a><a href="outreach.html">Outreach</a><a href="awards.html">Achievements</a><a href="support.html">Sponsorship</a></nav>
      <div class="footer-contact"><p>Contact us</p><a href="mailto:${esc(team.email)}">${esc(team.email)}</a>${ext(team.instagram, 'Instagram')}</div>
    </div>
    <div class="footer-bottom"><span>© <span data-year>${new Date().getFullYear()}</span> Team Rocket</span><a href="#top">Back to top</a></div>
  </div></footer>`;
}
function pageHead(title, intro = '') {
  return `<section class="page-heading"><div class="container page-heading-grid"><div><h1 class="display">${esc(title)}</h1>${intro ? `<p>${esc(intro)}</p>` : ''}</div>${star('page-star')}</div></section>`;
}
function sponsorSection(homepage = false) {
  if (!sponsors.length) return '';
  return `<section class="container sponsors-section" aria-labelledby="sponsors-title"><h2 id="sponsors-title" class="display section-title">Our Sponsors</h2><div class="sponsors-grid"><ul class="sponsor-list">${sponsors.map(s => {
    const mark = s.image ? `<img src="${esc(s.image)}" alt="${esc(s.name)} logo" loading="lazy" width="300" height="160">` : `<span class="sponsor-name">${esc(s.name)}</span>`;
    return `<li>${s.website ? `<a class="sponsor-mark" href="${esc(s.website)}" target="_blank" rel="noopener noreferrer">${mark}<span class="sr-only"> (opens in a new tab)</span></a>` : `<div class="sponsor-mark">${mark}</div>`}</li>`;
  }).join('')}</ul><div class="sponsor-note"><p>${esc(team.sponsorThanks)}</p><p>If you are interested in becoming a sponsor, learn more <a href="${homepage ? 'support.html' : '#sponsorship-levels'}">here</a>.</p></div></div></section>`;
}
function callout(title, copy, link = 'contact.html', label = 'Contact us') {
  return `<section class="callout"><div class="container callout-grid"><div><h2>${esc(title)}</h2><p>${esc(copy)}</p></div>${btn(link, label, 'button-light')}</div></section>`;
}
function layout(id, title, description, content) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  ${id === '404' ? `<base href="${esc(normalizedBasePath)}">` : ''}
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#705bd5">
  <meta name="site-version" content="1.4.0">
  <title>${esc(title)} | Team Rocket FTC 21350</title>
  <meta name="description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)} | Team Rocket FTC 21350">
  <meta property="og:description" content="${esc(description)}">
  <link rel="icon" href="assets/favicon.svg?v=5" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?v=5">
  <script src="app.js?v=5" defer></script>
</head>
<body id="top" data-page="${id}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header(id)}
  <main id="main">${content}</main>
  ${footer()}
  <dialog class="lightbox" aria-label="Photo preview"><button class="lightbox-close" aria-label="Close photo preview">×</button><img class="lightbox-image" alt=""><p class="lightbox-caption"></p></dialog>
  <div class="toast" role="status" aria-live="polite"></div>
</body>
</html>`;
}

const home = `
<section class="hero"><div class="container hero-grid">
  <div class="hero-copy"><p class="eyebrow">FIRST Tech Challenge Team ${esc(team.number)}</p>
    <h1 class="display hero-title">TEAM<br><span>ROCKET</span></h1>
    <p class="hero-description">${esc(team.intro)}</p>
    <div class="button-row">${btn('team.html', 'Meet our team')}${btn('awards.html', 'Our achievements', 'button-red')}</div>
    <p class="hero-location">${esc(team.location)}<span>Est. ${esc(team.founded)}</span></p>
  </div>
  <div class="hero-visual">${star('hero-star')}${photo(team.photo.image, team.photo.alt, team.photo.caption, 'hero-photo', true)}</div>
</div></section>
<section class="section container about-section">
  <div class="section-heading"><h2 class="display section-title">Our Mission</h2></div>
  <div class="about-copy"><p>${esc(team.mission)}</p><a class="text-link" href="team.html">More about the team</a></div>
</section>
${sponsorSection(true)}
${callout('Support Team Rocket', 'Sponsorships help cover robot materials, competition fees, and our work in the community.', 'support.html', 'Sponsorship information')}`;

const teamPage = `${pageHead('Our Team')}
<div class="container program-sections">${programs.map(p => `<section class="program-section"><div class="program-logo"><img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" loading="lazy" decoding="async"></div><div class="program-copy"><h2 class="display section-title">${esc(p.name)}</h2><p>${esc(p.description)}</p>${ext(p.website, esc(p.linkLabel))}</div></section>`).join('')}</div>
<section class="container team-intro">
  ${photo(team.photo.image, team.photo.alt, team.photo.caption, 'team-wide', true)}
  <div class="team-intro-copy"><p class="eyebrow">Established ${esc(team.founded)}</p><h2 class="display section-title">Hi! We're Team Rocket!</h2><p>${esc(team.about)}</p><p>${esc('We aim to ' + team.mission.replace(/^To\s+/, ''))}</p></div>
</section>
<section class="section container"><div class="section-heading-row"><h2 class="display section-title">Team Members</h2></div>
  <div class="member-grid">${members.map(m => `<article class="member">${m.image ? `<div class="member-image"><img src="${esc(m.image)}" alt="${esc(m.name)}, Team Rocket member" loading="lazy" width="600" height="720" style="object-position:${esc(m.position || '50% 50%')}"></div>` : ''}<h3>${esc(m.name)}</h3>${m.area && m.area.toLowerCase() !== 'team member' ? `<p class="member-role">${esc(m.area)}</p>` : ''}<p class="member-bio">${esc(m.bio)}</p></article>`).join('')}</div>
</section>
${callout('Interested in joining?', 'Contact us to ask about the team and opportunities to get involved.', 'contact.html', 'Contact the team!')}`;

const robotPage = `${pageHead('Our Robot')}
<div class="container robot-seasons">${robots.map((r, i) => `<section class="robot-showcase${r.image ? '' : ' robot-showcase-text'}" aria-labelledby="robot-season-${i}">${r.image ? photo(r.image, r.alt || `${r.game} robot`, `${r.game}, ${r.season}`, 'robot-large', i === 0) : ''}<div class="robot-story"><p class="eyebrow">${esc(r.season)} season</p><h2 id="robot-season-${i}" class="display section-title">${esc(r.game)}</h2></div>${r.resultsSeason ? btn('awards.html?season=' + encodeURIComponent(r.resultsSeason), 'View season results', 'button-ghost robot-results') : ''}</section>`).join('')}</div>
<section class="container robot-update"><div><h2>Updates from the team</h2><p>See more of our robot and competitions on Instagram.</p></div>${ext(team.instagram, esc(team.instagramHandle))}</section>`;

const outreachPage = `${pageHead('Outreach')}
<div class="container outreach-stories">${outreach.map(p => `<section class="outreach-story" id="${esc(p.id)}"><div class="outreach-context"><h2 class="display">${esc(p.title)}</h2>${p.partner ? `<p>${esc(p.partner)}</p>` : ''}${p.location ? `<p>${esc(p.location)}</p>` : ''}${p.duration ? `<p>${esc(p.duration)}</p>` : ''}</div><div class="outreach-story-copy">${(p.paragraphs || [p.description, p.detail].filter(Boolean)).map(t => `<p>${esc(t)}</p>`).join('')}${(p.topics || []).map(t => `<div class="outreach-topic"><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>`).join('')}${outreachPhotos(p)}${p.gallery ? ext(p.gallery, 'View workshop photos') : ''}</div></section>`).join('')}</div>
${callout('Work with us', 'If your school or organization is interested in a STEM workshop, contact us to discuss a possible collaboration.', 'contact.html', 'Contact us about outreach!')}`;

const awardsPage = `${pageHead('Achievements')}
<section class="container awards-section"><div class="award-filters" aria-label="Filter achievements by season"><button type="button" data-filter="all" aria-pressed="true">All seasons</button>${seasons.map(s => `<button type="button" data-filter="${s.id}" aria-pressed="false">${s.label}</button>`).join('')}</div><p class="filter-status sr-only" aria-live="polite"></p>
  <div class="season-list">${seasons.map(s => `<article class="season" data-season="${s.id}"><div class="season-side"><h2 class="display">${esc(s.label)}</h2><p class="game-name">${esc(s.game)}</p></div><div class="season-content"><ul class="award-list">${s.highlights.map(a => `<li><h3>${esc(a.title)}</h3><p>${esc(a.event)}</p></li>`).join('')}</ul>${ext(s.source, s.id === '2022' ? 'Original team website' : 'Official FIRST results', 'source-link')}</div></article>`).join('')}</div>
</section>`;

const supportPage = `${pageHead('Sponsorship')}
${sponsorSection()}
<section class="container support-intro"><h2 class="display section-title">How Your Support Helps</h2><div><p>Sponsorships help cover robot parts, tools, competition registration, travel, and outreach materials. Your contribution supports our members’ engineering experience and the STEM programs we share with other students.</p><p>To become a sponsor, contact us at <a class="inline-link" href="mailto:${esc(team.email)}">${esc(team.email)}</a>.</p></div></section>
<section id="sponsorship-levels" class="section container sponsorship-section"><div class="section-heading-row"><h2 class="display section-title">Sponsorship Levels</h2></div>
  <div class="tier-list">${sponsorships.map((s, i) => `<details class="tier" ${i === 0 ? 'open' : ''}><summary><span class="tier-name">${esc(s.name)}</span><span class="tier-amount">$${s.amount.toLocaleString('en-US')}<small>+</small></span>${plus}</summary><div class="tier-content"><ul>${s.benefits.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div></details>`).join('')}</div>
</section>
<section class="container other-support"><div><h2>Materials &amp; Mentorship</h2><p>We greatly appreciate any form of donation, including but not limited to tools and materials. We are also open to any mentorship in engineering or outreach expertise.</p></div>${btn('contact.html', 'Contact us', 'button-ghost')}</section>`;

const contactPage = `${pageHead('Contact Us')}
<section class="container contact-grid"><div class="contact-info"><div class="contact-item"><h2>Email</h2><a class="contact-email" href="mailto:${esc(team.email)}">${esc(team.email)}</a><button class="copy-email" type="button" data-copy="${esc(team.email)}">Copy email address</button></div><div class="contact-item"><h2>Instagram</h2>${ext(team.instagram, esc(team.instagramHandle))}</div><div class="contact-item"><h2>Location</h2><p>${esc(team.location)}</p></div></div></section>`;

const pages = [
  ['index', 'Home', team.intro, home],
  ['team', 'Our Team', 'Meet Team Rocket FTC 21350, a community robotics team in Naperville, Illinois.', teamPage],
  ['robot', 'Our Robot', 'Team Rocket’s competition robot and engineering work for FIRST Tech Challenge.', robotPage],
  ['outreach', 'Outreach', 'Team Rocket’s robotics camps, school demonstrations, FLL mentoring, and community STEM programs.', outreachPage],
  ['awards', 'Achievements', 'Team Rocket FTC 21350 awards and competition results by season.', awardsPage],
  ['support', 'Sponsorship', 'Support Team Rocket FTC 21350 through sponsorship, materials, or mentorship.', supportPage],
  ['contact', 'Contact Us', 'Contact Team Rocket FTC 21350 about sponsorship, outreach, mentorship, or joining the team.', contactPage],
  ['404', 'Page Not Found', 'Return to the Team Rocket website.', `<section class="container not-found"><p class="eyebrow">404</p><h1 class="display">Page Not Found</h1><p>The page you requested could not be found.</p>${btn('index.html', 'Return to home')}</section>`]
];
for (const [id, title, description, content] of pages) await writeFile(resolve(root, `${id}.html`), layout(id, title, description, content));
await writeFile(resolve(root, 'assets/favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#705bd5"/><polygon points="${starPoints}" transform="translate(4 4) scale(.8333)" fill="none" stroke="white" stroke-width="2.4" stroke-linejoin="round"/></svg>`);
console.log(`Built ${pages.length} pages.`);
