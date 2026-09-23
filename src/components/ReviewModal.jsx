import React, { useState } from 'react';
import { Icon } from './Icons';

export const ReviewModal = ({ destinations, onClose, onSubmitReview }) => {
  const [destinationId, setDestinationId] = useState(destinations[0]?.id || 'hampi-anegundi');
  const [author, setAuthor] = useState('');
  const [authorLocation, setAuthorLocation] = useState('Mumbai, Maharashtra');
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [tagInput, setTagInput] = useState('Mind-Blowing History, Zero Crowds');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dest = destinations.find(d => d.id === destinationId);
    const newRev = {
      id: 'rev-' + Date.now(),
      author: author || 'Mindful Traveler',
      authorLocation: authorLocation || 'India',
      authorBadge: 'Verified Heritage Explorer',
      avatarInitials: (author || 'MT').slice(0, 2).toUpperCase(),
      avatarBg: 'bg-amber-100 text-amber-800',
      destinationId,
      destinationName: dest ? dest.name : 'Indian Heritage Gem',
      rating,
      date: 'Just now',
      title: title || 'An unforgettable off-beat journey',
      comment: comment || 'Exploring with a resident guide made all the difference.',
      tags: tagInput.split(',').map(t => t.trim()).filter(Boolean),
      photos: [
        dest?.image || 'https://images.unsplash.com/photo-1600100397608-f010f443b715?auto=format&fit=crop&w=600&q=80'
      ],
      guideResponse: null
    };
    onSubmitReview(newRev);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-amber-900/10 animate-fade-in my-6">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#F0AD4E] to-[#E59819] text-slate-950 relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/10 hover:bg-black/20 text-slate-950 flex items-center justify-center transition-colors"
          >
            <Icon name="x" size={16} />
          </button>
          
          <span className="text-xs font-bold uppercase tracking-wider text-slate-800">Community Voices</span>
          <h3 className="text-2xl font-black font-serif mt-0.5">Share Your Heritage Experience</h3>
          <p className="text-xs text-slate-800/80 mt-1">Help fellow mindful travelers discover authentic local guides</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Destination Visited</label>
            <select
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
            >
              {destinations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.state})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
              <input
                type="text"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="e.g. Sunita Rao"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Your City / State</label>
              <input
                type="text"
                value={authorLocation}
                onChange={(e) => setAuthorLocation(e.target.value)}
                placeholder="e.g. Pune, Maharashtra"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
              />
            </div>
          </div>

          {/* Star Rating */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Your Rating</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-1 transition-transform hover:scale-110 ${
                    star <= rating ? 'text-amber-400' : 'text-slate-200'
                  }`}
                >
                  <Icon name="star" size={24} />
                </button>
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">{rating} out of 5 Stars</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Review Headline</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Peaceful dawn coracle ride with Rameshwar"
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Your Experience & Story</label>
            <textarea
              required
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Describe the atmosphere, lack of crowds, artisan meetings, or local guide insights..."
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-hidden focus:border-[#D9534F]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Highlight Tags (Comma-separated)</label>
            <input
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Zero Crowds, Temple Chants, Fair-Wage"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
            />
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all flex items-center gap-1.5"
            >
              <Icon name="send" size={14} /> Submit Verified Review
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
