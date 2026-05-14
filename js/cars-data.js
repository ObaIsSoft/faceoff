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
    },
    "mercedes-c63": {
        name: "Mercedes-AMG C63", brand: "Mercedes-Benz",
        logo: "assets/brands/mercedes.svg", type: "SALOON", category: "SPORT",
        heroImg: "assets/editorial/webp/roman-uRbbJM3WL0g-unsplash.webp", specProfile: "LUXURY"
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
            funFact: "The G-Wagon was originally developed as a military vehicle in the 1970s.",
            editorial: [
                { t: 'p', v: 'The Mercedes-AMG G 63 is an exercise in deliberate contradiction — a machine designed for the battlefield that somehow found itself as the most coveted object in Beverly Hills driveways and Lagos V.I. cul-de-sacs. The box-on-wheels silhouette hasn\'t changed in 45 years. That\'s the point.' },
                { t: 'p', v: 'Outside, the G-Wagon makes no apology. Three round doorsteps up the flanks, a spare wheel bolted to the tailgate, and side exhausts that exit the engine bay without ceremony. The squared-off body channels rain like a guttered roof. Yet somehow, in 2024, it looks entirely intentional — and entirely desirable.' },
                { t: 'q', v: 'The G 63 version carries AMG\'s 4.0-litre V8 biturbo — the same unit that powers the GT sports car. At idle it settles into a deep, burbling rumble. Floor it and the 585hp tears the rear end loose with startling ferocity, accompanied by a snarling exhaust bark that ricochets between buildings.' },
                { t: 'p', v: 'The interior tells a different story: Nappa leather, a fully digital AMG Performance dash cluster, and a panoramic sunroof that seems to laugh at the vehicle\'s military origins. Three locking differentials hide beneath the modern cabin. Off-road, it remains peerless among its Mayfair peers.' },
                { t: 'p', v: 'The 2024 G 63 sits at the top of the G-Wagon range, above the G 500 and standard G 450. A Manufaktur programme allows near-unlimited exterior and interior personalisation. The Night Package deletes all exterior chrome in favour of a blacked-out treatment that transforms the G\'s character entirely.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3982cc Biturbo' },
                { label: 'Max power',    value: '585hp @ 6500rpm' },
                { label: 'Max torque',   value: '850Nm @ 2500rpm' },
                { label: 'Transmission', value: '9-speed auto · AWD' },
                { label: 'Weight',       value: '2418kg' },
                { label: '0–100km/h',   value: '4.5 sec' },
                { label: 'Top speed',    value: '220km/h (limited)' },
                { label: 'Fuel economy', value: '14.2L/100km' }
            ]
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
            funFact: "The G-Wagon was originally developed as a military vehicle in the 1970s.",
            editorial: [
                { t: 'p', v: 'The 2022 G 63 AMG arrived at a curious moment — deep into a decade where supercars had gone electric and SUVs had gone sleek. Mercedes responded by making the G-Wagon even more G-Wagon. Same box, same three door steps, same side-exit exhausts. More power.' },
                { t: 'p', v: 'This generation carried forward the W464\'s completely modernised interior — digital dials, MBUX infotainment, Burmester surround sound — but the 577hp AMG 4.0 V8 Biturbo remained unmistakably old-school in character: loud, torque-rich, and utterly addictive to deploy.' },
                { t: 'q', v: 'Dial in Sport+ mode and the exhaust opens up to something approaching theatrical. It isn\'t the polished roar of a sports car — it\'s the deep, raw blare of a truck engine that\'s been pushed past its comfort zone. You will never be anonymous in this thing.' },
                { t: 'p', v: 'The 2022 model benefits from minor suspension recalibration over the 2021 model year, along with expanded colour palette options under the Manufaktur programme. Highlights include Manufaktur Papyrus White and a Patagonia Red exterior — neither remotely subtle.' },
                { t: 'p', v: 'Three locking differentials remain standard, giving it off-road credentials that most of its buyers will never need — but that no other luxury SUV at this price point can claim. That\'s the G-Wagon in a nutshell: capable of everything, deployed for nothing except presence.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3982cc Biturbo' },
                { label: 'Max power',    value: '577hp @ 6500rpm' },
                { label: 'Max torque',   value: '850Nm @ 2500rpm' },
                { label: 'Transmission', value: '9-speed auto · AWD' },
                { label: 'Weight',       value: '2418kg' },
                { label: '0–100km/h',   value: '4.6 sec' },
                { label: 'Top speed',    value: '220km/h (limited)' },
                { label: 'Fuel economy', value: '14.8L/100km' }
            ]
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
            funFact: "The LX 600 features an active height control system with 4 settings.",
            editorial: [
                { t: 'p', v: 'The Lexus LX 600 VIP Grade is Japan\'s most emphatic statement to the segment: luxury is not only European. Built on the TNGA-F platform shared with the Land Cruiser 300, the LX 600 brings bullet-proof mechanicals beneath the most lavishly appointed cabin Lexus has ever produced.' },
                { t: 'p', v: 'The exterior wears the new LX family face with confidence — the spindle grille enlarged to dominate, the LED headlights set deep into heavily sculpted flanks. It\'s imposing in a way that Land Cruisers never were, with a height and presence that announces its occupants before the door opens.' },
                { t: 'q', v: 'Step inside the VIP configuration and you enter a different world. The rear seats electrically recline to nearly flat, a footrest deploys from the front centre console, and the Mark Levinson 25-speaker system fills the cabin with sound that makes it feel as intimate as a concert hall.' },
                { t: 'p', v: 'The 3.4-litre twin-turbo V6 is all-new for this generation — replacing the previous naturally-aspirated V8. It loses a cylinder but gains responsiveness, delivering 409hp and 650Nm through a 10-speed automatic. The transition in character from old to new went largely unnoticed, which tells you everything.' },
                { t: 'p', v: 'The LX 600 comes in two rear configurations: a four-seat VIP layout with premium individual rear thrones, or a seven-seat arrangement. The VIP grade sits above Urban Sport and F Sport in the range — it is the configuration that makes the strongest case for the LX as a chauffeur\'s vehicle.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V6, 3445cc Twin-Turbo' },
                { label: 'Max power',    value: '409hp @ 5200rpm' },
                { label: 'Max torque',   value: '650Nm @ 2000rpm' },
                { label: 'Transmission', value: '10-speed auto · AWD' },
                { label: 'Weight',       value: '2650kg' },
                { label: '0–100km/h',   value: '6.9 sec' },
                { label: 'Top speed',    value: '210km/h' },
                { label: 'Fuel economy', value: '13.4L/100km' }
            ]
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
            funFact: "The new Range Rover can wade through water up to 900mm deep.",
            editorial: [
                { t: 'p', v: 'There is a particular kind of luxury that British engineers have always done better than anyone else — not the showy flash of Italian drama or the earnest precision of the Germans, but a comfort so complete, so enveloping, that you become genuinely reluctant to arrive at your destination. The fifth-generation Range Rover Autobiography is its finest expression yet.' },
                { t: 'p', v: 'The exterior is a masterclass in restraint. Body-coloured flush door handles disappear into a surface so clean it reads as one unbroken gesture from bumper to bumper. The floating roof in a contrasting colour breaks the slab side, while the slim LED headlights give the face a feline intelligence entirely new to the Range Rover lineage.' },
                { t: 'q', v: 'Inside, the Autobiography delivers what the Range Rover has always promised but rarely executed with such completeness. Hot stone massage seats in the rear, a digital rear sunblind that transitions from transparent to opaque at the touch of a screen, and a Meridian Signature system that fills the cabin as if the musicians followed you in.' },
                { t: 'p', v: 'The engine is a 4.4-litre twin-turbo V8 sourced from BMW — a partnership that initially raised eyebrows and has since produced some of the best engines in Land Rover\'s recent history. With 523hp and 750Nm, the Autobiography reaches 100km/h in 4.6 seconds. You will rarely need it to, but knowing it\'s there changes how you feel behind the wheel.' },
                { t: 'p', v: 'The new Range Rover is available in short and long wheelbase forms, with the Autobiography one step below the SV. PHEV and six-cylinder variants are also available — though it\'s hard to argue against the character of the V8 at this level of the range.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 4395cc Twin-Turbo' },
                { label: 'Max power',    value: '523hp @ 6000rpm' },
                { label: 'Max torque',   value: '750Nm @ 1800rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2395kg' },
                { label: '0–100km/h',   value: '4.6 sec' },
                { label: 'Top speed',    value: '250km/h' },
                { label: 'Fuel economy', value: '13.3L/100km' }
            ]
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
            funFact: "The new Range Rover can wade through water up to 900mm deep.",
            editorial: [
                { t: 'p', v: 'When the fifth-generation Range Rover launched in 2021, it landed as one of the most anticipated SUV debuts in recent memory. This 2022 Autobiography — one of the earliest deliveries of the new generation — represents Land Rover\'s complete reimagining of what the model could be: a luxury object as much as a vehicle.' },
                { t: 'p', v: 'The proportions are more resolved than any predecessor. The new body removes the busy surface creases of the fourth-gen car and replaces them with flat, taut planes. Combined with flush handles and slim lighting signatures, it looks genuinely modern without sacrificing the classic silhouette that has defined the marque for fifty years.' },
                { t: 'q', v: 'The 2022 Autobiography uses Windsor leather across the cabin, with individually heated and ventilated front and rear seats. The Meridian Surround Sound system with 29 speakers creates a listening environment that competes with the finest home audio — remarkable for a car that also happens to cross rivers at 900mm depth.' },
                { t: 'p', v: 'Power comes from the 4.4-litre BMW V8 in 518hp form — virtually indistinguishable from the 2024 car in real-world use. The eight-speed automatic shuffles ratios with near-telepathic accuracy, and the air suspension irons out imperfections in roads that weren\'t properly paved to begin with.' },
                { t: 'p', v: 'As an early production unit of the fifth generation, this 2022 Autobiography offers all the development maturity of the fully-resolved platform. Land Rover Terrain Response 2 with auto mode means the off-road capability is always there — even if, for most owners, the toughest terrain encountered will be a Lagos parking kerb.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 4395cc Twin-Turbo' },
                { label: 'Max power',    value: '518hp @ 6000rpm' },
                { label: 'Max torque',   value: '740Nm @ 1800rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2395kg' },
                { label: '0–100km/h',   value: '4.7 sec' },
                { label: 'Top speed',    value: '240km/h' },
                { label: 'Fuel economy', value: '13.5L/100km' }
            ]
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
            funFact: "The Escalade-V is the most powerful full-size SUV in the industry.",
            editorial: [
                { t: 'p', v: 'Cadillac had a point to prove. For years, the Escalade had been the SUV of choice for hip-hop royalty and heads of state alike — big, brash, and unapologetically American. But it was never fast. The Escalade-V changes all of that with a supercharged 6.2-litre V8 dropped, against all engineering logic, into a full-size seven-seat SUV.' },
                { t: 'p', v: 'The exterior of the 2024 Escalade-V is defined by its vertical LED light blades — stacked columns of light that give the face a futuristic authority unlike anything in the segment. Dark Chrome accents replace conventional brightwork on the V-Series, and quad exhaust outlets exit at the rear with a deliberate symmetry that signals exactly what hides beneath.' },
                { t: 'q', v: 'Engage Launch Control and the 682hp supercharged V8 builds boost, the AKG 36-speaker audio briefly silenced by the mechanical roar as three tonnes of American aluminium departs the line in 4.3 seconds to 60mph. Nothing prepares you for it. Especially not the second time.' },
                { t: 'p', v: 'Inside, the Escalade-V wraps its performance credentials in a 35-inch curved OLED display that arcs from the driver\'s instruments through the central infotainment. Full semi-aniline leather covers every surface, and the rear seats offer massage functions and heated and ventilated options. It is both the fastest and most comfortable Escalade ever made.' },
                { t: 'p', v: 'Cadillac offers the Escalade-V in standard and ESV extended wheelbase configurations. The Sport trim deletes all chrome in favour of dark finishes. For now, the current V-Series represents the pinnacle of American performance SUV engineering — the first car to make a three-tonne truck genuinely frightening in a straight line.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 6162cc Supercharged' },
                { label: 'Max power',    value: '682hp @ 6000rpm' },
                { label: 'Max torque',   value: '885Nm @ 4000rpm' },
                { label: 'Transmission', value: '10-speed auto · AWD' },
                { label: 'Weight',       value: '2857kg' },
                { label: '0–100km/h',   value: '4.4 sec' },
                { label: 'Top speed',    value: '200km/h (limited)' },
                { label: 'Fuel economy', value: '18.9L/100km' }
            ]
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
            funFact: "The Escalade IQ features a massive 55-inch total diagonal pillar-to-pillar display.",
            editorial: [
                { t: 'p', v: 'The Escalade IQ is Cadillac\'s electric coming-out party — a statement that the brand\'s pivot to an all-electric future will not arrive timidly. It is also perhaps the most screen you will ever encounter in a single vehicle: 55 inches of total diagonal display spanning pillar to pillar, forming a continuous curved panorama of glass across the dashboard.' },
                { t: 'p', v: 'Externally, the IQ retains the vertical blade LED light signature of the Escalade family, but everything else signals a new direction. The grille is blanked — there is nothing to cool — and the proportions are shifted: the bonnet lower, the stance wider, the wheels pushed to the corners in the manner of a purpose-built EV platform.' },
                { t: 'q', v: 'The Ultium battery system delivers 750hp and 1,064Nm of torque instantaneously. There is no drama, no build — just immediate, vast motion. The silence makes it more unsettling, not less. You get used to it slowly, and then you start to prefer it.' },
                { t: 'p', v: 'The interior is where the IQ most distinguishes itself from every Escalade before it. There is no transmission tunnel — the flat floor opens the cabin to feel more like a lounge than a vehicle. A rear-seat infotainment screen brings aviation-class entertainment to third-row passengers. The AKG 40-speaker system is the most sophisticated audio ever fitted to a production Cadillac.' },
                { t: 'p', v: 'The IQ is offered in rear-wheel and all-wheel drive configurations. Range is rated at over 700km on the EPA cycle. DC fast charging at 350kW adds 130km in under 10 minutes. Ultra Cruise — Cadillac\'s hands-free highway driving system — covers more road types than any comparable system currently available.' }
            ],
            specs: [
                { label: 'Powertrain',   value: 'Dual Motor AWD · Ultium' },
                { label: 'Max power',    value: '750hp' },
                { label: 'Max torque',   value: '1064Nm (instant)' },
                { label: 'Battery',      value: '200kWh Ultium Pack' },
                { label: 'Weight',       value: '3856kg (est.)' },
                { label: '0–100km/h',   value: '5.0 sec' },
                { label: 'Range',        value: '724km (EPA)' },
                { label: 'Fast charge',  value: '350kW DC · 80% in 41min' }
            ]
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
            funFact: "BYD stands for 'Build Your Dreams'.",
            editorial: [
                { t: 'p', v: 'The BYD Atto 3 arrived as something of a test — a Chinese EV asking to be taken seriously in a segment crowded with established names. It passed. Not spectacularly, not with driver\'s-car drama, but with a completeness and value proposition that made rivals appear overpriced.' },
                { t: 'p', v: 'The exterior is clean and contemporary without being anonymous. A high-mounted front light bar splits the face horizontally, with a distinctive pressed crease along the door. Crystal LED headlights add a premium quality of light that surprises at night. It\'s a resolved design that doesn\'t apologise for being different.' },
                { t: 'q', v: 'BYD\'s Blade Battery technology is the centrepiece of the engineering story. Flat LFP cells arranged in a blade configuration allow the pack to contribute to structural rigidity — not just carry charge. In real-world use, the 60.48kWh pack delivers a range that makes city ownership genuinely anxiety-free.' },
                { t: 'p', v: 'Inside, the vegan interior and rotating touchscreen are the headline features — but it\'s the standard specification that impresses most. Heated front seats, wireless charging, a panoramic sunroof, and adaptive cruise control are all included at base price. The Dirac-certified audio processes sound in a way that most aftermarket systems cannot match.' },
                { t: 'p', v: 'The Extended Range variant represents the top of the Atto 3 range. DiPilot — BYD\'s driver assistance suite — includes lane-keeping, automatic emergency braking, and adaptive cruise control as standard. It is the most affordable EV in the Faceoff collection and arguably the sharpest value proposition in the fleet.' }
            ],
            specs: [
                { label: 'Motor',        value: 'Permanent Magnet Sync' },
                { label: 'Max power',    value: '201hp' },
                { label: 'Max torque',   value: '310Nm' },
                { label: 'Battery',      value: '60.48kWh Blade LFP' },
                { label: 'Weight',       value: '1750kg' },
                { label: '0–100km/h',   value: '7.3 sec' },
                { label: 'Range',        value: '420km (WLTP)' },
                { label: 'Fast charge',  value: '80kW DC · 80% in 45min' }
            ]
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
            funFact: "The 2025 Camry is the first to be offered exclusively as a hybrid in the US.",
            editorial: [
                { t: 'p', v: 'The Toyota Camry has been called boring for thirty years. It sold over ten million units in the United States alone. In 2025, Toyota made its boldest move yet: the Camry is hybrid-only in most markets, and the XLE Hybrid grade makes the case that boring and brilliant are not the same thing.' },
                { t: 'p', v: 'The current generation Camry exterior trades the previous conservative profile for something more assertive — a swept fastback roofline, chiselled lower body, and an LED lighting arrangement that gives the face a legitimately sporty expression. It looks nothing like the appliance it once was.' },
                { t: 'q', v: 'The 2.5-litre four-cylinder hybrid system produces 225hp from its combined output — but the character comes from the electric motor\'s instant torque delivery, which gives the Camry a responsiveness at urban speeds that its fuel consumption figures don\'t predict. In stop-start city driving it barely touches the engine.' },
                { t: 'p', v: 'The XLE interior is where Toyota has invested most deliberately. Leather-trimmed seating, a JBL premium audio system, wireless phone charging, and a nine-inch touchscreen come standard. The front seats offer power adjustment with memory. The cabin is quiet at motorway speeds in a way that surprises those expecting economy-car refinement.' },
                { t: 'p', v: 'The 2025 Camry range runs from the base LE through the XSE Sport and XLE Luxury grades. All are hybrid, all share the same 2.5-litre four-cylinder system, and all come with Toyota Safety Sense 3.0. The XLE is the choice for those who want comfort over sport — which in a Camry, is the correct choice.' }
            ],
            specs: [
                { label: 'Engine',       value: '4-cyl, 2487cc + Electric' },
                { label: 'System power', value: '225hp combined' },
                { label: 'Max torque',   value: '221Nm' },
                { label: 'Transmission', value: 'CVT auto · FWD' },
                { label: 'Weight',       value: '1645kg' },
                { label: '0–100km/h',   value: '7.5 sec' },
                { label: 'Top speed',    value: '185km/h' },
                { label: 'Fuel economy', value: '5.4L/100km' }
            ]
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
            funFact: "The Corolla is the best-selling car nameplate in world history.",
            editorial: [
                { t: 'p', v: 'The Toyota Corolla is the world\'s best-selling car nameplate with over 50 million units sold. In 2025, it continues to do exactly what it always has — be impeccably reliable, easy to live with, and impossible to fault on value. The SE Dynamic sits in the middle of the range where the engineering sweet spot lives.' },
                { t: 'p', v: 'The current Corolla exterior, on its TNGA platform, abandoned the compromise-seeking profile of earlier generations. The bonnet line is lower, the rear more fastback, and the SE Dynamic adds a sport grille, 18-inch alloys, and dual exhausts that suggest a sporty intent the powertrain mostly delivers.' },
                { t: 'q', v: 'Toyota\'s 2.0-litre Dynamic Force engine is the most characterful unit the brand has offered in a Corolla for decades. It spins freely and responds crisply to inputs in a way that makes the SE an unexpectedly engaging companion on a clear road. The six-speed manual option is the purist\'s choice — and it\'s available.' },
                { t: 'p', v: 'The cabin uses a mix of fabric and SofTex synthetic leather that resists wear far better than it has any right to. The 8-inch touchscreen is clean and responsive, wireless Apple CarPlay and Android Auto are standard, and Toyota Safety Sense 3.0 includes the most advanced radar-based emergency braking in the class.' },
                { t: 'p', v: 'The 2025 Corolla SE is petrol-only in this configuration. Hybrid variants are available in LE and XLE trims. The GR Corolla sits above the range with its three-cylinder turbocharged engine and all-wheel drive — the SE Dynamic strikes the best balance between engagement and everyday usability in the standard range.' }
            ],
            specs: [
                { label: 'Engine',       value: '4-cyl, 1987cc' },
                { label: 'Max power',    value: '169hp @ 6600rpm' },
                { label: 'Max torque',   value: '205Nm @ 4400rpm' },
                { label: 'Transmission', value: 'CVT auto · FWD' },
                { label: 'Weight',       value: '1335kg' },
                { label: '0–100km/h',   value: '8.3 sec' },
                { label: 'Top speed',    value: '190km/h' },
                { label: 'Fuel economy', value: '7.0L/100km' }
            ]
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
            funFact: "The Corolla is the best-selling car nameplate in world history.",
            editorial: [
                { t: 'p', v: 'The 2023 Toyota Corolla SE Dynamic represents the mature expression of the current TNGA-platform generation, carrying the same fundamental engineering formula that has sold over 50 million Corollas globally. This year\'s model benefits from minor powertrain calibration refinements, making it an even more composed daily companion.' },
                { t: 'p', v: 'Externally, the 2023 SE is distinguished from the base grade by its sport mesh grille, LED fog lights, and 18-inch machined alloy wheels. The dual exhaust outlets sit centre-low in the rear bumper — functional, not decorative — with a note under acceleration that rewards pressing on.' },
                { t: 'q', v: 'The 2.0-litre Dynamic Force engine produces a modest 169hp but delivers it cleanly across the rev range. Urban driving is effortless; on an open road it\'s willing to rev. The acoustic work Toyota has done to keep the cabin quiet at highway speeds is remarkable for the class and the price point.' },
                { t: 'p', v: 'The 2023 SE uses the same SofTex and fabric combination as the newer model, with the 8-inch infotainment system and wireless Apple CarPlay standard. Toyota Safety Sense 2.5 covers emergency braking, lane departure alert, and automatic high beams — a full suite that once cost thousands extra.' },
                { t: 'p', v: 'For a used purchase, the 2023 Corolla represents exceptional value. The powertrain is bulletproof over long mileage, parts availability is global, and the resale curve is predictable. It asks for nothing extraordinary. In return, it gives you everything you need.' }
            ],
            specs: [
                { label: 'Engine',       value: '4-cyl, 1987cc' },
                { label: 'Max power',    value: '169hp @ 6600rpm' },
                { label: 'Max torque',   value: '205Nm @ 4400rpm' },
                { label: 'Transmission', value: 'CVT auto · FWD' },
                { label: 'Weight',       value: '1335kg' },
                { label: '0–100km/h',   value: '8.4 sec' },
                { label: 'Top speed',    value: '190km/h' },
                { label: 'Fuel economy', value: '7.2L/100km' }
            ]
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
            funFact: "The Cybertruck's exoskeleton is made of Ultra-Hard 30X Cold-Rolled stainless steel.",
            editorial: [
                { t: 'p', v: 'Nothing prepares you for the Tesla Cybertruck in person. Photographs flatten what is, in reality, a vehicle of genuinely radical proportions — wider, taller, and more aggressively angular than anything sharing the road with it. The stainless steel exoskeleton does not rust, does not dent conventionally, and cannot be repainted. It arrived and immediately made every other pickup truck look like a rough draft.' },
                { t: 'p', v: 'The Cyberbeast sits at the top of the Cybertruck range with its tri-motor all-wheel drive powertrain — 845hp, 0-100km/h in 2.6 seconds. It doesn\'t feel real until it happens to you. The light bar spanning the full width front and rear replaces conventional headlights, and the LED loadbay illumination at the rear turns the truck into a mobile worksite light tower.' },
                { t: 'q', v: 'The acceleration in Ludicrous mode is not fast — fast is a word for things you can track. The Cyberbeast simply teleports. One moment you are stationary; a fraction of a second later, the speedometer reads a number that shouldn\'t have been possible. Three tons. Two and a half seconds. Something has gone wrong with physics.' },
                { t: 'p', v: 'Inside, the vast interior is defined by an 18.5-inch central touchscreen and a secondary 9.4-inch screen for rear seats. The storage is extraordinary — a front trunk, a powered vault in the bed, and a 6.5-foot bed that accommodates most needs. A 240V outlet in the bed turns the Cybertruck into a mobile power station.' },
                { t: 'p', v: 'Three configurations are available: Foundation Series, Long Range, and Cyberbeast. Air suspension comes standard across the range. Steer-by-wire with no mechanical connection to the front wheels debuts on the Cybertruck — a system that alters the steering ratio dynamically based on speed, making a six-metre truck genuinely manoeuvrable.' }
            ],
            specs: [
                { label: 'Powertrain',   value: 'Tri-Motor AWD' },
                { label: 'Max power',    value: '845hp combined' },
                { label: 'Max torque',   value: '10,000Nm (est. at wheels)' },
                { label: 'Battery',      value: 'Ultra Large Pack' },
                { label: 'Weight',       value: '3098kg' },
                { label: '0–100km/h',   value: '2.6 sec (Ludicrous)' },
                { label: 'Top speed',    value: '209km/h' },
                { label: 'Range',        value: '515km (EPA, Cyberbeast)' }
            ]
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
            funFact: "The 2023 Sportage features a boomerang-shaped LED headlight design.",
            editorial: [
                { t: 'p', v: 'The fifth-generation Kia Sportage arrived and immediately made the segment\'s incumbents look complacent. Designers at Kia under chief design officer Karim Habib produced something that looks like it belongs three years ahead of its launch date — the Star Map LED daytime running lights alone had rivals scrambling for pen and paper.' },
                { t: 'p', v: 'The X-Line variant brings raised ground clearance, dark exterior accents, and all-wheel drive as standard. The boomerang-shaped LED headlights at the front and the full-width tail-light cluster at the rear give the car an immediately recognisable silhouette from any angle.' },
                { t: 'q', v: 'Behind the wheel, the Sportage X-Line impresses most with its dual panoramic curved displays — a 12.3-inch digital instrument panel and a 12.3-inch infotainment screen merged into one uninterrupted arc. It\'s a layout borrowed from category-leaders and executed here without the corresponding price premium.' },
                { t: 'p', v: 'The 2.5-litre four-cylinder petrol engine is not the reason you choose the Sportage — the hybrid variant does that better. But it\'s adequate and honest, delivering 187hp with the kind of linear character that makes daily driving undramatic. The eight-speed automatic gearbox selects ratios without intrusion.' },
                { t: 'p', v: 'The Sportage range runs from the base LX through the EX, SX Prestige, and X-Line. All share the same advanced Kia Drive Wise safety suite. The 2023 model also receives the largest boot in its class at 1,121 litres with the rear seat folded — making it a genuine family SUV rather than merely a style exercise.' }
            ],
            specs: [
                { label: 'Engine',       value: '4-cyl, 2497cc' },
                { label: 'Max power',    value: '187hp @ 6100rpm' },
                { label: 'Max torque',   value: '241Nm @ 4000rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '1649kg' },
                { label: '0–100km/h',   value: '8.7 sec' },
                { label: 'Top speed',    value: '200km/h' },
                { label: 'Fuel economy', value: '9.4L/100km' }
            ]
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
            funFact: "The S-Class has long been considered the 'World's Best Car' by industry critics.",
            editorial: [
                { t: 'p', v: 'There is an argument, made by industry observers for decades, that the Mercedes-Benz S-Class does not merely reflect the state of the art — it defines it. Every generation introduces technology that takes a decade to filter down to lesser vehicles. The 2025 S 580 continues this tradition with Level 3 autonomous driving, a Digital Light projection system, and a cabin that borders on architectural.' },
                { t: 'p', v: 'The exterior of the W223 generation is softer and more contemporary than its predecessor — the proportions elongated, the surfaces cleaner, the chrome used with restraint. The S 580 spec brings AIRMATIC air suspension, electric rear axle steering, and 21-inch AMG alloys that fill the arches with a precision that the standard wheels cannot match.' },
                { t: 'q', v: 'Sit in the rear of an S 580 and the world outside becomes largely theoretical. The Burmester High-End 4D surround sound system places speakers in the seat backrest — the bass resonates through the structure of the car. The MBUX Hyperscreen spans the full dashboard width. The Energizing Comfort programme integrates lighting, seat massage, and climate into coordinated wellness sequences.' },
                { t: 'p', v: 'The 4.0-litre V8 Biturbo mild hybrid produces 442hp and 560Nm, the 48V starter-generator smoothing gear changes and recovering energy under braking. In Drive mode it\'s almost imperceptibly smooth. In Sport mode the exhaust note opens, the gearbox holds ratios, and the S 580 remembers that it was once a saloon car.' },
                { t: 'p', v: 'The S-Class range spans from the S 450 entry point through the S 580 and the AMG S 63 at the top. Long wheelbase variants add rear-seat legroom appropriate for those who prefer being driven. The Maybach variant introduces a further tier of rear-compartment luxury beyond even the standard S-Class.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3982cc Biturbo + Hybrid' },
                { label: 'Max power',    value: '442hp @ 5500rpm' },
                { label: 'Max torque',   value: '560Nm @ 2000rpm' },
                { label: 'Transmission', value: '9-speed auto · AWD' },
                { label: 'Weight',       value: '2085kg' },
                { label: '0–100km/h',   value: '4.9 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '11.8L/100km' }
            ]
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
            funFact: "The S-Class S 500 LWB rear seat rivals business class aircraft cabins.",
            editorial: [
                { t: 'p', v: 'The 2023 Mercedes-Benz S 500 Long is the S-Class in the configuration that most of its buyers choose — six cylinders rather than eight, long wheelbase for the rear compartment, and a mild hybrid system that allows the car to coast silently on the motorway with the engine off. It is the diplomatic choice in the best sense.' },
                { t: 'p', v: 'In long wheelbase form, the S 500 offers 147mm more rear legroom than the standard car. The rear seat becomes an executive environment that rivals the front of some private aircraft — powered recline, a retractable footrest, rear-seat entertainment, and the full Burmester 3D audio system.' },
                { t: 'q', v: 'The 3.0-litre inline-six turbocharged engine with integrated starter-generator produces 429hp and 520Nm with a refinement that the V8 versions technically surpass but emotionally cannot match. There is a rightness to a straight-six in a long saloon. It makes the right noises in the right places, and none at all when it should be quiet.' },
                { t: 'p', v: 'MBUX Voice Assistant, Digital Light headlights, and ATTENTION ASSIST fatigue detection are standard. The MBUX Hyperscreen — a single curved glass unit spanning the full dashboard — remains the most dramatic interior statement of any production saloon car currently on sale.' },
                { t: 'p', v: 'For a 2023 unit, the S 500 Long represents a considered used purchase: a fully developed generation, any early build issues long resolved, and a residual value that reflects the S-Class\'s enduring desirability. At this price point, it remains the most compelling luxury saloon car available.' }
            ],
            specs: [
                { label: 'Engine',       value: 'I6, 2999cc Turbo + Hybrid' },
                { label: 'Max power',    value: '429hp @ 5500rpm' },
                { label: 'Max torque',   value: '520Nm @ 1800rpm' },
                { label: 'Transmission', value: '9-speed auto · AWD' },
                { label: 'Weight',       value: '2100kg' },
                { label: '0–100km/h',   value: '5.0 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '10.5L/100km' }
            ]
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
            funFact: "The GLE 63 S can sprint to 100km/h faster than many dedicated sports cars.",
            editorial: [
                { t: 'p', v: 'The Mercedes-AMG GLE 63 S occupies a specific position in the performance SUV landscape — one that neither the Porsche Cayenne Turbo GT nor the BMW X5 M Competition fully addresses. It is an AMG product: loud, dramatic, and engineered not to compete with the segment but to punish it.' },
                { t: 'p', v: 'Externally, the GLE 63 S announces itself with Panamericana grille slats, quad AMG exhausts at the rear, and an aggressive lower body kit that drops the visual centre of gravity. The 22-inch AMG alloys are optional but correct — they fill the arches in a way that makes the base wheels look apologetic.' },
                { t: 'q', v: 'The 4.0-litre V8 Biturbo in EQ Boost configuration produces 603hp and 850Nm, with the 48V integrated starter-generator filling in below 2,000rpm where the turbos are still building boost. The result is an engine with the character of a naturally-aspirated unit and the output of a hybrid. The AMG Sport exhaust turns its voice from authority to aggression at will.' },
                { t: 'p', v: 'Inside, the AMG Performance steering wheel with thumb-controlled driving mode paddles is the central interaction point. AMG Nappa Sport seats hold with lateral bolsters that retract at low speed. The infotainment receives real-time performance data — lap timing, engine torque, and G-force readouts — via the AMG Track Pace feature.' },
                { t: 'p', v: 'The GLE 63 S is offered in standard and Coupé body styles, the latter sacrificing some cargo space for a sharper roofline and a more aggressive visual statement. The standard SUV offers the more practical choice: upright rear screen, full headroom, and superior rear entry ergonomics.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3982cc Biturbo + EQ Boost' },
                { label: 'Max power',    value: '603hp @ 6500rpm' },
                { label: 'Max torque',   value: '850Nm @ 2500rpm' },
                { label: 'Transmission', value: '9-speed auto · AWD' },
                { label: 'Weight',       value: '2295kg' },
                { label: '0–100km/h',   value: '3.8 sec' },
                { label: 'Top speed',    value: '280km/h' },
                { label: 'Fuel economy', value: '13.8L/100km' }
            ]
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
            funFact: "The GLE 63 S can sprint to 100km/h faster than many dedicated sports cars.",
            editorial: [
                { t: 'p', v: 'The 2022 Mercedes-AMG GLE 63 S brings the same performance firepower as the current model year — this unit predates the minor facelift that refreshed the GLE range\'s interior and exterior details. In most material respects, the two cars are identical where it matters: the engine, the chassis, the exhaust note.' },
                { t: 'p', v: 'The W167-generation GLE was the first to use AMG\'s EQ Boost mild hybrid system in the 63-series. The 48V architecture means a belt-driven starter-generator fills in torque across the low-RPM range, eliminating the characteristic flat spot of earlier biturbo AMG engines. The GLE 63 S now feels almost effortlessly muscular across the entire rev range.' },
                { t: 'q', v: 'Sport+ mode on the drive mode selector transforms the character completely. The air suspension firms, the gearbox holds ratios to the red line, the exhaust bypasses its silencer, and what was a composed luxury SUV becomes something considerably more intimidating. The sound in Sport+ is a reason to press the button regardless of road conditions.' },
                { t: 'p', v: 'The 2022 unit rides on the same AMG Ride Control+ air suspension as the current car, with four-chamber air springs that allow individual corner adjustment. Rear-axle steering — standard on the GLE 63 S — reduces the turning circle and improves stability at speed by steering the rear wheels in opposing directions below and above 60km/h respectively.' },
                { t: 'p', v: 'As a used purchase, the 2022 GLE 63 S offers the fully mature development of the platform at a reduced entry price. The S63-equivalent powertrain is one of AMG\'s most capable — and at this mileage bracket, represents arguably the best performance-SUV value in the Faceoff collection.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3982cc Biturbo + EQ Boost' },
                { label: 'Max power',    value: '603hp @ 6500rpm' },
                { label: 'Max torque',   value: '850Nm @ 2500rpm' },
                { label: 'Transmission', value: '9-speed auto · AWD' },
                { label: 'Weight',       value: '2295kg' },
                { label: '0–100km/h',   value: '3.9 sec' },
                { label: 'Top speed',    value: '280km/h' },
                { label: 'Fuel economy', value: '14.1L/100km' }
            ]
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
            funFact: "The X5 M Competition can reach 290km/h — faster than most supercars from the '90s.",
            editorial: [
                { t: 'p', v: 'The BMW X5 M Competition arrived to answer a question nobody dared ask aloud: what happens if you take Munich\'s most potent M engine and install it in a family SUV? The answer is that you create something that rewrites the rules of both categories — a car fast enough to embarrass dedicated sports cars, yet practical enough to collect four passengers and their luggage.' },
                { t: 'p', v: 'The exterior of the X5 M Competition signals its intent without shouting. The M-specific wide body adds 22mm per side, accommodating 20-inch M compound alloys that clear the massive M compound brakes. Laser headlights are standard on Competition spec, their intensity proportional to the performance they illuminate.' },
                { t: 'q', v: 'The S63M 4.4-litre V8 produces 617hp with a characteristic M Power delivery — smooth and linear below 3,000rpm, then building with increasing urgency to the 7,200rpm red line. The quad exhaust delivers a note that is unmistakably M: not theatrical, but purposeful. It communicates the engine\'s state accurately and without embellishment.' },
                { t: 'p', v: 'The M Carbon interior package is available to create the most aggressive cabin environment, but the standard Competition interior with Merino full leather is more than sufficient. The Bowers & Wilkins Diamond surround sound system stands among the finest factory audio installations of any vehicle at any price.' },
                { t: 'p', v: 'The X5 M Competition sits above the standard X5 M, distinguished by its uprated engine tune, firmer suspension, M-specific styling elements, and black high-gloss trim rather than chrome. BMW also offers the xDrive50e plug-in hybrid in M60i specification for those prioritising efficiency alongside performance.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 4395cc M TwinPower' },
                { label: 'Max power',    value: '617hp @ 6000rpm' },
                { label: 'Max torque',   value: '750Nm @ 1800rpm' },
                { label: 'Transmission', value: '8-speed M Steptronic · AWD' },
                { label: 'Weight',       value: '2312kg' },
                { label: '0–100km/h',   value: '3.8 sec' },
                { label: 'Top speed',    value: '290km/h (M Drivers Pkg)' },
                { label: 'Fuel economy', value: '13.1L/100km' }
            ]
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
            funFact: "The X5 M Competition can reach 290km/h — faster than most supercars from the '90s.",
            editorial: [
                { t: 'p', v: 'The 2022 BMW X5 M Competition represents the F95-generation model — the first X5 M to use the S63 engine with the 8-speed M Steptronic gearbox. This combination proved transformative: the previous DCT was fast but occasionally hesitant in traffic; the Steptronic automates seamlessly between comfort and full attack without the dual-clutch\'s characteristic low-speed shunt.' },
                { t: 'p', v: 'Externally, the 2022 car is visually identical to the current generation in most respects. The M front apron with large lateral air intakes, the side sills, and the rear diffuser with integrated quad exhaust tips define the aggressive package. Carbon fibre roof and mirror caps mark out the Competition spec.' },
                { t: 'q', v: 'Driving the X5 M Competition at ten-tenths requires commitment and honesty about the vehicle\'s mass. It will rotate on request — the rear can be unlocked in M Mode — but the physics of 2,300kg insist on respect. Respect it and it rewards lavishly. The chassis resolves corners with a precision that shouldn\'t be achievable at this scale.' },
                { t: 'p', v: 'The interior retains the pre-iDrive 8 generation of BMW\'s infotainment system, which many drivers consider the most intuitive the brand has produced. Merino leather, ambient lighting, and the optional Bowers & Wilkins audio combine to create a cabin that is both sporting and genuinely luxurious in a way that the pure-competition interiors of rivals fail to match.' },
                { t: 'p', v: 'As a 2022 model, this X5 M Competition represents strong value in the used performance SUV segment. The S63 engine is one of BMW M\'s most durable powerplants, with well-documented service history traceable through BMW ConnectedDrive.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 4395cc M TwinPower' },
                { label: 'Max power',    value: '617hp @ 6000rpm' },
                { label: 'Max torque',   value: '750Nm @ 1800rpm' },
                { label: 'Transmission', value: '8-speed M Steptronic · AWD' },
                { label: 'Weight',       value: '2310kg' },
                { label: '0–100km/h',   value: '3.9 sec' },
                { label: 'Top speed',    value: '290km/h (M Drivers Pkg)' },
                { label: 'Fuel economy', value: '13.5L/100km' }
            ]
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
            funFact: "The new G70 7 Series features a 31-inch 8K Theatre Screen for rear passengers.",
            editorial: [
                { t: 'p', v: 'BMW\'s decision to fit the new G70 7 Series with a 31-inch 8K Theatre Screen for rear passengers is the most emphatic statement the brand has made about what executive luxury looks like in the mid-2020s. Whether you find it visionary or excessive depends on whether you have ever used it — those who have rarely want to leave the rear seat.' },
                { t: 'p', v: 'The 760i xDrive exterior is marked by the controversial decision to enlarge the kidney grilles to their most extreme proportions yet. In person, the G70\'s visual coherence depends on scale — photographs at editorial angles look polarising; standing beside the car, the 5.4-metre length and precise surface quality produce an impression closer to monumental than awkward.' },
                { t: 'q', v: 'BMW\'s Iconic Glow Crystal headlights illuminate the glass kidney grille elements at night, producing a luminescent floating effect that has no precedent in production car design. The light output itself is exceptional — the Laser-enhanced main beam has a reach of 500 metres, making nocturnal motorway travel a fundamentally different experience.' },
                { t: 'p', v: 'The 4.4-litre V8 M TwinPower Turbo delivers 544hp in a way that the 7 Series was always intended to be driven — not at the limit, but with commanding surpluses in reserve. The 8-speed Steptronic gearbox with sport differential places the power wherever it\'s most useful.' },
                { t: 'p', v: 'The G70 7 Series range begins with the 740i six-cylinder and extends to the i7 M70 xDrive electric flagship. The 760i xDrive represents the top of the combustion range. The Executive Lounge rear seat package with individual rear seats and the 31-inch screen is the correct configuration for driver-driven use.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 4395cc M TwinPower' },
                { label: 'Max power',    value: '544hp @ 5500rpm' },
                { label: 'Max torque',   value: '750Nm @ 1800rpm' },
                { label: 'Transmission', value: '8-speed Steptronic · AWD' },
                { label: 'Weight',       value: '2140kg' },
                { label: '0–100km/h',   value: '4.2 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '11.1L/100km' }
            ]
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
            funFact: "The 7 Series has been the benchmark of executive luxury sedans for over 40 years.",
            editorial: [
                { t: 'p', v: 'The 2023 BMW 740i M Sport represents the entry point to the G70 7 Series range — entry, of course, being a relative term when the car in question is a 5.4-metre luxury saloon with a Bowers & Wilkins audio system and adaptive air suspension. The six-cylinder inline engine is arguably the most technically advanced unit BMW has produced at this displacement.' },
                { t: 'p', v: 'The M Sport package brings the sport grille with dark highlights, 20-inch M alloys, and the sport air suspension with adaptive dampers. Cosmetically and ergonomically, it is indistinguishable from the more powerful variants to most eyes. The understated approach suits the 740i\'s character.' },
                { t: 'q', v: 'The B58 3.0-litre inline-six turbocharged engine is considered by many engineers to be one of the finest current production units in any class. Smooth, free-revving, and characterful, it produces 375hp and 540Nm with a refinement that the V8 versions technically surpass but emotionally cannot match. There is a rightness to six cylinders in a BMW saloon.' },
                { t: 'p', v: 'The G70 interior introduces Swarovski-option dashboard lighting, individual rear seat configurations, and the optional Theatre Screen. The 740i receives the full BMW OS 8 with curved display and the Personal Assistant voice control. Wireless Apple CarPlay and rear entertainment are standard on M Sport grade.' },
                { t: 'p', v: 'The 2023 740i M Sport represents excellent value in the pre-owned market: a vehicle optioned to very high specification from new, now accessible at a point where significant first-owner depreciation has been absorbed. BMW ConnectedDrive remote functions — including pre-conditioning and remote park assist — remain available via the app.' }
            ],
            specs: [
                { label: 'Engine',       value: 'I6, 2998cc TwinPower Turbo' },
                { label: 'Max power',    value: '375hp @ 5500rpm' },
                { label: 'Max torque',   value: '540Nm @ 1500rpm' },
                { label: 'Transmission', value: '8-speed Steptronic · AWD' },
                { label: 'Weight',       value: '2020kg' },
                { label: '0–100km/h',   value: '5.3 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '9.8L/100km' }
            ]
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
            funFact: "The Cayenne Turbo GT set a new SUV lap record at the Nürburgring Nordschleife.",
            editorial: [
                { t: 'p', v: 'Porsche\'s decision to fit the Cayenne Turbo GT with coilover suspension — not air suspension, coilovers — communicates something important about intent. This is not a luxury SUV with a performance variant. This is a racing car with seats and a boot. The distinction matters when you drive it.' },
                { t: 'p', v: 'The exterior adds the GT Aerokit — a widened front apron with more aggressive air curtains, a fixed rear wing, and a diffuser. The titanium exhaust exits through four oval outlets in a way that hints at the Cayman GT4 RS in the family tree. On Carmine Red calipers and 22-inch GT Design wheels, the Turbo GT is visually unambiguous about its ambitions.' },
                { t: 'q', v: 'The 4.0-litre twin-turbo V8\'s 659hp is delivered through a Sports Chrono-equipped 8-speed PDK in a way that makes everything else with five seats feel slow by comparison. But the defining characteristic is not the acceleration — it\'s the confidence the chassis instils at 250km/h. On the Autobahn, it doesn\'t feel fast. It feels correct.' },
                { t: 'p', v: 'The Race-Tex interior uses Alcantara on the steering wheel, gear selector, and upper door cards to reduce weight and driver slippage. The Sport Seats Plus provide the lateral support to match the chassis capability. Carbon fibre trim, Porsche Crest headrests, and GT stitching complete the environment. It is not the softest place to travel — that\'s rather the point.' },
                { t: 'p', v: 'The Turbo GT sits above the Turbo in the Cayenne range and below nothing in its SUV class for dynamic performance. Porsche does not offer a more capable road-legal Cayenne. The Turbo S E-Hybrid provides comparable peak power with a different delivery character — but the purist\'s choice between the two is not in question.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3996cc Twin-Turbo' },
                { label: 'Max power',    value: '659hp @ 6000rpm' },
                { label: 'Max torque',   value: '870Nm @ 2300rpm' },
                { label: 'Transmission', value: '8-speed PDK · AWD' },
                { label: 'Weight',       value: '2195kg' },
                { label: '0–100km/h',   value: '3.4 sec (Sport Chrono)' },
                { label: 'Top speed',    value: '300km/h' },
                { label: 'Fuel economy', value: '13.8L/100km' }
            ]
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
            funFact: "The Cayenne Turbo shares its engine architecture with the Panamera Turbo.",
            editorial: [
                { t: 'p', v: 'Before the Turbo GT reset expectations, the standard Cayenne Turbo was itself considered extreme — 542hp, a 4.0-litre twin-turbo V8, and a top speed of 286km/h from a vehicle that can still seat five adults comfortably. The 2023 model represents the final version of the third-generation body, a sweet spot of maturity and development.' },
                { t: 'p', v: 'The exterior of the Turbo grade is distinguished by specific air intakes, quad exhaust outlets in a satin chrome finish, and larger front brakes with Porsche Surface Coated Brakes as standard. The air suspension is standard and adjusts ride height for the conditions — a feature that becomes invisible in use but would be immediately missed without it.' },
                { t: 'q', v: 'The Porsche Active Suspension Management system reads road inputs 100 times per second and adjusts each individual damper accordingly. The result is a composure at speed that belies the vehicle\'s mass — the Cayenne Turbo corners without the roll and pitch cues that signal to the driver the limits of grip are approaching.' },
                { t: 'p', v: 'Inside, the two-tone leather cabin with contrast stitching, 18-way adaptive sport seats, and Burmester surround sound creates a genuinely premium environment. The GT Sport steering wheel with paddle shifters and Porsche Communication Management with Apple CarPlay complete a cabin that resists obsolescence.' },
                { t: 'p', v: 'As a 2023 used purchase, the Cayenne Turbo offers strong long-term value — the V8 powertrain is well-established, factory service history is traceable, and the residual value curve for Cayenne Turbos in this generation is one of the flattest in the premium SUV segment.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3996cc Twin-Turbo' },
                { label: 'Max power',    value: '542hp @ 5750rpm' },
                { label: 'Max torque',   value: '770Nm @ 2000rpm' },
                { label: 'Transmission', value: '8-speed Tiptronic S · AWD' },
                { label: 'Weight',       value: '2175kg' },
                { label: '0–100km/h',   value: '4.0 sec (Sport Chrono)' },
                { label: 'Top speed',    value: '286km/h' },
                { label: 'Fuel economy', value: '13.0L/100km' }
            ]
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
            funFact: "A single Bentayga dashboard takes over 150 hours of hand-finishing to complete.",
            editorial: [
                { t: 'p', v: 'The Bentley Bentayga Extended Wheelbase Azure exists in a category of one — there is nothing else on sale that combines the Bentayga\'s specific mixture of hand-finished craftsmanship, technology, and dynamic ability in a body this large, this comfortable, and this deliberately relaxed about the world.' },
                { t: 'p', v: 'The EWB adds 180mm of wheelbase to the standard Bentayga, all of which goes directly to rear-seat occupant space. The airline-style rear seats recline to 40 degrees, a footrest deploys from the back of the front seat, and a Champagne cooler occupies the centre console. It is, in the truest sense, a first-class cabin on four wheels.' },
                { t: 'q', v: 'The exterior is distinguished by two-tone paint — a standard configuration on the Azure trim — with the roof in a contrasting colour to the body. The detail quality of panel fit and paint depth on a Bentayga is something that must be experienced in person to appreciate fully. Every panel joint is measured in fractions of a millimetre.' },
                { t: 'p', v: 'The 4.0-litre twin-turbo V8 delivers 542hp with the composed authority of a much larger engine. It is not the fastest in the class — that role belongs to the Speed variant with its W12. But the V8 Azure is the correct choice for the EWB: quieter, slightly lighter, and its torque delivery is more appropriate for the relaxed pace an EWB encourages.' },
                { t: 'p', v: 'The Bentayga range spans from the base V8 through the Azure and Azure Mulliner grades to the top Speed specification. The EWB is only offered in V8 configuration. Mulliner personalisation — covering bespoke paint colours, unique veneers, and monogram stitching — is available on all grades, making each example potentially unique.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3996cc Twin-Turbo' },
                { label: 'Max power',    value: '542hp @ 6000rpm' },
                { label: 'Max torque',   value: '770Nm @ 1960rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2440kg' },
                { label: '0–100km/h',   value: '4.6 sec' },
                { label: 'Top speed',    value: '290km/h' },
                { label: 'Fuel economy', value: '14.0L/100km' }
            ]
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
            funFact: "Every Bentayga is hand-assembled by a dedicated craftsperson team in Crewe, England.",
            editorial: [
                { t: 'p', v: 'The 2022 Bentley Bentayga V8 marks the final full year of the second-generation Bentayga before the introduction of the EWB model — making it, in certain measures, the ultimate expression of the established formula. Same twin-turbo V8, same 542hp, same Crewe craftsmanship, but in the standard wheelbase that many consider the better-proportioned vehicle.' },
                { t: 'p', v: 'The exterior of the pre-facelift Bentayga is an acquired taste that has aged into acceptance: the large matrix LED headlights, the Bentley matrix grille, and the distinctive tail-light clusters have become design signatures rather than controversy. In Midnight Emerald over Beluga — the Bentley palette is one of the finest available from any manufacturer.' },
                { t: 'q', v: 'The hide leather of the standard Bentayga V8 is hand-cut, hand-stitched, and hand-finished at Crewe. A full hide interior requires the skins of approximately 15 hides, each individually inspected and matched for colour consistency. The diamond-quilted seats are assembled by craftspeople working one seam at a time.' },
                { t: 'p', v: 'The Naim for Bentley audio system uses an 1,100-watt amplifier and dedicated speakers mounted into structural components to reduce resonance. At reference listening levels, it produces sound that embarrasses dedicated home installations. In the context of the V8\'s exhaust note audible through the firewall, it provides the perfect counterpoint.' },
                { t: 'p', v: 'The 2022 V8 is the choice for those who want the Bentayga experience without the EWB premium — and there is a reasonable case that the standard wheelbase is the more dynamic vehicle as a result of its shorter overhangs and tighter-radius cornering geometry.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 3996cc Twin-Turbo' },
                { label: 'Max power',    value: '542hp @ 6000rpm' },
                { label: 'Max torque',   value: '770Nm @ 1960rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2340kg' },
                { label: '0–100km/h',   value: '4.6 sec' },
                { label: 'Top speed',    value: '290km/h' },
                { label: 'Fuel economy', value: '14.2L/100km' }
            ]
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
            funFact: "Every Rolls-Royce Cullinan can be entirely bespoke — no two are identical.",
            editorial: [
                { t: 'p', v: 'The Rolls-Royce Cullinan Series II is not an update to an existing formula — it is a complete reimagining of one. The front fascia has been entirely redrawn with a new Pantheon Grille featuring illuminated bars, new headlight architecture that incorporates the Spirit of Ecstasy\'s wing shape, and a lower bumper design that creates a longer visual ground line.' },
                { t: 'p', v: 'Inside, the Gallery dashboard — Rolls-Royce\'s term for the full-width display case of bespoke objects visible through the fascia — can now be specified with animated mechanical displays: an astrological orrery, a flying clock, or a bespoke mechanical sculpture behind the glass. The Starlight Headliner option adds 1,344 individually fitted fibre-optic strands.' },
                { t: 'q', v: 'The 6.75-litre twin-turbo V12 is the same engine that has powered Rolls-Royce since 2003, progressively developed and now producing 591hp and 900Nm. It has the most effortless power delivery of any production engine — the performance feels like an ambient property of the vehicle rather than a mechanical act.' },
                { t: 'p', v: 'The Cullinan\'s rear "Recreation Module" remains a unique configuration in the SUV segment: two individual rear-facing seats that flip down from the load floor, creating an elevated viewing and social platform when parked. It is, as its name suggests, designed for occasions rather than commutes.' },
                { t: 'p', v: 'Every Cullinan is unique by design — no two should be identical when the Bespoke programme is engaged. Options include over 44,000 exterior paint colours, interior veneers from globally sourced rare woods, and monogram embroidery to the customer\'s own specification. The Series II expands this already extraordinary range of personalisation further still.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V12, 6749cc Twin-Turbo' },
                { label: 'Max power',    value: '591hp @ 5000rpm' },
                { label: 'Max torque',   value: '900Nm @ 1600rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2660kg' },
                { label: '0–100km/h',   value: '5.2 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '18.0L/100km' }
            ]
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
            funFact: "The Black Badge edition rejects chrome in favour of darkened titanium and carbon fibre.",
            editorial: [
                { t: 'p', v: 'Black Badge is Rolls-Royce\'s acknowledgement that not every customer wants the marque\'s traditional grandeur — some want a vehicle that whispers rather than announces, that withdraws rather than presents. The 2022 Cullinan Black Badge rejects chrome wholesale and replaces it with darkened titanium and carbon fibre. The effect is transformative and, in certain light, genuinely intimidating.' },
                { t: 'p', v: 'The exterior darkening extends to the Pantheon Grille, Spirit of Ecstasy, window surrounds, roof rail, and exhaust outlets. The 22-inch wheels are available in Gloss Black or Satin Black. On a body colour of Meteorite, the overall impression is of a vehicle that has absorbed — and refused to return — the light.' },
                { t: 'q', v: 'The Black Badge treatment extends inside to black leather and carbon fibre trim, with the option of a Technical Carbon fascia. The carbon fibre dashboard insert, viewed at night under the ambient lighting, has a depth that few materials achieve. This is the correct setting for the driver who views the Cullinan as a precision object rather than a status statement.' },
                { t: 'p', v: 'The powertrain is remapped in Black Badge specification, adding a performance uplift over the standard car with recalibrated throttle mapping that the factory describes as "more alert." In a vehicle of this mass, the subjective difference is not dramatic — but it exists, and Rolls-Royce believed it worth mentioning.' },
                { t: 'p', v: 'The Cullinan Black Badge remains the most explicit expression of the Cullinan\'s character as a vehicle for drivers rather than passengers. Its relationship with the road is that of a vehicle that has been told precisely what it can be — and has decided to be exactly that, and nothing less.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V12, 6749cc Twin-Turbo' },
                { label: 'Max power',    value: '591hp @ 5000rpm' },
                { label: 'Max torque',   value: '900Nm @ 1600rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2660kg' },
                { label: '0–100km/h',   value: '5.0 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '18.2L/100km' }
            ]
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
            funFact: "The Q8 uses the same MLB Evo platform shared with Bentley and Lamborghini.",
            editorial: [
                { t: 'p', v: 'The Audi Q8 exists in an interesting position within its own brand\'s portfolio — a large, expensive, relatively impractical SUV coupé that sells primarily on the strength of its visual statement. That is, frankly, a perfectly valid reason to buy a car, and the 2024 S-Line makes that statement with considerable authority.' },
                { t: 'p', v: 'The 2024 S-Line exterior brings a sport bumper package, gloss black surrounds for the Singleframe grille, and side sill extensions that lower the visual mass of the flanks. The HD Matrix LED with Laser main beam is the correct headlight specification — the digital light signature is Audi\'s most distinctive after dark, a horizontal light bar that is immediately recognisable.' },
                { t: 'q', v: 'The Q8 sits on the MLB Evo platform — the same architecture shared by the Lamborghini Urus and Bentley Bentayga. The 55 TFSI\'s 3.0-litre V6 delivers 340hp through a 48V mild hybrid system that eliminates engine stop-start judder and allows the car to coast at motorway speed with the engine off. In practice, it adds perhaps 15% to real-world fuel efficiency.' },
                { t: 'p', v: 'The MMI touch response dual-screen interior debuted in the Q8 and remains one of the most complete implementations of a haptic-feedback dashboard. The Bang & Olufsen 3D 23-speaker system is reference-class in this vehicle segment. Valcona leather with diamond stitching and aluminium or carbon fibre trim complete a cabin that positions itself correctly.' },
                { t: 'p', v: 'The Q8 range is available with 45 TFSI six-cylinder petrol, 55 TFSI, SQ8 V8, and the RS Q8 at the top with 591hp from a Lamborghini-derived twin-turbo V8. The S-Line sits in the competitive sweet spot: all the visual drama of the upper grades, at a more considered price point.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V6, 2995cc TFSI + 48V Hybrid' },
                { label: 'Max power',    value: '340hp @ 5200rpm' },
                { label: 'Max torque',   value: '500Nm @ 1370rpm' },
                { label: 'Transmission', value: '8-speed Tiptronic · AWD' },
                { label: 'Weight',       value: '2085kg' },
                { label: '0–100km/h',   value: '6.0 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '9.9L/100km' }
            ]
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
            funFact: "The Q8 was Audi's first SUV coupé, pioneering the segment for the brand.",
            editorial: [
                { t: 'p', v: 'The 2022 Audi Q8 S-Line preceded the minor facelift that brought updated headlight graphics and revised grille detailing to the 2024 car. In all material respects — powertrain, chassis, interior technology — the two vehicles are identical. For a buyer who values substance over cosmetic update cycles, the 2022 car represents significant value.' },
                { t: 'p', v: 'The S-Line package on the 2022 Q8 brings a sport bodystyling kit, 21-inch alloys, and the full LED headlight arrangement with turning light function. The interior adopts Sport Contour seats with S embossing and contrasting stitching. On a dark exterior colour such as Mythos Black or Navarra Blue, the visual composition reads as genuinely premium.' },
                { t: 'q', v: 'Audi\'s quattro AWD system has always been the quiet hero of the Q8\'s dynamic story. It reads road conditions and distributes torque before wheel slip can occur. Combined with the adaptive air suspension and active rear wheel steering, the Q8 corners with a balance and precision that its mass would seem to prohibit.' },
                { t: 'p', v: 'The 2022 cabin carries the pre-facelift MMI system, which differs only in software revision from the current car. The dual touchscreens, Audi Virtual Cockpit Plus 12.3-inch digital dials, and the Bang & Olufsen 3D audio are all present. For a vehicle three years removed from new, the technology feels entirely contemporary.' },
                { t: 'p', v: 'The 2022 Q8 is, for used-market purposes, the ideal balance between development maturity, technology currency, and purchase price. The Q8 debuted as Audi\'s first SUV coupé in 2018 — in 2022, it remains one of the most considered executions of the body style.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V6, 2995cc TFSI + 48V Hybrid' },
                { label: 'Max power',    value: '340hp @ 5200rpm' },
                { label: 'Max torque',   value: '500Nm @ 1370rpm' },
                { label: 'Transmission', value: '8-speed Tiptronic · AWD' },
                { label: 'Weight',       value: '2075kg' },
                { label: '0–100km/h',   value: '6.1 sec' },
                { label: 'Top speed',    value: '250km/h (limited)' },
                { label: 'Fuel economy', value: '10.1L/100km' }
            ]
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
            funFact: "The Grand Wagoneer's McIntosh audio system is the first in any vehicle from the brand.",
            editorial: [
                { t: 'p', v: 'The Jeep Grand Wagoneer Series III Obsidian is the most aggressively American vehicle in the Faceoff collection — not because it lacks sophistication, but because it wears its American identity so completely. The McIntosh MX950 audio system is the first McIntosh installation in any production vehicle from any manufacturer. The name alone carries weight in American audio history.' },
                { t: 'p', v: 'The Obsidian trim adds gloss black exterior accents, unique 22-inch alloy wheels with black inlays, and dark chrome exterior detailing that transforms the Grand Wagoneer from American luxury to American authority. The profile is recognisably Wagoneer — upright, barn-shouldered, deliberately retro — but the Obsidian content brings a restraint that suits it.' },
                { t: 'q', v: 'Under the bonnet sits Jeep\'s 6.4-litre HEMI V8 — not turbocharged, not hybrid-assisted, but genuinely large. It produces 510hp and 637Nm from displacement alone, with a character that requires the driver to meet it halfway. The eight-speed automatic\'s shifts are not as instantaneous as German rivals, but the engine\'s response to a flat throttle is immediate and uncomplicated. American muscle, undiluted.' },
                { t: 'p', v: 'The interior carries McEvoy Mills wool accents alongside traditional leather — a detail that communicates both premium material quality and American craft heritage. Three rows of seating for eight passengers are standard in the Obsidian configuration. The 57-inch Uconnect 5 system includes a second 10.1-inch screen for rear occupants.' },
                { t: 'p', v: 'The Grand Wagoneer range begins with Series I and rises through Series II to the Series III Obsidian at the top. The L suffix denotes the extended wheelbase version. The 2024 update brought revised front styling and expanded Quadra-Lift air suspension capability. It remains the definitive expression of American full-size luxury SUV.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 6424cc HEMI' },
                { label: 'Max power',    value: '510hp @ 6100rpm' },
                { label: 'Max torque',   value: '637Nm @ 4100rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2899kg' },
                { label: '0–100km/h',   value: '4.5 sec' },
                { label: 'Top speed',    value: '210km/h' },
                { label: 'Fuel economy', value: '16.8L/100km' }
            ]
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
            funFact: "The original Jeep Wagoneer was the world's first luxury SUV, launched in 1963.",
            editorial: [
                { t: 'p', v: 'The Jeep Grand Wagoneer Series II is the considered choice in the Grand Wagoneer range — positioned above the entry Series I but below the top Series III Obsidian, it delivers the core Grand Wagoneer experience without the flagship premium. The 6.4-litre HEMI V8 is unchanged from the Series III, delivering 471hp through the same eight-speed automatic.' },
                { t: 'p', v: 'The 2023 exterior carries the original Grand Wagoneer light graphic and chrome front end that defines the design language. The Palermo leather interior and Grand Wagoneer quilted pattern on the seats are specific to this model year — a detail that distinguishes it from earlier and later production.' },
                { t: 'q', v: 'Jeep\'s Quadra-Trac II four-wheel drive system with active transfer case distributes torque front to rear as conditions demand. Unlike most luxury SUV AWD systems that prioritise fuel efficiency, the Quadra-Trac is calibrated first for traction — a reminder that beneath the leather and McIntosh audio, the Grand Wagoneer shares DNA with the Wrangler.' },
                { t: 'p', v: 'The McIntosh MX950 system on the Series II uses a 950-watt amplifier and 23 speakers to fill the eight-person cabin. The system\'s signature is warmth rather than analytical precision — it makes music sound full and present in a large space without the clinical character of German alternatives.' },
                { t: 'p', v: 'The 2023 Series II represents strong used-market value. The HEMI powertrain is well-proven over high mileage, the JL platform beneath is robust, and Jeep\'s parts network means long-term ownership costs are predictable. The original Jeep Wagoneer debuted in 1963 — the Grand Wagoneer is its direct spiritual heir, and it carries the lineage without apology.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 6424cc HEMI' },
                { label: 'Max power',    value: '471hp @ 6000rpm' },
                { label: 'Max torque',   value: '637Nm @ 4100rpm' },
                { label: 'Transmission', value: '8-speed auto · AWD' },
                { label: 'Weight',       value: '2851kg' },
                { label: '0–100km/h',   value: '4.9 sec' },
                { label: 'Top speed',    value: '210km/h' },
                { label: 'Fuel economy', value: '17.0L/100km' }
            ]
        }
    },
    "c63-w204-2011-saloon": {
        modelId: "mercedes-c63", year: "2011", trim: "C63 AMG",
        energy: "PETROL", facesRight: true,
        power: "451bhp", topSpeed: "155mph", torque: "442lb ft",
        img: "assets/editorial/webp/roman-uRbbJM3WL0g-unsplash.webp",
        details: {
            manufacturer: "Mercedes-AMG", production: "Affalterbach, Germany", limited: "W204",
            zeroToSixty: "4.4s", zeroToHundred: "4.4s", engineFull: "6.2L M156 V8",
            seating: "5 Adults", cargo: "475 Litres", leather: "AMG Sport Leather",
            heatedSeats: "Front", stereo: "Comand APS",
            headlights: "Bi-Xenon", ai: null,
            funFact: "It took two generations of BMW M3 to better the C63's 451bhp output — and no super saloon before or since emanates the same unhinged hot-rod persona.",
            editorial: [
                { t: 'p', v: 'Having probed the small sports saloon market with the 190E Cosworth in 1984, Mercedes since failed to put a dent in the BMW M3 with a run of fast but lazier alternatives from its AMG division. But everything changed in 2008, when Mercedes threw more engine at the problem to not so much dent but pummel its long-standing rival.' },
                { t: 'p', v: 'Did AMG design this engine knowing it had to fit in the C-class shell, or did the Mercedes engineering team design the W204 C-class so that the M156 V8 would fit? Either way, fitting your smallest saloon — which could be ordered with a 1.6-litre in-line four — with the biggest engine you\'ve built since the 1970s is a ballsy move.' },
                { t: 'q', v: 'Stick the fob in the dash, give it a twist and the outsize V8 fires with an appropriately heavyweight beat, the needle steadying at just 600rpm — but it\'s no lazy lump. The tacho is redlined at 7,200rpm. Give the throttle a decent prod and it\'s off like a Santa Pod hot rod, with a hearty V8 roar to match.' },
                { t: 'p', v: 'The motor is explosive, with a full-throated bellow and instinctive responses that could only come from a big-capacity naturally aspirated unit. Compared with modern equivalents, the W204 has an honest, analogue feel — clarity to its hydraulically-assisted steering and a surprisingly approachable balance. With so much grunt going through the rear tyres it requires restraint, but the C63\'s linear delivery means the throttle you put in requires exactly as much opposite lock as you\'re expecting. No more, no less.' },
                { t: 'p', v: 'The W204 was facelifted in 2011, bringing an updated cabin and mechanical upgrades — not least a quicker-shifting MCT automatic gearbox. Post-facelift models also rectified the weak cylinder head bolts that plagued some early cars. Strangely, an open diff was standard fit throughout the car\'s life; no C63 is complete without a limited-slip differential.' }
            ],
            specs: [
                { label: 'Engine',       value: 'V8, 6208cc' },
                { label: 'Max power',    value: '451bhp @ 6800rpm' },
                { label: 'Max torque',   value: '442lb ft @ 5000rpm' },
                { label: 'Transmission', value: '7-speed auto · RWD' },
                { label: 'Weight',       value: '1655kg saloon' },
                { label: '0–62mph',      value: '4.4 sec (tested)' },
                { label: 'Top speed',    value: '155mph (limited)' },
                { label: 'Price new',    value: '£56,665 (2011)' }
            ]
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
