const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const MODEL = 'claude-sonnet-4-5-20250929';

const LANG_NAMES = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  de: 'German',
  nl: 'Dutch'
};

const wordEl = document.getElementById('word');
const posEl = document.getElementById('pos');
const definitionEl = document.getElementById('definition');
const etymologyEl = document.getElementById('etymology');
const exampleEl = document.getElementById('example');
const sourceEl = document.getElementById('source');
const dateEl = document.getElementById('date');
const langSelect = document.getElementById('lang-select');
const apiKeyInput = document.getElementById('apiKey');
const saveKeyBtn = document.getElementById('saveKey');

function todaySeed() {
  const now = new Date();
  return Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86400000;
}

function cacheKey(lang) {
  return `wordOfTheDay:${todaySeed()}:${lang}`;
}

function render(data) {
  definitionEl.className = 'definition';
  wordEl.textContent = data.word;
  posEl.textContent = data.partOfSpeech;
  definitionEl.textContent = data.definition;
  etymologyEl.textContent = data.etymology;
  exampleEl.textContent = data.exampleSentence;
  sourceEl.textContent = `— ${data.exampleSource}`;
}

function showError(msg) {
  wordEl.textContent = '';
  posEl.textContent = '';
  etymologyEl.textContent = '';
  exampleEl.textContent = '';
  sourceEl.textContent = '';
  definitionEl.className = 'definition error';
  definitionEl.textContent = msg;
}

function showLoading() {
  wordEl.textContent = '…';
  posEl.textContent = '';
  definitionEl.className = 'definition';
  definitionEl.textContent = 'Loading...';
  etymologyEl.textContent = '';
  exampleEl.textContent = '';
  sourceEl.textContent = '';
}

async function fetchWordOfTheDay(lang, apiKey) {
  const seed = todaySeed();
  const languageName = LANG_NAMES[lang];
  const prompt = `Today's date seed is ${seed} (days since epoch, UTC). Using this seed so the result is deterministic and identical for everyone asking on this date, pick one interesting, uncommon word in ${languageName}. Respond with ONLY a JSON object (no markdown, no code fences) with these exact keys:
{
  "word": "the word",
  "partOfSpeech": "its part of speech",
  "definition": "a clear definition",
  "etymology": "the word's etymology",
  "exampleSentence": "a real example sentence using the word, quoted from literature or journalism",
  "exampleSource": "the title/author or publication the example sentence is from"
}`;

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true'
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    })
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}`);
  }

  const json = await response.json();
  const text = json.content[0].text.trim();
  return JSON.parse(text);
}

async function load(lang, force = false) {
  const apiKey = localStorage.getItem('anthropicApiKey');
  if (!apiKey) {
    showError("Enter your Anthropic API key below to load today's word.");
    return;
  }

  const key = cacheKey(lang);

  if (!force) {
    const cached = localStorage.getItem(key);
    if (cached) {
      try {
        render(JSON.parse(cached));
        return;
      } catch (e) {
        // fall through to refetch
      }
    }
  }

  showLoading();
  try {
    const data = await fetchWordOfTheDay(lang, apiKey);
    localStorage.setItem(key, JSON.stringify(data));
    render(data);
  } catch (e) {
    showError(`Failed to load word of the day: ${e.message}`);
  }
}

langSelect.addEventListener('change', () => load(langSelect.value));

saveKeyBtn.addEventListener('click', () => {
  const val = apiKeyInput.value.trim();
  if (val) {
    localStorage.setItem('anthropicApiKey', val);
    apiKeyInput.value = '';
    apiKeyInput.placeholder = 'Key saved';
    load(langSelect.value);
  }
});

dateEl.textContent = new Date().toLocaleDateString(undefined, {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

if (localStorage.getItem('anthropicApiKey')) {
  apiKeyInput.placeholder = 'Key saved';
}

load(langSelect.value);
