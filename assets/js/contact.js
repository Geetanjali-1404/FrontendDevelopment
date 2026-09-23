/**
 * GOBEYOND TRAVELS - Contact & FAQ Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.GoBeyondData;
  if (!data || !data.faqs) return;

  const faqContainer = document.getElementById('faq-accordion-list');
  const faqSearchInput = document.getElementById('faq-search-input');
  const faqCategoryBtns = document.querySelectorAll('.faq-cat-btn');
  const contactForm = document.getElementById('contact-inquiry-form');

  let activeCat = 'all';
  let faqQuery = '';

  // 1. Render FAQs
  function filterAndRenderFAQs() {
    if (!faqContainer) return;

    const filtered = data.faqs.filter(faq => {
      if (activeCat !== 'all' && !faq.category.toLowerCase().includes(activeCat.toLowerCase())) {
        return false;
      }
      if (faqQuery) {
        const text = `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();
        if (!text.includes(faqQuery)) return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      faqContainer.innerHTML = `
        <div style="text-align:center; padding:30px; background:var(--white); border-radius:var(--radius-md); border:1px solid var(--border-card);">
          <p style="color:var(--slate); margin:0;">No FAQs found matching "${faqQuery}". Send us a message below and our heritage team will respond promptly.</p>
        </div>
      `;
      return;
    }

    faqContainer.innerHTML = filtered.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'open' : ''}" id="faq-${faq.id}">
        <div class="faq-question" onclick="window.toggleFaq('faq-${faq.id}')">
          <span style="font-size:1rem; font-weight:700;">${faq.question}</span>
          <span class="faq-icon">▾</span>
        </div>
        <div class="faq-answer">
          ${faq.answer}
        </div>
      </div>
    `).join('');
  }

  // Accordion Toggle
  window.toggleFaq = (id) => {
    const item = document.getElementById(id);
    if (item) {
      item.classList.toggle('open');
    }
  };

  // Search input
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      faqQuery = e.target.value.toLowerCase().trim();
      filterAndRenderFAQs();
    });
  }

  // Category buttons
  faqCategoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      faqCategoryBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = btn.dataset.cat;
      filterAndRenderFAQs();
    });
  });

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name')?.value || 'Traveler';
      const email = document.getElementById('contact-email')?.value;
      const topic = document.getElementById('contact-topic')?.value || 'Inquiry';

      window.GoBeyond.showToast(`Thank you ${name}! Your inquiry regarding "${topic}" has been logged. Our concierge will reply to ${email} within 4 hours.`, 'success');
      contactForm.reset();
    });
  }

  // Initial render
  filterAndRenderFAQs();
});
