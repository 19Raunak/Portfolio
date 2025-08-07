
document.addEventListener('DOMContentLoaded', () => {
  // all your JavaScript code here

  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  function setTheme(theme) {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️';
    } else {
      html.removeAttribute('data-theme');
      themeToggle.textContent = '🌙';
    }
    localStorage.setItem('theme', theme);
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  setTheme(savedTheme);

  themeToggle.addEventListener('click', () => {
      const isDark = html.hasAttribute('data-theme');
      const newTheme = isDark ? 'light' : 'dark';
      html.setAttribute('data-theme', newTheme === 'dark' ? 'dark' : '');
      if (newTheme === 'light') {
          html.removeAttribute('data-theme');
      }
      themeToggle.textContent = isDark ? '🌙' : '☀️';
      localStorage.setItem('theme', newTheme);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme || savedTheme === 'auto') {
          setTheme('auto');
      }
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });

  // Intersection Observer for animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
          }
      });
  }, observerOptions);

  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in, .timeline-item, .project-card').forEach(el => {
      observer.observe(el);
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const html = document.documentElement;
    const isDark = html.hasAttribute('data-theme') && html.getAttribute('data-theme') === 'dark'
      || window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (window.scrollY > 100) {
      nav.style.background = 'rgba(255, 255, 255, 0.6)';
      nav.style.backdropFilter = 'blur(12px)';
    } else {
      nav.style.background = 'rgba(255, 255, 255, 0.4)';
      nav.style.backdropFilter = 'blur(8px)';
    }
  });
  // Form submission
  // Initialize EmailJS
  emailjs.init('at6Et5Hv6NDeUrUjM'); // Replace with your actual public key

  document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const button = e.target.querySelector('.submit-button');
    const originalText = button.textContent;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    button.textContent = 'Sending...';
    button.disabled = true;

    emailjs.send('service_qr5gnk7', 'template_rw822lm', {
      name: name, email: email, message: message
    })
      .then(() => {
        button.textContent = 'Message Sent!';
        button.style.background = '#10b981';

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          button.style.background = '';
          e.target.reset();
        }, 2000);
      })
      .catch((error) => {
        console.error('Email send failed:', error);
        button.textContent = 'Failed to Send';
        button.style.background = '#dc2626';

        setTimeout(() => {
          button.textContent = originalText;
          button.disabled = false;
          button.style.background = '';
        }, 2000);
      });
  });

  // Mobile menu toggle (basic implementation)
  const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu on click
    mobileMenu.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      navLinks.classList.toggle('active');
    });

    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mobileMenu.classList.remove('open');
          navLinks.classList.remove('active');
        }
      });
    });

    // Ensure nav links are visible again when resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove('active');   // removes mobile toggle
        mobileMenu.classList.remove('open');   // resets hamburger
        navLinks.style.display = 'flex';       // force show for desktop
      } else {
        navLinks.style.display = '';           // reset so class controls it
      }
    });

});
