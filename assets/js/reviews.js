/**
 * GOBEYOND TRAVELS - Reviews & Community Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.GoBeyondData;
  if (!data || !data.reviews) return;

  const reviewsContainer = document.getElementById('reviews-stream');
  const ratingFilters = document.querySelectorAll('.rating-filter-btn');
  const destinationSelect = document.getElementById('review-destination-filter');
  const writeReviewBtn = document.getElementById('btn-write-review');

  let activeRating = 'all';
  let activeDest = 'all';

  // Dynamic clone of reviews array so user submissions can be added
  let communityReviews = [...data.reviews];

  // 1. Populate Destination Filter Dropdown
  if (destinationSelect && data.destinations) {
    destinationSelect.innerHTML = `<option value="all">All Heritage Destinations</option>` +
      data.destinations.map(d => `<option value="${d.name}">${d.name}</option>`).join('');

    destinationSelect.addEventListener('change', (e) => {
      activeDest = e.target.value;
      filterAndRenderReviews();
    });
  }

  // 2. Rating Filters
  ratingFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      ratingFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeRating = btn.dataset.rating;
      filterAndRenderReviews();
    });
  });

  // 3. Render Reviews
  function filterAndRenderReviews() {
    if (!reviewsContainer) return;

    const filtered = communityReviews.filter(rev => {
      if (activeRating !== 'all' && rev.rating !== parseInt(activeRating)) {
        return false;
      }
      if (activeDest !== 'all' && rev.destinationName !== activeDest) {
        return false;
      }
      return true;
    });

    if (filtered.length === 0) {
      reviewsContainer.innerHTML = `
        <div style="text-align:center; padding:50px 20px; background:var(--white); border-radius:var(--radius-xl); border:1px solid var(--border-card);">
          <div style="font-size:2.5rem; margin-bottom:10px;">✍️</div>
          <h3 style="font-size:1.3rem; margin-bottom:6px;">No reviews found matching these filters</h3>
          <p style="color:var(--slate); margin-bottom:16px;">Be the first traveler to share your reflection on this heritage trail.</p>
          <button class="btn btn-primary" onclick="window.openWriteReviewModal()">Write a Review</button>
        </div>
      `;
      return;
    }

    reviewsContainer.innerHTML = filtered.map(rev => {
      const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      return `
        <div class="review-card">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px;">
            <div class="review-author-wrap">
              <img src="${rev.authorAvatar || 'assets/images/travelers/traveler-anita.jpg'}" alt="${rev.author}" class="review-avatar" />
              <div>
                <div style="display:flex; align-items:center; gap:8px;">
                  <strong style="color:var(--charcoal); font-size:1.05rem;">${rev.author}</strong>
                  ${rev.verifiedTraveler ? `
                    <span style="background:#ECFDF5; color:#065F46; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:999px; display:inline-flex; align-items:center; gap:3px;">
                      ✓ Verified Traveler
                    </span>
                  ` : ''}
                </div>
                <div style="font-size:0.82rem; color:var(--muted);">${rev.authorCity || 'India'} • Traveled ${rev.date}</div>
              </div>
            </div>

            <div class="review-stars" style="font-size:1.15rem;">${stars}</div>
          </div>

          <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-size:0.84rem;">
            <span style="color:var(--muted);">Heritage Trail:</span>
            <strong style="color:var(--teal);">${rev.destinationName}</strong>
            <span style="color:var(--muted);">• Guided by:</span>
            <strong style="color:var(--terracotta);">${rev.guideName}</strong>
          </div>

          <div>
            <h4 style="font-size:1.15rem; color:var(--charcoal); margin-bottom:8px; line-height:1.3;">${rev.title}</h4>
            <p style="font-size:0.92rem; color:var(--slate); line-height:1.6; margin:0;">
              "${rev.comment}"
            </p>
          </div>

          ${(rev.tags && rev.tags.length) ? `
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${rev.tags.map(t => `<span class="highlight-pill">#${t}</span>`).join('')}
            </div>
          ` : ''}

          <!-- Guide Response Section -->
          ${rev.guideResponse ? `
            <div class="review-response">
              <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:6px;">
                <span style="font-weight:700; color:var(--terracotta); font-size:0.82rem; text-transform:uppercase;">
                  Direct Response from Guide ${rev.guideResponse.guideName} (${rev.guideResponse.role || 'Heritage Host'})
                </span>
                <span style="font-size:0.75rem; color:var(--muted);">${rev.guideResponse.date}</span>
              </div>
              <p style="color:var(--charcoal); font-size:0.86rem; font-style:italic; line-height:1.5; margin:0;">
                "${rev.guideResponse.text}"
              </p>
            </div>
          ` : ''}
        </div>
      `;
    }).join('');
  }

  // 4. Interactive "Share Your Heritage Story" Modal
  window.openWriteReviewModal = () => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) return;
    document.body.style.overflow = 'hidden';

    modalRoot.innerHTML = `
      <div class="modal-backdrop active" id="modal-bg">
        <div class="modal-dialog" style="max-width: 560px;" onclick="event.stopPropagation()">
          <button class="modal-close-btn" onclick="window.GoBeyond.closeModal()">&times;</button>
          
          <div style="margin-bottom:18px;">
            <span class="section-tag">Community Reflections</span>
            <h3 style="font-size:1.45rem; margin:6px 0 2px 0;">Share Your Heritage Story</h3>
            <p style="font-size:0.85rem; color:var(--slate); margin:0;">
              Your feedback honors local guides and helps conscious explorers avoid tourist traps.
            </p>
          </div>

          <form id="write-review-form">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div class="form-group">
                <label class="form-label">Your Name *</label>
                <input type="text" class="form-control" id="rev-input-author" placeholder="e.g. Priya Iyer" required />
              </div>
              <div class="form-group">
                <label class="form-label">Your City & Country *</label>
                <input type="text" class="form-control" id="rev-input-city" placeholder="e.g. Bengaluru, India" required />
              </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
              <div class="form-group">
                <label class="form-label">Destination Visited *</label>
                <select class="form-control" id="rev-input-dest" required>
                  ${data.destinations.map(d => `<option value="${d.name}">${d.name}</option>`).join('')}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Local Guide *</label>
                <select class="form-control" id="rev-input-guide" required>
                  ${data.guides.map(g => `<option value="${g.name}">${g.name} (${g.city})</option>`).join('')}
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Rating *</label>
              <select class="form-control" id="rev-input-rating" style="font-size:1.1rem; color:#F59E0B; font-weight:bold;">
                <option value="5">★★★★★ (5/5 Exceptional)</option>
                <option value="4">★★★★☆ (4/5 Very Good)</option>
                <option value="3">★★★☆☆ (3/5 Average)</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Headline / Title *</label>
              <input type="text" class="form-control" id="rev-input-title" placeholder="e.g. Private coracle crossing and forgotten Sanskrit inscriptions" required />
            </div>

            <div class="form-group">
              <label class="form-label">Your Detailed Review *</label>
              <textarea class="form-control" id="rev-input-text" rows="4" placeholder="What made this experience distinct from mass tourist spots? How did your local guide enrich your perspective?" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%;">
              Post Verified Review →
            </button>
          </form>
        </div>
      </div>
    `;

    document.getElementById('modal-bg').onclick = window.GoBeyond.closeModal;

    document.getElementById('write-review-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const author = document.getElementById('rev-input-author').value;
      const city = document.getElementById('rev-input-city').value;
      const destName = document.getElementById('rev-input-dest').value;
      const guideName = document.getElementById('rev-input-guide').value.split('(')[0].trim();
      const rating = parseInt(document.getElementById('rev-input-rating').value) || 5;
      const title = document.getElementById('rev-input-title').value;
      const comment = document.getElementById('rev-input-text').value;

      const newReview = {
        id: 'rev-' + Date.now(),
        author,
        authorCity: city,
        authorAvatar: 'assets/images/travelers/traveler-anita.jpg',
        rating,
        date: 'Just now',
        destinationName: destName,
        guideName,
        verifiedTraveler: true,
        title,
        comment,
        tags: ["ConsciousTraveler", "DirectImpact"],
        guideResponse: {
          guideName: guideName,
          role: "Certified Native Host",
          date: "Just now",
          text: `Thank you so much ${author}! Walking with respectful travelers like you keeps our heritage alive. You are always welcome in our courtyard.`
        }
      };

      // Prepend to array
      communityReviews.unshift(newReview);
      filterAndRenderReviews();

      window.GoBeyond.closeModal();
      window.GoBeyond.showToast('Thank you! Your verified heritage story has been published to the community.', 'success');
    });
  };

  if (writeReviewBtn) {
    writeReviewBtn.addEventListener('click', window.openWriteReviewModal);
  }

  // Initial render
  filterAndRenderReviews();
});
