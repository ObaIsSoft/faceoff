if (!window.MODELS) {

// ═══════════════════════════════════════════════════════════════
// TIER 1 — MODELS  (nameplates, brand-level, never changes)
// ═══════════════════════════════════════════════════════════════
var MODELS = {
    "mercedes-g-wagon": {
        name: "Mercedes-Benz G-Wagon", brand: "Mercedes-Benz",
        logo: "assets/brands/mercedes.svg", type: "SUV", category: "LUXURY",
        heroImg: "assets/car_left.png", specProfile: "LUXURY",
        model3d: "assets/models/mercedes-g-wagon/model.glb"
    },
    "lexus-lx-600": {
        name: "Lexus LX 600", brand: "Lexus",
        logo: null, type: "SUV", category: "LUXURY",
        heroImg: "assets/car_right.png", specProfile: "LUXURY",
        model3d: "assets/models/lexus-lx-600/model.glb"
    },
    "range-rover": {
        name: "Range Rover Autobiography", brand: "Land Rover",
        logo: null, type: "SUV", category: "ADVENTURE",
        heroImg: "assets/2024RangeRover.png", specProfile: "LUXURY",
        model3d: "assets/models/range-rover/model.glb"
    },
    "cadillac-escalade-v": {
        name: "Cadillac Escalade V", brand: "Cadillac",
        logo: null, type: "SUV", category: "SPORT",
        heroImg: "assets/escalade2025.png", specProfile: "LUXURY",
        model3d: "assets/models/cadillac-escalade-v/model.glb"
    },
    "cadillac-escalade-iq": {
        name: "Cadillac Escalade IQ", brand: "Cadillac",
        logo: null, type: "SUV", category: "LUXURY",
        heroImg: "assets/_2026cadillac.png", specProfile: "EV",
        paintProfile: { bodyLightnessRange: [8, 60], usesAlphaMask: true, saturationBoost: 58 },
        model3d: "assets/models/cadillac-escalade-iq/model.glb"
    },
    "byd-atto-3": {
        name: "BYD Atto 3", brand: "BYD",
        logo: "assets/brands/byd.svg", type: "SUV", category: "ECONOMY",
        heroImg: "assets/byd-ato3.png", specProfile: "EV"
    },
    "toyota-camry": {
        name: "Toyota Camry Hybrid", brand: "Toyota",
        logo: "assets/brands/toyota.svg", type: "SEDAN", category: "ECONOMY",
        heroImg: "assets/camry2025hybrid.png", specProfile: "STANDARD"
    },
    "toyota-corolla": {
        name: "Toyota Corolla", brand: "Toyota",
        logo: "assets/brands/toyota.svg", type: "SEDAN", category: "ECONOMY",
        heroImg: "assets/corolla2025.png", specProfile: "STANDARD",
        model3d: "assets/models/toyota-corolla/model.glb"
    },
    "tesla-cybertruck": {
        name: "Tesla Cybertruck", brand: "Tesla",
        logo: "assets/brands/tesla.svg", type: "TRUCK", category: "OFF-ROAD",
        heroImg: "assets/cybertruck.png", specProfile: "EV",
        paintProfile: { bodyLightnessRange: [10, 88], usesAlphaMask: true, saturationBoost: 55 },
        model3d: "assets/models/tesla-cybertruck/model.glb"
    },
    "kia-sportage": {
        name: "Kia Sportage", brand: "Kia",
        logo: null, type: "SUV", category: "FAMILY",
        heroImg: "assets/kia2023sportage.png", specProfile: "STANDARD"
    },
    "mercedes-s-class": {
        name: "Mercedes-Benz S-Class", brand: "Mercedes-Benz",
        logo: "assets/brands/mercedes.svg", type: "SEDAN", category: "LUXURY",
        heroImg: "assets/mercedes2025sclass.png", specProfile: "ULTRA_LUXURY",
        model3d: "assets/models/mercedes-s-class/model.glb"
    },
    "mercedes-gle": {
        name: "Mercedes-Benz GLE 63 AMG", brand: "Mercedes-Benz",
        logo: "assets/brands/mercedes.svg", type: "SUV", category: "SPORT",
        heroImg: "assets/inventory/gle63-2024-new-001/hero.jpg", specProfile: "LUXURY",
        model3d: "assets/models/mercedes-gle/model.glb"
    },
    "bmw-x5m": {
        name: "BMW X5 M Competition", brand: "BMW",
        logo: "assets/brands/bmw.svg", type: "SUV", category: "SPORT",
        heroImg: "assets/inventory/bmw-x5m-2024-new-001/hero.jpg", specProfile: "LUXURY",
        model3d: "assets/models/bmw-x5m/model.glb"
    },
    "bmw-7series": {
        name: "BMW 7 Series 760i", brand: "BMW",
        logo: "assets/brands/bmw.svg", type: "SEDAN", category: "LUXURY",
        heroImg: "assets/inventory/bmw-7series-2024-new-001/hero.jpg", specProfile: "ULTRA_LUXURY",
        model3d: "assets/models/bmw-7series/model.glb"
    },
    "porsche-cayenne": {
        name: "Porsche Cayenne Turbo GT", brand: "Porsche",
        logo: null, type: "SUV", category: "SPORT",
        heroImg: "assets/inventory/porsche-cayenne-2024-new-001/hero.jpg", specProfile: "LUXURY",
        model3d: "assets/models/porsche-cayenne/model.glb"
    },
    "bentley-bentayga": {
        name: "Bentley Bentayga EWB", brand: "Bentley",
        logo: null, type: "SUV", category: "LUXURY",
        heroImg: "assets/inventory/bentley-bentayga-2024-new-001/hero.jpg", specProfile: "ULTRA_LUXURY",
        model3d: "assets/models/bentley-bentayga/model.glb"
    },
    "rolls-royce-cullinan": {
        name: "Rolls-Royce Cullinan", brand: "Rolls-Royce",
        logo: "assets/brands/rollsroyce.svg", type: "SUV", category: "LUXURY",
        heroImg: "assets/inventory/cullinan-2024-new-001/hero.jpg", specProfile: "ULTRA_LUXURY",
        model3d: "assets/models/rolls-royce-cullinan/model.glb"
    },
    "audi-q8": {
        name: "Audi Q8 S-Line", brand: "Audi",
        logo: "assets/brands/audi.svg", type: "SUV", category: "LUXURY",
        heroImg: "assets/inventory/audi-q8-2024-new-001/hero.jpg", specProfile: "LUXURY",
        model3d: "assets/models/audi-q8/model.glb"
    },
    "jeep-grand-wagoneer": {
        name: "Jeep Grand Wagoneer", brand: "Jeep",
        logo: "assets/brands/jeep.svg", type: "SUV", category: "ADVENTURE",
        heroImg: "assets/inventory/jeep-grandwagoneer-2024-new-001/hero.jpg", specProfile: "STANDARD"
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
// CUSTOM SPEC PROFILES
// Defines what customisation options are available per brand tier.
// Each MODEL references one profile via specProfile.
// ═══════════════════════════════════════════════════════════════
var CUSTOM_SPEC_PROFILES = {

    ULTRA_LUXURY: {
        steps: ['exterior', 'interior', 'addons'],
        exterior: {
            paint: {
                label: 'Bespoke Paint',
                options: [
                    { id: 'onyx-black',   label: 'Onyx Black',       hex: '#080808', type: 'gloss',    price: null },
                    { id: 'diamond-white',label: 'Diamond White',     hex: '#f2f2f0', type: 'gloss',    price: null },
                    { id: 'silver-satin', label: 'Silver Satin',      hex: '#909098', type: 'satin',    price: null },
                    { id: 'midnight-blue',label: 'Midnight Blue',     hex: '#0e1a3a', type: 'gloss',    price: null },
                    { id: 'forest-green', label: 'Forest Green',      hex: '#1a3020', type: 'satin',    price: null },
                    { id: 'bespoke-bur',  label: 'Bespoke Burgundy',  hex: '#3c0a14', type: 'metallic', price: '₦8,500,000' },
                    { id: 'bespoke-champ',label: 'Bespoke Champagne', hex: '#c8b07a', type: 'metallic', price: '₦8,500,000' },
                ]
            },
            rims: {
                label: 'Wheel Finish',
                options: [
                    { id: 'polished-silver', label: '22" Polished Silver', color: 0xd8d8e0, roughness: 0.08, metalness: 0.95, price: null },
                    { id: 'dark-satin',      label: '22" Dark Satin',      color: 0x2a2a36, roughness: 0.42, metalness: 0.75, price: '₦3,200,000' },
                    { id: 'bespoke-gold',    label: '22" Bespoke Gold',    color: 0xb8920c, roughness: 0.28, metalness: 0.82, price: '₦6,800,000' },
                ]
            },
            tint: true, calipers: true
        },
        interior: {
            trim: {
                label: 'Leather & Trim',
                options: [
                    { id: 'obsidian',  label: 'Obsidian',         desc: 'Black Nappa · carbon fibre inserts',          price: null },
                    { id: 'cognac',    label: 'Cognac',            desc: 'Saddle tan · piano black finish',             price: '₦4,200,000' },
                    { id: 'ivory',     label: 'Ivory',             desc: 'Cream Nappa · polished silver accents',       price: '₦4,200,000' },
                    { id: 'two-tone',  label: 'Two-Tone Bespoke',  desc: 'Contrast stitching · hand-finished veneer',   price: '₦9,500,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',   label: 'GPS Vehicle Tracker',        desc: 'Military-grade · lifetime subscription',       price: '₦350,000' },
            { id: 'warranty',  label: '3-Year Extended Warranty',    desc: 'Bumper-to-bumper · drivetrain · electrical',   price: '₦2,800,000' },
            { id: 'ceramic',   label: 'Ceramic Paint Coating',       desc: '10H hardness · 5-year paint protection',       price: '₦1,200,000' },
            { id: 'ppf',       label: 'Full PPF Wrap',               desc: 'Self-healing film · front + rear coverage',    price: '₦1,800,000' },
            { id: 'tint-pro',  label: 'Llumar Ceramic Tint',         desc: 'Heat rejection · UV block · factory finish',   price: '₦480,000' },
            { id: 'door-sills',label: 'Illuminated Door Sills',      desc: 'Custom-engraved · ambient lighting',           price: '₦650,000' },
        ]
    },

    LUXURY: {
        steps: ['exterior', 'interior', 'addons'],
        exterior: {
            paint: {
                label: 'Body Paint',
                options: [
                    { id: 'obsidian-black',  label: 'Obsidian Black',  hex: '#0a0a0a', type: 'gloss',    price: null },
                    { id: 'arctic-white',    label: 'Arctic White',    hex: '#f0f0f0', type: 'gloss',    price: null },
                    { id: 'lunar-silver',    label: 'Lunar Silver',    hex: '#8888a0', type: 'metallic', price: null },
                    { id: 'racing-red',      label: 'Racing Red',      hex: '#b81414', type: 'gloss',    price: '₦1,200,000' },
                    { id: 'midnight-navy',   label: 'Midnight Navy',   hex: '#1a1a2e', type: 'gloss',    price: null },
                    { id: 'desert-gold',     label: 'Desert Gold',     hex: '#b8920c', type: 'metallic', price: '₦1,800,000' },
                    { id: 'glacier-blue',    label: 'Glacier Blue',    hex: '#1e3e8c', type: 'gloss',    price: null },
                    { id: 'racing-green',    label: 'Racing Green',    hex: '#14381e', type: 'satin',    price: '₦1,500,000' },
                ]
            },
            rims: {
                label: 'Rim Finish',
                options: [
                    { id: 'polished-silver', label: 'Polished Silver', color: 0xd8d8e0, roughness: 0.1,  metalness: 0.95, price: null },
                    { id: 'matte-black',     label: 'Matte Black',     color: 0x1a1a1a, roughness: 0.8,  metalness: 0.3,  price: '₦800,000' },
                    { id: 'gunmetal',        label: 'Gunmetal',        color: 0x3c3c50, roughness: 0.3,  metalness: 0.8,  price: '₦600,000' },
                    { id: 'satin-gold',      label: 'Satin Gold',      color: 0xb8920c, roughness: 0.4,  metalness: 0.7,  price: '₦1,400,000' },
                ]
            },
            tint: true, calipers: true
        },
        interior: {
            trim: {
                label: 'Interior Trim',
                options: [
                    { id: 'obsidian', label: 'Obsidian', desc: 'Black leather · carbon fibre inserts',      price: null },
                    { id: 'cognac',   label: 'Cognac',   desc: 'Tan leather · brushed aluminium trim',      price: '₦1,500,000' },
                    { id: 'ivory',    label: 'Ivory',    desc: 'Cream leather · piano black finish',        price: '₦1,500,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',  label: 'GPS Vehicle Tracker',      desc: 'Military-grade · lifetime subscription',     price: '₦350,000' },
            { id: 'warranty', label: '2-Year Extended Warranty',  desc: 'Engine · drivetrain · electrical',          price: '₦1,800,000' },
            { id: 'ceramic',  label: 'Ceramic Paint Coating',     desc: '10H hardness · 5-year paint protection',    price: '₦1,200,000' },
            { id: 'ppf',      label: 'Full PPF Wrap',             desc: 'Self-healing film · bumper to bumper',      price: '₦1,400,000' },
            { id: 'tint-pro', label: 'Llumar Ceramic Tint',       desc: 'Heat rejection · UV block · factory finish',price: '₦480,000' },
        ]
    },

    STANDARD: {
        steps: ['exterior', 'interior', 'addons'],
        exterior: {
            paint: {
                label: 'Body Colour',
                options: [
                    { id: 'super-white',  label: 'Super White',     hex: '#f0f0f0', type: 'gloss',    price: null },
                    { id: 'black',        label: 'Black',           hex: '#0a0a0a', type: 'gloss',    price: null },
                    { id: 'silver-met',   label: 'Silver Metallic', hex: '#909098', type: 'metallic', price: '₦350,000' },
                    { id: 'red',          label: 'Red',             hex: '#b81414', type: 'gloss',    price: null },
                    { id: 'navy-blue',    label: 'Navy Blue',       hex: '#1a2a50', type: 'gloss',    price: null },
                    { id: 'bronze-met',   label: 'Bronze Metallic', hex: '#8a6030', type: 'metallic', price: '₦350,000' },
                ]
            },
            rims: {
                label: 'Wheel Upgrade',
                options: [
                    { id: 'standard',    label: 'Standard Alloy', color: 0xc0c0c8, roughness: 0.35, metalness: 0.6,  price: null },
                    { id: 'sport-dark',  label: 'Sport Dark',     color: 0x2a2a30, roughness: 0.55, metalness: 0.5,  price: '₦480,000' },
                    { id: 'sport-silver',label: 'Sport Silver',   color: 0xd0d0d8, roughness: 0.2,  metalness: 0.75, price: '₦380,000' },
                ]
            },
            tint: true, calipers: false
        },
        interior: {
            trim: {
                label: 'Upholstery',
                options: [
                    { id: 'fabric',  label: 'Fabric',  desc: 'Standard fabric · durable everyday use', price: null },
                    { id: 'leather', label: 'Leather', desc: 'PU leather · contrast stitching',        price: '₦680,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',    label: 'GPS Vehicle Tracker',   desc: 'Military-grade · lifetime subscription',  price: '₦350,000' },
            { id: 'warranty',   label: '1-Year Extended Warranty', desc: 'Engine & drivetrain coverage',         price: '₦680,000' },
            { id: 'tint',       label: 'Window Tint',           desc: 'Professional ceramic window tinting',    price: '₦280,000' },
            { id: 'seat-covers',label: 'Premium Seat Covers',   desc: 'Custom-fit leather seat covers',         price: '₦180,000' },
            { id: 'dashcam',    label: 'Dashcam Installation',  desc: 'Front & rear · cloud storage capable',   price: '₦150,000' },
        ]
    },

    EV: {
        steps: ['exterior', 'interior', 'addons'],
        exterior: {
            paint: {
                label: 'Body Finish',
                options: [
                    { id: 'midnight-black', label: 'Midnight Black',    hex: '#080808', type: 'gloss',    price: null },
                    { id: 'pearl-white',    label: 'Pearl White',       hex: '#f2f2f0', type: 'gloss',    price: '₦1,200,000' },
                    { id: 'deep-blue',      label: 'Deep Blue Metallic',hex: '#0c1e3c', type: 'metallic', price: '₦1,200,000' },
                    { id: 'quicksilver',    label: 'Quicksilver',       hex: '#909098', type: 'metallic', price: '₦1,200,000' },
                    { id: 'ultra-red',      label: 'Ultra Red',         hex: '#9c1a14', type: 'gloss',    price: '₦1,200,000' },
                ]
            },
            rims: {
                label: 'Wheel Style',
                options: [
                    { id: 'aero-silver',  label: 'Aero Silver',    color: 0xd0d0d8, roughness: 0.2,  metalness: 0.8,  price: null },
                    { id: 'aero-black',   label: 'Aero Black',     color: 0x1a1a1a, roughness: 0.7,  metalness: 0.4,  price: '₦650,000' },
                    { id: 'sport-turbine',label: 'Sport Turbine',  color: 0x3a3a48, roughness: 0.35, metalness: 0.75, price: '₦1,100,000' },
                ]
            },
            tint: true, calipers: true
        },
        interior: {
            trim: {
                label: 'Interior',
                options: [
                    { id: 'black-vegan',  label: 'Black Vegan',  desc: 'Synthetic leather · recycled materials',     price: null },
                    { id: 'cream-vegan',  label: 'Cream Vegan',  desc: 'Light synthetic leather · contrast dash',    price: '₦900,000' },
                    { id: 'carbon-sport', label: 'Carbon Sport', desc: 'Carbon fibre trim · performance accents',    price: '₦1,600,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',       label: 'GPS Vehicle Tracker',         desc: 'Military-grade · lifetime subscription',        price: '₦350,000' },
            { id: 'charging-pack', label: 'Home Charging Pack',          desc: 'Type 2 AC charger · 7kW wall unit included',    price: '₦850,000' },
            { id: 'battery-ext',   label: 'Extended Battery Warranty',   desc: '5-year battery & drivetrain protection',        price: '₦1,200,000' },
            { id: 'ceramic',       label: 'Ceramic Coating',             desc: '10H hardness · protects EV-spec finish',        price: '₦1,200,000' },
            { id: 'tint',          label: 'Llumar Ceramic Tint',         desc: 'Heat rejection · extends range in hot climate', price: '₦480,000' },
        ]
    }
};
window.CUSTOM_SPEC_PROFILES = CUSTOM_SPEC_PROFILES;

// ═══════════════════════════════════════════════════════════════
// MODEL-SPECIFIC CUSTOMIZATION SPECS
// Per-model specs keyed by modelId.
// resolveSpec() checks here first before falling back to tier profiles.
// Each spec can include standard keys (paint, rims, tint, calipers)
// plus any custom keys with type:'options' for vehicle-specific choices.
// ═══════════════════════════════════════════════════════════════
var MODEL_SPECS = {

    "mercedes-g-wagon": {
        exterior: {
            paint: {
                label: "AMG Paint",
                options: [
                    { id: 'obsidian-black',     label: 'Obsidian Black',           hex: '#080808', type: 'gloss',    price: null },
                    { id: 'polar-white',        label: 'Polar White',              hex: '#f5f5f3', type: 'gloss',    price: null },
                    { id: 'selenite-grey',      label: 'Selenite Grey Metallic',   hex: '#686e6e', type: 'metallic', price: null },
                    { id: 'night-black-magno',  label: 'Night Black Magno',        hex: '#0a0a0a', type: 'matte',    price: '₦4,200,000' },
                    { id: 'emerald-green',      label: 'Emerald Green Metallic',   hex: '#1a3a20', type: 'metallic', price: '₦4,200,000' },
                    { id: 'manufaktur-red',     label: 'Manufaktur Patagonia Red', hex: '#6a0a0a', type: 'metallic', price: '₦8,500,000' },
                ]
            },
            rims: {
                label: "AMG Wheels",
                options: [
                    { id: 'amg-22-5spoke',    label: '22" AMG 5-Spoke Silver',     color: 0xb0b0b8, roughness: 0.15, metalness: 0.90, price: null },
                    { id: 'amg-22-crossblack',label: '22" AMG Cross-Spoke Black',  color: 0x1a1a1a, roughness: 0.50, metalness: 0.70, price: '₦1,800,000' },
                    { id: 'amg-22-titanium',  label: '22" AMG Titanium Grey',      color: 0x505060, roughness: 0.30, metalness: 0.82, price: '₦2,400,000' },
                ]
            },
            package: {
                id: 'package', label: "Exterior Package", type: 'options',
                options: [
                    { id: 'amg-line',  label: 'AMG Line',              desc: 'Chrome highlights · standard front spoiler · silver running boards', price: null },
                    { id: 'night',     label: 'Night Package',         desc: 'Gloss black trim · black badges · black exhaust tips',               price: '₦2,800,000' },
                    { id: 'excl-night',label: 'Exclusive Night',       desc: 'Night Pkg + black Panamericana grille · black radiator surround',    price: '₦4,500,000' },
                ]
            },
            tint: true,
            calipers: true
        },
        interior: {
            trim: {
                label: "Nappa Leather",
                options: [
                    { id: 'black-black',  label: 'Black / Black',         desc: 'Black Nappa · carbon fibre trim',             price: null },
                    { id: 'macchiato',    label: 'Macchiato / Black',     desc: 'Cream & black Nappa · piano black finish',    price: '₦3,200,000' },
                    { id: 'saddle-brown', label: 'Saddle Brown / Black',  desc: 'Cognac Nappa · brushed aluminium trim',       price: '₦3,200,000' },
                ]
            },
            headliner: {
                id: 'headliner', label: "Headliner", type: 'options',
                options: [
                    { id: 'standard',   label: 'Standard Anthracite', desc: 'Premium fabric headliner',                        price: null },
                    { id: 'alcantara',  label: 'Alcantara',           desc: 'Full alcantara ceiling · satin silver accents',   price: '₦2,200,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',   label: 'GPS Vehicle Tracker',       desc: 'Military-grade · lifetime subscription',                  price: '₦350,000' },
            { id: 'warranty',  label: '2-Year Extended Warranty',  desc: 'Engine · drivetrain · electrical',                        price: '₦1,800,000' },
            { id: 'ceramic',   label: 'Ceramic Paint Coating',     desc: '10H hardness · 5-year paint protection',                  price: '₦1,200,000' },
            { id: 'ppf',       label: 'Full PPF Wrap',             desc: 'Self-healing film · bumper to bumper',                    price: '₦1,400,000' },
            { id: 'tint-pro',  label: 'Llumar Ceramic Tint',       desc: 'Heat rejection · UV block · factory finish',              price: '₦480,000' },
            { id: 'brabus',    label: 'BRABUS Performance Pack',   desc: '700hp upgrade · BRABUS exhaust · carbon body kit',        price: '₦28,000,000' },
        ]
    },

    "range-rover": {
        exterior: {
            paint: {
                label: "Body Colour",
                options: [
                    { id: 'santorini-black',   label: 'Santorini Black',        hex: '#0a0a0a', type: 'gloss',    price: null },
                    { id: 'fuji-white',        label: 'Fuji White',             hex: '#f2f2ef', type: 'gloss',    price: null },
                    { id: 'charente-grey',     label: 'Charente Grey',          hex: '#7a8080', type: 'metallic', price: null },
                    { id: 'carpathian-grey',   label: 'Carpathian Grey',        hex: '#404450', type: 'metallic', price: '₦2,200,000' },
                    { id: 'aintree-green',     label: 'Aintree Green',          hex: '#1e3020', type: 'metallic', price: '₦2,200,000' },
                    { id: 'borealis-satin',    label: 'Borealis Black SVO',     hex: '#050508', type: 'satin',    price: '₦6,500,000' },
                ]
            },
            rims: {
                label: "Wheel Design",
                options: [
                    { id: 'rr-23-5129-silver', label: '23" Style 5129 Silver',   color: 0xc8c8d0, roughness: 0.12, metalness: 0.90, price: null },
                    { id: 'rr-23-5080-dark',   label: '23" Style 5080 Dark',     color: 0x282830, roughness: 0.40, metalness: 0.75, price: '₦1,600,000' },
                    { id: 'rr-23-svo-gloss',   label: '23" SVO Gloss Dark',      color: 0x1a1a22, roughness: 0.20, metalness: 0.85, price: '₦3,800,000' },
                ]
            },
            roof: {
                id: 'roof', label: "Roof Option", type: 'options',
                options: [
                    { id: 'standard',   label: 'Standard Glass Roof',    desc: 'UV-filtering tinted glass · power sunblind',             price: null },
                    { id: 'panoramic',  label: 'Panoramic Sunroof',      desc: 'Full-length glass · dual-zone power blind',              price: '₦2,100,000' },
                    { id: 'svo-black',  label: 'SVO Contrast Roof',      desc: 'Gloss black roof · contrasting Autobiography branding',  price: '₦4,400,000' },
                ]
            },
            tint: true,
            calipers: true
        },
        interior: {
            trim: {
                label: "Leather & Veneer",
                options: [
                    { id: 'ebony',       label: 'Ebony',          desc: 'Semi-aniline leather · Dark Elm veneer',               price: null },
                    { id: 'ivory',       label: 'Ivory',          desc: 'Semi-aniline leather · Light Ash veneer',              price: '₦3,500,000' },
                    { id: 'sorrento',    label: 'Sorrento Red',   desc: 'Semi-aniline leather · Darkwood veneer',               price: '₦3,500,000' },
                    { id: 'svo-bespoke', label: 'SVO Bespoke',    desc: 'Hand-stitched full leather · 14 colour choices',       price: '₦9,800,000' },
                ]
            },
            seating: {
                id: 'seating', label: "Rear Seating", type: 'options',
                options: [
                    { id: 'five-seat', label: '5-Seat',         desc: 'Full-size rear bench with centre armrest',              price: null },
                    { id: 'four-seat', label: '4-Seat Executive',desc: 'Individual rear thrones · extended legroom · footrests', price: '₦4,800,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',  label: 'GPS Vehicle Tracker',       desc: 'Military-grade · lifetime subscription',                  price: '₦350,000' },
            { id: 'warranty', label: '3-Year Extended Warranty',  desc: 'Bumper-to-bumper · drivetrain · all-terrain',             price: '₦2,800,000' },
            { id: 'ceramic',  label: 'Ceramic Paint Coating',     desc: '10H hardness · 5-year paint protection',                  price: '₦1,200,000' },
            { id: 'ppf',      label: 'Full PPF Wrap',             desc: 'Self-healing film · front + rear coverage',               price: '₦1,800,000' },
            { id: 'tint',     label: 'Llumar Ceramic Tint',       desc: 'Heat rejection · UV block · factory finish',              price: '₦480,000' },
            { id: 'offroad',  label: 'Advanced Off-Road Pack',    desc: 'All-terrain tyres · skid plates · wade sensing upgrade',  price: '₦3,200,000' },
        ]
    },

    "rolls-royce-cullinan": {
        exterior: {
            paint: {
                label: "Bespoke Paint",
                options: [
                    { id: 'diamond-black',   label: 'Diamond Black',         hex: '#050505', type: 'gloss',    price: null },
                    { id: 'english-white',   label: 'English White',         hex: '#f5f3ef', type: 'gloss',    price: null },
                    { id: 'silver-sand',     label: 'Silver Sand',           hex: '#9898a8', type: 'metallic', price: null },
                    { id: 'andalucia',       label: 'Andalucia Orange',      hex: '#8c3a14', type: 'metallic', price: '₦12,000,000' },
                    { id: 'salamanca-blue',  label: 'Salamanca Blue',        hex: '#0c1e50', type: 'metallic', price: '₦12,000,000' },
                    { id: 'black-badge-matte',label:'Black Badge Matte',     hex: '#030303', type: 'matte',    price: '₦18,500,000' },
                ]
            },
            rims: {
                label: "Bespoke Wheels",
                options: [
                    { id: 'cullinan-23-polished', label: '23" Polished Silver', color: 0xe0e0e8, roughness: 0.06, metalness: 0.96, price: null },
                    { id: 'cullinan-23-dark',     label: '23" Dark Satin',      color: 0x2a2a38, roughness: 0.38, metalness: 0.78, price: '₦6,500,000' },
                    { id: 'cullinan-23-gold',     label: '23" Bespoke Gold',    color: 0xc8a820, roughness: 0.22, metalness: 0.86, price: '₦14,000,000' },
                ]
            },
            edition: {
                id: 'edition', label: "Edition", type: 'options',
                options: [
                    { id: 'series-ii',    label: 'Series II',    desc: 'Illuminated Pantheon grille · chrome exterior trim',            price: null },
                    { id: 'black-badge',  label: 'Black Badge',  desc: 'All-dark exterior · titanium trim · 600hp · darkened Spirit',   price: '₦22,000,000' },
                ]
            },
            tint: true,
            calipers: true
        },
        interior: {
            trim: {
                label: "Bespoke Leather",
                options: [
                    { id: 'serenity',  label: 'Serenity',         desc: 'White leather · Polished Oak · Viewing Suite rear',                     price: null },
                    { id: 'provenance',label: 'Provenance',       desc: 'Navy leather · Tamo Ash veneer · rear drinks cabinet',                  price: '₦8,500,000' },
                    { id: 'gallery',   label: 'Gallery Bespoke',  desc: 'Full-custom hide · any veneer · art installation headliner option',     price: '₦18,000,000' },
                ]
            },
            headliner: {
                id: 'headliner', label: "Headliner", type: 'options',
                options: [
                    { id: 'leather',   label: 'Micro-Piped Leather', desc: 'Full leather headliner · contrast piping',                price: null },
                    { id: 'starlight', label: 'Starlight Headliner', desc: '1,344 fibre optic lights · shooting star animation',      price: '₦12,500,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',    label: 'GPS Vehicle Tracker',           desc: 'Military-grade · lifetime subscription',                          price: '₦350,000' },
            { id: 'warranty',   label: '3-Year Goodwood Warranty',      desc: 'Factory extension · worldwide roadside assistance',               price: '₦4,200,000' },
            { id: 'ppf',        label: 'Full PPF Wrap',                 desc: 'Self-healing film · bespoke paint preservation',                  price: '₦2,200,000' },
            { id: 'ceramic',    label: 'Ceramic Paint Coating',         desc: '10H hardness · preserves bespoke finish',                         price: '₦1,800,000' },
            { id: 'privacy-glass', label: 'Privacy Glass Upgrade',      desc: 'Llumar ceramic · near-opaque rear glass',                         price: '₦650,000' },
            { id: 'bespoke',    label: 'Rolls-Royce Bespoke Commission',desc: 'Dedicated Goodwood designer · fully individualised build',         price: '₦85,000,000' },
        ]
    },

    "tesla-cybertruck": {
        exterior: {
            paint: {
                label: "Wrap / Vinyl",
                options: [
                    { id: 'bare-steel',    label: 'Bare Stainless',      hex: '#c0c0c8', type: 'metallic', price: null },
                    { id: 'midnight-wrap', label: 'Midnight Black Wrap', hex: '#080808', type: 'matte',    price: '₦1,800,000' },
                    { id: 'satin-white',   label: 'Satin White Wrap',    hex: '#f0f0ee', type: 'satin',    price: '₦1,800,000' },
                    { id: 'army-green',    label: 'Army Green Wrap',     hex: '#2a3020', type: 'matte',    price: '₦1,800,000' },
                    { id: 'copper-patina', label: 'Copper Patina Wrap',  hex: '#7a4a28', type: 'satin',    price: '₦2,400,000' },
                ]
            },
            rims: {
                label: "Wheel Style",
                options: [
                    { id: 'cybercharge-silver', label: '20" CyberCharge Silver',  color: 0xd0d0d8, roughness: 0.20, metalness: 0.80, price: null },
                    { id: 'cybercharge-dark',   label: '20" CyberCharge Dark',    color: 0x1a1a22, roughness: 0.65, metalness: 0.50, price: '₦850,000' },
                ]
            },
            bedcover: {
                id: 'bedcover', label: "Truck Bed", type: 'options',
                options: [
                    { id: 'open',    label: 'Open Bed',              desc: 'Standard 6.5ft truck bed · full utility access',            price: null },
                    { id: 'tonneau', label: 'Motorized Tonneau',     desc: 'Electric retractable cover · weatherproof · flush close',   price: '₦2,200,000' },
                ]
            },
            tint: true,
            calipers: false
        },
        interior: {
            trim: {
                label: "Interior",
                options: [
                    { id: 'black',  label: 'Black CyberTech',  desc: 'Cyber-tech synthetic · 17" landscape display · black headliner',   price: null },
                    { id: 'white',  label: 'White CyberTech',  desc: 'Light synthetic · wood-grain dash accents · panoramic roof',        price: '₦1,200,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',    label: 'GPS Vehicle Tracker',           desc: 'Military-grade · lifetime subscription',                          price: '₦350,000' },
            { id: 'range-ext',  label: 'Range Extender',                desc: '+120mi additional range · removable truck bed unit',              price: '₦4,500,000' },
            { id: 'batt-warr',  label: '5-Year Battery Warranty',       desc: 'Battery & drivetrain full protection',                            price: '₦1,400,000' },
            { id: 'fsd',        label: 'Full Self-Driving Activation',  desc: 'FSD capability unlock · lifetime software updates',               price: '₦5,200,000' },
            { id: 'armored',    label: 'Level III Armor Package',       desc: 'Ballistic door panels · bulletproof glass · run-flat tyres',       price: '₦42,000,000' },
            { id: 'ceramic',    label: 'Ceramic Coating',               desc: 'Protects stainless steel & vinyl wrap finish',                     price: '₦1,200,000' },
        ]
    },

    "mercedes-s-class": {
        exterior: {
            paint: {
                label: "Designo Paint",
                options: [
                    { id: 'obsidian-black',  label: 'Obsidian Black',          hex: '#080808', type: 'gloss',    price: null },
                    { id: 'polar-white',     label: 'Polar White',             hex: '#f5f5f3', type: 'gloss',    price: null },
                    { id: 'selenite-grey',   label: 'Selenite Grey Metallic',  hex: '#686e6e', type: 'metallic', price: null },
                    { id: 'brilliant-blue',  label: 'Brilliant Blue Metallic', hex: '#1a2a6a', type: 'metallic', price: '₦4,200,000' },
                    { id: 'designo-cashmere',label: 'Designo Cashmere White',  hex: '#e8e0d0', type: 'metallic', price: '₦4,200,000' },
                    { id: 'manufaktur-star', label: 'Manufaktur Starling Blue',hex: '#0c1428', type: 'metallic', price: '₦10,500,000' },
                ]
            },
            rims: {
                label: "AMG Wheels",
                options: [
                    { id: 's-20-multispoke',  label: '20" AMG Multi-Spoke',    color: 0xd0d0d8, roughness: 0.12, metalness: 0.90, price: null },
                    { id: 's-20-crossblack',  label: '20" AMG Cross Black',    color: 0x1a1a1a, roughness: 0.45, metalness: 0.75, price: '₦2,200,000' },
                    { id: 's-20-forged-gold', label: '20" AMG Forged Gold',    color: 0xc8a820, roughness: 0.25, metalness: 0.85, price: '₦5,500,000' },
                ]
            },
            package: {
                id: 'package', label: "Exterior Package", type: 'options',
                options: [
                    { id: 'standard',  label: 'AMG Line',          desc: 'AMG body styling · chrome highlights · standard grille',          price: null },
                    { id: 'night',     label: 'Night Package',      desc: 'Gloss black grille · black window trim · dark chrome details',    price: '₦3,800,000' },
                    { id: 'exclusive', label: 'Exclusive Designo',  desc: 'Full Designo trim · illuminated door sills · designo grille',    price: '₦7,500,000' },
                ]
            },
            tint: true,
            calipers: true
        },
        interior: {
            trim: {
                label: "Leather & Wood",
                options: [
                    { id: 'black-macassar',  label: 'Black / Macassar',      desc: 'Black Nappa · Macassar open-pore wood',        price: null },
                    { id: 'macchiato-walnut',label: 'Macchiato / Walnut',    desc: 'Cream Nappa · Brown Walnut veneer',            price: '₦5,200,000' },
                    { id: 'sienna-brown',    label: 'Sienna Brown Exclusive',desc: 'Two-tone brown Nappa · piano black',           price: '₦5,200,000' },
                    { id: 'manufaktur-bespoke',label:'Manufaktur Bespoke',   desc: 'Custom leather palette · crystal trim',        price: '₦14,000,000' },
                ]
            },
            headliner: {
                id: 'headliner', label: "Headliner", type: 'options',
                options: [
                    { id: 'standard', label: 'Black Headliner',      desc: 'Standard premium fabric', price: null },
                    { id: 'starlight',label: 'Swarovski Starlight',  desc: ''+'400 Swarovski crystals · ambient sky effect', price: '₦8,500,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',     label: 'GPS Vehicle Tracker',         desc: 'Military-grade · lifetime subscription',                 price: '₦350,000' },
            { id: 'warranty',    label: '3-Year Extended Warranty',    desc: 'Bumper-to-bumper · drivetrain · electrical',             price: '₦2,800,000' },
            { id: 'ceramic',     label: 'Ceramic Paint Coating',       desc: '10H hardness · 5-year paint protection',                 price: '₦1,200,000' },
            { id: 'ppf',         label: 'Full PPF Wrap',               desc: 'Self-healing film · front + rear coverage',              price: '₦1,800,000' },
            { id: 'tint-pro',    label: 'Llumar Ceramic Tint',         desc: 'Heat rejection · UV block · factory finish',             price: '₦480,000' },
            { id: 'door-sills',  label: 'Illuminated Door Sills',      desc: 'Custom-engraved with name or emblem · ambient lighting', price: '₦750,000' },
        ]
    },

    "porsche-cayenne": {
        exterior: {
            paint: {
                label: "Paint",
                options: [
                    { id: 'jet-black',      label: 'Jet Black',           hex: '#080808', type: 'gloss',    price: null },
                    { id: 'carrara-white',  label: 'Carrara White',       hex: '#f2f0ec', type: 'gloss',    price: null },
                    { id: 'arctic-grey',    label: 'Arctic Grey',         hex: '#808890', type: 'metallic', price: null },
                    { id: 'gentian-blue',   label: 'Gentian Blue',        hex: '#1a2e6a', type: 'metallic', price: '₦1,800,000' },
                    { id: 'mamba-green',    label: 'Mamba Green',         hex: '#1e3a14', type: 'metallic', price: '₦1,800,000' },
                    { id: 'python-green',   label: 'Chalk',               hex: '#d0cbb8', type: 'gloss',    price: '₦2,400,000' },
                ]
            },
            rims: {
                label: "Wheels",
                options: [
                    { id: 'turbo-22-silver', label: '22" Turbo Silver',       color: 0xc8c8d0, roughness: 0.14, metalness: 0.88, price: null },
                    { id: 'turbo-22-black',  label: '22" Turbo Black',        color: 0x1a1a1a, roughness: 0.45, metalness: 0.72, price: '₦1,400,000' },
                    { id: 'gt-21-satin',     label: '21" GT Satin Platinum',  color: 0x909098, roughness: 0.32, metalness: 0.80, price: '₦2,800,000' },
                ]
            },
            package: {
                id: 'package', label: "Sport Package", type: 'options',
                options: [
                    { id: 'sport-design',  label: 'Sport Design',   desc: 'Sport front bumper · side skirts · sport tailpipes',            price: null },
                    { id: 'sport-chrono',  label: 'Sport Chrono',   desc: 'Sport Chrono Package · PSM Sport · Launch Control',            price: '₦2,200,000' },
                    { id: 'turbo-gt-kit',  label: 'Turbo GT Kit',   desc: 'Carbon front splitter · carbon rear diffuser · lowered 17mm',  price: '₦6,800,000' },
                ]
            },
            tint: true,
            calipers: true
        },
        interior: {
            trim: {
                label: "Leather",
                options: [
                    { id: 'black-alcantara',label: 'Black / Alcantara',  desc: 'Black leather · Alcantara Race-Tex · carbon dash',     price: null },
                    { id: 'cognac',         label: 'Cognac',             desc: 'Cognac two-tone leather · brushed aluminium trim',     price: '₦2,800,000' },
                    { id: 'chalk-premium',  label: 'Chalk Full Leather', desc: 'Light chalk leather · contrast piping · light wood',   price: '₦2,800,000' },
                ]
            }
        },
        addons: [
            { id: 'tracker',  label: 'GPS Vehicle Tracker',       desc: 'Military-grade · lifetime subscription',     price: '₦350,000' },
            { id: 'warranty', label: '2-Year Extended Warranty',  desc: 'Drivetrain · PDK · electrical systems',      price: '₦2,200,000' },
            { id: 'ceramic',  label: 'Ceramic Paint Coating',     desc: '10H hardness · 5-year paint protection',     price: '₦1,200,000' },
            { id: 'ppf',      label: 'Full PPF Wrap',             desc: 'Self-healing film · bumper to bumper',       price: '₦1,400,000' },
            { id: 'pdk-sport',label: 'PDK Sport Exhaust Upgrade', desc: 'Sport Exhaust System · flap control · louder cold start', price: '₦3,400,000' },
        ]
    }

};
window.MODEL_SPECS = MODEL_SPECS;

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
