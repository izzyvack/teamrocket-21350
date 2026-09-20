// Build static pages from the team's editable content.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { team, members, seasons, outreach, sponsors, sponsorships } from '../team-data.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../public');
const suppliedBasePath = String(process.env.SITE_BASE_PATH || '').trim();
const basePath = '/' + suppliedBasePath.replace(/^\/+|\/+$/g, '') + '/';
const normalizedBasePath = basePath === '//' ? '/' : basePath;
await mkdir(resolve(root, 'assets'), { recursive: true });
const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
// All decorative stars use the same unfilled, five-point outline.
const starPoints = '24,3 30.2,16.2 44.7,18 34,28 36.8,42.5 24,35.5 11.2,42.5 14,28 3.3,18 17.8,16.2';
const star = (className = '') => `<svg class="star ${className}" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" aria-hidden="true"><polygon points="${starPoints}"/></svg>`;
const arrow = (diagonal = false) => `<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">${diagonal ? '<path d="M5 19 19 5M5 5h14v14"/>' : '<path d="M4 12h16m-7-7 7 7-7 7"/>'}</svg>`;
const plus = '<span class="plus" aria-hidden="true">+</span>';
const ext = (href, label, cls = 'text-link') => `<a class="${esc(cls)}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}${arrow(true)}<span class="sr-only"> (opens in a new tab)</span></a>`;
const btn = (href, label, cls = '') => `<a class="button ${cls}" href="${esc(href)}">${label}${arrow()}</a>`;
const photo = (src, alt, caption = '', cls = '', priority = false) => `<figure class="photo ${cls}"><a class="photo-open" href="${esc(src)}" data-lightbox data-caption="${esc(caption || alt)}" aria-label="Enlarge photo: ${esc(alt)}"><img src="${esc(src)}" alt="${esc(alt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><span class="photo-expand" aria-hidden="true">${arrow(true)}</span></a>${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}</figure>`;

const links = [['team', 'Team'], ['robot', 'Robot'], ['outreach', 'Outreach'], ['awards', 'Achievements'], ['support', 'Sponsors'], ['contact', 'Contact']];
function header(page) {
  return `<header class="site-header"><div class="nav-shell">
    <a class="brand" href="index.html" aria-label="Team Rocket home"><img class="brand-mark" src="assets/logo.svg" alt="" width="46" height="54"><span class="brand-type">TEAM ROCKET<span>FTC ${esc(team.number)}</span></span></a>
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
    <div class="footer-bottom"><span>© <span data-year>${new Date().getFullYear()}</span> Team Rocket</span><a href="#top">Back to top ↑</a></div>
  </div></footer>`;
}
function pageHead(title, intro = '') {
  return `<section class="page-heading"><div class="container page-heading-grid"><div><h1 class="display">${esc(title)}</h1>${intro ? `<p>${esc(intro)}</p>` : ''}</div>${star('page-star')}</div></section>`;
}
function sponsorSection() {
  if (!sponsors.length) return '';
  return `<section class="container sponsors-section" aria-labelledby="sponsors-title"><h2 id="sponsors-title" class="display section-title">Our Sponsors</h2><ul class="sponsor-list">${sponsors.map(s => {
    const mark = s.image ? `<img src="${esc(s.image)}" alt="${esc(s.name)} logo" loading="lazy" width="300" height="160">` : `<span class="sponsor-name">${esc(s.name)}</span>`;
    return `<li>${s.website ? `<a class="sponsor-mark" href="${esc(s.website)}" target="_blank" rel="noopener noreferrer">${mark}<span class="sr-only"> (opens in a new tab)</span></a>` : `<div class="sponsor-mark">${mark}</div>`}</li>`;
  }).join('')}</ul></section>`;
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
  <title>${esc(title)} | Team Rocket FTC 21350</title>
  <meta name="description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)} | Team Rocket FTC 21350">
  <meta property="og:description" content="${esc(description)}">
  <link rel="icon" href="assets/favicon.svg?v=3" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css?v=3">
  <script src="app.js?v=3" defer></script>
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
  <div class="hero-copy"><p class="eyebrow">FIRST Tech Challenge 21350</p>
    <h1 class="display hero-title">TEAM<br><span>ROCKET</span></h1>
    <p class="hero-description">${esc(team.intro)}</p>
    <div class="button-row">${btn('team.html', 'Meet our team')}<a class="text-link" href="awards.html">Our achievements${arrow()}</a></div>
    <p class="hero-location">${esc(team.location)}<span>Est. ${esc(team.founded)}</span></p>
  </div>
  <div class="hero-visual">${star('hero-star')}${photo(team.photo.image, team.photo.alt, team.photo.caption, 'hero-photo', true)}</div>
</div></section>
<section class="section container about-section">
  <div class="section-heading"><p class="eyebrow">About us</p><h2 class="display section-title">Who We Are</h2></div>
  <div class="about-copy"><p>${esc(team.about)}</p><h3>Our Mission</h3><p>${esc(team.mission)}</p><a class="text-link" href="team.html">More about the team${arrow()}</a></div>
</section>
<section class="competition-section"><div class="container competition-grid">
  ${photo(team.robot.image, team.robot.alt, `${team.robot.game}, ${team.robot.season}`, 'competition-feature')}
  <div class="competition-copy"><p class="eyebrow">FIRST Tech Challenge</p><h2 class="display section-title">Competition</h2><p>${esc(team.competitionSummary)}</p>${team.featuredResult ? `<div class="result-highlight"><span class="result-year">${esc(team.featuredResult.season)}</span><h3>${esc(team.featuredResult.title)}</h3><p>${esc(team.featuredResult.event)}</p></div>` : ''}<div class="button-row"><a class="text-link" href="robot.html">Our robot${arrow()}</a><a class="text-link" href="awards.html">All results${arrow()}</a></div></div>
</div></section>
<section class="section container home-outreach"><div class="section-heading-row"><div><p class="eyebrow">In our community</p><h2 class="display section-title">Outreach</h2></div><p>We share our interest in STEM through programming classes and design workshops.</p></div>
  <div class="project-list">${outreach.map(p => `<a class="project-row" href="outreach.html#${esc(p.id)}"><div><h3>${esc(p.title)}</h3><p>${esc([p.partner, p.location].filter(Boolean).join(', '))}</p></div><span>${esc(p.duration)}</span>${arrow(true)}</a>`).join('')}</div>
</section>
${sponsorSection()}
${callout('Support Team Rocket', 'Sponsorships help cover robot materials, competition fees, and our work in the community.', 'support.html', 'Sponsorship information')}`;

const teamPage = `${pageHead('Our Team')}
<section class="container team-intro">
  ${photo(team.photo.image, team.photo.alt, team.photo.caption, 'team-wide', true)}
  <div class="team-intro-copy"><p class="eyebrow">Established ${esc(team.founded)}</p><h2 class="display section-title">About Team Rocket</h2><p>${esc(team.about)}</p><p>${esc(team.mission)}</p></div>
</section>
<section class="section container"><div class="section-heading-row"><h2 class="display section-title">Team Members</h2><p>${esc(team.rosterSeason)} roster</p></div>
  <div class="member-grid">${members.map(m => `<article class="member"><div class="member-image"><img src="${esc(m.image)}" alt="${esc(m.name)}, Team Rocket member" loading="lazy" width="600" height="720" style="object-position:${esc(m.position)}"></div><h3>${esc(m.name)}</h3><p class="member-role">${esc(m.area)}</p><details class="member-bio"><summary>About ${esc(m.name)}${plus}</summary><div><p>${esc(m.bio)}</p><p class="member-school">${esc(m.school)}</p></div></details></article>`).join('')}</div>
</section>
${callout('Interested in joining?', 'Contact us to ask about the team and opportunities to get involved.', 'contact.html', 'Contact the team')}`;

const robotPage = `${pageHead('Our Robot')}
<section class="container robot-showcase">
  ${photo(team.robot.image, team.robot.alt, `${team.robot.game}, ${team.robot.season}`, 'robot-large', true)}
  <div class="robot-story"><p class="eyebrow">${esc(team.robot.season)} season</p><h2 class="display section-title">${esc(team.robot.game)}</h2><p>${esc(team.robot.description)}</p>${team.robot.specs.length ? `<dl class="spec-list">${team.robot.specs.map(s => `<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`).join('')}</dl>` : ''}${btn('awards.html' + (team.robot.resultsSeason ? '?season=' + encodeURIComponent(team.robot.resultsSeason) : ''), 'View season results', 'button-ghost')}</div>
</section>
<section class="section container engineering-section"><div class="section-heading-row"><h2 class="display section-title">Design &amp; Development</h2><p>Members contribute to each stage of the robot’s development throughout the season.</p></div>
  <div class="process-list"><article><h3>Mechanical Design</h3><p>We use CAD to plan the robot’s structure and mechanisms before building and assembling parts.</p></article><article><h3>Programming</h3><p>Our software team programs the robot’s autonomous routines and driver controls.</p></article><article><h3>Testing</h3><p>We use practice and competition results to identify problems and improve the robot.</p></article></div>
</section>
<section class="container robot-update"><div><h2>Updates from the team</h2><p>See more of our robot and competitions on Instagram.</p></div>${ext(team.instagram, esc(team.instagramHandle))}</section>`;

const outreachPage = `${pageHead('Outreach', 'We work with schools, community organizations, and other robotics teams to make STEM education more accessible.')}
<div class="container outreach-stories">${outreach.map(p => `<section class="outreach-story" id="${esc(p.id)}"><div class="outreach-context">${p.partner ? `<p class="eyebrow">${esc(p.partner)}</p>` : ''}<h2 class="display">${esc(p.title)}</h2>${p.location ? `<p>${esc(p.location)}</p>` : ''}${p.duration ? `<p>${esc(p.duration)}</p>` : ''}</div><div class="outreach-story-copy"><p>${esc(p.description)}</p>${p.detail ? `<p>${esc(p.detail)}</p>` : ''}${p.image ? photo(p.image, p.imageAlt || p.title, p.imageCaption || '', 'outreach-photo') : ''}${p.gallery ? ext(p.gallery, 'View workshop photos') : ''}</div></section>`).join('')}</div>
${callout('Work with us', 'If your school or organization is interested in a STEM workshop, contact us to discuss a possible collaboration.', 'contact.html', 'Contact us about outreach')}`;

const awardsPage = `${pageHead('Achievements')}
<section class="container awards-section"><div class="award-filters" aria-label="Filter achievements by season"><button type="button" data-filter="all" aria-pressed="true">All seasons</button>${seasons.map(s => `<button type="button" data-filter="${s.id}" aria-pressed="false">${s.label}</button>`).join('')}</div><p class="filter-status sr-only" aria-live="polite"></p>
  <div class="season-list">${seasons.map(s => `<article class="season" data-season="${s.id}"><div class="season-side"><h2 class="display">${esc(s.label)}</h2><p class="game-name">${esc(s.game)}</p>${star('season-star')}</div><div class="season-content"><ul class="award-list">${s.highlights.map(a => `<li><h3>${esc(a.title)}</h3><p>${esc(a.event)}</p></li>`).join('')}</ul>${ext(s.source, s.id === '2022' ? 'Original team website' : 'Official FIRST results', 'source-link')}</div></article>`).join('')}</div>
</section>`;

const supportPage = `${pageHead('Sponsorship', 'As a community team, we rely on sponsorships and donations to help fund our season. Thank you for supporting Team Rocket.')}
${sponsorSection()}
<section class="container support-intro"><h2 class="display section-title">How Your Support Helps</h2><div><p>Sponsorships help cover robot parts, tools, competition registration, travel, and outreach materials. Your contribution supports our members’ engineering experience and the STEM programs we share with other students.</p><p>To become a sponsor, contact us at <a class="inline-link" href="mailto:${esc(team.email)}">${esc(team.email)}</a>.</p></div></section>
<section class="section container sponsorship-section"><div class="section-heading-row"><h2 class="display section-title">Sponsorship Levels</h2><p>Select a level to see its benefits. Contact us to confirm current sponsorship options.</p></div>
  <div class="tier-list">${sponsorships.map((s, i) => `<details class="tier" ${i === 0 ? 'open' : ''}><summary><span class="tier-name">${esc(s.name)}</span><span class="tier-amount">$${s.amount.toLocaleString('en-US')}<small>+</small></span>${plus}</summary><div class="tier-content"><ul>${s.benefits.map(b => `<li>${esc(b)}</li>`).join('')}</ul>${btn('contact.html', `Inquire about ${esc(s.name)}`, 'button-small')}</div></details>`).join('')}</div>
</section>
<section class="container other-support"><div><h2>Materials &amp; Mentorship</h2><p>We also welcome contributions of tools, materials, and engineering expertise.</p></div>${btn('contact.html', 'Contact us', 'button-ghost')}</section>`;

const contactPage = `${pageHead('Contact Us', 'For questions about sponsorship, outreach, mentorship, or joining the team, please get in touch.')}
<section class="container contact-grid"><div class="contact-info"><div class="contact-item"><h2>Email</h2><a class="contact-email" href="mailto:${esc(team.email)}">${esc(team.email)}</a><button class="copy-email" type="button" data-copy="${esc(team.email)}">Copy email address</button></div><div class="contact-item"><h2>Instagram</h2>${ext(team.instagram, esc(team.instagramHandle))}</div><div class="contact-item"><h2>Location</h2><p>${esc(team.location)}</p></div></div></section>`;

const pages = [
  ['index', 'Home', team.intro, home],
  ['team', 'Our Team', 'Meet Team Rocket FTC 21350, an all-girls community robotics team in Naperville, Illinois.', teamPage],
  ['robot', 'Our Robot', 'Team Rocket’s competition robot and engineering work for FIRST Tech Challenge.', robotPage],
  ['outreach', 'Outreach', 'Team Rocket’s Python programming camp with Project Vision and CAD workshop at the DECODE kickoff.', outreachPage],
  ['awards', 'Achievements', 'Team Rocket FTC 21350 awards and competition results by season.', awardsPage],
  ['support', 'Sponsorship', 'Support Team Rocket FTC 21350 through sponsorship, materials, or mentorship.', supportPage],
  ['contact', 'Contact Us', 'Contact Team Rocket FTC 21350 about sponsorship, outreach, mentorship, or joining the team.', contactPage],
  ['404', 'Page Not Found', 'Return to the Team Rocket website.', `<section class="container not-found"><p class="eyebrow">404</p><h1 class="display">Page Not Found</h1><p>The page you requested could not be found.</p>${btn('index.html', 'Return to home')}</section>`]
];
for (const [id, title, description, content] of pages) await writeFile(resolve(root, `${id}.html`), layout(id, title, description, content));
await writeFile(resolve(root, 'assets/favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="6" fill="#705bd5"/><polygon points="${starPoints}" transform="translate(4 4) scale(.8333)" fill="none" stroke="white" stroke-width="2.4" stroke-linejoin="round"/></svg>`);
console.log(`Built ${pages.length} pages.`);
