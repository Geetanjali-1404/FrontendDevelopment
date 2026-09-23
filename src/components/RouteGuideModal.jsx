import React, { useState } from 'react';
import { Icon } from './Icons';

export const RouteGuideModal = ({ destination, onClose }) => {
  const [activeMode, setActiveMode] = useState('train'); // 'flight' | 'train' | 'road'

  if (!destination) return null;
  const transport = destination.transport;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-amber-900/10 animate-fade-in my-8">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#0F4C5C] to-[#0275D8] text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
          >
            <Icon name="x" size={18} />
          </button>
          
          <span className="text-amber-300 text-xs font-bold tracking-wider uppercase">
            Transport & Route Guide
          </span>
          <h3 className="text-2xl font-black font-serif text-white mt-1">
            How to Reach {destination.name}
          </h3>
          <p className="text-slate-200 text-xs mt-1">
            Region: {destination.city}, {destination.state}
          </p>
        </div>

        {/* Transport Mode Switcher */}
        <div className="grid grid-cols-3 border-b border-slate-100 bg-[#FAF9F6] p-2 gap-2 text-xs font-bold">
          <button
            onClick={() => setActiveMode('flight')}
            className={`py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
              activeMode === 'flight'
                ? 'bg-white shadow-xs text-[#0275D8] border border-blue-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Icon name="plane" size={16} /> By Flight
          </button>
          <button
            onClick={() => setActiveMode('train')}
            className={`py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
              activeMode === 'train'
                ? 'bg-white shadow-xs text-[#D9534F] border border-red-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Icon name="train" size={16} /> Indian Railways
          </button>
          <button
            onClick={() => setActiveMode('road')}
            className={`py-3 rounded-xl flex items-center justify-center gap-2 transition-all ${
              activeMode === 'road'
                ? 'bg-white shadow-xs text-[#F0AD4E] border border-amber-100'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Icon name="car" size={16} /> By Road / Highway
          </button>
        </div>

        {/* Mode Content */}
        <div className="p-6 space-y-4">
          {activeMode === 'flight' && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Icon name="plane" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Nearest Airport Hub</h4>
                  <p className="text-sm font-semibold text-blue-900 mt-0.5">{transport.flight.hub}</p>
                  <p className="text-xs text-slate-600 mt-1 flex items-center gap-1 font-medium">
                    <Icon name="clock" size={12} /> Distance & Drive Time: {transport.flight.distance}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Icon name="sparkles" size={13} className="text-amber-500" /> Insider Flight & Shuttle Advice:
                </p>
                <p>{transport.flight.tip}</p>
              </div>
            </div>
          )}

          {activeMode === 'train' && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-rose-50/60 border border-rose-100">
                <div className="w-10 h-10 rounded-xl bg-[#D9534F] text-white flex items-center justify-center shrink-0">
                  <Icon name="train" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Rail Junction & Express Lines</h4>
                  <p className="text-sm font-semibold text-rose-900 mt-0.5">{transport.train.hub}</p>
                  <p className="text-xs text-slate-600 mt-1 flex items-center gap-1 font-medium">
                    <Icon name="clock" size={12} /> Distance to Site: {transport.train.distance}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Icon name="sparkles" size={13} className="text-amber-500" /> Indian Railways Transit Tip:
                </p>
                <p>{transport.train.tip}</p>
              </div>
            </div>
          )}

          {activeMode === 'road' && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                <div className="w-10 h-10 rounded-xl bg-[#F0AD4E] text-slate-900 flex items-center justify-center shrink-0">
                  <Icon name="car" size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">Highway Route & Scenic Corridors</h4>
                  <p className="text-sm font-semibold text-amber-900 mt-0.5">{transport.road.hub}</p>
                  <p className="text-xs text-slate-600 mt-1 flex items-center gap-1 font-medium">
                    <Icon name="clock" size={12} /> Estimated Driving Duration: {transport.road.distance}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <Icon name="sparkles" size={13} className="text-amber-500" /> Roadway Recommendation:
                </p>
                <p>{transport.road.tip}</p>
              </div>
            </div>
          )}

          {/* Guide Pick-up Note */}
          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-2 text-xs text-emerald-800">
            <Icon name="check-circle" size={16} className="text-emerald-600 shrink-0" />
            <span>
              <strong>Local Guide Coordination Included:</strong> Your verified host will coordinate direct station or airport pickup through pre-vetted local taxi cooperatives.
            </span>
          </div>
        </div>

        {/* Close Button */}
        <div className="p-4 bg-[#FAF9F6] border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
