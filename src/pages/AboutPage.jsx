import React from 'react';
import { Icon } from '../components/Icons';

export const AboutPage = ({ team }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
      
      {/* 1. Hero Story Section */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-black text-[#D9534F] uppercase tracking-widest font-serif">
          Our Origin & Heritage Ethos
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif">
          De-Crowding India's Sacred Cultural Heart
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Founded by cultural ethnographers, rural community organizers, and mindful travelers, GoBeyond Travels exists to rescue India’s living arts from commercial overtourism and reconnect visitors with the true keepers of our heritage.
        </p>
      </section>

      {/* 2. Three Pillar Mission Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white border border-amber-900/10 shadow-md space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#D9534F]/10 text-[#D9534F] flex items-center justify-center">
            <Icon name="compass" size={24} />
          </div>
          <h3 className="text-xl font-black text-slate-900 font-serif">Beyond Tourist Traps</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We bypass ticket queues, commercial souvenir stops, and loud selfie corridors to guide you into quiet courtyards, boulder shrines, and riverside hermitages where ancient rituals still breathe naturally.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-amber-900/10 shadow-md space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#F0AD4E]/15 text-[#D97706] flex items-center justify-center">
            <Icon name="award" size={24} />
          </div>
          <h3 className="text-xl font-black text-slate-900 font-serif">84% Direct Economic Impact</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            By eliminating corporate intermediaries and third-party tour resellers, 84% of your payment stays directly in the hands of resident historians, master weavers, and rural homestay hosts.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-amber-900/10 shadow-md space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#0F4C5C]/10 text-[#0F4C5C] flex items-center justify-center">
            <Icon name="shield-check" size={24} />
          </div>
          <h3 className="text-xl font-black text-slate-900 font-serif">Heritage Preservation Fund</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            5% of every booking directly finances our community conservation initiatives: restoring forgotten stepwells (baoris), documenting oral folklore, and sponsoring apprentice weaver workshops.
          </p>
        </div>
      </section>

      {/* 3. FOUNDING LEADERSHIP & TEAM (Geetanjali, Avni Kumari, Harsh Chaudhary with Stylized Name Avatars) */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-[#0F4C5C] uppercase tracking-widest font-serif">
            The Custodians
          </span>
          <h2 className="text-3xl font-black text-slate-900 font-serif">
            Founding Leadership & Heritage Visionaries
          </h2>
          <p className="text-xs text-slate-600">
            Meet the minds dedicated to protecting India's cultural sanctity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-3xl p-8 border border-amber-900/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Stylized Avatar Badge with Name Initials & Cultural Border */}
                <div className="relative mx-auto w-24 h-24 rounded-3xl bg-gradient-to-br p-1 shadow-md flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${member.avatarGradient} flex items-center justify-center text-white shadow-inner relative overflow-hidden border-2 ${member.borderBadge}`}>
                    {/* Background motif geometry */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                      <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none" strokeWidth="2">
                        <circle cx="50" cy="50" r="35" />
                        <polygon points="50,15 85,85 15,85" />
                      </svg>
                    </div>
                    {/* Initials Text */}
                    <span className="text-3xl font-black font-serif tracking-tight drop-shadow-md">
                      {member.initials}
                    </span>
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black text-slate-900 font-serif">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#D9534F] leading-tight">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed text-center">
                  {member.bio}
                </p>

                {/* Focus areas */}
                <div className="pt-3 border-t border-slate-100 text-xs space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide block">
                    Core Focus:
                  </span>
                  {member.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2 text-slate-700 text-[11px]">
                      <Icon name="sparkles" size={11} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote pill */}
              <div className="p-3 bg-amber-50/70 rounded-2xl border border-amber-100 text-[11px] text-amber-950 italic font-serif">
                "{member.quote}"
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ethical Tourism Pledge */}
      <section className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-widest font-serif">
            Our Moral Charter
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-serif">
            The GoBeyond 5-Point Ethical Pledge
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="font-bold text-amber-400 block text-sm">1. Sacred Respect</span>
            <p>We strictly adhere to sanctum rituals, silence requests, and modest temple attire.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="font-bold text-amber-400 block text-sm">2. Fair-Wage Dignity</span>
            <p>Every resident custodian is paid professional, above-market compensation directly.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="font-bold text-amber-400 block text-sm">3. Zero Forced Shopping</span>
            <p>No commissions or tourist emporiums. Travelers interact directly with original craft guilds.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="font-bold text-amber-400 block text-sm">4. Fragile Ecology Guard</span>
            <p>Strict zero-single-use-plastic policy across all Spiti, Majuli, and river expeditions.</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
            <span className="font-bold text-amber-400 block text-sm">5. Micro-Group Cap</span>
            <p>Never more than 6 guests per tour to preserve atmospheric peace and community privacy.</p>
          </div>
        </div>
      </section>

    </div>
  );
};
