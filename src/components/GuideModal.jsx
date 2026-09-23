import React, { useState } from 'react';
import { Icon } from './Icons';

export const GuideModal = ({ guide, onClose, onBookGuide }) => {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [activeTab, setActiveTab] = useState('about'); // 'about' | 'video' | 'specialties'

  if (!guide) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-amber-900/10 animate-fade-in my-8">
        
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-[#0F4C5C] to-[#136F63] p-6 text-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
          >
            <Icon name="x" size={18} />
          </button>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative">
              <img 
                src={guide.avatar} 
                alt={guide.name} 
                className="w-24 h-24 rounded-2xl object-cover border-3 border-amber-400 shadow-md"
              />
              <span className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                VERIFIED
              </span>
            </div>

            <div className="text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-2xl font-black font-serif text-white">{guide.name}</h3>
                <span className="flex items-center gap-1 bg-amber-400/20 text-amber-300 text-xs px-2 py-0.5 rounded-full font-bold">
                  <Icon name="star" size={13} /> {guide.rating} ({guide.reviewsCount} reviews)
                </span>
              </div>
              <p className="text-amber-200 text-xs font-semibold">{guide.role}</p>
              <p className="text-slate-300 text-xs flex items-center justify-center sm:justify-start gap-1 mt-1">
                <Icon name="map-pin" size={12} /> {guide.location}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/10">
            {guide.badges.map((b, i) => (
              <span key={i} className="text-[11px] font-medium bg-white/10 text-white px-2.5 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
                <Icon name="shield-check" size={12} className="text-amber-300" /> {b}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-100 bg-[#FAF9F6] px-6 text-xs font-bold text-slate-600">
          <button
            onClick={() => setActiveTab('about')}
            className={`py-3 px-4 border-b-2 transition-colors ${activeTab === 'about' ? 'border-[#D9534F] text-[#D9534F]' : 'border-transparent hover:text-slate-900'}`}
          >
            Biography & Story
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`py-3 px-4 border-b-2 transition-colors flex items-center gap-1.5 ${activeTab === 'video' ? 'border-[#D9534F] text-[#D9534F]' : 'border-transparent hover:text-slate-900'}`}
          >
            <Icon name="video" size={14} className="text-amber-500" /> Video Intro Preview
          </button>
          <button
            onClick={() => setActiveTab('specialties')}
            className={`py-3 px-4 border-b-2 transition-colors ${activeTab === 'specialties' ? 'border-[#D9534F] text-[#D9534F]' : 'border-transparent hover:text-slate-900'}`}
          >
            Niche Specialties
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 font-serif">
                  About {guide.name}
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {guide.bio}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                  <p className="text-[11px] text-slate-500 font-medium">Experience</p>
                  <p className="text-base font-black text-slate-900">{guide.experienceYears}+ Years</p>
                </div>
                <div className="p-3 bg-teal-50/50 rounded-xl border border-teal-100">
                  <p className="text-[11px] text-slate-500 font-medium">Tours Guided</p>
                  <p className="text-base font-black text-slate-900">{guide.toursLed}+ Journeys</p>
                </div>
                <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 col-span-2 sm:col-span-1">
                  <p className="text-[11px] text-slate-500 font-medium">Languages</p>
                  <p className="text-xs font-bold text-slate-900 truncate">{guide.languages.join(', ')}</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'video' && (
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video shadow-inner flex items-center justify-center group">
                {!isPlayingVideo ? (
                  <>
                    <img 
                      src={guide.videoIntro.thumbnail} 
                      alt={guide.videoIntro.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
                      <div className="flex justify-between items-center text-white text-xs font-semibold">
                        <span className="bg-[#D9534F] px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                          Authentic Local Voice
                        </span>
                        <span className="bg-black/50 px-2 py-0.5 rounded-md font-mono text-[11px]">
                          {guide.videoIntro.duration}
                        </span>
                      </div>

                      <button
                        onClick={() => setIsPlayingVideo(true)}
                        className="self-center w-14 h-14 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-110 active:scale-95"
                      >
                        <Icon name="play" size={24} className="ml-1" />
                      </button>

                      <p className="text-white text-xs font-serif font-bold italic">
                        "{guide.videoIntro.quote}"
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full p-6 flex flex-col justify-between bg-slate-900 text-white">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></span>
                        <span className="text-xs font-bold">{guide.videoIntro.title}</span>
                      </div>
                      <button 
                        onClick={() => setIsPlayingVideo(false)}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Reset Video
                      </button>
                    </div>

                    <div className="py-4">
                      <p className="text-xs text-amber-400 font-bold mb-1">Live Audio & Spoken Transcript:</p>
                      <p className="text-sm italic text-slate-200 leading-relaxed font-serif bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                        "{guide.videoIntro.transcript}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                      <span>Recorded on location with {guide.name}</span>
                      <span className="text-emerald-400 font-semibold">✓ Verified Local Resident</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'specialties' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-serif">
                Cultural Heritage Specialties
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {guide.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-amber-50/60 border border-amber-100 text-xs font-bold text-slate-800">
                    <div className="w-6 h-6 rounded-lg bg-amber-200 text-amber-900 flex items-center justify-center shrink-0">
                      <Icon name="check" size={13} />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer CTA */}
        <div className="p-6 bg-[#FAF9F6] border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-xs text-slate-500">Fair-wage rate:</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black text-slate-900 font-serif">₹{guide.hourlyRateINR}</span>
              <span className="text-xs text-slate-500 font-medium">/ hour per group</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookGuide(guide);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Icon name="calendar" size={14} /> Book Private Tour with {guide.name.split(' ')[0]}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
