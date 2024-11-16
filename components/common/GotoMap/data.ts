import { MapArea } from '@/types';

export const MapSectionData: {
  slug: MapArea;
  text: string;
}[] = [
  {
    slug: 'north',
    text: 'North India',
  },
  {
    slug: 'west',
    text: 'West India',
  },
  {
    slug: 'central',
    text: 'Central India',
  },
  {
    slug: 'east',
    text: 'East India',
  },
  {
    slug: 'south',
    text: 'South India',
  },
];

export const MapAreaMenu: {
  region: MapArea;
  links: {
    label: string;
    href: string;
  }[];
}[] = [
  {
    region: 'north',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/' },
      { label: 'Register', href: '/' },
    ],
  },
  {
    region: 'west',
    links: [
      { label: 'Events', href: '/' },
      { label: 'Contact', href: '/' },
    ],
  },
  {
    region: 'central',
    links: [
      { label: 'Sponsors', href: '/' },
      { label: 'Become a Sponsor', href: '/' },
    ],
  },
  {
    region: 'east',
    links: [
      { label: 'Aaveg', href: '/' },
      { label: 'Campus Ambassador', href: '/' },
    ],
  },
  {
    region: 'south',
    links: [
      { label: 'Social', href: '/' },
      { label: 'Core Team', href: '/' },
    ],
  },
];
