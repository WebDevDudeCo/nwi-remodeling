import type { SiteConfig } from '../types/site';

/**
 * Site configuration
 * This object defines all the global site configuration settings.
 * Edit this file to customize for your specific website needs.
 */
export const siteConfig: SiteConfig = {
  name: 'NWI Remodeling',
  title: 'NWI Remodeling - Professional Construction and Remodeling Services',
  description: 'Professional construction and remodeling services for kitchens, bathrooms, basements, home additions, and whole-home renovations.',
  baseUrl: 'https://nwiremodeling.com',
  language: 'en',
  openGraph: {
    image: '/images/og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterSite: '@nwiremodeling'
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' }
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} NWI Remodeling. All rights reserved.`,
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com/nwiremodeling', icon: 'facebook' },
      { platform: 'Instagram', url: 'https://instagram.com/nwiremodeling', icon: 'instagram' },
      { platform: 'Pinterest', url: 'https://pinterest.com/nwiremodeling', icon: 'pinterest' }
    ],
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  },
  url: 'https://nwiremodeling.com',
  ogImage: '/images/og-image.jpg',
  ogImageAlt: 'NWI Remodeling - Professional Construction & Remodeling Services',
  twitterHandle: '@nwiremodeling',
  footerLinks: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact', href: '/contact' },
      { label: 'Blog', href: '/blog' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap.xml' }
    ]
  },
  company: {
    name: 'NWI Remodeling LLC',
    address: '123 Construction Way, Suite 101, Anytown, USA 12345',
    phone: '(555) 555-5555',
    email: 'info@nwiremodeling.com',
    founded: 2005,
    license: 'RMO-123456'
  },
  socialLinks: {
    facebook: 'https://facebook.com/nwiremodeling',
    instagram: 'https://instagram.com/nwiremodeling',
    linkedin: 'https://linkedin.com/company/nwiremodeling',
    twitter: 'https://twitter.com/nwiremodeling',
    pinterest: 'https://pinterest.com/nwiremodeling',
    houzz: 'https://houzz.com/pro/nwiremodeling'
  }
};