// Generates real HTML pages: readable without JavaScript and easy to host anywhere.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { team, members, seasons, outreach, sponsorships } from '../team-data.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../public');
// configure-pages supplies this automatically for project URLs and custom domains.
const suppliedBasePath = String(process.env.SITE_BASE_PATH || '').trim();
const basePath = '/' + suppliedBasePath.replace(/^\/+|\/+$/g, '') + '/';
const normalizedBasePath = basePath === '//' ? '/' : basePath;
await mkdir(root, { recursive: true });
const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const spark = (className = '') => `<svg class="spark ${className}" viewBox="0 0 48 48" aria-hidden="true"><path d="M24 0C26.4 17.2 30.8 21.6 48 24C30.8 26.4 26.4 30.8 24 48C21.6 30.8 17.2 26.4 0 24C17.2 21.6 21.6 17.2 24 0Z" fill="currentColor"/></svg>`;
const arrow = (diagonal = false) => `<svg class="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">${diagonal ? '<path d="M5 19 19 5M5 5h14v14"/>' : '<path d="M4 12h16m-7-7 7 7-7 7"/>'}</svg>`;
const plus = '<span class="plus" aria-hidden="true">+</span>';
const ext = (href, label, cls = 'text-link') => `<a class="${esc(cls)}" href="${esc(href)}" target="_blank" rel="noopener noreferrer">${label}${arrow(true)}<span class="sr-only"> (opens in a new tab)</span></a>`;
const btn = (href, label, cls = '') => `<a class="button ${cls}" href="${esc(href)}">${label}${arrow()}</a>`;
const eyebrow = (number, label) => `<p class="eyebrow"><span>${esc(number)}</span><span>${esc(label)}</span></p>`;
const photo = (src, alt, caption = '', cls = '', priority = false, position = '') => `<figure class="photo ${cls}"><a class="photo-open" href="${esc(src)}" data-lightbox data-caption="${esc(caption || alt)}" aria-label="Enlarge photo: ${esc(alt)}"><img src="${esc(src)}" alt="${esc(alt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" ${position ? `style="object-position:${esc(position)}"` : ''}><span class="photo-expand" aria-hidden="true">${arrow(true)}</span></a>${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}</figure>`;

const links = [['team', 'Team'], ['robot', 'Robot'], ['outreach', 'Outreach'], ['awards', 'Awards'], ['support', 'Support']];
function header(page) {
  return `<header class="site-header"><div class="nav-shell">
    <a class="brand" href="index.html" aria-label="Team Rocket home"><span class="brand-mark"><img src="assets/logo.jpg" alt="" width="76" height="72"></span><span class="brand-type">TEAM ROCKET<span>FTC · ${esc(team.number)}</span></span></a>
    <button class="menu-toggle" aria-expanded="false" aria-controls="main-nav"><span class="menu-word">Menu</span><span class="menu-lines" aria-hidden="true"></span></button>
    <nav id="main-nav" class="main-nav" aria-label="Main navigation">${links.map(([id, label]) => `<a href="${id}.html" ${page === id ? 'aria-current="page"' : ''}>${label}</a>`).join('')}<a class="nav-contact" href="contact.html" ${page === 'contact' ? 'aria-current="page"' : ''}>Let’s talk ${arrow(true)}</a></nav>
  </div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container">
    <div class="footer-top"><div><p class="eyebrow">All girls. All in.</p><p>Built in Naperville.<br>Made for the next challenge.</p></div>
    <div class="footer-links"><a href="team.html">Meet the team</a><a href="outreach.html">Our outreach</a><a href="support.html">Support the mission</a></div>
    <div class="footer-links">${ext(team.instagram, 'Instagram')}<a href="mailto:${esc(team.email)}">${esc(team.email)}${arrow(true)}</a><a href="contact.html">Get in touch${arrow(true)}</a></div></div>
    <a href="index.html" class="footer-wordmark" aria-label="Team Rocket home">TEAM R<span class="wordmark-star">${spark()}</span>CKET</a>
    <div class="footer-bottom"><span>© <span data-year>${new Date().getFullYear()}</span> Team Rocket · FTC ${esc(team.number)}</span><span>${esc(team.location)}</span><a href="#top">Back to top ↑</a></div>
  </div></footer>`;
}

function lightbox() {
  return `<dialog class="lightbox" aria-label="Photo preview"><button class="lightbox-close" aria-label="Close photo preview">×</button><img class="lightbox-image" alt=""><p class="lightbox-caption"></p></dialog><div class="toast" role="status" aria-live="polite"></div>`;
}

function pageHead(section, title, intro, number = '21350') {
  return `<section class="page-heading container">${eyebrow(number, section)}<div class="page-heading-grid"><h1 class="display">${title}</h1><div class="page-intro">${spark('red')}<p>${intro}</p></div></div></section>`;
}

function callout(title = 'LET’S BUILD<br>SOMETHING.', copy = 'Have a workshop idea, a question, or a way to help? We’d love to hear it.', link = 'contact.html', label = 'Start a conversation') {
  return `<section class="callout"><div class="container callout-grid"><h2 class="display">${title}</h2><div><p>${copy}</p>${btn(link, label, 'button-light')}</div>${spark('callout-star')}</div></section>`;
}

function layout(id, title, description, content) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  ${id === '404' ? `<base href="${esc(normalizedBasePath)}">` : ''}
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#705bd5">
  <title>${esc(title)} | Team Rocket · FTC 21350</title>
  <meta name="description" content="${esc(description)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(title)} | Team Rocket FTC 21350">
  <meta property="og:description" content="${esc(description)}">
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>
<body id="top" data-page="${id}">
  <a class="skip-link" href="#main">Skip to content</a>
  ${header(id)}
  <main id="main">${content}</main>
  ${footer()}${lightbox()}
</body>
</html>`;
}

const home = `
<section class="hero"><div class="container hero-grid">
  <div class="hero-copy">${eyebrow('FTC 21350', 'Naperville, Illinois')}
    <h1 class="display hero-title">ALL GIRLS.<br><span>ALL IN.</span>${spark('hero-star')}</h1>
    <p class="hero-description">${esc(team.intro)}</p>
    <div class="button-row">${btn('team.html', 'Meet the crew')}${btn('robot.html', 'Explore the robot', 'button-ghost')}</div>
    <div class="hero-bottom"><span class="red-dot"></span> INDEPENDENT MINDS. ONE TEAM.</div>
  </div>
  <div class="hero-visual">
    <svg class="orbit-art" viewBox="0 0 650 640" aria-hidden="true"><ellipse cx="325" cy="320" rx="288" ry="242" transform="rotate(-30 325 320)"/><ellipse cx="325" cy="320" rx="280" ry="242" transform="rotate(30 325 320)"/><path d="M3 580 633 85"/><circle cx="583" cy="126" r="7"/></svg>
    <div class="hero-frame"><div class="frame-heading"><span>01 / THE CREW</span>${spark()}</div>${photo('assets/team.jpg', 'Team Rocket members with their medals and trophies', '', 'hero-photo', true)}<div class="frame-caption"><span>TEAM ROCKET</span><span>EST. ${esc(team.founded)}</span></div></div>
    <div class="number-tab" aria-hidden="true">21350</div>
    <span class="hero-annotation">A little team. A lot of drive.</span>
  </div>
</div></section>
<div class="signal-band" aria-label="Design. Build. Compete. Inspire."><div class="container"><span>DESIGN</span>${spark()}<span>BUILD</span>${spark()}<span>COMPETE</span>${spark()}<span>INSPIRE</span>${spark()}</div></div>
<section class="section container mission-section" data-reveal>${eyebrow('01', 'The mission')}
  <div class="mission-grid"><h2 class="display section-title">MORE THAN<br>A ROBOT.</h2><div><p class="lead">${esc(team.mission)}</p><p>From the first CAD sketch to the last match of the day, we learn by making things together. And when we learn something worth sharing, we bring it back to our community.</p><a class="text-link" href="team.html">This is Team Rocket${arrow()}</a></div></div>
  <div class="stat-strip"><div><strong>2022<span>↗</span></strong><p>Our rookie year</p></div><div><strong>02<span>↗</span></strong><p>State championship appearances<br><small>2023–24 &amp; 2024–25</small></p></div><div><strong>06<span>↗</span></strong><p>Weeks of Python outreach<br><small>With Project Vision</small></p></div></div>
</section>
<section class="container feature-grid" aria-label="Explore the team" data-reveal>
  <a class="robot-feature" href="robot.html"><div class="feature-image"><img src="assets/robot.jpg" alt="Team Rocket’s robot on the competition field" loading="lazy" width="1025" height="683"><span class="image-label">FROM THE ROBOT ARCHIVE / 2024–25</span></div><div class="feature-bottom"><div><p class="eyebrow">Built by us</p><h2 class="display">THE WORK.<br>THE ROBOT.</h2></div><span class="circle-arrow">${arrow(true)}</span></div></a>
  <a class="awards-feature" href="awards.html">${eyebrow('02', 'The record')}${spark('red')}<h2 class="display">EVERY SEASON.<br>A STEP UP.</h2><p>League winners. State competitors.<br>Always building.</p><span class="text-link">Explore our awards${arrow()}</span></a>
</section>
<section class="section container" data-reveal>${eyebrow('03', 'Outreach')}<div class="section-heading-row"><h2 class="display section-title">PASS IT<br>FORWARD.</h2><p>Skills are better when they’re shared.<br>Here’s how we take STEM beyond the field.</p></div><div class="project-list">${outreach.map(p => `<a class="project-row" href="outreach.html#${p.id}"><span class="project-index">${p.number}</span><div><h3>${esc(p.type)}</h3><p>${esc(p.partner)} · ${esc(p.location)}</p></div><span class="project-category">${p.id === 'python' ? 'EDUCATION' : 'DESIGN'}</span>${arrow(true)}</a>`).join('')}</div></section>
${callout('FUEL THE<br>NEXT IDEA.', 'Your support puts tools in our hands, gets our robot to the field, and helps us share STEM with more students.', 'support.html', 'Support Team Rocket')}`;

const teamPage = `${pageHead('Our team', 'DIFFERENT MINDS.<br><span>ONE ROCKET.</span>', 'Seven people. Different schools and interests. A shared place to try things, solve problems, and make engineering our own.')}
<section class="container team-intro" data-reveal>${photo('assets/team.jpg', 'Team Rocket members with medals and trophies', 'TEAM ROCKET / FROM THE TEAM ARCHIVE', 'team-wide', true)}<div class="team-intro-copy">${eyebrow('EST. 2022', 'Community built')}<h2 class="display">A TEAM<br>OF OUR OWN.</h2><p>${esc(team.intro)}</p><p>Hardware, CAD, software, and outreach all bring something different to the table. What connects us is a willingness to learn from each other.</p></div></section>
<section class="section container"><div class="section-heading-row">${eyebrow(team.rosterSeason, 'The crew')}<p class="small-copy">Meet the people behind our ${esc(team.rosterSeason)} season.</p></div>
<div class="member-grid">${members.map((m, i) => `<article class="member" data-reveal><div class="member-image"><img src="${esc(m.image)}" alt="${esc(m.name)}, Team Rocket member" loading="lazy" width="600" height="720" style="object-position:${esc(m.position)}"><span class="member-number">0${i + 1}</span></div><div class="member-heading"><h2>${esc(m.name)}</h2>${spark()}</div><p class="member-role">${esc(m.area)}</p><details class="member-bio"><summary>Meet ${esc(m.name)}${plus}</summary><div><p>${esc(m.bio)}</p><p class="member-school">${esc(m.school)}</p></div></details></article>`).join('')}</div></section>
<section class="values-section"><div class="container"><p class="eyebrow">What we stand for</p><h2 class="display">IDEAS WELCOME.<br>TOOLS SHARED.<br><span>EVERY VOICE HEARD.</span></h2></div></section>
${callout('PULL UP<br>A CHAIR.', 'Want to connect with the team, collaborate on outreach, or share your engineering experience?', 'contact.html', 'Talk to the team')}`;

const robotPage = `${pageHead('Our robot', 'BUILT. TESTED.<br><span>REBUILT.</span>', 'The robot is where our ideas meet the real world. Every match gives us a reason to go back to the workbench.')}
<section class="container robot-showcase" data-reveal><div class="robot-image-wrap">${photo(team.robot.image, team.robot.alt, `${team.robot.game} / ${team.robot.season}`, 'robot-large', true)}<span class="robot-number" aria-hidden="true">21350</span></div><div class="robot-story">${eyebrow(team.robot.season, 'Robot archive')}<h2 class="display">${esc(team.robot.game)}</h2><p class="lead">${esc(team.robot.name)}</p><p>${esc(team.robot.description)}</p>${team.robot.specs.length ? `<dl class="spec-list">${team.robot.specs.map(s => `<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`).join('')}</dl>` : ''}${btn('awards.html?season=2024', 'See the season’s results', 'button-ghost')}</div></section>
<section class="section container" data-reveal>${eyebrow('01—04', 'How we work')}<h2 class="display section-title">BACK TO<br>THE WORKBENCH.</h2><ol class="process-list"><li><span>01</span><h3>Design it.</h3><p>Sketch the possibilities. Work through them in CAD. Give an idea something to stand on.</p></li><li><span>02</span><h3>Build it.</h3><p>Bring the design into the real world, one assembly, connection, and adjustment at a time.</p></li><li><span>03</span><h3>Program it.</h3><p>Connect hardware and software so the robot can turn our decisions into movement.</p></li><li><span>04</span><h3>Make it better.</h3><p>Test, notice what happens, and return to the part that needs another look.</p></li></ol></section>
<section class="robot-update container">${spark('red')}<div><h2>There’s always another iteration.</h2><p>Follow the team for robot updates and moments from the season.</p></div>${ext(team.instagram, 'Follow along', 'button')}</section>
${callout('KNOW A THING<br>OR TWO?', 'We love connecting with people who build, design, and solve problems. Share your experience with the team.', 'contact.html?topic=Mentorship', 'Connect with us')}`;

const outreachPage = `${pageHead('Outreach', 'GOOD IDEAS<br><span>TRAVEL.</span>', 'We want more students to get the chance to build, code, and discover what they can do. So we take what we learn and pass it on.')}
<div class="container outreach-stories">${outreach.map(p => `<section class="outreach-story" id="${p.id}" data-reveal><div class="outreach-art ${p.id === 'cad' ? 'cad-art' : ''}" aria-hidden="true"><span class="art-label">TEAM ROCKET / ${p.id === 'python' ? 'CODE LAB' : 'DESIGN LAB'}</span>${p.id === 'python' ? `<strong>06<span>WEEKS</span></strong><div class="code-art"><span class="code-purple">for</span> idea <span class="code-purple">in</span> possibilities:<br>&nbsp;&nbsp;&nbsp;&nbsp;learn()<br>&nbsp;&nbsp;&nbsp;&nbsp;build()<br>&nbsp;&nbsp;&nbsp;&nbsp;share()</div>` : `<svg viewBox="0 0 440 350" fill="none"><g stroke="currentColor" stroke-width="2"><path d="m85 220 145 83 145-83V100L230 17 85 100v120Zm0-120 145 83 145-83M230 183v120M157 141V58M303 141V58M85 161l145 83 145-83"/><path d="M52 99v122m-7-122h14m-14 122h14M93 250l133 76m-138-69 9-14m124 90 9-14" stroke-dasharray="3 4"/><circle cx="230" cy="183" r="12"/></g></svg><strong>CAD</strong>`}<span class="art-caption">${esc(p.statLabel)}</span></div><div class="outreach-story-copy">${eyebrow(p.number, p.type)}<h2 class="display">${esc(p.title)}</h2><div class="location-line"><span>${esc(p.partner)}</span><span>${esc(p.location)}</span></div><p>${esc(p.description)}</p><p>${esc(p.detail)}</p>${ext(p.gallery, 'View the project gallery')}</div></section>`).join('')}</div>
<section class="outreach-manifesto"><div class="container"><p class="eyebrow">The point of it all</p><h2 class="display">SOMEONE’S FIRST<br>“I CAN DO THIS.”<br><span>THAT’S THE GOAL.</span></h2></div></section>
${callout('MAKE ROOM<br>FOR MORE.', 'Have a school, community group, or workshop idea? Let’s talk about bringing STEM to your community.', 'contact.html?topic=Outreach', 'Plan something together')}`;

const awardsPage = `${pageHead('Awards & milestones', 'A RECORD<br><span>OF THE WORK.</span>', 'The matches, milestones, and recognition that mark our progress. Every season adds a new chapter.')}
<section class="container awards-section"><div class="award-filters" aria-label="Filter awards by season"><button type="button" data-filter="all" aria-pressed="true">All seasons</button>${seasons.map(s => `<button type="button" data-filter="${s.id}" aria-pressed="false">${s.label}</button>`).join('')}</div><p class="filter-status sr-only" aria-live="polite"></p>
<div class="season-list">${seasons.map(s => `<article class="season" data-season="${s.id}"><div class="season-side"><p class="eyebrow">${esc(s.kicker)}</p><h2 class="display">${esc(s.label)}</h2><p class="game-name">${esc(s.game)}</p>${spark('red')}</div><div class="season-content"><ul class="award-list">${s.highlights.map(a => `<li><span class="award-symbol" aria-hidden="true">${spark()}</span><div><h3>${esc(a.title)}</h3><p>${esc(a.event)}</p></div><span class="award-type">${esc(a.type)}</span></li>`).join('')}</ul>${ext(s.source, s.id === '2022' ? 'Team season archive' : 'Official FIRST results', 'source-link')}</div></article>`).join('')}</div></section>
<section class="container awards-photo">${photo('assets/competition.jpg', 'Team Rocket at a robotics competition', 'THE PEOPLE BEHIND THE RESULTS', 'competition-photo')}<div>${spark('red')}<h2 class="display">ON TO<br>THE NEXT.</h2><p>We’re proud of the record. We’re even more excited about what we get to learn next.</p>${btn('team.html', 'Meet the team', 'button-ghost')}</div></section>
${callout('BE PART OF<br>WHAT’S NEXT.', 'Help us turn another season of ideas into a robot, an experience, and an opportunity to share.', 'support.html', 'Support the team')}`;

const supportPage = `${pageHead('Sponsorship', 'YOU MAKE<br><span>THE NEXT PART.</span>', 'Behind a working robot is a community that believes in the people building it. Help us get to the field—and bring more students along.')}
<section class="container support-intro" data-reveal><h2 class="display">EVERY PART<br>HAS A PURPOSE.</h2><div><p class="lead">Your support becomes something tangible.</p><p>Robot parts. Tools. Registration and competition fees. Presentation materials. Travel to events. The resources that let a student-led team keep learning and competing.</p><p>Contributions of every size help. For sponsorships or donations, get in touch with the team directly.</p>${btn('contact.html?topic=Sponsorship', 'Become a sponsor')}</div></section>
<section class="section container sponsorship-section">${eyebrow('Find your fit', 'Sponsorship levels')}<div class="section-heading-row"><h2 class="display section-title">FUEL THE<br>MISSION.</h2><p>Explore the ways to support the team.<br>Contact us to confirm this season’s opportunities.</p></div><div class="tier-list">${sponsorships.map((s, i) => `<details class="tier" ${i === 0 ? 'open' : ''}><summary><span class="tier-index">0${i + 1}</span><span class="tier-name"><strong>${esc(s.name)}</strong><small>${esc(s.title)}</small></span><span class="tier-amount">$${s.amount.toLocaleString('en-US')}<small>+</small></span>${plus}</summary><div class="tier-content"><p>What your support includes</p><ul>${s.benefits.map(b => `<li>${esc(b)}</li>`).join('')}</ul>${btn(`contact.html?topic=Sponsorship&tier=${s.name}`, `Talk about ${esc(s.name)}`, 'button-small')}</div></details>`).join('')}</div></section>
<section class="container other-support"><div>${spark('red')}<h2>Support comes in more than one form.</h2><p>Have tools, materials, or engineering experience to share? We’d love to start a conversation.</p></div>${btn('contact.html?topic=Mentorship', 'Let’s talk', 'button-ghost')}</section>
${callout('THANKS FOR<br>BELIEVING IN US.', 'Every contribution helps us keep building, keep learning, and keep creating opportunities for the next girl in STEM.', 'contact.html?topic=Sponsorship', 'Get in touch')}`;

const contactPage = `${pageHead('Contact', 'LET’S MAKE<br><span>CONTACT.</span>', 'A question, a collaboration, a way to help. Whatever brings you here, we’d love to hear from you.')}
<section class="container contact-grid"><div class="contact-info">${eyebrow('Say hello', 'Team Rocket')}<div class="contact-item"><p>Email</p><a class="contact-email" href="mailto:${esc(team.email)}">${esc(team.email)}${arrow(true)}</a><button class="copy-email" type="button" data-copy="${esc(team.email)}">Copy email address</button></div><div class="contact-item"><p>Follow the team</p>${ext(team.instagram, esc(team.instagramHandle))}</div><div class="contact-item"><p>Home base</p><span>${esc(team.location)}</span></div><div class="contact-note">${spark('red')}<p>FTC ${esc(team.number)}<br>All girls. All in.</p></div></div>
<div class="contact-form-wrap"><noscript><h2>Start a conversation.</h2><p>Please email <a href="mailto:${esc(team.email)}">${esc(team.email)}</a> directly. The draft helper needs JavaScript.</p></noscript><form id="contact-form" data-email="${esc(team.email)}"><h2>Start a conversation.</h2><p class="form-intro">Prepare a message, then open it in your email app.</p><div class="form-row"><div class="field"><label for="contact-name">Your name</label><input id="contact-name" name="name" autocomplete="name" required maxlength="100" placeholder="Name"></div><div class="field"><label for="contact-email">Your email</label><input id="contact-email" name="email" type="email" autocomplete="email" required maxlength="160" placeholder="you@example.com"></div></div><div class="field"><label for="contact-topic">What’s on your mind?</label><select id="contact-topic" name="topic"><option>General question</option><option>Sponsorship</option><option>Outreach</option><option>Mentorship</option><option>Joining the team</option></select></div><div class="field"><label for="contact-message">Your message</label><textarea id="contact-message" name="message" rows="5" required maxlength="2000" placeholder="Tell us a little about your idea…"></textarea></div><button class="button" type="submit">Prepare email draft${arrow()}</button><p class="form-note">Nothing is sent or stored by this website.</p></form><div id="draft-panel" class="draft-panel" tabindex="-1" hidden><p class="eyebrow">Ready when you are</p><h2>Your draft is ready.</h2><p>Open it in your email app to review and send, or copy the message.</p><pre id="draft-preview"></pre><div class="button-row"><a id="draft-mailto" class="button" href="mailto:${esc(team.email)}">Open email app${arrow(true)}</a><button type="button" class="button button-ghost" id="copy-draft">Copy draft</button></div><button type="button" id="edit-draft" class="text-button">← Edit your message</button></div></div></section>`;

const pages = [
  ['index', 'All girls. All in.', team.intro, home],
  ['team', 'Meet the team', 'Meet the people behind Team Rocket FTC 21350, an all-girls robotics team in Naperville, Illinois.', teamPage],
  ['robot', 'Our robot', 'Explore Team Rocket’s robot archive and the work behind our FIRST Tech Challenge robots.', robotPage],
  ['outreach', 'Outreach', 'Team Rocket shares STEM through Python programming with Project Vision and CAD workshops.', outreachPage],
  ['awards', 'Awards & milestones', 'Explore Team Rocket FTC 21350 awards, competition results, and milestones by season.', awardsPage],
  ['support', 'Support Team Rocket', 'Help Team Rocket FTC 21350 build robots, compete, and create opportunities for girls in STEM.', supportPage],
  ['contact', 'Contact', 'Get in touch with Team Rocket FTC 21350 for sponsorship, outreach, mentorship, and more.', contactPage],
  ['404', 'Page not found', 'Find your way back to Team Rocket.', `<section class="container not-found">${eyebrow('404', 'A little off course')}<h1 class="display">LET’S GET<br><span>YOU HOME.</span></h1><p>That page isn’t on our map.</p>${btn('index.html', 'Back to Team Rocket')}</section>`]
];
for (const [id, title, description, content] of pages) await writeFile(resolve(root, `${id}.html`), layout(id, title, description, content));
await writeFile(resolve(root, 'assets/favicon.svg'), `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#705bd5"/><path d="M32 8c3.5 17 7 20.5 24 24-17 3.5-20.5 7-24 24C28.5 39 25 35.5 8 32c17-3.5 20.5-7 24-24Z" fill="white"/><circle cx="32" cy="32" r="7" fill="#ed302b"/></svg>`);
console.log(`Built ${pages.length} pages. Edit team-data.mjs and commit to main to rebuild on GitHub Pages.`);
