export type ProjectCategory = "residential" | "commercial" | "pg" | "plots";

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  tagline: string;
  description: string;
  highlights: string[];
  images: string[];
  mapUrl?: string;
}

export const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "pg", label: "PG / Studio Living" },
  { id: "plots", label: "Plots" },
];

const ANALA_DIR = "/images/ANALA FINAL VIEW 18.07.2025";
const SAAMARTHYA_DIR = "/images/SAAMARTHYA HD IMAGES";
const SPECTRUM_DIR = "/images/SPECTRUM HD IMAGES";
const SPARSH_DIR = "/images/SPARSH";
const VIENNA_DIR = "/images/VIENNA (PG) HD IMAGES";

export const PROJECTS: Project[] = [
  {
    slug: "sindur-anala",
    name: "Sindur Anala",
    category: "residential",
    location: "Beside Sports Complex, Naranpura",
    tagline: "3 BHK Lifestyle Homes & 4 BHK Penthouses — Only 86 Exclusive Units.",
    description:
      "Sindur Anala rises beside the Naranpura Sports Complex with a podium living concept and no common walls, giving every home complete privacy. Road- and garden-facing units, two allotted individual car parkings, and a no-vehicle-zone podium floor make this one of Naranpura's most peaceful, modern addresses.",
    highlights: [
      "3 BHK — 258 | 262 | 267 Sq. Yards",
      "4 BHK Penthouse — 376 Sq. Yards + 103 Sq. Yards Carpet Terrace",
      "Podium living — no common walls, 100% privacy",
      "2 allotted individual car parkings",
      "Jain Derasar & Haveli within walking distance",
    ],
    images: [
      `${ANALA_DIR}/01_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/02_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/03_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/04_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/05_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/06_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/07_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/08_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/09_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/10_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/11_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/12_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/13_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/14_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/15_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/16_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/17_01_ALIGN_SINDUR ANALA.jpg`,
      `${ANALA_DIR}/18_ALIGN_SINDUR ANALA.jpg`,
    ],
  },
  {
    slug: "sindur-saamarthya",
    name: "Sindur Saamarthya",
    category: "residential",
    location: "Naranpura, Ahmedabad",
    tagline: "A Signature Luxury Address. G+11, Only 42 Exclusive Units.",
    description:
      "Designed for refined living and built for timeless value, Sindur Saamarthya is a four-side-open single tower with only four units per floor. The sample house is ready and possession can be offered within a short timeframe — a rare, peaceful address close to the Sports Complex with no vehicle parking on the ground floor.",
    highlights: [
      "G+11 single tower, 4 units per floor",
      "42 units — 258 Sq. Yd & 241 Sq. Yd residences",
      "2 car parkings per unit (hydraulic, basement)",
      "Dedicated EV charging for every home",
      "Landscaped garden, gazebo & multipurpose hall",
    ],
    images: [
      `${SAAMARTHYA_DIR}/Nightview.jpg`,
      `${SAAMARTHYA_DIR}/cornerview.jpg`,
      `${SAAMARTHYA_DIR}/Rightsideview.jpg`,
      `${SAAMARTHYA_DIR}/Rightcornerview copy.jpg`,
      `${SAAMARTHYA_DIR}/Leftsideview.jpg`,
      `${SAAMARTHYA_DIR}/Club view.jpg`,
      `${SAAMARTHYA_DIR}/childrenarea.jpg`,
      `${SAAMARTHYA_DIR}/topview.jpg`,
    ],
  },
  {
    slug: "sindur-sparsh",
    name: "Sindur Sparsh",
    category: "residential",
    location: "Naranpura, Ahmedabad",
    tagline: "G+7 Single Tower. Only 28 Exclusive Families.",
    description:
      "Sindur Sparsh is an intimate, premium residential address built for just 28 families, with plenty of daylight, ventilation, and generous balconies at every home. Ground-floor shops add everyday convenience, while thoughtful amenities keep the community connected.",
    highlights: [
      "G+7 floors, only 28 exclusive homes",
      "Spacious 262 Sq. Yd premium residences",
      "2 car parkings per unit (hydraulic, basement)",
      "Dedicated EV charging for every home",
      "Landscaped garden, gazebo & multipurpose court",
    ],
    images: [
      `${SPARSH_DIR}/Frontview.jpg`,
      `${SPARSH_DIR}/Nightview.jpg`,
      `${SPARSH_DIR}/Gardenview.jpg`,
      `${SPARSH_DIR}/Gateview.jpg`,
      `${SPARSH_DIR}/Leftview.jpg`,
      `${SPARSH_DIR}/Topview.jpg`,
    ],
  },
  {
    slug: "sindur-spectrum",
    name: "Sindur Spectrum",
    category: "commercial",
    location: "Nr. Naranpura Sports Complex, Pragati Nagar, Ahmedabad",
    tagline: "Showrooms & Offices on a Prime 2-Road Corner.",
    description:
      "Sindur Spectrum is a prestigious G+7 address where brands thrive and businesses grow. Every unit is road-facing with extra terrace space at the 2nd, 4th, and 6th floors, and ground floor plus two basement levels keep parking hassle-free for visitors and tenants alike.",
    highlights: [
      "G+7 floors on a 2-road corner plot",
      "Every unit road-facing",
      "Ground floor + 2 basements for parking",
      "One allotted parking per unit",
      "Extra terrace space at 2nd, 4th & 6th floors",
    ],
    images: [
      `${SPECTRUM_DIR}/view_01.jpg`,
      `${SPECTRUM_DIR}/view_02.jpg`,
      `${SPECTRUM_DIR}/view_03.jpg`,
      `${SPECTRUM_DIR}/view_04.jpg`,
      `${SPECTRUM_DIR}/view_05.jpg`,
      `${SPECTRUM_DIR}/view_06.jpg`,
      `${SPECTRUM_DIR}/view_07.jpg`,
    ],
  },
  {
    slug: "sindur-vienna",
    name: "Sindur Vienna",
    category: "pg",
    location: "Ambawadi, Ahmedabad",
    tagline: "100% PG Model. Fixed Rental Income Investment.",
    description:
      "Sindur Vienna is a 5-storey managed living address on a 2-road corner plot, purpose-built for assured rental income from the very first month. With 375 beds across 21 units per floor, every room comes with an attached toilet and access to modern shared amenities.",
    highlights: [
      "375 beds across 21 units per floor",
      "Each room with an attached toilet",
      "Basement parking facility",
      "Indoor games, library & large-scale gym",
      "Assured rental income from month one",
    ],
    images: [
      `${VIENNA_DIR}/PG Frontview.jpg`,
      `${VIENNA_DIR}/PG Arcview.jpg`,
      `${VIENNA_DIR}/PG Cornerview01-3.jpg`,
      `${VIENNA_DIR}/PG Leftsideview.jpg`,
    ],
  },
  {
    slug: "sindur-amulyam",
    name: "Sindur Amulyam",
    category: "plots",
    location: "50 Minutes from Ahmedabad",
    tagline: "Premium Residential Plots. Only 49 Units.",
    description:
      "Sindur Amulyam offers low-density, club-class plotted living just 50 minutes from Ahmedabad. With near-by possession and generous plot sizes, it's built for weekend homes, farmhouses, or a long-term investment in land — without giving up on peace and privacy.",
    highlights: [
      "Plot sizes from 500 to 1,400 Sq. Yards",
      "Only 49 units — low-density living",
      "Club-class amenities",
      "Near-by possession",
      "Ideal for weekend homes & farmhouses",
    ],
    images: ["/images/Modern Desert Home.png"],
  },
];

export function getProjectsByCategory(category: ProjectCategory) {
  return PROJECTS.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
