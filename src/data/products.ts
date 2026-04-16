export type ProductDetail =
  | {
      type: "parameters";
      title?: string;
      data: { label: string; value: string }[];
    }
  | { type: "list"; title?: string; items: string[] }
  | { type: "table"; title?: string; headers: string[]; rows: string[][] };

export interface Product {
  id: string;
  name: string;
  spec: string;
  desc: string;
  img: string;
  details?: ProductDetail[];
}

export interface ProductCategory {
  category: string;
  description: string;
  items: Product[];
}

export const catalog: ProductCategory[] = [
  {
    category: "Electrical Items",
    description:
      "Connectors, distribution boxes, isolation switches, and complete earthing protection for solar systems.",
    items: [
      {
        id: "mc4-connector-lq-1",
        name: "Solar MC4 Connector (LQ-1)",
        spec: "30A, 1500V DC (IEC) / 1000V DC (UL)",
        desc: "High-performance MC4 connectors designed for strict environmental requirements and high durability.",
        img: "/images/prod_mc4_connector.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Rated Current", value: "30A" },
              {
                label: "Rated Voltage",
                value: "1500V DC (IEC) / 1000V DC (UL)",
              },
              { label: "Ambient Temperature Range", value: "-40°C to +90°C" },
              { label: "Degree of Protection", value: "IP68 Mated | IP2X Unmated" },
              { label: "Contact Resistance", value: "0.5mΩ" },
              { label: "Contact Material", value: "Copper with Tin plated" },
              { label: "Insulation Material", value: "PPO" },
              { label: "Locking System", value: "Snap-in (nur / only MC4)" },
              { label: "Flame Class", value: "UL94-HB / UL94-V0" },
              { label: "Cable Size", value: "2.5 to 6mm²" },
              { label: "Protection Class", value: "II" },
              { label: "Application Class", value: "Class A" },
              { label: "Standard", value: "EN 50521 : 2008" },
            ],
          },
        ],
      },
      {
        id: "branch-connector",
        name: "Branch Connector",
        spec: "50A, 1500V DC (IEC) / 1000V DC (UL)",
        desc: "Durable branch connectors designed for robust parallel wiring in solar layouts.",
        img: "/images/solar_connectors.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Rated Current", value: "50A" },
              {
                label: "Rated Voltage",
                value: "1500V DC (IEC) / 1000V DC (UL)",
              },
              { label: "Ambient Temperature Range", value: "-40°C to +90°C" },
              { label: "Degree of Protection", value: "IP68 Mated | IP2X Unmated" },
              { label: "Contact Resistance", value: "0.5mΩ" },
              { label: "Contact Material", value: "Copper with Tin plated" },
              { label: "Insulation Material", value: "PPO" },
              { label: "Locking System", value: "Snap-in (nur / only MC4)" },
              { label: "Flame Class", value: "UL94-HB / UL94-V0" },
              { label: "Cable Size", value: "2.5 to 6mm²" },
              { label: "Protection Class", value: "II" },
              { label: "Application Class", value: "Class A" },
              { label: "Standard", value: "EN 50521 : 2008" },
            ],
          },
        ],
      },
      {
        id: "y-connector",
        name: "Y Connector",
        spec: "30A, 1500V DC (IEC) / 1000V DC (UL)",
        desc: "Reliable Y connectors for dividing DC outputs efficiently.",
        img: "/images/solar_connectors.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Rated Current", value: "30A" },
              {
                label: "Rated Voltage",
                value: "1500V DC (IEC) / 1000V DC (UL)",
              },
              { label: "Ambient Temperature Range", value: "-40°C to +90°C (IEC)" },
              { label: "Degree of Protection", value: "IP67 mated | IP2X unmated" },
              { label: "Contact Resistance", value: "0.5mΩ" },
              { label: "Contact Material", value: "Copper with Tin plated" },
              { label: "Insulation Material", value: "PPO" },
              { label: "Locking System", value: "Snap-in" },
              { label: "Flame Class", value: "UL94-HB / UL94-V0" },
              { label: "Cable Size", value: "2.5 to 6mm²" },
              { label: "Protection Class", value: "II" },
              { label: "Application Class", value: "Class A" },
              { label: "Standard", value: "EN 50521 : 2008" },
            ],
          },
        ],
      },
      {
        id: "tc-connector-lq-1",
        name: "TC Connector (LQ-1)",
        spec: "30A, 1500V DC (IEC) / 800V DC (UL)",
        desc: "Heavy-duty TC connectors engineered for rigorous solar applications.",
        img: "/images/prod_mc4_connector.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Rated Current", value: "30A" },
              {
                label: "Rated Voltage",
                value: "1500V DC (IEC) / 800V DC (UL)",
              },
              { label: "Ambient Temperature Range", value: "-40°C to +90°C" },
              { label: "Degree of Protection", value: "IP67 Mated | IP2X Unmated" },
              { label: "Contact Resistance", value: "0.5mΩ" },
              { label: "Contact Material", value: "Copper with Tin plated" },
              { label: "Insulation Material", value: "PPO" },
              { label: "Locking System", value: "Snap-in (nur / only MC4)" },
              { label: "Flame Class", value: "UL94-HB / UL94-V0" },
              { label: "Cable Size", value: "2.5 to 6mm²" },
              { label: "Protection Class", value: "II" },
              { label: "Application Class", value: "Class A" },
              { label: "Standard", value: "EN 50521 : 2008" },
            ],
          },
        ],
      },
      {
        id: "acdb-dcdb-panels",
        name: "ACDB / DCDB Panels",
        spec: "Comprehensive range of distribution panels",
        desc: "Essential AC and DC distribution boxes equipped with high-quality MCB, SPD, and fuses for solar circuit protection.",
        img: "/images/prod_acdb_panel.png",
        details: [
          {
            type: "table",
            title: "ACDB Detail",
            headers: ["Model Size", "MCB Detail", "SPD Detail", "Main Make Enclosure"],
            rows: [
              ["1–6KW (1 Phase)", "32A, 2 Pole, C Curve", "40KA, 1P+N", "As Per Client Requirement\n180 x 130 x 100 mm"],
              ["6–10KW (3 Phase)", "32A, 2 Pole, C Curve", "40KA, 1P+N", "As Per Client Requirement\n280 x 190 x 130 mm"],
            ],
          },
          {
            type: "table",
            title: "DCDB (MCB Type)",
            headers: ["Model", "Configuration", "MCB / Rating", "SPD Rating", "Enclosure Size"],
            rows: [
              ["1–3.3KW", "1 IN, 1 OUT", "500V, 16A", "600V, Type 2", "180 x 130 x 100 mm"],
              ["4–6KW", "2 IN, 2 OUT", "500V, 16A", "600V, Type 2", "280 x 190 x 130 mm"],
              ["7–10KW", "2 IN, 1 OUT", "800V, 16A (X2)", "1000V, Type 2 (X2)", "280 x 190 x 130 mm"],
              ["15KW", "3 IN, 3 OUT", "800V, 16A (X3)", "1000V, Type 2 (X3)", "380 x 230 x 130 mm"],
            ],
          },
          {
            type: "table",
            title: "DCDB (Fuse Type)",
            headers: ["Model", "Configuration", "Fuse Detail", "SPD Rating", "Enclosure Size"],
            rows: [
              ["1–3.3KW", "1 IN, 1 OUT", "1000V, 20A / 32A", "600V, Type 2", "180 x 130 x 100 mm"],
              ["4–7KW", "2 IN, 2 OUT", "1000V, 16A / 32A", "600V, Type 2", "280 x 190 x 130 mm"],
              ["7–10KW", "2 IN, 2 OUT", "1000V, 16A / 32A", "1000V, Type 2", "280 x 190 x 130 mm"],
            ],
          },
        ],
      },
      {
        id: "solar-earthing-kit",
        name: "Solar Earthing Kit",
        spec: "Complete Lightning and Earthing Solution",
        desc: "A comprehensive turnkey grounding kit ensuring system and personnel safety.",
        img: "/images/prod_earthing_kit.png",
        details: [
          {
            type: "list",
            title: "Components Included",
            items: [
              "Earthing Rods / Electrodes",
              "Lightning Arrester (LA)",
              "Clamps & Connectors",
              "Earth Pit Chamber",
              "Earth Enhancement Compound (BFC)",
            ],
          },
        ],
      },
      {
        id: "isolation-switch",
        name: "Isolation Switch",
        spec: "600V to 1200V / 16A to 63A",
        desc: "High-quality isolation protection from direct currents up to 1200V. Rated for IP65/IP66 outdoor use.",
        img: "/images/prod_isolation_switch.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Voltage Range", value: "600V to 1200V" },
              { label: "Current Rating", value: "16A to 32A or 63A" },
              { label: "Protection", value: "IP65 or IP66 water & dust resistance" },
            ],
          },
        ],
      },
      {
        id: "solar-cable-types",
        name: "Solar Cable Types",
        spec: "DC, AC, LA, and Earthing Variants",
        desc: "High quality UV-resistant solar cables customized for different segments like DC, AC, LA, and Earthing.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Available Types",
            items: [
              "DC Cable",
              "AC Cable",
              "LA Cable",
              "Earthing Cable",
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Structure Items",
    description:
      "Robust structural hardware including bolts, rails, clips, and base plates ensuring solid foundation and mounts.",
    items: [
      {
        id: "j-bolt",
        name: "J. Bolt — SS304",
        spec: "SS304 for varying pipe sizes",
        desc: "Premium quality stainless steel 304 J Bolts.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "For Pipe Size",
            items: ["40 x 40 MM", "50 x 50 MM", "60 x 40 MM", "80 x 40 MM"],
          },
        ],
      },
      {
        id: "u-bolt",
        name: "U. Bolt — SS304",
        spec: "SS304 for varying pipe sizes",
        desc: "Premium quality stainless steel 304 U Bolts.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "For Pipe Size",
            items: ["40 x 40 MM", "50 x 50 MM", "60 x 40 MM", "80 x 40 MM"],
          },
        ],
      },
      {
        id: "gi-ms-base-plate",
        name: "G.I & M.S. Base Plate",
        spec: "Sizes ranging from 125x50x3mm to 150x150x5mm",
        desc: "Durable Galvanized Iron and Mild Steel ground plating.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Plate Size Options",
            items: [
              "125 x 125 x 3 mm",
              "125 x 125 x 4 mm",
              "125 x 125 x 5 mm",
              "125 x 50 x 3 mm",
              "150 x 150 x 4 mm",
              "150 x 150 x 5 mm",
            ],
          },
        ],
      },
      {
        id: "wedge-anchor-fastener",
        name: "Wadge Anchor Fastener",
        spec: "Available heavily tested wedge anchors",
        desc: "Wedge anchor fastener suitable for heavy load applications on un-cracked concrete.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Fastener Size",
            items: [
              "10 X 70 mm",
              "10 X 100 mm",
              "10 X 120 mm",
              "12 X 100 mm",
              "12 X 120 mm",
            ],
          },
        ],
      },
      {
        id: "pin-type-anchor-fastener",
        name: "PIN Type Anchor Fastener",
        spec: "Available heavily tested pin anchors",
        desc: "Pin type expansion anchor assuring strong grips across concrete substrates.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Fastener Size",
            items: [
              "10 X 70 mm",
              "10 X 100 mm",
              "10 X 120 mm",
              "12 X 100 mm",
              "12 X 120 mm",
            ],
          },
        ],
      },
      {
        id: "aluminium-mono-base-rail",
        name: "Aluminium Mono Base Rail & Profiles",
        spec: "Extruded Aluminium Structurals",
        desc: "Precision extruded structural aluminium rails and star/straight/slant rails.",
        img: "/images/solar_mounts.png",
        details: [
          {
            type: "table",
            title: "Rail Options",
            headers: ["Type", "Size"],
            rows: [
              ["Aluminium Mono Base Rail", "100 x 300 MM"],
              ["Aluminium Mono Base Rail", "100 x 100 MM"],
              ["Aluminium Mono Base Rail", "41 x 300 MM"],
              ["Aluminium Mono Base Rail", "31 x 100 MM"],
              ["Star Rail", "60 x 300 MM"],
              ["Straight Rail", "60 x 300 MM"],
              ["Straight Rail", "70 x 300 MM"],
              ["Slant Rail", "70 x 300 MM"],
              ["Note", "All possible customized sizes available."],
            ],
          },
        ],
      },
      {
        id: "mid-end-clamp",
        name: "Mid & End Clamp — SS304",
        spec: "SS304 for varying profile thickness",
        desc: "High-grade SS304 End clamps and Mid clamps.",
        img: "/images/solar_mounts.png",
        details: [
          {
            type: "list",
            title: "For Pipe / Panel Thickness",
            items: ["25 MM", "30 MM", "35 MM"],
          },
        ],
      },
      {
        id: "cable-tie-aluminium",
        name: "Cable Tie — Aluminium / Hardened",
        spec: "Multiple tie specifications available",
        desc: "Rugged cable ties for routing high-tension cables.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Cable Tie Size",
            items: [
              "100 x 2.5 mm",
              "150 x 3.6 mm | 150 x 4.6 mm",
              "250 x 3.6 mm | 250 x 4.8 mm",
              "300 x 4.8 mm | 400 x 4.8 mm | 450 x 4.8 mm",
            ],
          },
        ],
      },
      {
        id: "ss-allen-bolt",
        name: "SS Allen Bolt (Single & Double Hole)",
        spec: "M8 Socket Bolts",
        desc: "Durable Stainless Steel Allen Bolts available in single and double hole configurations.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Size",
            items: ["M8 x 20 mm", "M8 x 25 mm", "M8 x 35 mm"],
          },
        ],
      },
      {
        id: "spring-nut-aluminium",
        name: "Spring Nut — Aluminium",
        spec: "Various sizing available",
        desc: "Aluminium spring nuts to assist in rail and truss configurations.",
        img: "/images/solar_mounts.png",
        details: [
          {
            type: "list",
            title: "Spring Nut Size",
            items: ["30 x 8 mm", "50 x 8 mm"],
          },
        ],
      },
      {
        id: "rail-nut-aluminium",
        name: "Rail Nut — Aluminium",
        spec: "T-Slot rail inserts",
        desc: "Pre-threaded aluminium rail nuts designed for quick placement and secure holds.",
        img: "/images/solar_mounts.png",
        details: [
          {
            type: "list",
            title: "Rail Nut Size",
            items: ["40 x 20 x 8 mm", "18 x 10 mm"],
          },
        ],
      },
      {
        id: "pop-rivet-aluminium",
        name: "Pop Rivet — Aluminium",
        spec: "Wide range of rivet diameters",
        desc: "Blind aluminium pop rivets forming seamless, strong mechanical bonds at structural sheet joints.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Pop Rivet Size",
            items: [
              "2.4 mm", "3.0 mm", "3.2 mm", "4.0 mm", "4.8 mm", 
              "5.0 mm", "6.0 mm", "6.4 mm", "7.8 mm"
            ],
          },
        ],
      },
      {
        id: "epdm-roll",
        name: "EPDM Roll",
        spec: "Thick weatherproof sealing",
        desc: "High density EPDM utility rolling tapes for waterproofing.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Roll Length", value: "10 Meter" },
              { label: "Width", value: "25mm to 100mm" },
              { label: "Thickness", value: "3mm to 10mm" },
            ],
          },
        ],
      },
      {
        id: "zinc-spray",
        name: "Zinc Spray",
        spec: "Anti-corrosion aerosol spray",
        desc: "Fast-drying high-quality zinc coating for instant protection of fresh cuts or welded joints.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Available Sizes", value: "330 ml & 550 ml" },
              { label: "Quality", value: "High-Quality" },
              { label: "Type", value: "Fast-Drying Anti-Corrosion Spray" },
              { label: "Finish", value: "Durable Finish & Long-Lasting" },
            ],
          },
        ],
      },
    ],
  },
  {
    category: "Cleaning Items",
    description: "Specialized tools like brushes, pressure washers, and draining clips to keep solar installations flawlessly clean.",
    items: [
      {
        id: "nylon-ss-sprinkler",
        name: "Naylon & SS Sprinkler",
        spec: "Automated panel watering units",
        desc: "Mounted sprinklers specifically designed to cool down and wash solar cell surfaces seamlessly.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Accessories Included",
            items: ["With U Clamp", "Tee", "U Bolt", "Nuts"],
          },
        ],
      },
      {
        id: "cleaning-brush-mop",
        name: "Cleaning Brush & MOP (Naylon)",
        spec: "Telescopic handling, up to 6m",
        desc: "Long-reach soft cleaning brush/mop engineered to scrub surfaces effectively without micro-scratching glass.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Length Available",
            items: ["3 Meter", "4 Meter", "6 Meter"],
          },
        ],
      },
      {
        id: "water-drain-clip",
        name: "Water Drain Clip",
        spec: "30mm to 40mm",
        desc: "Edge-mounted clips that drastically accelerate panel water drainage preventing mud accumulation on bottom rails.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Size Settings",
            items: ["30 MM", "33 MM", "35 MM", "40 MM"],
          },
        ],
      },
      {
        id: "pressure-gun-power-jet",
        name: "Pressure Gun — Power Jet Pro 7X",
        spec: "60-80 Bar, Multi-nozzle",
        desc: "High-pressure washer gun designed to cut through hardened bird droppings and extreme grime.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Model", value: "Power Jet Pro 7X" },
              { label: "Pipe Length", value: "5 & 7 Meter" },
              { label: "Pressure", value: "60–80 Bar" },
            ],
          },
        ],
      },
      {
        id: "pressure-pump",
        name: "Pressure Pump",
        spec: "High Power 8 HP Engine",
        desc: "Industrial-grade high-volume washing pump intended for cleaning massive mega-watt scale solar farms.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Model", value: "High Pressure Pump" },
              { label: "Power", value: "8 HP" },
              { label: "Pressure", value: "120 BAR – 1800W" },
            ],
          },
        ],
      },
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
