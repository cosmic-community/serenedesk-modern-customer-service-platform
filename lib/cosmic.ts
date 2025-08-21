import { createBucketClient } from '@cosmicjs/sdk';
import { 
  Product, 
  Solution, 
  Article, 
  FAQ, 
  HelpCategory, 
  Resource, 
  CustomerStory, 
  Announcement 
} from '@/types';

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
  apiEnvironment: 'staging'
});

// Products
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .depth(1);
    return response.objects as Product[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch products');
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'products',
      slug
    }).depth(1);
    return response.object as Product;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch product');
  }
}

// Solutions
export async function getSolutions(): Promise<Solution[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'solutions' })
      .depth(1);
    return response.objects as Solution[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch solutions');
  }
}

export async function getSolutionBySlug(slug: string): Promise<Solution | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'solutions',
      slug
    }).depth(1);
    return response.object as Solution;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch solution');
  }
}

// Articles
export async function getArticles(categoryId?: string): Promise<Article[]> {
  try {
    const query: Record<string, any> = { type: 'articles' };
    if (categoryId) {
      query['metadata.category'] = categoryId;
    }
    
    const response = await cosmic.objects
      .find(query)
      .depth(1)
      .limit(20);
    return response.objects as Article[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch articles');
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'articles',
      slug
    }).depth(1);
    return response.object as Article;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch article');
  }
}

// FAQs
export async function getFAQs(categoryId?: string): Promise<FAQ[]> {
  try {
    const query: Record<string, any> = { type: 'faqs' };
    if (categoryId) {
      query['metadata.category'] = categoryId;
    }
    
    const response = await cosmic.objects
      .find(query)
      .depth(1);
    return response.objects as FAQ[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch FAQs');
  }
}

// Help Categories
export async function getHelpCategories(): Promise<HelpCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'help-categories' })
      .depth(1);
    return response.objects as HelpCategory[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch help categories');
  }
}

// Resources
export async function getResources(type?: string): Promise<Resource[]> {
  try {
    const query: Record<string, any> = { type: 'resources' };
    if (type) {
      query['metadata.resource_type.key'] = type;
    }
    
    const response = await cosmic.objects
      .find(query)
      .depth(1)
      .limit(20);
    return response.objects as Resource[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch resources');
  }
}

export async function getResourceBySlug(slug: string): Promise<Resource | null> {
  try {
    const response = await cosmic.objects.findOne({
      type: 'resources',
      slug
    }).depth(1);
    return response.object as Resource;
  } catch (error: any) {
    if (error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch resource');
  }
}

// Customer Stories
export async function getCustomerStories(): Promise<CustomerStory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'customer-stories' })
      .depth(1);
    return response.objects as CustomerStory[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch customer stories');
  }
}

// Announcements
export async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'announcements' })
      .depth(1);
    return response.objects as Announcement[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch announcements');
  }
}

// Featured content
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'products',
        'metadata.featured_homepage': true 
      })
      .depth(1);
    return response.objects as Product[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured products');
  }
}

export async function getFeaturedResources(): Promise<Resource[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'resources',
        'metadata.featured': true 
      })
      .depth(1)
      .limit(6);
    return response.objects as Resource[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch featured resources');
  }
}

export async function getHomepageAnnouncements(): Promise<Announcement[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'announcements',
        'metadata.show_on_homepage': true 
      })
      .depth(1);
    return response.objects as Announcement[];
  } catch (error: any) {
    if (error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch homepage announcements');
  }
}