/**
 * GOBEYOND TRAVELS - Destinations & Cultural Map Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.GoBeyondData;
  if (!data || !data.destinations) return;

  const destinationsGrid = document.getElementById('destinations-cards-grid');
  const cityPillsContainer = document.getElementById('city-pills-container');
  const crowdFilterBtns = document.querySelectorAll('.crowd-filter-btn');
  const categoryFilterBtns = document.querySelectorAll('.category-filter-btn');
  const searchInput = document.getElementById('destination-search-input');
  const resultsCount = document.getElementById('destinations-count');

  let activeCity = 'all';
  let activeCrowd = 'all';
  let activeCategory = 'all';
  let searchQuery = '';

  // Check URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('city')) {
    activeCity = urlParams.get('city').toLowerCase();
  }
  if (urlParams.has('category')) {
    activeCategory = urlParams.get('category');
  }

  // 1. Render Indian City Selector Pills
  if (cityPillsContainer && data.cities) {
    const allPill = document.createElement('button');
    allPill.className = `filter-pill ${activeCity === 'all' ? 'active' : ''}`;
    allPill.textContent = 'All Indian Heritage Regions';
    allPill.onclick = () => {
      activeCity = 'all';
      updateCityPills();
      filterDestinations();
    };
    cityPillsContainer.appendChild(allPill);

    data.cities.forEach(city => {
      const pill = document.createElement('button');
      const cityNameNorm = city.name.toLowerCase();
      const isActive = activeCity !== 'all' && (cityNameNorm.includes(activeCity) || activeCity.includes(cityNameNorm.split(' ')[0].toLowerCase()));
      pill.className = `filter-pill ${isActive ? 'active' : ''}`;
      pill.setAttribute('data-city', cityNameNorm);
      pill.innerHTML = `📍 ${city.name} <span style="font-size:0.75rem; opacity:0.7;">(${city.state})</span>`;
      pill.onclick = () => {
        activeCity = cityNameNorm;
        updateCityPills();
        filterDestinations();
      };
      cityPillsContainer.appendChild(pill);
    });
  }

  function updateCityPills() {
    const pills = cityPillsContainer.querySelectorAll('.filter-pill');
    pills.forEach((p, idx) => {
      if (idx === 0) {
        p.classList.toggle('active', activeCity === 'all');
      } else {
        const c = p.getAttribute('data-city');
        p.classList.toggle('active', activeCity !== 'all' && (c.includes(activeCity) || activeCity.includes(c.split(' ')[0])));
      }
    });
  }

  // 2. Filter Button Listeners
  crowdFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      crowdFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCrowd = btn.getAttribute('data-crowd');
      filterDestinations();
    });
  });

  categoryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category');
      filterDestinations();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterDestinations();
    });
  }

  // 3. Filter Destinations Logic
  function filterDestinations() {
    const filtered = data.destinations.filter(dest => {
      // City match
      if (activeCity !== 'all') {
        const dCity = (dest.city + ' ' + dest.state + ' ' + dest.region).toLowerCase();
        const matchesCity = dCity.includes(activeCity) || activeCity.split(' ').some(word => dCity.includes(word));
        if (!matchesCity) return false;
      }

      // Crowd level match
      if (activeCrowd !== 'all') {
        if (dest.crowdLevel !== activeCrowd) return false;
      }

      // Category match
      if (activeCategory !== 'all') {
        if (dest.category !== activeCategory) return false;
      }

      // Search match
      if (searchQuery) {
        const text = `${dest.name} ${dest.city} ${dest.state} ${dest.tagline} ${dest.historicalBackstory} ${(dest.highlights || []).join(' ')}`.toLowerCase();
        if (!text.includes(searchQuery)) return false;
      }

      return true;
    });

    renderDestinations(filtered);
    if (resultsCount) {
      resultsCount.textContent = `Showing ${filtered.length} of ${data.destinations.length} Hidden Heritage Gems`;
    }
  }

  // 4. Render Destination Cards
  function renderDestinations(list) {
    if (!destinationsGrid) return;

    if (list.length === 0) {
      destinationsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding:60px 20px; background:var(--white); border-radius:var(--radius-xl); border:1px solid var(--border-card);">
          <div style="font-size:3rem; margin-bottom:12px;">🧭</div>
          <h3 style="font-size:1.4rem; margin-bottom:6px;">No hidden heritage gems matched your current filters</h3>
          <p style="color:var(--slate); max-width:480px; margin:0 auto 20px auto;">
            Try loosening your crowd meter or category filters to discover more off-beat cultural sites across India.
          </p>
          <button class="btn btn-primary" id="btn-reset-filters">Reset All Filters</button>
        </div>
      `;
      document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
        activeCity = 'all';
        activeCrowd = 'all';
        activeCategory = 'all';
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        crowdFilterBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
        categoryFilterBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
        updateCityPills();
        filterDestinations();
      });
      return;
    }

    destinationsGrid.innerHTML = list.map(dest => {
      const guide = (data.guides || []).find(g => g.id === dest.guideId) || { name: dest.guideName || 'Native Guide' };
      return `
        <div class="destination-card" id="dest-card-${dest.id}">
          <div class="card-img-wrap">
            <img src="${dest.image}" alt="${dest.name}" class="card-img" loading="lazy" />
            <div class="card-badges-top">
              <span class="category-badge">${dest.category}</span>
              ${window.GoBeyond.renderCrowdMeterBadge(dest.crowdLevel, dest.crowdPercent)}
            </div>
          </div>
          <div class="card-body">
            <div class="card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>${dest.city}, ${dest.state} • ${dest.region}</span>
            </div>
            <h3 class="card-title">${dest.name}</h3>
            <p class="card-tagline">${dest.tagline}</p>

            <div class="package-guide-pill" style="cursor:pointer;" onclick="window.GoBeyond.openGuideModal('${dest.guideId}')" title="Click to inspect guide credentials">
              <span style="font-size:0.75rem; color:var(--muted);">Native Custodian:</span>
              <strong style="color:var(--teal); font-size:0.82rem;">${guide.name}</strong>
              <span style="font-size:0.72rem; background:var(--white); padding:1px 6px; border-radius:999px; color:#10B981; font-weight:700;">Verified</span>
            </div>

            <div style="font-size:0.8rem; color:var(--slate); margin-bottom:12px; line-height:1.4;">
              ${dest.historicalBackstory.substring(0, 115)}...
            </div>

            <div class="card-highlights">
              ${(dest.highlights || []).map(h => `<span class="highlight-pill">${h}</span>`).join('')}
            </div>

            <div class="card-footer">
              <div class="card-price-block">
                <span class="price-label">Starting From</span>
                <span class="price-amount">₹${dest.startingPrice.toLocaleString('en-IN')}</span>
              </div>
              <div class="card-actions">
                <button class="btn btn-outline btn-sm" onclick="window.GoBeyond.openRouteGuide('${dest.id}')" title="Interactive Road & Transport Guide">
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

  // 5. Interactive Cultural Map
  initCulturalMap();

  function initCulturalMap() {
    const mapContainer = document.getElementById('cultural-map-box');
    const popup = document.getElementById('map-popup-drawer');
    if (!mapContainer || !popup) return;

    // Transport Hubs Data
    const transportHubs = [
      { id: 'hub-delhi', name: 'Indira Gandhi Airport (DEL)', city: 'New Delhi', type: 'flight', x: 34, y: 32 },
      { id: 'hub-raipur', name: 'Raipur Airport (RPR) & Junction', city: 'Raipur', type: 'flight', x: 52, y: 53 },
      { id: 'hub-jorhat', name: 'Jorhat Airport (JRH) / Nimati Ghat', city: 'Jorhat', type: 'flight', x: 86, y: 33 },
      { id: 'hub-hubli', name: 'Hubli Airport (HBX) / Hosapete Rly', city: 'Hosapete', type: 'train', x: 36, y: 72 },
      { id: 'hub-trichy', name: 'Tiruchirappalli Airport (TRZ)', city: 'Trichy', type: 'flight', x: 44, y: 86 },
      { id: 'hub-jhansi', name: 'Jhansi Railway Junction (VGLJ)', city: 'Jhansi', type: 'train', x: 45, y: 43 },
      { id: 'hub-chandigarh', name: 'Chandigarh Junction & Airport', city: 'Chandigarh', type: 'train', x: 33, y: 22 },
      { id: 'hub-jaipur', name: 'Jaipur International Hub', city: 'Jaipur', type: 'flight', x: 28, y: 38 },
      { id: 'hub-varanasi', name: 'Varanasi Junction (BSB)', city: 'Varanasi', type: 'train', x: 57, y: 44 },
      { id: 'hub-guwahati', name: 'Guwahati Rail & Flight Terminal', city: 'Guwahati', type: 'flight', x: 80, y: 37 }
    ];

    // SVG Map overlay rendering
    const svgOverlay = document.getElementById('map-svg-elements');
    if (!svgOverlay) return;

    let svgHtml = '';

    // Draw connecting lines between transport hubs and destination sites
    data.destinations.forEach(dest => {
      const coords = dest.mapCoords || { x: 50, y: 50 };
      // find nearest hub
      let nearestHub = transportHubs[0];
      let minDist = 99999;
      transportHubs.forEach(hub => {
        const d = Math.hypot(hub.x - coords.x, hub.y - coords.y);
        if (d < minDist) {
          minDist = d;
          nearestHub = hub;
        }
      });

      // SVG dashed connector
      svgHtml += `
        <line x1="${nearestHub.x}%" y1="${nearestHub.y}%" x2="${coords.x}%" y2="${coords.y}%" 
              stroke="rgba(240, 173, 78, 0.45)" stroke-width="1.5" stroke-dasharray="4,4" />
      `;
    });

    // Render Transport Hub Pins
    transportHubs.forEach(hub => {
      const icon = hub.type === 'flight' ? '✈️' : '🚆';
      svgHtml += `
        <g class="transport-hub-pin" transform="translate(0,0)" onclick="window.selectTransportHub('${hub.id}')">
          <circle cx="${hub.x}%" cy="${hub.y}%" r="9" fill="#0A4D68" stroke="#ffffff" stroke-width="1.5" />
          <text x="${hub.x}%" y="${hub.y}%" text-anchor="middle" dy="3.5" font-size="9" fill="#fff">${hub.type === 'flight' ? '✈' : '🚂'}</text>
        </g>
      `;
    });

    // Render Heritage Destination Pins
    data.destinations.forEach(dest => {
      const coords = dest.mapCoords || { x: 50, y: 50 };
      const pinColor = dest.crowdLevel === 'peaceful' ? '#10B981' : (dest.crowdLevel === 'moderate' ? '#F59E0B' : '#EF4444');
      svgHtml += `
        <g class="map-node" onclick="window.selectMapDestination('${dest.id}')">
          <circle cx="${coords.x}%" cy="${coords.y}%" r="14" fill="${pinColor}" fill-opacity="0.3">
            <animate attributeName="r" values="12;18;12" dur="2.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="${coords.x}%" cy="${coords.y}%" r="7" fill="${pinColor}" stroke="#ffffff" stroke-width="2" />
          <text x="${coords.x}%" y="${coords.y - 12}%" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.8))">
            ${dest.city.split('/')[0].trim()}
          </text>
        </g>
      `;
    });

    svgOverlay.innerHTML = svgHtml;

    // Window helpers for map interactions
    window.selectMapDestination = (destId) => {
      const dest = data.destinations.find(d => d.id === destId);
      if (!dest) return;

      popup.style.display = 'block';
      popup.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            <span style="font-size:0.7rem; text-transform:uppercase; font-weight:700; color:var(--terracotta);">${dest.category}</span>
            <h4 style="font-size:1.15rem; margin:0 0 2px 0;">${dest.name}</h4>
            <div style="font-size:0.8rem; color:var(--muted);">${dest.city}, ${dest.state}</div>
          </div>
          <button onclick="document.getElementById('map-popup-drawer').style.display='none'" style="background:none; border:none; font-size:1.2rem; cursor:pointer; color:var(--slate);">&times;</button>
        </div>

        <div style="margin:10px 0;">
          ${window.GoBeyond.renderCrowdMeterBadge(dest.crowdLevel, dest.crowdPercent)}
        </div>

        <div style="font-size:0.82rem; color:var(--slate); line-height:1.4; margin-bottom:12px;">
          <strong>Nearest Road Route:</strong> ${dest.routeGuide?.road?.highway || 'Scenic National Highway'} (${dest.routeGuide?.road?.travelTime || 'Direct'})
        </div>

        <div style="display:flex; gap:8px;">
          <button class="btn btn-outline btn-sm" style="flex:1;" onclick="window.GoBeyond.openRouteGuide('${dest.id}')">🛣️ Road Guide</button>
          <button class="btn btn-primary btn-sm" style="flex:1;" onclick="window.GoBeyond.openBookingModal(null, '${dest.id}')">Book Tour</button>
        </div>
      `;

      // Scroll card into view if exists
      const targetCard = document.getElementById(`dest-card-${dest.id}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetCard.style.boxShadow = '0 0 0 3px var(--terracotta)';
        setTimeout(() => targetCard.style.boxShadow = '', 2000);
      }
    };

    window.selectTransportHub = (hubId) => {
      const hub = transportHubs.find(h => h.id === hubId);
      if (!hub) return;

      popup.style.display = 'block';
      popup.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
          <div>
            <span style="font-size:0.7rem; text-transform:uppercase; font-weight:700; color:var(--teal);">Transport Hub</span>
            <h4 style="font-size:1.1rem; margin:0 0 2px 0;">${hub.name}</h4>
            <div style="font-size:0.8rem; color:var(--muted);">${hub.city}, India</div>
          </div>
          <button onclick="document.getElementById('map-popup-drawer').style.display='none'" style="background:none; border:none; font-size:1.2rem; cursor:pointer; color:var(--slate);">&times;</button>
        </div>
        <p style="font-size:0.84rem; color:var(--slate); line-height:1.4; margin-bottom:12px;">
          Connects via daily superfast express trains and national expressway corridors into nearby heritage sanctuaries.
        </p>
        <button class="btn btn-outline btn-sm" style="width:100%;" onclick="window.GoBeyond.showToast('Transfer routes from ${hub.name} loaded!', 'info')">
          View Connecting Road Transfers
        </button>
      `;
    };

    // Auto-select first destination in popup
    window.selectMapDestination(data.destinations[0].id);
  }

  // Run initial filter
  filterDestinations();
});
