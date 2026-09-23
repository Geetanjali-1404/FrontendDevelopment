import React, { useState } from 'react';
import { Icon } from '../components/Icons';

export const ContactPage = ({ faqs }) => {
  const [openFaq, setOpenFaq] = useState(faqs[0]?.id || null);
  const [faqSearch, setFaqSearch] = useState('');
  const [faqCategory, setFaqCategory] = useState('all');
  const [submitted, setSubmitted] = useState(false);

  // Filter FAQs
  const categories = ['all', ...Array.from(new Set(faqs.map(f => f.category)))];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCat = faqCategory === 'all' || f.category === faqCategory;
    const matchesQuery = !faqSearch || 
      f.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      f.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
          Connect With Us
        </span>
        <h1 className="text-4xl font-black text-slate-900 font-serif">
          Traveler Concierge & Ground Coordination
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Need personalized route advice, Indian rail booking assistance, or custom heritage itineraries? Our team is at your service.
        </p>
      </div>

      {/* Contact Grid: Form on Left, Direct Lines & WhatsApp on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-lg">
          {submitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Icon name="check" size={28} />
              </div>
              <h3 className="text-2xl font-black font-serif text-slate-900">Message Dispatched!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Our cultural travel concierge responds within 4 working hours. For urgent travel assistance, please ping our 24/7 WhatsApp concierge.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-black text-slate-900 font-serif">Send an Inquiry</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Rathore"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Topic / Region of Interest</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]">
                    <option>Custom Multi-Day Heritage Expedition</option>
                    <option>Train / Station Logistics Assistance</option>
                    <option>Artisan & Loom Private Masterclass</option>
                    <option>Corporate / Mindful Group Journey</option>
                    <option>General Inquiries & Feedback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">How Can We Assist Your Journey?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Share your travel window, group size, physical preferences, or specific monuments you wish to explore..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-hidden focus:border-[#D9534F]"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 flex items-center gap-1.5"
                >
                  <Icon name="send" size={14} /> Dispatch Message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct Channels */}
        <div className="space-y-4">
          
          {/* WhatsApp Direct Concierge */}
          <div className="p-6 rounded-3xl bg-emerald-950 text-white border border-emerald-800 shadow-lg space-y-3">
            <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest font-mono">
              ⚡ Instant Response (&lt; 15 mins)
            </span>
            <h4 className="text-lg font-black font-serif text-white">24/7 Traveler WhatsApp Concierge</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Connect directly with our ground operations desk in Bangalore and New Delhi.
            </p>
            <div className="p-3 bg-emerald-900/80 rounded-xl border border-emerald-700 font-mono text-xs font-bold text-emerald-200">
              +91 98450 78219
            </div>
          </div>

          {/* Emergency & Support Contacts */}
          <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-amber-900/10 shadow-md space-y-4 text-xs">
            <h4 className="text-sm font-black text-slate-900 font-serif">Direct Helpdesks</h4>
            
            <div className="flex items-start gap-3">
              <Icon name="mail" size={16} className="text-[#D9534F] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800">Traveler Support:</span>
                <p className="text-slate-600">concierge@gobeyondtravels.in</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="shield-check" size={16} className="text-teal-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800">Guide Accreditation Desk:</span>
                <p className="text-slate-600">guides@gobeyondtravels.in</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="map-pin" size={16} className="text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-800">Registered Office:</span>
                <p className="text-slate-600">Heritage Guild House, Indiranagar, Bengaluru 560038, India</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Searchable FAQ Accordion */}
      <div className="space-y-6 pt-10 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-[#0F4C5C] uppercase tracking-widest font-serif">
            Common Inquiries
          </span>
          <h3 className="text-3xl font-black text-slate-900 font-serif">
            Frequently Asked Questions
          </h3>
        </div>

        {/* Search & Category Filter */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <Icon name="search" size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={faqSearch}
              onChange={(e) => setFaqSearch(e.target.value)}
              placeholder="Search questions (e.g. dress code, cancellation)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold focus:outline-hidden"
            />
          </div>

          <select
            value={faqCategory}
            onChange={(e) => setFaqCategory(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-800 focus:outline-hidden"
          >
            {categories.map(c => (
              <option key={c} value={c}>
                {c === 'all' ? 'All Question Categories' : c}
              </option>
            ))}
          </select>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-amber-900/10 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-sm font-black text-slate-900 font-serif">
                    {faq.question}
                  </span>
                  <Icon 
                    name={isOpen ? 'chevron-up' : 'chevron-down'} 
                    size={18} 
                    className="text-slate-400 shrink-0" 
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
