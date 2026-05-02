if (!window.INVENTORY) {

// ═══════════════════════════════════════════════════════════════
// TIER 3 — INVENTORY  (physical units in stock)
// Each entry is a specific car that exists in Faceoff's possession.
//
// status:    "available" | "sold" | "reserved"
// condition: "new" | "used"
// grade:     "excellent" | "good" | "fair"  (used only, else null)
// imgs:      array of image paths. [0] = hero. Falls back to variant.img if empty.
// certificate: null for new cars. LACVIS object for certified used cars.
// ═══════════════════════════════════════════════════════════════

var INVENTORY = [

    // ─── NEW UNITS ──────────────────────────────────────────────────────────────

    {
        id: "gwagon-2024-new-001",
        variantId: "gwagon-2024-g63amg",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦180,000,000",
        color: "Obsidian Black Metallic",
        imgs: ["assets/car_left.png"],
        notes: "", certificate: null
    },
    {
        id: "lx600-2024-new-001",
        variantId: "lx600-2024-vip",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦165,000,000",
        color: "Sonic Titanium",
        imgs: ["assets/car_right.png"],
        notes: "", certificate: null
    },
    {
        id: "rangerover-2024-new-001",
        variantId: "rangerover-2024-autobiography",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦195,000,000",
        color: "Santorini Black",
        imgs: ["assets/2024RangeRover.png"],
        notes: "", certificate: null
    },
    {
        id: "escalade-v-2024-new-001",
        variantId: "escalade-v-2024-vseries",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦210,000,000",
        color: "Shadow Metallic",
        imgs: ["assets/escalade2025.png"],
        notes: "", certificate: null
    },
    {
        id: "escalade-iq-2026-new-001",
        variantId: "escalade-iq-2026-ev",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦240,000,000",
        color: "Stellar Black Metallic",
        imgs: ["assets/_2026cadillac.png"],
        notes: "", certificate: null
    },
    {
        id: "bydatto3-2024-new-001",
        variantId: "bydatto3-2024-extended",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦45,000,000",
        color: "Boulder Grey",
        imgs: ["assets/byd-ato3.png"],
        notes: "", certificate: null
    },
    {
        id: "camry-2025-new-001",
        variantId: "camry-2025-xle-hybrid",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦65,000,000",
        color: "Midnight Black Metallic",
        imgs: ["assets/camry2025hybrid.png"],
        notes: "", certificate: null
    },
    {
        id: "corolla-2025-new-001",
        variantId: "corolla-2025-se",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦38,000,000",
        color: "Supersonic Red",
        imgs: ["assets/corolla2025.png"],
        notes: "", certificate: null
    },
    {
        id: "cybertruck-2024-new-001",
        variantId: "cybertruck-2024-cyberbeast",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦140,000,000",
        color: "Stainless Steel",
        imgs: ["assets/cybertruck.png"],
        notes: "", certificate: null
    },
    {
        id: "kia-sportage-2023-new-001",
        variantId: "kia-sportage-2023-xline",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦42,000,000",
        color: "Glacier White Pearl",
        imgs: ["assets/kia2023sportage.png"],
        notes: "", certificate: null
    },
    {
        id: "sclass-2025-new-001",
        variantId: "sclass-2025-s580",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦255,000,000",
        color: "High-tech Silver Metallic",
        imgs: ["assets/mercedes2025sclass.png"],
        notes: "", certificate: null
    },
    {
        id: "gle63-2024-new-001",
        variantId: "gle63-2024-amg",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦320,000,000",
        color: "Obsidian Black Metallic",
        imgs: [
            "assets/inventory/gle63-2024-new-001/hero.jpg",
            "assets/inventory/gle63-2024-new-001/front.jpg",
            "assets/inventory/gle63-2024-new-001/rear.jpg",
            "assets/inventory/gle63-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },
    {
        id: "bmw-x5m-2024-new-001",
        variantId: "bmw-x5m-2024-competition",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦340,000,000",
        color: "Marina Bay Blue",
        imgs: [
            "assets/inventory/bmw-x5m-2024-new-001/hero.jpg",
            "assets/inventory/bmw-x5m-2024-new-001/front.jpg",
            "assets/inventory/bmw-x5m-2024-new-001/rear.jpg",
            "assets/inventory/bmw-x5m-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },
    {
        id: "bmw-7series-2024-new-001",
        variantId: "bmw-7series-2024-760i",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦295,000,000",
        color: "Mineral White Metallic",
        imgs: [
            "assets/inventory/bmw-7series-2024-new-001/hero.jpg",
            "assets/inventory/bmw-7series-2024-new-001/front.jpg",
            "assets/inventory/bmw-7series-2024-new-001/rear.jpg",
            "assets/inventory/bmw-7series-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },
    {
        id: "porsche-cayenne-2024-new-001",
        variantId: "porsche-cayenne-2024-turbogt",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦385,000,000",
        color: "Jet Black Metallic",
        imgs: [
            "assets/inventory/porsche-cayenne-2024-new-001/hero.jpg",
            "assets/inventory/porsche-cayenne-2024-new-001/front.jpg",
            "assets/inventory/porsche-cayenne-2024-new-001/rear.jpg",
            "assets/inventory/porsche-cayenne-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },
    {
        id: "bentley-bentayga-2024-new-001",
        variantId: "bentley-bentayga-2024-ewb",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦680,000,000",
        color: "Glacier White",
        imgs: [
            "assets/inventory/bentley-bentayga-2024-new-001/hero.jpg",
            "assets/inventory/bentley-bentayga-2024-new-001/front.jpg",
            "assets/inventory/bentley-bentayga-2024-new-001/rear.jpg",
            "assets/inventory/bentley-bentayga-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },
    {
        id: "cullinan-2024-new-001",
        variantId: "cullinan-2024-series2",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦850,000,000",
        color: "Lyrical Copper",
        imgs: [
            "assets/inventory/cullinan-2024-new-001/hero.jpg",
            "assets/inventory/cullinan-2024-new-001/front.jpg",
            "assets/inventory/cullinan-2024-new-001/rear.jpg",
            "assets/inventory/cullinan-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },
    {
        id: "audi-q8-2024-new-001",
        variantId: "audi-q8-2024-sline",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦185,000,000",
        color: "Navarra Blue Metallic",
        imgs: [
            "assets/inventory/audi-q8-2024-new-001/hero.jpg",
            "assets/inventory/audi-q8-2024-new-001/front.jpg",
            "assets/inventory/audi-q8-2024-new-001/rear.jpg",
            "assets/inventory/audi-q8-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },
    {
        id: "jeep-grandwagoneer-2024-new-001",
        variantId: "jeep-grandwagoneer-2024-series3",
        status: "available", condition: "new", grade: null,
        mileage: 0, price: "₦195,000,000",
        color: "Diamond Black Crystal",
        imgs: [
            "assets/inventory/jeep-grandwagoneer-2024-new-001/hero.jpg",
            "assets/inventory/jeep-grandwagoneer-2024-new-001/front.jpg",
            "assets/inventory/jeep-grandwagoneer-2024-new-001/rear.jpg",
            "assets/inventory/jeep-grandwagoneer-2024-new-001/interior.jpg"
        ],
        notes: "", certificate: null
    },

    // ─── USED UNITS (showcase) ──────────────────────────────────────────────────

    {
        id: "gwagon-2022-used-001",
        variantId: "gwagon-2022-g63amg",
        status: "available", condition: "used", grade: "excellent",
        mileage: 28400, price: "₦148,000,000",
        color: "Polar White",
        imgs: [
            "assets/inventory/gwagon-2022-used-001/hero.jpg",
            "assets/inventory/gwagon-2022-used-001/front.jpg",
            "assets/inventory/gwagon-2022-used-001/rear.jpg",
            "assets/inventory/gwagon-2022-used-001/interior.jpg",
            "assets/inventory/gwagon-2022-used-001/odometer.jpg"
        ],
        notes: "Single owner. Full Mercedes-Benz service history. No accidents recorded. Both keys present.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-XGW-22A",
            certNumber: "RWC-2024-00182",
            issuedDate: "2024-09-10",
            expiryDate: "2025-09-09",
            scanPath: "assets/inventory/gwagon-2022-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "rangerover-2022-used-001",
        variantId: "rangerover-2022-autobiography",
        status: "available", condition: "used", grade: "good",
        mileage: 41200, price: "₦162,000,000",
        color: "Carpathian Grey",
        imgs: [
            "assets/inventory/rangerover-2022-used-001/hero.jpg",
            "assets/inventory/rangerover-2022-used-001/front.jpg",
            "assets/inventory/rangerover-2022-used-001/rear.jpg",
            "assets/inventory/rangerover-2022-used-001/interior.jpg",
            "assets/inventory/rangerover-2022-used-001/odometer.jpg"
        ],
        notes: "Two previous owners. Serviced at Land Rover Lagos. Minor stone chips on front bumper. New tyres fitted 2024.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-RRA-22B",
            certNumber: "RWC-2024-00394",
            issuedDate: "2024-11-03",
            expiryDate: "2025-11-02",
            scanPath: "assets/inventory/rangerover-2022-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "corolla-2023-used-001",
        variantId: "corolla-2023-se",
        status: "available", condition: "used", grade: "good",
        mileage: 39800, price: "₦28,500,000",
        color: "Reservoir Blue",
        imgs: [
            "assets/inventory/corolla-2023-used-001/hero.jpg",
            "assets/inventory/corolla-2023-used-001/front.jpg",
            "assets/inventory/corolla-2023-used-001/rear.jpg",
            "assets/inventory/corolla-2023-used-001/interior.jpg",
            "assets/inventory/corolla-2023-used-001/odometer.jpg"
        ],
        notes: "Clean interior. Recently serviced. Tints installed. Ideal second car or daily driver.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-CRL-23C",
            certNumber: "RWC-2025-00041",
            issuedDate: "2025-01-20",
            expiryDate: "2026-01-19",
            scanPath: "assets/inventory/corolla-2023-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "sclass-2023-used-001",
        variantId: "sclass-2023-s500",
        status: "available", condition: "used", grade: "excellent",
        mileage: 19600, price: "₦195,000,000",
        color: "Obsidian Black Metallic",
        imgs: [
            "assets/inventory/sclass-2023-used-001/hero.jpg",
            "assets/inventory/sclass-2023-used-001/front.jpg",
            "assets/inventory/sclass-2023-used-001/rear.jpg",
            "assets/inventory/sclass-2023-used-001/interior.jpg"
        ],
        notes: "Single owner. Dealer-serviced at MB Lagos. Panoramic roof, rear-seat entertainment, Burmester 3D audio. Both keys and full docs present.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-SCS-23D",
            certNumber: "RWC-2025-00218",
            issuedDate: "2025-02-14",
            expiryDate: "2026-02-13",
            scanPath: "assets/inventory/sclass-2023-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "gle63-2022-used-001",
        variantId: "gle63-2022-amg",
        status: "available", condition: "used", grade: "excellent",
        mileage: 31200, price: "₦265,000,000",
        color: "Selenite Grey Metallic",
        imgs: [
            "assets/inventory/gle63-2022-used-001/hero.jpg",
            "assets/inventory/gle63-2022-used-001/front.jpg",
            "assets/inventory/gle63-2022-used-001/rear.jpg",
            "assets/inventory/gle63-2022-used-001/interior.jpg"
        ],
        notes: "One owner. Full AMG service history. AMG Night Package, Burmester Surround, panoramic roof. No accidents on record.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-GLE-22E",
            certNumber: "RWC-2025-00307",
            issuedDate: "2025-03-05",
            expiryDate: "2026-03-04",
            scanPath: "assets/inventory/gle63-2022-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "bmw-x5m-2022-used-001",
        variantId: "bmw-x5m-2022-competition",
        status: "available", condition: "used", grade: "good",
        mileage: 44800, price: "₦270,000,000",
        color: "Frozen Dark Silver",
        imgs: [
            "assets/inventory/bmw-x5m-2022-used-001/hero.jpg",
            "assets/inventory/bmw-x5m-2022-used-001/front.jpg",
            "assets/inventory/bmw-x5m-2022-used-001/rear.jpg",
            "assets/inventory/bmw-x5m-2022-used-001/interior.jpg"
        ],
        notes: "Two owners. Serviced at BMW Lagos. M Carbon ceramic brakes, Bowers & Wilkins Diamond audio, Executive package. Minor stone chips on leading edge.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-X5M-22F",
            certNumber: "RWC-2025-00412",
            issuedDate: "2025-03-22",
            expiryDate: "2026-03-21",
            scanPath: "assets/inventory/bmw-x5m-2022-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "bmw-7series-2023-used-001",
        variantId: "bmw-7series-2023-740i",
        status: "available", condition: "used", grade: "excellent",
        mileage: 22100, price: "₦235,000,000",
        color: "Sophisto Grey Metallic",
        imgs: [
            "assets/inventory/bmw-7series-2023-used-001/hero.jpg",
            "assets/inventory/bmw-7series-2023-used-001/front.jpg",
            "assets/inventory/bmw-7series-2023-used-001/rear.jpg",
            "assets/inventory/bmw-7series-2023-used-001/interior.jpg"
        ],
        notes: "Single owner. Theatre Screen rear entertainment, Bowers & Wilkins 18-speaker audio, Executive Lounge rear seats. Immaculate condition throughout.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-7SR-23G",
            certNumber: "RWC-2025-00519",
            issuedDate: "2025-04-01",
            expiryDate: "2026-03-31",
            scanPath: "assets/inventory/bmw-7series-2023-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "porsche-cayenne-2023-used-001",
        variantId: "porsche-cayenne-2023-turbo",
        status: "available", condition: "used", grade: "excellent",
        mileage: 26500, price: "₦310,000,000",
        color: "Mahogany Metallic",
        imgs: [
            "assets/inventory/porsche-cayenne-2023-used-001/hero.jpg",
            "assets/inventory/porsche-cayenne-2023-used-001/front.jpg",
            "assets/inventory/porsche-cayenne-2023-used-001/rear.jpg",
            "assets/inventory/porsche-cayenne-2023-used-001/interior.jpg"
        ],
        notes: "One owner. Sport Chrono Package, Burmester surround audio, 21-inch Cayenne Exclusive Design wheels. Full Porsche Centre service record.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-PCY-23H",
            certNumber: "RWC-2025-00588",
            issuedDate: "2025-04-10",
            expiryDate: "2026-04-09",
            scanPath: "assets/inventory/porsche-cayenne-2023-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "bentley-bentayga-2022-used-001",
        variantId: "bentley-bentayga-2022-v8",
        status: "available", condition: "used", grade: "excellent",
        mileage: 17300, price: "₦520,000,000",
        color: "Sequin Blue",
        imgs: [
            "assets/inventory/bentley-bentayga-2022-used-001/hero.jpg",
            "assets/inventory/bentley-bentayga-2022-used-001/front.jpg",
            "assets/inventory/bentley-bentayga-2022-used-001/rear.jpg",
            "assets/inventory/bentley-bentayga-2022-used-001/interior.jpg"
        ],
        notes: "Single owner. Naim for Bentley audio, Mulliner Specification interior, ventilated massage seats. Exceptional low-mileage example.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-BTY-22I",
            certNumber: "RWC-2025-00634",
            issuedDate: "2025-04-18",
            expiryDate: "2026-04-17",
            scanPath: "assets/inventory/bentley-bentayga-2022-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "cullinan-2022-used-001",
        variantId: "cullinan-2022-blackbadge",
        status: "available", condition: "used", grade: "excellent",
        mileage: 14900, price: "₦680,000,000",
        color: "Tungsten",
        imgs: [
            "assets/inventory/cullinan-2022-used-001/hero.jpg",
            "assets/inventory/cullinan-2022-used-001/front.jpg",
            "assets/inventory/cullinan-2022-used-001/rear.jpg",
            "assets/inventory/cullinan-2022-used-001/interior.jpg"
        ],
        notes: "One owner. Black Badge darkened brightware, carbon fibre interior trim, bespoke audio. Garage-kept, pristine throughout. Full Rolls-Royce service history.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-RRC-22J",
            certNumber: "RWC-2025-00711",
            issuedDate: "2025-04-25",
            expiryDate: "2026-04-24",
            scanPath: "assets/inventory/cullinan-2022-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "audi-q8-2022-used-001",
        variantId: "audi-q8-2022-sline",
        status: "available", condition: "used", grade: "good",
        mileage: 38700, price: "₦155,000,000",
        color: "Florett Silver Metallic",
        imgs: [
            "assets/inventory/audi-q8-2022-used-001/hero.jpg",
            "assets/inventory/audi-q8-2022-used-001/front.jpg",
            "assets/inventory/audi-q8-2022-used-001/rear.jpg",
            "assets/inventory/audi-q8-2022-used-001/interior.jpg"
        ],
        notes: "Two owners. Bang & Olufsen 3D audio, panoramic sunroof, S-Line exterior styling. Regularly serviced at Audi Centre Lagos.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-AQ8-22K",
            certNumber: "RWC-2025-00782",
            issuedDate: "2025-04-30",
            expiryDate: "2026-04-29",
            scanPath: "assets/inventory/audi-q8-2022-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    },
    {
        id: "jeep-grandwagoneer-2023-used-001",
        variantId: "jeep-grandwagoneer-2023-series2",
        status: "available", condition: "used", grade: "good",
        mileage: 35400, price: "₦165,000,000",
        color: "Sting-Gray Metallic",
        imgs: [
            "assets/inventory/jeep-grandwagoneer-2023-used-001/hero.jpg",
            "assets/inventory/jeep-grandwagoneer-2023-used-001/front.jpg",
            "assets/inventory/jeep-grandwagoneer-2023-used-001/interior.jpg"
        ],
        notes: "One owner. McIntosh MX950 audio, Palermo leather interior, tri-zone climate. Full 8-seat configuration. Tow package fitted.",
        certificate: {
            type: "LACVIS",
            regNumber: "LAG-JGW-23L",
            certNumber: "RWC-2025-00849",
            issuedDate: "2025-05-01",
            expiryDate: "2026-04-30",
            scanPath: "assets/inventory/jeep-grandwagoneer-2023-used-001/rwc.html",
            verifyUrl: "https://dvis.lg.gov.ng"
        }
    }

];
window.INVENTORY = INVENTORY;

} // end guard

if (typeof module !== 'undefined') {
    module.exports = { INVENTORY: window.INVENTORY };
}
