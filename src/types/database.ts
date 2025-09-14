export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  slug: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface LiveProject {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  demo_url: string | null;
  github_url: string | null;
  technologies: string[];
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string | null;
  year: number | null;
  doi: string | null;
  url: string | null;
  abstract: string | null;
  created_at: string;
  updated_at: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  period: string | null;
  description: string | null;
  url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Resume {
  id: string;
  title: string;
  file_url: string;
  file_name: string;
  is_current: boolean;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  email: string | null;
  role: string;
  created_at: string;
  updated_at: string;
}