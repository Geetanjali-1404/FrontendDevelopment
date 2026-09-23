/**
 * GOBEYOND TRAVELS - Packages & Booking Page Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.GoBeyondData;
  if (!data || !data.packages) return;

  const packagesGrid = document.getElementById('packages-grid');
  const difficultyFilters = document.querySelectorAll('.difficulty-filter-btn');
  const durationFilters = document.querySelectorAll('.duration-filter-btn');
  const countDisplay = document.getElementById('packages-count');

  let activeDifficulty = 'all';
  let activeDuration = 'all';

  difficultyFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      difficultyFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDifficulty = btn.getAttribute('data-difficulty');
      filterPackages();
    });
  });

  durationFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      durationFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeDuration = btn.getAttribute('data-duration');
      filterPackages();
    });
  });

  function filterPackages() {
    const filtered = data.packages.filter(pkg => {
      if (activeDifficulty !== 'all' && pkg.difficulty !== activeDifficulty) {
        return false;
      }
      if (activeDuration !== 'all') {
        const days = parseInt(pkg.duration) || 2;
        if (activeDuration === 'short' && days > 2) return false;
        if (activeDuration === 'medium' && (days < 3 || days > 4)) return false;
        if (activeDuration === 'long' && days < 5) return false;
      }
      return true;
    });

    renderPackages(filtered);
    if (countDisplay) {
      countDisplay.textContent = `Showing ${filtered.length} Curated Expeditions`;
    }
  }

  function getDifficultyBadge(diff) {
    let color = '#10B981';
    let bg = '#ECFDF5';
    if (diff === 'Moderate') {
      color = '#D97706';
      bg = '#FEF3C7';
    } else if (diff === 'Challenging') {
      color = '#DC2626';
      bg = '#FEE2E2';
    }
    return `<span style="background:${bg}; color:${color}; font-weight:700; font-size:0.75rem; padding:3px 10px; border-radius:999px;">💪 ${diff} Difficulty</span>`;
  }

  function renderPackages(list) {
    if (!packagesGrid) return;

    if (list.length === 0) {
      packagesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:50px 20px; background:var(--white); border-radius:var(--radius-xl); border:1px solid var(--border-card);">
          <h3 style="font-size:1.3rem; margin-bottom:8px;">No packages match the selected criteria</h3>
          <p style="color:var(--slate); margin-bottom:16px;">Try clearing your physical difficulty or duration filters.</p>
          <button class="btn btn-primary" onclick="location.reload()">Reset Filters</button>
        </div>
      `;
      return;
    }

    packagesGrid.innerHTML = list.map(pkg => {
      const guide = (data.guides || []).find(g => g.id === pkg.guideId) || { name: pkg.guideName || 'Native Guide', avatar: pkg.guideAvatar };
      return `
        <div class="package-card">
          <div class="card-img-wrap">
            <img src="${pkg.image}" alt="${pkg.title}" class="card-img" loading="lazy" />
            <div class="card-badges-top">
              <span class="category-badge">${pkg.badge || 'Heritage Guild'}</span>
              <span style="background:rgba(255,255,255,0.92); color:var(--charcoal); font-weight:700; font-size:0.75rem; padding:4px 10px; border-radius:999px;">
                ⏱️ ${pkg.duration}
              </span>
            </div>
          </div>

          <div class="card-body">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
              <div class="card-location" style="margin-bottom:0;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>${pkg.city}, ${pkg.state}</span>
              </div>
              ${getDifficultyBadge(pkg.difficulty)}
            </div>

            <h3 class="card-title" style="font-size:1.3rem;">${pkg.title}</h3>
            
            <div class="package-guide-pill" style="cursor:pointer;" onclick="window.GoBeyond.openGuideModal('${pkg.guideId}')" title="Click to view full guide bio">
              <img src="${guide.avatar || 'assets/images/travelers/traveler-anita.jpg'}" alt="${guide.name}" class="guide-mini-avatar" />
              <div style="line-height:1.2;">
                <div style="font-size:0.7rem; color:var(--muted); text-transform:uppercase; font-weight:700;">Certified Local Host</div>
                <div style="font-size:0.84rem; font-weight:700; color:var(--teal);">${guide.name}</div>
              </div>
            </div>

            <div style="font-size:0.8rem; font-weight:700; color:var(--charcoal); text-transform:uppercase; letter-spacing:0.04em; margin-bottom:8px;">
              Included In This Journey:
            </div>
            <ul class="package-amenities-list">
              ${(pkg.amenities || []).slice(0, 4).map(amenity => `
                <li>
                  <span class="amenity-check">✓</span>
                  <span>${amenity}</span>
                </li>
              `).join('')}
            </ul>

            <div class="card-footer">
              <div class="card-price-block">
                <span class="price-label">All-Inclusive Per Guest</span>
                <div style="display:flex; align-items:baseline; gap:6px;">
                  <span class="price-amount">₹${pkg.price.toLocaleString('en-IN')}</span>
                  ${pkg.originalPrice ? `<span style="font-size:0.85rem; color:var(--muted); text-decoration:line-through;">₹${pkg.originalPrice.toLocaleString('en-IN')}</span>` : ''}
                </div>
              </div>
              <button class="btn btn-primary" onclick="window.GoBeyond.openBookingModal('${pkg.id}')">
                Book Tour →
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initial render
  filterPackages();
});
