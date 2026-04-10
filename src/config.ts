import heroImage from './assets/hero-real.jpg';

export const SITE = {
  website: 'https://hopwinslab.com/', // Replace with your actual deployed URL
  author: 'HopWINS Lab',
  description: 'HopWINS Lab @ Johns Hopkins University',
  title: 'HopWINS Lab',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  
  // Lab Info
  labName: 'HopWINS Lab',
  university: 'Johns Hopkins University',
  logo: '/assets/logo-real.svg', // Logo path
  avatar: '/assets/logo-real.svg', // Avatar for SEO/Schema
  email: 'hopwinslab@gmail.com', // Contact email for Join Us page

  // Hero Section (Home Page) - Main content does not need to be translated for 8 languages by default
  hero: {
    title: 'Hop(W)(I)(N)(S) Lab',
    subtitle: 'We are the HopWINS Lab.',
    action: 'View Publications', // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: 'Research', link: '/research', key: 'research' },
    { text: 'Publications', link: '/publications', key: 'publications' },    
    { text: 'Team', link: '/team', key: 'team' },
    { text: 'Join Us', link: '/join', key: 'join' },
    { text: 'Search', link: '/search', key: 'search' },
  ],

  // Custom Pages (Appended after 'Join Us')
  customPages: [
    // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
  ],
  
  // i18n Config
  i18n: {
    enabled: false,
    defaultLocale: 'en',
  }
};

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    link: 'https://hopwinslab.com/',
    active: false,
  },
];

// Default language configuration
export const DEFAULT_LANG: 'zh' | 'en' | 'ja' | 'ko' | 'fr' | 'de' | 'es' | 'ru' = 'en'; 
