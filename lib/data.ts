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
    title: "Premium Residential Complex",
    category: "Building",
    location: "Warri, Delta State",
    date: "2023",
    image: "/images/WhatsApp Image 2026-01-29 at 4.18.54 PM.jpeg",
    description: "A high-end residential development featuring modern architectural design, premium finishes, and integrated smart home systems. This project involved deep excavation, structural reinforcement, and high-quality finishing.",
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
    title: "Industrial Manufacturing Plant",
    category: "Industrial",
    location: "Asaba, Delta State",
    date: "2024",
    image: "/images/WhatsApp Image 2026-01-29 at 4.18.56 PM (3).jpeg",
    description: "Large-scale industrial facility designed for heavy machinery and high-volume operations. The project required specialized flooring, heavy-duty structural steel, and complex utility routing.",
    client: "Global Logistics Ltd",
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
    id: "civil-infrastructure-link",
    title: "Inter-State Access Road",
    category: "Civil",
    location: "Ughelli, Delta State",
    date: "2023",
    image: "/images/WhatsApp Image 2026-01-29 at 4.18.56 PM.jpeg",
    description: "Construction of a dual-carriageway access road involving significant earthworks, soil stabilization, and asphalt laying. Includes concrete drainage and solar street lighting.",
    client: "State Ministry of Works",
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
  }
];
