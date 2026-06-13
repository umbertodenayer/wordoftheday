function getDayIndex() {
  const now = new Date();
  const utcMidnight = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const dayNumber = Math.floor(utcMidnight / 86400000);
  return dayNumber % WORDS.length;
}

const entry = WORDS[getDayIndex()];

const wordEl = document.getElementById('word');
const posEl = document.getElementById('pos');
const definitionEl = document.getElementById('definition');
const exampleEl = document.getElementById('example');
const etymologyEl = document.getElementById('etymology');
const langSelect = document.getElementById('lang-select');

function render(lang) {
  const data = lang === 'en' ? entry : entry.translations[lang];
  wordEl.textContent = data.word;
  posEl.textContent = data.pos;
  definitionEl.textContent = data.definition;
  exampleEl.textContent = data.example;
  etymologyEl.textContent = entry.etymology;
}

langSelect.addEventListener('change', () => render(langSelect.value));

render('en');

document.getElementById('date').textContent = new Date().toLocaleDateString(undefined, {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});
