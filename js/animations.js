/**
 * ============================================
 *  ANIMATIONS ENGINE
 *  Smooth wave canvas + scroll reveal
 * ============================================
 */

// ── Subtle Wave/Particle Canvas Background ──
class WaveBackground {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = 0;
    this.height = 0;
    this.time = 0;
    this.particles = [];
    this.waves = [];
    this.raf = null;

    this.resize();
    this.initParticles();
    this.initWaves();

    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initParticles() {
    const count = Math.min(Math.floor((this.width * this.height) / 25000), 60);
    this.particles = [];
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.15 + 0.03
      });
    }
  }

  initWaves() {
    this.waves = [
      { amplitude: 30, wavelength: 0.003, speed: 0.008, yOffset: 0.35, opacity: 0.025 },
      { amplitude: 20, wavelength: 0.005, speed: 0.012, yOffset: 0.55, opacity: 0.018 },
      { amplitude: 25, wavelength: 0.004, speed: 0.006, yOffset: 0.75, opacity: 0.02 }
    ];
  }

  drawParticles() {
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.width;
      if (p.x > this.width) p.x = 0;
      if (p.y < 0) p.y = this.height;
      if (p.y > this.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      this.ctx.fill();
    }
  }

  drawWaves() {
    for (const wave of this.waves) {
      this.ctx.beginPath();
      const baseY = this.height * wave.yOffset;

      for (let x = 0; x <= this.width; x += 2) {
        const y = baseY + Math.sin(x * wave.wavelength + this.time * wave.speed) * wave.amplitude
                       + Math.sin(x * wave.wavelength * 1.5 + this.time * wave.speed * 0.7) * wave.amplitude * 0.5;
        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }

      this.ctx.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.time++;
    this.drawWaves();
    this.drawParticles();
    this.raf = requestAnimationFrame(() => this.animate());
  }

  start() {
    this.animate();
  }

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}


// ── Scroll Reveal Observer ──────────────────
class ScrollReveal {
  constructor() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay for sequential reveals
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );
  }

  observe(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, i) => {
      el.dataset.delay = i * 120;
      this.observer.observe(el);
    });
  }
}


// ── Hero Text Reveal Animation ──────────────
function animateHeroEntry() {
  const elements = [
    { el: '.hero-intro', delay: 300 },
    { el: '.hero-name', delay: 500 },
    { el: '.hero-role', delay: 700 },
    { el: '.hero-tagline', delay: 950 },
    { el: '.cta-wrapper', delay: 1200 }
  ];

  elements.forEach(({ el, delay }) => {
    const element = document.querySelector(el);
    if (element) {
      setTimeout(() => {
        element.style.transition = 'opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out)';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay);
    }
  });
}


// ── Preloader ───────────────────────────────
function hidePreloader(callback) {
  const preloader = document.getElementById('preloader');
  if (!preloader) {
    if (callback) callback();
    return;
  }

  // Minimum display time for aesthetic feel
  setTimeout(() => {
    preloader.classList.add('hidden');
    setTimeout(() => {
      if (callback) callback();
    }, 600);
  }, 800);
}
