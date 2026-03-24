/* ============================================================
   ABECLIN — main.js
   Comportamentos compartilhados: nav, FAQ, scroll, acessibilidade
   ============================================================ */

'use strict';

/* ── Navbar: scrolled class + mobile toggle ─────────────── */
(function initNav() {
  const navbar  = document.querySelector('.navbar');
  const toggle  = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-links');
  if (!navbar) return;

  /* Classe scrolled */
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Mobile toggle */
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    /* Fechar ao clicar em link */
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    /* Fechar com ESC */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        toggle.focus();
      }
    });

    /* Fechar ao clicar fora */
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
})();

/* ── FAQ Accordion ──────────────────────────────────────── */
(function initFaq() {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = document.getElementById(btn.getAttribute('aria-controls'));

      /* Fechar todos os outros */
      questions.forEach(other => {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherAnswer = document.getElementById(other.getAttribute('aria-controls'));
          if (otherAnswer) otherAnswer.style.maxHeight = '0';
        }
      });

      /* Toggle o atual */
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (answer) answer.style.maxHeight = '0';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
})();

/* ── Intersection Observer: animações de entrada ────────── */
(function initAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const elements = document.querySelectorAll(
    '.card, .procedimento-item, .equipe-card, .stat-item, .feature-item, .lente-card'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = (i * 80) + 'ms';
        entry.target.classList.add('anim-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
})();

/* ── WhatsApp link helper ───────────────────────────────── */
(function initWhatsApp() {
  const WA_NUMBER = '5511964792595';

  document.querySelectorAll('[data-wa]').forEach(el => {
    const msg = el.getAttribute('data-wa') || 'Olá! Gostaria de agendar uma consulta na ABECLIN.';
    const url = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);
    el.setAttribute('href', url);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
})();
