// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
  greetUser();
  loadTheme();
  setupFormValidation();
  displayBlogPosts();
});

/* 1. Greet user with localStorage */
function greetUser() {
  const userGreeting = document.createElement('div');
  userGreeting.id = 'greeting';
  document.body.prepend(userGreeting);

  let visits = Number(localStorage.getItem('visits')) || 0;
  visits++;
  localStorage.setItem('visits', visits);

  userGreeting.textContent = visits === 1
    ? `Welcome to my portfolio! This is your first visit.`
    : `Welcome back! You've visited ${visits} times.`;
}

/* 2. Dark/light theme toggle using localStorage */
function loadTheme() {
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) document.body.classList.add('dark');

  const toggle = document.createElement('button');
  toggle.textContent = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  toggle.style.position = 'fixed';
  toggle.style.top = '10px';
  toggle.style.right = '10px';
  toggle.style.zIndex = '1000';
  document.body.appendChild(toggle);

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dark = document.body.classList.contains('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    toggle.textContent = dark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  });
}

/* 3. Basic form validation for contact page */
function setupFormValidation() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', e => {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const message = form.querySelector('#message');

    if (!name.value || !email.value || !message.value) {
      alert('Please fill in all fields.');
      e.preventDefault(); // prevent form submission
    }
  });
}

/* 4. Simulated blog posts (objects, arrays, DOM interaction, conditionals, template literals) */
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
    }
  ];

  posts.forEach(post => {
    const article = document.createElement('article');
    article.classList.add('blog-card');
    article.innerHTML = `
      <h3>${post.title}</h3>
      <p><em>${post.date}</em></p>
      <p>${post.summary}</p>
    `;
    blogSection.appendChild(article);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;