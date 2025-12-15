import { Asset } from 'contentful';

export interface HeroSection {
  title: string;
  subtitle: string;
  checklistItems: string[];
  ctaText: string;
  ctaLink: string;
  images: Asset[];
  reviewText: string;
  reviewerName: string;
  reviewerImage: Asset;
  rating: number;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
  image: Asset;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  description?: string;
  price?: number;
  image: Asset;
  slug: string;
}

export interface ImpactStat {
  value: string;
  unit: string;
  label: string;
  icon: string;
}

