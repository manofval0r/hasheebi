export interface Project {
  id: string;
  title: string;
  category: "Building" | "Civil" | "Infrastructure" | "Industrial";
  location: string;
  date: string;
  image: string;
  description: string;
  client: string;
  stats: {
    label: string;
    value: string;
  }[];
  features: string[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    id: "residential-complex-delta",
    title: "Steel casing pilling works in progress",
    category: "Civil",
    location: "Kolama 2 Southern Ijaw Bayelsa State",
    date: "2023",
    image: "/images/image.png",
    description: "Specialized deep foundation works involving the installation of steel casing piles to ensure structural stability in challenging terrain. This project focuses on precision drilling and reinforcement techniques essential for supporting heavy-duty infrastructure in the Bayelsa region.",
    client: "Private Developer",
    stats: [
      { label: "Floor Area", value: "2,500 sqm" },
      { label: "Units", value: "12 Apartments" },
      { label: "Duration", value: "14 Months" }
    ],
    features: [
      "Reinforced concrete structure",
      "Custom masonry work",
      "Advanced drainage systems",
      "Premium interior finishing"
    ],
    gallery: [
      "/images/WhatsApp Image 2026-01-29 at 4.18.55 PM (1).jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.55 PM.jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.56 PM (1).jpeg"
    ]
  },
  {
    id: "industrial-facility-asaba",
    title: "Foundation Excavation works in progress",
    category: "Industrial",
    location: "Warri, Delta State",
    date: "2024",
    image: "/images/excavation.png",
    description: "Foundation Excavation works in progress.",
    client: "Private Developer",
    stats: [
      { label: "Clear Span", value: "45 Meters" },
      { label: "Load Capacity", value: "50 Tons/sqm" },
      { label: "Duration", value: "18 Months" }
    ],
    features: [
      "Heavy-duty steel framing",
      "Industrial grade epoxy flooring",
      "Integrated ventilation systems",
      "Fire suppression infrastructure"
    ],
    gallery: [
      "/images/WhatsApp Image 2026-01-29 at 4.18.57 PM (1).jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.57 PM.jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.58 PM.jpeg"
    ]
  },
  {
    id: "land-reclamation-koko",
    title: "Land reclamation works in progress",
    category: "Civil",
    location: "Koko town Delta State",
    date: "2023",
    image: "/images/reclamation.png",
    description: "Major land reclamation works involving dredging and sand filling to create buildable land in the Koko coastal region. The project includes the installation of shoreline protection systems and soil compaction to ensure a solid foundation for future infrastructure development.",
    client: "Private Developer",
    stats: [
      { label: "Length", value: "3.5 Kilometers" },
      { label: "Width", value: "15 Meters" },
      { label: "Duration", value: "10 Months" }
    ],
    features: [
      "Advanced soil conditioning",
      "Reinforced concrete culverts",
      "Bituminous surface dressing",
      "Solar-powered lighting"
    ],
    gallery: [
      "/images/WhatsApp Image 2026-01-29 at 4.18.55 PM.jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.54 PM.jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.57 PM (1).jpeg"
    ]
  },
  {
    id: "tank-base-construction",
    title: "Tank base and helipad construction works in progress",
    category: "Infrastructure",
    location: "Benisede flow station Bayelsa state",
    date: "2024",
    image: "/images/tankbase.png",
    description: "Tank base construction works in progress.",
    client: "Private Developer",
    stats: [
      { label: "Diameter", value: "20 Meters" },
      { label: "Depth", value: "5 Meters" },
      { label: "Duration", value: "10 Months" }
    ],
    features: [
      "Reinforced concrete structure",
      "Advanced drainage systems",
      "Premium interior finishing"
    ],
    gallery: [
      "/images/WhatsApp Image 2026-01-29 at 4.18.55 PM.jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.54 PM.jpeg",
      "/images/WhatsApp Image 2026-01-29 at 4.18.57 PM (1).jpeg"
    ]
  }

];
