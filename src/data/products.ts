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
    category: "Earthing Products",
    description: "Complete range of earthing solutions including pit covers, electrodes, rods, and lightning arresters for optimal safety.",
    items: [
      {
        id: "earthing-pit-cover",
        name: "Earthing Pit Cover",
        spec: "HDPE and Polymer covers for stable installation",
        desc: "Ergonomic design for easy handling & storage. UV stabilized for outdoor durability.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "Ergonomic design for easy handling & storage",
              "Secure and stable installation",
              "Chemical-resistant construction",
              "Heavy load-bearing capacity",
              "UV stabilized for outdoor durability",
              "Weatherproof and maintenance-free",
            ],
          },
          {
            type: "table",
            title: "Product Dimensions",
            headers: ["Model", "Dimensions (mm)", "Material", "Weight (kg)"],
            rows: [
              ["PV-MICRO-6\"", "155(D) x 230(H) x 240(B)", "HDPE", "0.4"],
              ["PV-MINI-7\"", "177(D) x 230(H) x 270(B)", "HDPE", "0.7"],
              ["PV-BIG-11\"", "260(D) x 265(H) x 340(B)", "HDPE", "1.2"],
              ["PV-SQUARE", "300(D) x 300(H) x 270(B)", "HDPE", "2.2"],
              ["PV-PEP-S", "245(D) x 245(H) x 195(B)", "Polymer", "2.4"],
              ["PV-PEP", "308(D) x 308(H) x 215(B)", "Polymer", "2.5"],
              ["PV-PEP-B 300", "500(D) x 500(H) x 315(B)", "Polymer", "5.0"],
            ],
          },
        ],
      },
      {
        id: "rcc-chamber-cover",
        name: "RCC Chamber/Cover",
        spec: "Heavy-duty RCC chambers and covers",
        desc: "Customizable and durable construction for pedestrian and heavy-duty installations with smooth internal surfaces.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "Customizable for heavy-duty",
              "Durable construction for installation",
              "Suitable for pedestrian",
              "Smooth internal surface",
            ],
          },
          {
            type: "list",
            title: "Chamber Sizes (mm)",
            items: ["600x600x300", "450x450x450", "400x300x300", "300x300x300", "300x300x200"],
          },
          {
            type: "list",
            title: "Cover Sizes (mm)",
            items: ["300x300", "450x450", "600x600"],
          },
        ],
      },
      {
        id: "pure-copper-earth-electrode",
        name: "Pure Copper Earth Electrode & Rod",
        spec: "100% pure copper with 48/76mm diameter",
        desc: "High-strength pure copper construction for efficient fault current dissipation.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "100% pure and high-strength copper construction",
              "Efficient fault current dissipation",
              "Quick, easy, and low-maintenance installation",
              "Soil pH compatibility: 5.0 to 8.0",
              "Available with integrated moisture booster packs",
              "Sustainable and eco-safe design",
            ],
          },
          {
            type: "table",
            title: "Sizes",
            headers: ["Product", "Diameter", "Length"],
            rows: [
              ["PV-48/PCR", "48 MM", "1, 2, 3 MTR"],
              ["PV-76/PCR", "76 MM", "1, 2, 3 MTR"],
            ],
          },
        ],
      },
      {
        id: "copper-bonded-solid-earth-rod",
        name: "Copper Bonded Solid Earth Rod",
        spec: "Thick copper layer: 50-250 microns",
        desc: "Standard-compliant copper coating with high tensile strength and anti-corrosive performance.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "Standard-compliant copper coating",
              "Thick copper layer: 50-250 microns",
              "High tensile strength and mechanical flexibility",
              "Anti-corrosive performance",
              "Long lifespan - 15+ years",
              "Reliable and consistent grounding performance",
            ],
          },
          {
            type: "table",
            title: "Sizes",
            headers: ["Product Name", "Diameter", "Length", "Cu Bonding"],
            rows: [
              ["PV-14.2/CBR", "14.2 mm", "1, 2, 3 mtr", "50-250 micron"],
              ["PV-17.2/CBR", "17.2 mm", "1, 2, 3 mtr", "50-250 micron"],
              ["PV-20/CBR", "20 mm", "1, 2, 3 mtr", "50-250 micron"],
              ["PV-25/CBR", "25 mm", "1, 2, 3 mtr", "50-250 micron"],
              ["PV-32/CBR", "32 mm", "1, 2, 3 mtr", "50-250 micron"],
              ["PV-38/CBR", "38 mm", "1, 2, 3 mtr", "50-250 micron"],
            ],
          },
        ],
      },
      {
        id: "copper-plate-earthing",
        name: "Copper Plate Earthing",
        spec: "Various high-conductivity copper plates",
        desc: "High conductivity copper plates for efficient fault current dissipation, ideal for high soil resistivity areas.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "High conductivity for efficient fault current dissipation",
              "Long-lasting corrosion resistance",
              "Ideal for high soil resistivity areas",
              "Complies with IS standards for safe earthing",
              "Maintenance-free operation",
              "Suitable for all types of installations",
              "Stable performance over time",
              "Environmentally safe and reliable",
            ],
          },
          {
            type: "list",
            title: "Plate Sizes (mm)",
            items: ["150x150x3", "300x300x3", "450x450x3", "600x600x3"],
          },
        ],
      },
      {
        id: "gi-earth-electrode",
        name: "GI-Earth Electrode",
        spec: "48/76mm diameter GI Electrodes",
        desc: "Superior corrosion protection with low earth resistance using moisture booster bags.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "Superior corrosion protection",
              "Low earth resistance with moisture booster bags",
              "Rapid fault current dissipation",
              "Quick, hassle-free installation with wide soil compatibility",
              "Minimal maintenance requirements",
            ],
          },
          {
            type: "table",
            title: "Sizes",
            headers: ["Product", "Diameter", "Length"],
            rows: [
              ["PV-48/GIR", "48 MM", "1, 2, 3 MTR"],
              ["PV-76/GIR", "76 MM", "1, 2, 3 MTR"],
            ],
          },
        ],
      },
      {
        id: "copper-bonded-chemical-earth-electrode",
        name: "Copper Bonded Chemical Earth Electrode",
        spec: "Copper-coated flat electrode with chemical filling",
        desc: "High-quality copper-bonded electrode filled with crystalline conductive compound.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "High-quality copper-coated electrode",
              "Durable copper bonding",
              "Copper-coated inner flat electrode",
              "Crystalline conductive compound filling",
              "Corrosion-resistant",
              "Extended service life",
              "Environmentally safe and sustainable design",
              "Maintenance free operation",
            ],
          },
          {
            type: "table",
            title: "Sizes",
            headers: ["Product", "Diameter", "Length", "Copper Bonding"],
            rows: [
              ["PV-48/CBR", "48 MM", "1, 2, 3 mtr", "50-250 micron"],
              ["PV-76/CBR", "76 MM", "1, 2, 3 mtr", "50-250 micron"],
            ],
          },
        ],
      },
      {
        id: "pv-backfill-compound",
        name: "PV Backfill Compound",
        spec: "Graphite-enriched advanced formula",
        desc: "Permanent moisture retention and ultra-low resistivity backfill compound.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "Permanent moisture retention",
              "Ultra-low resistivity",
              "Self-sustaining conductivity",
              "Graphite-enriched advanced formula",
              "Environmentally safe",
              "Ideal for all soil types",
              "Certified quality",
            ],
          },
          {
            type: "list",
            title: "Available in",
            items: ["25 KG", "15 KG", "10 KG"],
          },
        ],
      },
      {
        id: "pv-gi-strips",
        name: "PV All Types of G.I. Strips",
        spec: "Zinc-coated for corrosion protection",
        desc: "Reliable and efficient grounding strips versatile for applications across various industries.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "Zinc-coated for long-term corrosion protection",
              "Reliable and efficient grounding performance",
              "Versatile applications across various industries",
              "Cost-effective and easy to maintain",
              "Custom lengths and bundling options available",
            ],
          },
          {
            type: "list",
            title: "Sizes",
            items: ["25x3mm", "25x6mm", "50x5mm", "50x6mm", "75x5mm", "100x6mm", "100x12mm"],
          },
        ],
      },
      {
        id: "pv-copper-earthing-strip",
        name: "PV Copper Earthing Strip",
        spec: "Superior electrical conductivity",
        desc: "Ideal for high-voltage (HV) earthing systems, providing exceptional corrosion resistance.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Features",
            items: [
              "Superior electrical conductivity for efficient grounding",
              "Ideal for high-voltage (HV) earthing systems",
              "Exceptional corrosion resistance for long-term durability",
              "Wide range of sizes available",
              "Long life with minimal maintenance",
              "Flexible and easy to install",
              "Trusted in critical infrastructure and heavy-duty applications",
            ],
          },
        ],
      },
      {
        id: "copper-spike-lightning-arrester",
        name: "Copper / Copper Bonded Spike Lightning Arrester",
        spec: "Pure copper, Bonded copper, Hollow copper",
        desc: "Crafted from high-purity copper to protect elevated structures from lightning damage.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "parameters",
            data: [
              { label: "Standard", value: "IES - 62305" },
              { label: "Material", value: "Pure copper, Bonded copper, Hollow copper" },
              { label: "Technology", value: "Conventional type" },
            ],
          },
          {
            type: "list",
            title: "Sizes",
            items: [
              "14MM Solid Rod 1/2 meter",
              "16MM Solid Rod 1/2 meter",
              "14MM Hollow Pipe 1/2 meter",
            ],
          },
        ],
      },
      {
        id: "ese-lightning-arrester",
        name: "ESE Lightning Arrester",
        spec: "Electro atmospheric terminal",
        desc: "Engineered system to detect and intercept lightning strikes within its protection radius, conducting up to 200KA.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "table",
            title: "Technical Characteristics",
            headers: ["Parameter", "Value"],
            rows: [
              ["Material", "Stainless Steel"],
              ["Weight", "4.20 kg"],
              ["External Diameter", "187 mm"],
              ["Rod Length", "63 cm"],
              ["Box Length", "67 cm"],
              ["Rod Diameter", "65 mm (Male)"],
              ["IP Code", "Ip67"],
              ["Working Temperature", "-25°C to +90°C"],
              ["Type of Terminal", "Electro atmospheric"],
              ["Internal Insulation", "High Density Polyurethane Resin"],
              ["Standard", "NFC 17-102/2011"],
              ["Grounding Method", "Wire / Tape"],
              ["Max Discharge Energy", "2.2 MJ / Ohm (10/350 us)"],
              ["Advance Time", "60.0 µs"],
            ],
          },
          {
            type: "table",
            title: "Protection Level - Radius in Meters",
            headers: ["Height (m)", "Level 1", "Level 2", "Level 3", "Level 4"],
            rows: [
              ["2", "31", "35", "39", "43"],
              ["3", "47", "52", "58", "64"],
              ["5", "79", "86", "97", "107"],
              ["10", "79", "88", "99", "109"],
              ["20", "80", "89", "102", "113"],
            ],
          },
        ],
      },
      {
        id: "digital-lightning-strike-counter",
        name: "Digital Lightning Strike Counter",
        spec: "0-999999 strikes tracking",
        desc: "Accurately logs and tracks lightning strikes, engineered with robust components for continuous monitoring.",
        img: "/images/products_hero.png",
        details: [
          {
            type: "list",
            title: "Key Features",
            items: [
              "Complies with all relevant lightning protection standards",
              "Backed by a 5-year warranty",
              "8-digit digital display (up to 999999 strikes)",
              "Easy to test using standard testing equipment",
              "Made with premium UV-resistant plastic and stainless steel",
              "Fully waterproof (IP67 rated) for outdoor use",
            ],
          },
          {
            type: "table",
            title: "Technical Characteristics",
            headers: ["Parameter", "Value"],
            rows: [
              ["Current Sensitivity", "500 A (8/20 µs impulse)"],
              ["Operating Range", "Up to 1500 A, Max. 200 kA (8/20 µs)"],
              ["Display", "Digital, 6 or 8 digits"],
              ["Count Range", "0-999999 strikes"],
              ["Operating Temp.", "< 95%"],
              ["Working Humidity", "< 95%"],
              ["Water Resistance", "Ip67"],
              ["Weight", "0.67 kg"],
              ["Dimensions (mm)", "100(D) x 68(H) x 70(W)"],
              ["Type", "Waterproof Lightning Strike Counter"],
            ],
          },
          {
            type: "list",
            title: "ESE Installation Accessories",
            items: [
              "Insulator", "Stray Wire", "U Anchor Bolt", "Anchor Bolt", "U Clamp", "GI Mast"
            ],
          },
        ],
      },
    ],
  },
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
