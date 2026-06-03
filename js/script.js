 /* ── Reviews data ── */
  const reviews = [
    { name: "Ana Lima",       initial: "A", stars: 5, date: "março 2025",    text: "Melhor papelaria da região! Encontrei tudo para o volta às aulas dos meus filhos num só lugar, com preços ótimos." },
    { name: "Carlos Mendes",  initial: "C", stars: 5, date: "fevereiro 2025", text: "Atendimento incrível! Super atenciosos, me ajudaram a montar o kit completo para meu escritório." },
    { name: "Juliana Soares", initial: "J", stars: 5, date: "janeiro 2025",   text: "Variedade enorme e preço justo. Compro material de arte aqui há anos e nunca me decepcionei!" },
    { name: "Roberto Dias",   initial: "R", stars: 4, date: "abril 2025",     text: "Ótima papelaria, ambiente organizado e funcionários muito simpáticos. Recomendo demais!" },
    { name: "Fernanda Costa", initial: "F", stars: 5, date: "março 2025",     text: "Fiz um pedido para minha escola e foi entregue no prazo com tudo certo. Excelente distribuidora!" },
    { name: "Thiago Nunes",   initial: "T", stars: 5, date: "fevereiro 2025", text: "Os materiais de arte daqui são de qualidade superior. Estou sempre voltando para comprar mais!" },
    { name: "Patrícia Alves", initial: "P", stars: 4, date: "maio 2025",      text: "Adorei a papelaria! Muito bem organizada, fácil de achar tudo. Voltarei com certeza." },
    { name: "Lucas Ferreira", initial: "L", stars: 5, date: "abril 2025",     text: "Melhor custo-benefício da cidade. Atacado excelente para quem tem negócio, super indico!" },
  ];

  function buildReviews() {
    const track = document.getElementById('reviewsTrack');
    const doubled = [...reviews, ...reviews]; // loop infinito
    track.innerHTML = doubled.map(r => `
      <div class="review-card">
        <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
        <p class="review-text">"${r.text}"</p>
        <div class="review-author">
          <div class="review-avatar">${r.initial}</div>
          <div>
            <div class="review-name">${r.name}</div>
            <div class="review-date">${r.date}</div>
          </div>
        </div>
      </div>
    `).join('');
    // Adjust animation duration to total width
    const totalWidth = 300 * reviews.length + 24 * reviews.length;
    track.style.animationDuration = (reviews.length * 4) + 's';
  }
  buildReviews();

  /* ── Hamburger ── */
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  }));

  /* ── Scroll to top button ── */
  window.addEventListener('scroll', () => {
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
  });

  /* ── Reveal on scroll ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Navbar shadow on scroll ── */
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').style.boxShadow =
      window.scrollY > 20 ? '0 4px 24px rgba(139,26,26,.22)' : '0 2px 20px rgba(139,26,26,.10)';
  });

  /* ── Hero logo: use uploaded image inline ── */
  // The logo is already set to the upload path above