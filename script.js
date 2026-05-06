// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// ===== SMOOTH ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.car-card, .feature-card, .review-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== SEARCH =====
document.getElementById('btn-search').addEventListener('click', () => {
  const make = document.getElementById('filter-make').value;
  const model = document.getElementById('filter-model').value;
  const price = document.getElementById('filter-price').value;
  showToast(`Searching for ${make || 'all makes'} ${model || ''}...`);
});

// ===== ADVANCED FILTERS =====
document.getElementById('btn-apply').addEventListener('click', () => {
  showToast('Filters applied! Showing results...');
});

// ===== BROWSE CARS =====
document.getElementById('btn-browse').addEventListener('click', () => {
  document.getElementById('listings').scrollIntoView({ behavior: 'smooth' });
  showToast('Loading all available cars...');
});

// ===== QUICK VIEW BUTTONS =====
document.querySelectorAll('.btn-view').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.car-card');
    const name = card.querySelector('.card-title').textContent;
    const price = card.querySelector('.card-price').textContent;
    showToast(`Viewing: ${name} — ${price}`);
  });
});

// ===== STORE BUTTONS =====
['btn-appstore', 'btn-playstore'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('click', (e) => {
    e.preventDefault();
    showToast('App coming soon! Stay tuned. 📱');
  });
});

// ===== TOAST NOTIFICATION =====
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed; bottom:32px; left:50%; transform:translateX(-50%) translateY(20px);
    background:#1c1c1c; color:#fff; padding:14px 28px; border-radius:100px;
    border:1px solid #333; font-family:Inter,sans-serif; font-size:0.9rem; font-weight:500;
    z-index:9999; opacity:0; transition:all 0.3s ease; white-space:nowrap;
    box-shadow:0 8px 32px rgba(0,0,0,0.5);
  `;
  document.body.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, suffix = '') {
  let count = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = Math.floor(count).toLocaleString() + suffix;
    if (count >= target) clearInterval(timer);
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const nums = entry.target.querySelectorAll('.stat-num');
      const targets = [50000, 12000, 98];
      const suffixes = ['K+', 'K+', '%'];
      nums.forEach((el, i) => {
        animateCounter(el, targets[i] / (i < 2 ? 1000 : 1), suffixes[i]);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) statsObserver.observe(heroStats);

console.log('%c🚗 AutoDrive Loaded!', 'color:#E31E24;font-size:16px;font-weight:bold;');
