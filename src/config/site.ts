import type { SiteConfig } from '../types/site';

/**
 * Site configuration
 * This object defines all the global site configuration settings.
 * Edit this file to customize for your specific website needs.
 */
export const siteConfig: SiteConfig = {
  name: 'Elite Remodeling',
  title: 'Elite Remodeling - Professional Construction and Remodeling Services',
  description: 'Professional construction and remodeling services for kitchens, bathrooms, basements, home additions, and whole-home renovations.',
  baseUrl: 'https://eliteremodeling.com',
  language: 'en',
  openGraph: {
    image: '/images/og-image.jpg',
    twitterCard: 'summary_large_image',
    twitterSite: '@eliteremodeling'
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' }
  ],
  footer: {
    copyright: `© ${new Date().getFullYear()} Elite Remodeling. All rights reserved.`,
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com/eliteremodeling', icon: 'facebook' },
      { platform: 'Instagram', url: 'https://instagram.com/eliteremodeling', icon: 'instagram' },
      { platform: 'Pinterest', url: 'https://pinterest.com/eliteremodeling', icon: 'pinterest' }
    ],
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  },
  url: 'https://eliteremodeling.com',
  ogImage: '/images/og-image.jpg',
  ogImageAlt: 'Elite Remodeling - Professional Construction & Remodeling Services',
  twitterHandle: '@eliteremodeling',
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
    name: 'Elite Remodeling LLC',
    address: '123 Construction Way, Suite 101, Anytown, USA 12345',
    phone: '(555) 555-5555',
    email: 'info@eliteremodeling.com',
    founded: 2005,
    license: 'RMO-123456'
  },
  socialLinks: {
    facebook: 'https://facebook.com/eliteremodeling',
    instagram: 'https://instagram.com/eliteremodeling',
    linkedin: 'https://linkedin.com/company/eliteremodeling',
    twitter: 'https://twitter.com/eliteremodeling',
    pinterest: 'https://pinterest.com/eliteremodeling',
    houzz: 'https://houzz.com/pro/eliteremodeling'
  }
};