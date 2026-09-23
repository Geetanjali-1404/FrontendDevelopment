// GOBEYOND TRAVELS - GuideModal Component
// Local Guide profile popup with video intro preview, badges, languages, and direct inquiry

window.GuideModal = function({ guide, isOpen, onClose, onBookWithGuide }) {
  const [isPlayingVideo, setIsPlayingVideo] = React.useState(false);

  if (!isOpen || !guide) return null;

  return React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity",
    onClick: onClose
  }, [
    React.createElement("div", {
      key: "modal-card",
      className: "modal-content-animated relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 md:p-8",
      onClick: (e) => e.stopPropagation()
    }, [
      // Close button
      React.createElement("button", {
        key: "close",
        onClick: onClose,
        className: "absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 flex items-center justify-center transition-colors font-bold",
        "aria-label": "Close"
      }, "✕"),

      // Guide Header
      React.createElement("div", {
        key: "guide-head",
        className: "flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6 text-center sm:text-left"
      }, [
        React.createElement("div", { key: "avatar-wrap", className: "relative shrink-0" }, [
          React.createElement("img", {
            src: guide.avatar,
            alt: guide.name,
            className: "w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-4 border-white shadow-md"
          }),
          React.createElement("span", {
            className: "absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1",
            title: "Verified Native Guide"
          }, [
            React.createElement("span", { key: "check" }, "✓"),
            "VERIFIED"
          ])
        ]),
        React.createElement("div", { key: "info", className: "flex-1" }, [
          React.createElement("div", { className: "flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5" }, [
            guide.badges?.map((badge, idx) =>
              React.createElement("span", {
                key: idx,
                className: "px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#FEF8EC] text-[#D48F29] border border-[#F0AD4E]/30"
              }, `⭐ ${badge}`)
            )
          ]),
          React.createElement("h3", { className: "text-2xl font-bold font-heading text-stone-900" }, guide.name),
          React.createElement("p", { className: "text-sm text-stone-500 mt-0.5" }, `📍 Native of ${guide.city}, ${guide.state}`),
          React.createElement("div", { className: "flex items-center justify-center sm:justify-start gap-4 mt-2 text-xs font-semibold text-stone-700" }, [
            React.createElement("span", { className: "flex items-center gap-1 text-amber-600" }, [
              "★", `${guide.rating} (${guide.reviewsCount} reviews)`
            ]),
            React.createElement("span", { className: "text-stone-300" }, "|"),
            React.createElement("span", null, `${guide.experienceYears} Years Guiding`),
            React.createElement("span", { className: "text-stone-300" }, "|"),
            React.createElement("span", null, `${guide.toursCount}+ Tours Led`)
          ])
        ])
      ]),

      // Video Intro Preview Mockup
      guide.videoIntro && React.createElement("div", {
        key: "video-preview",
        className: "relative rounded-xl overflow-hidden bg-stone-900 text-white mb-6 shadow-md border border-stone-800"
      }, [
        React.createElement("div", {
          className: "relative h-44 sm:h-52 w-full bg-cover bg-center",
          style: { backgroundImage: `url(${guide.videoIntro.poster})` }
        }, [
          React.createElement("div", {
            className: `absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 flex flex-col justify-between p-4 transition-all ${isPlayingVideo ? "bg-black/90" : ""}`
          }, [
            React.createElement("div", { key: "top", className: "flex items-center justify-between" }, [
              React.createElement("span", { className: "bg-black/60 backdrop-blur-xs text-xs font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5" }, [
                React.createElement("span", { className: "w-2 h-2 rounded-full bg-rose-500 animate-pulse" }),
                "Video Intro Preview"
              ]),
              React.createElement("span", { className: "bg-black/60 text-xs px-2 py-0.5 rounded font-mono" }, guide.videoIntro.duration)
            ]),

            !isPlayingVideo ? React.createElement("div", {
              key: "center",
              className: "self-center text-center cursor-pointer group",
              onClick: () => setIsPlayingVideo(true)
            }, [
              React.createElement("div", {
                className: "w-14 h-14 rounded-full bg-[#D9534F] text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform mx-auto pl-1"
              }, "▶"),
              React.createElement("span", { className: "text-xs font-bold mt-2 block tracking-wider uppercase drop-shadow" }, "Watch Guide Intro")
            ]) : React.createElement("div", {
              key: "playing-state",
              className: "self-center text-center space-y-2 py-4"
            }, [
              React.createElement("div", { className: "flex items-center justify-center gap-1.5" }, [
                React.createElement("span", { className: "w-1 h-6 bg-[#F0AD4E] animate-bounce" }),
                React.createElement("span", { className: "w-1 h-10 bg-[#D9534F] animate-pulse" }),
                React.createElement("span", { className: "w-1 h-8 bg-emerald-400 animate-bounce" }),
                React.createElement("span", { className: "w-1 h-12 bg-[#F0AD4E] animate-pulse" }),
                React.createElement("span", { className: "w-1 h-5 bg-[#D9534F] animate-bounce" })
              ]),
              React.createElement("p", { className: "text-xs text-stone-300 font-mono" }, "Playing voice introduction..."),
              React.createElement("button", {
                onClick: () => setIsPlayingVideo(false),
                className: "text-[11px] underline text-stone-400 hover:text-white"
              }, "Pause video")
            ]),

            React.createElement("div", { key: "bottom", className: "space-y-1" }, [
              React.createElement("p", { className: "text-xs sm:text-sm italic text-stone-200 line-clamp-2" }, `“${guide.videoIntro.quote}”`),
              isPlayingVideo && React.createElement("div", { className: "w-full bg-stone-700 h-1 rounded-full overflow-hidden" }, [
                React.createElement("div", { className: "bg-[#D9534F] h-full w-2/3 animate-pulse" })
              ])
            ])
          ])
        ])
      ]),

      // Spoken Languages & Niche Specialties
      React.createElement("div", {
        key: "skills-grid",
        className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-stone-50 p-4 rounded-xl border border-stone-100"
      }, [
        React.createElement("div", { key: "languages" }, [
          React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2" }, "🗣️ Languages Spoken"),
          React.createElement("div", { className: "flex flex-wrap gap-1.5" }, [
            guide.languages?.map((lang, i) =>
              React.createElement("span", {
                key: i,
                className: "px-2.5 py-1 rounded-lg text-xs font-medium bg-white text-stone-800 border border-stone-200 shadow-2xs"
              }, lang)
            )
          ])
        ]),
        React.createElement("div", { key: "specialties" }, [
          React.createElement("span", { className: "text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2" }, "🏺 Heritage Niche"),
          React.createElement("div", { className: "flex flex-wrap gap-1.5" }, [
            guide.specialties?.map((spec, i) =>
              React.createElement("span", {
                key: i,
                className: "px-2.5 py-1 rounded-lg text-xs font-medium bg-orange-50 text-orange-800 border border-orange-200 shadow-2xs"
              }, spec)
            )
          ])
        ])
      ]),

      // Bio & Story
      React.createElement("div", { key: "bio", className: "mb-6 space-y-3" }, [
        React.createElement("h4", { className: "text-sm font-bold uppercase tracking-wider text-stone-800" }, "📖 Native Story & Background"),
        React.createElement("p", { className: "text-sm text-stone-600 leading-relaxed" }, guide.bio)
      ]),

      // Community Economic Impact
      guide.communityImpact && React.createElement("div", {
        key: "impact",
        className: "p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-900 mb-6 flex items-start gap-3"
      }, [
        React.createElement("span", { className: "text-lg shrink-0" }, "🌱"),
        React.createElement("div", null, [
          React.createElement("strong", { className: "block text-emerald-950 font-bold mb-0.5" }, "Community Impact Statement:"),
          React.createElement("span", { className: "text-emerald-800 leading-normal" }, guide.communityImpact)
        ])
      ]),

      // Action Footer
      React.createElement("div", {
        key: "actions",
        className: "flex items-center justify-end gap-3 pt-4 border-t border-stone-200"
      }, [
        React.createElement("button", {
          key: "cancel",
          onClick: onClose,
          className: "px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 font-semibold text-sm hover:bg-stone-50"
        }, "Back"),
        React.createElement("button", {
          key: "book",
          onClick: () => {
            onClose();
            if (onBookWithGuide) onBookWithGuide(guide);
          },
          className: "btn-terracotta px-6 py-2.5 rounded-xl font-bold text-sm"
        }, `Plan Trip with ${guide.name.split(" ")[0]} →`)
      ])
    ])
  ]);
};
