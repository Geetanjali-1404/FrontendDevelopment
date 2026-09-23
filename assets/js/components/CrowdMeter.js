// GOBEYOND TRAVELS - CrowdMeter Component
// Live visual badge showing crowd density indicator

window.CrowdMeter = function({ level = "peaceful", percent = 15, showTooltip = true, compact = false }) {
  const getBadgeConfig = (lvl) => {
    switch(lvl) {
      case "peaceful":
        return {
          label: "Quiet & Peaceful",
          sublabel: "0–25% Density",
          bg: "bg-emerald-50 border-emerald-200 text-emerald-800",
          dotClass: "bg-emerald-500 pulse-dot-peaceful",
          icon: "🟢",
          description: "Serene & secluded. Ideal for intimate heritage discovery without crowds."
        };
      case "moderate":
        return {
          label: "Moderate Activity",
          sublabel: "26–60% Density",
          bg: "bg-amber-50 border-amber-200 text-amber-800",
          dotClass: "bg-amber-500 pulse-dot-moderate",
          icon: "🟡",
          description: "Pleasant, lively local atmosphere. Smooth unhurried access."
        };
      case "crowded":
      default:
        return {
          label: "High Footfall",
          sublabel: "61–100% Density",
          bg: "bg-rose-50 border-rose-200 text-rose-800",
          dotClass: "bg-rose-500 pulse-dot-crowded",
          icon: "🔴",
          description: "Mainstream crowd congestion. We recommend booking early morning or an offbeat alternative."
        };
    }
  };

  const config = getBadgeConfig(level);

  if (compact) {
    return React.createElement("div", {
      className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold shadow-xs ${config.bg}`,
      title: `${config.label} (${percent}% capacity) - ${config.description}`
    }, [
      React.createElement("span", {
        key: "dot",
        className: `w-2 h-2 rounded-full ${config.dotClass}`
      }),
      React.createElement("span", { key: "text" }, config.label)
    ]);
  }

  return React.createElement("div", {
    className: `inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium shadow-xs transition-all ${config.bg}`,
    title: config.description
  }, [
    React.createElement("span", {
      key: "dot",
      className: `w-2.5 h-2.5 rounded-full ${config.dotClass}`
    }),
    React.createElement("div", { key: "content", className: "flex items-center gap-1.5" }, [
      React.createElement("span", { key: "label", className: "font-semibold" }, config.label),
      React.createElement("span", { key: "divider", className: "opacity-40" }, "•"),
      React.createElement("span", { key: "pct", className: "text-[11px] font-mono font-bold" }, `${percent}% crowd`)
    ])
  ]);
};
