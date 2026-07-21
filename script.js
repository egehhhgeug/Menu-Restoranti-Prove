// ===== Accordion menu =====
// Click a category header to expand/collapse it. Multiple categories can
// be open at once — remove the "close others" block below if you'd rather
// only allow one open at a time.
document.querySelectorAll('.acc-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.acc-item');
    const isOpen = item.classList.contains('open');

    item.classList.toggle('open', !isOpen);
    header.setAttribute('aria-expanded', String(!isOpen));
  });
});

// ===== Language switch (EN / AL) =====
// Reused from the n'Kuven build: any element with data-en / data-al
// attributes gets its text swapped when a flag is clicked.
const langButtons = document.querySelectorAll('.lang-flag');
const translatable = document.querySelectorAll('[data-en][data-al]');

function setLang(lang){
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;

  translatable.forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });

  langButtons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Run once on load so the visible text always matches data-en immediately,
// instead of only updating after the first flag click.
setLang(document.documentElement.getAttribute('data-lang') || 'en');
