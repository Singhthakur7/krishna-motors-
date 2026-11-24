export const BUSINESS_INFO = {
  name: 'Krishna Motors',
  shortCode: 'KM',
  sinceYear: 2007,
  yearsExperience: '19+',
  businessLine: 'Car and Bike Spare Parts and Lubricants',
  tagline: 'Drive Better... Go Further...',
  subHeadline: 'Your Trusted Partner for Car & Bike Spare Parts and Lubricants',
  primaryPhoneDisplay: '+91 7814090007',
  primaryPhoneRaw: '+917814090007',
  primaryPhoneShort: '7814090007',
  secondaryPhoneDisplay: '+91 9319090007',
  secondaryPhoneRaw: '+919319090007',
  whatsappNumber: '917814090007',
  websiteDisplay: 'www.krishnamotorspatiala.com',
  websiteUrl: 'https://www.krishnamotorspatiala.com',
  address:
    'Opposite Amar Bagh, Street No. 5 (Gali No. 5), Near Jashan Palace, Bhadson Road, Patiala - 147001, Punjab',
  shortLocation: 'Bhadson Road, Patiala',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=Krishna+Motors+Opposite+Amar+Bagh+Street+No+5+Near+Jashan+Palace+Bhadson+Road+Patiala+147001+Punjab',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Near%20Jashan%20Palace%2C%20Bhadson%20Road%2C%20Patiala%20147001&t=&z=16&ie=UTF8&iwloc=&output=embed',
  social: {
    facebookLabel: 'Krishna Motors',
    facebookUrl: 'https://www.facebook.com/search/top/?q=Krishna%20Motors%20Patiala',
    instagramLabel: 'Krishna Motors',
    instagramUrl: 'https://www.instagram.com/explore/search/keyword/?q=Krishna%20Motors%20Patiala',
  },
  assets: {
    logo: '/assets/aistudio/IMG-20261124-WA0007_250417fe.jpg',
    heroPoster: '/assets/aistudio/IMG-20261124-WA0008_66d7b67b.jpg',
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_URL = buildWhatsAppUrl(
  'Hello Krishna Motors, I want to inquire about spare parts.'
);

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Parts & Oils', href: '#parts' },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SUPPORTED_BRANDS = [
  'MARUTI SUZUKI',
  'HYUNDAI',
  'TATA MOTORS',
  'MAHINDRA',
  'HONDA',
  'TOYOTA',
  'KIA',
  'ROYAL ENFIELD',
  'HERO',
  'BAJAJ',
  'TVS',
  'YAMAHA',
  'SUZUKI',
  'CASTROL',
  'MOTUL',
  'SHELL',
  'BOSCH',
] as const;

export interface TrustPillar {
  index: string;
  title: string;
  description: string;
  iconKey: 'shield' | 'layers' | 'award' | 'headset';
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    index: '01',
    title: 'Genuine Products',
    description:
      '100% authentic OEM & branded spare parts with zero compromise.',
    iconKey: 'shield',
  },
  {
    index: '02',
    title: 'Wide Range',
    description:
      'Complete inventory of car, bike & scooter parts under one roof.',
    iconKey: 'layers',
  },
  {
    index: '03',
    title: 'Reliable Quality',
    description:
      'Tested lubricants and durable components trusted by mechanics since 2007.',
    iconKey: 'award',
  },
  {
    index: '04',
    title: 'Customer Support',
    description:
      'Fast, honest guidance to match the exact right part for your vehicle.',
    iconKey: 'headset',
  },
];

export type PartFilterCategory = 'all' | 'car' | 'bike' | 'lubricants';

export interface PartCategoryItem {
  id: string;
  title: string;
  subtitle: string;
  categories: Exclude<PartFilterCategory, 'all'>[];
  specs: string[];
  iconKey: 'droplets' | 'wind' | 'disc' | 'cog' | 'zap' | 'wrench';
}

export const PART_CATEGORIES: PartCategoryItem[] = [
  {
    id: 'engine-oils-lubricants',
    title: 'Engine Oils & Synthetic Lubricants',
    subtitle: 'Peak thermal stability & wear protection',
    categories: ['car', 'bike', 'lubricants'],
    specs: [
      'Full-synthetic, semi-synthetic & mineral engine oils',
      'Transmission gear oils & differential fluids',
      'Radiator coolants & high-temp brake fluids',
    ],
    iconKey: 'droplets',
  },
  {
    id: 'air-oil-fuel-filters',
    title: 'Air, Oil & Fuel Filters',
    subtitle: 'High-flow OEM filtration systems',
    categories: ['car', 'bike', 'lubricants'],
    specs: [
      'Engine air & cabin AC filtration elements',
      'Spin-on & cartridge oil filters for clean lubrication',
      'Precision diesel & petrol fuel filters for peak mileage',
    ],
    iconKey: 'wind',
  },
  {
    id: 'brake-systems',
    title: 'Brake Systems',
    subtitle: 'Confident, fade-free stopping power',
    categories: ['car', 'bike'],
    specs: [
      'Ventilated disc rotors & precision-cast drums',
      'Ceramic & semi-metallic brake pads and brake shoes',
      'Heavy-duty brake cables, master cylinders & calipers',
    ],
    iconKey: 'disc',
  },
  {
    id: 'clutch-belts-transmission',
    title: 'Clutch, Belts & Transmission',
    subtitle: 'Smooth power delivery & drivetrain life',
    categories: ['car', 'bike'],
    specs: [
      'Complete clutch plate, pressure plate & release bearing sets',
      'OEM timing belts, V-belts & drive tensioners',
      'Heavy-duty bike chain-sprocket kits & wheel bearings',
    ],
    iconKey: 'cog',
  },
  {
    id: 'electricals-ignition',
    title: 'Electricals & Ignition',
    subtitle: 'Instant cold-starts & dependable output',
    categories: ['car', 'bike'],
    specs: [
      'Iridium & standard spark plugs, ignition coils & CDI units',
      'Automotive batteries, alternators & starter motors',
      'Headlamp bulbs, relays, switches & engine sensors',
    ],
    iconKey: 'zap',
  },
  {
    id: 'body-service-parts',
    title: 'Complete Car & Bike Body/Service Parts',
    subtitle: 'Everything needed for scheduled upkeep',
    categories: ['car', 'bike'],
    specs: [
      'Shock absorbers, suspension bushings & link rods',
      'Wiper blades, rear-view mirrors, cables & levers',
      'Head gaskets, oil seals & periodic service kits',
    ],
    iconKey: 'wrench',
  },
];

export const HERITAGE_STATS = [
  { value: '2007', label: 'Established' },
  { value: '100%', label: 'Genuine Parts' },
  { value: '2-in-1', label: 'Car & Bike Hub' },
] as const;
