// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  greetUser();
  loadThemeToggle();
  setupFormValidation();
  displayBlogPosts();
  updateFooterInfo();
});

/* 1. Greet user with localStorage */
function greetUser() {
  const greeting = document.createElement('div');
  greeting.id = 'greeting';
  greeting.style.padding = '1rem';
  greeting.style.textAlign = 'center';
  greeting.style.backgroundColor = '#e0f2fe';
  greeting.style.color = '#1e293b';

  let visits = Number(localStorage.getItem('visits')) || 0;
  visits++;
  localStorage.setItem('visits', visits);

  greeting.textContent = visits === 1
    ? `👋 Welcome to my portfolio! This is your first visit.`
    : `👋 Welcome back! You've visited ${visits} time${visits > 1 ? 's' : ''}.`;

  document.body.prepend(greeting);
}

/* 2. Dark/light theme toggle using localStorage */
function loadThemeToggle() {
  const body = document.body;
  const isDark = localStorage.getItem('theme') === 'dark';

  if (isDark) body.classList.add('dark');

  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = isDark ? '☀ Switch to Light Mode' : '🌙 Switch to Dark Mode';
  toggleBtn.setAttribute('aria-label', 'Toggle dark/light mode');
  Object.assign(toggleBtn.style, {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: '1000',
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  });

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const nowDark = body.classList.contains('dark');
    localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    toggleBtn.textContent = nowDark ? '☀ Switch to Light Mode' : '🌙 Switch to Dark Mode';
  });

  document.body.appendChild(toggleBtn);
}

/* 3. Basic form validation */
function setupFormValidation() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    if (!name?.value.trim() || !email?.value.trim() || !message?.value.trim()) {
      alert('❗ Please fill in all fields.');
      e.preventDefault();
    }
  });
}

/* 4. Display blog posts dynamically */
function displayBlogPosts() {
  const blogSection = document.querySelector('#blog-posts');
  if (!blogSection) return;

  const posts = [
    {
      title: 'How I Built This Portfolio',
      date: '2025-06-01',
      summary: 'I used HTML, CSS, JavaScript, and GitHub Pages to publish my final year project.',
    },
    {
      title: '5 Things I Learned About Web Accessibility',
      date: '2025-05-15',
      summary: 'Accessibility helps all users. Here’s what I learned while applying WCAG principles.',
    },
    {
      title: 'Responsive Design Tips',
      date: '2025-05-05',
      summary: 'Building for multiple screen sizes is a must. Here are a few simple ways I made it work.',
    },
  ];

  posts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'blog-card';
    article.innerHTML = `
      <h3>${post.title}</h3>
      <p><em>${new Date(post.date).toLocaleDateString()}</em></p>
      <p>${post.summary}</p>
    `;
    blogSection.appendChild(article);
  });
}

/* 5. Footer Info: Auto update year and last modified */
function updateFooterInfo() {
  const yearSpan = document.getElementById('year');
  const modifiedSpan = document.getElementById('lastModified');

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (modifiedSpan) modifiedSpan.textContent = document.lastModified;
}
