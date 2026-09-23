import React, { useState } from 'react';
import { Icon } from '../components/Icons';

export const PackagesPage = ({ 
  packages, 
  currency, 
  onSelectPackage 
}) => {
  const [difficultyFilter, setDifficultyFilter] = useState('all'); // 'all' | 'Easy' | 'Moderate' | 'Adventurous'
  const [durationFilter, setDurationFilter] = useState('all'); // 'all' | '1 Day' | '2 Days' | '3 Days'
  const [searchQuery, setSearchQuery] = useState('');

  // Currency
  const rate = currency === 'USD' ? 0.012 : currency === 'EUR' ? 0.011 : currency === 'GBP' ? 0.0095 : 1;
  const currSymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const formatPrice = (amt) => `${currSymbol}${Math.round(amt * rate).toLocaleString()}`;

  const filtered = packages.filter((pkg) => {
    const matchesDiff = difficultyFilter === 'all' || pkg.difficulty === difficultyFilter;
    const matchesDur = durationFilter === 'all' || pkg.duration.includes(durationFilter);
    const matchesSearch = !searchQuery || 
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiff && matchesDur && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
          Curated Off-Beat Expeditions
        </span>
        <h1 className="text-4xl font-black text-slate-900 font-serif">
          Indian Heritage Tour Packages & Guided Journeys
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Intimate group sizes (maximum 6 travelers), transparent fair-wage guide compensation, and access to private shrines and workshops closed to mass tourism.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-5 rounded-3xl border border-amber-900/10 shadow-lg grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        
        {/* Search */}
        <div className="relative">
          <Icon name="search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tours or heritage craft..."
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
          />
        </div>

        {/* Physical Difficulty */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 shrink-0">Difficulty:</span>
          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-hidden"
          >
            <option value="all">All Physical Levels</option>
            <option value="Easy">Easy (Gentle Walks & Shaded Haveli Tours)</option>
            <option value="Moderate">Moderate (Brahmaputra Ferry & Rural Trails)</option>
            <option value="Adventurous">Adventurous (High-Altitude Spiti Hikes)</option>
          </select>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 shrink-0">Duration:</span>
          <select
            value={durationFilter}
            onChange={(e) => setDurationFilter(e.target.value)}
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-hidden"
          >
            <option value="all">Any Duration</option>
            <option value="1 Day">1 Day Immersions</option>
            <option value="2 Days">2 Days / 1 Night</option>
            <option value="3 Days">3 Days High-Altitude Expeditions</option>
          </select>
        </div>

      </div>

      {/* Package Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Difficulty badge */}
                <span className={`absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full text-white shadow-md ${
                  pkg.difficulty === 'Easy' 
                    ? 'bg-emerald-600' 
                    : pkg.difficulty === 'Moderate' 
                    ? 'bg-amber-600' 
                    : 'bg-rose-600'
                }`}>
                  {pkg.difficulty} Pace
                </span>

                {/* Duration badge */}
                <span className="absolute bottom-3 left-4 bg-black/60 text-white text-xs px-2.5 py-0.5 rounded-full backdrop-blur-xs font-medium flex items-center gap-1">
                  <Icon name="clock" size={12} /> {pkg.duration}
                </span>

                {/* Rating */}
                <span className="absolute bottom-3 right-4 bg-black/60 text-amber-300 text-xs px-2.5 py-0.5 rounded-full backdrop-blur-xs font-bold flex items-center gap-1">
                  <Icon name="star" size={12} /> {pkg.rating}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <Icon name="map-pin" size={12} className="text-[#D9534F]" /> {pkg.location}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 font-serif mt-1 group-hover:text-[#D9534F] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {pkg.overview}
                  </p>
                </div>

                {/* Amenities checklist */}
                <div className="bg-[#FAF9F6] p-3.5 rounded-2xl border border-slate-100 text-xs space-y-1.5">
                  <p className="font-bold text-slate-900 text-[11px] uppercase tracking-wide font-serif">
                    Included Amenities:
                  </p>
                  {pkg.inclusions.slice(0, 3).map((inc, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700">
                      <Icon name="check" size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{inc}</span>
                    </div>
                  ))}
                </div>

                {/* Crowd Density Tag */}
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{pkg.crowdStatus}</span>
                </div>
              </div>
            </div>

            {/* Pricing & CTA footer */}
            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 line-through block">
                  {formatPrice(pkg.originalPriceINR)}
                </span>
                <span className="text-2xl font-black text-[#D9534F] font-serif">
                  {formatPrice(pkg.priceINR)}
                </span>
                <span className="text-[10px] text-slate-400 block font-medium">per traveler</span>
              </div>

              <button
                onClick={() => onSelectPackage(pkg)}
                className="px-6 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Icon name="calendar" size={14} /> Book Journey
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
