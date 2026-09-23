/**
 * GOBEYOND TRAVELS - Master Data File
 * Exclusively India Heritage Destinations, Guides, Packages, Reviews & FAQs
 */

const GoBeyondData = {
  // 12 Hidden Heritage Destinations in India
  destinations: [
    {
      id: "bastar-tribal-crafts",
      svgImg: "assets/images/destinations/bastar.jpg",
      name: "Bastar Tribal Heritage & Dhokra Artisans",
      tagline: "4,000-year-old lost-wax bell metal casting & sacred forest groves",
      city: "Jagdalpur",
      state: "Chhattisgarh",
      region: "Central India",
      category: "Tribal Traditions",
      image: "assets/images/destinations/bastar.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 14,
      crowdTrend: "Very quiet • 92% fewer crowds than mainstream monuments",
      historicalBackstory: "Hidden in the dense Sal canopies of Dandakaranya, the Maria and Muria indigenous communities have preserved prehistoric lost-wax bronze casting (Dhokra) and terracotta votives untouched by industrialized production for four millennia. Our certified native tribal guides grant respectful access into family courtyards.",
      localCustoms: "Always ask permission before photographing village deities (Mata Gudi). Gifts of plastic goods are strictly discouraged; purchasing handicrafts directly from family forges supports sustainable local livelihoods.",
      bestSeason: "October to March",
      difficulty: "Easy",
      duration: "2 Days / 1 Night",
      startingPrice: 3800,
      guideId: "guide-ramesh-mandavi",
      guideName: "Ramesh Mandavi",
      guideTitle: "Indigenous Muria Historian & Dhokra Guild Master",
      routeGuide: {
        flight: {
          hub: "Swami Vivekananda Airport, Raipur (RPR)",
          distance: "285 km",
          transferTime: "5.5 hours",
          details: "Daily non-stop flights from Delhi, Mumbai, Bengaluru, and Kolkata. Private air-conditioned traveler cab or prepaid airport taxi service available directly to Jagdalpur."
        },
        train: {
          hub: "Jagdalpur Railway Station (JDB)",
          distance: "12 km from workshop cluster",
          transferTime: "25 minutes by local e-rickshaw",
          details: "Connected by the legendary Visakhapatnam-Kirandul Express, passing through 84 tunnels in the Eastern Ghats—one of the most breathtaking railway journeys in Asia."
        },
        road: {
          highway: "NH-30 via Kanker Valley National Highway",
          roadCondition: "Smooth 2-lane scenic forest road with mountain pass viewpoints",
          travelTime: "6 hours driving time from Raipur",
          details: "Spectacular daylight drive crossing the legendary Keshkal Ghat with 12 hairpin turns overlooking virgin Sal canopies."
        },
        insiderTip: "Join our Sunday morning village Haat (market) walk at Tokapal at 8:30 AM before temperatures rise to taste Mahua blossom herbal brews."
      },
      mapCoords: { x: 55, y: 56 },
      highlights: ["Interactive Dhokra Wax Modeling", "Sacred Mata Gudi Forest Shrine", "Chitrakote Horseshoe Falls Sunset", "Organic Mahua Tea Tasting"]
    },
    {
      id: "majuli-river-satras",
      name: "Majuli Island Neo-Vaishnavite Satras",
      tagline: "Living monastery-islands, bamboo mask artistry & choral Borgeet chants",
      city: "Majuli / Jorhat",
      state: "Assam",
      region: "Northeast India",
      category: "Sacred Rituals",
      image: "assets/images/destinations/majuli.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 19,
      crowdTrend: "Serene morning river mist • 85% crowd reduction vs Guwahati",
      historicalBackstory: "Cradled by the mighty Brahmaputra river, Majuli is the world's largest river island and the spiritual epicenter of 15th-century Saint Sankaradeva's Neo-Vaishnavite reform. Monks practice ancient Sattriya classical dance, make organic bamboo theatrical masks, and preserve palm-leaf manuscripts.",
      localCustoms: "Remove footwear outside monastery prayer halls (Namghar). Dress conservatively covering shoulders and knees. Traditional offering of betel nut (Tamul) is accepted with both hands.",
      bestSeason: "November to April",
      difficulty: "Easy",
      duration: "3 Days / 2 Nights",
      startingPrice: 4600,
      guideId: "guide-pronob-kalita",
      guideName: "Pronob Kalita",
      guideTitle: "Sattriya Mask Maker & Brahmaputra Naturalist",
      routeGuide: {
        flight: {
          hub: "Jorhat Airport (JRH) / Dibrugarh (DIB)",
          distance: "22 km to Nimati Ghat + 1 hr ferry",
          transferTime: "1.5 hours total",
          details: "Direct flights to Jorhat from Kolkata and Guwahati. From Jorhat airport, our arranged transport brings you directly to Nimati Ghat ferry terminal."
        },
        train: {
          hub: "Jorhat Town Railway Station (JTTN)",
          distance: "18 km to Nimati Ferry Ghat",
          transferTime: "40 minutes by cab",
          details: "Well connected by Rajdhani and Jan Shatabdi expresses from Guwahati and New Delhi."
        },
        road: {
          highway: "Brahmaputra Ferry Crossing via Nimati Ghat",
          roadCondition: "Ro-Ro Modern Ferry allows vehicle boarding; island roads are peaceful single-lane paved roads",
          travelTime: "1 hour scenic boat ride across the Brahmaputra",
          details: "Catch the 8:30 AM or 1:30 PM government ferry. River dolphins (Gangetic Susu) frequently surface beside the boat."
        },
        insiderTip: "Visit Samaguri Satra where 83-year-old guru Hem Chandra Goswami molds masks out of clay, cow dung, and bamboo frames."
      },
      mapCoords: { x: 84, y: 32 },
      highlights: ["Handmade Bamboo Mask Crafting", "Monastic Evening Prayer with Cymbals", "Mishing Tribal Stilt Village Dinner", "Brahmaputra Sunset Canoe Ride"]
    },
    {
      id: "hampi-anegundi-boulders",
      name: "Anegundi & Northern Boulder Ruins",
      tagline: "The pre-Vijayanagara mythological kingdom across the Tungabhadra",
      city: "Hampi / Anegundi",
      state: "Karnataka",
      region: "South India",
      category: "Ancient Architecture",
      image: "assets/images/destinations/hampi.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 22,
      crowdTrend: "Escape 90% of tourist crowds flocking to the southern bazaar",
      historicalBackstory: "While thousands crowd the southern stone chariot at Hampi, cross the river in a round wicker coracle boat to Anegundi—a 5,000-year-old settlement older than the Vijayanagara Empire itself. Explore Neolithic cave art, the mythical Kishkindha kingdom, and quiet monolithic water aqueducts hidden among giant granite balance boulders.",
      localCustoms: "Respect ongoing rituals at Durga Temple; avoid climbing onto ruined monolithic carved pillars. Support local women's banana fiber craft cooperatives in the heritage quarter.",
      bestSeason: "October to March",
      difficulty: "Moderate",
      duration: "Full Day (7 hrs)",
      startingPrice: 2900,
      guideId: "guide-shankar-nayak",
      guideName: "Shankar Nayak",
      guideTitle: "Archaeologist & Native Tungabhadra Coracle Guide",
      routeGuide: {
        flight: {
          hub: "Jindal Vidyanagar Airport, Bellary (VDY) / Hubli (HBX)",
          distance: "38 km (Vidyanagar) / 145 km (Hubli)",
          transferTime: "45 minutes from VDY",
          details: "Alliance Air operates direct flights from Bengaluru and Hyderabad into Vidyanagar Toranagallu."
        },
        train: {
          hub: "Hosapete Junction (HPT)",
          distance: "13 km to Hampi / 24 km to Anegundi",
          transferTime: "30 minutes by private auto or cab",
          details: "Overnight Hampi Express from Bengaluru and Hubli. Daily express trains connecting Goa (Madgaon) and Mumbai."
        },
        road: {
          highway: "NH-50 & NH-67 Expressway",
          roadCondition: "Four-lane national highway until Hosapete; picturesque rural roads lined with palm trees",
          travelTime: "6 hours driving time from Bengaluru",
          details: "Direct bridge access via Bukka's Aqueduct bridge or traditional coracle boat crossing from Talwarghatta."
        },
        insiderTip: "Ascend the 575 steps of Anjanadri Hill at 5:15 AM for a sunrise silhouette over 20 kilometers of ruined palaces and golden boulders without another soul."
      },
      mapCoords: { x: 39, y: 69 },
      highlights: ["Hand-paddled Coracle Boat Ride", "Prehistoric Cave Paintings", "Banana Fiber Craft Workshop", "Sunset over Vijayanagara Aqueducts"]
    },
    {
      id: "spiti-dhankar-monasteries",
      name: "Spiti Valley Mud Fortresses & Tabo Frescoes",
      tagline: "1,000-year-old Ajanta of the Himalayas perched on 3,890m cliffs",
      city: "Kaza / Tabo",
      state: "Himachal Pradesh",
      region: "Himalayas",
      category: "Ancient Architecture",
      image: "assets/images/destinations/spiti.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 11,
      crowdTrend: "Deep alpine tranquility • 98% lower footprint than Manali/Shimla",
      historicalBackstory: "Founded in 996 CE, Tabo Gompa holds pristine mud-sculpted life-size Bodhisattvas and mineral-pigment frescoes that remain untouched by modern restoration. Above it hangs Dhankar Monastery, balanced precariously on a jagged spire of sedimentary rock overlooking the confluence of the Spiti and Pin rivers.",
      localCustoms: "Walk around monasteries, chortens, and mani stone walls strictly in a clockwise direction. No flash photography inside the sanctum. Acclimatize for 24-48 hours before high ascents.",
      bestSeason: "May to October",
      difficulty: "Challenging",
      duration: "4 Days / 3 Nights",
      startingPrice: 8500,
      guideId: "guide-tsering-dorje",
      guideName: "Tsering Dorje",
      guideTitle: "Spiti Native Monk-Scholar & High-Altitude Naturalist",
      routeGuide: {
        flight: {
          hub: "Kullu-Manali Airport, Bhuntar (KUU) / Chandigarh (IXC)",
          distance: "245 km (via Atal Tunnel)",
          transferTime: "8 to 9 hours",
          details: "Scenic high-mountain 4x4 transfer via Atal Tunnel and Kunzum Pass (4,551m). In winter, accessible via Shimla-Kinnaur all-weather route."
        },
        train: {
          hub: "Shimla Toy Train or Chandigarh Railway Junction",
          distance: "410 km via Hindustan-Tibet Highway",
          transferTime: "12 hours (recommended 2-day relaxed journey)",
          details: "Stop overnight in Kalpa or Sangla to marvel at the holy Kinner Kailash peak."
        },
        road: {
          highway: "NH-505 via Kunzum Pass & Rohtang Bypass",
          roadCondition: "Rugged alpine terrain requiring high-clearance 4x4 SUV",
          travelTime: "8.5 hours from Manali",
          details: "Pass through glacial rivers, desolate moonscapes, and see Himalayan ibex along the high passes."
        },
        insiderTip: "Spend the evening drinking butter tea with resident Lamas at Dhankar while listening to twilight rooftop gong prayers."
      },
      mapCoords: { x: 37, y: 17 },
      highlights: ["Tabo Golden Temple Murals (996 CE)", "Dhankar Clifftop Meditation Cell", "Pin Valley Snow Leopard Habitat Walk", "Fossil Hunting in Langza Village"]
    },
    {
      id: "chettinad-mansions-guilds",
      name: "Chettinad Aristocratic Mansions & Tile Guilds",
      tagline: "Burmese teak palaces, handmade Athangudi tiles & peppery culinary lore",
      city: "Karaikudi",
      state: "Tamil Nadu",
      region: "South India",
      category: "Culinary Heritage",
      image: "assets/images/destinations/chettinad.jpg",
      crowdLevel: "moderate",
      crowdPercent: 32,
      crowdTrend: "Pleasant unhurried village atmosphere • Zero commercial tour buses",
      historicalBackstory: "The Nattukottai Chettiars were legendary merchant bankers who built 10,000 palatial mansions across 74 dry villages using Belgian crystal mirrors, Italian marble, and Burmese teak pillars. Today, local guilds still hand-cast sun-dried Athangudi floral tiles using glass stencils, while master cooks grind 18 whole spices in stone mortars.",
      localCustoms: "Chettinad feasts are served on fresh banana leaves; eat traditionally with your right hand to savor the complexity of freshly cracked black pepper and star anise.",
      bestSeason: "October to March",
      difficulty: "Easy",
      duration: "2 Days / 1 Night",
      startingPrice: 3400,
      guideId: "guide-meenakshi-raman",
      guideName: "Meenakshi Raman",
      guideTitle: "Chettiar Heritage Conservator & Culinary Historian",
      routeGuide: {
        flight: {
          hub: "Tiruchirappalli International Airport (TRZ) / Madurai (IXM)",
          distance: "82 km from Trichy / 90 km from Madurai",
          transferTime: "1 hour 30 minutes",
          details: "International flights from Singapore, Dubai, and major Indian metros. Smooth 4-lane expressway cab ride directly to Karaikudi."
        },
        train: {
          hub: "Karaikudi Junction (KKDI)",
          distance: "4 km from heritage mansion zone",
          transferTime: "10 minutes by auto",
          details: "Direct overnight trains (Rameswaram Express, Pallavan Express) from Chennai Egmore."
        },
        road: {
          highway: "NH-336 Trichy-Karaikudi Highway",
          roadCondition: "Excellent buttery smooth 4-lane asphalt",
          travelTime: "1.5 hours from Trichy / 2 hours from Madurai",
          details: "Lined with roadside palmyra groves, ancient step-wells, and terracotta Ayyanar horses."
        },
        insiderTip: "Try stamping your own geometric Athangudi tile at the 80-year-old Muthu tile forge in Athangudi village."
      },
      mapCoords: { x: 44, y: 84 },
      highlights: ["Athangudi Handmade Tile Crafting", "Authentic 7-Course Banana Leaf Feast", "100-Room Burmese Teak Mansion Tour", "Antique Market Silver & Brass Discovery"]
    },
    {
      id: "orchha-betwa-cenotaphs",
      name: "Orchha Betwa River Palaces & Bundela Frescoes",
      tagline: "The silent 16th-century river citadel untouched by mass commercialization",
      city: "Orchha",
      state: "Madhya Pradesh",
      region: "Central India",
      category: "Ancient Architecture",
      image: "assets/images/destinations/orchha.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 26,
      crowdTrend: "Calm evening breezes • A tranquil alternative to crowded Agra",
      historicalBackstory: "Hidden in the dense teak forests along the rocky boulders of the Betwa river, Orchha was the grand 16th-century capital of the Bundela Rajput kings. Its multi-tiered Chhatris (cenotaphs) cast dramatic reflections at twilight, while Raja Mahal retains luminous mineral paintings depicting the Ramayana.",
      localCustoms: "Remove footwear when entering the active Raja Ram Temple, the only temple in India where Lord Rama is officially given a 21-gun police guard of honor as a sovereign monarch.",
      bestSeason: "September to March",
      difficulty: "Easy",
      duration: "Full Day (8 hrs)",
      startingPrice: 2400,
      guideId: "guide-devendra-bundela",
      guideName: "Devendra Singh Bundela",
      guideTitle: "Historian of Bundelkhand & Heritage Restorer",
      routeGuide: {
        flight: {
          hub: "Gwalior Airport (GWL) / Khajuraho (HJR)",
          distance: "120 km from Gwalior / 170 km from Khajuraho",
          transferTime: "2 hours 15 minutes",
          details: "Direct air connectivity from Delhi, Mumbai, and Jaipur. Direct air-conditioned private vehicle transfers."
        },
        train: {
          hub: "Virangana Lakshmibai Jhansi Junction (VGLJ)",
          distance: "15 km from Orchha town",
          transferTime: "25 minutes by local auto or cab",
          details: "VGL Jhansi is a premier superfast hub: Vande Bharat Express and Shatabdi Express reach Jhansi in just 4.5 hours from New Delhi."
        },
        road: {
          highway: "NH-44 Four-Lane Highway via Jhansi",
          roadCondition: "World-class toll road connecting Delhi to Central India",
          travelTime: "7 hours from Delhi / 2.5 hours from Gwalior",
          details: "Drive directly across the medieval arched stone bridge across the Betwa river into Orchha fort island."
        },
        insiderTip: "Take an evening inflatable kayak expedition on the gentle Betwa rapids as the sun sets right behind the 14 royal cenotaphs."
      },
      mapCoords: { x: 48, y: 39 },
      highlights: ["Sunset Kayak beside Royal Chhatris", "Raja Ram Temple Police Guard Ceremony", "Bundeli Mineral Wall Painting Masterclass", "Betwa Nature Reserve Birdwatching"]
    },
    {
      id: "ziro-apatani-groves",
      name: "Ziro Valley Apatani Eco-Farming & Sacred Groves",
      tagline: "Pioneering fish-paddy wetland ecology & sacred shamanic Danyi-Piilo traditions",
      city: "Ziro",
      state: "Arunachal Pradesh",
      region: "Northeast India",
      category: "Tribal Traditions",
      image: "assets/images/destinations/hampi.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 12,
      crowdTrend: "Zero congestion • Strict inner line permits safeguard cultural sanctity",
      historicalBackstory: "UNESCO tentative world heritage site Ziro is a pristine high-altitude plateau home to the Apatani community. Famous for their intricate nose plugs (Yaping Hullo) and facial tattoos historically worn by elders, the Apatani are globally renowned for an ingenious zero-chemical agro-forestry system combining wet rice and freshwater carp farming.",
      localCustoms: "Inner Line Permit (ILP) required for Indian nationals; Protected Area Permit (PAP) for foreigners (our team processes this for you). Show deep reverence to bamboo totems (Babos) erected during Myoko festival.",
      bestSeason: "March to October",
      difficulty: "Moderate",
      duration: "3 Days / 2 Nights",
      startingPrice: 6200,
      guideId: "guide-kago-kanya",
      guideName: "Kago Kanya",
      guideTitle: "Apatani Elder Descendant & Sustainable Agro-Ecologist",
      routeGuide: {
        flight: {
          hub: "Donyi Polo Airport, Itanagar (HGI) / Lilabari (IXI)",
          distance: "115 km from Itanagar / 110 km from Lilabari",
          transferTime: "3.5 to 4 hours mountain drive",
          details: "Direct flights connecting Itanagar to Kolkata, Guwahati, and New Delhi. Scenic 4WD pickup organized directly from airport arrivals."
        },
        train: {
          hub: "Naharlagun Railway Station (NHLN)",
          distance: "100 km from Ziro",
          transferTime: "3.5 hours",
          details: "Direct overnight Donyi Polo Express from Guwahati, connecting directly to India's broad-gauge rail network."
        },
        road: {
          highway: "Trans-Arunachal Highway (NH-13)",
          roadCondition: "Paved alpine mountain roads winding through pine forests and rhododendrons",
          travelTime: "4 hours from Itanagar",
          details: "High clearance SUV recommended. Magnificent vistas of bamboo forests and cloud-kissed ridges."
        },
        insiderTip: "Sip homemade millet beer (Opo) poured from bamboo carafes around a traditional hearth inside an authentic timber Apatani home."
      },
      mapCoords: { x: 88, y: 26 },
      highlights: ["Zero-Chemical Fish-Paddy Wetland Walk", "Traditional Hearth Herbal Cooking Session", "Pine Grove Nature Meditation", "Apatani Shamanic Chants & Lore"]
    },
    {
      id: "shekhawati-painted-havelis",
      name: "Shekhawati Open-Air Fresco Havelis",
      tagline: "The world's largest open-air art gallery of 19th-century Marwari silk traders",
      city: "Nawalgarh / Mandawa",
      state: "Rajasthan",
      region: "North India",
      category: "Folk Crafts",
      image: "assets/images/destinations/hampi.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 18,
      crowdTrend: "Far removed from the crowded tourist buses of Jaipur and Udaipur",
      historicalBackstory: "Long before modern transport, Shekhawati was a vital caravan stop on the Silk Route. Wealthy Marwari merchants competed to adorn their grand multi-courtyard Havelis with frescoes depicting everything from Vedic mythology to Victorian gramophones, locomotives, and early flying machines painted with natural pigments.",
      localCustoms: "Many havelis are still private residences maintained by hereditary caretakers. Tip caretakers politely and remove footwear when stepping on handwoven dhurries in inner courtyards.",
      bestSeason: "October to March",
      difficulty: "Easy",
      duration: "2 Days / 1 Night",
      startingPrice: 3200,
      guideId: "guide-vijay-shekhawat",
      guideName: "Vijay Singh Shekhawat",
      guideTitle: "Fresco Restoration Artisan & Oral Historian",
      routeGuide: {
        flight: {
          hub: "Jaipur International Airport (JAI)",
          distance: "140 km to Nawalgarh",
          transferTime: "2.5 hours",
          details: "Frequent domestic and international flights. Seamless highway drive via Sikar Expressway."
        },
        train: {
          hub: "Nawalgarh / Sikar Junction (SIKR)",
          distance: "3 km from Haveli quarters",
          transferTime: "10 minutes by tonga or e-rickshaw",
          details: "Well connected by broad gauge express trains directly from Delhi Sarai Rohilla and Jaipur."
        },
        road: {
          highway: "NH-52 Jaipur-Bikaner Highway",
          roadCondition: "Modern 4-lane tollway with excellent roadside Rajasthani dhabas",
          travelTime: "2.5 hours from Jaipur / 5.5 hours from New Delhi",
          details: "Picturesque desert landscape with peacocks roaming wild along mustard fields."
        },
        insiderTip: "Look closely at the Poddar Haveli frescoes to spot 1890s portraits of the Wright Brothers and early steam locomotives."
      },
      mapCoords: { x: 33, y: 34 },
      highlights: ["Organic Mineral Fresco Pigment Workshop", "Walk Through 100-Year-Old Carved Teak Portals", "Camel Cart Village Sunset Ride", "Traditional Ker Sangri Dinner"]
    },
    {
      id: "varanasi-hidden-ghats-akharas",
      name: "Northern Forgotten Ghats & Sacred Akharas",
      tagline: "Vedic Sanskrit chanting, wrestling akharas & weaver alleys away from Dashashwamedh",
      city: "Varanasi",
      state: "Uttar Pradesh",
      region: "North India",
      category: "Sacred Rituals",
      image: "assets/images/destinations/hampi.jpg",
      crowdLevel: "moderate",
      crowdPercent: 38,
      crowdTrend: "Peaceful northern riverbank • 80% quieter than central ghats",
      historicalBackstory: "While tourist hordes pack the central Dashashwamedh Aarti, the northern sweep from Panchganga to Rajghat retains mystical tranquility. Here, traditional mud wrestling Akharas practice 2,000-year-old Mallayuddha drills at dawn, while 7th-generation master silk weavers throw wooden shuttles in narrow medieval galis.",
      localCustoms: "Maintain silence during morning Vedic chanting at Gurukuls. Always ask before entering an active wrestling pit (Akhara) and take off shoes.",
      bestSeason: "October to April",
      difficulty: "Moderate",
      duration: "Half Day (5 hrs)",
      startingPrice: 2200,
      guideId: "guide-anand-mishra",
      guideName: "Anand Mishra",
      guideTitle: "Vedic Philologist & Traditional Akhara Wrestler",
      routeGuide: {
        flight: {
          hub: "Lal Bahadur Shastri International Airport, Babatpur (VNS)",
          distance: "26 km from Ghats",
          transferTime: "45 minutes",
          details: "Direct non-stop flights from Delhi, Mumbai, Bengaluru, Hyderabad, and Kathmandu."
        },
        train: {
          hub: "Varanasi Junction (BSB) / Pt. Deen Dayal Upadhyaya (DDU)",
          distance: "6 km (BSB) / 18 km (DDU)",
          transferTime: "20 minutes from BSB",
          details: "Served by Vande Bharat, Rajdhani, and overnight expresses from across India."
        },
        road: {
          highway: "NH-19 Purvanchal Expressway Corridor",
          roadCondition: "Smooth 6-lane access directly into city outskirts",
          travelTime: "5 hours from Lucknow",
          details: "Our guide meets you at the tranquil northern Rajghat terminal away from city gridlock."
        },
        insiderTip: "Board a traditional hand-rowed wooden bajra at 5:00 AM to hear dawn flute melodies reverberating off medieval sandstone ghats."
      },
      mapCoords: { x: 57, y: 41 },
      highlights: ["Sunrise Northern Wooden Boat Glide", "Ancient Akhara Mud Wrestling Drill", "Hidden Weaver Guild Banarasi Silk Loom", "Panchganga Ghat Subterranean Shrines"]
    },
    {
      id: "nohwet-living-root-bridges",
      name: "Nohwet Living Root Bridges & Cloud Forests",
      tagline: "Centuries-old bio-engineered Ficus roots woven across roaring canyon rivers",
      city: "Cherrapunji / Nohwet",
      state: "Meghalaya",
      region: "Northeast India",
      category: "Tribal Traditions",
      image: "assets/images/destinations/nohwet.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 16,
      crowdTrend: "Pristine rain-washed canopy • Quiet indigenous Khasi pathway",
      historicalBackstory: "Deep in the southern Khasi hills, indigenous villagers have spent centuries coaxing the aerial roots of Ficus elastica trees across hollowed betel-nut trunks over rushing torrents. Unlike concrete bridges that decay, living root bridges grow stronger every decade. Nohwet village preserves the oldest single-decker bridge built in 1840.",
      localCustoms: "Do not touch fresh delicate green root shoots. Keep plastic strictly out of sacred groves (Law Kyntang) under penalty of customary village council rules.",
      bestSeason: "September to May",
      difficulty: "Challenging",
      duration: "Full Day (7 hrs)",
      startingPrice: 3100,
      guideId: "guide-ban-marbaniang",
      guideName: "Ban Marbaniang",
      guideTitle: "Indigenous Khasi Conservationist & Botanist",
      routeGuide: {
        flight: {
          hub: "Umroi Airport, Shillong (SHL) / Lokpriya Gopinath Bordoloi Airport, Guwahati (GAU)",
          distance: "85 km from Shillong / 165 km from Guwahati",
          transferTime: "2.5 hrs from Shillong / 4.5 hrs from Guwahati",
          details: "Guwahati is a major national hub with 100+ flights daily. Direct private scenic 4x4 cab available."
        },
        train: {
          hub: "Guwahati Railway Station (GHY)",
          distance: "160 km",
          transferTime: "4.5 hours",
          details: "Direct premier express trains from Delhi, Kolkata, Chennai, and Mumbai."
        },
        road: {
          highway: "NH-206 Guwahati-Shillong-Dawki Highway",
          roadCondition: "Spectacular misty mountain highway carved along pine-clad limestone gorges",
          travelTime: "4.5 hours from Guwahati",
          details: "Drive past soaring waterfalls, cloud valleys, and bamboo trading hamlets."
        },
        insiderTip: "Walk the secret 3,000-stone ancient Khasi royal path built with hand-chiseled river rocks before tourists arrive at 10 AM."
      },
      mapCoords: { x: 79, y: 36 },
      highlights: ["180-Year-Old Living Ficus Root Bridge Walk", "Sacred Khasi Herbal Medicine Workshop", "Crystal River Swimming in Umngot Tributaries", "Bamboo-Cooked Traditional Khasi Meal"]
    },
    {
      id: "champaner-lost-citadel",
      name: "Champaner-Pavagadh Lost Mughal-Gujarat Citadel",
      tagline: "A buried 16th-century capital with stepwells, minarets, and rainwater engineering",
      city: "Vadodara / Champaner",
      state: "Gujarat",
      region: "West India",
      category: "Ancient Architecture",
      image: "assets/images/destinations/hampi.jpg",
      crowdLevel: "peaceful",
      crowdPercent: 15,
      crowdTrend: "Serene archaeological wonderland • Often completely solitary",
      historicalBackstory: "Before Ahmedabad flourished, Sultan Mahmud Begada founded Champaner as the imperial capital in 1484. Abandoned soon after, it remained swallowed by the jungle for 400 years, preserving an immaculate fusion of Hindu stone-carving and Islamic geometric arches, stepwells, and military fortifications.",
      localCustoms: "Respect prayer niches in the Jami Masjid; remove footwear when walking on carved stone prayer halls.",
      bestSeason: "October to March",
      difficulty: "Moderate",
      duration: "Full Day (6 hrs)",
      startingPrice: 2500,
      guideId: "guide-farhan-patel",
      guideName: "Farhan Patel",
      guideTitle: "Sultanate Architectural Historian & Archaeologist",
      routeGuide: {
        flight: {
          hub: "Vadodara Airport (BDQ) / Ahmedabad (AMD)",
          distance: "45 km from Vadodara / 140 km from Ahmedabad",
          transferTime: "50 minutes from Vadodara",
          details: "Vadodara has direct flights to Mumbai, Delhi, Bengaluru, and Hyderabad."
        },
        train: {
          hub: "Vadodara Junction (BRC)",
          distance: "46 km",
          transferTime: "50 minutes by private taxi",
          details: "One of the busiest Western Railway junctions with high-speed Tejas and Shatabdi connectivity."
        },
        road: {
          highway: "Halol-Vadodara Toll Expressway",
          roadCondition: "Superb 4-lane expressway",
          travelTime: "45 minutes from Vadodara city",
          details: "Direct smooth drive right to the base of the Pavagadh volcanic hill."
        },
        insiderTip: "Climb the spiral staircase of the Sahar ki Masjid at mid-morning to catch golden sunlight filtering through intricate stone jaali lattices."
      },
      mapCoords: { x: 34, y: 50 },
      highlights: ["Sahar ki Masjid Intricate Stone Jaali", "Helical Stepwell Subterranean Architecture", "Lost Citadel Defensive Battlements", "Traditional Kathiyawadi Millet Rotla Lunch"]
    },
    {
      id: "thanjavur-bronze-casting",
      name: "Thanjavur Chola Bronze Casting & Temple Secrets",
      tagline: "Lost-wax Chola sculpture guilds, Thanjavur gold-leaf art & Brihadisvara shadows",
      city: "Thanjavur / Swamimalai",
      state: "Tamil Nadu",
      region: "South India",
      category: "Folk Crafts",
      image: "assets/images/destinations/hampi.jpg",
      crowdLevel: "moderate",
      crowdPercent: 34,
      crowdTrend: "Artisan workshops are quiet and intimate • Avoid afternoon temple rush",
      historicalBackstory: "In the fertile Kaveri delta, the master sculptors (Sthapathis) of Swamimalai trace their lineage back 1,000 years to the Great Chola Emperors. Using bees-wax and Kaveri river alluvial silt, they cast divine Natarajas and Devis with zero mechanical joints, governed by sacred Shilpa Shastras proportions.",
      localCustoms: "Workshops are sacred spaces where bronze forges are treated with spiritual reverence. Do not step across casting wax molds or crucibles.",
      bestSeason: "October to March",
      difficulty: "Easy",
      duration: "Full Day (7 hrs)",
      startingPrice: 2800,
      guideId: "guide-sundaram-sthapathi",
      guideName: "K. Sundaram Sthapathi",
      guideTitle: "Hereditary Chola Bronze Master & Epigraphist",
      routeGuide: {
        flight: {
          hub: "Tiruchirappalli International Airport (TRZ)",
          distance: "55 km to Thanjavur / 85 km to Swamimalai",
          transferTime: "1 hour 15 minutes",
          details: "Direct flights from Chennai, Bengaluru, Colombo, Singapore, and Dubai."
        },
        train: {
          hub: "Thanjavur Junction (TJ) / Kumbakonam (KMU)",
          distance: "8 km from bronze artisan quarters",
          transferTime: "15 minutes",
          details: "Direct overnight Cholan and Uzhavan Express trains from Chennai Egmore."
        },
        road: {
          highway: "NH-83 Trichy-Thanjavur 4-Lane Highway",
          roadCondition: "Pristine divided expressway along green paddy fields of the Kaveri delta",
          travelTime: "1 hour from Trichy",
          details: "Stop along the way to witness the 2,000-year-old Grand Anicut (Kallanai) stone dam."
        },
        insiderTip: "Hold the crucible tongs under the master craftsman's guidance to pour molten red brass into a fired clay mold."
      },
      mapCoords: { x: 45, y: 78 },
      highlights: ["Hands-on Lost-Wax Bronze Pouring", "Brihadisvara Shadowless Vimana Epigraphy", "Thanjavur Pure Gold Leaf Painting Studio", "Filter Kaveri Coffee & Traditional Sambar Sadam"]
    }
  ],

  // 8 Curated Immersive Travel Packages in India
  packages: [
    {
      id: "pkg-bastar-artisan-immersion",
      title: "Bastar Tribal Forges & Sacred Groves Expedition",
      destinationId: "bastar-tribal-crafts",
      destinationName: "Bastar Tribal Heritage & Dhokra Artisans",
      city: "Jagdalpur",
      state: "Chhattisgarh",
      image: "assets/images/destinations/bastar.jpg",
      badge: "Artisan Guild Exclusive",
      duration: "3 Days / 2 Nights",
      durationType: "weekend",
      price: 9400,
      originalPrice: 11500,
      difficulty: "Easy",
      groupSize: "Strictly max 6 travelers",
      guideId: "guide-ramesh-mandavi",
      guideName: "Ramesh Mandavi",
      guideRole: "Muria Guild Master & Certified Historian",
      guideAvatar: "assets/images/guides/guide-ramesh.jpg",
      crowdRating: "Quiet & Peaceful (94% crowd avoidance)",
      amenities: [
        "2 Nights Tribal Bamboo Eco-Cottage Stay",
        "All Organic Mahua & Millets Traditional Meals",
        "Hands-on Lost-Wax Dhokra Metal Casting Workshop",
        "Private 4x4 Travel to Chitrakote Waterfalls & Forest Shrines",
        "Forest Department Cultural Entry Permits Included",
        "₹1,200 Direct Community Heritage Fund Contribution"
      ]
    },
    {
      id: "pkg-spiti-monastery-trail",
      title: "Spiti Valley Ancient Monasteries & High Passes Odyssey",
      destinationId: "spiti-dhankar-monasteries",
      destinationName: "Spiti Valley Mud Fortresses & Tabo Frescoes",
      city: "Kaza & Tabo",
      state: "Himachal Pradesh",
      image: "assets/images/destinations/spiti.jpg",
      badge: "Himalayan Sacred Heritage",
      duration: "5 Days / 4 Nights",
      durationType: "multiday",
      price: 18500,
      originalPrice: 22000,
      difficulty: "Challenging",
      groupSize: "Max 5 travelers (4WD expedition)",
      guideId: "guide-tsering-dorje",
      guideName: "Tsering Dorje",
      guideRole: "High-Altitude Native Monk-Scholar",
      guideAvatar: "assets/images/guides/guide-tsering.jpg",
      crowdRating: "Pristine Alpine Solitude (98% crowd avoidance)",
      amenities: [
        "4 Nights Traditional Mud-Brick Solar Homestays",
        "Tibetan Herbal Meals, Tsampa & Fresh Seabuckthorn Tea",
        "Special Lamas Guided Access to 996 CE Tabo Murals",
        "Private 4x4 Scorpio/Innova with Oxygen Cylinder",
        "Spiti Environmental & Inner Line Permits Included",
        "₹2,500 Monastic Restoration Fund Pledge"
      ]
    },
    {
      id: "pkg-majuli-living-monasteries",
      title: "Majuli Island Mask Making & Monastic Satra Life",
      destinationId: "majuli-river-satras",
      destinationName: "Majuli Island Neo-Vaishnavite Satras",
      city: "Majuli Island",
      state: "Assam",
      image: "assets/images/destinations/majuli.jpg",
      badge: "Rare Intangible Heritage",
      duration: "3 Days / 2 Nights",
      durationType: "weekend",
      price: 8900,
      originalPrice: 10800,
      difficulty: "Easy",
      groupSize: "Max 6 travelers",
      guideId: "guide-pronob-kalita",
      guideName: "Pronob Kalita",
      guideRole: "Sattriya Mask Maker & Naturalist",
      guideAvatar: "assets/images/guides/guide-pronob.jpg",
      crowdRating: "Quiet & Peaceful (88% crowd avoidance)",
      amenities: [
        "2 Nights Mishing Tribal Stilt House Homestay",
        "Slow-cooked Banana Leaf Steamed Fish & Rice Wine Tasting",
        "Samaguri Satra Bamboo Mask Sculpting Masterclass",
        "Private Wooden Country Boat Sunset Cruise",
        "All Island Ferry Crossings & Bicycle Rentals",
        "Direct Donation to Sattriya Dance Preservation School"
      ]
    },
    {
      id: "pkg-hampi-anegundi-boulders",
      title: "Anegundi Mythological Boulder Trails & Lost Palaces",
      destinationId: "hampi-anegundi-boulders",
      destinationName: "Anegundi & Northern Boulder Ruins",
      city: "Anegundi / Hampi",
      state: "Karnataka",
      image: "assets/images/destinations/hampi.jpg",
      badge: "Bestseller",
      duration: "Full Day (8 hrs)",
      durationType: "day",
      price: 3200,
      originalPrice: 4200,
      difficulty: "Moderate",
      groupSize: "Max 6 travelers",
      guideId: "guide-shankar-nayak",
      guideName: "Shankar Nayak",
      guideRole: "Archaeologist & Native Coracle Navigator",
      guideAvatar: "assets/images/guides/guide-shankar.jpg",
      crowdRating: "Quiet & Peaceful (91% crowd avoidance)",
      amenities: [
        "Traditional Hand-Rowed Coracle Boat Tungabhadra Crossing",
        "Organic Plantain Leaf South Indian Heritage Lunch",
        "Special Access to Neolithic Cave Art Sites",
        "Banana Fiber Eco-Crafting Workshop with Village Collective",
        "Bicycle / E-Tuk Tuk Transport Across Anegundi",
        "Complimentary Mineral Water & Fresh Tender Coconuts"
      ]
    },
    {
      id: "pkg-chettinad-aristocratic-legacy",
      title: "Chettinad Teak Mansions & Athangudi Tile Guild Trail",
      destinationId: "chettinad-mansions-guilds",
      destinationName: "Chettinad Aristocratic Mansions & Tile Guilds",
      city: "Karaikudi",
      state: "Tamil Nadu",
      image: "assets/images/destinations/chettinad.jpg",
      badge: "Architectural Grandeur",
      duration: "2 Days / 1 Night",
      durationType: "weekend",
      price: 6800,
      originalPrice: 8500,
      difficulty: "Easy",
      groupSize: "Max 8 travelers",
      guideId: "guide-meenakshi-raman",
      guideName: "Meenakshi Raman",
      guideRole: "Chettiar Heritage Conservator",
      guideAvatar: "assets/images/guides/guide-meenakshi.jpg",
      crowdRating: "Moderate & Relaxed (82% crowd avoidance)",
      amenities: [
        "1 Night in a Restored 1912 Burmese Teak Mansion",
        "Epic 7-Course Authentic Chettinad Spice Tasting Feast",
        "Hands-on Athangudi Tile Stenciling & Casting Session",
        "Private Heritage Bull-Cart Village Excursion",
        "Brass & Antique Bazaar Guided Scavenger Walk",
        "Local Artisan Guild Fair Wage Guarantee"
      ]
    },
    {
      id: "pkg-shekhawati-fresco-odyssey",
      title: "Shekhawati Open-Air Havelis & Silk Route Caravans",
      destinationId: "shekhawati-painted-havelis",
      destinationName: "Shekhawati Open-Air Fresco Havelis",
      city: "Nawalgarh",
      state: "Rajasthan",
      image: "assets/images/destinations/nawalgarh.jpg",
      badge: "Living Art Gallery",
      duration: "2 Days / 1 Night",
      durationType: "weekend",
      price: 6200,
      originalPrice: 7800,
      difficulty: "Easy",
      groupSize: "Max 6 travelers",
      guideId: "guide-vijay-shekhawat",
      guideName: "Vijay Singh Shekhawat",
      guideRole: "Fresco Restoration Artisan",
      guideAvatar: "assets/images/guides/guide-vijay.jpg",
      crowdRating: "Quiet & Peaceful (89% crowd avoidance)",
      amenities: [
        "1 Night in Heritage Fresco Courtyard Haveli",
        "Traditional Rajasthani Ker Sangri & Bajra Roti Meals",
        "Natural Mineral Fresco Pigment Mixing Workshop",
        "Private Camel-Cart Twilight Expedition through Sand Dunes",
        "Exclusive Keys to 4 Locked Historic Family Havelis",
        "Direct Donation to Shekhawati Haveli Restoration Trust"
      ]
    },
    {
      id: "pkg-nohwet-living-root-expedition",
      title: "Nohwet Living Root Bridges & Sacred Khasi Canyon Hike",
      destinationId: "nohwet-living-root-bridges",
      destinationName: "Nohwet Living Root Bridges & Cloud Forests",
      city: "Cherrapunji / Nohwet",
      state: "Meghalaya",
      image: "assets/images/destinations/nohwet.jpg",
      badge: "Eco-Wonder",
      duration: "Full Day (8 hrs)",
      durationType: "day",
      price: 3600,
      originalPrice: 4500,
      difficulty: "Challenging",
      groupSize: "Max 6 travelers",
      guideId: "guide-ban-marbaniang",
      guideName: "Ban Marbaniang",
      guideRole: "Indigenous Khasi Botanist",
      guideAvatar: "assets/images/guides/guide-ban.jpg",
      crowdRating: "Quiet & Peaceful (95% crowd avoidance)",
      amenities: [
        "Descend the 3,000 Ancient Khasi Hand-Chiseled Stone Stairs",
        "Bamboo Tube-Cooked Wild Herb Organic Lunch",
        "Special Access to Nohwet 1840 Living Root Sanctuary",
        "Crystal Natural Pool Swimming in Untouched River Gorges",
        "Village Council Cultural Clearance Fee Included",
        "Native Khasi Herbal Tea & Organic Honey Tasting"
      ]
    },
    {
      id: "pkg-varanasi-sacred-dawn",
      title: "Varanasi Northern Ghats, Dawn Boat & Ancient Akharas",
      destinationId: "varanasi-hidden-ghats-akharas",
      destinationName: "Northern Forgotten Ghats & Sacred Akharas",
      city: "Varanasi",
      state: "Uttar Pradesh",
      image: "assets/images/destinations/varanasi.jpg",
      badge: "Sacred Intimacy",
      duration: "Half Day (5 hrs)",
      durationType: "day",
      price: 2600,
      originalPrice: 3500,
      difficulty: "Moderate",
      groupSize: "Max 5 travelers",
      guideId: "guide-anand-mishra",
      guideName: "Anand Mishra",
      guideRole: "Vedic Philologist & Native Wrestler",
      guideAvatar: "assets/images/guides/guide-anand.jpg",
      crowdRating: "Moderate & Tranquil (84% crowd avoidance)",
      amenities: [
        "Private Hand-Rowed Sandalwood Bajra Boat at Sunrise",
        "Traditional Clay Kulhad Chai & Piping Hot Banarasi Kachori",
        "Exclusive Entry into 200-Year-Old Mud Wrestling Akhara",
        "Behind-the-Scenes Access to Master Silk Weaver Looms",
        "Vedic Sanskrit Chanting Masterclass on Panchganga Ghat",
        "Direct Artisan Honorarium Included"
      ]
    }
  ],

  // 8 Verified Local Native Guides in India
  guides: [
    {
      id: "guide-ramesh-mandavi",
      name: "Ramesh Mandavi",
      city: "Jagdalpur",
      state: "Chhattisgarh",
      avatar: "assets/images/guides/guide-ramesh.jpg",
      rating: 4.98,
      reviewsCount: 88,
      experienceYears: 16,
      toursCount: 210,
      specialties: ["Prehistoric Lost-Wax Metallurgy", "Muria Tribal Customs", "Dandakaranya Ethnobotany"],
      languages: ["Gondi", "Halbi", "Hindi", "English (Fluent)"],
      badges: ["Indigenous Elder", "Master Historian", "Preservation Hero"],
      bio: "Born in a village of 7th-generation metalsmiths in Bastar, Ramesh has spent his life documenting the oral epics of the Muria people and saving the ancient Dhokra casting technique from extinction. His tours welcome travelers into real family courtyards rather than sterile tourist centers.",
      videoIntro: {
        duration: "0:52",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "Our bronze is not just metal. Every piece holds a spirit from our forest ancestors. Come, let me show you our home."
      },
      communityImpact: "Founded the Tokapal Youth Metal Guild, training 34 young indigenous artisans with guaranteed fair wages."
    },
    {
      id: "guide-pronob-kalita",
      name: "Pronob Kalita",
      city: "Majuli Island",
      state: "Assam",
      avatar: "assets/images/guides/guide-pronob.jpg",
      rating: 4.95,
      reviewsCount: 74,
      experienceYears: 12,
      toursCount: 165,
      specialties: ["Sattriya Mask Making", "Brahmaputra Island Ecology", "Neo-Vaishnavite Philosophy"],
      languages: ["Assamese", "Hindi", "English (Fluent)", "Bengali"],
      badges: ["Living Legend", "Certified Naturalist", "Heritage Guardian"],
      bio: "Pronob grew up in Samaguri Satra, where theatrical masks of mythological deities are molded with river clay and bamboo. He is also an ardent protector of the Brahmaputra's shrinking river islands and Gangetic river dolphins.",
      videoIntro: {
        duration: "1:05",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "When water surrounds you, your connection with song, clay, and dance becomes pure prayer. Majuli welcomes your soul."
      },
      communityImpact: "Donates 15% of tour earnings to the Samaguri Satra manuscript digitization project."
    },
    {
      id: "guide-shankar-nayak",
      name: "Shankar Nayak",
      city: "Anegundi / Hampi",
      state: "Karnataka",
      avatar: "assets/images/guides/guide-shankar.jpg",
      rating: 4.99,
      reviewsCount: 132,
      experienceYears: 18,
      toursCount: 380,
      specialties: ["Vijayanagara Epigraphy", "Neolithic Petroglyphs", "Tungabhadra Coracle Navigation"],
      languages: ["Kannada", "Telugu", "Hindi", "English (Fluent)", "French (Basic)"],
      badges: ["Archaeologist Guide", "Top Rated 2026", "Native Storyteller"],
      bio: "Shankar was born in a stone cottage directly facing the Tungabhadra river. With a degree in Epigraphy and South Indian Archaeology, he can read 14th-century Kannada inscriptions carved into Hampi's boulders as easily as morning newspapers.",
      videoIntro: {
        duration: "0:48",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "The tourists stand in line at the stone chariot. But over here on the north bank, the stones still whisper forgotten Sanskrit lullabies."
      },
      communityImpact: "Leads the Anegundi Heritage Women's Collective, transforming banana stems into zero-waste textiles."
    },
    {
      id: "guide-tsering-dorje",
      name: "Tsering Dorje",
      city: "Kaza & Tabo",
      state: "Himachal Pradesh",
      avatar: "assets/images/guides/guide-tsering.jpg",
      rating: 4.97,
      reviewsCount: 65,
      experienceYears: 14,
      toursCount: 120,
      specialties: ["Tibetan Buddhist Iconography", "High-Altitude Trekking", "Alpine Paleontology"],
      languages: ["Spiti Bhoti", "Tibetan", "Hindi", "English (Fluent)"],
      badges: ["Himalayan Monk-Scholar", "Safety Certified", "Eco-Pioneer"],
      bio: "Tsering studied for 8 years at the Tabo Monastery Institute of Higher Buddhist Philosophy before dedicating himself to showing conscious travelers the fragile alpine soul of Spiti Valley with zero environmental footprint.",
      videoIntro: {
        duration: "1:12",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "In Spiti, we do not conquer mountains. We let the silence of the pass empty our hurried thoughts."
      },
      communityImpact: "Provides solar insulation materials for elderly households in high-altitude Langza village."
    },
    {
      id: "guide-meenakshi-raman",
      name: "Meenakshi Raman",
      city: "Karaikudi",
      state: "Tamil Nadu",
      avatar: "assets/images/guides/guide-meenakshi.jpg",
      rating: 4.96,
      reviewsCount: 92,
      experienceYears: 11,
      toursCount: 195,
      specialties: ["Chettiar Colonial Architecture", "Athangudi Tile Guild History", "Traditional Spice Gastronomy"],
      languages: ["Tamil", "English (Fluent)", "Hindi"],
      badges: ["Culinary Historian", "Preservation Advocate", "Top Rated 2026"],
      bio: "A native of Kanadukathan village, Meenakshi grew up playing in 100-room teak mansions. She is a published author on Chettinad architecture and works tirelessly to prevent these historic family homes from being dismantled for scrap timber.",
      videoIntro: {
        duration: "0:58",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "Every door frame is Burmese teak carved by master woodworkers. Every floor tile was cured under Tamil sunlight."
      },
      communityImpact: "Supports 8 remaining handmade Athangudi tile artisan workshops with regular direct traveler commissions."
    },
    {
      id: "guide-vijay-shekhawat",
      name: "Vijay Singh Shekhawat",
      city: "Nawalgarh",
      state: "Rajasthan",
      avatar: "assets/images/guides/guide-vijay.jpg",
      rating: 4.93,
      reviewsCount: 81,
      experienceYears: 15,
      toursCount: 240,
      specialties: ["Fresco Pigment Chemistry", "Silk Route Marwari History", "Haveli Conservation"],
      languages: ["Marwari", "Hindi", "English (Fluent)"],
      badges: ["Restoration Master", "Native Historian", "Desert Storyteller"],
      bio: "Vijay's grandfather was a hereditary painter in the courts of Nawalgarh. Today, Vijay preserves the rare recipe of lime plaster (Araish) and natural indigo dyes used to paint Shekhawati's iconic open-air mansions.",
      videoIntro: {
        duration: "0:45",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "Our ancestors painted their dreams on these walls—from railway trains to celestial maidens. Let's read them together."
      },
      communityImpact: "Pioneered free weekend fresco conservation workshops for 120 local schoolchildren in Nawalgarh."
    },
    {
      id: "guide-ban-marbaniang",
      name: "Ban Marbaniang",
      city: "Cherrapunji / Nohwet",
      state: "Meghalaya",
      avatar: "assets/images/guides/guide-ban.jpg",
      rating: 4.98,
      reviewsCount: 110,
      experienceYears: 13,
      toursCount: 225,
      specialties: ["Living Root Bio-Architecture", "Khasi Sacred Groves", "Sub-tropical Canyon Trekking"],
      languages: ["Khasi", "English (Fluent)", "Hindi"],
      badges: ["Botanist Guide", "Forest Guardian", "Eco-Hero"],
      bio: "Ban was taught by his grandmother how to weave the aerial roots of Ficus elastica over roaring canyon torrents. He is passionate about sharing the deep matrilineal ecological wisdom of the Khasi hills with respectful travelers.",
      videoIntro: {
        duration: "1:02",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "A concrete bridge rots in forty years. Our living tree bridges will grow stronger for our grandchildren's grandchildren."
      },
      communityImpact: "Reinvests guide proceeds to maintain the 3,000 hand-chiseled stone heritage steps connecting Nohwet to the river gorge."
    },
    {
      id: "guide-anand-mishra",
      name: "Anand Mishra",
      city: "Varanasi",
      state: "Uttar Pradesh",
      avatar: "assets/images/guides/guide-anand.jpg",
      rating: 4.99,
      reviewsCount: 145,
      experienceYears: 19,
      toursCount: 410,
      specialties: ["Vedic Sanskrit Philology", "Traditional Akhara Mud Wrestling", "Northern Ghats Subterranean Shrines"],
      languages: ["Bhojpuri", "Hindi", "Sanskrit", "English (Fluent)"],
      badges: ["Master Philologist", "Akhara Veteran", "Heritage Luminary"],
      bio: "A Sanskrit scholar from Sampurnanand Sanskrit Vishwavidyalaya and an active mud wrestler at Tulsi Akhara, Anand shows travelers the sacred intellectual and philosophical heart of Kashi away from the commercial tourist throngs.",
      videoIntro: {
        duration: "0:55",
        poster: "assets/images/destinations/bastar.jpg",
        quote: "Kashi is not a city of brick and stone. It is an unbroken state of awareness that has flowed for three thousand years."
      },
      communityImpact: "Runs evening free Sanskrit reading circles and maintains traditional earth wrestling pits for underprivileged youth."
    }
  ],

  // Reviews with Local Guide Responses
  reviews: [
    {
      id: "rev-1",
      author: "Dr. Radhika Sen",
      authorCity: "Bengaluru, India",
      authorAvatar: "assets/images/travelers/traveler-anita.jpg",
      rating: 5,
      date: "September 12, 2026",
      destinationName: "Bastar Tribal Heritage & Dhokra Artisans",
      guideName: "Ramesh Mandavi",
      verifiedTraveler: true,
      title: "An unforgettable cultural awakening far from commercial tourism",
      comment: "I have traveled across 20 countries, but spending three days with Ramesh Mandavi in Bastar was genuinely life-altering. We sat in a family's mud courtyard while 80-year-old metalsmiths cast lost-wax bronze over open sal wood fires. Zero tour buses, zero pushy souvenir vendors. The crowd meter said 14% and it truly felt like having an ancient world all to ourselves.",
      tags: ["Zero Crowds", "Master Artisan", "Life Changing", "Ethical Travel"],
      guideResponse: {
        guideName: "Ramesh Mandavi",
        role: "Indigenous Muria Historian",
        date: "September 13, 2026",
        text: "Dhanyawad Dr. Radhika! Your respectful curiosity and patience while learning the bees-wax technique warmed the hearts of all our village elders. The little owl amulet you cast will always keep our forest blessings with you."
      }
    },
    {
      id: "rev-2",
      author: "Marcus & Elena Lindqvist",
      authorCity: "Stockholm, Sweden",
      authorAvatar: "assets/images/travelers/traveler-marcus.jpg",
      rating: 5,
      date: "August 28, 2026",
      destinationName: "Majuli Island Neo-Vaishnavite Satras",
      guideName: "Pronob Kalita",
      verifiedTraveler: true,
      title: "Majuli's morning prayers and river peace stole our hearts",
      comment: "Pronob took us across the Brahmaputra at sunrise. Seeing the monks practice Sattriya dance in wooden Namghars while cymbals echoed through the mist was mesmerizing. We shaped mythological masks from bamboo and river clay. GoBeyond's route guide was so accurate—the Ro-Ro ferry from Nimati Ghat was smooth and easy.",
      tags: ["Spiritual Immersion", "River Island", "Folk Mask Art", "Zero Plastic"],
      guideResponse: {
        guideName: "Pronob Kalita",
        role: "Sattriya Mask Maker",
        date: "August 29, 2026",
        text: "It was a pure joy hosting both of you, Marcus and Elena. Watching you row the wooden country canoe into the sunset while the river dolphins broke the surface will remain a cherished memory."
      }
    },
    {
      id: "rev-3",
      author: "Vikramaditya Roy",
      authorCity: "Kolkata, India",
      authorAvatar: "assets/images/travelers/traveler-david.jpg",
      rating: 5,
      date: "August 15, 2026",
      destinationName: "Spiti Valley Mud Fortresses & Tabo Frescoes",
      guideName: "Tsering Dorje",
      verifiedTraveler: true,
      title: "1,000-year-old mud monasteries in complete alpine silence",
      comment: "If you want to avoid the circus of Manali, Spiti with Tsering is the only way. Tsering arranged an audience with the head Lama at Tabo Gompa. Standing in a mud chamber from 996 CE with flashlights revealing mineral Bodhisattvas was transcendent. The high clearance 4x4 and oxygen support made us feel completely safe at 3,890m.",
      tags: ["High Himalayas", "Ancient Frescoes", "Safety 10/10", "Meditation"],
      guideResponse: {
        guideName: "Tsering Dorje",
        role: "Spiti Monk-Scholar",
        date: "August 16, 2026",
        text: "Julley Vikramaditya! In Spiti we say that every conscious traveler who walks clockwise around Tabo leaves a knot of peace on the mountain. May your path always be clear."
      }
    },
    {
      id: "rev-4",
      author: "Ananya Deshmukh",
      authorCity: "Pune, India",
      authorAvatar: "assets/images/travelers/traveler-sunita.jpg",
      rating: 5,
      date: "July 30, 2026",
      destinationName: "Anegundi & Northern Boulder Ruins",
      guideName: "Shankar Nayak",
      verifiedTraveler: true,
      title: "Skip the tourist side of Hampi—Anegundi is the real treasure!",
      comment: "Shankar Nayak is not just a guide, he is a living encyclopedia. While everyone else was queuing up for the Stone Chariot in the heat, we were paddling a traditional wicker coracle through cool granite gorges to prehistoric cave art that isn't even marked on Google Maps. The banana leaf lunch cooked by the women's collective was sensational.",
      tags: ["Coracle Boat", "Prehistoric Petroglyphs", "Ancient Ruins", "Local Flavors"],
      guideResponse: {
        guideName: "Shankar Nayak",
        role: "Archaeologist Guide",
        date: "July 31, 2026",
        text: "Namaskara Ananya! You climbed Anjanadri hill faster than our village monkeys! Thank you for supporting our women's banana fiber cooperative with your purchase."
      }
    },
    {
      id: "rev-5",
      author: "Siddharth & Priya Nair",
      authorCity: "Chennai, India",
      authorAvatar: "assets/images/travelers/traveler-siddharth.jpg",
      rating: 5,
      date: "July 18, 2026",
      destinationName: "Chettinad Aristocratic Mansions & Tile Guilds",
      guideName: "Meenakshi Raman",
      verifiedTraveler: true,
      title: "100-room Burmese teak mansions and authentic spicy culinary gold",
      comment: "Meenakshi opened private family courtyards that are closed to ordinary tourists. We pressed our own floral Athangudi floor tile at an 80-year-old forge and watched the master cook prepare mutton chukka with hand-ground stone spices. Outstanding experience that directly honors local artisans.",
      tags: ["Teak Palaces", "Handmade Tiles", "Culinary Legend", "Authentic Guild"],
      guideResponse: {
        guideName: "Meenakshi Raman",
        role: "Chettiar Heritage Conservator",
        date: "July 19, 2026",
        text: "Nandri Siddharth and Priya! Your tile has dried under the sun and we are mailing it to Chennai this week. The Muthu tile family sends their warmest regards."
      }
    },
    {
      id: "rev-6",
      author: "Claire Beauchamp",
      authorCity: "Lyon, France",
      authorAvatar: "assets/images/travelers/traveler-claire.jpg",
      rating: 5,
      date: "June 24, 2026",
      destinationName: "Nohwet Living Root Bridges & Cloud Forests",
      guideName: "Ban Marbaniang",
      verifiedTraveler: true,
      title: "Walking on living tree roots through the Meghalayan mist",
      comment: "Hiking the 3,000 hand-chiseled stones down to Nohwet with Ban was magical. Ban explained the botanical science of Ficus elastica and why Khasi matrilineal society protects sacred groves. We swam in a natural emerald canyon pool with nobody else around. Truly the antithesis of mass commercial tourism.",
      tags: ["Living Root Bridge", "Clean Nature", "Bio Architecture", "Khasi Culture"],
      guideResponse: {
        guideName: "Ban Marbaniang",
        role: "Khasi Botanist",
        date: "June 25, 2026",
        text: "Khublei Shibun, Claire! You respected our sacred groves like a native daughter. May the rains always bring you fresh strength."
      }
    }
  ],

  // Categorized FAQs
  faqs: [
    {
      id: "faq-1",
      category: "Crowd Meter & Off-Beat Travel",
      question: "How does your live Crowd Meter Indicator calculate density?",
      answer: "Our Crowd Meter combines real-time footfall data from local heritage gatekeepers, satellite parking density, and ticket queues at nearby commercial spots with historical seasonal patterns. A green 'Quiet & Peaceful' badge signifies fewer than 25% average tourists, guaranteeing an intimate, contemplative heritage experience without human gridlock."
    },
    {
      id: "faq-2",
      category: "Crowd Meter & Off-Beat Travel",
      question: "Why do you only focus on destinations within India away from tourist traps?",
      answer: "India has over 40 UNESCO sites and tens of thousands of living indigenous crafts, mud monasteries, and tribal heritage guilds that remain completely shadowed by commercialized hotspots like Agra, Jaipur, or Goa. By steering conscious travelers towards hidden Indian heritage, we alleviate over-tourism pressure on fragile monuments and channel vital economic revenue to remote artisan hamlets."
    },
    {
      id: "faq-3",
      category: "Booking, Pricing & Direct Local Impact",
      question: "How much of my booking fee goes directly to the local community and guide?",
      answer: "A minimum of 75% of your total package price goes directly into the hands of your local native guide, family-run homestays, and village artisan guilds. Furthermore, every booking includes a 10% pledge dedicated to our Community Heritage Preservation Fund, financing oral history archiving, restoration of mud structures, and youth artisan apprenticeships."
    },
    {
      id: "faq-4",
      category: "Booking, Pricing & Direct Local Impact",
      question: "What payment methods are supported on GoBeyond Travels?",
      answer: "We support all major Indian and international payment gateways including UPI (Google Pay, PhonePe, Paytm, BHIM), Credit/Debit Cards (Visa, MasterCard, RuPay, Amex), Apple Pay, and PayPal for international conscious travelers. All payments are encrypted and backed by our Fair Cancellation Guarantee."
    },
    {
      id: "faq-5",
      category: "Local Guides & Safety",
      question: "How are your local native guides verified?",
      answer: "Every GoBeyond guide undergoes a rigorous 4-stage vetting process: proof of native residence and lineage, verification of historical/botanical/craft knowledge by our Heritage Advisory Council, criminal background verification, and formal training in emergency first-aid, leave-no-trace ethics, and female traveler safety."
    },
    {
      id: "faq-6",
      category: "Local Guides & Safety",
      question: "Can solo female travelers safely book these off-beat expeditions?",
      answer: "Yes, over 45% of our conscious travelers are solo travelers, including many women. We pair solo travelers with certified native hosts who are deeply respected in their communities, provide GPS check-in checkpoints, and ensure you stay with vetted multi-generational family homestays."
    },
    {
      id: "faq-7",
      category: "Cultural Respect & Sustainable Travel",
      question: "What cultural etiquette should I follow when visiting indigenous tribal communities?",
      answer: "We uphold strict respectful protocols: always ask verbal permission through your guide before taking portraits or photographing domestic altars; never offer single-use plastic bottles or candies to children; dress modestly with shoulders and knees covered in sacred shrines; and support families by purchasing crafts directly from artisan forges rather than aggressively bargaining."
    },
    {
      id: "faq-8",
      category: "Cultural Respect & Sustainable Travel",
      question: "What is your group size policy?",
      answer: "To prevent disruptive foot traffic and ecological strain on delicate villages and high-altitude mud monasteries, all GoBeyond tours are strictly capped at 4 to 8 travelers. We never run 50-passenger tour buses."
    }
  ],

  // Indian Cities & Gateway Hubs for the Interactive City Selector
  cities: [
    { name: "Jagdalpur", state: "Chhattisgarh", sitesCount: 1, region: "Central India", image: "assets/images/destinations/bastar.jpg" },
    { name: "Majuli / Jorhat", state: "Assam", sitesCount: 1, region: "Northeast India", image: "assets/images/destinations/majuli.jpg" },
    { name: "Hampi / Anegundi", state: "Karnataka", sitesCount: 1, region: "South India", image: "assets/images/destinations/hampi.jpg" },
    { name: "Kaza / Tabo", state: "Himachal Pradesh", sitesCount: 1, region: "Himalayas", image: "assets/images/destinations/spiti.jpg" },
    { name: "Karaikudi", state: "Tamil Nadu", sitesCount: 1, region: "South India", image: "assets/images/destinations/chettinad.jpg" },
    { name: "Orchha", state: "Madhya Pradesh", sitesCount: 1, region: "Central India", image: "assets/images/destinations/orchha.jpg" },
    { name: "Ziro Valley", state: "Arunachal Pradesh", sitesCount: 1, region: "Northeast India", image: "assets/images/destinations/ziro.jpg" },
    { name: "Nawalgarh / Mandawa", state: "Rajasthan", sitesCount: 1, region: "North India", image: "assets/images/destinations/nawalgarh.jpg" },
    { name: "Varanasi", state: "Uttar Pradesh", sitesCount: 1, region: "North India", image: "assets/images/destinations/varanasi.jpg" },
    { name: "Cherrapunji / Nohwet", state: "Meghalaya", sitesCount: 1, region: "Northeast India", image: "assets/images/destinations/nohwet.jpg" },
    { name: "Vadodara / Champaner", state: "Gujarat", sitesCount: 1, region: "West India", image: "assets/images/destinations/champaner.jpg" },
    { name: "Thanjavur / Swamimalai", state: "Tamil Nadu", sitesCount: 1, region: "South India", image: "assets/images/destinations/thanjavur.jpg" }
  ]
};

// Expose globally
window.GoBeyondData = GoBeyondData;
