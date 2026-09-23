import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GuideModal } from './components/GuideModal';
import { RouteGuideModal } from './components/RouteGuideModal';
import { BookingModal } from './components/BookingModal';
import { AuthModal } from './components/AuthModal';
import { ReviewModal } from './components/ReviewModal';

import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { CulturalMapPage } from './pages/CulturalMapPage';
import { PackagesPage } from './pages/PackagesPage';
import { GuideOnboardingPage } from './pages/GuideOnboardingPage';
import { AboutPage } from './pages/AboutPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { ContactPage } from './pages/ContactPage';

import { destinationsData } from './data/destinations';
import { packagesData } from './data/packages';
import { guidesData } from './data/guides';
import { reviewsData } from './data/reviews';
import { teamData } from './data/team';
import { transportHubsData } from './data/transportHubs';
import { faqsData } from './data/faqs';

export const App = () => {
  // Navigation
  const [currentPage, setCurrentPage] = useState('home');
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD' | 'EUR' | 'GBP'
  
  // Auth state (null or { name, email, role })
  const [user, setUser] = useState(null);

  // Dynamic datasets
  const [destinations] = useState(destinationsData);
  const [packages] = useState(packagesData);
  const [guides] = useState(guidesData);
  const [reviews, setReviews] = useState(reviewsData);
  const [team] = useState(teamData);
  const [transportHubs] = useState(transportHubsData);
  const [faqs] = useState(faqsData);

  // Modals state
  const [activeGuide, setActiveGuide] = useState(null);
  const [activeRouteDest, setActiveRouteDest] = useState(null);
  const [activeBookingItem, setActiveBookingItem] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  // Notification Toast
  const [toast, setToast] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 4000);
  };

  const handleBookingSuccess = (details) => {
    showToast(`✓ Booking Confirmed! Reference: ${details.ticketRef}`);
  };

  const handleReviewSubmit = (newRev) => {
    setReviews([newRev, ...reviews]);
    showToast('✓ Your verified heritage review has been published!');
  };

  const handleOpenBooking = (item, type = 'package') => {
    setActiveBookingItem({ item, type });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#D9534F] selection:text-white">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-amber-400/40 text-xs font-bold flex items-center gap-2 animate-slide-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{toast}</span>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currency={currency}
        setCurrency={setCurrency}
        user={user}
        onOpenAuth={() => setAuthModalOpen(true)}
        onLogout={() => {
          setUser(null);
          showToast('Signed out successfully.');
        }}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            destinations={destinations}
            packages={packages}
            guides={guides}
            reviews={reviews}
            currency={currency}
            setCurrentPage={setCurrentPage}
            onSelectDestination={(dest) => handleOpenBooking(dest, 'destination')}
            onSelectPackage={(pkg) => handleOpenBooking(pkg, 'package')}
            onSelectGuide={(g) => setActiveGuide(g)}
            onOpenRouteGuide={(dest) => setActiveRouteDest(dest)}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            destinations={destinations}
            currency={currency}
            onSelectDestination={(dest) => handleOpenBooking(dest, 'destination')}
            onOpenRouteGuide={(dest) => setActiveRouteDest(dest)}
          />
        )}

        {currentPage === 'map' && (
          <CulturalMapPage
            destinations={destinations}
            transportHubs={transportHubs}
            currency={currency}
            onSelectDestination={(dest) => handleOpenBooking(dest, 'destination')}
            onOpenRouteGuide={(dest) => setActiveRouteDest(dest)}
          />
        )}

        {currentPage === 'packages' && (
          <PackagesPage
            packages={packages}
            currency={currency}
            onSelectPackage={(pkg) => handleOpenBooking(pkg, 'package')}
          />
        )}

        {currentPage === 'guide-onboarding' && (
          <GuideOnboardingPage />
        )}

        {currentPage === 'about' && (
          <AboutPage team={team} />
        )}

        {currentPage === 'reviews' && (
          <ReviewsPage
            reviews={reviews}
            onOpenReviewModal={() => setReviewModalOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage faqs={faqs} />
        )}
      </main>

      {/* Global Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Interactive Modals */}
      {activeGuide && (
        <GuideModal
          guide={activeGuide}
          onClose={() => setActiveGuide(null)}
          onBookGuide={(g) => {
            setActiveGuide(null);
            handleOpenBooking({
              title: `Private Heritage Day with ${g.name}`,
              location: g.location,
              priceINR: g.hourlyRateINR * 5,
              image: g.videoIntro.thumbnail
            }, 'guide');
          }}
        />
      )}

      {activeRouteDest && (
        <RouteGuideModal
          destination={activeRouteDest}
          onClose={() => setActiveRouteDest(null)}
        />
      )}

      {activeBookingItem && (
        <BookingModal
          item={activeBookingItem.item}
          type={activeBookingItem.type}
          currency={currency}
          onClose={() => setActiveBookingItem(null)}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      {authModalOpen && (
        <AuthModal
          onClose={() => setAuthModalOpen(false)}
          onLoginSuccess={(userData) => {
            setUser(userData);
            showToast(`Welcome, ${userData.name}!`);
          }}
        />
      )}

      {reviewModalOpen && (
        <ReviewModal
          destinations={destinations}
          onClose={() => setReviewModalOpen(false)}
          onSubmitReview={handleReviewSubmit}
        />
      )}

    </div>
  );
};
