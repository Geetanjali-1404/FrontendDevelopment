import React, { useState } from 'react';
import { Icon } from '../components/Icons';
import { CrowdMeter } from '../components/CrowdMeter';

export const CulturalMapPage = ({ 
  destinations, 
  transportHubs, 
  currency, 
  onSelectDestination, 
  onOpenRouteGuide 
}) => {
  const [selectedPin, setSelectedPin] = useState(destinations[0]);
  const [filterType, setFilterType] = useState('all'); // 'all' | 'south' | 'north' | 'east' | 'west'

  // Currency
  const rate = currency === 'USD' ? 0.012 : currency === 'EUR' ? 0.011 : currency === 'GBP' ? 0.0095 : 1;
  const currSymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const formatPrice = (amt) => `${currSymbol}${Math.round(amt * rate).toLocaleString()}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-[#0F4C5C] uppercase tracking-widest font-serif">
          Interactive Geographic Navigator
        </span>
        <h1 className="text-4xl font-black text-slate-900 font-serif">
          Indian Cultural Heritage & Transport Map
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Pinpoint secluded cultural gems relative to Indian Railways express junctions, domestic airports, and scenic road networks.
        </p>
      </div>

      {/* Map Layout: Visual Map on Left/Center, Interactive Card Drawer on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Interactive Map Canvas Container */}
        <div className="lg:col-span-2 bg-[#FAF9F6] rounded-3xl border-2 border-amber-900/15 p-6 shadow-xl relative overflow-hidden">
          
          {/* Map Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-amber-900/10">
            <div className="flex items-center gap-3 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#D9534F] ring-2 ring-[#D9534F]/30" /> Hidden Heritage Pin
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#0275D8] ring-2 ring-[#0275D8]/30" /> Transport Hub
              </span>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Click any pin on the map to inspect
            </div>
          </div>

          {/* Stylized Visual Map of India */}
          <div className="relative w-full aspect-4/3 sm:aspect-16/10 bg-gradient-to-b from-amber-50/70 via-stone-50 to-amber-100/50 rounded-2xl border border-amber-200/80 overflow-hidden shadow-inner flex items-center justify-center p-4">
            
            {/* Subtle Topographical Watermarks */}
            <svg 
              viewBox="0 0 100 100" 
              className="absolute inset-0 w-full h-full opacity-15 pointer-events-none stroke-amber-900"
              fill="none"
              strokeWidth="0.5"
            >
              <path d="M 20 20 Q 35 15, 50 25 T 80 30" />
              <path d="M 15 45 Q 40 40, 65 50 T 85 55" />
              <path d="M 25 70 Q 45 65, 60 75 T 75 80" />
              {/* Outline hint of Indian subcontinent */}
              <path d="M 35 12 Q 50 10 65 15 Q 75 25 85 35 Q 70 45 65 55 Q 55 75 48 92 Q 40 75 32 55 Q 20 45 28 30 Z" strokeWidth="0.8" strokeDasharray="2,2" />
            </svg>

            {/* Connecting transit route dashed lines */}
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
              <line x1="38" y1="64" x2="42" y2="78" stroke="#0F4C5C" strokeWidth="0.8" strokeDasharray="1.5,1.5" opacity="0.6" />
              <line x1="48" y1="44" x2="36" y2="36" stroke="#0F4C5C" strokeWidth="0.8" strokeDasharray="1.5,1.5" opacity="0.6" />
              <line x1="48" y1="44" x2="68" y2="50" stroke="#0F4C5C" strokeWidth="0.8" strokeDasharray="1.5,1.5" opacity="0.6" />
            </svg>

            {/* Render Transport Hubs */}
            {transportHubs.map((hub) => (
              <div
                key={hub.id}
                style={{ left: `${hub.coordinates.x}%`, top: `${hub.coordinates.y}%` }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 group cursor-pointer"
                title={`${hub.name} (${hub.serves})`}
              >
                <div className="w-4 h-4 rounded-full bg-[#0275D8] border-2 border-white shadow-md group-hover:scale-125 transition-transform flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 top-4 bg-slate-900/90 text-white text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  Transit: {hub.type}
                </span>
              </div>
            ))}

            {/* Render Destination Pins */}
            {destinations.map((dest) => {
              const isSelected = selectedPin?.id === dest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedPin(dest)}
                  style={{ left: `${dest.mapCoordinates.x}%`, top: `${dest.mapCoordinates.y}%` }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 focus:outline-hidden ${
                    isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                  }`}
                >
                  <div className="relative">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg transition-all ${
                      isSelected 
                        ? 'bg-[#D9534F] ring-4 ring-amber-400 ring-offset-1 scale-110' 
                        : 'bg-[#C84B31] ring-2 ring-white hover:bg-[#D9534F]'
                    }`}>
                      <Icon name="compass" size={16} />
                    </div>
                    
                    {/* Pin Label */}
                    <span className={`absolute left-1/2 -translate-x-1/2 top-9 px-2 py-0.5 rounded-md text-[10px] font-bold shadow-md whitespace-nowrap transition-all ${
                      isSelected 
                        ? 'bg-[#D9534F] text-white' 
                        : 'bg-white text-slate-800 border border-slate-200'
                    }`}>
                      {dest.city.split('/')[0]}
                    </span>
                  </div>
                </button>
              );
            })}

          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Showing active heritage sites across India</span>
            <span className="text-emerald-600 font-semibold">✓ Live Transport Corridors Connected</span>
          </div>

        </div>

        {/* Selected Destination Flyout Sheet */}
        <div className="bg-white rounded-3xl border border-amber-900/10 shadow-xl overflow-hidden sticky top-28">
          {selectedPin ? (
            <div>
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img 
                  src={selectedPin.image} 
                  alt={selectedPin.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <CrowdMeter 
                    level={selectedPin.crowdLevel} 
                    percent={selectedPin.crowdPercent} 
                    statusText={selectedPin.crowdStatus}
                    advice={selectedPin.crowdAdvice} 
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-[#0F4C5C] uppercase tracking-wider">
                    {selectedPin.city}, {selectedPin.state}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 font-serif mt-0.5">
                    {selectedPin.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {selectedPin.description}
                  </p>
                </div>

                {/* Transport highlights */}
                <div className="space-y-2 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                  <div className="flex items-start gap-2">
                    <Icon name="train" size={14} className="text-[#D9534F] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Nearest Rail:</span>
                      <p className="text-slate-600 text-[11px]">{selectedPin.transport.train.hub}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="plane" size={14} className="text-[#0275D8] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">Nearest Flight:</span>
                      <p className="text-slate-600 text-[11px]">{selectedPin.transport.flight.hub}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">From</span>
                    <span className="text-lg font-black text-slate-900 font-serif">
                      {formatPrice(selectedPin.basePriceINR)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onOpenRouteGuide(selectedPin)}
                      className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                    >
                      Route
                    </button>
                    <button
                      onClick={() => onSelectDestination(selectedPin)}
                      className="px-4 py-2 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20"
                    >
                      Explore Tour
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 text-sm">
              Click a pin on the map to see details.
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
