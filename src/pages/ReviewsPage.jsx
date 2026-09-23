import React, { useState } from 'react';
import { Icon } from '../components/Icons';

export const ReviewsPage = ({ reviews, onOpenReviewModal }) => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const allTags = ['all', 'Zero Crowds', 'Authentic Local Guide', 'Sunrise Magic', 'Private Access', 'Incredible Food', 'Monastic Serenity'];

  const filtered = selectedTag === 'all' 
    ? reviews 
    : reviews.filter(r => r.tags && r.tags.includes(selectedTag));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
            Verified Explorer Stories
          </span>
          <h1 className="text-4xl font-black text-slate-900 font-serif mt-1">
            Reviews & Community Reflections
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Authentic reflections from travelers who chose silence, craftsmanship, and local connection.
          </p>
        </div>

        <button
          onClick={onOpenReviewModal}
          className="px-5 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all active:scale-95 flex items-center gap-1.5"
        >
          <Icon name="sparkles" size={14} /> Write a Review
        </button>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedTag === tag
                ? 'bg-[#0F4C5C] text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {tag === 'all' ? 'All Reviews' : tag}
          </button>
        ))}
      </div>

      {/* Reviews Feed */}
      <div className="space-y-6">
        {filtered.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-md space-y-5"
          >
            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-2xl font-bold flex items-center justify-center text-sm ${rev.avatarBg}`}>
                  {rev.avatarInitials}
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-900 font-serif">{rev.author}</h4>
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span>{rev.authorLocation}</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold flex items-center gap-1">
                      <Icon name="shield-check" size={12} /> {rev.authorBadge}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-right">
                <div className="flex text-amber-400">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Icon key={i} name="star" size={16} />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-medium">{rev.date}</span>
              </div>
            </div>

            {/* Destination Pill */}
            <span className="inline-block text-xs font-bold text-[#0F4C5C] bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Trip: {rev.destinationName}
            </span>

            {/* Review Title & Text */}
            <div className="space-y-2">
              <h5 className="text-lg font-black text-slate-900 font-serif">
                "{rev.title}"
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {rev.comment}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {rev.tags.map((t, i) => (
                <span key={i} className="text-[10px] font-semibold bg-amber-50 text-amber-900 px-2.5 py-0.5 rounded-md border border-amber-200">
                  #{t}
                </span>
              ))}
            </div>

            {/* Photos thumbnail gallery */}
            {rev.photos && rev.photos.length > 0 && (
              <div className="flex gap-3 pt-2">
                {rev.photos.map((p, i) => (
                  <img
                    key={i}
                    src={p}
                    alt="Traveler Snapshot"
                    onClick={() => setSelectedPhoto(p)}
                    className="w-20 h-20 rounded-xl object-cover border border-slate-200 cursor-pointer hover:scale-105 transition-transform"
                  />
                ))}
              </div>
            )}

            {/* Guide Response */}
            {rev.guideResponse && (
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-slate-800 space-y-1">
                <div className="flex items-center justify-between text-[#D9534F] font-bold">
                  <span className="flex items-center gap-1.5">
                    <Icon name="award" size={13} /> Response from Guide {rev.guideResponse.guideName}:
                  </span>
                  <span className="text-[10px] text-slate-500 font-normal">{rev.guideResponse.date}</span>
                </div>
                <p className="italic text-slate-700 leading-relaxed font-serif pt-1">
                  "{rev.guideResponse.message}"
                </p>
              </div>
            )}

          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
        >
          <img 
            src={selectedPhoto} 
            alt="Expanded view" 
            className="max-w-2xl max-h-[85vh] rounded-2xl object-contain shadow-2xl" 
          />
        </div>
      )}

    </div>
  );
};
