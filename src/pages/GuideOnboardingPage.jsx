import React, { useState } from 'react';
import { Icon } from '../components/Icons';

export const GuideOnboardingPage = () => {
  const [step, setStep] = useState(1); // 1: Personal, 2: Expertise, 3: Verification, 4: Tour Concept, 5: Done
  
  // Form state
  const [name, setName] = useState('Govind Varma');
  const [city, setCity] = useState('Karaikudi, Tamil Nadu');
  const [languages, setLanguages] = useState('Tamil, English, Hindi');
  const [niche, setNiche] = useState('Chettiar Heritage Architecture & Antique Woodwork');
  const [experience, setExperience] = useState('8');
  const [rateINR, setRateINR] = useState(700);
  const [bio, setBio] = useState('Born in a hereditary carpentry lineage in Chettinad. I help travelers appreciate the intricate Burmese teak timber framing and maritime trade histories of our 19th-century mansions.');
  const [idFileUploaded, setIdFileUploaded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(5);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
          Join Our Cultural Custodian Network
        </span>
        <h1 className="text-4xl font-black text-slate-900 font-serif">
          Become a Certified Local Indian Guide
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          Share your ancestral knowledge with respectful, low-crowd travelers. We guarantee 84% direct payment, autonomous scheduling, and no forced commission stops.
        </p>
      </div>

      {/* Main Grid: Form on Left, Live Profile Preview Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* Form Column */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-xl space-y-6">
          
          {/* Progress Indicator */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center ${
                  step === s 
                    ? 'bg-[#D9534F] text-white ring-4 ring-[#D9534F]/20' 
                    : step > s 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-100 text-slate-400'
                }`}>
                  {step > s ? <Icon name="check" size={14} /> : s}
                </div>
                <span className="hidden sm:inline text-xs font-bold text-slate-700">
                  {s === 1 && 'Personal Info'}
                  {s === 2 && 'Cultural Niche'}
                  {s === 3 && 'ID Verification'}
                  {s === 4 && 'Story & Rate'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 font-serif">Personal & Regional Profile</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Legal Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Native Heritage City / State</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Languages Spoken (with Fluency)</label>
                <input
                  type="text"
                  value={languages}
                  onChange={(e) => setLanguages(e.target.value)}
                  placeholder="e.g. Hindi (Native), Bengali (Fluent), English (Conversational)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-[#D9534F] text-white text-xs font-bold hover:bg-[#C84B31] shadow-md flex items-center gap-1.5"
                >
                  Next: Cultural Niche <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Cultural Expertise & Niche */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 font-serif">Your Cultural Expertise & Niche</h3>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Primary Cultural Specialization</label>
                <input
                  type="text"
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Neo-Vaishnavite Satra Mask Sculpting, Bundelkhand Fresco Lore"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Years Guiding / Practicing</label>
                  <input
                    type="number"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Affiliation / Lineage</label>
                  <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]">
                    <option>Hereditary Artisan / Crafts Family</option>
                    <option>Archaeological / History Scholar</option>
                    <option>Indigenous Resident / Folklore Custodian</option>
                    <option>Temple / Monastic Trust Member</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-[#D9534F] text-white text-xs font-bold hover:bg-[#C84B31] shadow-md flex items-center gap-1.5"
                >
                  Next: ID Verification <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Verification & ID Upload */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 font-serif">Identity & Resident Verification</h3>
              <p className="text-xs text-slate-500">
                To maintain traveler trust and safety, all Indian local guides submit valid government identification (Aadhaar, Passport, or ASI License).
              </p>

              <div 
                onClick={() => setIdFileUploaded(!idFileUploaded)}
                className={`p-8 rounded-2xl border-2 border-dashed text-center cursor-pointer transition-colors ${
                  idFileUploaded 
                    ? 'border-emerald-400 bg-emerald-50/50' 
                    : 'border-slate-300 hover:border-[#D9534F] bg-slate-50'
                }`}
              >
                <Icon name={idFileUploaded ? 'check-circle' : 'shield-check'} size={36} className={`mx-auto mb-2 ${idFileUploaded ? 'text-emerald-600' : 'text-slate-400'}`} />
                <p className="text-xs font-bold text-slate-800">
                  {idFileUploaded ? 'govind_varma_aadhaar_verified.pdf' : 'Drag & Drop Government ID / License or Click to Upload'}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Supports PDF, JPG, PNG up to 10MB (Encrypted & Stored Securely)
                </p>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-6 py-2.5 rounded-xl bg-[#D9534F] text-white text-xs font-bold hover:bg-[#C84B31] shadow-md flex items-center gap-1.5"
                >
                  Next: Story & Rate <Icon name="arrow-right" size={14} />
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Story & Hourly Rate */}
          {step === 4 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-black text-slate-900 font-serif">Your Story & Proposed Fair Rate</h3>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Guide Bio & Mission</label>
                <textarea
                  rows={4}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:outline-hidden focus:border-[#D9534F]"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold text-slate-700">Desired Hourly Rate (INR)</label>
                  <span className="text-sm font-black text-[#D9534F] font-serif">₹{rateINR} / hr</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="1500"
                  step="50"
                  value={rateINR}
                  onChange={(e) => setRateINR(Number(e.target.value))}
                  className="w-full accent-[#D9534F] cursor-pointer"
                />
                <p className="text-[11px] text-slate-500 mt-1">
                  You keep 84% of this rate directly. No commission deductions for shops.
                </p>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 shadow-md flex items-center gap-1.5"
                >
                  <Icon name="check-circle" size={15} /> Submit Application
                </button>
              </div>
            </form>
          )}

          {/* Step 5: Submission Success */}
          {step === 5 && (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                <Icon name="check" size={32} />
              </div>
              <h3 className="text-2xl font-black font-serif text-slate-900">
                Application Received, {name}!
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Co-Founder <strong>Avni Kumari</strong> will contact you via phone/WhatsApp within 48 hours to schedule your cultural orientation conversation. Welcome to the GoBeyond custodian circle!
              </p>
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                Submit Another Application
              </button>
            </div>
          )}

        </div>

        {/* Live Guide Card Preview on Right */}
        <div className="bg-[#FAF9F6] rounded-3xl p-6 border-2 border-amber-300 shadow-lg sticky top-28 space-y-4">
          <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest font-serif">
              Live Profile Preview
            </span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
              Prospective Badge
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-rose-700 text-white font-black text-xl flex items-center justify-center shadow-md">
                {name ? name.charAt(0) : 'G'}
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900 font-serif">{name || 'Your Name'}</h4>
                <p className="text-xs text-[#0F4C5C] font-bold">{niche || 'Cultural Specialization'}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                  <Icon name="map-pin" size={11} /> {city || 'Your Location'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 italic bg-white p-3 rounded-xl border border-slate-100">
              "{bio || 'Your personal guiding philosophy...'}"
            </p>

            <div className="space-y-1 text-xs">
              <span className="text-slate-500 font-medium">Languages:</span>
              <p className="font-bold text-slate-800">{languages}</p>
            </div>

            <div className="pt-3 border-t border-amber-900/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-400 block font-semibold">Fair Wage Rate</span>
                <span className="text-lg font-black text-slate-900 font-serif">₹{rateINR} / hr</span>
              </div>
              <span className="text-xs font-bold text-[#D9534F] bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200">
                GoBeyond Verified
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
