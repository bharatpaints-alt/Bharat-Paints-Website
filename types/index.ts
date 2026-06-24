export type Division = {
  id: string;
  name: string;
  shortName?: string;
  description: string;
  icon: string;
  color: "navy" | "magenta" | "yellow";
  href: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
  alt: string;
  highlighted?: boolean;
};

export type ProcessStep = {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
};

export type Product = {
  id: string;
  name: string;
  tier: "economy" | "premium" | "luxury";
  price: string;
  mrp?: string;
  features: string[];
  bestseller?: boolean;
};

export type ProjectCase = {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
  caseStudyUrl?: string;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  projectType: string;
  quote: string;
  avatar: string;
  rating: number;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
};
