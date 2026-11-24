import type { Faq } from "../home-faq";

export type GuideSection = {
  h2: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string; // URL is /guides/<slug>
  title: string; // H1 and card title
  metaTitle: string; // keep at or under 60 characters
  metaDescription: string; // around 150-160 characters
  excerpt: string; // 1-2 sentences for the guide index
  targetKeyword: string; // the main search phrase this guide is written for
  audience: "agents" | "hosts" | "landlords" | "sellers" | "everyone";
  published: string; // ISO date
  updated: string; // ISO date
  readingMinutes: number;
  intro: string[];
  sections: GuideSection[];
  faqs?: Faq[];
  relatedServices: string[]; // slugs of service or area pages to link to
  cta: { heading: string; body: string };
};
