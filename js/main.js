  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Stagger children in grids
  document.querySelectorAll('.services-grid .reveal').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });

  // Form submit
  function handleSubmit(e) {
    e.preventDefault();
    document.querySelector('.contact-form').style.display = 'none';
    document.getElementById('success-msg').style.display = 'block';
  }

  // Active nav link highlight
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 80) cur = s.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + cur ? '#fff' : '';
    });
  });