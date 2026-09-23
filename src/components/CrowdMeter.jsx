import React, { useState } from 'react';
import { Icon } from './Icons';

export const CrowdMeter = ({ level, percent = 15, statusText, advice, showAdvice = false }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Determine color theme based on density
  let badgeColor = 'bg-emerald-50 text-emerald-800 border-emerald-200';
  let dotColor = 'bg-emerald-500';
  let pulseRing = 'ring-emerald-400';
  let status = statusText || 'Quiet & Peaceful';

  if (level === 'moderate' || (percent >= 30 && percent < 65)) {
    badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
    dotColor = 'bg-amber-500';
    pulseRing = 'ring-amber-400';
    status = statusText || 'Moderate (Dawn Best)';
  } else if (level === 'crowded' || percent >= 65) {
    badgeColor = 'bg-rose-50 text-rose-800 border-rose-200';
    dotColor = 'bg-rose-500';
    pulseRing = 'ring-rose-400';
    status = statusText || 'High Traffic';
  }

  return (
    <div className="relative inline-block">
      <div 
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={() => setShowTooltip(!showTooltip)}
        className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold border shadow-xs transition-all duration-200 cursor-pointer ${badgeColor}`}
      >
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColor}`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
        </span>
        <span className="font-medium tracking-tight">Crowd Meter:</span>
        <span className="font-bold">{status}</span>
        <span className="text-[10px] opacity-75 font-mono">({percent}%)</span>
        <Icon name="info" size={12} className="opacity-70" />
      </div>

      {/* Hover/Click Explainer Tooltip */}
      {showTooltip && (
        <div className="absolute z-40 left-0 bottom-full mb-2 w-64 p-3 bg-slate-900 text-white rounded-xl shadow-xl text-xs backdrop-blur-md animate-fade-in border border-slate-700">
          <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-700">
            <span className="font-bold text-amber-400 flex items-center gap-1">
              <Icon name="sparkles" size={13} /> Live Crowd Density
            </span>
            <span className="font-mono text-[10px] text-slate-400">{percent}% full</span>
          </div>
          <p className="text-slate-300 leading-relaxed mb-2">
            {advice || 'This heritage site maintains strict quiet preservation guidelines with low visitor volumes.'}
          </p>
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Updated 20 mins ago</span>
            <span className="text-emerald-400 font-semibold">✓ GoBeyond Verified</span>
          </div>
        </div>
      )}
    </div>
  );
};
