/**
 * GOBEYOND TRAVELS - Home Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.GoBeyondData;
  if (!data) return;

  // 1. Populate City Dropdown in Hero Search
  const citySelect = document.getElementById('search-city');
  if (citySelect && data.cities) {
    citySelect.innerHTML = `<option value="">All Indian Heritage Hubs</option>` +
      data.cities.map(c => `<option value="${c.name.toLowerCase()}">${c.name} (${c.state})</option>`).join('');
  }

  // 2. Search Form Submission
  const searchBtn = document.getElementById('btn-hero-search');
  if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const city = document.getElementById('search-city')?.value || '';
      const category = document.getElementById('search-category')?.value || '';
      const date = document.getElementById('search-date')?.value || '';
      const size = document.getElementById('search-size')?.value || '';

      const params = new URLSearchParams();
      if (city) params.set('city', city);
      if (category) params.set('category', category);
      if (date) params.set('date', date);
      if (size) params.set('size', size);

      window.location.href = `destinations.html?${params.toString()}`;
    });
  }

  // 3. Render Featured Destinations (Top 6)
  const featContainer = document.getElementById('featured-destinations-grid');
  if (featContainer && data.destinations) {
    const featured = data.destinations.slice(0, 6);
    featContainer.innerHTML = featured.map(dest => {
      const guide = (data.guides || []).find(g => g.id === dest.guideId) || { name: dest.guideName || 'Native Guide' };
      return `
        <div class="destination-card">
          <div class="card-img-wrap">
            <img src="${dest.image}" alt="${dest.name}" class="card-img" loading="lazy" />
            <div class="card-badges-top">
              <span class="category-badge">${dest.category}</span>
              ${window.GoBeyond ? window.GoBeyond.renderCrowdMeterBadge(dest.crowdLevel, dest.crowdPercent) : ''}
            </div>
          </div>
          <div class="card-body">
            <div class="card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${dest.city}, ${dest.state}</span>
            </div>
            <h3 class="card-title">${dest.name}</h3>
            <p class="card-tagline">${dest.tagline}</p>

            <div class="package-guide-pill" style="cursor:pointer;" onclick="window.GoBeyond.openGuideModal('${dest.guideId}')" title="Click to view full guide credentials">
              <span style="font-size:0.75rem; color:var(--muted);">Curated by:</span>
              <strong style="color:var(--teal); font-size:0.82rem;">${guide.name}</strong>
              <span style="font-size:0.72rem; background:var(--white); padding:1px 6px; border-radius:999px; color:#10B981; font-weight:700;">Verified</span>
            </div>

            <div class="card-highlights">
              ${(dest.highlights || []).slice(0, 3).map(h => `<span class="highlight-pill">${h}</span>`).join('')}
            </div>

            <div class="card-footer">
              <div class="card-price-block">
                <span class="price-label">Starting From</span>
                <span class="price-amount">₹${dest.startingPrice.toLocaleString('en-IN')}</span>
              </div>
              <div class="card-actions">
                <button class="btn btn-outline btn-sm" onclick="window.GoBeyond.openRouteGuide('${dest.id}')" title="Interactive Route & Transport Details">
                  🛣️ Route Guide
                </button>
                <button class="btn btn-primary btn-sm" onclick="window.GoBeyond.openBookingModal(null, '${dest.id}')">
                  Book Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // 4. Render Local Guide Spotlight
  const guidesContainer = document.getElementById('featured-guides-grid');
  if (guidesContainer && data.guides) {
    const spotlightGuides = data.guides.slice(0, 4);
    guidesContainer.innerHTML = spotlightGuides.map(guide => `
      <div class="guide-card" style="cursor:pointer;" onclick="window.GoBeyond.openGuideModal('${guide.id}')">
        <div class="guide-avatar-wrap">
          <img src="${guide.avatar}" alt="${guide.name}" class="guide-avatar" loading="lazy" />
          <span class="verified-badge">✓ Verified</span>
        </div>
        <h4 class="guide-name">${guide.name}</h4>
        <div class="guide-meta">${guide.city}, ${guide.state} • ${guide.experienceYears} Years</div>
        
        <div class="guide-badges-row">
          ${(guide.badges || []).slice(0, 2).map(b => `<span class="guide-badge-pill">🎖️ ${b}</span>`).join('')}
        </div>

        <p class="guide-quote">"${(guide.videoIntro?.quote || guide.bio).substring(0, 110)}..."</p>

        <div style="font-size:0.8rem; color:var(--slate); margin-top:auto; padding-top:12px; border-top:1px solid var(--border-light);">
          <strong>Languages:</strong> ${(guide.languages || []).slice(0, 3).join(', ')}
        </div>

        <button class="btn btn-outline btn-sm" style="margin-top:14px; width:100%;">View Credentials</button>
      </div>
    `).join('');
  }

  // 5. Render Reviews Preview Snippet
  const reviewPreview = document.getElementById('home-reviews-grid');
  if (reviewPreview && data.reviews) {
    reviewPreview.innerHTML = data.reviews.slice(0, 3).map(rev => `
      <div class="review-card">
        <div class="review-author-wrap">
          <img src="${rev.authorAvatar}" alt="${rev.author}" class="review-avatar" />
          <div>
            <div style="font-weight:700; color:var(--charcoal); font-size:0.95rem;">${rev.author}</div>
            <div style="font-size:0.8rem; color:var(--muted);">${rev.authorCity} • ${rev.date}</div>
          </div>
        </div>
        <div class="review-stars">★★★★★</div>
        <h4 style="font-size:1.05rem; line-height:1.3; color:var(--charcoal);">${rev.title}</h4>
        <p style="font-size:0.88rem; color:var(--slate); line-height:1.5;">"${rev.comment.substring(0, 150)}..."</p>
        
        <div style="margin-top:auto; font-size:0.82rem; color:var(--teal); font-weight:600;">
          Destination: ${rev.destinationName}
        </div>

        ${rev.guideResponse ? `
          <div class="review-response">
            <div style="font-weight:700; color:var(--terracotta); font-size:0.78rem; margin-bottom:3px;">
              Reply from Local Guide ${rev.guideResponse.guideName}:
            </div>
            <div style="color:var(--charcoal); font-size:0.82rem; font-style:italic;">
              "${rev.guideResponse.text}"
            </div>
          </div>
        ` : ''}
      </div>
    `).join('');
  }
});
