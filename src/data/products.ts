export interface Product {
  id: string;
  name: string;
  spec: string;
  desc: string;
  img: string;
}

export interface ProductCategory {
  category: string;
  description: string;
  items: Product[];
}

export const catalog: ProductCategory[] = [
  {
    category: "Electrical Items",
    description: "Connectors, distribution boxes, isolation switches, and complete earthing protection for solar systems.",
    items: [
      { id: "mc4-connector-lq-1", name: "MC4 Connector (LQ-1)", spec: "30A, 1500V DC (IEC) / 1000V DC (UL)", desc: "High-performance MC4 connectors with IP68 protection, tin-plated copper contacts, and UL94-V0 flame class. Suitable for -40°C to +90°C.", img: "/images/prod_mc4_connector.png" },
      { id: "branch-connector", name: "Branch Connector", spec: "50A, Cu (Tin plated), IP68/IP2X", desc: "Durable branch connectors designed for robust parallel wiring. Features IP68 mating protection and compliant with EN 50521 standards.", img: "/images/solar_connectors.png" },
      { id: "y-connector", name: "Y Connector", spec: "30A, Cu (Tin plated), IP67/IP2X", desc: "Reliable Y connectors for dividing DC outputs, built with pure copper and PPO insulation for severe environmental conditions.", img: "/images/solar_connectors.png" },
      { id: "tc-connector-lq-1", name: "TC Connector (LQ-1)", spec: "30A, 1500V DC (IEC) / 800V DC (UL)", desc: "Heavy-duty TC connectors engineered for rigorous solar applications and weather resistance.", img: "/images/prod_mc4_connector.png" },
      { id: "acdb", name: "ACDB (AC Distribution Box)", spec: "1–10kW capacity, SPD Type 2", desc: "Enclosures securing critical short-circuit protection. Sizes vary up to 280x190x130mm, featuring 40KA 1P+N surge protection.", img: "/images/prod_acdb_panel.png" },
      { id: "dcdb", name: "DCDB (DC Distribution Box)", spec: "Up to 3 IN/3 OUT, 500V-1000V", desc: "DC combiner boxes featuring configurations from 1-IN/1-OUT to 3-IN/3-OUT with Type 2 SPD integrations.", img: "/images/prod_acdb_panel.png" },
      { id: "isolation-switch", name: "Isolation Switch", spec: "600V–1200V, 16A/32A/63A", desc: "IP65/IP66 rated isolation safety switches strictly designed to handle sustained high DC loads securely.", img: "/images/prod_isolation_switch.png" },
      { id: "earthing-kit", name: "Earthing Kit", spec: "Rods, arrester, clamps, pit chamber", desc: "A comprehensive turnkey grounding kit containing copper-bonded electrodes, BFC compound, pit chamber, and pure copper clamps.", img: "/images/prod_earthing_kit.png" },
      { id: "solar-cables", name: "Solar Cables", spec: "DC, AC, LA, Earthing types", desc: "UV-resistant and flame-retardant tinned copper cables customized for specific capacity from interconnection to main grounding.", img: "/images/products_hero.png" },
    ],
  },
  {
    category: "Structure Items",
    description: "Robust structural hardware including bolts, rails, clips, and base plates.",
    items: [
      { id: "j-bolt-u-bolt", name: "J Bolt & U Bolt", spec: "SS304, 40x40mm to 80x40mm", desc: "Heavy-gauge stainless steel 304 J and U anchoring bolts engineered for strong grip and anti-corrosion properties.", img: "/images/products_hero.png" },
      { id: "base-plate-gi-ms", name: "Base Plate (GI & MS)", spec: "Various sizes up to 150x150x5 mm", desc: "Hot-dipped galvanized and mild steel base plates ensuring maximum surface load stability for structural mounts.", img: "/images/products_hero.png" },
      { id: "anchor-fasteners", name: "Anchor Fasteners", spec: "Wedge & Pin Type, 10x70 to 12x120 mm", desc: "Pin and wedge type expansion anchors providing exceptional pull-out strength in solid concrete placements.", img: "/images/products_hero.png" },
      { id: "rails", name: "Rails", spec: "Aluminium Mono Base, Star, Straight, Slant", desc: "Extruded structural aluminium rails available in up to 300mm configurations for seamless panel alignments.", img: "/images/solar_mounts.png" },
      { id: "mid-end-clamp", name: "Mid & End Clamp", spec: "SS304, 25mm to 35mm", desc: "Precision-milled SS304 clamps designed to firmly fix solar modules varying from 25mm to 35mm thick.", img: "/images/solar_mounts.png" },
      { id: "cable-tie", name: "Cable Tie", spec: "100x2.5mm to 450x4.8mm", desc: "Industrial-grade UV resistant nylon locking ties to safely route exposed AC/DC cables across frameworks.", img: "/images/products_hero.png" },
      { id: "ss-allen-bolt", name: "SS Allen Bolt", spec: "M8x20 mm to M8x35 mm", desc: "High-tensile stainless steel hex socket bolts providing tight mechanical fixation without stripping.", img: "/images/products_hero.png" },
      { id: "nuts-accessories", name: "Nuts & Accessories", spec: "Spring Nut & Rail Nut (Aluminium)", desc: "Pre-threaded aluminium rail nuts and spring inserts streamlining structure assembly speed securely.", img: "/images/solar_mounts.png" },
      { id: "rivets", name: "Rivets", spec: "2.4 mm to 7.8 mm", desc: "Permanent blind structural rivets assuring vibration-proof integrity of delicate panel sheet joints.", img: "/images/products_hero.png" },
      { id: "epdm-roll", name: "EPDM Roll", spec: "10 meters, 25-100mm width", desc: "High-density EPDM rubber weatherproofing tape for superior sealing against rain and heat exposure.", img: "/images/products_hero.png" },
      { id: "zinc-spray", name: "Zinc Spray", spec: "330 ml / 550 ml, Anti-corrosion", desc: "Fast-drying cold galvanizing zinc spray to instantly restore anti-corrosive coating on scuffed or welded joints.", img: "/images/products_hero.png" },
    ],
  },
  {
    category: "Cleaning Items",
    description: "Tools to keep solar installations clean and maintenance-free.",
    items: [
      { id: "sprinkler", name: "Sprinkler", spec: "Nylon & SS, with U clamp", desc: "Automated panel watering sprinklers fitted with Tee joints, U bolts, and durable nylon-steel construction.", img: "/images/products_hero.png" },
      { id: "brush-mop", name: "Brush & Mop", spec: "3m, 4m, 6m long reach", desc: "Telescopic soft-bristle mops and brushes explicitly preventing glass micro-scratches over extensive arrays.", img: "/images/products_hero.png" },
      { id: "water-drain-clip", name: "Water Drain Clip", spec: "30mm to 40mm", desc: "Special clip mechanism snapping onto panel edges to instantly break ponding water adhesion and accelerate drainage.", img: "/images/products_hero.png" },
      { id: "pressure-gun", name: "Pressure Gun", spec: "Power Jet Pro 7X, 5m/7m", desc: "Heavy-duty Power Jet Pro 7X washing gun offering precision nozzles with 5 to 7 meters operative distance.", img: "/images/products_hero.png" },
      { id: "pressure-pump", name: "Pressure Pump", spec: "8 HP High pressure", desc: "Robust 8-horsepower high-pressure water pump sustaining constant output for aggressive dirt and moss removal.", img: "/images/products_hero.png" },
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  for (const category of catalog) {
    const product = category.items.find((item) => item.id === id);
    if (product) {
      return product;
    }
  }
  return undefined;
}
