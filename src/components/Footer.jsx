import React, { useState } from 'react';
import { Icon } from './Icons';

export const Footer = ({ setCurrentPage }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D9534F] to-[#0F4C5C] flex items-center justify-center text-white shadow-md">
                <Icon name="compass" size={22} className="text-amber-200" />
              </div>
              <span className="text-xl font-black tracking-tight text-white font-serif">
                GOBEYOND <span className="text-amber-400">TRAVELS</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated to de-crowding India’s sacred cultural landscape. We connect mindful travelers with certified local custodians, ensuring living crafts flourish and 84% of your booking directly supports rural heritage economies.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-amber-400 text-xs font-semibold flex items-center gap-2 border border-slate-700">
                <Icon name="shield-check" size={15} /> 100% Verified Indian Custodians
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 text-emerald-400 text-xs font-semibold flex items-center gap-2 border border-slate-700">
                <Icon name="sparkles" size={15} /> Zero-Crowd Guarantee
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              Explore India
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentPage('destinations')} className="hover:text-amber-400 transition-colors">
                  Anegundi & Hampi
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('destinations')} className="hover:text-amber-400 transition-colors">
                  Chettinad Mansions
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('destinations')} className="hover:text-amber-400 transition-colors">
                  Majuli River Satras
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('destinations')} className="hover:text-amber-400 transition-colors">
                  Dhankar Cliff Monasteries
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('destinations')} className="hover:text-amber-400 transition-colors">
                  Bishnupur Terracotta
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('destinations')} className="hover:text-amber-400 transition-colors">
                  Orchha & Chanderi
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Community */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              Community
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-amber-400 transition-colors">
                  Our Mission & Impact
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-amber-400 transition-colors">
                  Founding Team
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('guide-onboarding')} className="hover:text-amber-400 transition-colors text-amber-400 font-semibold">
                  Become a Local Guide
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('reviews')} className="hover:text-amber-400 transition-colors">
                  Traveler Reviews
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('contact')} className="hover:text-amber-400 transition-colors">
                  FAQ & Ethical Charter
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              The Off-Beat Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Curated monthly dispatches on secluded festivals, stepwell discoveries, and artisan lineages across India.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/50 border border-emerald-700 rounded-xl text-xs text-emerald-200">
                ✓ Welcome to our slow travel circle!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5"
                >
                  <Icon name="send" size={13} /> Subscribe to Dispatch
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} GOBEYOND TRAVELS Pvt. Ltd. Preserving living Indian heritage with pride.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-400 cursor-pointer">Heritage Conservation Charter</span>
            <span className="hover:text-slate-400 cursor-pointer">Fair-Wage Guide Guarantee</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy & Data Ethics</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
