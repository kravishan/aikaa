/** Main navigation. Paths are relative to the site base. */
export const NAV = [
  { label: 'Project', path: 'project/' },
  { label: 'Approach', path: 'approach/' },
  { label: 'AI Model Guide', path: 'guide/' },
  { label: 'Safe Use', path: 'safe-use/' },
  { label: 'Blog', path: 'blog/' },
  { label: 'Contact', path: 'contact/' },
];

/** Partner logos live in public/logos. w and h are the image file's pixel size.
 *  show is the display height in px, set per logo so they look the same size. */
export const PARTNERS = [
  { name: 'Haaga-Helia University of Applied Sciences', role: 'Lead partner and coordinator', url: 'https://www.haaga-helia.fi/en', logo: 'logos/haaga-helia.png', w: 580, h: 200, show: 44 },
  { name: 'University of Oulu', role: 'Kainuu and Northern Ostrobothnia cluster', url: 'https://www.oulu.fi/en', logo: 'logos/oulu.png', w: 145, h: 200, show: 64 },
  { name: 'LAB University of Applied Sciences', role: 'Partner', url: 'https://lab.fi/en', logo: 'logos/lab.png', w: 640, h: 148, show: 38 },
  { name: 'Seinäjoki University of Applied Sciences (SeAMK)', role: 'Partner', url: 'https://www.seamk.fi/en/', logo: 'logos/seamk.png', w: 367, h: 200, show: 48 },
];

export const EU_LOGO = { src: 'logos/eu-esf.png', alt: 'European Union, European Social Fund', w: 640, h: 174 };
