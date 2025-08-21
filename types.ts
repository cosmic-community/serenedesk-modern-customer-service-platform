// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Product types
export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    tagline?: string;
    description?: string;
    product_category?: {
      key: string;
      value: string;
    };
    key_features?: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
    pricing_tiers?: Array<{
      name: string;
      price: number;
      billing: string;
      features: string[];
      popular?: boolean;
    }>;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    demo_url?: string;
    featured_homepage?: boolean;
  };
}

// Solution types
export interface Solution extends CosmicObject {
  type: 'solutions';
  metadata: {
    solution_name: string;
    solution_type?: {
      key: string;
      value: string;
    };
    description?: string;
    key_benefits?: Array<{
      title: string;
      description: string;
    }>;
    use_cases?: Array<{
      title: string;
      description: string;
    }>;
    related_products?: Product[];
    hero_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Article types
export interface Article extends CosmicObject {
  type: 'articles';
  metadata: {
    content?: string;
    excerpt?: string;
    category?: HelpCategory;
    article_type?: {
      key: string;
      value: string;
    };
    difficulty_level?: {
      key: string;
      value: string;
    };
    author?: string;
    last_updated?: string;
    related_articles?: Article[];
    tags?: Array<{
      name: string;
      slug: string;
    }>;
    attachments?: any;
    featured?: boolean;
    agent_only?: boolean;
  };
}

// FAQ types
export interface FAQ extends CosmicObject {
  type: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
    category?: HelpCategory;
    popularity_score?: number;
    related_articles?: Article[];
    tags?: Array<{
      name: string;
      slug: string;
    }>;
    featured?: boolean;
  };
}

// Help Category types
export interface HelpCategory extends CosmicObject {
  type: 'help-categories';
  metadata: {
    category_name?: string;
    description?: string;
    icon?: {
      url: string;
      imgix_url: string;
    };
    parent_category?: HelpCategory;
    sort_order?: number;
    agent_only?: boolean;
  };
}

// Resource types
export interface Resource extends CosmicObject {
  type: 'resources';
  metadata: {
    resource_type?: {
      key: string;
      value: string;
    };
    content?: string;
    excerpt?: string;
    author?: string;
    publication_date?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    download_file?: any;
    related_products?: Product[];
    tags?: Array<{
      name: string;
      slug: string;
    }>;
    featured?: boolean;
  };
}

// Customer Story types
export interface CustomerStory extends CosmicObject {
  type: 'customer-stories';
  metadata: {
    company_name?: string;
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    industry?: {
      key: string;
      value: string;
    };
    company_size?: {
      key: string;
      value: string;
    };
    testimonial_quote?: string;
    spokesperson_name?: string;
    spokesperson_title?: string;
    spokesperson_photo?: any;
    full_case_study?: string;
    key_results?: Array<{
      metric: string;
      improvement: string;
      description: string;
    }>;
    products_used?: Product[];
    featured?: boolean;
  };
}

// Announcement types
export interface Announcement extends CosmicObject {
  type: 'announcements';
  metadata: {
    message?: string;
    announcement_type?: {
      key: string;
      value: string;
    };
    priority?: {
      key: string;
      value: string;
    };
    start_date?: string;
    end_date?: string;
    affected_products?: Product[];
    show_on_homepage?: boolean;
  };
}

// API Response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isArticle(obj: CosmicObject): obj is Article {
  return obj.type === 'articles';
}

export function isFAQ(obj: CosmicObject): obj is FAQ {
  return obj.type === 'faqs';
}

export function isResource(obj: CosmicObject): obj is Resource {
  return obj.type === 'resources';
}

export function isCustomerStory(obj: CosmicObject): obj is CustomerStory {
  return obj.type === 'customer-stories';
}

export function isAnnouncement(obj: CosmicObject): obj is Announcement {
  return obj.type === 'announcements';
}

// Utility types
export type PriorityLevel = 'low' | 'normal' | 'high' | 'critical';
export type AnnouncementType = 'maintenance' | 'update' | 'alert' | 'info';
export type ResourceType = 'blog' | 'guide' | 'report' | 'webinar' | 'video' | 'whitepaper';
export type ArticleType = 'how-to' | 'troubleshooting' | 'faq' | 'best-practice';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';