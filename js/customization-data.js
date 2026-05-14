if (!window.CUSTOMIZATION) {

// Keyed uniformly as "model-id:year" for all entries.
// Lookup: CUSTOMIZATION[modelId + ":" + year]

var CUSTOMIZATION = {

// ═══════════════════════════════════════════════════════════════
// SET 1 — NEW / CURRENT MODELS
// ═══════════════════════════════════════════════════════════════

"mercedes-g-wagon:2024": {
    specialLabel: "MANUFAKTUR",
    variants: ["G 550","AMG G 63","G manufaktur"],
    paints: {
        standard: [
            "Black","Polar White","Obsidian Black Metallic","Selenite Grey Metallic",
            "Mojave Silver Metallic","Cirrus Silver Metallic","Emerald Green Metallic",
            "Brilliant Blue Metallic","Twilight Blue Metallic","MANUFAKTUR Cardinal Red Metallic",
            "MANUFAKTUR Diamond White Metallic","MANUFAKTUR Alpine Grey"
        ],
        special: [
            "Night Black Magno","Platinum Magno","Monza Gray Magno","Dakota Brown Magno",
            "Dark Olive Green Magno","Sintered Bronze Magno","Cardinal Red Magno",
            "Copper Orange Magno","Green Hell Magno","Kalahari Gold Magno",
            "Moonlight White Magno","Brilliant Blue Magno","China Blue",
            "Desert Silver Metallic","Graphite Metallic","Mystic Blue Metallic",
            "Olive Metallic","Sea Blue Metallic","South Sea Blue Metallic"
        ],
        finishes: ["Solid","Metallic","Magno (matte)","MANUFAKTUR Metallic","MANUFAKTUR Non-Metallic"]
    },
    rims: [
        { size:'19"', style:"5-twin-spoke", note:"Standard" },
        { size:'20"', style:"AMG 10-spoke", note:"AMG Line" },
        { size:'20"', style:"AMG multi-spoke, black accents", note:"Night Package" },
        { size:'22"', style:"AMG cross-spoke forged", note:"AMG G 63" },
        { size:'22"', style:"AMG multi-spoke black", note:"Night Package II" }
    ],
    rimColors: ["Silver","Black","High-sheen black","Two-tone black/silver"],
    brakes: ["Silver","Red (AMG)","Black (Night Package)"],
    interior: {
        colors: {
            standard: [
                "Black, leather","Macchiato Beige/Black, leather","Nut Brown/Black, leather",
                "Black Nappa","Macchiato Beige/Black Nappa","Tartufo Brown/Black Nappa",
                "Classic Red/Black Nappa","Black Exclusive Nappa"
            ],
            special: [
                "Black w/Bronze Stitching","Black w/Gold Stitching","Black w/Red Stitching",
                "Black w/Lime Green Stitching","Black w/White Stitching","Black w/Yacht Blue Stitching",
                "Black w/Bengal Red A-Band","Black w/Yacht Blue A-Band","Black w/Lime Green A-Band",
                "Platinum White","Platinum White/Black","Espresso Brown","Espresso Brown/Black",
                "Yacht Blue","Yacht Blue/Black","Bengal Red","Bengal Red/Black",
                "Saddle Brown","Saddle Brown/Black","Titanium Grey Pearl","Titanium Grey Pearl/Black",
                "Classic Red/Black Exclusive Nappa","Tartufo Brown/Black Exclusive Nappa",
                "Macchiato Beige/Espresso Brown Exclusive Nappa"
            ]
        },
        trim: [
            "Natural Grain Brown Walnut Wood","Natural Grain Black Ash Wood",
            "High-Gloss Brown Burr Walnut","Piano Black Lacquer",
            "Carbon Fiber (AMG)","Silver Chrome (MANUFAKTUR)",
            "Nappa Leather Dashboard (MANUFAKTUR)","Diamond-stitched Nappa leather door panels"
        ],
        packages: [
            { name:"Exclusive Interior Package", desc:"Leather dashboard, extended topstitching, microfiber headliner" },
            { name:"Exclusive Interior Package Plus", desc:"Nappa leather door panels, kneepads, tailgate interior" },
            { name:"G manufaktur Interior Package", desc:"Grab handle badge, armrests, centre console, door panels in Nappa leather" },
            { name:"G manufaktur Interior Package Plus", desc:"Diamond stitching, velour mats with leather border" },
            { name:"Seat Comfort Package", desc:"Multicontour seats with massage, rapid heating, ventilation" },
            { name:"Night Package", desc:"Darkened trim, black wheels, black brush guard, black spare wheel cover" },
            { name:"AMG Night Package", desc:"Black chrome accents, darkened lights" }
        ]
    },
    ambientLighting: "64-color LED, illuminated air vents and door sills (MANUFAKTUR)",
    steeringWheel: ["Leather-wrapped","Nappa leather (AMG)","Heated","AMG Performance with touch controls"],
    pedals: ["Rubber (standard)","Stainless steel sport (AMG)"]
},

"lexus-lx-600:2024": {
    specialLabel: "Ultra Luxury",
    variants: ["LX 600","LX 600 Premium","LX 600 F Sport Handling","LX 600 Luxury","LX 600 Ultra Luxury"],
    paints: {
        standard: [
            "Eminent White Pearl","Atomic Silver","Caviar","Nori Green Pearl",
            "Manganese Luster","Incognito","Nightfall Mica"
        ],
        special: ["Cadmium Orange (F Sport only)"],
        finishes: ["Pearl","Metallic","Mica"]
    },
    rims: [
        { size:'20"', style:"10-spoke alloy", note:"LX 600 / Premium" },
        { size:'22"', style:"Forged alloy, dark gray metallic", note:"F Sport Handling" },
        { size:'22"', style:"10-spoke alloy", note:"Luxury / Ultra Luxury" }
    ],
    rimColors: ["Silver","Dark gray metallic (F Sport)","Chrome (Luxury)"],
    brakes: ["Standard silver","Dark finish (F Sport)"],
    interior: {
        colors: {
            standard: ["Black","Palomino","White/Peppercorn","Sunflare"],
            special: ["Circuit Red (F Sport)","Black semi-aniline leather (Luxury)"]
        },
        trim: [
            "Open-pore wood","Hadori aluminum (F Sport)","Takahona wood (Ultra Luxury)",
            "Piano black","Leather-wrapped dashboard (Luxury+)"
        ],
        packages: [
            { name:"Appearance Package", desc:"Dark exterior trim, 18\" wheels (Premium/Luxury)" },
            { name:"Rear Seat Entertainment", desc:"Two 11.4\" screens (Ultra Luxury)" },
            { name:"Height-adjustable Suspension", desc:"Luxury and F Sport" },
            { name:"Mark Levinson Audio", desc:"25 speakers" }
        ]
    },
    seating: ["5-passenger","7-passenger (Premium, F Sport, Luxury)","4-passenger executive (Ultra Luxury)"],
    ambientLighting: "Ambient cabin illumination with custom themes (Premium+)",
    steeringWheel: ["Leather-trimmed","Wood-and-leather (Luxury)"],
    pedals: ["Standard","Aluminum (F Sport)"]
},

"range-rover:2024": {
    specialLabel: "SV Bespoke",
    variants: ["SE","HSE","Autobiography","SV","SV Bespoke"],
    paints: {
        standard: [
            "Fuji White","Santorini Black Metallic","Eiger Grey Metallic","Hakuba Silver Metallic",
            "Belgravia Green Metallic","Varesine Blue Metallic","Ostuni Pearl White Metallic",
            "Carpathian Grey Premium Metallic","Batumi Gold Premium Metallic","Charente Grey Premium Metallic"
        ],
        special: [
            "Sunrise Copper Ultra Metallic Gloss","Velocity Blue Ultra Metallic Gloss",
            "Ionian Silver Ultra Metallic Gloss","Flux Silver Ultra Metallic Gloss",
            "Ethereal Frost Silver Ultra Metallic Gloss","Tourmaline Brown Ultra Metallic Gloss",
            "Sanguinello Orange Ultra Metallic Gloss","Constellation Blue Ultra Metallic Gloss",
            "Sunset Gold Ultra Metallic Gloss","Icy White Special Effect",
            "Petrolix Blue Ultra Metallic Gloss","Ligurian Black Ultra Metallic Gloss",
            "British Racing Green Ultra Metallic Gloss","Amethyst Grey-Purple Ultra Metallic Gloss",
            "Match to Sample — any colour"
        ],
        finishes: ["Solid","Metallic","Premium Metallic","SV Bespoke Gloss","SV Bespoke Satin","SV Bespoke Special Effect"]
    },
    rims: [
        { size:'21"', style:"7-spoke alloy", note:"SE" },
        { size:'21"', style:"10-spoke alloy", note:"HSE" },
        { size:'22"', style:"9-spoke alloy", note:"Autobiography" },
        { size:'22"', style:"5-split-spoke gloss black", note:"SV" },
        { size:'23"', style:"5-spoke gloss black", note:"SV option" }
    ],
    rimColors: ["Silver","Gloss black","Satin black","Diamond-turned"],
    brakes: ["Black (standard)","Red (SV performance)"],
    interior: {
        colors: {
            standard: ["Ebony/Ebony","Ebony/Perlino","Caraway/Caraway","Caraway/Perlino","Perlino/Perlino","Ecru/Ecru","Deep Garnet/Deep Garnet"],
            special: [
                "SV Ebony/Ebony","SV Perlino/Perlino","SV Serenity Caraway/Perlino",
                "SV Serenity Liberty Blue/Perlino","SV Serenity Sequoia Green/Perlino",
                "SV Intrepid Rosewood/Ebony","SV Intrepid Ebony/Ebony","SV Intrepid Light Cloud/Cinder Grey"
            ]
        },
        leatherGrades: ["Windsor Leather","Near-Aniline Leather (HSE+)","Semi-Aniline Leather (Autobiography+)","SV Bespoke Leather"],
        trim: [
            "Grand Black veneer","Kalahari veneer","Shadow Walnut","Satin Straight Walnut",
            "Black Burl Ash","Argento Pinstripe","Figured Macassar","Carbon Fiber (SV)"
        ],
        packages: [
            { name:"Executive Class Rear Seats", desc:"Power reclining, massage, footrests" },
            { name:"Rear Seat Entertainment", desc:"Dual 11.4\" screens" },
            { name:"Meridian Signature Sound", desc:"35 speakers" },
            { name:"Hot Stone Massage Seats", desc:"" },
            { name:"Refrigerator Console", desc:"" },
            { name:"Panoramic Roof", desc:"" }
        ]
    },
    seating: ["5-passenger","7-passenger (third row)","4-passenger executive (SV LWB)"],
    ambientLighting: "Ambient lighting throughout",
    steeringWheel: ["Leather-wrapped","Heated"],
    pedals: ["Standard","Aluminium (SV)"]
},

"cadillac-escalade-v:2024": {
    specialLabel: "V-Series",
    variants: ["Luxury","Premium Luxury","Sport","Premium Luxury Platinum","Sport Platinum","V"],
    paints: {
        standard: [
            "Argent Silver Metallic","Black Raven","Crystal White Tricoat","Dark Emerald Metallic",
            "Dark Moon Blue Metallic","Galactic Gray Metallic","Radiant Red Tintcoat",
            "Sandstone Metallic","Shadow Metallic","Infrared Tintcoat"
        ],
        special: [],
        finishes: ["Metallic","Tricoat","Tintcoat"]
    },
    rims: [
        { size:'22"', style:"14-spoke alloy, Bright Silver", note:"Luxury / Premium Luxury" },
        { size:'22"', style:"12-spoke alloy, Gloss Black", note:"Sport" },
        { size:'22"', style:"12-spoke alloy, Polished", note:"Platinum" },
        { size:'22"', style:"12-spoke, Gloss Black with Machined Face", note:"V" }
    ],
    rimColors: ["Bright Silver","Gloss Black","Polished"],
    brakes: ["Standard","Brembo Red (V)"],
    interior: {
        colors: {
            standard: ["Jet Black","Whisper Beige","Dark Auburn","Sedona Sauvage","Very Light Cashmere","Maple Sugar","Kona Brown","Noir"],
            special: [
                "Jet Black Semi-Aniline, Mondrian Quilting",
                "Dark Auburn/Jet Black Semi-Aniline, Mondrian Quilting"
            ]
        },
        trim: [
            "Zebra wood (V)","HXR trim (V)",
            "Leather-wrapped instrument panel (Platinum+)",
            "Leather-wrapped console and upper door panels (Platinum+)"
        ],
        packages: [
            { name:"Touring Package", desc:"Adaptive air suspension, soft-close doors" },
            { name:"Performance Package", desc:"Upgraded suspension, electronically controlled LSD" },
            { name:"Heavy-Duty Trailering Package", desc:"" },
            { name:"Rear-Seat Entertainment System", desc:"" }
        ]
    },
    ambientLighting: "26-color ambient lighting with light pipes",
    steeringWheel: ["Leather-wrapped, heated","Wood-and-leather (Platinum)"],
    pedals: ["Standard","Sport pedals (V)"]
},

"cadillac-escalade-iq:2026": {
    specialLabel: "Sport",
    variants: ["Luxury 1","Luxury 2","Sport 1","Sport 2"],
    paints: {
        standard: [
            "Adobe Frost","Black Cherry Tintcoat","Black Raven","Deep Space Metallic",
            "Luna Metallic","Magnus Metal Frost","Sandstone"
        ],
        special: [],
        finishes: ["Metallic","Tintcoat","Frost (matte/satin)"]
    },
    rims: [
        { size:'24"', style:"Alloy wheels", note:"Standard" },
        { size:'26"', style:"Alloy wheels", note:"Optional" }
    ],
    rimColors: ["Silver","Black","Two-tone"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Backen Black with Santorini accents","Sheer Gray with Dark Medium Cinder accents"],
            special: []
        },
        trim: ["Open-pore wood (Luxury)","Carbon fiber (Sport)","Metal accents"],
        packages: [
            { name:"55\" Total Screen Display", desc:"Dual widescreen setup" },
            { name:"AKG Studio Reference Audio", desc:"40 speakers" },
            { name:"Super Cruise", desc:"Hands-free driving system" },
            { name:"Panoramic Fixed Glass Roof", desc:"" }
        ]
    },
    ambientLighting: "Ambient lighting throughout all rows",
    steeringWheel: ["Leather-wrapped"],
    pedals: ["Standard"]
},

"byd-atto-3:2024": {
    specialLabel: null,
    variants: ["Standard Range","Extended Range"],
    paints: {
        standard: ["Ski White","Surf Blue","Boulder Grey","Cosmos Black","Harbour Grey"],
        special: [],
        finishes: ["Solid (Ski White)","Metallic (all others)"]
    },
    rims: [{ size:'18"', style:"Alloy wheels", note:"Standard" }],
    rimColors: ["Silver/machined"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Blue + Grey","Blue + Black","White + Blue"],
            special: []
        },
        trim: ["Guitar string door pocket straps","Multi-color rhythmic ambient light","Door trim with strings"],
        packages: [
            { name:"15.6\" Rotating Touchscreen", desc:"2024 update" },
            { name:"Panoramic Sunroof", desc:"" },
            { name:"Heat Pump", desc:"" },
            { name:"PM2.5 Air Filter", desc:"" }
        ]
    },
    ambientLighting: "Multi-color rhythmic interactive ambient light",
    steeringWheel: ["Leather-wrapped"],
    pedals: ["Standard"]
},

"toyota-camry:2025": {
    specialLabel: null,
    variants: ["LE","SE","XLE","XSE"],
    paints: {
        standard: [
            "Midnight Black Metallic","Ice Cap","Celestial Silver Metallic","Predawn Gray Mica",
            "Supersonic Red","Reservoir Blue","Ice Edge","Ocean Gem","Heavy Metal",
            "Underground","Wind Chill Pearl","Boulder"
        ],
        special: ["Heavy Metal/Midnight Black roof (XSE)","Supersonic Red/Midnight Black roof (XSE)"],
        finishes: ["Solid","Metallic","Mica","Pearl"]
    },
    rims: [
        { size:'16"', style:"10-spoke silver-painted alloy", note:"LE" },
        { size:'18"', style:"Multi-spoke black-finished alloy", note:"SE" },
        { size:'18"', style:"Two-tone machined/black alloy", note:"XLE" },
        { size:'19"', style:"Black and smoke-gray alloy", note:"XSE" }
    ],
    rimColors: ["Silver-painted","Black-finished","Two-tone machined/black","Black/smoke-gray"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Black (LE/SE)","Boulder (LE/SE)","Light Gray (XLE)","Cockpit Red (XSE)"],
            special: []
        },
        trim: ["Piano black","Silver accents","Sport mesh inserts (SE/XSE)"],
        packages: [
            { name:"Cold Weather Package", desc:"Heated seats, heated steering wheel" },
            { name:"Multimedia Upgrade Package", desc:"12.3\" touchscreen, power moonroof" },
            { name:"Premium Package", desc:"JBL audio, ventilated seats, HUD, panoramic roof" },
            { name:"Premium Plus Package", desc:"Traffic Jam Assist, Cross-Traffic Alert, Lane Change Assist, Parking Assist" }
        ]
    },
    ambientLighting: "Available on XLE/XSE",
    steeringWheel: ["Tilt/telescopic (LE)","Leather with paddle shifters (SE/XSE)","Heated leather (XLE)"],
    pedals: ["Standard","Aluminum sport (SE/XSE)"]
},

"toyota-corolla:2025": {
    specialLabel: null,
    variants: ["LE","SE","XSE","FX"],
    paints: {
        standard: [
            "Black Sand Pearl","Classic Silver Metallic","Blueprint","Celestite Gray Metallic",
            "Midnight Black Metallic","Wind Chill Pearl","Barcelona Red Metallic","Ruby Flare Pearl"
        ],
        special: ["Metal Oxide (XSE/FX)","Metal Oxide/Gloss Black roof (two-tone)"],
        finishes: ["Pearl","Metallic","Solid"]
    },
    rims: [
        { size:'16"', style:"Steel with covers", note:"LE" },
        { size:'18"', style:"Alloy, dark gray metallic", note:"SE" },
        { size:'18"', style:"Alloy, machined/black", note:"XSE" },
        { size:'18"', style:"Black alloy", note:"FX" }
    ],
    rimColors: ["Silver (LE)","Dark gray metallic (SE)","Machined/black (XSE)","Black (FX)"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Light Gray fabric","Black fabric","Macadamia/Mocha fabric"],
            special: ["Black/Red premium fabric (SE/XSE)","Moonstone (SE/XSE)","Macadamia (XSE)"]
        },
        trim: ["Piano black","Silver accents","Sport accents (SE/XSE)"],
        packages: [
            { name:"12.3\" Digital Gauge", desc:"XSE" },
            { name:"Heated Front Seats", desc:"Available" },
            { name:"Wireless Charging", desc:"Available" }
        ]
    },
    ambientLighting: null,
    steeringWheel: ["Synthetic leather (all grades)"],
    pedals: ["Standard","Sport pedals (SE/XSE)"]
},

"tesla-cybertruck:2024": {
    specialLabel: "Cyberbeast",
    variants: ["All-Wheel Drive (AWD)","Cyberbeast"],
    paints: {
        standard: ["Stainless Steel (unpainted, standard)"],
        special: [
            "Satin Ceramic White","Satin Rose Gold","Satin Abyss Blue","Satin Slip Grey",
            "Slip Grey","Forest Green","Satin Crimson Red","Iridescent Purple",
            "Tactical Green","Satin Dark Grey","Copper Tinted Clear"
        ],
        finishes: ["Unpainted stainless steel","Factory vinyl wrap (optional)"]
    },
    rims: [
        { size:'20"', style:"Cyberstream wheels", note:"AWD" },
        { size:'20"', style:"Cyberstream with aero covers", note:"Cyberbeast" }
    ],
    rimColors: ["Silver/machined"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Black","White","Tactical Gray"],
            special: []
        },
        trim: ["Minimalist textile accents"],
        packages: [
            { name:"18.5\" + 9.4\" Touchscreens", desc:"Front and rear" },
            { name:"HEPA Air Filter", desc:"Hospital-grade" },
            { name:"Wrap-around Ambient Lighting", desc:"Configurable colour" },
            { name:"120V + 240V Outlets", desc:"Cabin and truck bed" }
        ]
    },
    ambientLighting: "Wrap-around ambient lighting, configurable colour",
    steeringWheel: ["Steer-by-wire yoke","Steer-by-wire steering wheel"],
    pedals: ["Standard aluminum"]
},

"kia-sportage:2023": {
    specialLabel: "X-Pro",
    variants: ["LX","EX","X-Line AWD","SX","SX Prestige","X-Pro","X-Pro Prestige"],
    paints: {
        standard: [
            "Ebony Black","Sapphire Blue","Glacial White Pearl","Everlasting Silver",
            "Gravity Gray","Dawning Red","Jungle Green","Wolf Gray","Snow White Pearl"
        ],
        special: [
            "Glacial White Pearl/Ebony Black (two-tone)",
            "Wolf Gray/Ebony Black (two-tone)",
            "Jungle Green/Ebony Black (two-tone)"
        ],
        finishes: ["Solid","Metallic","Pearl"]
    },
    rims: [
        { size:'17"', style:"Machined-finish alloy", note:"LX" },
        { size:'18"', style:"Machined-finish alloy", note:"EX" },
        { size:'19"', style:"Gloss black alloy", note:"X-Line AWD" },
        { size:'18"', style:"Matte gray alloy", note:"SX" },
        { size:'19"', style:"Gloss black alloy", note:"SX Prestige" },
        { size:'17"', style:"Matte black alloy, all-terrain", note:"X-Pro" }
    ],
    rimColors: ["Machined silver","Gloss black","Matte gray","Matte black"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Saturn Black woven cloth (LX)","Black SynTex (EX)","Black leather (SX)"],
            special: ["Premium synthetic leather (SX Prestige)"]
        },
        trim: ["Satin chrome (SX)","Gloss black (X-Line)","Piano black accents"],
        packages: [
            { name:"Convenience Group", desc:"Heated second-row seats, wireless charging, 360° camera" },
            { name:"Premium Group", desc:"Panoramic sunroof, McIntosh audio" },
            { name:"Flexible Seating Group", desc:"Heated/power captain's chairs, power-reclining third row" },
            { name:"Heavy-Duty Trailer Tow", desc:"" }
        ]
    },
    ambientLighting: null,
    steeringWheel: ["Standard","Heated (SX Prestige/X-Pro)"],
    pedals: ["Standard","Alloy covers (X-Pro)"]
},

"mercedes-s-class:2025": {
    specialLabel: "MANUFAKTUR",
    variants: ["S 500 4MATIC","S 580 4MATIC","S 580e 4MATIC","Maybach S 580","Maybach S 680","AMG S 63 E Performance"],
    paints: {
        standard: [
            "Black","Polar White","Obsidian Black Metallic","Selenite Grey Metallic",
            "Mojave Silver Metallic","Cirrus Silver Metallic","Emerald Green Metallic",
            "Brilliant Blue Metallic","Twilight Blue Metallic","MANUFAKTUR Diamond White Metallic",
            "MANUFAKTUR Cardinal Red Metallic","MANUFAKTUR Alpine Grey"
        ],
        special: [
            "Black Sparkling (glass flake)","Verde Silver Magno","Selenite Gray Magno",
            "Signature China Blue","Signature Graphite Metallic","Signature Kalahari Gold Magno",
            "Signature Mystic Blue Metallic","Signature Night Black Magno","Signature Olive Metallic",
            "Signature Silicon Gray","Signature Deep White","Signature Nut Brown",
            "Signature Pastel Yellow","Signature Truffle Brown","Signature Yacht Blue",
            "Made to Measure — 150+ colours available"
        ],
        finishes: ["Solid","Metallic","MANUFAKTUR Metallic","MANUFAKTUR Magno (matte)","MANUFAKTUR Pearl","Black Sparkling","Two-tone (Maybach)"]
    },
    rims: [
        { size:'19"', style:"Mercedes-Benz design", note:"Standard" },
        { size:'20"', style:"Multi-spoke, High-Pressure Casting", note:"Standard" },
        { size:'20"', style:"AMG Line", note:"AMG Line Package" },
        { size:'21"', style:"AMG Line", note:"AMG Line Package" }
    ],
    rimColors: ["Silver","Black","High-sheen","Tremolite Metallic High Sheen","Custom (Made to Measure)"],
    brakes: ["Silver (standard)","Red (AMG)"],
    interior: {
        colors: {
            standard: [
                "Black Nappa","Macchiato Beige/Black Nappa","Tartufo Brown/Black Nappa",
                "Classic Red/Black Nappa","MANUFAKTUR Yacht Blue/Black Nappa","MANUFAKTUR Nut Brown/Black Nappa",
                "Cirrus Silver/Nautical Blue","Cirrus Silver/Obsidian Black","Kalahari Gold/Obsidian Black",
                "Mojave Silver/Emerald Green","Selenite Gray/Cirrus Silver","Sonoran Brown/Obsidian Black"
            ],
            special: [
                "Tobacco Brown","Carmine Red","Lake Green","Corn Yellow","Beech Brown",
                "MANUFAKTUR Crystal White/Silver Gray Pearl","MANUFAKTUR Deep White/Black Pearl",
                "Made to Measure — 400+ colours"
            ]
        },
        trim: [
            "Natural Grain Amberwood with Herringbone Pattern","Metal Structure High-Gloss Silver",
            "Natural grain wood","Piano black lacquer","Carbon fiber (AMG)","Extended sculptural trim surfaces"
        ],
        packages: [
            { name:"AMG Line", desc:"AMG wheels up to 21\", sports steering wheel, stainless steel pedals" },
            { name:"MANUFAKTUR Leather Package", desc:"Leather headliner, upholstered rear cushions" },
            { name:"MANUFAKTUR Made to Measure", desc:"Fully bespoke interior — 400+ colour options" },
            { name:"Night Package", desc:"Dark chrome grille, flush door handles" },
            { name:"Executive Rear Seat Package", desc:"Power rear seats, heating, ventilation, massage" },
            { name:"Burmester 4D Surround Sound", desc:"30 speakers, 1750W" }
        ]
    },
    ambientLighting: "64-color ambient lighting, extended light graphics, animated logo projection, illuminated door sills",
    steeringWheel: ["Leather-wrapped","Sports wheel with flattened bottom (AMG Line)","Heated","MANUFAKTUR hand-fitted leather"],
    pedals: ["Standard","Stainless steel sport (AMG Line)"]
},

"mercedes-gle:2024": {
    specialLabel: "MANUFAKTUR",
    variants: ["AMG GLE 53 4MATIC+","AMG GLE 63 S 4MATIC+"],
    paints: {
        standard: [
            "MANUFAKTUR Cardinal Red Metallic","Emerald Green Metallic","Obsidian Black Metallic",
            "Black","Twilight Blue Metallic","MANUFAKTUR Alpine Grey","MANUFAKTUR Diamond White Metallic",
            "Selenite Grey Metallic","Polar White","Cirrus Silver Metallic"
        ],
        special: [],
        finishes: ["Metallic","MANUFAKTUR Metallic","Solid"]
    },
    rims: [
        { size:'20"', style:"AMG wheels", note:"GLE 53" },
        { size:'21"', style:"AMG wheels", note:"GLE 63 S" },
        { size:'22"', style:"AMG forged wheels", note:"Optional" }
    ],
    rimColors: ["Silver","Black","Two-tone"],
    brakes: ["Silver (standard)","Red (performance)","Black (Night Package)"],
    interior: {
        colors: {
            standard: [
                "Catalana Beige/Black, leather","White/Black Nappa","Black Exclusive Nappa",
                "Bahia Brown/Black, leather","Macchiato Beige/Black, leather","Black, leather",
                "Black Nappa","Classic Red/Black","Classic Red/Black Exclusive",
                "Macchiato Beige w/Diamond Stitching","Black Exclusive w/Diamond Stitching",
                "Tartufo Brown/Black","Tartufo Brown/Black Exclusive","Macchiato Beige/Black Exclusive"
            ],
            special: []
        },
        trim: [
            "Brushed Aluminum","Brown Linden Wood","Natural Grain Grey Oak Wood",
            "Natural Grain Walnut Wood","Carbon Fiber (AMG option)","Piano Black Lacquer"
        ],
        packages: [
            { name:"AMG Night Package", desc:"Black exterior accents, black wheels" },
            { name:"AMG Carbon Fiber Interior Trim", desc:"" },
            { name:"Seat Comfort Package", desc:"Multicontour seats, massage, rapid heating, ventilation" },
            { name:"AMG Performance Exhaust", desc:"" },
            { name:"AMG Track Pace", desc:"Performance data recording" },
            { name:"Burmester High-End 3D Surround Sound", desc:"" }
        ]
    },
    ambientLighting: "64-color LED ambient lighting",
    steeringWheel: ["AMG Performance steering wheel, Nappa leather","Heated"],
    pedals: ["Stainless steel sport pedals"]
},

"bmw-x5m:2024": {
    specialLabel: "BMW Individual",
    variants: ["X5 M Competition"],
    paints: {
        standard: [
            "Alpine White","Carbon Black Metallic","Black Sapphire Metallic","Marina Bay Blue Metallic",
            "BMW Individual Dravit Grey Metallic","Toronto Red Metallic","Isle of Man Green Metallic",
            "Brooklyn Grey Metallic","Frozen Pure Grey Metallic","Mineral White Metallic"
        ],
        special: [
            "BMW Individual Daytona Violet Metallic","BMW Individual Macadamia",
            "BMW Individual Frozen Black","BMW Individual Signal Green",
            "BMW Individual Verde Ermes Metallic","BMW Individual Frozen Brilliant White",
            "BMW Individual Grigio Telesto Pearl Metallic",
            "BMW Individual — 50+ special shades available"
        ],
        finishes: ["Solid","Metallic","BMW Individual Metallic","BMW Individual Frozen (matte)","BMW Individual Pearl"]
    },
    rims: [
        { size:'21"/22"', style:"M star-spoke bi-color, Style 809M", note:"Standard" },
        { size:'21"', style:"M Double spoke bi-color, Style 808M", note:"Optional" },
        { size:'21"/22"', style:"M star-spoke bi-color, Style 818M", note:"Optional" }
    ],
    rimColors: ["Bi-color (black/silver)","Black","Silver"],
    brakes: ["Blue (M Compound standard)","Red (optional)","Black (optional)"],
    interior: {
        colors: {
            standard: [
                "Sakhir Orange/Black, Extended Merino","Black w/Midrand Beige, Full Merino",
                "Black, Full Merino","Silverstone, Extended Merino","Taruma Brown",
                "Ivory White/Night Blue","Adelaide Grey"
            ],
            special: ["BMW Individual Ivory White/Atlas Grey"]
        },
        trim: [
            "Carbon Fiber (standard)","Fineline Black wood",
            "BMW Individual Silver Ash Root Open Pore wood with Colour Gradient"
        ],
        packages: [
            { name:"Executive Package", desc:"Soft-close doors, Panoramic Sky Lounge LED Roof, ventilated and massaging seats" },
            { name:"Bowers & Wilkins Diamond Surround Sound", desc:"" },
            { name:"M Driver's Package", desc:"Top speed increased to 177 mph" },
            { name:"Panoramic Sky Lounge LED Roof", desc:"" }
        ]
    },
    ambientLighting: "Ambient light bar with crystalline structure, M logo integrated, configurable via iDrive",
    steeringWheel: ["M leather steering wheel with carbon fibre paddles","Heated"],
    pedals: ["Stainless steel sport pedals"]
},

"bmw-7series:2024": {
    specialLabel: "BMW Individual",
    variants: ["740i","740i xDrive","750e xDrive","760i xDrive"],
    paints: {
        standard: [
            "Mineral White Metallic","Black Sapphire Metallic","Tanzanite Blue II Metallic",
            "Frozen Pure Grey Metallic","Brooklyn Grey Metallic","Dravit Grey Metallic",
            "Aventurin Red Metallic","Carbon Black Metallic","Alpine White"
        ],
        special: [
            "BMW Individual Vancouver Green / Space Silver (two-tone)",
            "BMW Individual Two-Tone — custom combinations",
            "BMW Individual Frozen (matte) range"
        ],
        finishes: ["Metallic","BMW Individual Metallic","BMW Individual Frozen (matte)","BMW Individual Two-Tone"]
    },
    rims: [
        { size:'20"', style:"Alloy wheels", note:"Standard" },
        { size:'21"', style:"Alloy wheels", note:"Optional" }
    ],
    rimColors: ["Silver","Black","Two-tone"],
    brakes: ["Standard","Blue (M Sport)"],
    interior: {
        colors: {
            standard: [
                "Black/Black Burgundy Veganza","Black and Dark Grey","Taupe Grey/Night Blue",
                "Caramel/Atlas Grey","Smoke White and Light Grey Cashmere","Black"
            ],
            special: ["BMW Individual — custom colours available"]
        },
        trim: ["Real wood","Soft Alcantara","Crystal glass elements","BMW Glass controls"],
        packages: [
            { name:"Luxury Rear Seating Package", desc:"Electric reclining rear seats with footrest" },
            { name:"BMW Theater Screen", desc:"31\" 8K screen with Amazon Fire TV" },
            { name:"Bowers & Wilkins Diamond Surround Sound", desc:"" },
            { name:"Panoramic Sky Lounge LED Roof", desc:"" },
            { name:"Automatic Doors", desc:"" },
            { name:"Ventilated and Massaging Seats", desc:"" }
        ]
    },
    ambientLighting: "Individually selected ambient lighting, crystal glass sparkle effect, Panoramic Vision windshield display",
    steeringWheel: ["Leather-wrapped","Heated","With touch controls"],
    pedals: ["Standard","Sport pedals (M Sport)"]
},

"porsche-cayenne:2024": {
    specialLabel: "Paint to Sample",
    variants: ["Cayenne Turbo GT"],
    paints: {
        standard: ["White","Black"],
        special: [
            "Carrara White Metallic","Chromite Black Metallic","Montego Blue Metallic",
            "Algarve Blue Metallic","Dolomite Silver Metallic","Quartzite Grey Metallic",
            "Arctic Grey","Carmine Red","Chalk","Cashmere Beige Metallic",
            "Paint to Sample — any custom colour"
        ],
        finishes: ["Solid","Metallic (+$800)","Special (+$3,150)","Paint to Sample (+$11,430)"]
    },
    rims: [
        { size:'22"', style:"GT Design, Neodyme finish", note:"Turbo GT standard" },
        { size:'21"', style:"Various designs", note:"Optional" },
        { size:'22"', style:"Various designs", note:"Optional" }
    ],
    rimColors: ["Neodyme (bronze/gold, Turbo GT exclusive)","Black","Silver"],
    brakes: ["PCCB Yellow (Turbo GT standard)","Red (optional)"],
    interior: {
        colors: {
            standard: [
                "Black","Black/Mojave Beige","Black/Bordeaux Red","Black/Night Green",
                "Black/Blackberry","Black/Silver Houndstooth","Slate Grey","Truffle Brown"
            ],
            special: [
                "Race-Tex Arctic Grey Deviated Stitching (Turbo GT)",
                "Race-Tex Deep Sea Blue Deviated Stitching (Turbo GT)"
            ]
        },
        trim: ["Aluminium","Carbon Fibre","Wood (various)"],
        packages: [
            { name:"GT Interior Package", desc:"Race-Tex steering wheel, Racing Yellow centre marker, memory seats, deviated stitching" },
            { name:"Bose Surround Sound", desc:"" },
            { name:"Burmester 3D High-End Surround Sound", desc:"" }
        ]
    },
    ambientLighting: "Standard ambient lighting",
    steeringWheel: ["Race-Tex multifunction sports steering wheel","Racing Yellow centre top marking"],
    pedals: ["Aluminium sport pedals"]
},

"bentley-bentayga:2024": {
    specialLabel: "Mulliner",
    variants: ["Bentayga EWB","Bentayga EWB Azure","Bentayga EWB S","Bentayga EWB Mulliner"],
    paints: {
        standard: ["Beluga","Brunel","Burnt Oak","Camel","And 56+ additional standard hues"],
        special: ["Mulliner bespoke — any colour","Custom match to sample — bring any sample"],
        finishes: ["Solid","Metallic","Mulliner bespoke","Custom match to sample"]
    },
    rims: [
        { size:'21"', style:"Alloy (painted, machined, or black)", note:"Standard" },
        { size:'22"', style:"5-spoke", note:"Optional" },
        { size:'22"', style:"Mulliner wheels", note:"Mulliner" }
    ],
    rimColors: ["Painted","Machined","Black painted","Polished"],
    brakes: ["Standard","Red (S/Mulliner)"],
    interior: {
        colors: {
            standard: [
                "Beluga","Brunel","Burnt Oak","Camel","Cumbrian Green","Damson","Havana",
                "Imperial Blue","Linen","Magnolia","Newmarket Tan","Portland","Saddle","Cricket Ball"
            ],
            special: [
                "Mulliner — nearly 4,000 interior colour combinations",
                "Two-tone with contrast stitching",
                "Hand cross-stitching (commissioned)"
            ]
        },
        trim: ["Wood veneers (various)","Piano Black","Carbon Fibre (S)","Metal finishes","Diamond Illumination (LED)"],
        packages: [
            { name:"Front Seat Comfort Specification", desc:"Heated/ventilated/massage, 20-way adjustment, Postural Adjust" },
            { name:"Naim for Bentley Premium Audio", desc:"20 speakers, 1,780W" },
            { name:"All-Wheel Steering", desc:"Standard on S/Azure" },
            { name:"Rear Seat Entertainment", desc:"" },
            { name:"Wireless Charging", desc:"" }
        ]
    },
    seating: ["4+1 seating","4-passenger Airline Seats (Mulliner)","5-passenger"],
    ambientLighting: "Diamond Illumination LED, custom ambient lighting",
    steeringWheel: ["Leather-wrapped, heated","Wood-and-leather (optional)"],
    pedals: ["Standard","Sport pedals (S)"]
},

"rolls-royce-cullinan:2024": {
    specialLabel: "Bespoke",
    variants: ["Cullinan","Cullinan Black Badge"],
    paints: {
        standard: ["Arctic White","Black","Navy Blue","And many more standard hues"],
        special: [
            "Iced Arctic White","Burnout Grey","Tuscan Sun","Purple Silk",
            "Blue Shadow (limited edition, 62 units)",
            "Bespoke — any colour imaginable"
        ],
        finishes: ["Solid","Metallic","Bespoke (unlimited)","Two-tone (Black Badge)"]
    },
    rims: [
        { size:'21"', style:"Alloy wheels", note:"Standard" },
        { size:'22"', style:"Alloy wheels", note:"Black Badge" },
        { size:'22"', style:"Black alloy wheels", note:"Black Badge" },
        { size:'23"', style:"7-spoke wheels", note:"Cullinan II" }
    ],
    rimColors: ["Silver","Polished","Black (Black Badge)"],
    brakes: ["Standard","Red (Black Badge)"],
    interior: {
        colors: {
            standard: [
                "Anthracite","Arctic White","Ardent Red","Armagnac","Black","Blue Gray",
                "Blushing Pink","Cacao","Casden Tan","Cashmere Gray","Dark Grey","Fleet Blue",
                "Grace White","Moccasin","Muscari Blue","Navy Blue","Pine Green","Purple",
                "Roseleaf","Scivaro Grey","Seashell","Tan"
            ],
            special: [
                "Forge Yellow (Black Badge)","Cobalto Blue (Black Badge)","Mandarin (Black Badge)",
                "Bespoke — any colour or material"
            ]
        },
        trim: [
            "Wood veneers","Open Pore Woods (Mimosa Negra, Paldao)","Carbon fibre (Black Badge)",
            "Metal finishes","Piano Black","Technical Carbon (Black Badge)"
        ],
        packages: [
            { name:"Serenity Package", desc:"Massaging seats, extended leather, advanced climate control" },
            { name:"Adventure Package", desc:"All-terrain wheels, skid plates, enhanced off-road modes" },
            { name:"Urban Package", desc:"Parking assistance, 360° camera, urban navigation" },
            { name:"Starlight Headliner", desc:"1,000+ fibre optic stars in the ceiling" },
            { name:"Rear Theater Configuration", desc:"With picnic tables" },
            { name:"Viewing Suite", desc:"Rear-facing seats deploying from the trunk" }
        ]
    },
    seating: ["Standard seating","Viewing Suite (rear-facing from trunk)","Sanctuary Seats with power calf rest"],
    ambientLighting: "Custom ambient lighting, Starlight Headliner (fibre optic stars), illuminated fascia",
    steeringWheel: ["Leather-wrapped, heated"],
    pedals: ["Standard"]
},

"audi-q8:2024": {
    specialLabel: "Audi Exclusive",
    variants: ["Premium 55 TFSI quattro","Premium Plus 55 TFSI quattro","Prestige 55 TFSI quattro","SQ8 TFSI quattro"],
    paints: {
        standard: [
            "Carrara White","Daytona Gray Pearl Effect","Glacier White Metallic","Mythos Black Metallic",
            "Sakhir Gold Metallic","Samurai Gray Metallic","Chilli Red","Ascari Blue"
        ],
        special: [],
        finishes: ["Solid","Metallic","Pearl Effect"]
    },
    rims: [
        { size:'21"', style:"Alloy wheels", note:"Premium / Premium Plus" },
        { size:'22"', style:"5-double-arm, diamond-turned, graphite gray", note:"Prestige" },
        { size:'21"–23"', style:"Various", note:"SQ8" }
    ],
    rimColors: ["Silver","Graphite gray","Black","Diamond-turned"],
    brakes: ["Standard","Red (SQ8)","Black (optional)"],
    interior: {
        colors: {
            standard: ["Black","Okapi Brown","Pearl Beige","Rotor Gray","Arras Red","Atlas Beige"],
            special: []
        },
        trim: [
            "Fine grain ash natural silver","Carbon twill matt (S line)","Aluminium linear silver grey (S line)",
            "Matte brushed aluminium","Polished oak with grey finish inlay","Carbon fibre (SQ8)"
        ],
        packages: [
            { name:"Black Optic Package", desc:"Black exterior trim, 22\" wheels, dark chrome exhaust" },
            { name:"Bang & Olufsen 3D Premium Sound", desc:"Premium Plus+" },
            { name:"Executive Package", desc:"Heated rear seats, power shades, acoustic glass" },
            { name:"LED Interior Lighting Plus", desc:"" },
            { name:"Advanced Suspension Package", desc:"Sport differential, active roll stabilisation" }
        ]
    },
    ambientLighting: "30-colour interior ambient lighting, multi-coloured extended LED pack",
    steeringWheel: ["Leather sports steering wheel with shift paddles (S line)","Heated (Prestige)","Flat-bottomed sport (SQ8)"],
    pedals: ["Stainless steel (S line)"]
},

"jeep-grand-wagoneer:2024": {
    specialLabel: null,
    variants: ["Wagoneer","Series II","Series II Carbide","Series III","Grand Wagoneer","Grand Wagoneer Series II","Grand Wagoneer Series III"],
    paints: {
        standard: [
            "Baltic Gray Metallic Clearcoat","Bright White Clearcoat","Diamond Black Crystal Pearlcoat",
            "Midnight Sky","River Rock","Silver Zynith","Velvet Red Pearlcoat",
            "Rocky Mountain Pearlcoat","Ember Gold Pearlcoat"
        ],
        special: [],
        finishes: ["Clearcoat","Metallic Clearcoat","Pearlcoat"]
    },
    rims: [
        { size:'18"', style:"Alloy wheels", note:"Wagoneer" },
        { size:'20"', style:"Alloy wheels", note:"Series II" },
        { size:'20"', style:"Gloss black alloy", note:"Series II Carbide" },
        { size:'20"/22"', style:"Alloy wheels", note:"Series III" },
        { size:'20"/22"', style:"Polished alloy", note:"Grand Wagoneer" }
    ],
    rimColors: ["Silver","Gloss black (Carbide)","Polished","Chrome"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Global Black","Sea Salt and Black"],
            special: ["Tupelo Black","Blue Agave","Obsidian (Grand Wagoneer)"]
        },
        trim: ["Wood trim (various)","Piano black","Metal accents","Satin chrome"],
        packages: [
            { name:"Convenience Group", desc:"Heated second-row seats, wireless charging, 360° camera, adaptive cruise" },
            { name:"Premium Group", desc:"Panoramic sunroof, 19-speaker McIntosh audio (Series III)" },
            { name:"Preferred Equipment Group", desc:"Power-reclining third row, HUD, adaptive air suspension" },
            { name:"Flexible Seating Group", desc:"Heated/power captain's chairs, power-reclining third row" },
            { name:"Heavy-Duty Trailer Tow Package", desc:"" }
        ]
    },
    seating: ["7-passenger","8-passenger (available)","Second-row captain's chairs (optional)"],
    ambientLighting: "LED ambient cabin lighting (Series II+), multiple colour options",
    steeringWheel: ["Heated, power-adjustable","Leather-wrapped","Wood-and-leather (Grand Wagoneer)"],
    pedals: ["Standard"]
},

// ═══════════════════════════════════════════════════════════════
// SET 2 — USED / GRADED MODELS
// ═══════════════════════════════════════════════════════════════

"mercedes-g-wagon:2022": {
    specialLabel: "G manufaktur",
    variants: ["G 550","AMG G 63"],
    paints: {
        standard: [
            "Black","Polar White","Obsidian Black Metallic"
        ],
        special: [
            "G manufaktur Dark Olive Green Magno","G manufaktur Midnight Blue",
            "G manufaktur Jupiter Red","G manufaktur Desert Silver Metallic",
            "G manufaktur Dakota Brown Magno","G manufaktur Arabian Gray",
            "G manufaktur China Blue","G manufaktur Sintered Bronze Magno"
        ],
        finishes: ["Solid","Metallic","G manufaktur Magno (matte)","G manufaktur Metallic"]
    },
    rims: [
        { size:'19"–22"', style:"AMG multi-spoke", note:"Various" },
        { size:'22"', style:"AMG cross-spoke forged", note:"AMG G 63" }
    ],
    rimColors: ["Silver","Black","High-sheen"],
    brakes: ["Silver","Red (AMG)"],
    interior: {
        colors: {
            standard: [
                "Black, leather","Macchiato Beige/Black, leather","Nut Brown/Black, leather",
                "Black Nappa","Macchiato Beige/Black Nappa","Tartufo Brown/Black Nappa",
                "Classic Red/Black Nappa","Black Exclusive Nappa"
            ],
            special: [
                "G manufaktur Saddle Brown/Black","G manufaktur Yacht Blue/Black",
                "G manufaktur Bengal Red/Black","G manufaktur Titanium Grey Pearl/Black",
                "G manufaktur Yacht Blue","G manufaktur Platinum White","G manufaktur Saddle Brown",
                "G manufaktur Bengal Red","G manufaktur Platinum White/Black",
                "G manufaktur Titanium Grey Pearl","G manufaktur Espresso Brown/Black",
                "G manufaktur Espresso Brown",
                "G manufaktur Black w/Bengal Red A-Band","G manufaktur Black w/Lime Green A-Band",
                "G manufaktur Black w/Gold Stitching","G manufaktur Black w/Lime Green Stitching",
                "G manufaktur Black w/Red Stitching","G manufaktur Black w/White Stitching",
                "G manufaktur Black w/Bronze Stitching","G manufaktur Black w/Yacht Blue A-Band",
                "G manufaktur Black w/Yacht Blue Stitching",
                "Tartufo Brown/Black Exclusive Nappa","Macchiato Beige/Espresso Brown Exclusive Nappa",
                "Classic Red/Black Exclusive Nappa"
            ]
        },
        trim: ["Natural Grain wood","Piano Black Lacquer","Carbon Fiber (AMG)","Silver Chrome (MANUFAKTUR)","Nappa Leather Dashboard"],
        packages: [
            { name:"Exclusive Interior Package", desc:"Leather dashboard, extended topstitching, microfiber headliner" },
            { name:"Exclusive Interior Package Plus", desc:"Nappa leather door panels, kneepads, tailgate interior" },
            { name:"G manufaktur Interior Package", desc:"Armrests, centre console, door panels in Nappa leather" },
            { name:"G manufaktur Interior Package Plus", desc:"Diamond stitching, velour mats with leather border" },
            { name:"Seat Comfort Package", desc:"Multicontour seats with massage, rapid heating, ventilation" },
            { name:"Night Package", desc:"Darkened trim, black wheels, black brush guard" },
            { name:"Night Package Magno", desc:"Matte black exterior elements" }
        ]
    },
    ambientLighting: "64-color LED ambient lighting",
    steeringWheel: ["Leather-wrapped","Nappa leather (AMG)","Heated"],
    pedals: ["Rubber (standard)","Stainless steel sport (AMG)"]
},

"range-rover:2022": {
    specialLabel: "SV",
    variants: ["SE","HSE","Autobiography","SV"],
    paints: {
        standard: [
            "Santorini Black","Eiger Grey","Portofino Blue","Lantau Bronze",
            "Hakuba Silver","Belgravia Green","Ostuni Pearl White",
            "Carpathian Grey","Batumi Gold","Charente Grey","British Racing Green"
        ],
        special: [],
        finishes: ["Solid","Metallic","Premium Metallic"]
    },
    rims: [
        { size:'21"–23"', style:"Various alloy options", note:"Trim dependent" }
    ],
    rimColors: ["Silver","Black","Gloss black","Diamond-turned"],
    brakes: ["Black (standard)","Red (SV performance)"],
    interior: {
        colors: {
            standard: ["Ebony/Ebony","Ebony/Perlino","Caraway/Caraway","Caraway/Perlino","Perlino/Perlino","Ecru/Ecru","Deep Garnet/Deep Garnet"],
            special: []
        },
        trim: [
            "Grand Black veneer","Kalahari","Shadow Walnut","Satin Straight Walnut",
            "Black Burl Ash","Argento Pinstripe","Figured Macassar"
        ],
        packages: [
            { name:"Executive Class Rear Seats", desc:"Power reclining, massage, footrests" },
            { name:"Rear Seat Entertainment", desc:"" },
            { name:"Meridian Signature Sound", desc:"" },
            { name:"Hot Stone Massage Seats", desc:"" }
        ]
    },
    ambientLighting: "Ambient lighting throughout",
    steeringWheel: ["Leather-wrapped","Heated"],
    pedals: ["Standard"]
},

"toyota-corolla:2023": {
    specialLabel: null,
    variants: ["LE","SE","XSE"],
    paints: {
        standard: [
            "Black Sand Pearl","Classic Silver Metallic","Blueprint","Celestite Gray Metallic",
            "Midnight Black Metallic","Wind Chill Pearl","Barcelona Red Metallic","Ruby Flare Pearl"
        ],
        special: [],
        finishes: ["Pearl","Metallic","Solid"]
    },
    rims: [
        { size:'16"', style:"Steel with covers", note:"LE" },
        { size:'18"', style:"Alloy wheels", note:"SE/XSE" }
    ],
    rimColors: ["Silver (LE)","Alloy (SE/XSE)"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Light Gray fabric","Black fabric","Macadamia/Mocha fabric"],
            special: ["Black/Red premium fabric (SE/XSE)","Moonstone (SE/XSE)","Macadamia (XSE)"]
        },
        trim: ["Piano black","Silver accents","Sport accents (SE/XSE)"],
        packages: [
            { name:"Heated Front Seats", desc:"Available" },
            { name:"Smart Key System", desc:"Available" }
        ]
    },
    ambientLighting: null,
    steeringWheel: ["Synthetic leather (all grades)"],
    pedals: ["Standard","Sport pedals (SE/XSE)"]
},

"mercedes-s-class:2023": {
    specialLabel: "MANUFAKTUR",
    variants: ["S 500 4MATIC","S 580 4MATIC","Maybach S 580","AMG S 63 E Performance"],
    paints: {
        standard: [
            "Black","Polar White","Obsidian Black Metallic","Selenite Grey Metallic",
            "Mojave Silver Metallic","Cirrus Silver Metallic","Emerald Green Metallic",
            "Brilliant Blue Metallic","Twilight Blue Metallic",
            "MANUFAKTUR Diamond White Metallic","MANUFAKTUR Cardinal Red Metallic"
        ],
        special: ["And 30+ additional MANUFAKTUR colours"],
        finishes: ["Solid","Metallic","MANUFAKTUR Metallic","MANUFAKTUR Magno (matte)"]
    },
    rims: [
        { size:'19"–21"', style:"Various alloy options", note:"Trim dependent" }
    ],
    rimColors: ["Silver","Black","High-sheen"],
    brakes: ["Silver (standard)","Red (AMG)"],
    interior: {
        colors: {
            standard: [
                "Black Nappa","Macchiato Beige/Black Nappa","Tartufo Brown/Black Nappa",
                "Classic Red/Black Nappa","MANUFAKTUR Yacht Blue/Black Nappa","MANUFAKTUR Nut Brown/Black Nappa"
            ],
            special: ["And 50+ additional combinations"]
        },
        trim: ["Natural Grain wood","Piano Black Lacquer","Carbon Fiber (AMG)","Metal Structure High-Gloss"],
        packages: [
            { name:"AMG Line", desc:"AMG wheels, sports steering wheel, stainless steel pedals" },
            { name:"MANUFAKTUR Leather Package", desc:"Leather headliner, upholstered rear cushions" },
            { name:"Executive Rear Seat Package", desc:"Power rear seats, heating, ventilation, massage" },
            { name:"Burmester 4D Surround Sound", desc:"30 speakers, 1750W" }
        ]
    },
    ambientLighting: "64-color ambient lighting",
    steeringWheel: ["Leather-wrapped","Sports wheel with flattened bottom (AMG Line)","Heated"],
    pedals: ["Standard","Stainless steel sport (AMG Line)"]
},

"mercedes-gle:2022": {
    specialLabel: "MANUFAKTUR",
    variants: ["AMG GLE 53 4MATIC+","AMG GLE 63 S 4MATIC+"],
    paints: {
        standard: [
            "Selenite Grey Metallic","MANUFAKTUR Diamond White Metallic","MANUFAKTUR Cardinal Red Metallic",
            "Brilliant Blue Metallic","Emerald Green Metallic","Polar White","Black",
            "Lunar Blue Metallic","Mojave Silver Metallic","Cirrus Silver Metallic","Obsidian Black Metallic"
        ],
        special: [],
        finishes: ["Metallic","MANUFAKTUR Metallic","Solid"]
    },
    rims: [
        { size:'20"', style:"AMG wheels", note:"GLE 53" },
        { size:'21"', style:"AMG wheels", note:"GLE 63 S" },
        { size:'22"', style:"AMG forged wheels", note:"Optional" }
    ],
    rimColors: ["Silver","Black","Two-tone"],
    brakes: ["Silver (standard)","Red (performance)","Black (Night Package)"],
    interior: {
        colors: {
            standard: [
                "Macchiato Beige/Black, leather","Black, leatherette","Black Nappa",
                "Black w/DINAMICA, leatherette/suede","Black Exclusive Nappa","White/Black Nappa",
                "Espresso Brown/Black, leatherette","Espresso Brown/Black, leather","Black, leather",
                "Classic Red/Black Exclusive","Black Exclusive Nappa w/Diamond Stitching",
                "Macchiato Beige Exclusive Nappa w/Diamond Stitching","Black Exclusive",
                "Black w/Red Contrast Topstitching","Black, premium leather","Tartufo Brown/Black",
                "Classic Red/Black","Tartufo Brown/Black Exclusive"
            ],
            special: []
        },
        trim: [
            "Brushed Aluminum","Brown Linden Wood","Natural Grain Grey Oak Wood",
            "Natural Grain Walnut Wood","Carbon Fiber (AMG option)","Piano Black Lacquer"
        ],
        packages: [
            { name:"AMG Night Package", desc:"Black exterior accents, black wheels" },
            { name:"AMG Carbon Fiber Interior Trim", desc:"" },
            { name:"AMG Performance Exhaust", desc:"" },
            { name:"Seat Comfort Package", desc:"Multicontour seats, massage, rapid heating, ventilation" },
            { name:"Burmester High-End 3D Surround Sound", desc:"" }
        ]
    },
    ambientLighting: "64-color LED ambient lighting",
    steeringWheel: ["AMG Performance steering wheel, Nappa leather","Heated"],
    pedals: ["Stainless steel sport pedals"]
},

"bmw-x5m:2022": {
    specialLabel: "BMW Individual",
    variants: ["X5 M Competition"],
    paints: {
        standard: [
            "Tanzanite Blue Metallic","Ametrin Metallic","Black Sapphire Metallic","Toronto Red Metallic"
        ],
        special: ["BMW Individual — various special shades available"],
        finishes: ["Solid","Metallic","BMW Individual Metallic","BMW Individual Frozen (matte)"]
    },
    rims: [
        { size:'21"/22"', style:"M star-spoke bi-color wheels", note:"Standard" }
    ],
    rimColors: ["Bi-color (black/silver)","Black","Silver"],
    brakes: ["Blue (M Compound standard)","Red (optional)","Black (optional)"],
    interior: {
        colors: {
            standard: [
                "Silverstone II","Black","Black w/Midrand Beige","Taruma Brown",
                "Ivory White/Night Blue","Sakhir Orange","Adelaide Grey"
            ],
            special: []
        },
        trim: [
            "Carbon Fiber","Fineline Black wood",
            "BMW Individual Silver Ash Root Open Pore wood"
        ],
        packages: [
            { name:"Executive Package", desc:"Soft-close doors, Panoramic Sky Lounge LED Roof, ventilated/massaging seats" },
            { name:"Competition Package 2", desc:"" },
            { name:"Bowers & Wilkins Diamond Surround Sound", desc:"" },
            { name:"M Driver's Package", desc:"Top speed increased to 177 mph" }
        ]
    },
    ambientLighting: "Ambient light bar with crystalline structure, configurable via iDrive",
    steeringWheel: ["M leather steering wheel with carbon fibre paddles","Heated"],
    pedals: ["Stainless steel sport pedals"]
},

"bmw-7series:2023": {
    specialLabel: "BMW Individual",
    variants: ["740i","740i xDrive","760i xDrive"],
    paints: {
        standard: [
            "Mineral White Metallic","Black Sapphire Metallic","Tanzanite Blue II Metallic",
            "Frozen Pure Grey Metallic","Brooklyn Grey Metallic","Dravit Grey Metallic",
            "Aventurin Red Metallic","Carbon Black Metallic","Alpine White"
        ],
        special: ["BMW Individual — custom colours and two-tone available"],
        finishes: ["Metallic","BMW Individual Metallic","BMW Individual Frozen (matte)"]
    },
    rims: [
        { size:'20"–21"', style:"Various alloy options", note:"Trim dependent" }
    ],
    rimColors: ["Silver","Black","Two-tone"],
    brakes: ["Standard","Blue (M Sport)"],
    interior: {
        colors: {
            standard: [
                "Black/Black Burgundy","Black and Dark Grey","Taupe Grey/Night Blue",
                "Caramel/Atlas Grey","Smoke White and Light Grey Cashmere","Black"
            ],
            special: ["BMW Individual — custom colours available"]
        },
        trim: ["Real wood","Alcantara","Glass controls"],
        packages: [
            { name:"Luxury Rear Seating Package", desc:"Electric reclining rear seats with footrest" },
            { name:"BMW Theater Screen", desc:"31\" 8K screen with Amazon Fire TV" },
            { name:"Bowers & Wilkins Diamond Surround Sound", desc:"" }
        ]
    },
    ambientLighting: "Individually selected ambient lighting, crystal glass sparkle effect",
    steeringWheel: ["Leather-wrapped","Heated","With touch controls"],
    pedals: ["Standard","Sport pedals (M Sport)"]
},

"porsche-cayenne:2023": {
    specialLabel: "Paint to Sample",
    variants: ["Cayenne","Cayenne S","Cayenne Turbo","Cayenne Turbo GT","Cayenne E-Hybrid","Cayenne Turbo S E-Hybrid"],
    paints: {
        standard: ["Black","White"],
        special: [
            "Carrara White Metallic","Chromite Black Metallic","Dolomite Silver Metallic",
            "Moonlight Blue Metallic","Mahogany Metallic","Quartzite Grey Metallic",
            "Carmine Red","Chalk","Cashmere Beige Metallic",
            "Paint to Sample — any custom colour"
        ],
        finishes: ["Solid","Metallic (+$800)","Special (+$3,150)","Paint to Sample (+$11,430)"]
    },
    rims: [
        { size:'20"–22"', style:"Various designs", note:"Trim dependent" }
    ],
    rimColors: ["Silver","Black","Polished"],
    brakes: ["Standard","Red (Turbo)","Yellow (PCCB)"],
    interior: {
        colors: {
            standard: [
                "Black","Slate Grey","Black/Mojave Beige","Black/Bordeaux Red",
                "Slate Grey/Mojave Beige","Graphite Blue/Chalk","Truffle Brown","Truffle Brown/Cohiba Brown"
            ],
            special: [
                "Race-Tex Arctic Grey Deviated Stitching (Turbo GT)",
                "Race-Tex Deep Sea Blue Deviated Stitching (Turbo GT)"
            ]
        },
        trim: ["Aluminium","Carbon Fibre","Wood (various)"],
        packages: [
            { name:"Bose Surround Sound", desc:"" },
            { name:"Burmester 3D High-End Surround Sound", desc:"" },
            { name:"GT Interior Package", desc:"Race-Tex steering wheel, Racing Yellow centre marker, deviated stitching (Turbo GT)" }
        ]
    },
    ambientLighting: "Standard ambient lighting",
    steeringWheel: ["Leather multifunction sports steering wheel","Race-Tex (Turbo GT)"],
    pedals: ["Aluminium sport pedals"]
},

"bentley-bentayga:2022": {
    specialLabel: "Mulliner",
    variants: ["Bentayga","Bentayga S","Bentayga Speed","Bentayga Azure"],
    paints: {
        standard: ["Beluga","Brunel","Burnt Oak","Camel","And 56+ additional colours"],
        special: ["Mulliner bespoke — any colour","Custom match to sample"],
        finishes: ["Solid","Metallic","Mulliner bespoke","Custom match to sample"]
    },
    rims: [
        { size:'21"', style:"Alloy (painted, machined, or black)", note:"Standard" },
        { size:'22"', style:"Alloy wheels", note:"Optional" }
    ],
    rimColors: ["Painted","Machined","Black painted","Polished"],
    brakes: ["Standard","Red (S/Speed)"],
    interior: {
        colors: {
            standard: [
                "Beluga","Brunel","Burnt Oak","Camel","Cumbrian Green","Damson","Havana",
                "Imperial Blue","Linen","Magnolia","Newmarket Tan","Portland","Saddle","Cricket Ball"
            ],
            special: ["Mulliner — wide range of colour combinations","Hand cross-stitching (commissioned)"]
        },
        trim: ["Wood veneers (various)","Piano Black","Carbon Fibre (S/Speed)","Metal finishes"],
        packages: [
            { name:"Front Seat Comfort Specification", desc:"Heated/ventilated/massage, 20-way adjustment" },
            { name:"Naim for Bentley Premium Audio", desc:"20 speakers, 1,780W" },
            { name:"All-Wheel Steering", desc:"" },
            { name:"Rear Seat Entertainment", desc:"" }
        ]
    },
    seating: ["4-passenger","5-passenger"],
    ambientLighting: "Diamond Illumination LED, custom ambient lighting",
    steeringWheel: ["Leather-wrapped, heated","Wood-and-leather (optional)"],
    pedals: ["Standard","Sport pedals (S/Speed)"]
},

"rolls-royce-cullinan:2022": {
    specialLabel: "Bespoke",
    variants: ["Cullinan","Cullinan Black Badge"],
    paints: {
        standard: ["Arctic White","Black","Navy Blue","And many more standard hues"],
        special: ["Bespoke — any colour imaginable","Custom match to sample"],
        finishes: ["Solid","Metallic","Bespoke (unlimited)","Two-tone (Black Badge)"]
    },
    rims: [
        { size:'21"', style:"Alloy wheels", note:"Standard" },
        { size:'22"', style:"Alloy wheels", note:"Black Badge" },
        { size:'22"', style:"Black alloy wheels", note:"Black Badge" }
    ],
    rimColors: ["Silver","Polished","Black (Black Badge)"],
    brakes: ["Standard","Red (Black Badge)"],
    interior: {
        colors: {
            standard: [
                "Anthracite","Arctic White","Ardent Red","Armagnac","Black","Blue Gray",
                "Blushing Pink","Cacao","Casden Tan","Cashmere Gray","Dark Grey","Fleet Blue",
                "Grace White","Moccasin","Muscari Blue","Navy Blue","Pine Green","Purple",
                "Roseleaf","Scivaro Grey","Seashell","Tan"
            ],
            special: ["Forge Yellow (Black Badge)","Cobalto Blue (Black Badge)","Mandarin (Black Badge)","Bespoke — any colour"]
        },
        trim: ["Wood veneers","Carbon fibre (Black Badge)","Metal finishes","Piano Black"],
        packages: [
            { name:"Serenity Package", desc:"Massaging seats, extended leather, advanced climate control" },
            { name:"Adventure Package", desc:"All-terrain wheels, skid plates, enhanced off-road modes" },
            { name:"Urban Package", desc:"Parking assistance, 360° camera, urban navigation" },
            { name:"Starlight Headliner", desc:"1,000+ fibre optic stars in the ceiling" },
            { name:"Rear Theater Configuration", desc:"With picnic tables" }
        ]
    },
    seating: ["Standard seating","Viewing Suite (rear-facing from trunk)"],
    ambientLighting: "Custom ambient lighting, Starlight Headliner (fibre optic stars)",
    steeringWheel: ["Leather-wrapped, heated"],
    pedals: ["Standard"]
},

"audi-q8:2022": {
    specialLabel: "Audi Exclusive",
    variants: ["Premium","Premium Plus","Prestige","SQ8"],
    paints: {
        standard: [
            "Carrara White","Daytona Gray Pearl Effect","Glacier White Metallic","Mythos Black Metallic",
            "Vicuna Beige Metallic","Dragon Orange Metallic","Florett Silver Metallic",
            "Galaxy Blue Metallic","Samurai Gray Metallic"
        ],
        special: [],
        finishes: ["Solid","Metallic","Pearl Effect"]
    },
    rims: [
        { size:'21"', style:"Alloy wheels", note:"Premium / Premium Plus" },
        { size:'22"', style:"Alloy wheels", note:"Prestige" },
        { size:'21"–22"', style:"Various", note:"SQ8" }
    ],
    rimColors: ["Silver","Graphite gray","Black","Diamond-turned"],
    brakes: ["Standard","Red (SQ8)"],
    interior: {
        colors: {
            standard: ["Black","Okapi Brown","Pearl Beige","Rotor Gray","Arras Red","Atlas Beige"],
            special: []
        },
        trim: [
            "Fine grain ash natural silver","Carbon twill matt (S line)","Aluminium linear silver grey",
            "Matte brushed aluminium","Polished oak with grey finish inlay"
        ],
        packages: [
            { name:"Bang & Olufsen 3D Premium Sound", desc:"" },
            { name:"Executive Package", desc:"Heated rear seats, power shades, acoustic glass" },
            { name:"LED Interior Lighting Plus", desc:"" }
        ]
    },
    ambientLighting: "30-colour interior ambient lighting",
    steeringWheel: ["Leather sports steering wheel with shift paddles (S line)","Heated (Prestige)"],
    pedals: ["Stainless steel (S line)"]
},

"jeep-grand-wagoneer:2023": {
    specialLabel: null,
    variants: ["Wagoneer","Series II","Series II Carbide","Series III","Grand Wagoneer","Grand Wagoneer Series II","Grand Wagoneer Series III"],
    paints: {
        standard: [
            "Baltic Gray Metallic Clearcoat","Bright White Clearcoat","Diamond Black Crystal Pearlcoat",
            "Midnight Sky","River Rock","Silver Zynith","Velvet Red Pearlcoat",
            "Rocky Mountain Pearlcoat","Ember Gold Pearlcoat"
        ],
        special: [],
        finishes: ["Clearcoat","Metallic Clearcoat","Pearlcoat"]
    },
    rims: [
        { size:'18"', style:"Alloy wheels", note:"Wagoneer" },
        { size:'20"', style:"Alloy wheels", note:"Series II" },
        { size:'20"', style:"Gloss black alloy", note:"Series II Carbide" },
        { size:'20"/22"', style:"Alloy wheels", note:"Series III" },
        { size:'20"/22"', style:"Polished alloy", note:"Grand Wagoneer" }
    ],
    rimColors: ["Silver","Gloss black (Carbide)","Polished","Chrome"],
    brakes: ["Standard"],
    interior: {
        colors: {
            standard: ["Global Black","Sea Salt and Black"],
            special: ["Tupelo Black","Blue Agave","Obsidian (Grand Wagoneer)"]
        },
        trim: ["Wood trim","Piano black","Metal accents","Satin chrome"],
        packages: [
            { name:"Convenience Group", desc:"Heated second-row seats, wireless charging, 360° camera, adaptive cruise" },
            { name:"Premium Group", desc:"Panoramic sunroof, 19-speaker McIntosh audio (Series III)" },
            { name:"Preferred Equipment Group", desc:"Power-reclining third row, HUD, adaptive air suspension" },
            { name:"Flexible Seating Group", desc:"Heated/power captain's chairs, power-reclining third row" },
            { name:"Heavy-Duty Trailer Tow Package", desc:"" }
        ]
    },
    seating: ["7-passenger","8-passenger (available)","Second-row captain's chairs (optional)"],
    ambientLighting: "LED ambient cabin lighting (Series II+), multiple colour options",
    steeringWheel: ["Heated, power-adjustable","Leather-wrapped","Wood-and-leather (Grand Wagoneer)"],
    pedals: ["Standard"]
},

"mercedes-c63:2011": {
    specialLabel: "Designo",
    variants: ["C 63 AMG","C 63 AMG Performance Package","C 63 AMG Black Series"],
    paints: {
        standard: [
            "Obsidian Black Metallic","Iridium Silver Metallic","Palladium Silver Metallic",
            "Diamond White Metallic","Steel Grey Metallic","Magnetite Black Metallic"
        ],
        special: [],
        finishes: ["Solid","Metallic"]
    },
    rims: [
        { size:'18"', style:"AMG 5-twin-spoke", note:"Standard" },
        { size:'19"', style:"AMG 5-spoke", note:"Performance Package" },
        { size:'19"', style:"AMG forged", note:"Black Series" }
    ],
    rimColors: ["Silver","Titanium grey","Black (Black Series)"],
    brakes: ["Silver (standard)","Red (Performance Package)","Yellow (Black Series)"],
    interior: {
        colors: {
            standard: ["Black leather","Sahara Beige/Black leather","Almond/Mocha leather"],
            special: ["Red/Black leather (Designo)"]
        },
        trim: ["Aluminium","Carbon fibre (Performance Package / Black Series)","Piano Black Lacquer","Wood trim"],
        packages: [
            { name:"Performance Package", desc:"Limited-slip differential, forged pistons, composite brakes, Alcantara trim, carbon fibre interior" },
            { name:"Black Series Package", desc:"Track-focused, stripped interior, roll cage option, racing seats" }
        ]
    },
    ambientLighting: "Standard ambient lighting",
    steeringWheel: ["Leather-wrapped (standard)","Alcantara-wrapped (Performance Package)","Flat-bottomed (Black Series)"],
    pedals: ["Aluminium sport pedals (standard)","Racing pedals (Black Series)"]
}

};

window.CUSTOMIZATION = CUSTOMIZATION;

}
