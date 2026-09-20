/* Small enhancements. All core content and navigation are real HTML. */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

  // Mobile navigation: closes after selection, Escape, or a click outside it.
  const toggle = $('.menu-toggle');
  const nav = $('#main-nav');
  function closeMenu(returnFocus = false) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    $('.menu-word', toggle).textContent = 'Menu';
    if (returnFocus) toggle.focus();
  }
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    $('.menu-word', toggle).textContent = open ? 'Close' : 'Menu';
  });
  nav?.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('click', event => {
    if (toggle?.getAttribute('aria-expanded') === 'true' && !event.target.closest('.site-header')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  window.matchMedia('(min-width: 921px)').addEventListener('change', () => closeMenu());

  // Award filtering, including a shareable ?season=2024 link.
  const filters = $$('[data-filter]');
  const seasons = $$('[data-season]');
  function filterSeasons(requested, updateUrl = false) {
    const value = filters.some(button => button.dataset.filter === requested) ? requested : 'all';
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === value)));
    let visibleCount = 0;
    seasons.forEach(season => {
      season.hidden = value !== 'all' && season.dataset.season !== value;
      if (!season.hidden) visibleCount++;
    });
    const active = filters.find(button => button.dataset.filter === value);
    const status = $('.filter-status');
    if (status) status.textContent = value === 'all' ? `Showing all ${visibleCount} seasons.` : `Showing the ${active.textContent} season.`;
    if (updateUrl) {
      const url = new URL(window.location.href);
      value === 'all' ? url.searchParams.delete('season') : url.searchParams.set('season', value);
      try { window.history.pushState({}, '', url); } catch { /* Also works when opened from a local file. */ }
    }
  }
  if (filters.length) {
    filters.forEach(button => button.addEventListener('click', () => filterSeasons(button.dataset.filter, true)));
    filterSeasons(new URLSearchParams(location.search).get('season') || 'all');
    window.addEventListener('popstate', () => filterSeasons(new URLSearchParams(location.search).get('season') || 'all'));
  }

  // Native dialog: keyboard support, Escape, focus return, and a normal image-link fallback.
  const lightbox = $('.lightbox');
  let photoTrigger;
  if (lightbox && typeof lightbox.showModal === 'function') {
    $$('[data-lightbox]').forEach(link => link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      photoTrigger = link;
      $('.lightbox-image', lightbox).src = link.href;
      $('.lightbox-image', lightbox).alt = $('img', link).alt;
      $('.lightbox-caption', lightbox).textContent = link.dataset.caption;
      lightbox.showModal();
      document.body.classList.add('dialog-open');
      $('.lightbox-close', lightbox).focus();
    }));
    $('.lightbox-close', lightbox).addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
    lightbox.addEventListener('close', () => {
      document.body.classList.remove('dialog-open');
      photoTrigger?.focus({ preventScroll: true });
    });
  }

  let toastTimer;
  function announce(text) {
    const toast = $('.toast');
    if (!toast) return;
    clearTimeout(toastTimer);
    toast.textContent = text;
    toast.classList.add('is-visible');
    toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 4200);
  }
  async function copyText(text, success) {
    try {
      await navigator.clipboard.writeText(text);
      announce(success);
    } catch {
      // Fallback for local file previews and browsers without clipboard permission.
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;left:-9999px;top:0';
      document.body.append(textarea);
      textarea.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch { /* Leave visible content for manual copying. */ }
      textarea.remove();
      announce(copied ? success : 'Copy was unavailable. You can select and copy the visible text.');
    }
  }
  $$('[data-copy]').forEach(button => button.addEventListener('click', () => copyText(button.dataset.copy, 'Email address copied.')));

  // No pretend submission: the visitor reviews a draft and sends it using their own email app.
  const form = $('#contact-form');
  if (form) {
    const params = new URLSearchParams(location.search);
    const topic = $('#contact-topic');
    if ([...topic.options].some(option => option.value === params.get('topic'))) topic.value = params.get('topic');
    const tiers = ['Platinum', 'Gold', 'Silver', 'Bronze', 'Copper', 'Nickel'];
    if (tiers.includes(params.get('tier'))) $('#contact-message').value = `Hi Team Rocket! I’m interested in the ${params.get('tier')} sponsorship. Could you share more information?`;
    let draft = '';
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const fields = new FormData(form);
      const name = String(fields.get('name')).trim();
      const email = String(fields.get('email')).trim();
      const message = String(fields.get('message')).trim();
      if (!name || !message) { announce('Please add your name and a message.'); return; }
      const subject = `Team Rocket 21350 — ${fields.get('topic')}`;
      const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`;
      draft = `To: ${form.dataset.email}\nSubject: ${subject}\n\n${body}`;
      $('#draft-preview').textContent = draft;
      $('#draft-mailto').href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      form.hidden = true;
      const panel = $('#draft-panel');
      panel.hidden = false;
      panel.focus({ preventScroll: true });
      panel.scrollIntoView({ behavior: reducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
    });
    $('#copy-draft').addEventListener('click', () => copyText(draft, 'Email draft copied.'));
    $('#edit-draft').addEventListener('click', () => {
      $('#draft-panel').hidden = true;
      form.hidden = false;
      $('#contact-message').focus({ preventScroll: true });
    });
  }

})();
