import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import { CrowdMeter } from '../components/CrowdMeter';

export const DestinationsPage = ({
  destinations,
  currency,
  onSelectDestination,
  onOpenRouteGuide
}) => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [crowdFilter, setCrowdFilter] = useState('all'); // 'all' | 'quiet' | 'moderate'
  const [searchQuery, setSearchQuery] = useState('');

  // Currency
  const rate = currency === 'USD' ? 0.012 : currency === 'EUR' ? 0.011 : currency === 'GBP' ? 0.0095 : 1;
  const currSymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const formatPrice = (amt) => `${currSymbol}${Math.round(amt * rate).toLocaleString()}`;

  // Unique cities/regions
  const cities = ['all', ...Array.from(new Set(destinations.map(d => d.city.split('/')[0].trim())))];

  // Filtering
  const filtered = destinations.filter((dest) => {
    const matchesCity = selectedCity === 'all' || dest.city.toLowerCase().includes(selectedCity.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || dest.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesCrowd = crowdFilter === 'all' || dest.crowdLevel === crowdFilter;
    const matchesSearch = !searchQuery || 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesCategory && matchesCrowd && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
          City & Destination Explorer
        </span>
        <h1 className="text-4xl font-black text-slate-900 font-serif">
          India's Hidden Cultural & Heritage Sanctuaries
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Filter by starting city, crowd density, and living craft traditions. Each destination includes multi-modal Indian rail, air, and road route directions.
        </p>
      </div>

      {/* Interactive Filter Bar */}
      <div className="bg-white p-5 rounded-3xl border border-amber-900/10 shadow-lg space-y-4">
        
        {/* Search input & Crowd filter */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="md:col-span-2 relative">
            <Icon name="search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by monument, craft, river or state (e.g. Tungabhadra, Chettinad, Baluchari)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 shrink-0">Crowd Meter:</span>
            <select
              value={crowdFilter}
              onChange={(e) => setCrowdFilter(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-hidden"
            >
              <option value="all">All Density Levels</option>
              <option value="quiet">Quiet & Peaceful Only (&lt;25%)</option>
              <option value="moderate">Moderate (&lt;65%)</option>
            </select>
          </div>
        </div>

        {/* City Selector Pills */}
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 font-serif">
            Filter by Heritage Cluster / City
          </span>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCity === city
                    ? 'bg-[#D9534F] text-white shadow-md shadow-[#D9534F]/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {city === 'all' ? 'All Indian Regions' : city}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1">
        <span>Showing <strong>{filtered.length}</strong> secluded Indian heritage destinations</span>
        {(selectedCity !== 'all' || selectedCategory !== 'all' || crowdFilter !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCity('all');
              setSelectedCategory('all');
              setCrowdFilter('all');
              setSearchQuery('');
            }}
            className="text-[#D9534F] font-bold hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((dest) => (
          <div
            key={dest.id}
            className="group bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <CrowdMeter 
                  level={dest.crowdLevel} 
                  percent={dest.crowdPercent} 
                  statusText={dest.crowdStatus}
                  advice={dest.crowdAdvice} 
                />
              </div>

              <span className="absolute bottom-3 left-4 text-xs font-bold text-amber-200">
                {dest.city}, {dest.state}
              </span>

              <span className="absolute bottom-3 right-4 bg-black/60 text-amber-300 text-xs px-2.5 py-0.5 rounded-full backdrop-blur-xs font-bold flex items-center gap-1">
                <Icon name="star" size={12} /> {dest.rating}
              </span>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-bold text-[#0F4C5C] uppercase tracking-wider">
                  {dest.category}
                </span>
                <h3 className="text-xl font-black text-slate-900 font-serif mt-0.5 group-hover:text-[#D9534F] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                  {dest.description}
                </p>
              </div>

              {/* Transit and duration details */}
              <div className="bg-[#FAF9F6] p-3 rounded-2xl border border-slate-100 text-xs text-slate-700 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Icon name="train" size={13} className="text-[#D9534F] shrink-0" />
                  <span className="font-semibold text-slate-800">Rail:</span>
                  <span className="truncate">{dest.transport.train.hub}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="plane" size={13} className="text-[#0275D8] shrink-0" />
                  <span className="font-semibold text-slate-800">Air:</span>
                  <span className="truncate">{dest.transport.flight.hub}</span>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-semibold">Base Rate</span>
                  <span className="text-lg font-black text-slate-900 font-serif">
                    {formatPrice(dest.basePriceINR)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenRouteGuide(dest)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <Icon name="map-pin" size={13} /> Route Guide
                  </button>
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="px-4 py-2 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all active:scale-95"
                  >
                    Explore
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
