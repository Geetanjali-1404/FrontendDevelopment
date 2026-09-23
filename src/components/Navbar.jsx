import React, { useState } from 'react';
import { Icon } from './Icons';

export const Navbar = ({ 
  currentPage, 
  setCurrentPage, 
  currency, 
  setCurrency, 
  user, 
  onOpenAuth, 
  onLogout 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'map', label: 'Cultural Map' },
    { id: 'packages', label: 'Packages' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-amber-900/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-hidden"
          >
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#D9534F] via-[#C84B31] to-[#0F4C5C] flex items-center justify-center text-white shadow-md shadow-amber-900/15 group-hover:scale-105 transition-transform duration-200">
              <Icon name="compass" size={24} className="text-amber-200 animate-spin-slow" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 font-serif">
                GOBEYOND <span className="text-[#D9534F]">TRAVELS</span>
              </span>
              <span className="block text-[10px] font-semibold tracking-widest text-[#0F4C5C] uppercase">
                Untold Indian Heritage
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'text-[#D9534F] bg-amber-50/80 shadow-xs'
                      : 'text-slate-700 hover:text-[#D9534F] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action Controls */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Currency Selector */}
            <div className="relative flex items-center bg-white border border-amber-900/15 rounded-xl px-2.5 py-1.5 shadow-xs text-xs font-semibold text-slate-700">
              <span className="text-amber-600 mr-1.5">
                {currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}
              </span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-hidden cursor-pointer"
              >
                <option value="INR">INR (₹)</option>
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>

            {/* Become a Local Guide (Outline CTA) */}
            <button
              onClick={() => handleNavClick('guide-onboarding')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold border-2 border-[#D9534F] text-[#D9534F] hover:bg-[#D9534F] hover:text-white transition-all duration-200 shadow-xs active:scale-95"
            >
              Become a Local Guide
            </button>

            {/* Auth Button or User Profile */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-amber-100/70 hover:bg-amber-100 rounded-xl border border-amber-200 text-xs font-bold text-slate-800 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#0F4C5C] text-white flex items-center justify-center font-bold text-xs">
                    {user.name.charAt(0)}
                  </div>
                  <span className="max-w-[100px] truncate">{user.name}</span>
                  <Icon name="chevron-down" size={14} className="text-slate-500" />
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-fade-in">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-500">Signed in as</p>
                      <p className="text-xs font-bold text-slate-900 truncate">{user.email}</p>
                    </div>
                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        handleNavClick('reviews');
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-slate-700 hover:bg-amber-50 flex items-center gap-2"
                    >
                      <Icon name="star" size={14} className="text-amber-500" /> My Reviews
                    </button>
                    <button
                      onClick={() => {
                        setUserDropdownOpen(false);
                        onLogout();
                      }}
                      className="w-full text-left px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 flex items-center gap-2 border-t border-slate-100 mt-1"
                    >
                      <Icon name="x" size={14} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-[#D9534F] text-white hover:bg-[#C84B31] shadow-md shadow-[#D9534F]/25 transition-all duration-200 active:scale-95 flex items-center gap-1.5"
              >
                <Icon name="users" size={14} /> Sign In / Sign Up
              </button>
            )}

          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="bg-white border border-amber-900/10 rounded-lg px-2 py-1 text-xs font-bold text-slate-700">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-xs font-bold text-slate-800 focus:outline-hidden"
              >
                <option value="INR">₹ INR</option>
                <option value="USD">$ USD</option>
                <option value="EUR">€ EUR</option>
                <option value="GBP">£ GBP</option>
              </select>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-black/5 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              <Icon name={mobileMenuOpen ? 'x' : 'menu'} size={24} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-amber-900/15 px-4 pt-2 pb-6 space-y-3 shadow-2xl animate-slide-down">
          <nav className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  currentPage === link.id
                    ? 'text-[#D9534F] bg-amber-50 font-bold border border-amber-200'
                    : 'text-slate-700 hover:bg-amber-50/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-amber-900/10 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('guide-onboarding')}
              className="w-full py-2.5 rounded-xl text-xs font-bold border-2 border-[#D9534F] text-[#D9534F] text-center"
            >
              Become a Local Guide
            </button>

            {user ? (
              <div className="flex items-center justify-between p-2.5 bg-amber-100/50 rounded-xl">
                <span className="text-xs font-bold text-slate-800">Hi, {user.name}</span>
                <button
                  onClick={onLogout}
                  className="text-xs text-rose-600 font-bold hover:underline"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-bold bg-[#D9534F] text-white text-center shadow-md shadow-[#D9534F]/20"
              >
                Sign In / Sign Up
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
