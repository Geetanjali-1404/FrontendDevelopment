/**
 * GOBEYOND TRAVELS - Master React Application
 * Responsive, Multi-page Experience with Crowd Meter, Route Guides,
 * Cultural Map, Booking Checkout, Guide Onboarding, Reviews, and Auth.
 */

const { useState, useEffect, useMemo, useRef } = React;

// --- SVG Icons (Lucide-style crisp vectors) ---
const Icons = {
  Compass: (props) => React.createElement("svg", { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" })
  ),
  MapPin: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }),
    React.createElement("circle", { cx: "12", cy: "10", r: "3" })
  ),
  Calendar: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    React.createElement("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    React.createElement("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    React.createElement("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ),
  Users: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
    React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ),
  Search: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: "11", cy: "11", r: "8" }),
    React.createElement("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ),
  Shield: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
  ),
  Award: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: "12", cy: "8", r: "7" }),
    React.createElement("polyline", { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" })
  ),
  Star: (props) => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor", stroke: "none", ...props },
    React.createElement("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  ),
  Clock: (props) => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("polyline", { points: "12 6 12 12 16 14" })
  ),
  ArrowRight: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
    React.createElement("polyline", { points: "12 5 19 12 12 19" })
  ),
  Check: (props) => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("polyline", { points: "20 6 9 17 4 12" })
  ),
  Plane: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3.5c-.5-.5-2.5 0-4 1.5L13.5 8.5 5.3 6.7c-.7-.2-1.4.1-1.8.7l-.5.8c-.3.5-.2 1.1.2 1.5L7 13.5 4.5 16 2.5 15.5c-.5-.1-1 .1-1.3.5l-.2.3c-.3.4-.2.9.2 1.2l3 2.5 2.5 3c.3.4.8.5 1.2.2l.3-.2c.4-.3.6-.8.5-1.3L8.2 19.2l2.5-2.5 3.8 3.8c.4.4 1 .5 1.5.2l.8-.5c.6-.4.9-1.1.7-1.8z" })
  ),
  Train: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("rect", { x: "4", y: "3", width: "16", height: "16", rx: "2" }),
    React.createElement("path", { d: "M4 11h16" }),
    React.createElement("path", { d: "M12 3v8" }),
    React.createElement("path", { d: "m8 19-3 3" }),
    React.createElement("path", { d: "m16 19 3 3" })
  ),
  Car: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }),
    React.createElement("circle", { cx: "7", cy: "17", r: "2" }),
    React.createElement("path", { d: "M9 17h6" }),
    React.createElement("circle", { cx: "17", cy: "17", r: "2" })
  ),
  Menu: (props) => React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
    React.createElement("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
    React.createElement("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
  ),
  X: (props) => React.createElement("svg", { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    React.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  User: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }),
    React.createElement("circle", { cx: "12", cy: "7", r: "4" })
  ),
  Play: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor", stroke: "none", ...props },
    React.createElement("polygon", { points: "5 3 19 12 5 21 5 3" })
  ),
  Info: (props) => React.createElement("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("line", { x1: "12", y1: "16", x2: "12", y2: "12" }),
    React.createElement("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })
  ),
  Sparkles: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("path", { d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" })
  ),
  ChevronDown: (props) => React.createElement("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    React.createElement("polyline", { points: "6 9 12 15 18 9" })
  )
};

// --- Toast Notification Component ---
function ToastNotification({ toast, onClose }) {
  if (!toast) return null;
  return React.createElement("div", {
    className: "fixed bottom-6 right-6 z-[1100] max-w-md bg-stone-900 text-white px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 border-l-4 border-[#D9534F] animate-slideIn"
  }, [
    React.createElement("span", { key: "icon", className: "text-xl" }, toast.type === "success" ? "✨" : "ℹ️"),
    React.createElement("div", { key: "text", className: "flex-1 text-sm font-medium" }, toast.message),
    React.createElement("button", {
      key: "close",
      onClick: onClose,
      className: "text-stone-400 hover:text-white text-base"
    }, "✕")
  ]);
}

// --- Crowd Meter Indicator Component ---
function CrowdMeter({ level = "peaceful", percent = 15, compact = false }) {
  const configs = {
    peaceful: {
      label: "Quiet & Peaceful",
      dotClass: "pulse-dot-peaceful",
      className: "crowd-peaceful"
    },
    moderate: {
      label: "Moderate Activity",
      dotClass: "pulse-dot-moderate",
      className: "crowd-moderate"
    },
    crowded: {
      label: "High Congestion",
      dotClass: "pulse-dot-congested",
      className: "crowd-congested"
    }
  };
  const c = configs[level] || configs.peaceful;

  return React.createElement("div", {
    className: `crowd-meter-badge ${c.className}`,
    title: `${c.label} (${percent}% footfall)`
  }, [
    React.createElement("span", { key: "dot", className: `pulse-dot ${c.dotClass}` }),
    React.createElement("span", { key: "label" }, c.label),
    !compact && React.createElement("span", { key: "divider", className: "opacity-40" }, "•"),
    !compact && React.createElement("span", { key: "pct", className: "font-mono font-bold text-[11px]" }, `${percent}%`)
  ]);
}

// --- Navigation Header Component ---
function Navbar({ activePage, setActivePage, onOpenAuth, onOpenGuideRegister, currentUser, onLogout, savedWishlistCount }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Nav order: Home, About (right after Home), Destinations, Cities, Packages, Reviews, Contact
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "destinations", label: "Destinations" },
    { id: "cities", label: "Cities" },
    { id: "packages", label: "Packages" },
    { id: "reviews", label: "Reviews" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return React.createElement("header", { className: "site-header" }, [
    React.createElement("div", { key: "nav-wrap", className: "container navbar" }, [
      // Logo
      React.createElement("a", {
        key: "logo",
        href: "#",
        onClick: (e) => { e.preventDefault(); handleNavClick("home"); },
        className: "brand-logo group"
      }, [
        React.createElement("div", { className: "brand-icon" }, [
          React.createElement(Icons.Compass, { className: "text-white group-hover:rotate-45 transition-transform duration-300" })
        ]),
        React.createElement("div", { className: "brand-name" }, [
          React.createElement("span", { className: "brand-title" }, [
            "GOBEYOND ", React.createElement("span", null, "TRAVELS")
          ]),
          React.createElement("span", { className: "brand-tagline" }, "Untold Heritage • Native Guides")
        ])
      ]),

      // Desktop Nav Links
      React.createElement("nav", { key: "desktop-nav" }, [
        React.createElement("ul", { className: "nav-menu" },
          navItems.map((item) =>
            React.createElement("li", { key: item.id }, [
              React.createElement("a", {
                href: `#${item.id}`,
                onClick: (e) => { e.preventDefault(); handleNavClick(item.id); },
                className: `nav-link ${activePage === item.id ? "active" : ""}`
              }, item.label)
            ])
          )
        )
      ]),

      // Action Buttons
      React.createElement("div", { key: "actions", className: "nav-actions" }, [
        React.createElement("button", {
          key: "btn-guide",
          onClick: onOpenGuideRegister,
          className: "btn btn-outline btn-sm hidden sm:inline-flex"
        }, [
          React.createElement(Icons.Award, { className: "w-4 h-4 text-[#D9534F]" }),
          "Become a Local Guide"
        ]),

        currentUser ? React.createElement("div", {
          key: "user-profile",
          className: "flex items-center gap-2 bg-[#FDF1F0] text-[#B83E3A] px-3 py-1.5 rounded-full text-xs font-bold border border-[#D9534F]/30"
        }, [
          React.createElement("img", {
            src: currentUser.avatar || "assets/images/destinations/hampi.png",
            className: "w-6 h-6 rounded-full object-cover"
          }),
          React.createElement("span", null, currentUser.name.split(" ")[0]),
          React.createElement("button", {
            onClick: onLogout,
            title: "Sign Out",
            className: "ml-1 text-stone-500 hover:text-stone-900"
          }, "✕")
        ]) : React.createElement("button", {
          key: "btn-auth",
          onClick: onOpenAuth,
          className: "btn btn-primary btn-sm"
        }, [
          React.createElement(Icons.User, { className: "w-4 h-4" }),
          "Sign In / Sign Up"
        ]),

        // Mobile Toggle Button
        React.createElement("button", {
          key: "mobile-btn",
          onClick: () => setMobileOpen(!mobileOpen),
          className: "mobile-toggle",
          "aria-label": "Toggle navigation"
        }, mobileOpen ? React.createElement(Icons.X) : React.createElement(Icons.Menu))
      ])
    ]),

    // Mobile Navigation Drawer
    mobileOpen && React.createElement("div", {
      key: "mobile-drawer",
      className: "md:hidden bg-white border-b border-stone-200 px-6 py-5 space-y-3 shadow-xl"
    }, [
      navItems.map((item) =>
        React.createElement("a", {
          key: item.id,
          href: `#${item.id}`,
          onClick: (e) => { e.preventDefault(); handleNavClick(item.id); },
          className: `block py-2 text-base font-semibold ${activePage === item.id ? "text-[#D9534F]" : "text-stone-700"}`
        }, item.label)
      ),
      React.createElement("div", { className: "pt-3 border-t border-stone-100 flex flex-col gap-2" }, [
        React.createElement("button", {
          onClick: () => { setMobileOpen(false); onOpenGuideRegister(); },
          className: "btn btn-outline btn-sm w-full"
        }, "Become a Local Guide"),
        !currentUser && React.createElement("button", {
          onClick: () => { setMobileOpen(false); onOpenAuth(); },
          className: "btn btn-primary btn-sm w-full"
        }, "Sign In / Sign Up")
      ])
    ])
  ]);
}

// --- Footer Component ---
function Footer({ setActivePage }) {
  return React.createElement("footer", { className: "site-footer" }, [
    React.createElement("div", { key: "footer-wrap", className: "container" }, [
      React.createElement("div", { className: "footer-grid" }, [
        // Col 1: Brand story
        React.createElement("div", { key: "col-brand", className: "footer-col" }, [
          React.createElement("div", { className: "brand-logo mb-4" }, [
            React.createElement("div", { className: "brand-icon" }, [
              React.createElement(Icons.Compass, { className: "text-white" })
            ]),
            React.createElement("div", { className: "brand-name" }, [
              React.createElement("span", { className: "brand-title text-white" }, [
                "GOBEYOND ", React.createElement("span", { className: "text-[#F0AD4E]" }, "TRAVELS")
              ]),
              React.createElement("span", { className: "brand-tagline text-stone-400" }, "Conscious Indian Heritage")
            ])
          ]),
          React.createElement("p", { className: "text-sm text-stone-300 leading-relaxed mb-4" },
            "Connecting mindful global travelers with verified indigenous guides to discover India's untold cultural sanctuaries away from overcrowded commercial tourist corridors."
          ),
          React.createElement("div", { className: "inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#F0AD4E] border border-white/15" }, [
            React.createElement("span", null, "🌱"),
            "75%+ Direct Payout to Local Families Guarantee"
          ])
        ]),

        // Col 2: Quick Links
        React.createElement("div", { key: "col-links", className: "footer-col" }, [
          React.createElement("h4", null, "Explore Heritage"),
          React.createElement("ul", { className: "footer-links" }, [
            React.createElement("li", { key: "l-home" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("home"); } }, "Home")),
            React.createElement("li", { key: "l-about" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("about"); } }, "Our Story & Manifesto")),
            React.createElement("li", { key: "l-dest" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("destinations"); } }, "Hidden Destinations")),
            React.createElement("li", { key: "l-cities" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("cities"); } }, "Gateway Cities")),
            React.createElement("li", { key: "l-pack" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("packages"); } }, "Curated Packages"))
          ])
        ]),

        // Col 3: Community & Ethics
        React.createElement("div", { key: "col-comm", className: "footer-col" }, [
          React.createElement("h4", null, "Community & Impact"),
          React.createElement("ul", { className: "footer-links" }, [
            React.createElement("li", { key: "c-guide" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("guide-register"); } }, "Join as a Local Guide")),
            React.createElement("li", { key: "c-rev" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("reviews"); } }, "Traveler Reviews")),
            React.createElement("li", { key: "c-faq" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("contact"); } }, "Crowd Meter FAQ")),
            React.createElement("li", { key: "c-ethic" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("about"); } }, "Ethical Travel Pledge")),
            React.createElement("li", { key: "c-cont" }, React.createElement("a", { href: "#", onClick: (e) => { e.preventDefault(); setActivePage("contact"); } }, "24/7 Traveler Help Desk"))
          ])
        ]),

        // Col 4: Newsletter
        React.createElement("div", { key: "col-sub", className: "footer-col" }, [
          React.createElement("h4", null, "The Untold India Journal"),
          React.createElement("p", { className: "text-xs text-stone-300 mb-3" },
            "Receive monthly dispatches featuring secret artisan guilds, rare festive ceremonies, and crowd-free itineraries."
          ),
          React.createElement("form", {
            onSubmit: (e) => {
              e.preventDefault();
              alert("Dhanyawad! You have been subscribed to The Untold India Journal.");
              e.target.reset();
            },
            className: "space-y-2"
          }, [
            React.createElement("input", {
              type: "email",
              required: true,
              placeholder: "Your email address",
              className: "w-full px-3 py-2 text-sm rounded-lg bg-white/10 text-white placeholder-stone-400 border border-white/20 outline-none focus:border-[#F0AD4E]"
            }),
            React.createElement("button", {
              type: "submit",
              className: "btn btn-secondary btn-sm w-full font-bold"
            }, "Subscribe to Journal")
          ])
        ])
      ]),

      // Bottom Bar
      React.createElement("div", { className: "footer-bottom" }, [
        React.createElement("p", null, `© ${new Date().getFullYear()} GOBEYOND TRAVELS Pvt Ltd. Dedicated to preserving India's living cultural heritage.`),
        React.createElement("div", { className: "flex gap-6 text-xs" }, [
          React.createElement("a", { href: "#" }, "Privacy Policy"),
          React.createElement("a", { href: "#" }, "Terms of Conscious Travel"),
          React.createElement("a", { href: "#" }, "Guide Code of Ethics")
        ])
      ])
    ])
  ]);
}

// --- Home Page Component ---
function HomePage({ destinations, packages, guides, setActivePage, onOpenRouteGuide, onOpenGuideModal, onBookPackage, setSelectedCityFilter }) {
  const [searchCity, setSearchCity] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchGroupSize, setSearchGroupSize] = useState("2 Travelers");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchCity) setSelectedCityFilter(searchCity);
    setActivePage("destinations");
  };

  return React.createElement("div", { className: "page-home" }, [
    // 1. Hero Section
    React.createElement("section", { key: "hero", className: "hero" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("div", { className: "hero-content" }, [
          React.createElement("span", { className: "hero-badge" }, [
            React.createElement(Icons.Sparkles, { className: "w-4 h-4 text-[#F0AD4E]" }),
            "Uncharted Cultural Sanctuaries Across India"
          ]),
          React.createElement("h1", { className: "hero-title" }, [
            "Discover Untold Stories with ", React.createElement("span", null, "Local Eyes")
          ]),
          React.createElement("p", { className: "hero-subtitle" },
            "Step off commercial tourist circuits. Connect with certified indigenous guides, explore living tribal crafts, ancient mud monasteries, and sacred river islands untouched by mass crowds."
          ),
          React.createElement("div", { className: "flex flex-wrap items-center justify-center gap-4" }, [
            React.createElement("button", {
              onClick: () => setActivePage("destinations"),
              className: "btn btn-primary btn-lg"
            }, [
              "Explore 12 Hidden Gems",
              React.createElement(Icons.ArrowRight)
            ]),
            React.createElement("button", {
              onClick: () => setActivePage("about"),
              className: "btn btn-outline-white btn-lg"
            }, "Read Our Ethical Manifesto")
          ])
        ])
      ])
    ]),

    // 2. Search Multi-Filter Strip
    React.createElement("div", { key: "search-strip", className: "container search-strip-wrap" }, [
      React.createElement("form", { onSubmit: handleSearchSubmit, className: "search-box" }, [
        // City input
        React.createElement("div", { className: "search-item" }, [
          React.createElement("span", { className: "search-label" }, [
            React.createElement(Icons.MapPin, { className: "w-3.5 h-3.5 text-[#D9534F]" }),
            "Starting / Target City"
          ]),
          React.createElement("select", {
            value: searchCity,
            onChange: (e) => setSearchCity(e.target.value),
            className: "search-input"
          }, [
            React.createElement("option", { value: "" }, "All Regions in India"),
            GoBeyondData.cities.map((c) => React.createElement("option", { key: c.name, value: c.name }, `${c.name} (${c.state})`))
          ])
        ]),

        React.createElement("div", { className: "search-divider" }),

        // Cultural Interest
        React.createElement("div", { className: "search-item" }, [
          React.createElement("span", { className: "search-label" }, [
            React.createElement(Icons.Compass, { className: "w-3.5 h-3.5 text-[#F0AD4E]" }),
            "Cultural Interest"
          ]),
          React.createElement("select", {
            value: searchCategory,
            onChange: (e) => setSearchCategory(e.target.value),
            className: "search-input"
          }, [
            React.createElement("option", { value: "" }, "All Cultural Traditions"),
            React.createElement("option", { value: "Tribal Traditions" }, "Tribal & Indigenous"),
            React.createElement("option", { value: "Ancient Architecture" }, "Ancient Architecture"),
            React.createElement("option", { value: "Sacred Rituals" }, "Sacred Rituals & Chants"),
            React.createElement("option", { value: "Folk Crafts" }, "Lost Crafts & Metallurgy"),
            React.createElement("option", { value: "Culinary Heritage" }, "Culinary & Living Culture")
          ])
        ]),

        React.createElement("div", { className: "search-divider" }),

        // Travel Date
        React.createElement("div", { className: "search-item" }, [
          React.createElement("span", { className: "search-label" }, [
            React.createElement(Icons.Calendar, { className: "w-3.5 h-3.5 text-[#0A4D68]" }),
            "Expedition Date"
          ]),
          React.createElement("input", {
            type: "date",
            value: searchDate,
            onChange: (e) => setSearchDate(e.target.value),
            className: "search-input"
          })
        ]),

        React.createElement("div", { className: "search-divider" }),

        // Group Size
        React.createElement("div", { className: "search-item" }, [
          React.createElement("span", { className: "search-label" }, [
            React.createElement(Icons.Users, { className: "w-3.5 h-3.5 text-stone-500" }),
            "Group Size"
          ]),
          React.createElement("select", {
            value: searchGroupSize,
            onChange: (e) => setSearchGroupSize(e.target.value),
            className: "search-input"
          }, [
            React.createElement("option", { value: "Solo Traveler" }, "Solo Explorer"),
            React.createElement("option", { value: "Couple (2)" }, "Couple (2)"),
            React.createElement("option", { value: "Small Group (3-5)" }, "Small Group (3-5)"),
            React.createElement("option", { value: "Private Group (6 max)" }, "Private Group (6 max)")
          ])
        ]),

        // Search CTA
        React.createElement("button", {
          type: "submit",
          className: "btn btn-primary"
        }, [
          React.createElement(Icons.Search, { className: "w-4 h-4" }),
          "Find Tours"
        ])
      ])
    ]),

    // 3. Live Stats Counter Strip
    React.createElement("section", { key: "stats", className: "stats-strip" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("div", { className: "stats-grid" }, [
          React.createElement("div", { key: "s1" }, [
            React.createElement("div", { className: "stat-num" }, "12+"),
            React.createElement("div", { className: "stat-label" }, "Protected Heritage Sites in India")
          ]),
          React.createElement("div", { key: "s2" }, [
            React.createElement("div", { className: "stat-num" }, "100%"),
            React.createElement("div", { className: "stat-label" }, "Certified Native Guides")
          ]),
          React.createElement("div", { key: "s3" }, [
            React.createElement("div", { className: "stat-num" }, "94%"),
            React.createElement("div", { className: "stat-label" }, "Average Crowd Avoidance Rate")
          ]),
          React.createElement("div", { key: "s4" }, [
            React.createElement("div", { className: "stat-num" }, "₹54L+"),
            React.createElement("div", { className: "stat-label" }, "Direct Payout to Artisan Villages")
          ])
        ])
      ])
    ]),

    // 4. Value Proposition: Local Experiences vs Overcrowded Traps
    React.createElement("section", { key: "value-prop", className: "section comparison-section" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("div", { className: "section-title-wrap" }, [
          React.createElement("span", { className: "section-tag" }, "Conscious Travel vs Mass Tourism"),
          React.createElement("h2", { className: "section-title" }, "Why Travelers Choose GoBeyond Over Tourist Traps"),
          React.createElement("p", { className: "section-subtitle" },
            "Commercial travel agencies herd travelers into crowded lines, commissioned gift shops, and rushed photo-ops. GoBeyond preserves authentic cultural connection."
          )
        ]),

        React.createElement("div", { className: "comparison-grid" }, [
          // Bad Trap Card
          React.createElement("div", { key: "comp-bad", className: "comp-card comp-card-trap" }, [
            React.createElement("div", { className: "comp-header" }, [
              React.createElement("div", { className: "comp-icon" }, "✕"),
              React.createElement("div", null, [
                React.createElement("h3", { className: "text-lg font-bold text-rose-900" }, "Overcrowded Commercial Tourist Traps"),
                React.createElement("p", { className: "text-xs text-rose-700" }, "Mainstream package tours & congested monuments")
              ])
            ]),
            React.createElement("ul", { className: "comp-list" }, [
              React.createElement("li", { key: "b1" }, [
                React.createElement("span", { className: "comp-mark-bad" }, "✕"),
                React.createElement("span", null, "Hours spent in suffocating queues and selfie-stick mobs")
              ]),
              React.createElement("li", { key: "b2" }, [
                React.createElement("span", { className: "comp-mark-bad" }, "✕"),
                React.createElement("span", null, "Scripted guide speeches and forced stops at overpriced souvenir stores")
              ]),
              React.createElement("li", { key: "b3" }, [
                React.createElement("span", { className: "comp-mark-bad" }, "✕"),
                React.createElement("span", null, "Only 5-10% of tour money trickles down to actual local residents")
              ]),
              React.createElement("li", { key: "b4" }, [
                React.createElement("span", { className: "comp-mark-bad" }, "✕"),
                React.createElement("span", null, "Superficial surface tours with zero true cultural immersion")
              ])
            ])
          ]),

          // Good GoBeyond Card
          React.createElement("div", { key: "comp-good", className: "comp-card comp-card-beyond" }, [
            React.createElement("div", { className: "comp-header" }, [
              React.createElement("div", { className: "comp-icon" }, "✓"),
              React.createElement("div", null, [
                React.createElement("h3", { className: "text-lg font-bold text-[#D9534F]" }, "The GoBeyond Cultural Immersion"),
                React.createElement("p", { className: "text-xs text-[#0A4D68] font-bold" }, "Small-group, ethical, crowd-free heritage journeys")
              ])
            ]),
            React.createElement("ul", { className: "comp-list" }, [
              React.createElement("li", { key: "g1" }, [
                React.createElement("span", { className: "comp-mark-good" }, "✓"),
                React.createElement("span", null, "Real-time Crowd Meter alerts ensuring serene, contemplative access")
              ]),
              React.createElement("li", { key: "g2" }, [
                React.createElement("span", { className: "comp-mark-good" }, "✓"),
                React.createElement("span", null, "Direct entry into 7th-generation artisan family forges & monastery sanctums")
              ]),
              React.createElement("li", { key: "g3" }, [
                React.createElement("span", { className: "comp-mark-good" }, "✓"),
                React.createElement("span", null, "Guaranteed 75%+ direct earnings to native guide & host families")
              ]),
              React.createElement("li", { key: "g4" }, [
                React.createElement("span", { className: "comp-mark-good" }, "✓"),
                React.createElement("span", null, "Comprehensive transport route guides (Flight, Train, Scenic Road options)")
              ])
            ])
          ])
        ])
      ])
    ]),

    // 5. Featured Destinations Grid (First 3)
    React.createElement("section", { key: "featured-dest", className: "section" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10" }, [
          React.createElement("div", null, [
            React.createElement("span", { className: "section-tag" }, "Featured Destinations"),
            React.createElement("h2", { className: "section-title mb-2" }, "Trending Off-Beat Cultural Sanctuaries"),
            React.createElement("p", { className: "section-subtitle mb-0" }, "Hand-picked Indian heritage sites with verified quiet crowd levels.")
          ]),
          React.createElement("button", {
            onClick: () => setActivePage("destinations"),
            className: "btn btn-outline"
          }, [
            "View All 12 Destinations",
            React.createElement(Icons.ArrowRight)
          ])
        ]),

        React.createElement("div", { className: "card-grid" },
          destinations.slice(0, 3).map((dest) =>
            React.createElement("div", { key: dest.id, className: "destination-card" }, [
              React.createElement("div", { className: "card-img-wrap" }, [
                React.createElement("img", { src: dest.image, alt: dest.name, className: "card-img" }),
                React.createElement("div", { className: "card-badges-top" }, [
                  React.createElement("span", { className: "category-badge" }, dest.category),
                  React.createElement(CrowdMeter, { level: dest.crowdLevel, percent: dest.crowdPercent, compact: true })
                ])
              ]),
              React.createElement("div", { className: "card-body" }, [
                React.createElement("div", { className: "card-location" }, [
                  React.createElement(Icons.MapPin, { className: "w-3.5 h-3.5 text-[#D9534F]" }),
                  `${dest.city}, ${dest.state}`
                ]),
                React.createElement("h3", { className: "card-title" }, dest.name),
                React.createElement("p", { className: "card-tagline" }, dest.tagline),
                React.createElement("div", { className: "card-highlights" },
                  dest.highlights.slice(0, 3).map((h, i) =>
                    React.createElement("span", { key: i, className: "highlight-pill" }, `• ${h}`)
                  )
                ),
                React.createElement("div", { className: "card-footer" }, [
                  React.createElement("div", { className: "card-price-block" }, [
                    React.createElement("span", { className: "price-label" }, "Starting From"),
                    React.createElement("span", { className: "price-amount" }, `₹${dest.startingPrice.toLocaleString("en-IN")}`)
                  ]),
                  React.createElement("div", { className: "card-actions" }, [
                    React.createElement("button", {
                      onClick: () => onOpenRouteGuide(dest),
                      className: "btn btn-outline btn-sm",
                      title: "View Flight, Train & Road route"
                    }, "Route Guide"),
                    React.createElement("button", {
                      onClick: () => onBookPackage({
                        id: `custom-${dest.id}`,
                        title: `${dest.name} Custom Immersion`,
                        price: dest.startingPrice,
                        destinationName: dest.name,
                        city: dest.city,
                        guideName: dest.guideName
                      }),
                      className: "btn btn-primary btn-sm"
                    }, "Book Tour")
                  ])
                ])
              ])
            ])
          )
        )
      ])
    ]),

    // 6. Native Guide Spotlight Banner
    React.createElement("section", { key: "guides-spotlight", className: "section bg-stone-100" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("div", { className: "section-title-wrap" }, [
          React.createElement("span", { className: "section-tag" }, "Local Custodians"),
          React.createElement("h2", { className: "section-title" }, "Meet Our Verified Indigenous Guides"),
          React.createElement("p", { className: "section-subtitle" },
            "Historians, monks, lost-wax masters, and botanists who hold the keys to India's sacred traditions."
          )
        ]),

        React.createElement("div", { className: "card-grid" },
          guides.slice(0, 3).map((guide) =>
            React.createElement("div", { key: guide.id, className: "guide-card" }, [
              React.createElement("div", { className: "guide-avatar-wrap" }, [
                React.createElement("img", { src: guide.avatar, alt: guide.name, className: "guide-avatar" }),
                React.createElement("span", { className: "verified-badge" }, "✓ VERIFIED")
              ]),
              React.createElement("h3", { className: "guide-name" }, guide.name),
              React.createElement("p", { className: "guide-meta" }, `📍 ${guide.city}, ${guide.state}`),
              React.createElement("div", { className: "guide-badges-row" },
                guide.badges.map((b, i) =>
                  React.createElement("span", { key: i, className: "guide-badge-pill" }, b)
                )
              ),
              React.createElement("p", { className: "guide-quote" }, `“${guide.videoIntro?.quote || guide.bio.slice(0, 90) + "..."}”`),
              React.createElement("div", { className: "mt-auto pt-4 border-t border-stone-100 flex items-center justify-between" }, [
                React.createElement("span", { className: "text-xs font-bold text-amber-600 flex items-center gap-1" }, [
                  "★", `${guide.rating} (${guide.reviewsCount})`
                ]),
                React.createElement("button", {
                  onClick: () => onOpenGuideModal(guide),
                  className: "btn btn-outline btn-sm"
                }, [
                  React.createElement(Icons.Play, { className: "w-3 h-3 text-[#D9534F]" }),
                  "Video Intro"
                ])
              ])
            ])
          )
        ),

        React.createElement("div", { className: "text-center mt-10" }, [
          React.createElement("button", {
            onClick: () => setActivePage("guide-register"),
            className: "btn btn-secondary btn-lg font-bold"
          }, "Are You a Local Guide? Join GoBeyond Community →")
        ])
      ])
    ])
  ]);
}

// --- About Page Component (Positioned Directly After Home) ---
function AboutPage({ setActivePage }) {
  return React.createElement("div", { className: "page-about" }, [
    // Header Banner
    React.createElement("div", { className: "bg-gradient-to-r from-[#0A4D68] to-[#053346] text-white py-16 text-center" }, [
      React.createElement("div", { className: "container max-w-3xl" }, [
        React.createElement("span", { className: "inline-block px-3 py-1 rounded-full bg-white/10 text-[#F0AD4E] text-xs font-bold uppercase tracking-wider mb-4 border border-white/20" }, "Our Purpose & Manifesto"),
        React.createElement("h1", { className: "text-3xl md:text-5xl font-bold font-heading mb-4 text-white" }, "Preserving India's Living Heritage Through Conscious Travel"),
        React.createElement("p", { className: "text-stone-200 text-base md:text-lg leading-relaxed" },
          "We founded GoBeyond Travels with a single urgent mission: to counter the Disneyfication of Indian tourism by championing hidden indigenous cultures and channeling economic justice to local guardians."
        )
      ])
    ]),

    React.createElement("div", { className: "container py-16 max-w-4xl" }, [
      // Story section
      React.createElement("div", { className: "space-y-6 text-stone-700 leading-relaxed text-base mb-16" }, [
        React.createElement("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 font-heading" }, "The Story Behind GoBeyond"),
        React.createElement("p", null,
          "For decades, tourism in India has been funneled into an over-commercialized 'Golden Triangle' and beach resorts. Mainstream travel companies race to squeeze thousands of tourists through identical itineraries, leaving monuments degraded, sacred rituals trivialized as photo-props, and local artisans subsisting on pennies while middlemen pocket 90% of trip expenditures."
        ),
        React.createElement("p", null,
          "Meanwhile, across India's heartlands—from the 4,000-year-old lost-wax bronze foundries of Bastar to the 1,000-year-old mud monasteries of Spiti and the river-island Vaishnavite Satras of Majuli—living traditions were dying out because younger generations could not earn a dignified livelihood practicing their ancestral arts."
        ),
        React.createElement("p", null,
          "GoBeyond Travels was built to change this equation permanently. We connect thoughtful travelers directly with native historians, tribal elders, and master craftsmen for intimate, small-group cultural immersions."
        )
      ]),

      // 5 Core Pillars Manifesto
      React.createElement("div", { className: "mb-16" }, [
        React.createElement("h2", { className: "text-2xl md:text-3xl font-bold text-stone-900 font-heading mb-8 text-center" }, "The GoBeyond 5-Pillar Ethical Manifesto"),
        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
          React.createElement("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 shadow-sm" }, [
            React.createElement("div", { className: "w-10 h-10 rounded-xl bg-[#FDF1F0] text-[#D9534F] flex items-center justify-center font-bold text-lg mb-3" }, "1"),
            React.createElement("h3", { className: "text-lg font-bold text-stone-900 mb-2" }, "Anti-Mass Tourism Guarantee"),
            React.createElement("p", { className: "text-sm text-stone-600" }, "Strict cap of 4 to 8 travelers per tour. Zero disruptive 50-passenger coaches or megaphone tours that overwhelm fragile rural ecosystems.")
          ]),
          React.createElement("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 shadow-sm" }, [
            React.createElement("div", { className: "w-10 h-10 rounded-xl bg-[#FEF8EC] text-[#D48F29] flex items-center justify-center font-bold text-lg mb-3" }, "2"),
            React.createElement("h3", { className: "text-lg font-bold text-stone-900 mb-2" }, "Living Intangible Heritage"),
            React.createElement("p", { className: "text-sm text-stone-600" }, "We prioritize living cultures—oral epics, traditional weaving, sacred chanting, and mud architecture—over cold commercial monument ticket counters.")
          ]),
          React.createElement("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 shadow-sm" }, [
            React.createElement("div", { className: "w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg mb-3" }, "3"),
            React.createElement("h3", { className: "text-lg font-bold text-stone-900 mb-2" }, "75%+ Direct Community Payout"),
            React.createElement("p", { className: "text-sm text-stone-600" }, "At least three-quarters of tour revenues go directly into the hands of local guides, family homestays, and village artisan guilds.")
          ]),
          React.createElement("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 shadow-sm" }, [
            React.createElement("div", { className: "w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg mb-3" }, "4"),
            React.createElement("h3", { className: "text-lg font-bold text-stone-900 mb-2" }, "Zero-Waste & Low Footprint"),
            React.createElement("p", { className: "text-sm text-stone-600" }, "We prohibit single-use plastic bottles, provide copper flasks, and strictly adhere to Leave No Trace environmental protocols.")
          ])
        ]),

        React.createElement("div", { className: "mt-6 p-6 rounded-2xl bg-[#0A4D68] text-white" }, [
          React.createElement("div", { className: "flex items-start gap-4" }, [
            React.createElement("div", { className: "w-10 h-10 rounded-xl bg-white/20 text-[#F0AD4E] flex items-center justify-center font-bold text-lg shrink-0" }, "5"),
            React.createElement("div", null, [
              React.createElement("h3", { className: "text-lg font-bold mb-1 text-white" }, "Deep Reverence for Sacred Customs"),
              React.createElement("p", { className: "text-sm text-stone-200" }, "We seek formal blessing from village councils and monastery abbots before introducing visitors. Cultural etiquette is non-negotiable.")
            ])
          ])
        ])
      ]),

      // Community Impact Counter
      React.createElement("div", { className: "bg-white p-8 rounded-2xl border border-stone-200 text-center shadow-md mb-12" }, [
        React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-[#D9534F] block mb-2" }, "Verified Community Impact"),
        React.createElement("h3", { className: "text-2xl font-bold text-stone-900 mb-6 font-heading" }, "Your Travel Restores Cultural Futures"),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6" }, [
          React.createElement("div", { key: "i1", className: "p-4 bg-stone-50 rounded-xl" }, [
            React.createElement("div", { className: "text-3xl font-extrabold text-[#D9534F] mb-1" }, "120+"),
            React.createElement("div", { className: "text-xs font-semibold text-stone-600" }, "Native Guides & Apprentices Trained")
          ]),
          React.createElement("div", { key: "i2", className: "p-4 bg-stone-50 rounded-xl" }, [
            React.createElement("div", { className: "text-3xl font-extrabold text-[#D48F29] mb-1" }, "34"),
            React.createElement("div", { className: "text-xs font-semibold text-stone-600" }, "Family Artisan Guilds Sustained")
          ]),
          React.createElement("div", { key: "i3", className: "p-4 bg-stone-50 rounded-xl" }, [
            React.createElement("div", { className: "text-3xl font-extrabold text-[#0A4D68] mb-1" }, "₹5.4 Lakh"),
            React.createElement("div", { className: "text-xs font-semibold text-stone-600" }, "Dedicated to Heritage Preservation Fund")
          ])
        ])
      ]),

      // CTA
      React.createElement("div", { className: "text-center" }, [
        React.createElement("button", {
          onClick: () => setActivePage("destinations"),
          className: "btn btn-primary btn-lg"
        }, "Discover Hidden Indian Destinations →")
      ])
    ])
  ]);
}

// --- Destinations & City Explorer Page Component ---
function DestinationsPage({ destinations, onOpenRouteGuide, onOpenGuideModal, onBookPackage, selectedCityFilter, setSelectedCityFilter }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCrowd, setSelectedCrowd] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'map'

  const categories = ["All", "Tribal Traditions", "Ancient Architecture", "Sacred Rituals", "Folk Crafts", "Culinary Heritage"];

  // Filter logic
  const filteredDestinations = useMemo(() => {
    return destinations.filter((dest) => {
      const matchCity = !selectedCityFilter || selectedCityFilter === "All" || dest.city.toLowerCase().includes(selectedCityFilter.toLowerCase()) || dest.state.toLowerCase().includes(selectedCityFilter.toLowerCase());
      const matchCategory = selectedCategory === "All" || dest.category === selectedCategory;
      const matchCrowd = selectedCrowd === "All" || dest.crowdLevel === selectedCrowd;
      const matchSearch = !searchQuery || dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || dest.city.toLowerCase().includes(searchQuery.toLowerCase()) || dest.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCity && matchCategory && matchCrowd && matchSearch;
    });
  }, [destinations, selectedCityFilter, selectedCategory, selectedCrowd, searchQuery]);

  return React.createElement("div", { className: "page-destinations pb-20" }, [
    // Page Header
    React.createElement("div", { className: "bg-[#F4F1EA] py-12 border-b border-stone-200" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("span", { className: "section-tag" }, "100% Within India"),
        React.createElement("h1", { className: "text-3xl md:text-4xl font-bold font-heading text-stone-900 mb-2" }, "City & Heritage Destination Explorer"),
        React.createElement("p", { className: "text-stone-600 max-w-2xl text-sm md:text-base" },
          "Explore 12 authentic, crowd-free cultural destinations across India. Click any destination card to inspect its interactive Route Guide with flight, train, and road transport details."
        )
      ])
    ]),

    // Filters Bar
    React.createElement("div", { className: "container py-8" }, [
      // City Selector Dropdown / Pills
      React.createElement("div", { className: "mb-6" }, [
        React.createElement("div", { className: "flex items-center justify-between mb-2" }, [
          React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5" }, [
            React.createElement(Icons.MapPin, { className: "w-3.5 h-3.5 text-[#D9534F]" }),
            "Select Gateway Indian City"
          ]),
          selectedCityFilter && React.createElement("button", {
            onClick: () => setSelectedCityFilter(""),
            className: "text-xs text-[#D9534F] font-bold hover:underline"
          }, "Reset City Filter")
        ]),
        React.createElement("div", { className: "flex flex-wrap gap-2" }, [
          React.createElement("button", {
            key: "city-all",
            onClick: () => setSelectedCityFilter(""),
            className: `px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
              !selectedCityFilter ? "bg-[#D9534F] text-white border-[#D9534F]" : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
            }`
          }, "All Cities (12)"),
          GoBeyondData.cities.map((city) =>
            React.createElement("button", {
              key: city.name,
              onClick: () => setSelectedCityFilter(city.name),
              className: `px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                selectedCityFilter === city.name ? "bg-[#D9534F] text-white border-[#D9534F]" : "bg-white text-stone-700 border-stone-200 hover:border-stone-400"
              }`
            }, `${city.name}`)
          )
        ])
      ]),

      // Search and Second-Tier Filters
      React.createElement("div", { className: "flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-stone-200 shadow-sm" }, [
        // Search Input
        React.createElement("div", { className: "relative flex-1" }, [
          React.createElement(Icons.Search, { className: "absolute left-3 top-3 w-4 h-4 text-stone-400" }),
          React.createElement("input", {
            type: "text",
            placeholder: "Search heritage site, craft, or state in India...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "w-full pl-9 pr-4 py-2 rounded-lg border border-stone-200 text-sm outline-none focus:border-[#D9534F]"
          })
        ]),

        // Crowd Meter Filter
        React.createElement("div", { className: "flex items-center gap-2" }, [
          React.createElement("span", { className: "text-xs font-bold text-stone-500 shrink-0" }, "Crowd Meter:"),
          React.createElement("select", {
            value: selectedCrowd,
            onChange: (e) => setSelectedCrowd(e.target.value),
            className: "text-xs font-semibold px-3 py-2 rounded-lg border border-stone-200 bg-stone-50 outline-none"
          }, [
            React.createElement("option", { value: "All" }, "All Density Levels"),
            React.createElement("option", { value: "peaceful" }, "🟢 Quiet & Peaceful Only"),
            React.createElement("option", { value: "moderate" }, "🟡 Moderate Activity"),
            React.createElement("option", { value: "crowded" }, "🔴 Mainstream Congestion")
          ])
        ]),

        // View Mode Toggle (Grid vs Cultural Map)
        React.createElement("div", { className: "flex rounded-lg bg-stone-100 p-1 shrink-0" }, [
          React.createElement("button", {
            onClick: () => setViewMode("grid"),
            className: `px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              viewMode === "grid" ? "bg-white text-stone-900 shadow-xs" : "text-stone-500 hover:text-stone-800"
            }`
          }, "Cards Grid"),
          React.createElement("button", {
            onClick: () => setViewMode("map"),
            className: `px-3 py-1.5 text-xs font-bold rounded-md transition-all ${
              viewMode === "map" ? "bg-white text-[#0A4D68] shadow-xs" : "text-stone-500 hover:text-stone-800"
            }`
          }, "🗺️ Cultural Map View")
        ])
      ]),

      // Cultural Category Pills
      React.createElement("div", { className: "flex flex-wrap gap-2 mb-8" },
        categories.map((cat) =>
          React.createElement("button", {
            key: cat,
            onClick: () => setSelectedCategory(cat),
            className: `px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              selectedCategory === cat ? "bg-[#0A4D68] text-white shadow-xs" : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`
          }, cat)
        )
      ),

      // View Mode 1: Interactive Cultural Map
      viewMode === "map" ? React.createElement("div", { className: "mb-10" }, [
        React.createElement(CulturalMap, {
          destinations: filteredDestinations,
          onSelectDestination: (dest) => onOpenRouteGuide(dest)
        })
      ]) : null,

      // View Mode 2: Cards Grid
      React.createElement("div", null, [
        React.createElement("div", { className: "flex items-center justify-between mb-6" }, [
          React.createElement("p", { className: "text-sm text-stone-600 font-medium" },
            `Showing ${filteredDestinations.length} authentic Indian destinations`
          ),
          filteredDestinations.length === 0 && React.createElement("button", {
            onClick: () => { setSelectedCityFilter(""); setSelectedCategory("All"); setSelectedCrowd("All"); setSearchQuery(""); },
            className: "text-xs text-[#D9534F] font-bold"
          }, "Clear all filters")
        ]),

        filteredDestinations.length === 0 ? React.createElement("div", {
          className: "text-center py-16 bg-white rounded-2xl border border-stone-200 p-8"
        }, [
          React.createElement("div", { className: "text-4xl mb-3" }, "🧭"),
          React.createElement("h3", { className: "text-lg font-bold text-stone-800 mb-1" }, "No Destinations Found"),
          React.createElement("p", { className: "text-sm text-stone-500 mb-4" }, "Try broadening your city or category filters."),
          React.createElement("button", {
            onClick: () => { setSelectedCityFilter(""); setSelectedCategory("All"); setSelectedCrowd("All"); setSearchQuery(""); },
            className: "btn btn-primary btn-sm"
          }, "Show All 12 Destinations")
        ]) : React.createElement("div", { className: "card-grid" },
          filteredDestinations.map((dest) =>
            React.createElement("div", { key: dest.id, className: "destination-card" }, [
              React.createElement("div", { className: "card-img-wrap" }, [
                React.createElement("img", { src: dest.image, alt: dest.name, className: "card-img" }),
                React.createElement("div", { className: "card-badges-top" }, [
                  React.createElement("span", { className: "category-badge" }, dest.category),
                  React.createElement(CrowdMeter, { level: dest.crowdLevel, percent: dest.crowdPercent, compact: true })
                ])
              ]),
              React.createElement("div", { className: "card-body" }, [
                React.createElement("div", { className: "card-location" }, [
                  React.createElement(Icons.MapPin, { className: "w-3.5 h-3.5 text-[#D9534F]" }),
                  `${dest.city}, ${dest.state}`
                ]),
                React.createElement("h3", { className: "card-title" }, dest.name),
                React.createElement("p", { className: "card-tagline" }, dest.tagline),
                React.createElement("div", { className: "card-highlights" },
                  dest.highlights.slice(0, 3).map((h, i) =>
                    React.createElement("span", { key: i, className: "highlight-pill" }, `• ${h}`)
                  )
                ),
                React.createElement("div", { className: "card-footer" }, [
                  React.createElement("div", { className: "card-price-block" }, [
                    React.createElement("span", { className: "price-label" }, "Starting From"),
                    React.createElement("span", { className: "price-amount" }, `₹${dest.startingPrice.toLocaleString("en-IN")}`)
                  ]),
                  React.createElement("div", { className: "card-actions" }, [
                    React.createElement("button", {
                      onClick: () => onOpenRouteGuide(dest),
                      className: "btn btn-outline btn-sm",
                      title: "View Flight, Train & Road route"
                    }, "Route Guide"),
                    React.createElement("button", {
                      onClick: () => onBookPackage({
                        id: `custom-${dest.id}`,
                        title: `${dest.name} Custom Immersion`,
                        price: dest.startingPrice,
                        destinationName: dest.name,
                        city: dest.city,
                        guideName: dest.guideName
                      }),
                      className: "btn btn-primary btn-sm"
                    }, "Book Tour")
                  ])
                ])
              ])
            ])
          )
        )
      ])
    ])
  ]);
}

// --- Interactive Cultural Map Component ---
function CulturalMap({ destinations, onSelectDestination }) {
  const [activePin, setActivePin] = useState(null);

  return React.createElement("div", { className: "cultural-map-container" }, [
    React.createElement("div", { className: "map-toolbar" }, [
      React.createElement("div", null, [
        React.createElement("h3", { className: "text-base font-bold text-stone-900" }, "Interactive Cultural Heritage Map of India"),
        React.createElement("p", { className: "text-xs text-stone-500" }, "Click any pin to inspect the destination, crowd density, and transport routes relative to major hubs.")
      ]),
      React.createElement("div", { className: "flex items-center gap-4 text-xs" }, [
        React.createElement("span", { className: "flex items-center gap-1.5" }, [
          React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-emerald-500" }),
          "Quiet Heritage Site"
        ]),
        React.createElement("span", { className: "flex items-center gap-1.5" }, [
          React.createElement("span", { className: "w-2.5 h-2.5 rounded-full bg-amber-500" }),
          "Moderate Activity"
        ])
      ])
    ]),

    React.createElement("div", { className: "map-view-wrapper relative" }, [
      // SVG Map schematic
      React.createElement("svg", {
        viewBox: "0 0 100 100",
        className: "india-svg-map w-full h-[480px]",
        style: { filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.05))" }
      }, [
        // India map stylized outline background
        React.createElement("path", {
          key: "india-shape",
          d: "M 35 12 L 42 10 L 48 16 L 55 20 L 62 23 L 75 25 L 88 23 L 92 28 L 86 36 L 80 38 L 74 40 L 65 42 L 60 48 L 56 60 L 52 75 L 48 88 L 44 94 L 40 86 L 36 72 L 32 58 L 28 48 L 26 38 L 30 25 Z",
          fill: "#FFFFFF",
          stroke: "#CBD5E1",
          strokeWidth: "0.75"
        }),

        // Major transport corridors (subtle connecting lines)
        React.createElement("line", { key: "c1", x1: "37", y1: "17", x2: "48", y2: "39", stroke: "#E2E8F0", strokeWidth: "0.5", strokeDasharray: "1,1" }),
        React.createElement("line", { key: "c2", x1: "48", y1: "39", x2: "55", y2: "56", stroke: "#E2E8F0", strokeWidth: "0.5", strokeDasharray: "1,1" }),
        React.createElement("line", { key: "c3", x1: "55", y1: "56", x2: "39", y2: "69", stroke: "#E2E8F0", strokeWidth: "0.5", strokeDasharray: "1,1" }),
        React.createElement("line", { key: "c4", x1: "39", y1: "69", x2: "44", y2: "84", stroke: "#E2E8F0", strokeWidth: "0.5", strokeDasharray: "1,1" }),
        React.createElement("line", { key: "c5", x1: "48", y1: "39", x2: "57", y2: "41", stroke: "#E2E8F0", strokeWidth: "0.5", strokeDasharray: "1,1" }),
        React.createElement("line", { key: "c6", x1: "57", y1: "41", x2: "84", y2: "32", stroke: "#E2E8F0", strokeWidth: "0.5", strokeDasharray: "1,1" }),

        // Pins for destinations
        destinations.map((dest) => {
          const coords = dest.mapCoords || { x: 50, y: 50 };
          const isSelected = activePin?.id === dest.id;
          const pinColor = dest.crowdLevel === "peaceful" ? "#10B981" : dest.crowdLevel === "moderate" ? "#F59E0B" : "#EF4444";

          return React.createElement("g", {
            key: dest.id,
            className: "map-pin",
            onClick: () => setActivePin(dest)
          }, [
            // Pulse circle
            React.createElement("circle", {
              cx: coords.x,
              cy: coords.y,
              r: isSelected ? 4 : 2.5,
              fill: pinColor,
              opacity: 0.3
            }),
            // Pin core
            React.createElement("circle", {
              cx: coords.x,
              cy: coords.y,
              r: isSelected ? 2.5 : 1.6,
              fill: pinColor,
              stroke: "#FFFFFF",
              strokeWidth: "0.5"
            }),
            // Label
            React.createElement("text", {
              x: coords.x,
              y: coords.y - 3,
              fontSize: "2.4",
              fontWeight: "bold",
              textAnchor: "middle",
              fill: isSelected ? "#D9534F" : "#1E293B"
            }, dest.city.split(" ")[0])
          ]);
        })
      ]),

      // Active Pin Info Drawer
      activePin && React.createElement("div", { className: "map-info-drawer" }, [
        React.createElement("button", {
          onClick: () => setActivePin(null),
          className: "absolute top-2 right-2 text-stone-400 hover:text-stone-700 text-sm"
        }, "✕"),
        React.createElement("div", { className: "flex items-center gap-2 mb-1.5" }, [
          React.createElement("span", { className: "text-[10px] uppercase font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded" }, activePin.category),
          React.createElement(CrowdMeter, { level: activePin.crowdLevel, percent: activePin.crowdPercent, compact: true })
        ]),
        React.createElement("h4", { className: "font-bold text-sm text-stone-900 mb-1" }, activePin.name),
        React.createElement("p", { className: "text-xs text-stone-500 mb-2" }, `📍 ${activePin.city}, ${activePin.state}`),
        React.createElement("p", { className: "text-xs text-stone-600 line-clamp-2 mb-3" }, activePin.tagline),
        React.createElement("div", { className: "flex items-center justify-between border-t border-stone-100 pt-2" }, [
          React.createElement("span", { className: "text-xs font-bold text-[#D9534F]" }, `From ₹${activePin.startingPrice.toLocaleString("en-IN")}`),
          React.createElement("button", {
            onClick: () => onSelectDestination(activePin),
            className: "btn btn-primary btn-sm text-xs py-1 px-3"
          }, "Route Guide →")
        ])
      ])
    ])
  ]);
}

// --- Packages & Booking Page Component ---
function PackagesPage({ packages, onBookPackage, onOpenGuideModal, guides }) {
  const [durationFilter, setDurationFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchDur = durationFilter === "all" || pkg.durationType === durationFilter;
      const matchDiff = difficultyFilter === "all" || pkg.difficulty.toLowerCase() === difficultyFilter.toLowerCase();
      return matchDur && matchDiff;
    });
  }, [packages, durationFilter, difficultyFilter]);

  return React.createElement("div", { className: "page-packages pb-20" }, [
    // Header
    React.createElement("div", { className: "bg-[#F4F1EA] py-12 border-b border-stone-200" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("span", { className: "section-tag" }, "Curated Immersions"),
        React.createElement("h1", { className: "text-3xl md:text-4xl font-bold font-heading text-stone-900 mb-2" }, "Heritage Packages & Booking"),
        React.createElement("p", { className: "text-stone-600 max-w-2xl text-sm md:text-base" },
          "Experience deep, authentic journeys led by local masters. Every package includes certified native guides, family homestays, hands-on workshops, and community fund contributions."
        )
      ])
    ]),

    React.createElement("div", { className: "container py-8" }, [
      // Filters
      React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-4 rounded-xl border border-stone-200 shadow-sm" }, [
        React.createElement("div", { className: "flex flex-wrap items-center gap-2" }, [
          React.createElement("span", { className: "text-xs font-bold text-stone-500 mr-2" }, "Duration:"),
          React.createElement("button", {
            onClick: () => setDurationFilter("all"),
            className: `px-3 py-1 rounded-md text-xs font-semibold ${durationFilter === "all" ? "bg-[#D9534F] text-white" : "bg-stone-100 text-stone-700"}`
          }, "All Durations"),
          React.createElement("button", {
            onClick: () => setDurationFilter("day"),
            className: `px-3 py-1 rounded-md text-xs font-semibold ${durationFilter === "day" ? "bg-[#D9534F] text-white" : "bg-stone-100 text-stone-700"}`
          }, "Day Tours (5-8 hrs)"),
          React.createElement("button", {
            onClick: () => setDurationFilter("weekend"),
            className: `px-3 py-1 rounded-md text-xs font-semibold ${durationFilter === "weekend" ? "bg-[#D9534F] text-white" : "bg-stone-100 text-stone-700"}`
          }, "Weekend Immersions (2-3 Days)"),
          React.createElement("button", {
            onClick: () => setDurationFilter("multiday"),
            className: `px-3 py-1 rounded-md text-xs font-semibold ${durationFilter === "multiday" ? "bg-[#D9534F] text-white" : "bg-stone-100 text-stone-700"}`
          }, "Multi-Day Odysseys (4+ Days)")
        ]),

        React.createElement("div", { className: "flex items-center gap-2" }, [
          React.createElement("span", { className: "text-xs font-bold text-stone-500" }, "Difficulty:"),
          React.createElement("select", {
            value: difficultyFilter,
            onChange: (e) => setDifficultyFilter(e.target.value),
            className: "text-xs font-semibold px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 outline-none"
          }, [
            React.createElement("option", { value: "all" }, "All Physical Levels"),
            React.createElement("option", { value: "easy" }, "Easy (Relaxed Village Walk)"),
            React.createElement("option", { value: "moderate" }, "Moderate (Steps & Cobblestone)"),
            React.createElement("option", { value: "challenging" }, "Challenging (High Altitude / Canyons)")
          ])
        ])
      ]),

      // Packages Grid
      React.createElement("div", { className: "card-grid" },
        filteredPackages.map((pkg) =>
          React.createElement("div", { key: pkg.id, className: "package-card" }, [
            React.createElement("div", { className: "card-img-wrap" }, [
              React.createElement("img", { src: pkg.image, alt: pkg.title, className: "card-img" }),
              React.createElement("div", { className: "card-badges-top" }, [
                React.createElement("span", { className: "category-badge bg-[#D9534F]" }, pkg.badge),
                React.createElement("span", { className: "bg-black/60 text-white text-[11px] font-bold px-2 py-0.5 rounded-full" }, pkg.duration)
              ])
            ]),
            React.createElement("div", { className: "card-body" }, [
              React.createElement("div", { className: "card-location" }, [
                React.createElement(Icons.MapPin, { className: "w-3.5 h-3.5 text-[#D9534F]" }),
                `${pkg.city}, ${pkg.state}`
              ]),
              React.createElement("h3", { className: "card-title text-lg" }, pkg.title),

              // Guide pill
              React.createElement("div", { className: "package-guide-pill" }, [
                React.createElement("img", { src: pkg.guideAvatar, className: "guide-mini-avatar" }),
                React.createElement("div", { className: "text-xs" }, [
                  React.createElement("span", { className: "font-bold text-stone-800" }, pkg.guideName),
                  React.createElement("span", { className: "text-stone-500 block text-[10px]" }, pkg.guideRole)
                ])
              ]),

              // Amenities
              React.createElement("ul", { className: "package-amenities-list" },
                pkg.amenities.slice(0, 3).map((amenity, idx) =>
                  React.createElement("li", { key: idx }, [
                    React.createElement("span", { className: "amenity-check" }, "✓"),
                    React.createElement("span", null, amenity)
                  ])
                )
              ),

              React.createElement("div", { className: "card-footer" }, [
                React.createElement("div", { className: "card-price-block" }, [
                  React.createElement("div", { className: "flex items-baseline gap-1" }, [
                    React.createElement("span", { className: "text-xs text-stone-400 line-through" }, `₹${pkg.originalPrice?.toLocaleString("en-IN")}`),
                    React.createElement("span", { className: "price-amount" }, `₹${pkg.price.toLocaleString("en-IN")}`)
                  ]),
                  React.createElement("span", { className: "text-[10px] text-emerald-700 font-bold" }, "Includes guide fee & tax")
                ]),
                React.createElement("button", {
                  onClick: () => onBookPackage(pkg),
                  className: "btn btn-primary btn-sm font-bold"
                }, "Book Now →")
              ])
            ])
          ])
        )
      )
    ])
  ]);
}

// --- Join as a Local Guide Page Component ---
function GuideOnboardingPage({ onGuideRegistered }) {
  const [step, setStep] = useState(1);
  const [toursPerWeek, setToursPerWeek] = useState(3);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    languages: "Hindi, English",
    niche: "Prehistoric Metallurgy & Tribal Crafts",
    experienceYears: "5",
    bio: "",
    sampleTour: "",
    idType: "Aadhaar / Voter ID"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic earnings estimator
  const estimatedMonthlyEarnings = toursPerWeek * 3500 * 4;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onGuideRegistered) {
      onGuideRegistered({
        id: `guide-${Date.now()}`,
        name: formData.fullName,
        city: formData.city,
        state: formData.state,
        rating: 5.0,
        reviewsCount: 1,
        experienceYears: Number(formData.experienceYears) || 3,
        toursCount: 1,
        specialties: [formData.niche],
        languages: formData.languages.split(",").map(s => s.trim()),
        badges: ["Newly Certified Guide", "Native Guardian"],
        bio: formData.bio || "Passionate native storyteller dedicated to preserving Indian heritage.",
        avatar: "assets/images/destinations/hampi.png"
      });
    }
  };

  return React.createElement("div", { className: "page-guide-onboarding pb-20" }, [
    // Header
    React.createElement("div", { className: "bg-gradient-to-r from-[#D9534F] to-[#B83E3A] text-white py-14 text-center" }, [
      React.createElement("div", { className: "container max-w-3xl" }, [
        React.createElement("span", { className: "inline-block px-3 py-1 rounded-full bg-white/20 text-[#F0AD4E] text-xs font-bold uppercase tracking-wider mb-3" }, "Empowering Local Communities"),
        React.createElement("h1", { className: "text-3xl md:text-5xl font-bold font-heading mb-3 text-white" }, "Become a Certified GoBeyond Local Guide"),
        React.createElement("p", { className: "text-white/90 text-sm md:text-base leading-relaxed" },
          "Share the living secrets of your hometown with conscious travelers from around the world. Earn fair compensation with guaranteed 75%+ direct payouts."
        )
      ])
    ]),

    React.createElement("div", { className: "container py-12 max-w-4xl" }, [
      // Earnings Estimator Slider
      React.createElement("div", { className: "bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-md mb-12" }, [
        React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-[#D9534F] block mb-1" }, "Transparent Economics"),
        React.createElement("h3", { className: "text-xl font-bold text-stone-900 mb-2 font-heading" }, "How Much Can You Earn as a GoBeyond Guide?"),
        React.createElement("p", { className: "text-xs text-stone-500 mb-6" },
          "Unlike agencies taking 70% cuts, GoBeyond guarantees guides retain ₹3,000–₹4,500 per day tour plus direct traveler gratuities."
        ),

        React.createElement("div", { className: "flex flex-col md:flex-row items-center justify-between gap-8 bg-[#FEF8EC] p-6 rounded-xl border border-[#F0AD4E]/40" }, [
          React.createElement("div", { className: "flex-1 w-full" }, [
            React.createElement("div", { className: "flex justify-between text-sm font-bold text-stone-800 mb-2" }, [
              React.createElement("span", null, "Tours Hosted Per Week:"),
              React.createElement("span", { className: "text-lg text-[#D9534F]" }, `${toursPerWeek} Tours / week`)
            ]),
            React.createElement("input", {
              type: "range",
              min: "1",
              max: "6",
              value: toursPerWeek,
              onChange: (e) => setToursPerWeek(Number(e.target.value)),
              className: "w-full accent-[#D9534F] cursor-pointer"
            }),
            React.createElement("div", { className: "flex justify-between text-[11px] text-stone-500 mt-1" }, [
              React.createElement("span", null, "1 Tour (Weekend)"),
              React.createElement("span", null, "3 Tours (Standard)"),
              React.createElement("span", null, "6 Tours (Full-time)")
            ])
          ]),

          React.createElement("div", { className: "text-center md:text-right border-t md:border-t-0 md:border-l border-amber-200 pt-4 md:pt-0 md:pl-8 shrink-0" }, [
            React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-[#D48F29] block" }, "Estimated Monthly Income"),
            React.createElement("div", { className: "text-3xl font-black text-stone-900 mt-1" }, `₹${estimatedMonthlyEarnings.toLocaleString("en-IN")}`),
            React.createElement("span", { className: "text-[11px] text-emerald-700 font-bold block mt-0.5" }, "✓ Paid directly to your bank account weekly")
          ])
        ])
      ]),

      // Onboarding Form or Submission Success
      isSubmitted ? React.createElement("div", {
        className: "bg-white p-10 rounded-2xl border border-stone-200 text-center shadow-lg animate-slideIn"
      }, [
        React.createElement("div", { className: "w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4" }, "✓"),
        React.createElement("h2", { className: "text-2xl font-bold text-stone-900 font-heading mb-2" }, "Application Received!"),
        React.createElement("p", { className: "text-sm text-stone-600 max-w-md mx-auto mb-6" },
          `Thank you, ${formData.fullName}! Our Heritage Advisory Council will review your credentials for ${formData.city}, ${formData.state} and contact you within 48 hours for your phone verification.`
        ),
        React.createElement("div", { className: "inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-lg text-xs font-bold border border-emerald-200 mb-6" }, [
          "⭐ Verified Guide Badge Pre-Approved"
        ]),
        React.createElement("div", null, [
          React.createElement("button", {
            onClick: () => setIsSubmitted(false),
            className: "btn btn-outline btn-sm"
          }, "Edit or Submit Another Application")
        ])
      ]) : React.createElement("form", {
        onSubmit: handleSubmit,
        className: "bg-white p-8 md:p-10 rounded-2xl border border-stone-200 shadow-md space-y-6"
      }, [
        React.createElement("div", { className: "border-b border-stone-100 pb-4 mb-6" }, [
          React.createElement("h3", { className: "text-xl font-bold text-stone-900 font-heading" }, "Local Guide Registration Form"),
          React.createElement("p", { className: "text-xs text-stone-500 mt-0.5" }, "Fill out your details to join our network of certified Indian cultural custodians.")
        ]),

        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Full Name *"),
            React.createElement("input", {
              type: "text",
              required: true,
              value: formData.fullName,
              onChange: (e) => setFormData({ ...formData, fullName: e.target.value }),
              placeholder: "e.g., Ramesh Mandavi",
              className: "form-control"
            })
          ]),
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Mobile Number (WhatsApp) *"),
            React.createElement("input", {
              type: "tel",
              required: true,
              value: formData.phone,
              onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
              placeholder: "+91 98765 43210",
              className: "form-control"
            })
          ]),
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Native City / Town in India *"),
            React.createElement("input", {
              type: "text",
              required: true,
              value: formData.city,
              onChange: (e) => setFormData({ ...formData, city: e.target.value }),
              placeholder: "e.g., Jagdalpur, Bastar",
              className: "form-control"
            })
          ]),
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Indian State *"),
            React.createElement("input", {
              type: "text",
              required: true,
              value: formData.state,
              onChange: (e) => setFormData({ ...formData, state: e.target.value }),
              placeholder: "e.g., Chhattisgarh",
              className: "form-control"
            })
          ])
        ]),

        React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Languages Spoken *"),
            React.createElement("input", {
              type: "text",
              required: true,
              value: formData.languages,
              onChange: (e) => setFormData({ ...formData, languages: e.target.value }),
              placeholder: "e.g., Hindi, English, Gondi, Halbi",
              className: "form-control"
            })
          ]),
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Heritage Expertise / Niche *"),
            React.createElement("input", {
              type: "text",
              required: true,
              value: formData.niche,
              onChange: (e) => setFormData({ ...formData, niche: e.target.value }),
              placeholder: "e.g., Lost-wax bronze casting, Buddhist frescoes",
              className: "form-control"
            })
          ])
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Years of Guiding / Living Experience in this Region *"),
          React.createElement("input", {
            type: "number",
            required: true,
            min: "1",
            value: formData.experienceYears,
            onChange: (e) => setFormData({ ...formData, experienceYears: e.target.value }),
            className: "form-control"
          })
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Your Story & Heritage Background *"),
          React.createElement("textarea", {
            rows: 3,
            required: true,
            value: formData.bio,
            onChange: (e) => setFormData({ ...formData, bio: e.target.value }),
            placeholder: "Tell us about your lineage, relationship to local elders, and why you are passionate about guiding...",
            className: "form-control"
          })
        ]),

        // Verification Placeholder Mockup
        React.createElement("div", { className: "p-4 rounded-xl bg-stone-50 border-2 border-dashed border-stone-300 text-center" }, [
          React.createElement("div", { className: "text-2xl mb-1" }, "📄"),
          React.createElement("span", { className: "text-xs font-bold text-stone-700 block" }, "Upload Verification ID (Aadhaar / Passport / Guide License Placeholder)"),
          React.createElement("span", { className: "text-[11px] text-stone-500 block mb-2" }, "PNG, JPG or PDF up to 10MB (Simulated upload)"),
          React.createElement("input", {
            type: "file",
            className: "text-xs text-stone-500 file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-[#D9534F] file:text-white hover:file:bg-[#B83E3A]"
          })
        ]),

        React.createElement("button", {
          type: "submit",
          className: "btn btn-primary btn-lg w-full font-bold"
        }, "Submit Application for Verification →")
      ])
    ])
  ]);
}

// --- Reviews & Community Page Component ---
function ReviewsPage({ reviews, onOpenReviewModal }) {
  return React.createElement("div", { className: "page-reviews pb-20" }, [
    // Header
    React.createElement("div", { className: "bg-[#F4F1EA] py-12 border-b border-stone-200" }, [
      React.createElement("div", { className: "container flex flex-col md:flex-row md:items-end justify-between gap-6" }, [
        React.createElement("div", null, [
          React.createElement("span", { className: "section-tag" }, "Conscious Community"),
          React.createElement("h1", { className: "text-3xl md:text-4xl font-bold font-heading text-stone-900 mb-2" }, "Traveler Reviews & Community Stories"),
          React.createElement("p", { className: "text-stone-600 max-w-2xl text-sm md:text-base" },
            "Read honest feedback from travelers who chose to go beyond the tourist traps. See how our local guides and artisan partners responded."
          )
        ]),
        React.createElement("button", {
          onClick: onOpenReviewModal,
          className: "btn btn-primary font-bold shrink-0"
        }, "✍️ Write a Review")
      ])
    ]),

    React.createElement("div", { className: "container py-10" }, [
      // Rating Overview Bar
      React.createElement("div", { className: "bg-white p-6 rounded-2xl border border-stone-200 shadow-sm mb-10 flex flex-col md:flex-row items-center justify-between gap-6" }, [
        React.createElement("div", { className: "flex items-center gap-4" }, [
          React.createElement("div", { className: "text-4xl font-black text-[#D9534F] font-heading" }, "4.98"),
          React.createElement("div", null, [
            React.createElement("div", { className: "review-stars text-base" }, "★★★★★"),
            React.createElement("p", { className: "text-xs text-stone-500 font-semibold mt-0.5" }, "Based on 1,420+ verified conscious travelers")
          ])
        ]),
        React.createElement("div", { className: "flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-600" }, [
          React.createElement("span", { className: "flex items-center gap-1 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full" }, "✓ 100% Verified Bookings"),
          React.createElement("span", { className: "flex items-center gap-1 text-amber-800 bg-amber-50 px-3 py-1.5 rounded-full" }, "★ 98.4% 5-Star Ratings"),
          React.createElement("span", { className: "flex items-center gap-1 text-blue-800 bg-blue-50 px-3 py-1.5 rounded-full" }, "🛡️ Zero Middlemen")
        ])
      ]),

      // Reviews Grid
      React.createElement("div", { className: "card-grid-2" },
        reviews.map((rev) =>
          React.createElement("div", { key: rev.id, className: "review-card" }, [
            React.createElement("div", { className: "flex items-start justify-between gap-4" }, [
              React.createElement("div", { className: "review-author-wrap" }, [
                React.createElement("img", { src: rev.authorAvatar, alt: rev.author, className: "review-avatar" }),
                React.createElement("div", null, [
                  React.createElement("div", { className: "flex items-center gap-2" }, [
                    React.createElement("h4", { className: "font-bold text-stone-900 text-sm" }, rev.author),
                    rev.verifiedTraveler && React.createElement("span", {
                      className: "text-[10px] font-extrabold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full"
                    }, "VERIFIED")
                  ]),
                  React.createElement("p", { className: "text-xs text-stone-500" }, `${rev.authorCity} • ${rev.date}`)
                ])
              ]),
              React.createElement("div", { className: "review-stars" }, "★★★★★")
            ]),

            React.createElement("div", null, [
              React.createElement("span", { className: "text-xs font-semibold text-[#D9534F] block mb-1" }, `📍 ${rev.destinationName}`),
              React.createElement("h4", { className: "font-bold text-base text-stone-900 mb-2 font-heading" }, rev.title),
              React.createElement("p", { className: "text-sm text-stone-600 leading-relaxed" }, rev.comment)
            ]),

            // Tags
            rev.tags && React.createElement("div", { className: "flex flex-wrap gap-1.5" },
              rev.tags.map((t, idx) =>
                React.createElement("span", { key: idx, className: "px-2 py-0.5 rounded text-[11px] font-medium bg-stone-100 text-stone-600" }, `#${t}`)
              )
            ),

            // Guide Response
            rev.guideResponse && React.createElement("div", { className: "review-response" }, [
              React.createElement("div", { className: "flex items-center gap-1.5 font-bold text-xs text-stone-800 mb-1" }, [
                React.createElement("span", null, "💬 Response from Guide"),
                React.createElement("span", { className: "text-[#D9534F]" }, rev.guideResponse.guideName),
                React.createElement("span", { className: "text-stone-400 font-normal" }, `(${rev.guideResponse.role})`)
              ]),
              React.createElement("p", { className: "text-xs text-stone-600 italic" }, `“${rev.guideResponse.text}”`)
            ])
          ])
        )
      )
    ])
  ]);
}

// --- Contact & FAQs Page Component ---
function ContactPage() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return React.createElement("div", { className: "page-contact pb-20" }, [
    // Header
    React.createElement("div", { className: "bg-[#F4F1EA] py-12 border-b border-stone-200" }, [
      React.createElement("div", { className: "container" }, [
        React.createElement("span", { className: "section-tag" }, "We Are Here To Assist"),
        React.createElement("h1", { className: "text-3xl md:text-4xl font-bold font-heading text-stone-900 mb-2" }, "Contact GoBeyond & Help Desk"),
        React.createElement("p", { className: "text-stone-600 max-w-2xl text-sm md:text-base" },
          "Have questions about route logistics, physical difficulty, or custom private heritage expeditions across India? Our cultural concierge desk is on standby."
        )
      ])
    ]),

    React.createElement("div", { className: "container py-12" }, [
      // Contact Info Grid
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" }, [
        React.createElement("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 shadow-sm text-center" }, [
          React.createElement("div", { className: "w-12 h-12 rounded-xl bg-[#FDF1F0] text-[#D9534F] flex items-center justify-center text-xl mx-auto mb-3" }, "📞"),
          React.createElement("h4", { className: "font-bold text-stone-900 mb-1" }, "24/7 Traveler Help Desk"),
          React.createElement("p", { className: "text-xs text-stone-500 mb-2" }, "For on-ground route questions & emergencies"),
          React.createElement("p", { className: "text-sm font-bold text-[#D9534F]" }, "+91 94210 58732")
        ]),
        React.createElement("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 shadow-sm text-center" }, [
          React.createElement("div", { className: "w-12 h-12 rounded-xl bg-[#FEF8EC] text-[#D48F29] flex items-center justify-center text-xl mx-auto mb-3" }, "✉️"),
          React.createElement("h4", { className: "font-bold text-stone-900 mb-1" }, "Email Support"),
          React.createElement("p", { className: "text-xs text-stone-500 mb-2" }, "Response within 4 hours"),
          React.createElement("p", { className: "text-sm font-bold text-[#0A4D68]" }, "concierge@gobeyondtravels.org")
        ]),
        React.createElement("div", { className: "p-6 rounded-2xl bg-white border border-stone-200 shadow-sm text-center" }, [
          React.createElement("div", { className: "w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl mx-auto mb-3" }, "📍"),
          React.createElement("h4", { className: "font-bold text-stone-900 mb-1" }, "Cultural Hubs"),
          React.createElement("p", { className: "text-xs text-stone-500 mb-2" }, "Desks in Hampi, Bastar, & Varanasi"),
          React.createElement("p", { className: "text-sm font-bold text-stone-700" }, "Heritage Quarters, India")
        ])
      ]),

      // Interactive Contact Form
      React.createElement("div", { className: "bg-white p-8 md:p-10 rounded-2xl border border-stone-200 shadow-sm mb-16 max-w-3xl mx-auto" }, [
        React.createElement("h3", { className: "text-xl font-bold text-stone-900 font-heading mb-1" }, "Send an Inquiry or Custom Itinerary Request"),
        React.createElement("p", { className: "text-xs text-stone-500 mb-6" }, "We typically respond within 4 hours with comprehensive route and guide availability."),

        contactSubmitted ? React.createElement("div", {
          className: "p-6 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-center"
        }, [
          React.createElement("div", { className: "text-2xl mb-1" }, "✓"),
          React.createElement("h4", { className: "font-bold text-base mb-1" }, "Message Received"),
          React.createElement("p", { className: "text-xs" }, "Our regional heritage coordinator will review your request and get back to you immediately.")
        ]) : React.createElement("form", {
          onSubmit: (e) => { e.preventDefault(); setContactSubmitted(true); },
          className: "space-y-4"
        }, [
          React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
            React.createElement("div", { className: "form-group" }, [
              React.createElement("label", { className: "form-label" }, "Your Name *"),
              React.createElement("input", { type: "text", required: true, placeholder: "e.g., Ananya Sharma", className: "form-control" })
            ]),
            React.createElement("div", { className: "form-group" }, [
              React.createElement("label", { className: "form-label" }, "Your Email *"),
              React.createElement("input", { type: "email", required: true, placeholder: "name@example.com", className: "form-control" })
            ])
          ]),
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Inquiry Category *"),
            React.createElement("select", { className: "form-control" }, [
              React.createElement("option", null, "Custom Private Heritage Itinerary"),
              React.createElement("option", null, "Route & Transport Connectivity Question"),
              React.createElement("option", null, "Guide Partnerships & Onboarding"),
              React.createElement("option", null, "Corporate / Academic Group Expedition")
            ])
          ]),
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Your Message or Route Questions *"),
            React.createElement("textarea", { rows: 4, required: true, placeholder: "Describe your dates, starting city, group size, and any special accessibility requirements...", className: "form-control" })
          ]),
          React.createElement("button", { type: "submit", className: "btn btn-primary w-full font-bold" }, "Submit Message to Concierge Desk →")
        ])
      ]),

      // FAQ Accordion
      React.createElement("div", { className: "max-w-3xl mx-auto" }, [
        React.createElement("div", { className: "text-center mb-8" }, [
          React.createElement("span", { className: "section-tag" }, "Got Questions?"),
          React.createElement("h2", { className: "section-title text-2xl" }, "Frequently Asked Questions")
        ]),

        React.createElement("div", { className: "faq-list" },
          GoBeyondData.faqs.map((faq, idx) =>
            React.createElement("div", {
              key: faq.id,
              className: `faq-item ${activeFaq === idx ? "open" : ""}`
            }, [
              React.createElement("div", {
                onClick: () => toggleFaq(idx),
                className: "faq-question"
              }, [
                React.createElement("span", null, faq.question),
                React.createElement("span", { className: "faq-icon text-[#D9534F]" }, "▼")
              ]),
              React.createElement("div", { className: "faq-answer" },
                React.createElement("p", null, faq.answer)
              )
            ])
          )
        )
      ])
    ])
  ]);
}

// --- Booking & Checkout Modal Component ---
function BookingModal({ isOpen, onClose, selectedPackage, onSuccessBooking }) {
  const [step, setStep] = useState(1);
  const [travelDate, setTravelDate] = useState("2026-10-15");
  const [travelersCount, setTravelersCount] = useState(2);
  const [languagePref, setLanguagePref] = useState("English");
  const [travelerName, setTravelerName] = useState("");
  const [travelerEmail, setTravelerEmail] = useState("");
  const [travelerPhone, setTravelerPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [bookingCode, setBookingCode] = useState("");

  if (!isOpen || !selectedPackage) return null;

  const basePrice = selectedPackage.price || 3500;
  const guideFee = 1200;
  const heritageFundPledge = Math.round(basePrice * 0.10);
  const taxes = Math.round((basePrice + guideFee) * 0.05);
  const totalAmount = (basePrice * travelersCount) + guideFee + heritageFundPledge + taxes;

  const handleNext = () => {
    if (step === 3) {
      // Generate unique confirmation code
      const code = `GB-${Math.floor(1000 + Math.random() * 9000)}-${(selectedPackage.city || "IND").toUpperCase().slice(0, 4)}`;
      setBookingCode(code);
      setStep(4);
    } else {
      setStep(step + 1);
    }
  };

  return React.createElement("div", { className: "modal-backdrop active", onClick: onClose }, [
    React.createElement("div", {
      className: "modal-dialog",
      onClick: (e) => e.stopPropagation()
    }, [
      React.createElement("button", {
        onClick: onClose,
        className: "modal-close-btn"
      }, "✕"),

      // Step indicator
      React.createElement("div", { className: "step-indicator" }, [
        React.createElement("div", { className: `step-item ${step >= 1 ? (step === 1 ? "active" : "completed") : ""}` }, [
          React.createElement("div", { className: "step-circle" }, "1"),
          React.createElement("span", { className: "step-text" }, "Dates & Guests")
        ]),
        React.createElement("div", { className: `step-item ${step >= 2 ? (step === 2 ? "active" : "completed") : ""}` }, [
          React.createElement("div", { className: "step-circle" }, "2"),
          React.createElement("span", { className: "step-text" }, "Traveler Info")
        ]),
        React.createElement("div", { className: `step-item ${step >= 3 ? (step === 3 ? "active" : "completed") : ""}` }, [
          React.createElement("div", { className: "step-circle" }, "3"),
          React.createElement("span", { className: "step-text" }, "Checkout & Pay")
        ]),
        React.createElement("div", { className: `step-item ${step === 4 ? "completed" : ""}` }, [
          React.createElement("div", { className: "step-circle" }, "✓"),
          React.createElement("span", { className: "step-text" }, "Voucher")
        ])
      ]),

      // Step 1: Dates & Guests
      step === 1 && React.createElement("div", { className: "space-y-4" }, [
        React.createElement("h3", { className: "text-xl font-bold font-heading text-stone-900" }, selectedPackage.title),
        React.createElement("p", { className: "text-xs text-stone-500" }, `📍 ${selectedPackage.city || "India"} • Led by Certified Guide`),

        React.createElement("div", { className: "form-group mt-4" }, [
          React.createElement("label", { className: "form-label" }, "Select Tour Date"),
          React.createElement("input", {
            type: "date",
            value: travelDate,
            onChange: (e) => setTravelDate(e.target.value),
            className: "form-control"
          })
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Number of Travelers (Max 6 for crowd sanctity)"),
          React.createElement("div", { className: "flex items-center gap-3" }, [
            [1, 2, 3, 4, 5, 6].map((num) =>
              React.createElement("button", {
                key: num,
                type: "button",
                onClick: () => setTravelersCount(num),
                className: `flex-1 py-2 rounded-lg text-xs font-bold border transition-all ${
                  travelersCount === num ? "bg-[#D9534F] text-white border-[#D9534F]" : "bg-stone-50 text-stone-700 border-stone-200"
                }`
              }, num)
            )
          ])
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Preferred Guide Language"),
          React.createElement("select", {
            value: languagePref,
            onChange: (e) => setLanguagePref(e.target.value),
            className: "form-control"
          }, [
            React.createElement("option", null, "English (Fluent)"),
            React.createElement("option", null, "Hindi (Standard)"),
            React.createElement("option", null, "Regional Native Tongue")
          ])
        ]),

        React.createElement("div", { className: "flex justify-end pt-4" }, [
          React.createElement("button", {
            onClick: () => setStep(2),
            className: "btn btn-primary font-bold"
          }, "Continue to Traveler Info →")
        ])
      ]),

      // Step 2: Traveler Details
      step === 2 && React.createElement("div", { className: "space-y-4" }, [
        React.createElement("h3", { className: "text-xl font-bold font-heading text-stone-900" }, "Lead Traveler Details"),
        React.createElement("p", { className: "text-xs text-stone-500" }, "Your guide will receive this info to coordinate exact meeting points."),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Full Name *"),
          React.createElement("input", {
            type: "text",
            required: true,
            placeholder: "e.g., Anita Sharma",
            value: travelerName,
            onChange: (e) => setTravelerName(e.target.value),
            className: "form-control"
          })
        ]),

        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, [
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "Email Address *"),
            React.createElement("input", {
              type: "email",
              required: true,
              placeholder: "anita@example.com",
              value: travelerEmail,
              onChange: (e) => setTravelerEmail(e.target.value),
              className: "form-control"
            })
          ]),
          React.createElement("div", { className: "form-group" }, [
            React.createElement("label", { className: "form-label" }, "WhatsApp Phone *"),
            React.createElement("input", {
              type: "tel",
              required: true,
              placeholder: "+91 98765 43210",
              value: travelerPhone,
              onChange: (e) => setTravelerPhone(e.target.value),
              className: "form-control"
            })
          ])
        ]),

        React.createElement("div", { className: "flex justify-between pt-4" }, [
          React.createElement("button", {
            onClick: () => setStep(1),
            className: "btn btn-outline"
          }, "← Back"),
          React.createElement("button", {
            onClick: () => setStep(3),
            className: "btn btn-primary font-bold"
          }, "Proceed to Price Breakdown & Pay →")
        ])
      ]),

      // Step 3: Breakdown & Mock Payment
      step === 3 && React.createElement("div", { className: "space-y-4" }, [
        React.createElement("h3", { className: "text-xl font-bold font-heading text-stone-900" }, "Transparent Price Breakdown"),

        // Price breakdown box
        React.createElement("div", { className: "price-breakdown-box" }, [
          React.createElement("div", { className: "price-row" }, [
            React.createElement("span", null, `Base Package Fare (${travelersCount} traveler${travelersCount > 1 ? "s" : ""})`),
            React.createElement("span", { className: "font-mono font-bold" }, `₹${(basePrice * travelersCount).toLocaleString("en-IN")}`)
          ]),
          React.createElement("div", { className: "price-row" }, [
            React.createElement("span", null, "Certified Indigenous Guide Fee"),
            React.createElement("span", { className: "font-mono font-bold" }, `₹${guideFee.toLocaleString("en-IN")}`)
          ]),
          React.createElement("div", { className: "price-row text-emerald-800 font-semibold" }, [
            React.createElement("span", null, "🌱 10% Community Heritage Preservation Pledge"),
            React.createElement("span", { className: "font-mono font-bold" }, `₹${heritageFundPledge.toLocaleString("en-IN")}`)
          ]),
          React.createElement("div", { className: "price-row" }, [
            React.createElement("span", null, "Applicable Goods & Services Tax (GST 5%)"),
            React.createElement("span", { className: "font-mono font-bold" }, `₹${taxes.toLocaleString("en-IN")}`)
          ]),
          React.createElement("div", { className: "price-row total" }, [
            React.createElement("span", null, "Total Guaranteed Price"),
            React.createElement("span", { className: "text-xl font-black text-[#D9534F] font-mono" }, `₹${totalAmount.toLocaleString("en-IN")}`)
          ])
        ]),

        // Payment Gateway Tabs
        React.createElement("div", null, [
          React.createElement("label", { className: "form-label" }, "Select Mockup Payment Gateway"),
          React.createElement("div", { className: "payment-tabs" }, [
            React.createElement("button", {
              type: "button",
              onClick: () => setPaymentMethod("card"),
              className: `pay-tab-btn ${paymentMethod === "card" ? "active" : ""}`
            }, "💳 Card"),
            React.createElement("button", {
              type: "button",
              onClick: () => setPaymentMethod("upi"),
              className: `pay-tab-btn ${paymentMethod === "upi" ? "active" : ""}`
            }, "📱 UPI / QR"),
            React.createElement("button", {
              type: "button",
              onClick: () => setPaymentMethod("applepay"),
              className: `pay-tab-btn ${paymentMethod === "applepay" ? "active" : ""}`
            }, " Apple Pay"),
            React.createElement("button", {
              type: "button",
              onClick: () => setPaymentMethod("paypal"),
              className: `pay-tab-btn ${paymentMethod === "paypal" ? "active" : ""}`
            }, "PayPal")
          ]),

          // Card UI simulation
          paymentMethod === "card" && React.createElement("div", { className: "space-y-3 bg-stone-50 p-4 rounded-xl border border-stone-200" }, [
            React.createElement("input", { type: "text", placeholder: "4532 •••• •••• 8921 (Visa/Mastercard)", defaultValue: "4532 8920 1142 8921", className: "form-control text-sm font-mono" }),
            React.createElement("div", { className: "grid grid-cols-2 gap-3" }, [
              React.createElement("input", { type: "text", placeholder: "MM/YY", defaultValue: "12/28", className: "form-control text-sm font-mono" }),
              React.createElement("input", { type: "password", placeholder: "CVV", defaultValue: "782", className: "form-control text-sm font-mono" })
            ])
          ]),

          // UPI UI simulation
          paymentMethod === "upi" && React.createElement("div", { className: "text-center bg-stone-50 p-4 rounded-xl border border-stone-200" }, [
            React.createElement("div", { className: "w-28 h-28 bg-white border border-stone-300 mx-auto rounded-lg flex items-center justify-center font-mono text-[10px] text-stone-500 mb-2" }, "[QR MOCKUP]"),
            React.createElement("input", { type: "text", placeholder: "traveler@okaxis / gpay", defaultValue: "anita@upi", className: "form-control text-xs text-center font-mono" })
          ])
        ]),

        React.createElement("div", { className: "flex justify-between pt-4" }, [
          React.createElement("button", {
            onClick: () => setStep(2),
            className: "btn btn-outline"
          }, "← Back"),
          React.createElement("button", {
            onClick: handleNext,
            className: "btn btn-primary font-bold"
          }, `Pay ₹${totalAmount.toLocaleString("en-IN")} & Confirm Tour →`)
        ])
      ]),

      // Step 4: Instant Confirmation Voucher
      step === 4 && React.createElement("div", { className: "text-center space-y-4 animate-slideIn" }, [
        React.createElement("div", { className: "w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto" }, "✓"),
        React.createElement("h3", { className: "text-2xl font-bold font-heading text-stone-900" }, "Booking Confirmed!"),
        React.createElement("p", { className: "text-xs text-stone-500" }, "Your heritage expedition is locked in with our certified local guide."),

        React.createElement("div", { className: "bg-[#FEF8EC] p-6 rounded-2xl border border-[#F0AD4E]/40 text-left space-y-2 font-mono text-xs" }, [
          React.createElement("div", { className: "flex justify-between" }, [
            React.createElement("span", { className: "text-stone-500" }, "Booking Reference:"),
            React.createElement("span", { className: "font-bold text-[#D9534F]" }, bookingCode)
          ]),
          React.createElement("div", { className: "flex justify-between" }, [
            React.createElement("span", { className: "text-stone-500" }, "Tour:"),
            React.createElement("span", { className: "font-bold text-stone-800" }, selectedPackage.title)
          ]),
          React.createElement("div", { className: "flex justify-between" }, [
            React.createElement("span", { className: "text-stone-500" }, "Date:"),
            React.createElement("span", { className: "font-bold text-stone-800" }, travelDate)
          ]),
          React.createElement("div", { className: "flex justify-between" }, [
            React.createElement("span", { className: "text-stone-500" }, "Travelers:"),
            React.createElement("span", { className: "font-bold text-stone-800" }, `${travelersCount} Person(s)`)
          ]),
          React.createElement("div", { className: "flex justify-between border-t border-amber-200 pt-2 font-bold" }, [
            React.createElement("span", { className: "text-stone-700" }, "Amount Paid:"),
            React.createElement("span", { className: "text-[#D9534F]" }, `₹${totalAmount.toLocaleString("en-IN")}`)
          ])
        ]),

        React.createElement("div", { className: "flex gap-3 justify-center pt-2" }, [
          React.createElement("button", {
            onClick: () => {
              alert(`Voucher ${bookingCode} downloaded successfully.`);
              onClose();
            },
            className: "btn btn-outline btn-sm"
          }, "📥 Download Ticket Voucher"),
          React.createElement("button", {
            onClick: onClose,
            className: "btn btn-primary btn-sm font-bold"
          }, "Done")
        ])
      ])
    ])
  ]);
}

// --- Authentication Modal Component ---
function AuthModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSimulateLogin = (provider) => {
    onLoginSuccess({
      name: "Anita Sharma",
      email: email || "anita.sharma@example.com",
      avatar: "assets/images/destinations/hampi.png",
      provider: provider || "Email"
    });
    onClose();
  };

  return React.createElement("div", { className: "modal-backdrop active", onClick: onClose }, [
    React.createElement("div", {
      className: "modal-dialog max-w-md",
      onClick: (e) => e.stopPropagation()
    }, [
      React.createElement("button", { onClick: onClose, className: "modal-close-btn" }, "✕"),

      React.createElement("div", { className: "text-center mb-6" }, [
        React.createElement("div", { className: "brand-icon mx-auto mb-3" }, [
          React.createElement(Icons.Compass, { className: "text-white" })
        ]),
        React.createElement("h3", { className: "text-2xl font-bold font-heading text-stone-900" },
          isSignUp ? "Create Your Explorer Account" : "Welcome Back, Explorer"
        ),
        React.createElement("p", { className: "text-xs text-stone-500 mt-1" },
          "Access your hidden destination bookmarks and verified guide chats."
        )
      ]),

      // Social Logins
      React.createElement("div", { className: "space-y-2 mb-6" }, [
        React.createElement("button", {
          onClick: () => handleSimulateLogin("Google"),
          className: "w-full py-2.5 px-4 rounded-xl border border-stone-300 font-semibold text-xs text-stone-700 hover:bg-stone-50 flex items-center justify-center gap-2 transition-colors"
        }, [
          React.createElement("span", { className: "font-bold text-red-500" }, "G"),
          "Continue with Google"
        ]),
        React.createElement("button", {
          onClick: () => handleSimulateLogin("Apple"),
          className: "w-full py-2.5 px-4 rounded-xl bg-black text-white font-semibold text-xs hover:bg-stone-800 flex items-center justify-center gap-2 transition-colors"
        }, [
          React.createElement("span", null, ""),
          "Continue with Apple"
        ])
      ]),

      React.createElement("div", { className: "flex items-center gap-2 my-4 text-xs text-stone-400" }, [
        React.createElement("div", { className: "flex-1 h-px bg-stone-200" }),
        React.createElement("span", null, "OR"),
        React.createElement("div", { className: "flex-1 h-px bg-stone-200" })
      ]),

      // Email/Password Form
      React.createElement("form", {
        onSubmit: (e) => { e.preventDefault(); handleSimulateLogin("Email"); },
        className: "space-y-4"
      }, [
        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Email Address"),
          React.createElement("input", {
            type: "email",
            required: true,
            placeholder: "name@example.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className: "form-control"
          })
        ]),
        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Password"),
          React.createElement("input", {
            type: "password",
            required: true,
            placeholder: "••••••••",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            className: "form-control"
          })
        ]),
        React.createElement("button", {
          type: "submit",
          className: "btn btn-primary w-full font-bold"
        }, isSignUp ? "Create Account →" : "Sign In →")
      ]),

      // Switch Tab
      React.createElement("div", { className: "text-center mt-6 pt-4 border-t border-stone-100 text-xs text-stone-600" }, [
        isSignUp ? "Already have an account? " : "Don't have an account yet? ",
        React.createElement("button", {
          onClick: () => setIsSignUp(!isSignUp),
          className: "font-bold text-[#D9534F] hover:underline"
        }, isSignUp ? "Sign In" : "Sign Up")
      ])
    ])
  ]);
}

// --- Write Review Modal Component ---
function ReviewModal({ isOpen, onClose, onReviewSubmitted, destinations }) {
  const [destName, setDestName] = useState(destinations[0]?.name || "Bastar Tribal Heritage");
  const [rating, setRating] = useState(5);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onReviewSubmitted({
      id: `rev-${Date.now()}`,
      author: authorName || "Conscious Explorer",
      authorCity: "Mumbai, India",
      authorAvatar: "assets/images/destinations/hampi.png",
      rating: rating,
      date: "Just now",
      destinationName: destName,
      verifiedTraveler: true,
      title: title || "Spectacular untouched cultural experience",
      comment: comment || "A truly memorable journey with our local guide away from all commercial tourist corridors.",
      tags: ["Authentic", "Zero Crowds", "Ethical Guide"],
      guideResponse: {
        guideName: "Local Heritage Team",
        role: "Regional Host",
        date: "Today",
        text: "Thank you for supporting our community! Your visit directly empowers local artisans."
      }
    });
    onClose();
  };

  return React.createElement("div", { className: "modal-backdrop active", onClick: onClose }, [
    React.createElement("div", {
      className: "modal-dialog max-w-lg",
      onClick: (e) => e.stopPropagation()
    }, [
      React.createElement("button", { onClick: onClose, className: "modal-close-btn" }, "✕"),

      React.createElement("h3", { className: "text-xl font-bold font-heading text-stone-900 mb-1" }, "Share Your Heritage Journey"),
      React.createElement("p", { className: "text-xs text-stone-500 mb-6" }, "Your authentic feedback helps travelers choose crowd-free cultural paths."),

      React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" }, [
        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Destination Visited"),
          React.createElement("select", {
            value: destName,
            onChange: (e) => setDestName(e.target.value),
            className: "form-control"
          }, destinations.map(d => React.createElement("option", { key: d.id, value: d.name }, `${d.name} (${d.city})`)))
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Your Rating"),
          React.createElement("div", { className: "flex gap-2" },
            [1, 2, 3, 4, 5].map((star) =>
              React.createElement("button", {
                key: star,
                type: "button",
                onClick: () => setRating(star),
                className: `text-2xl ${star <= rating ? "text-amber-500" : "text-stone-300"}`
              }, "★")
            )
          )
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Your Name *"),
          React.createElement("input", {
            type: "text",
            required: true,
            placeholder: "e.g., Dr. Radhika Sen",
            value: authorName,
            onChange: (e) => setAuthorName(e.target.value),
            className: "form-control"
          })
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Review Headline *"),
          React.createElement("input", {
            type: "text",
            required: true,
            placeholder: "e.g., Unforgettable lost-wax bronze workshop in Bastar",
            value: title,
            onChange: (e) => setTitle(e.target.value),
            className: "form-control"
          })
        ]),

        React.createElement("div", { className: "form-group" }, [
          React.createElement("label", { className: "form-label" }, "Your Experience & Guide Feedback *"),
          React.createElement("textarea", {
            rows: 3,
            required: true,
            placeholder: "Describe the crowd level, guide knowledge, and cultural highlights...",
            value: comment,
            onChange: (e) => setComment(e.target.value),
            className: "form-control"
          })
        ]),

        React.createElement("button", {
          type: "submit",
          className: "btn btn-primary w-full font-bold"
        }, "Post Verified Review →")
      ])
    ])
  ]);
}

// --- MAIN REACT APPLICATION CONTROLLER ---
function App() {
  const [activePage, setActivePage] = useState("home");
  const [destinations, setDestinations] = useState(GoBeyondData.destinations);
  const [packages, setPackages] = useState(GoBeyondData.packages);
  const [guides, setGuides] = useState(GoBeyondData.guides);
  const [reviews, setReviews] = useState(GoBeyondData.reviews);

  // Filter state passed from Home search to Destinations
  const [selectedCityFilter, setSelectedCityFilter] = useState("");

  // Modals state
  const [routeGuideModalData, setRouteGuideModalData] = useState(null);
  const [guideModalData, setGuideModalData] = useState(null);
  const [bookingModalData, setBookingModalData] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // User state
  const [currentUser, setCurrentUser] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  // Sync with browser URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && ["home", "about", "destinations", "cities", "packages", "reviews", "contact", "guide-register"].includes(hash)) {
        setActivePage(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return React.createElement("div", { className: "min-h-screen flex flex-col" }, [
    // Global Navigation
    React.createElement(Navbar, {
      key: "nav",
      activePage: activePage,
      setActivePage: (p) => {
        setActivePage(p);
        window.location.hash = p;
      },
      onOpenAuth: () => setIsAuthOpen(true),
      onOpenGuideRegister: () => {
        setActivePage("guide-register");
        window.location.hash = "guide-register";
      },
      currentUser: currentUser,
      onLogout: () => {
        setCurrentUser(null);
        showToast("Signed out safely.");
      }
    }),

    // Dynamic Main Page View
    React.createElement("main", { key: "main", className: "flex-grow" }, [
      activePage === "home" && React.createElement(HomePage, {
        destinations: destinations,
        packages: packages,
        guides: guides,
        setActivePage: (p) => { setActivePage(p); window.location.hash = p; },
        onOpenRouteGuide: (dest) => setRouteGuideModalData(dest),
        onOpenGuideModal: (g) => setGuideModalData(g),
        onBookPackage: (pkg) => setBookingModalData(pkg),
        setSelectedCityFilter: setSelectedCityFilter
      }),

      activePage === "about" && React.createElement(AboutPage, {
        setActivePage: (p) => { setActivePage(p); window.location.hash = p; }
      }),

      (activePage === "destinations" || activePage === "cities") && React.createElement(DestinationsPage, {
        destinations: destinations,
        onOpenRouteGuide: (dest) => setRouteGuideModalData(dest),
        onOpenGuideModal: (g) => setGuideModalData(g),
        onBookPackage: (pkg) => setBookingModalData(pkg),
        selectedCityFilter: selectedCityFilter,
        setSelectedCityFilter: setSelectedCityFilter
      }),

      activePage === "packages" && React.createElement(PackagesPage, {
        packages: packages,
        guides: guides,
        onBookPackage: (pkg) => setBookingModalData(pkg),
        onOpenGuideModal: (g) => setGuideModalData(g)
      }),

      activePage === "guide-register" && React.createElement(GuideOnboardingPage, {
        onGuideRegistered: (newGuide) => {
          setGuides([newGuide, ...guides]);
          showToast(`Guide profile for ${newGuide.name} registered!`);
        }
      }),

      activePage === "reviews" && React.createElement(ReviewsPage, {
        reviews: reviews,
        onOpenReviewModal: () => setIsReviewOpen(true)
      }),

      activePage === "contact" && React.createElement(ContactPage)
    ]),

    // Global Footer
    React.createElement(Footer, {
      key: "footer",
      setActivePage: (p) => { setActivePage(p); window.location.hash = p; }
    }),

    // Global Modals
    React.createElement(RouteGuideModal, {
      key: "modal-route",
      destination: routeGuideModalData,
      isOpen: !!routeGuideModalData,
      onClose: () => setRouteGuideModalData(null),
      onBookNow: (dest) => {
        setRouteGuideModalData(null);
        setBookingModalData({
          id: `custom-${dest.id}`,
          title: `${dest.name} Heritage Expedition`,
          price: dest.startingPrice,
          destinationName: dest.name,
          city: dest.city,
          guideName: dest.guideName
        });
      }
    }),

    React.createElement(GuideModal, {
      key: "modal-guide",
      guide: guideModalData,
      isOpen: !!guideModalData,
      onClose: () => setGuideModalData(null),
      onBookWithGuide: (guide) => {
        setGuideModalData(null);
        setBookingModalData({
          id: `guide-tour-${guide.id}`,
          title: `Private Expedition with ${guide.name}`,
          price: 3400,
          city: guide.city,
          guideName: guide.name
        });
      }
    }),

    React.createElement(BookingModal, {
      key: "modal-booking",
      isOpen: !!bookingModalData,
      selectedPackage: bookingModalData,
      onClose: () => setBookingModalData(null),
      onSuccessBooking: () => showToast("Tour booking confirmed!")
    }),

    React.createElement(AuthModal, {
      key: "modal-auth",
      isOpen: isAuthOpen,
      onClose: () => setIsAuthOpen(false),
      onLoginSuccess: (user) => {
        setCurrentUser(user);
        showToast(`Welcome back, ${user.name}!`);
      }
    }),

    React.createElement(ReviewModal, {
      key: "modal-review",
      isOpen: isReviewOpen,
      destinations: destinations,
      onClose: () => setIsReviewOpen(false),
      onReviewSubmitted: (newReview) => {
        setReviews([newReview, ...reviews]);
        showToast("Your review has been published!");
      }
    }),

    // Toast Notification
    React.createElement(ToastNotification, {
      key: "toast",
      toast: toast,
      onClose: () => setToast(null)
    })
  ]);
}

// Mount the React Application
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(App));
  }
});
