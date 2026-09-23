import React, { useState } from 'react';
import { Icon } from './Icons';

export const BookingModal = ({ item, type = 'package', currency = 'INR', onClose, onBookingSuccess }) => {
  const [step, setStep] = useState(1); // 1: Config, 2: Travelers, 3: Breakdown, 4: Payment, 5: Ticket
  const [date, setDate] = useState('2026-10-15');
  const [timeSlot, setTimeSlot] = useState('Dawn Solitude (06:00 AM)');
  const [travelers, setTravelers] = useState(2);
  const [name, setName] = useState('Arjun Sharma');
  const [email, setEmail] = useState('arjun.sharma@example.com');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [culturalNotes, setCulturalNotes] = useState('Interested in traditional music and architectural photography.');
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'upi' | 'apple'
  const [isProcessing, setIsProcessing] = useState(false);
  const [ticketRef, setTicketRef] = useState('GB-78491');

  if (!item) return null;

  // Base pricing
  const basePricePerPerson = item.priceINR || item.basePriceINR || 3400;
  const baseTotal = basePricePerPerson * travelers;
  const guideFee = Math.round(baseTotal * 0.40); // Fair wage for local guide
  const conservationFund = Math.round(baseTotal * 0.05); // Stepwell & mural fund
  const gst = Math.round(baseTotal * 0.05);
  const grandTotal = baseTotal + conservationFund + gst;

  // Currency multiplier
  const rate = currency === 'USD' ? 0.012 : currency === 'EUR' ? 0.011 : currency === 'GBP' ? 0.0095 : 1;
  const currSymbol = currency === 'INR' ? '₹' : currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£';
  const formatPrice = (amt) => `${currSymbol}${Math.round(amt * rate).toLocaleString()}`;

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      const randomRef = 'GB-' + Math.floor(10000 + Math.random() * 90000);
      setTicketRef(randomRef);
      setStep(5);
      if (onBookingSuccess) {
        onBookingSuccess({
          itemTitle: item.title || item.name,
          travelers,
          date,
          grandTotal: formatPrice(grandTotal),
          ticketRef: randomRef
        });
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-amber-900/10 animate-fade-in my-6">
        
        {/* Step Indicator */}
        <div className="bg-[#FAF9F6] border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                  step === s
                    ? 'bg-[#D9534F] text-white ring-2 ring-[#D9534F]/30'
                    : step > s
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {step > s ? <Icon name="check" size={13} /> : s}
              </div>
            ))}
            <span className="text-xs font-bold text-slate-700 ml-2 font-serif">
              {step === 1 && 'Dates & Schedule'}
              {step === 2 && 'Traveler Details'}
              {step === 3 && 'Price & Impact'}
              {step === 4 && 'Mockup Payment'}
              {step === 5 && 'Heritage Passport Issued'}
            </span>
          </div>

          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          >
            <Icon name="x" size={16} />
          </button>
        </div>

        {/* Step 1: Date & Time Slot */}
        {step === 1 && (
          <div className="p-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase text-[#0F4C5C] font-serif">Tour Booking</span>
              <h3 className="text-xl font-black text-slate-900 font-serif mt-0.5">
                {item.title || item.name}
              </h3>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <Icon name="map-pin" size={12} /> {item.location || item.city}
              </p>
            </div>

            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Select Tour Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-semibold focus:outline-hidden focus:border-[#D9534F]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Quiet Time Slot (Optimized for low crowds)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'Dawn Solitude (06:00 AM)',
                  'Golden Hour (03:30 PM)',
                  'Twilight Walk (05:45 PM)'
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTimeSlot(slot)}
                    className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                      timeSlot === slot
                        ? 'border-[#D9534F] bg-amber-50/60 text-[#D9534F] shadow-xs'
                        : 'border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Number of Travelers (Max 6 for Intimate Heritage Impact)
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                  >
                    -
                  </button>
                  <span className="px-5 py-2 text-sm font-black text-slate-900">{travelers}</span>
                  <button
                    type="button"
                    onClick={() => setTravelers(Math.min(6, travelers + 1))}
                    className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {formatPrice(basePricePerPerson)} per person
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md shadow-[#D9534F]/20 flex items-center gap-1.5"
              >
                Continue to Traveler Details <Icon name="arrow-right" size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Traveler Info */}
        {step === 2 && (
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-black text-slate-900 font-serif">
              Lead Traveler Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile (for Guide Coordination)</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:outline-hidden focus:border-[#D9534F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Special Cultural Interests or Dietary Notes</label>
              <textarea
                value={culturalNotes}
                onChange={(e) => setCulturalNotes(e.target.value)}
                rows={2}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-medium focus:outline-hidden focus:border-[#D9534F]"
              />
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-900">
              <p className="font-bold flex items-center gap-1 mb-0.5">
                <Icon name="shield-check" size={13} /> Mindful Exploration Pledge
              </p>
              <span>By proceeding, you pledge to respect local sacred customs, dress codes, and non-commercial temple guidelines.</span>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md flex items-center gap-1.5"
              >
                Review Price & Impact <Icon name="arrow-right" size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Transparent Price & Community Impact Breakdown */}
        {step === 3 && (
          <div className="p-6 space-y-4">
            <h3 className="text-lg font-black text-slate-900 font-serif">
              Transparent Price & Impact Breakdown
            </h3>

            <div className="bg-[#FAF9F6] p-4 rounded-2xl border border-amber-900/10 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-700">
                <span>Base Tour Experience ({travelers} Travelers × {formatPrice(basePricePerPerson)})</span>
                <span className="font-bold">{formatPrice(baseTotal)}</span>
              </div>
              <div className="flex justify-between text-emerald-800 font-medium">
                <span className="flex items-center gap-1">
                  <Icon name="check-circle" size={12} className="text-emerald-600" /> Direct Fair-Wage to Local Guide & Artisans (84%)
                </span>
                <span className="font-bold text-emerald-700">Included</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span className="flex items-center gap-1">
                  <Icon name="sparkles" size={12} className="text-amber-500" /> Rural Heritage Conservation Fund (5%)
                </span>
                <span className="font-bold">{formatPrice(conservationFund)}</span>
              </div>
              <div className="flex justify-between text-slate-700">
                <span>GST & Statutory Taxes (5%)</span>
                <span className="font-bold">{formatPrice(gst)}</span>
              </div>
              
              <div className="pt-2.5 border-t border-slate-200 flex justify-between items-baseline text-slate-900">
                <div>
                  <span className="text-sm font-black font-serif">Total Amount Payable</span>
                  <p className="text-[10px] text-slate-500">100% money-back cancellation up to 72 hrs</p>
                </div>
                <span className="text-xl font-black font-serif text-[#D9534F]">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200 text-xs text-emerald-900">
              <p className="font-bold text-emerald-950 flex items-center gap-1.5 mb-1">
                <Icon name="award" size={14} className="text-emerald-700" /> GoBeyond Community Impact Guarantee
              </p>
              <p className="text-[11px] text-emerald-800 leading-relaxed">
                By booking this journey, you directly prevent overtourism at crowded monuments while providing an essential livelihood to indigenous custodians in {item.location || item.city}.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(4)}
                className="px-6 py-2.5 rounded-xl bg-[#D9534F] hover:bg-[#C84B31] text-white text-xs font-bold shadow-md flex items-center gap-1.5"
              >
                Proceed to Payment <Icon name="arrow-right" size={14} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Integrated Mockup Payment */}
        {step === 4 && (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-slate-900 font-serif">
                Select Payment Method
              </h3>
              <span className="text-sm font-black text-[#D9534F] font-serif">
                {formatPrice(grandTotal)}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  paymentMethod === 'card'
                    ? 'border-[#D9534F] bg-amber-50 text-[#D9534F] shadow-xs'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon name="credit-card" size={18} />
                <span>Credit / Debit</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  paymentMethod === 'upi'
                    ? 'border-[#D9534F] bg-amber-50 text-[#D9534F] shadow-xs'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon name="sparkles" size={18} />
                <span>UPI / QR Scan</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('apple')}
                className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                  paymentMethod === 'apple'
                    ? 'border-[#D9534F] bg-amber-50 text-[#D9534F] shadow-xs'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon name="lock" size={18} />
                <span>Apple / G-Pay</span>
              </button>
            </div>

            {/* Payment Fields */}
            {paymentMethod === 'card' && (
              <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">Card Number</label>
                  <input
                    type="text"
                    defaultValue="4312 •••• •••• 9924"
                    className="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-mono font-bold"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Expiry</label>
                    <input
                      type="text"
                      defaultValue="08/29"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-mono font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">CVV</label>
                    <input
                      type="password"
                      defaultValue="•••"
                      className="w-full px-3 py-2 bg-white rounded-xl border border-slate-200 text-xs font-mono font-bold"
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div className="text-center p-4 bg-amber-50/60 rounded-2xl border border-amber-200 space-y-2">
                <div className="w-28 h-28 mx-auto bg-white p-2 rounded-xl shadow-xs border border-amber-300 flex items-center justify-center">
                  <div className="grid grid-cols-5 gap-1 w-full h-full p-1 bg-slate-900 rounded-sm">
                    {/* Mock QR dots */}
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div key={i} className={`rounded-xs ${i % 2 === 0 ? 'bg-white' : 'bg-transparent'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-800">Scan with GPay, PhonePe, or Paytm</p>
                <p className="text-[11px] text-slate-500 font-mono">gobeyond.travels@icici</p>
              </div>
            )}

            {paymentMethod === 'apple' && (
              <div className="p-5 text-center bg-slate-900 text-white rounded-2xl space-y-2">
                <Icon name="lock" size={24} className="mx-auto text-amber-400" />
                <p className="text-xs font-bold">Biometric Authentication Ready</p>
                <p className="text-[11px] text-slate-400">Double click side button to complete with Touch ID / Face ID</p>
              </div>
            )}

            <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50"
              >
                Back
              </button>
              <button
                type="button"
                disabled={isProcessing}
                onClick={handlePay}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md flex items-center gap-2 active:scale-95 transition-all"
              >
                {isProcessing ? (
                  <>
                    <span className="w-3 h-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Confirming Reservation...
                  </>
                ) : (
                  <>
                    <Icon name="shield-check" size={15} /> Confirm & Pay {formatPrice(grandTotal)}
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 5: Instant Heritage Passport & Confirmation */}
        {step === 5 && (
          <div className="p-6 space-y-5 text-center">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-md">
              <Icon name="check" size={28} />
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">
                Booking Confirmed!
              </span>
              <h3 className="text-2xl font-black font-serif text-slate-900 mt-1">
                Your Heritage Journey Awaits
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Booking Reference: <span className="font-mono font-black text-slate-900">{ticketRef}</span>
              </p>
            </div>

            {/* Digital Heritage Passport Ticket Card */}
            <div className="bg-gradient-to-br from-[#0F4C5C] to-[#0A333E] text-white p-5 rounded-3xl text-left shadow-xl relative overflow-hidden border border-amber-400/30">
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-amber-400/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex justify-between items-start border-b border-white/10 pb-3 mb-3">
                <div>
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">
                    Official Heritage Passport
                  </span>
                  <h4 className="text-base font-black font-serif text-white">
                    {item.title || item.name}
                  </h4>
                  <p className="text-xs text-slate-300">{item.location || item.city}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block font-mono">Date & Slot</span>
                  <span className="text-xs font-bold text-amber-400">{date}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div>
                  <span className="text-[10px] text-slate-400 block">Lead Traveler</span>
                  <span className="font-bold text-white">{name} ({travelers} Guests)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Time Slot</span>
                  <span className="font-bold text-white">{timeSlot}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <Icon name="shield-check" size={13} />
                  <span>Fair-Wage Guide Fee Transferred</span>
                </div>
                <span className="font-bold font-serif text-amber-300">{formatPrice(grandTotal)} Paid</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
              A copy of your Heritage Passport ticket and guide contact details have been dispatched to <strong>{email}</strong>.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
