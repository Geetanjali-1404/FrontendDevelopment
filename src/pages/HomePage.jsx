import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import { CrowdMeter } from '../components/CrowdMeter';

export const HomePage = ({ 
  destinations, 
  packages, 
  guides, 
  reviews, 
  currency, 
  setCurrentPage, 
  onSelectDestination, 
  onSelectPackage, 
  onSelectGuide,
  onOpenRouteGuide
}) => {
  // Omni search states
  const [searchCity, setSearchCity] = useState('');
  const [searchInterest, setSearchInterest] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchTravelers, setSearchTravelers] = useState('2');

  // Value proposition tab
  const [propTab, setPropTab] = useState('gobeyond'); // 'gobeyond' | 'tourist-trap'

  // Currency rate
  const rate = currency === 'USD' ? 0.012 : currency === 'EUR' ? 0.011 : currency === 'GBP' ? 0.0095 : 1;
  const currSymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const formatPrice = (amt) => `${currSymbol}${Math.round(amt * rate).toLocaleString()}`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage('destinations');
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center justify-center pt-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Warm Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600100397608-f010f443b715?auto=format&fit=crop&w=2000&q=85" 
            alt="Secluded Hampi Boulders at Dawn"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/70 to-slate-950/40" />
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-[#0F4C5C]/30 to-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-6">
          
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-bold shadow-lg animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Zero-Crowd Living Indian Heritage</span>
            <span className="text-white/40">•</span>
            <span className="text-white font-medium">84% Fees to Local Artisans</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white font-serif tracking-tight leading-[1.15] drop-shadow-md">
            Discover Untold Stories <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-[#F0AD4E]">
              With Local Eyes
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-200 font-medium leading-relaxed drop-shadow-xs">
            Step away from overcrowded tourist spots. Explore forgotten boulder kingdoms, 1,000-pillar courtyards, and riverside mask-making monasteries led by certified local historians and master craftsmen.
          </p>

          {/* Omni Search Bar */}
          <div className="pt-4 max-w-4xl mx-auto">
            <form 
              onSubmit={handleSearchSubmit}
              className="bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-3xl shadow-2xl border border-white/20 text-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center text-left"
            >
              {/* City / Region */}
              <div className="px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-200">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                  City / Heritage Region
                </label>
                <div className="flex items-center gap-2">
                  <Icon name="map-pin" size={16} className="text-[#D9534F] shrink-0" />
                  <select
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                  >
                    <option value="">All Indian Regions</option>
                    <option value="Hampi">Anegundi & Hampi (Karnataka)</option>
                    <option value="Chettinad">Chettinad Mansions (Tamil Nadu)</option>
                    <option value="Majuli">Majuli River Satras (Assam)</option>
                    <option value="Spiti">Dhankar & Spiti (Himachal)</option>
                    <option value="Bishnupur">Bishnupur Terracotta (West Bengal)</option>
                    <option value="Orchha">Orchha & Chanderi (Madhya Pradesh)</option>
                  </select>
                </div>
              </div>

              {/* Cultural Interest */}
              <div className="px-3 py-2 border-b sm:border-b-0 lg:border-r border-slate-200">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                  Cultural Interest
                </label>
                <div className="flex items-center gap-2">
                  <Icon name="compass" size={16} className="text-[#F0AD4E] shrink-0" />
                  <select
                    value={searchInterest}
                    onChange={(e) => setSearchInterest(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                  >
                    <option value="">Any Cultural Theme</option>
                    <option value="architecture">Ancient Architecture</option>
                    <option value="crafts">Living Crafts & Looms</option>
                    <option value="monastic">Monastic Trails & Caves</option>
                    <option value="culinary">Heirloom Culinary Lore</option>
                    <option value="rituals">Sacred Rituals & Dance</option>
                  </select>
                </div>
              </div>

              {/* Date */}
              <div className="px-3 py-2 border-b sm:border-b-0 sm:border-r border-slate-200">
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                  Travel Window
                </label>
                <div className="flex items-center gap-2">
                  <Icon name="calendar" size={16} className="text-[#0F4C5C] shrink-0" />
                  <input
                    type="date"
                    value={searchDate}
                    onChange={(e) => setSearchDate(e.target.value)}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="p-1">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-2xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-black shadow-lg shadow-[#D9534F]/30 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <Icon name="search" size={16} />
                  <span>Find Off-Beat Tours</span>
                </button>
              </div>
            </form>
          </div>

          {/* Quick Filter Badges below search */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-200">
            <span className="font-semibold text-amber-300">Trending Now:</span>
            {['Hampi Coracle Dawn', 'Chettinad Tile Guilds', 'Majuli Mask Making', 'Dhankar Cliff Hermitages'].map((trend) => (
              <button
                key={trend}
                onClick={() => setCurrentPage('destinations')}
                className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white text-[11px] font-medium backdrop-blur-xs transition-colors"
              >
                {trend}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. VALUE PROPOSITION: The GoBeyond Way vs. Overcrowded Tourist Traps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
            The GoBeyond Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
            Why Travel Away From the Crowds?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            India's sacred heritage was never meant to be experienced behind bus queues and selfie sticks. Compare mass commercial tourism with mindful cultural immersion.
          </p>
        </div>

        {/* Side-by-side comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Overcrowded Tourist Traps (The Old Way) */}
          <div className="p-8 rounded-3xl bg-slate-100/70 border border-slate-200/80 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-300 text-slate-700 flex items-center justify-center font-bold text-sm">
                ✕
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-800 font-serif">
                  Overcrowded Commercial Circuits
                </h3>
                <p className="text-xs text-slate-500">Mass tour buses, souvenir traps & noise</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Hours wasted standing in 300-person ticket lines and noisy selfie scrums.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Unvetted commercial guides who rush you through monuments to force commission shops.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Over 80% of booking fees leak to international operators and middlemen outside the region.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rose-500 font-bold mt-0.5">✕</span>
                <span>Degradation of fragile stone shrines and disruption of peaceful monastic life.</span>
              </li>
            </ul>
          </div>

          {/* The GoBeyond Way (Highlight) */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#FAF9F6] via-amber-50/50 to-amber-100/40 border-2 border-amber-300 shadow-xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#D9534F] text-white text-[10px] font-black px-4 py-1 rounded-bl-2xl uppercase tracking-wider">
              Recommended
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0F4C5C] text-amber-300 flex items-center justify-center font-bold text-sm shadow-md">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 font-serif">
                  The GoBeyond Cultural Journey
                </h3>
                <p className="text-xs text-[#0F4C5C] font-semibold">Quiet sanctuaries, verified locals & true preservation</p>
              </div>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Live Crowd Meter:</strong> Intelligently timed dawn or twilight visits with under 20% site capacity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Living Custodians:</strong> Accompanied by native historians, mask sculptors, and heritage architects.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>84% Direct Impact:</strong> Your funds directly support rural weavers, temple cooks, and stepwell restoration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                <span><strong>Intimate Groups:</strong> Strictly capped at 6 mindful travelers for profound tranquility.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Stats Counter Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-3xl bg-white border border-amber-900/10 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-[#D9534F] font-serif">84%</span>
            <span className="text-xs font-bold text-slate-700 mt-1 block">Direct to Local Artisans</span>
            <span className="text-[11px] text-slate-400">Fair-wage transparent pledge</span>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-900/10 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-[#0F4C5C] font-serif">120+</span>
            <span className="text-xs font-bold text-slate-700 mt-1 block">Protected Shrines & Trails</span>
            <span className="text-[11px] text-slate-400">Across 8 Indian cultural zones</span>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-900/10 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-[#F0AD4E] font-serif">4.98</span>
            <span className="text-xs font-bold text-slate-700 mt-1 block">Average Guide Rating</span>
            <span className="text-[11px] text-slate-400">From 1,200+ mindful travelers</span>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-amber-900/10 shadow-xs text-center">
            <span className="block text-3xl sm:text-4xl font-black text-emerald-600 font-serif">&lt; 20%</span>
            <span className="text-xs font-bold text-slate-700 mt-1 block">Average Crowd Density</span>
            <span className="text-[11px] text-slate-400">Guaranteed peaceful visits</span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
              Handpicked Indian Gems
            </span>
            <h2 className="text-3xl font-black text-slate-900 font-serif mt-1">
              Featured Secluded Destinations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Each spot is vetted for zero-crowd serenity, cultural depth, and direct guide support.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('destinations')}
            className="text-xs font-bold text-[#D9534F] hover:text-[#C84B31] flex items-center gap-1.5 group"
          >
            <span>View All Destinations</span>
            <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.slice(0, 3).map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Crowd Meter */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Crowd Meter Badge */}
                <div className="absolute top-4 left-4">
                  <CrowdMeter 
                    level={dest.crowdLevel} 
                    percent={dest.crowdPercent} 
                    statusText={dest.crowdStatus}
                    advice={dest.crowdAdvice} 
                  />
                </div>

                {/* State Tag */}
                <span className="absolute bottom-3 left-4 text-xs font-bold text-amber-200">
                  {dest.city}, {dest.state}
                </span>

                {/* Rating pill */}
                <span className="absolute bottom-3 right-4 bg-black/60 text-amber-300 text-xs px-2.5 py-0.5 rounded-full backdrop-blur-xs font-bold flex items-center gap-1">
                  <Icon name="star" size={12} /> {dest.rating}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-[#0F4C5C] uppercase tracking-wider">
                    {dest.category}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 font-serif mt-0.5 group-hover:text-[#D9534F] transition-colors line-clamp-1">
                    {dest.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {dest.tagline}
                  </p>
                </div>

                {/* Highlights preview */}
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon name="train" size={13} className="text-amber-600 shrink-0" />
                    <span className="truncate">{dest.transport.train.hub}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="clock" size={13} className="text-teal-600 shrink-0" />
                    <span>Duration: {dest.duration}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">From</span>
                    <span className="text-lg font-black text-slate-900 font-serif">
                      {formatPrice(dest.basePriceINR)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenRouteGuide(dest)}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
                      title="View Transit Routes"
                    >
                      <Icon name="plane" size={14} />
                    </button>
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="px-4 py-2 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all active:scale-95"
                    >
                      Explore Gem
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRENDING OFF-BEAT PACKAGES */}
      <section className="bg-amber-50/40 py-16 border-y border-amber-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
                Exclusive Itineraries
              </span>
              <h2 className="text-3xl font-black text-slate-900 font-serif mt-1">
                Trending Guided Heritage Packages
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Curated private and small-group journeys with complete route assistance and artisan masterclasses.
              </p>
            </div>

            <button
              onClick={() => setCurrentPage('packages')}
              className="text-xs font-bold text-[#D9534F] hover:text-[#C84B31] flex items-center gap-1.5 group"
            >
              <span>View All Packages</span>
              <Icon name="arrow-right" size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.slice(0, 3).map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 text-[11px] font-bold px-3 py-1 rounded-full text-white ${
                    pkg.difficulty === 'Easy' ? 'bg-emerald-600' : pkg.difficulty === 'Moderate' ? 'bg-amber-600' : 'bg-rose-600'
                  }`}>
                    {pkg.difficulty} Pace
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                      <Icon name="map-pin" size={12} className="text-[#D9534F]" /> {pkg.location}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 font-serif mt-1">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                      {pkg.overview}
                    </p>
                  </div>

                  {/* Included preview */}
                  <div className="space-y-1.5 text-xs text-slate-700 bg-amber-50/50 p-3 rounded-2xl border border-amber-100">
                    <p className="font-bold text-slate-900 text-[11px] uppercase tracking-wide">
                      Highlights Included:
                    </p>
                    <p className="text-[11px] text-slate-600 truncate">• {pkg.inclusions[0]}</p>
                    <p className="text-[11px] text-slate-600 truncate">• {pkg.inclusions[1]}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-400 line-through">
                        {formatPrice(pkg.originalPriceINR)}
                      </span>
                      <span className="text-xl font-black text-[#D9534F] font-serif block">
                        {formatPrice(pkg.priceINR)}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectPackage(pkg)}
                      className="px-5 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all active:scale-95"
                    >
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SPOTLIGHT ON LOCAL INDIAN GUIDES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black text-[#0F4C5C] uppercase tracking-widest font-serif">
            Living Cultural Custodians
          </span>
          <h2 className="text-3xl font-black text-slate-900 font-serif">
            Meet Your Local Heritage Guides
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Not commercial tour operators, but resident historians, mask artisans, and architectural scholars passionate about sharing their home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.slice(0, 3).map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-3xl p-6 border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="flex items-start gap-4">
                <img 
                  src={guide.avatar} 
                  alt={guide.name}
                  className="w-18 h-18 rounded-2xl object-cover border-2 border-amber-300 shadow-sm shrink-0" 
                />
                <div>
                  <h3 className="text-lg font-black text-slate-900 font-serif group-hover:text-[#D9534F] transition-colors">
                    {guide.name}
                  </h3>
                  <p className="text-xs text-[#0F4C5C] font-bold">{guide.role}</p>
                  <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                    <Icon name="map-pin" size={11} /> {guide.location}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                "{guide.bio}"
              </p>

              <div className="flex flex-wrap gap-1.5">
                {guide.languages.map((lang) => (
                  <span key={lang} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                    {lang}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-500 flex items-center gap-1">
                  <Icon name="star" size={13} /> {guide.rating} ({guide.reviewsCount})
                </span>

                <button
                  onClick={() => onSelectGuide(guide)}
                  className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#D9534F] text-xs font-bold border border-amber-200 transition-colors flex items-center gap-1.5"
                >
                  <Icon name="video" size={13} /> Watch Intro
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION: Become a Local Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0F4C5C] via-[#0A333E] to-[#136F63] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl border border-amber-400/20">
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest font-serif">
              Join the Movement
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-serif leading-tight">
              Are You a Resident Indian Historian, Artisan, or Storyteller?
            </h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              We empower native residents to guide mindful travelers without middleman exploitation. Receive 84% of booking fees, set your own schedule, and preserve your village's heritage with dignity.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => setCurrentPage('guide-onboarding')}
                className="px-6 py-3 rounded-2xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-black shadow-lg shadow-[#D9534F]/30 transition-all transform active:scale-95"
              >
                Apply as a Local Guide
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 backdrop-blur-xs transition-colors"
              >
                Read Our Fair-Wage Charter
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
