if (!window.MODELS) {

// ═══════════════════════════════════════════════════════════════
// TIER 1 — MODELS  (nameplates, brand-level, never changes)
// ═══════════════════════════════════════════════════════════════
var MODELS = {
    "mercedes-g-wagon": {
        name: "Mercedes-Benz G-Wagon", brand: "Mercedes-Benz",
        logo: "assets/brands/mercedes.svg", type: "SUV", category: "LUXURY",
        heroImg: "assets/car_left.png",
        model3d: "assets/models/mercedes-g-wagon/model.glb"
    },
    "lexus-lx-600": {
        name: "Lexus LX 600", brand: "Lexus",
        logo: null, type: "SUV", category: "LUXURY",
        heroImg: "assets/car_right.png",
        model3d: "assets/models/lexus-lx-600/model.glb"
    },
    "range-rover": {
        name: "Range Rover Autobiography", brand: "Land Rover",
        logo: null, type: "SUV", category: "ADVENTURE",
        heroImg: "assets/2024RangeRover.png",
        model3d: "assets/models/range-rover/model.glb"
    },
    "cadillac-escalade-v": {
        name: "Cadillac Escalade V", brand: "Cadillac",
        logo: null, type: "SUV", category: "SPORT",
        heroImg: "assets/escalade2025.png",
        model3d: "assets/models/cadillac-escalade-v/model.glb"
    },
    "cadillac-escalade-iq": {
        name: "Cadillac Escalade IQ", brand: "Cadillac",
        logo: null, type: "SUV", category: "LUXURY",
        heroImg: "assets/_2026cadillac.png",
        paintProfile: { bodyLightnessRange: [8, 60], usesAlphaMask: true, saturationBoost: 58 },
        model3d: "assets/models/cadillac-escalade-iq/model.glb"
    },
    "byd-atto-3": {
        name: "BYD Atto 3", brand: "BYD",
        logo: "assets/brands/byd.svg", type: "SUV", category: "ECONOMY",
        heroImg: "assets/byd-ato3.png"
    },
    "toyota-camry": {
        name: "Toyota Camry Hybrid", brand: "Toyota",
        logo: "assets/brands/toyota.svg", type: "SEDAN", category: "ECONOMY",
        heroImg: "assets/camry2025hybrid.png"
    },
    "toyota-corolla": {
        name: "Toyota Corolla", brand: "Toyota",
        logo: "assets/brands/toyota.svg", type: "SEDAN", category: "ECONOMY",
        heroImg: "assets/corolla2025.png",
        model3d: "assets/models/toyota-corolla/model.glb"
    },
    "tesla-cybertruck": {
        name: "Tesla Cybertruck", brand: "Tesla",
        logo: "assets/brands/tesla.svg", type: "TRUCK", category: "OFF-ROAD",
        heroImg: "assets/cybertruck.png",
        paintProfile: { bodyLightnessRange: [10, 88], usesAlphaMask: true, saturationBoost: 55 },
        model3d: "assets/models/tesla-cybertruck/model.glb"
    },
    "kia-sportage": {
        name: "Kia Sportage", brand: "Kia",
        logo: null, type: "SUV", category: "FAMILY",
        heroImg: "assets/kia2023sportage.png"
    },
    "mercedes-s-class": {
        name: "Mercedes-Benz S-Class", brand: "Mercedes-Benz",
        logo: "assets/brands/mercedes.svg", type: "SEDAN", category: "LUXURY",
        heroImg: "assets/mercedes2025sclass.png",
        model3d: "assets/models/mercedes-s-class/model.glb"
    },
    "mercedes-gle": {
        name: "Mercedes-Benz GLE 63 AMG", brand: "Mercedes-Benz",
        logo: "assets/brands/mercedes.svg", type: "SUV", category: "SPORT",
        heroImg: "assets/inventory/gle63-2024-new-001/hero.jpg",
        model3d: "assets/models/mercedes-gle/model.glb"
    },
    "bmw-x5m": {
        name: "BMW X5 M Competition", brand: "BMW",
        logo: "assets/brands/bmw.svg", type: "SUV", category: "SPORT",
        heroImg: "assets/inventory/bmw-x5m-2024-new-001/hero.jpg",
        model3d: "assets/models/bmw-x5m/model.glb"
    },
    "bmw-7series": {
        name: "BMW 7 Series 760i", brand: "BMW",
        logo: "assets/brands/bmw.svg", type: "SEDAN", category: "LUXURY",
        heroImg: "assets/inventory/bmw-7series-2024-new-001/hero.jpg",
        model3d: "assets/models/bmw-7series/model.glb"
    },
    "porsche-cayenne": {
        name: "Porsche Cayenne Turbo GT", brand: "Porsche",
        logo: null, type: "SUV", category: "SPORT",
        heroImg: "assets/inventory/porsche-cayenne-2024-new-001/hero.jpg",
        model3d: "assets/models/porsche-cayenne/model.glb"
    },
    "bentley-bentayga": {
        name: "Bentley Bentayga EWB", brand: "Bentley",
        logo: null, type: "SUV", category: "LUXURY",
        heroImg: "assets/inventory/bentley-bentayga-2024-new-001/hero.jpg",
        model3d: "assets/models/bentley-bentayga/model.glb"
    },
    "rolls-royce-cullinan": {
        name: "Rolls-Royce Cullinan", brand: "Rolls-Royce",
        logo: "assets/brands/rollsroyce.svg", type: "SUV", category: "LUXURY",
        heroImg: "assets/inventory/cullinan-2024-new-001/hero.jpg",
        model3d: "assets/models/rolls-royce-cullinan/model.glb"
    },
    "audi-q8": {
        name: "Audi Q8 S-Line", brand: "Audi",
        logo: "assets/brands/audi.svg", type: "SUV", category: "LUXURY",
        heroImg: "assets/inventory/audi-q8-2024-new-001/hero.jpg",
        model3d: "assets/models/audi-q8/model.glb"
    },
    "jeep-grand-wagoneer": {
        name: "Jeep Grand Wagoneer", brand: "Jeep",
        logo: "assets/brands/jeep.svg", type: "SUV", category: "ADVENTURE",
        heroImg: "assets/inventory/jeep-grandwagoneer-2024-new-001/hero.jpg"
    }
};
window.MODELS = MODELS;

// ═══════════════════════════════════════════════════════════════
// TIER 2 — VARIANTS  (object map, keyed by variantId)
// year + trim combination. energy and facesRight live here.
// ═══════════════════════════════════════════════════════════════
var VARIANTS = {
    "gwagon-2024-g63amg": {
        modelId: "mercedes-g-wagon", year: "2024", trim: "G 63 AMG",
        energy: "PETROL", facesRight: true,
        power: "585hp", topSpeed: "220km/h", torque: "850nm",
        img: "assets/car_left.png",
        details: {
            manufacturer: "Mercedes-Benz", production: "Graz, Austria", limited: "AMG Performance",
            zeroToSixty: "4.4s", zeroToHundred: "4.5s", engineFull: "4.0L V8 Biturbo",
            seating: "5 Adults", cargo: "621 Liters", leather: "Nappa Leather",
            heatedSeats: "Front & Rear", stereo: "Burmester Surround",
            headlights: "Multibeam LED", ai: "Distronic Plus",
            funFact: "The G-Wagon was originally developed as a military vehicle in the 1970s."
        }
    },
    "gwagon-2022-g63amg": {
        modelId: "mercedes-g-wagon", year: "2022", trim: "G 63 AMG",
        energy: "PETROL", facesRight: true,
        power: "577hp", topSpeed: "220km/h", torque: "850nm",
        img: "assets/car_left.png",
        details: {
            manufacturer: "Mercedes-Benz", production: "Graz, Austria", limited: "AMG Performance",
            zeroToSixty: "4.5s", zeroToHundred: "4.6s", engineFull: "4.0L V8 Biturbo",
            seating: "5 Adults", cargo: "621 Liters", leather: "Nappa Leather",
            heatedSeats: "Front & Rear", stereo: "Burmester Surround",
            headlights: "Multibeam LED", ai: "Distronic Plus",
            funFact: "The G-Wagon was originally developed as a military vehicle in the 1970s."
        }
    },
    "lx600-2024-vip": {
        modelId: "lexus-lx-600", year: "2024", trim: "VIP Grade",
        energy: "PETROL", facesRight: false,
        power: "409hp", topSpeed: "210km/h", torque: "650nm",
        img: "assets/car_right.png",
        details: {
            manufacturer: "Lexus", production: "Yoshiwara, Japan", limited: "VIP Grade",
            zeroToSixty: "6.8s", zeroToHundred: "6.9s", engineFull: "3.4L V6 Twin-Turbo",
            seating: "4/7 Adults", cargo: "1,274 Liters", leather: "Semi-Aniline",
            heatedSeats: "Climate Concierge", stereo: "Mark Levinson 25-Spk",
            headlights: "Triple-Beam LED", ai: "Lexus Safety System+ 2.5",
            funFact: "The LX 600 features an active height control system with 4 settings."
        }
    },
    "rangerover-2024-autobiography": {
        modelId: "range-rover", year: "2024", trim: "Autobiography",
        energy: "PETROL", facesRight: false,
        power: "523hp", topSpeed: "250km/h", torque: "750nm",
        img: "assets/2024RangeRover.png",
        details: {
            manufacturer: "Land Rover", production: "Solihull, UK", limited: "Autobiography",
            zeroToSixty: "4.5s", zeroToHundred: "4.6s", engineFull: "4.4L V8 Twin-Turbo",
            seating: "5 Adults", cargo: "818 Liters", leather: "SV Bespoke Leather",
            heatedSeats: "Hot Stone Massage", stereo: "Meridian Signature",
            headlights: "Digital LED w/ Projection", ai: "ClearSight Ground View",
            funFact: "The new Range Rover can wade through water up to 900mm deep."
        }
    },
    "rangerover-2022-autobiography": {
        modelId: "range-rover", year: "2022", trim: "Autobiography",
        energy: "PETROL", facesRight: false,
        power: "518hp", topSpeed: "240km/h", torque: "740nm",
        img: "assets/2024RangeRover.png",
        details: {
            manufacturer: "Land Rover", production: "Solihull, UK", limited: "Autobiography",
            zeroToSixty: "4.6s", zeroToHundred: "4.7s", engineFull: "4.4L V8 Twin-Turbo",
            seating: "5 Adults", cargo: "818 Liters", leather: "Windsor Leather",
            heatedSeats: "Front & Rear Heated", stereo: "Meridian Surround",
            headlights: "LED Matrix", ai: "Terrain Response 2",
            funFact: "The new Range Rover can wade through water up to 900mm deep."
        }
    },
    "escalade-v-2024-vseries": {
        modelId: "cadillac-escalade-v", year: "2024", trim: "V-Series Performance",
        energy: "PETROL", facesRight: false,
        power: "682hp", topSpeed: "200km/h", torque: "885nm",
        img: "assets/escalade2025.png",
        details: {
            manufacturer: "Cadillac", production: "Arlington, USA", limited: "V-Series Performance",
            zeroToSixty: "4.3s", zeroToHundred: "4.4s", engineFull: "6.2L Supercharged V8",
            seating: "7 Adults", cargo: "722 Liters", leather: "Full Semi-Aniline",
            heatedSeats: "Active Lumbar Msd", stereo: "AKG Studio Reference 36-Spk",
            headlights: "LED Vertical Blades", ai: "Super Cruise Hands-Free",
            funFact: "The Escalade-V is the most powerful full-size SUV in the industry."
        }
    },
    "escalade-iq-2026-ev": {
        modelId: "cadillac-escalade-iq", year: "2026", trim: "EV Luxury",
        energy: "ELECTRIC", facesRight: true,
        power: "750hp", topSpeed: "180km/h", torque: "1064nm",
        img: "assets/_2026cadillac.png",
        details: {
            manufacturer: "Cadillac", production: "Factory ZERO, USA", limited: "EV Luxury",
            zeroToSixty: "4.9s", zeroToHundred: "5.0s", engineFull: "Ultium Battery / Dual Motor",
            seating: "7 Adults", cargo: "670 Liters", leather: "Eco-Conscious Materials",
            heatedSeats: "Front & Mid Row", stereo: "AKG 40-Speaker",
            headlights: "Vertical Signature LED", ai: "Ultra Cruise",
            funFact: "The Escalade IQ features a massive 55-inch total diagonal pillar-to-pillar display."
        }
    },
    "bydatto3-2024-extended": {
        modelId: "byd-atto-3", year: "2024", trim: "Extended Range",
        energy: "ELECTRIC", facesRight: false,
        power: "201hp", topSpeed: "160km/h", torque: "310nm",
        img: "assets/byd-ato3.png",
        details: {
            manufacturer: "BYD", production: "Shenzhen, China", limited: "Extended Range",
            zeroToSixty: "7.2s", zeroToHundred: "7.3s", engineFull: "Electric / 60.48kWh Blade Battery",
            seating: "5 Adults", cargo: "440 Liters", leather: "Vegan Interior",
            heatedSeats: "Front Seats", stereo: "Dirac HD Sound",
            headlights: "Crystal LED", ai: "DiPilot",
            funFact: "BYD stands for 'Build Your Dreams'."
        }
    },
    "camry-2025-xle-hybrid": {
        modelId: "toyota-camry", year: "2025", trim: "XLE Hybrid",
        energy: "HYBRID", facesRight: false,
        power: "225hp", topSpeed: "185km/h", torque: "221nm",
        img: "assets/camry2025hybrid.png",
        details: {
            manufacturer: "Toyota", production: "Georgetown, USA", limited: "XLE Grade",
            zeroToSixty: "7.4s", zeroToHundred: "7.5s", engineFull: "2.5L 4-Cylinder Hybrid",
            seating: "5 Adults", cargo: "428 Liters", leather: "Leather-Trimmed",
            heatedSeats: "Power-Adjustable", stereo: "JBL Premium Audio",
            headlights: "Bi-LED Multi-Feature", ai: "Toyota Safety Sense 3.0",
            funFact: "The 2025 Camry is the first to be offered exclusively as a hybrid in the US."
        }
    },
    "corolla-2025-se": {
        modelId: "toyota-corolla", year: "2025", trim: "SE Dynamic",
        energy: "PETROL", facesRight: false,
        power: "169hp", topSpeed: "190km/h", torque: "205nm",
        img: "assets/corolla2025.png",
        details: {
            manufacturer: "Toyota", production: "Blue Springs, USA", limited: "SE Dynamic",
            zeroToSixty: "8.2s", zeroToHundred: "8.3s", engineFull: "2.0L 4-Cylinder",
            seating: "5 Adults", cargo: "361 Liters", leather: "Fabric/SofTex Mix",
            heatedSeats: "Optional", stereo: "Toyota Multimedia",
            headlights: "LED Accent Lighting", ai: "Toyota Safety Sense",
            funFact: "The Corolla is the best-selling car nameplate in world history."
        }
    },
    "corolla-2023-se": {
        modelId: "toyota-corolla", year: "2023", trim: "SE Dynamic",
        energy: "PETROL", facesRight: false,
        power: "169hp", topSpeed: "190km/h", torque: "205nm",
        img: "assets/corolla2025.png",
        details: {
            manufacturer: "Toyota", production: "Blue Springs, USA", limited: "SE Dynamic",
            zeroToSixty: "8.3s", zeroToHundred: "8.4s", engineFull: "2.0L 4-Cylinder",
            seating: "5 Adults", cargo: "361 Liters", leather: "Fabric/SofTex Mix",
            heatedSeats: "Optional", stereo: "Toyota Multimedia",
            headlights: "LED Accent Lighting", ai: "Toyota Safety Sense",
            funFact: "The Corolla is the best-selling car nameplate in world history."
        }
    },
    "cybertruck-2024-cyberbeast": {
        modelId: "tesla-cybertruck", year: "2024", trim: "Cyberbeast",
        energy: "ELECTRIC", facesRight: false,
        power: "845hp", topSpeed: "209km/h", torque: "10000nm",
        img: "assets/cybertruck.png",
        details: {
            manufacturer: "Tesla", production: "Giga Texas, USA", limited: "Cyberbeast",
            zeroToSixty: "2.6s", zeroToHundred: "2.7s", engineFull: "Tri-Motor AWD",
            seating: "5 Adults", cargo: "3,400 Liters (Total)", leather: "Cyber-Tech Synthetic",
            heatedSeats: "Full Interior", stereo: "15-Speaker Custom Audio",
            headlights: "Integrated Light Bar", ai: "Full Self-Driving Capability",
            funFact: "The Cybertruck's exoskeleton is made of Ultra-Hard 30X Cold-Rolled stainless steel."
        }
    },
    "kia-sportage-2023-xline": {
        modelId: "kia-sportage", year: "2023", trim: "X-Line",
        energy: "PETROL", facesRight: true,
        power: "187hp", topSpeed: "200km/h", torque: "241nm",
        img: "assets/kia2023sportage.png",
        details: {
            manufacturer: "Kia", production: "West Point, USA", limited: "X-Line",
            zeroToSixty: "8.6s", zeroToHundred: "8.7s", engineFull: "2.5L 4-Cylinder",
            seating: "5 Adults", cargo: "1,121 Liters", leather: "SynTex Trim",
            heatedSeats: "Front Bench", stereo: "Harman Kardon Premium",
            headlights: "LED Projector High-Beam", ai: "Kia Drive Wise",
            funFact: "The 2023 Sportage features a boomerang-shaped LED headlight design."
        }
    },
    "sclass-2025-s580": {
        modelId: "mercedes-s-class", year: "2025", trim: "S 580 Executive",
        energy: "HYBRID", facesRight: true,
        power: "442hp", topSpeed: "250km/h", torque: "560nm",
        img: "assets/mercedes2025sclass.png",
        details: {
            manufacturer: "Mercedes-Benz", production: "Sindelfingen, Germany", limited: "S 580 Executive",
            zeroToSixty: "4.8s", zeroToHundred: "4.9s", engineFull: "4.0L V8 Biturbo w/ Mild Hybrid",
            seating: "5 Adults", cargo: "540 Liters", leather: "Exclusive Nappa",
            heatedSeats: "Energizing Comfort", stereo: "Burmester High-End 4D",
            headlights: "Digital Light", ai: "Level 3 Drive Pilot",
            funFact: "The S-Class has long been considered the 'World's Best Car' by industry critics."
        }
    },
    "sclass-2023-s500": {
        modelId: "mercedes-s-class", year: "2023", trim: "S 500 Long",
        energy: "HYBRID", facesRight: true,
        power: "429hp", topSpeed: "250km/h", torque: "520nm",
        img: "assets/inventory/sclass-2023-used-001/hero.jpg",
        details: {
            manufacturer: "Mercedes-Benz", production: "Sindelfingen, Germany", limited: "Long Wheelbase",
            zeroToSixty: "4.9s", zeroToHundred: "5.0s", engineFull: "3.0L I6 Biturbo w/ Mild Hybrid",
            seating: "5 Adults", cargo: "540 Liters", leather: "Exclusive Nappa",
            heatedSeats: "Energizing Comfort", stereo: "Burmester 3D",
            headlights: "Digital Light", ai: "Level 3 Drive Pilot",
            funFact: "The S-Class S 500 LWB rear seat rivals business class aircraft cabins."
        }
    },
    "gle63-2024-amg": {
        modelId: "mercedes-gle", year: "2024", trim: "GLE 63 S AMG",
        energy: "HYBRID", facesRight: false,
        power: "603hp", topSpeed: "280km/h", torque: "850nm",
        img: "assets/inventory/gle63-2024-new-001/hero.jpg",
        details: {
            manufacturer: "Mercedes-Benz", production: "Graz, Austria", limited: "AMG Performance",
            zeroToSixty: "3.7s", zeroToHundred: "3.8s", engineFull: "4.0L V8 Biturbo + EQ Boost",
            seating: "5 Adults", cargo: "630 Liters", leather: "AMG Nappa Sport",
            heatedSeats: "Front & Rear", stereo: "Burmester Surround",
            headlights: "Multibeam LED", ai: "AMG Ride Control+",
            funFact: "The GLE 63 S can sprint to 100km/h faster than many dedicated sports cars."
        }
    },
    "gle63-2022-amg": {
        modelId: "mercedes-gle", year: "2022", trim: "GLE 63 S AMG",
        energy: "HYBRID", facesRight: false,
        power: "603hp", topSpeed: "280km/h", torque: "850nm",
        img: "assets/inventory/gle63-2022-used-001/hero.jpg",
        details: {
            manufacturer: "Mercedes-Benz", production: "Graz, Austria", limited: "AMG Performance",
            zeroToSixty: "3.8s", zeroToHundred: "3.9s", engineFull: "4.0L V8 Biturbo + EQ Boost",
            seating: "5 Adults", cargo: "630 Liters", leather: "AMG Nappa Sport",
            heatedSeats: "Front & Rear", stereo: "Burmester Surround",
            headlights: "Multibeam LED", ai: "AMG Ride Control+",
            funFact: "The GLE 63 S can sprint to 100km/h faster than many dedicated sports cars."
        }
    },
    "bmw-x5m-2024-competition": {
        modelId: "bmw-x5m", year: "2024", trim: "M Competition",
        energy: "PETROL", facesRight: false,
        power: "617hp", topSpeed: "290km/h", torque: "750nm",
        img: "assets/inventory/bmw-x5m-2024-new-001/hero.jpg",
        details: {
            manufacturer: "BMW", production: "Spartanburg, USA", limited: "M Competition",
            zeroToSixty: "3.7s", zeroToHundred: "3.8s", engineFull: "4.4L V8 M TwinPower Turbo",
            seating: "5 Adults", cargo: "645 Liters", leather: "Merino Full Leather",
            heatedSeats: "Front & Rear", stereo: "Bowers & Wilkins Diamond",
            headlights: "Laser Light", ai: "BMW Active Driving Assistant Pro",
            funFact: "The X5 M Competition can reach 290km/h — faster than most supercars from the '90s."
        }
    },
    "bmw-x5m-2022-competition": {
        modelId: "bmw-x5m", year: "2022", trim: "M Competition",
        energy: "PETROL", facesRight: false,
        power: "617hp", topSpeed: "290km/h", torque: "750nm",
        img: "assets/inventory/bmw-x5m-2022-used-001/hero.jpg",
        details: {
            manufacturer: "BMW", production: "Spartanburg, USA", limited: "M Competition",
            zeroToSixty: "3.8s", zeroToHundred: "3.9s", engineFull: "4.4L V8 M TwinPower Turbo",
            seating: "5 Adults", cargo: "645 Liters", leather: "Merino Full Leather",
            heatedSeats: "Front & Rear", stereo: "Bowers & Wilkins Diamond",
            headlights: "Laser Light", ai: "BMW Active Driving Assistant Pro",
            funFact: "The X5 M Competition can reach 290km/h — faster than most supercars from the '90s."
        }
    },
    "bmw-7series-2024-760i": {
        modelId: "bmw-7series", year: "2024", trim: "760i xDrive",
        energy: "PETROL", facesRight: true,
        power: "544hp", topSpeed: "250km/h", torque: "750nm",
        img: "assets/inventory/bmw-7series-2024-new-001/hero.jpg",
        details: {
            manufacturer: "BMW", production: "Dingolfing, Germany", limited: "M Sport Package",
            zeroToSixty: "4.1s", zeroToHundred: "4.2s", engineFull: "4.4L V8 M TwinPower Turbo",
            seating: "5 Adults", cargo: "500 Liters", leather: "Merino Extended Leather",
            heatedSeats: "Executive Lounge Rear", stereo: "Bowers & Wilkins Diamond 36-Spk",
            headlights: "BMW Iconic Glow Crystal", ai: "Level 2+ Personal Pilot",
            funFact: "The new G70 7 Series features a 31-inch 8K Theatre Screen for rear passengers."
        }
    },
    "bmw-7series-2023-740i": {
        modelId: "bmw-7series", year: "2023", trim: "740i M Sport",
        energy: "PETROL", facesRight: true,
        power: "375hp", topSpeed: "250km/h", torque: "540nm",
        img: "assets/inventory/bmw-7series-2023-used-001/hero.jpg",
        details: {
            manufacturer: "BMW", production: "Dingolfing, Germany", limited: "M Sport Package",
            zeroToSixty: "5.2s", zeroToHundred: "5.3s", engineFull: "3.0L I6 TwinPower Turbo",
            seating: "5 Adults", cargo: "500 Liters", leather: "Merino Leather",
            heatedSeats: "Front & Executive Rear", stereo: "Bowers & Wilkins 18-Spk",
            headlights: "Adaptive LED", ai: "Level 2 Active Driving Assistant",
            funFact: "The 7 Series has been the benchmark of executive luxury sedans for over 40 years."
        }
    },
    "porsche-cayenne-2024-turbogt": {
        modelId: "porsche-cayenne", year: "2024", trim: "Turbo GT",
        energy: "PETROL", facesRight: false,
        power: "659hp", topSpeed: "300km/h", torque: "870nm",
        img: "assets/inventory/porsche-cayenne-2024-new-001/hero.jpg",
        details: {
            manufacturer: "Porsche", production: "Leipzig, Germany", limited: "Turbo GT",
            zeroToSixty: "3.3s", zeroToHundred: "3.4s", engineFull: "4.0L V8 Twin-Turbo",
            seating: "5 Adults", cargo: "770 Liters", leather: "Race-Tex / Leather Combination",
            heatedSeats: "18-way Sport Plus", stereo: "Burmester High-End 3D",
            headlights: "HD Matrix LED with PDLS+", ai: "Porsche InnoDrive",
            funFact: "The Cayenne Turbo GT set a new SUV lap record at the Nürburgring Nordschleife."
        }
    },
    "porsche-cayenne-2023-turbo": {
        modelId: "porsche-cayenne", year: "2023", trim: "Turbo",
        energy: "PETROL", facesRight: false,
        power: "542hp", topSpeed: "286km/h", torque: "770nm",
        img: "assets/inventory/porsche-cayenne-2023-used-001/hero.jpg",
        details: {
            manufacturer: "Porsche", production: "Leipzig, Germany", limited: "Turbo",
            zeroToSixty: "3.9s", zeroToHundred: "4.0s", engineFull: "4.0L V8 Twin-Turbo",
            seating: "5 Adults", cargo: "770 Liters", leather: "Two-Tone Leather",
            heatedSeats: "18-way Adaptive Sport", stereo: "Burmester Surround",
            headlights: "LED Matrix with PDLS", ai: "Porsche Active Safe",
            funFact: "The Cayenne Turbo shares its engine architecture with the Panamera Turbo."
        }
    },
    "bentley-bentayga-2024-ewb": {
        modelId: "bentley-bentayga", year: "2024", trim: "EWB Azure",
        energy: "PETROL", facesRight: true,
        power: "542hp", topSpeed: "290km/h", torque: "770nm",
        img: "assets/inventory/bentley-bentayga-2024-new-001/hero.jpg",
        details: {
            manufacturer: "Bentley", production: "Crewe, UK", limited: "EWB Azure Edition",
            zeroToSixty: "4.5s", zeroToHundred: "4.6s", engineFull: "4.0L V8 Twin-Turbo",
            seating: "4 Adults", cargo: "430 Liters", leather: "Handcrafted Hide",
            heatedSeats: "Airline-style Rear Seats", stereo: "Naim for Bentley 20-Spk",
            headlights: "Matrix LED", ai: "Bentley Dynamic Ride",
            funFact: "A single Bentayga dashboard takes over 150 hours of hand-finishing to complete."
        }
    },
    "bentley-bentayga-2022-v8": {
        modelId: "bentley-bentayga", year: "2022", trim: "V8",
        energy: "PETROL", facesRight: true,
        power: "542hp", topSpeed: "290km/h", torque: "770nm",
        img: "assets/inventory/bentley-bentayga-2022-used-001/hero.jpg",
        details: {
            manufacturer: "Bentley", production: "Crewe, UK", limited: "V8",
            zeroToSixty: "4.5s", zeroToHundred: "4.6s", engineFull: "4.0L V8 Twin-Turbo",
            seating: "5 Adults", cargo: "430 Liters", leather: "Hide Leather",
            heatedSeats: "Front & Rear Ventilated", stereo: "Naim for Bentley",
            headlights: "Matrix LED with ADB", ai: "Bentley All-Terrain Specification",
            funFact: "Every Bentayga is hand-assembled by a dedicated craftsperson team in Crewe, England."
        }
    },
    "cullinan-2024-series2": {
        modelId: "rolls-royce-cullinan", year: "2024", trim: "Series II",
        energy: "PETROL", facesRight: true,
        power: "591hp", topSpeed: "250km/h", torque: "900nm",
        img: "assets/inventory/cullinan-2024-new-001/hero.jpg",
        details: {
            manufacturer: "Rolls-Royce", production: "Goodwood, UK", limited: "Series II",
            zeroToSixty: "5.0s", zeroToHundred: "5.2s", engineFull: "6.75L V12 Twin-Turbo",
            seating: "5 Adults", cargo: "560 Liters", leather: "Bespoke Leather & Veneer",
            heatedSeats: "Serenity Rear Package", stereo: "Bespoke Audio 18-Spk",
            headlights: "LED Illuminated Pantheon Grille", ai: "Night Vision w/ Pedestrian Alert",
            funFact: "Every Rolls-Royce Cullinan can be entirely bespoke — no two are identical."
        }
    },
    "cullinan-2022-blackbadge": {
        modelId: "rolls-royce-cullinan", year: "2022", trim: "Black Badge",
        energy: "PETROL", facesRight: true,
        power: "591hp", topSpeed: "250km/h", torque: "900nm",
        img: "assets/inventory/cullinan-2022-used-001/hero.jpg",
        details: {
            manufacturer: "Rolls-Royce", production: "Goodwood, UK", limited: "Black Badge",
            zeroToSixty: "5.0s", zeroToHundred: "5.2s", engineFull: "6.75L V12 Twin-Turbo",
            seating: "5 Adults", cargo: "560 Liters", leather: "Black Leather & Carbon Fibre",
            heatedSeats: "Serenity Rear Package", stereo: "Bespoke Audio 18-Spk",
            headlights: "LED with Signature DRL", ai: "Night Vision",
            funFact: "The Black Badge edition rejects chrome in favour of darkened titanium and carbon fibre."
        }
    },
    "audi-q8-2024-sline": {
        modelId: "audi-q8", year: "2024", trim: "55 TFSI S-Line",
        energy: "PETROL", facesRight: false,
        power: "340hp", topSpeed: "250km/h", torque: "500nm",
        img: "assets/inventory/audi-q8-2024-new-001/hero.jpg",
        details: {
            manufacturer: "Audi", production: "Bratislava, Slovakia", limited: "S-Line Competition",
            zeroToSixty: "5.9s", zeroToHundred: "6.0s", engineFull: "3.0L V6 TFSI Turbo",
            seating: "5 Adults", cargo: "605 Liters", leather: "Valcona Leather",
            heatedSeats: "Sport Contour", stereo: "Bang & Olufsen 3D 23-Spk",
            headlights: "HD Matrix LED with Laser", ai: "Audi Pre Sense 360",
            funFact: "The Q8 uses the same MLB Evo platform shared with Bentley and Lamborghini."
        }
    },
    "audi-q8-2022-sline": {
        modelId: "audi-q8", year: "2022", trim: "55 TFSI S-Line",
        energy: "PETROL", facesRight: false,
        power: "340hp", topSpeed: "250km/h", torque: "500nm",
        img: "assets/inventory/audi-q8-2022-used-001/hero.jpg",
        details: {
            manufacturer: "Audi", production: "Bratislava, Slovakia", limited: "S-Line",
            zeroToSixty: "6.0s", zeroToHundred: "6.1s", engineFull: "3.0L V6 TFSI Turbo",
            seating: "5 Adults", cargo: "605 Liters", leather: "Milano Leather",
            heatedSeats: "Sport Contour", stereo: "Bang & Olufsen 3D",
            headlights: "HD Matrix LED", ai: "Audi Pre Sense",
            funFact: "The Q8 was Audi's first SUV coupé, pioneering the segment for the brand."
        }
    },
    "jeep-grandwagoneer-2024-series3": {
        modelId: "jeep-grand-wagoneer", year: "2024", trim: "Series III Obsidian",
        energy: "PETROL", facesRight: false,
        power: "510hp", topSpeed: "210km/h", torque: "637nm",
        img: "assets/inventory/jeep-grandwagoneer-2024-new-001/hero.jpg",
        details: {
            manufacturer: "Jeep", production: "Warren, USA", limited: "Series III Obsidian",
            zeroToSixty: "4.4s", zeroToHundred: "4.5s", engineFull: "6.4L V8 HEMI",
            seating: "8 Adults", cargo: "1,146 Liters", leather: "McEvoy Mills Wool & Leather",
            heatedSeats: "Front, Mid & Third Row", stereo: "McIntosh MX950 23-Spk",
            headlights: "Full LED w/ Adaptive Driving Beam", ai: "Level 2 Highway Assist",
            funFact: "The Grand Wagoneer's McIntosh audio system is the first in any vehicle from the brand."
        }
    },
    "jeep-grandwagoneer-2023-series2": {
        modelId: "jeep-grand-wagoneer", year: "2023", trim: "Series II",
        energy: "PETROL", facesRight: false,
        power: "471hp", topSpeed: "210km/h", torque: "637nm",
        img: "assets/inventory/jeep-grandwagoneer-2023-used-001/hero.jpg",
        details: {
            manufacturer: "Jeep", production: "Warren, USA", limited: "Series II",
            zeroToSixty: "4.8s", zeroToHundred: "4.9s", engineFull: "6.4L V8 HEMI",
            seating: "8 Adults", cargo: "1,146 Liters", leather: "Palermo Leather",
            heatedSeats: "Front & Mid Row", stereo: "McIntosh MX950",
            headlights: "Full LED Projector", ai: "ParkSense & LaneSense",
            funFact: "The original Jeep Wagoneer was the world's first luxury SUV, launched in 1963."
        }
    }
};
window.VARIANTS = VARIANTS;

// ═══════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═══════════════════════════════════════════════════════════════

/**
 * Returns all INVENTORY units for a given modelId.
 * Only returns status:"available" units. Sorted: new first, then used by price asc.
 */
function getUnitsForModel(modelId) {
    if (typeof INVENTORY === 'undefined') return [];
    return INVENTORY
        .filter(u => {
            if (u.status !== 'available') return false;
            const v = VARIANTS[u.variantId];
            return v && v.modelId === modelId;
        })
        .sort((a, b) => {
            if (a.condition !== b.condition) return a.condition === 'new' ? -1 : 1;
            return parseInt(a.price.replace(/[^0-9]/g, ''), 10) - parseInt(b.price.replace(/[^0-9]/g, ''), 10);
        });
}

/**
 * Returns all variants for a model, sorted newest year first.
 */
function getVariantsForModel(modelId) {
    return Object.values(VARIANTS)
        .filter(v => v.modelId === modelId)
        .sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

/**
 * Merges model + variant + unit into a single flat object.
 * Falls back to variant.img if unit has no imgs.
 * Returns null if unitId not found.
 */
function resolveUnit(unitId) {
    if (typeof INVENTORY === 'undefined') return null;
    const unit = INVENTORY.find(u => u.id === unitId);
    if (!unit) return null;
    const variant = VARIANTS[unit.variantId];
    if (!variant) return null;
    const model = MODELS[variant.modelId];
    if (!model) return null;

    const imgs = (unit.imgs && unit.imgs.length > 0) ? unit.imgs : [variant.img];

    return {
        // model level
        ...model,
        // variant level
        ...variant,
        // unit level (unit fields win on conflict)
        ...unit,
        // resolved
        imgs,
        img: imgs[0],
        // surfaced for catalog/compare compat
        id: unit.id,
        modelId: variant.modelId,
        variantId: unit.variantId,
        name: model.name,
        brand: model.brand,
        type: model.type,
        category: model.category,
    };
}

/**
 * Lowest available price across all units of a model.
 * Returns formatted string e.g. "₦155,000,000"
 */
function getFromPrice(modelId) {
    const units = getUnitsForModel(modelId);
    if (units.length === 0) return null;
    return units.reduce((min, u) => {
        const p = parseInt(u.price.replace(/[^0-9]/g, ''), 10);
        return p < parseInt(min.replace(/[^0-9]/g, ''), 10) ? u.price : min;
    }, units[0].price);
}

/**
 * Returns array of conditions available for a model.
 * e.g. ["new", "used"] or ["new"]
 */
function getConditions(modelId) {
    const units = getUnitsForModel(modelId);
    const set = new Set(units.map(u => u.condition));
    return [...set].sort(); // "new" before "used"
}

window.getUnitsForModel  = getUnitsForModel;
window.getVariantsForModel = getVariantsForModel;
window.resolveUnit       = resolveUnit;
window.getFromPrice      = getFromPrice;
window.getConditions     = getConditions;

// ═══════════════════════════════════════════════════════════════
// BACKWARD COMPAT — window.CARS proxy
// Maps both old model IDs and new unit IDs.
// Old model ID → resolves default (first available) unit.
// New unit ID  → resolves that unit directly.
// ═══════════════════════════════════════════════════════════════

// Map old model IDs to new model IDs (for renamed models)
var LEGACY_MODEL_MAP = {
    "escalade-v":        "cadillac-escalade-v",
    "_2026cadillac":     "cadillac-escalade-iq",
    "byd-ato3":          "byd-atto-3",
    "camry2025hybrid":   "toyota-camry",
    "corolla2025":       "toyota-corolla",
    "cybertruck":        "tesla-cybertruck",
    "kia2023sportage":   "kia-sportage",
    "mercedes2025sclass":"mercedes-s-class"
};

var CARS = new Proxy({}, {
    get(_, id) {
        if (typeof id !== 'string') return undefined;
        // 1. Try as a direct unit ID
        if (typeof INVENTORY !== 'undefined') {
            const unit = INVENTORY.find(u => u.id === id);
            if (unit) return resolveUnit(id);
        }
        // 2. Resolve legacy or current model ID → first available unit
        const modelId = LEGACY_MODEL_MAP[id] || (MODELS[id] ? id : null);
        if (modelId) {
            const units = getUnitsForModel(modelId);
            if (units.length > 0) return resolveUnit(units[0].id);
        }
        return undefined;
    },
    has(_, id) {
        if (typeof INVENTORY !== 'undefined' && INVENTORY.find(u => u.id === id)) return true;
        const modelId = LEGACY_MODEL_MAP[id] || (MODELS[id] ? id : null);
        return modelId ? getUnitsForModel(modelId).length > 0 : false;
    },
    ownKeys() {
        if (typeof INVENTORY === 'undefined') return [];
        return INVENTORY.filter(u => u.status === 'available').map(u => u.id);
    },
    getOwnPropertyDescriptor(_, id) {
        return { enumerable: true, configurable: true, value: this.get(_, id) };
    }
});
window.CARS = CARS;

// ═══════════════════════════════════════════════════════════════
// LOCALSTORAGE MIGRATION
// Upgrades saved model IDs to unit IDs on first load.
// Runs once, flagged in localStorage to prevent re-running.
// ═══════════════════════════════════════════════════════════════
(function migrateSavedIds() {
    if (localStorage.getItem('faceoff_migrated_v2')) return;
    try {
        const saved = JSON.parse(localStorage.getItem('faceoff_saved')) || [];
        const migrated = saved.map(id => {
            // Already a unit ID?
            if (typeof INVENTORY !== 'undefined' && INVENTORY.find(u => u.id === id)) return id;
            // Map legacy → current model → default unit
            const modelId = LEGACY_MODEL_MAP[id] || (MODELS[id] ? id : null);
            if (modelId) {
                const units = getUnitsForModel(modelId);
                return units.length > 0 ? units[0].id : null;
            }
            return null;
        }).filter(Boolean);
        localStorage.setItem('faceoff_saved', JSON.stringify(migrated));
        localStorage.setItem('faceoff_migrated_v2', '1');
    } catch (e) {
        console.warn('Faceoff: localStorage migration failed', e);
    }
})();

// ═══════════════════════════════════════════════════════════════
// BRANDS  (unchanged — used by catalog brand logo strip)
// ═══════════════════════════════════════════════════════════════
var BRANDS = [
    { name: "Rolls-Royce",   logo: "assets/brands/rolls-royce.png" },
    { name: "Bentley",       logo: "assets/brands/bentley.png" },
    { name: "Mercedes-Benz", logo: "assets/brands/mercedes.png" },
    { name: "BMW",           logo: "assets/brands/bmw.png" },
    { name: "Audi",          logo: "assets/brands/audi.png" },
    { name: "Lexus",         logo: "assets/brands/lexus.png" },
    { name: "Land Rover",    logo: "assets/brands/landrover.png" },
    { name: "Porsche",       logo: "assets/brands/porsche.png" },
    { name: "Ferrari",       logo: "assets/brands/ferrari.png" },
    { name: "Lamborghini",   logo: "assets/brands/lamborghini.png" },
    { name: "McLaren",       logo: "assets/brands/mclaren.png" },
    { name: "Aston Martin",  logo: "assets/brands/aston-martin.png" },
    { name: "Bugatti",       logo: "assets/brands/bugatti.png" },
    { name: "Tesla",         logo: "assets/brands/tesla.png" },
    { name: "Cadillac",      logo: "assets/brands/cadillac.png" },
    { name: "Toyota",        logo: "assets/brands/toyota.png" },
    { name: "Honda",         logo: "assets/brands/honda.png" },
    { name: "Ford",          logo: "assets/brands/ford.png" },
    { name: "Chevrolet",     logo: "assets/brands/chevrolet.png" },
    { name: "Volkswagen",    logo: "assets/brands/volkswagen.png" }
];
window.BRANDS = BRANDS;

} // end guard

if (typeof module !== 'undefined') {
    module.exports = { MODELS: window.MODELS, VARIANTS: window.VARIANTS, BRANDS: window.BRANDS };
}
