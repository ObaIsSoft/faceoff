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
    }

];
window.INVENTORY = INVENTORY;

} // end guard

if (typeof module !== 'undefined') {
    module.exports = { INVENTORY: window.INVENTORY };
}
