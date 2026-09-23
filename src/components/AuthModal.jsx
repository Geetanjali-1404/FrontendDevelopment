import React, { useState } from 'react';
import { Icon } from './Icons';

export const AuthModal = ({ onClose, onLoginSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = name || (email ? email.split('@')[0] : 'Traveler');
    onLoginSuccess({
      name: displayName,
      email: email || 'traveler@gobeyond.in',
      role: 'traveler'
    });
    onClose();
  };

  const handleDemoLogin = (role) => {
    if (role === 'guide') {
      onLoginSuccess({
        name: 'Rameshwar Rao',
        email: 'rameshwar.guide@gobeyond.in',
        role: 'guide'
      });
    } else {
      onLoginSuccess({
        name: 'Anita Roy',
        email: 'anita.roy@example.com',
        role: 'traveler'
      });
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-amber-900/10 animate-fade-in my-6">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-[#D9534F] to-[#C84B31] text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors"
          >
            <Icon name="x" size={16} />
          </button>
          
          <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-2">
            <Icon name="compass" size={22} className="text-amber-200" />
          </div>
          <h3 className="text-2xl font-black font-serif text-white">
            {isSignUp ? 'Join GoBeyond Travels' : 'Welcome Back'}
          </h3>
          <p className="text-xs text-amber-100 mt-1">
            {isSignUp 
              ? 'Discover India’s secluded heritage with verified local guides' 
              : 'Sign in to access your booked journeys and saved destinations'}
          </p>
        </div>

        {/* Form Body */}
        <div className="p-6 space-y-4">
          
          {/* Social Logins */}
          <div className="space-y-2">
            <button
              onClick={() => handleDemoLogin('traveler')}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              Continue with Google
            </button>
            <button
              onClick={() => handleDemoLogin('traveler')}
              className="w-full py-2.5 px-4 rounded-xl bg-black text-white text-xs font-bold hover:bg-slate-900 flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.93 2.73 1.01.08 2.02-.48 2.64-1.23z" />
              </svg>
              Continue with Apple
            </button>
          </div>

          <div className="relative flex items-center justify-center my-2">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] text-slate-400 uppercase font-bold absolute">
              or email
            </span>
          </div>

          {/* Email Password Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {isSignUp && (
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Radhika Sen"
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 transition-all"
            >
              {isSignUp ? 'Create Explorer Account' : 'Sign In'}
            </button>
          </form>

          {/* Quick Demo Login Pill for Evaluation */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center">
            <p className="text-[11px] font-bold text-amber-900 mb-2">⚡ Quick One-Click Demo Access:</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => handleDemoLogin('traveler')}
                className="flex-1 py-1.5 px-2 rounded-lg bg-white border border-amber-300 text-[11px] font-bold text-slate-800 hover:bg-amber-100"
              >
                Demo Traveler
              </button>
              <button
                type="button"
                onClick={() => handleDemoLogin('guide')}
                className="flex-1 py-1.5 px-2 rounded-lg bg-[#0F4C5C] text-[11px] font-bold text-white hover:bg-[#0A333E]"
              >
                Demo Local Guide
              </button>
            </div>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-xs text-slate-600 hover:text-[#D9534F] font-bold"
            >
              {isSignUp 
                ? 'Already have an account? Sign In' 
                : 'New to GoBeyond? Create an Account'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
