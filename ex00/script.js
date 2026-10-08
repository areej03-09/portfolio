const root = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const topBtn = document.getElementById('back-to-top');
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  themeBtn.setAttribute('aria-pressed', String(theme === 'dark'));
}

themeBtn.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

window.addEventListener('scroll', () => {
  topBtn.classList.toggle('visible', window.scrollY > 400);
});

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function showStatus(message, type) {
  formStatus.textContent = message;
  formStatus.classList.remove('success', 'error');
  formStatus.classList.add(type);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();                       // stop the page reload
  const name = document.getElementById('name').value.trim();
  const topic = document.getElementById('topic').value;
  const message = document.getElementById('msg').value.trim();

  if (name === '' || message.length < 10) {
    showStatus('Please enter your name and a message of at least 10 characters.', 'error');
    return;
  }
  showStatus(`Thanks, ${name}! Your message about "${topic}" was received.`, 'success');
  form.reset();
});
