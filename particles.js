/**
 * Particles & Constellation Canvas Effect
 * Lightweight, zero-dependency, responsive canvas background with mouse interactivity.
 */

class ParticleNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.particleCount = 65;
    this.maxDistance = 140;
    this.mouse = { x: null, y: null, radius: 150 };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    this.createParticles();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // Adjust count based on screen size
    if (window.innerWidth < 768) {
      this.particleCount = 30;
      this.maxDistance = 90;
    } else {
      this.particleCount = 65;
      this.maxDistance = 140;
    }
  }

  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2 + 1,
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const dotColor = isLight ? 'rgba(79, 70, 229, 0.45)' : 'rgba(99, 102, 241, 0.5)';
    const lineColor = isLight ? 'rgba(99, 102, 241, ' : 'rgba(6, 182, 212, ';

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Bounce off walls
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interaction
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = this.mouse.x - p.x;
        const dy = this.mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }
      }

      // Draw particle dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = dotColor;
      this.ctx.fill();

      // Connect with nearby particles
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const alpha = (1 - dist / this.maxDistance) * 0.35;
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.strokeStyle = lineColor + alpha + ')';
          this.ctx.lineWidth = 0.9;
          this.ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new ParticleNetwork('canvas-bg');
});
