// Button click
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button Clicked!');
});

// Keypress detection
document.getElementById('keyInput').addEventListener('keyup', (e) => {
  document.getElementById('keyFeedback').textContent = `You pressed: ${e.key}`;
});

// Secret action (double-click or long-press)
let pressTimer;
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => alert('Double-click secret unlocked!'));
secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => alert('Long press secret unlocked!'), 1000);
});
secretBtn.addEventListener('mouseup', () => clearTimeout(pressTimer));

// Color changing button
const toggleBtn = document.getElementById('colorToggleBtn');
let toggled = false;
toggleBtn.addEventListener('click', () => {
  toggled = !toggled;
  toggleBtn.style.backgroundColor = toggled ? 'salmon' : '';
  toggleBtn.textContent = toggled ? 'Reset Color' : 'Change Color';
});

// Slideshow
let current = 0;
const slides = document.querySelectorAll('.slideshow img');
document.getElementById('nextSlide').addEventListener('click', () => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
});

// Tabs
const tabButtons = document.querySelectorAll('.tab-buttons button');
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Form validation
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

function showError(input, message) {
  document.getElementById(`${input.id}Error`).textContent = message;
}

function clearError(input) {
  document.getElementById(`${input.id}Error`).textContent = '';
}

// Real-time validation
nameInput.addEventListener('input', () => {
  nameInput.value.trim() === '' ? showError(nameInput, 'Name is required.') : clearError(nameInput);
});

emailInput.addEventListener('input', () => {
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  !emailPattern.test(emailInput.value) ? showError(emailInput, 'Invalid email.') : clearError(emailInput);
});

passwordInput.addEventListener('input', () => {
  passwordInput.value.length < 8
    ? showError(passwordInput, 'Password must be at least 8 characters.')
    : clearError(passwordInput);
});

// Prevent real form submission for demo
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submitted successfully!');
});
