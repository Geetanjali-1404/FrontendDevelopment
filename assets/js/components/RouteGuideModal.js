// GOBEYOND TRAVELS - RouteGuideModal Component
// Interactive route guide showing how to reach destination via Flight, Train, or Road

window.RouteGuideModal = function({ destination, isOpen, onClose, onBookNow }) {
  const [activeTab, setActiveTab] = React.useState("flight");

  if (!isOpen || !destination) return null;

  const rg = destination.routeGuide || {};

  return React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300",
    onClick: onClose
  }, [
    React.createElement("div", {
      key: "modal-card",
      className: "modal-content-animated relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 md:p-8",
      onClick: (e) => e.stopPropagation()
    }, [
      // Close button
      React.createElement("button", {
        key: "close-btn",
        onClick: onClose,
        className: "absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors text-lg font-bold",
        "aria-label": "Close modal"
      }, "✕"),

      // Header info
      React.createElement("div", { key: "header", className: "mb-6 pr-10" }, [
        React.createElement("div", { className: "flex flex-wrap items-center gap-2 mb-2" }, [
          React.createElement("span", {
            className: "px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-800"
          }, destination.category),
          React.createElement(window.CrowdMeter, {
            level: destination.crowdLevel,
            percent: destination.crowdPercent,
            compact: true
          })
        ]),
        React.createElement("h2", {
          className: "text-2xl md:text-3xl font-bold font-heading text-stone-900 leading-tight"
        }, destination.name),
        React.createElement("p", {
          className: "text-sm text-stone-500 mt-1 flex items-center gap-1.5"
        }, [
          React.createElement("span", { key: "pin" }, "📍"),
          `${destination.city}, ${destination.state}, India`
        ])
      ]),

      // Transport Tab Buttons
      React.createElement("div", {
        key: "tab-buttons",
        className: "flex rounded-xl bg-stone-100 p-1.5 mb-6"
      }, [
        React.createElement("button", {
          key: "tab-flight",
          onClick: () => setActiveTab("flight"),
          className: `flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "flight"
              ? "bg-white text-[#0A4D68] shadow-xs"
              : "text-stone-600 hover:text-stone-900"
          }`
        }, [
          React.createElement("span", { key: "icon" }, "✈️"),
          "By Flight"
        ]),
        React.createElement("button", {
          key: "tab-train",
          onClick: () => setActiveTab("train"),
          className: `flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "train"
              ? "bg-white text-[#0A4D68] shadow-xs"
              : "text-stone-600 hover:text-stone-900"
          }`
        }, [
          React.createElement("span", { key: "icon" }, "🚆"),
          "By Train"
        ]),
        React.createElement("button", {
          key: "tab-road",
          onClick: () => setActiveTab("road"),
          className: `flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-sm font-semibold transition-all ${
            activeTab === "road"
              ? "bg-white text-[#0A4D68] shadow-xs"
              : "text-stone-600 hover:text-stone-900"
          }`
        }, [
          React.createElement("span", { key: "icon" }, "🚗"),
          "By Road"
        ])
      ]),

      // Tab Content: Flight
      activeTab === "flight" && React.createElement("div", {
        key: "flight-content",
        className: "bg-blue-50/50 rounded-xl p-5 border border-blue-100 mb-6 space-y-4"
      }, [
        React.createElement("div", { className: "flex items-start justify-between gap-4" }, [
          React.createElement("div", null, [
            React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-blue-600" }, "Primary Airport Hub"),
            React.createElement("h4", { className: "text-lg font-bold text-stone-900 mt-0.5" }, rg.flight?.hub || "Regional Airport"),
          ]),
          React.createElement("div", { className: "text-right" }, [
            React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-blue-600" }, "Transfer Time"),
            React.createElement("p", { className: "text-base font-bold text-stone-900 mt-0.5" }, rg.flight?.transferTime || "Direct Transfer")
          ])
        ]),
        React.createElement("div", { className: "flex items-center gap-2 text-xs font-medium text-stone-600 bg-white/80 p-2.5 rounded-lg border border-blue-100" }, [
          React.createElement("span", { key: "icon" }, "📏"),
          React.createElement("span", null, `Distance to Heritage Site: ${rg.flight?.distance || "Varies"}`)
        ]),
        React.createElement("p", { className: "text-sm text-stone-700 leading-relaxed" }, rg.flight?.details)
      ]),

      // Tab Content: Train
      activeTab === "train" && React.createElement("div", {
        key: "train-content",
        className: "bg-amber-50/50 rounded-xl p-5 border border-amber-100 mb-6 space-y-4"
      }, [
        React.createElement("div", { className: "flex items-start justify-between gap-4" }, [
          React.createElement("div", null, [
            React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-amber-700" }, "Nearest Railway Station"),
            React.createElement("h4", { className: "text-lg font-bold text-stone-900 mt-0.5" }, rg.train?.hub || "Junction Station"),
          ]),
          React.createElement("div", { className: "text-right" }, [
            React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-amber-700" }, "Local Transfer"),
            React.createElement("p", { className: "text-base font-bold text-stone-900 mt-0.5" }, rg.train?.transferTime || "Quick Transfer")
          ])
        ]),
        React.createElement("div", { className: "flex items-center gap-2 text-xs font-medium text-stone-600 bg-white/80 p-2.5 rounded-lg border border-amber-100" }, [
          React.createElement("span", { key: "icon" }, "🚂"),
          React.createElement("span", null, `Railhead Distance: ${rg.train?.distance || "Direct"}`)
        ]),
        React.createElement("p", { className: "text-sm text-stone-700 leading-relaxed" }, rg.train?.details)
      ]),

      // Tab Content: Road
      activeTab === "road" && React.createElement("div", {
        key: "road-content",
        className: "bg-emerald-50/50 rounded-xl p-5 border border-emerald-100 mb-6 space-y-4"
      }, [
        React.createElement("div", { className: "flex items-start justify-between gap-4" }, [
          React.createElement("div", null, [
            React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-emerald-700" }, "Highway Corridor"),
            React.createElement("h4", { className: "text-lg font-bold text-stone-900 mt-0.5" }, rg.road?.highway || "National Highway"),
          ]),
          React.createElement("div", { className: "text-right" }, [
            React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-emerald-700" }, "Estimated Drive"),
            React.createElement("p", { className: "text-base font-bold text-stone-900 mt-0.5" }, rg.road?.travelTime || "Flexible")
          ])
        ]),
        React.createElement("div", { className: "flex items-center gap-2 text-xs font-medium text-stone-600 bg-white/80 p-2.5 rounded-lg border border-emerald-100" }, [
          React.createElement("span", { key: "icon" }, "🛣️"),
          React.createElement("span", null, `Road Conditions: ${rg.road?.roadCondition || "Paved route"}`)
        ]),
        React.createElement("p", { className: "text-sm text-stone-700 leading-relaxed" }, rg.road?.details)
      ]),

      // Insider Tip Banner
      rg.insiderTip && React.createElement("div", {
        key: "insider-tip",
        className: "flex items-start gap-3 p-4 rounded-xl bg-[#FEF8EC] border border-[#F0AD4E]/40 mb-6 text-stone-800"
      }, [
        React.createElement("span", { key: "bulb", className: "text-xl shrink-0" }, "💡"),
        React.createElement("div", { key: "text" }, [
          React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-[#D48F29] block" }, "Local Guide Route Secret"),
          React.createElement("p", { className: "text-sm mt-0.5 leading-normal" }, rg.insiderTip)
        ])
      ]),

      // Cultural Customs & Best Season
      React.createElement("div", {
        key: "customs",
        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-600 mb-6 bg-stone-50 p-4 rounded-xl border border-stone-100"
      }, [
        React.createElement("div", { key: "season" }, [
          React.createElement("span", { className: "font-bold text-stone-900 block mb-1" }, "🗓️ Best Travel Season:"),
          React.createElement("span", null, destination.bestSeason || "October to March")
        ]),
        React.createElement("div", { key: "etiquette" }, [
          React.createElement("span", { className: "font-bold text-stone-900 block mb-1" }, "🪷 Cultural Etiquette:"),
          React.createElement("span", null, destination.localCustoms ? destination.localCustoms.slice(0, 100) + "..." : "Respect local customs and shrines.")
        ])
      ]),

      // Action Footer
      React.createElement("div", {
        key: "actions",
        className: "flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200"
      }, [
        React.createElement("div", { key: "price" }, [
          React.createElement("span", { className: "text-xs text-stone-500 block" }, "Starting Guide Immersion"),
          React.createElement("div", { className: "flex items-baseline gap-1" }, [
            React.createElement("span", { className: "text-2xl font-black text-[#D9534F]" }, `₹${destination.startingPrice?.toLocaleString("en-IN")}`),
            React.createElement("span", { className: "text-xs text-stone-500" }, "/ traveler")
          ])
        ]),
        React.createElement("div", { key: "buttons", className: "flex items-center gap-3 w-full sm:w-auto" }, [
          React.createElement("button", {
            key: "close",
            onClick: onClose,
            className: "flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-50 transition-colors"
          }, "Close Guide"),
          React.createElement("button", {
            key: "book",
            onClick: () => {
              onClose();
              if (onBookNow) onBookNow(destination);
            },
            className: "flex-1 sm:flex-initial btn-terracotta px-6 py-2.5 rounded-xl font-bold text-sm"
          }, "Book With Local Guide →")
        ])
      ])
    ])
  ]);
};
