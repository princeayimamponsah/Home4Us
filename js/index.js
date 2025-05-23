// 1. Toggle Responsive Navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const menuCheckbox = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    menuCheckbox.checked = false;
    navbar.classList.remove('active');
  });
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});

// 2. Newsletter Confirmation
const form = document.querySelector('.newsletter form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email-box').value;
  if (email) {
    alert(`Thank you for subscribing with ${email}!`);
    form.reset();
  }
});

// 3. Scroll-to-Top Button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #1e90ff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  border-radius: 8px;
  display: none;
  cursor: pointer;
  z-index: 1000;
`;

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// 4. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
