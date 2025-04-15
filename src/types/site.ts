/**
 * Site configuration types
 * These types define the structure of the site configuration object
 * that will be used throughout the site.
 */

export interface SiteConfig {
  /** Site name */
  name: string;
  /** Site title - used for SEO */
  title?: string;
  /** Site description */
  description: string;
  /** Site URL */
  url: string;
  /** Default language */
  language?: string;
  /** Default OG image for social sharing */
  ogImage: string;
  /** Alt text for OG image */
  ogImageAlt?: string;
  /** Twitter handle */
  twitterHandle: string;
  /** Base URL for the site */
  baseUrl?: string;
  
  /** OpenGraph configuration */
  openGraph?: {
    /** Path to the image used in og:image meta tag */
    image: string;
    /** Twitter card type */
    twitterCard: 'summary' | 'summary_large_image';
    /** Twitter site handle */
    twitterSite: string;
  };
  
  /** Navigation links */
  navLinks: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  
  /** Footer configuration */
  footer?: {
    /** Footer copyright text */
    copyright: string;
    /** Social media links */
    socialLinks: {
      platform: string;
      url: string;
      icon: string;
    }[];
    /** Footer links */
    links: {
      label: string;
      href: string;
      external?: boolean;
    }[];
  };
  
  /** Footer links by section */
  footerLinks: {
    /** Main navigation links */
    main: {
      label: string;
      href: string;
      external?: boolean;
    }[];
    /** Legal and policy links */
    legal: {
      label: string;
      href: string;
      external?: boolean;
    }[];
  };
  
  /** Company information */
  company: {
    /** Legal company name */
    name: string;
    /** Business address */
    address: string;
    /** Contact phone */
    phone: string;
    /** Contact email */
    email: string;
    /** Year founded */
    founded: number;
    /** Business license number */
    license: string;
  };
  
  /** Social media links */
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
    houzz?: string;
    [key: string]: string | undefined;
  };
}