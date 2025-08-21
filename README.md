# SereneDesk - Modern Customer Service Platform

![SereneDesk Preview](https://imgix.cosmicjs.com/c7a042e0-7eb3-11f0-8dcc-651091f6a7c0-photo-1677442136019-21780ecad995-1755797105937.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, full-featured customer service platform website built with Next.js, TypeScript, and Tailwind CSS. SereneDesk delivers a comprehensive SaaS experience showcasing AI-powered customer service solutions, comprehensive help resources, and customer success stories.

## ✨ Features

- **Dynamic Product Showcase** - Interactive product pages with detailed features and pricing
- **AI-Powered Solutions** - Comprehensive presentation of AI Agents and automation tools
- **Knowledge Base** - Searchable help center with categorized articles and FAQs
- **Resource Library** - Filterable content including guides, reports, and case studies
- **Customer Stories** - Success testimonials with detailed business results
- **Announcement System** - Priority-based system updates and product releases
- **Mobile-First Design** - Fully responsive across all device sizes
- **Search & Filtering** - Advanced content discovery capabilities

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=68a75344e340d628986f6264&clone_repository=68a75884aa80e567c0a2222b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "what prompt should I give the code builder ai to build out the website for this serenedesk clone?"

### Code Generation Prompt

> Build a modern customer service platform website called "SereneDesk" that is a SereneDesk clone. Use the following structure and features:
> 
> ### TECH STACK & SETUP
> - Next.js 14+ with App Router
> - TypeScript
> - Tailwind CSS for styling
> - Responsive design (mobile-first)
> - Modern component architecture
> 
> ### CONTENT STRUCTURE
> The website should integrate with a headless CMS and handle these content types:
> 
> 1. **Products** (main offerings)
>    - SereneDesk AI Agents, SereneDesk Support
>    - Each has: name, tagline, description, features, pricing tiers, hero image
>    - Product categories: AI & Automation, Customer Support, etc.
> 
> 2. **Solutions** (industry/business size focused)
>    - Retail, Enterprise solutions
>    - Each has: description, key benefits, use cases, hero image
> 
> 3. **Help Content**
>    - Articles (how-to guides, troubleshooting)
>    - FAQs with categories
>    - Help Categories with icons and descriptions
> 
> 4. **Resources**
>    - Blog posts, guides, reports, whitepapers, webinars
>    - Each has: content, excerpt, author, publication date, featured image
> 
> 5. **Customer Stories** (testimonials/case studies)
>    - Company info, testimonials, key results, spokesperson details
> 
> 6. **Announcements**
>    - System updates, maintenance, product releases
>    - Priority levels, date ranges, affected products
> 
> ### REQUIRED PAGES & FEATURES
> 
> **Homepage:**
> - Hero section showcasing main value proposition
> - Featured products (AI Agents, Support)
> - Customer testimonials carousel
> - Featured announcements/updates
> - Resource highlights
> 
> **Product Pages:**
> - Individual product detail pages
> - Feature comparisons
> - Pricing tables with tiered options
> - Demo/trial CTAs
> 
> **Solutions Pages:**
> - Industry-specific solutions (Retail, etc.)
> - Business size solutions (Enterprise, etc.)
> - Use case examples
> 
> **Help Center:**
> - Searchable knowledge base
> - Article categories with icons
> - FAQ sections
> - Related article suggestions
> 
> **Resources Section:**
> - Filterable by type (blog, guide, report, etc.)
> - Article listings with excerpts
> - Individual resource pages
> 
> **About/Company Pages:**
> - Customer stories/case studies
> - Company information
> 
> ### KEY DESIGN REQUIREMENTS
> - Clean, professional SaaS aesthetic (similar to SereneDesk)
> - Prominent CTAs for demos/trials
> - Search functionality for help content
> - Responsive navigation
> - Breadcrumb navigation for help content
> - Tag-based content filtering
> - Related content suggestions
> 
> ### SPECIFIC COMPONENTS NEEDED
> - Product feature cards with icons
> - Pricing comparison tables
> - Testimonial cards with company logos
> - Announcement banners (with priority styling)
> - Help article search and filtering
> - Resource type filters
> - FAQ accordion components
> - Breadcrumb navigation
> - Related content sections
> 
> ### CONTENT INTEGRATION
> - Design for headless CMS integration (structure for API calls)
> - Handle rich text content (HTML)
> - Support for image optimization
> - Tag-based content relationships
> - Featured content handling
> - Date-based sorting and filtering
> 
> Build this as a modern, performant website that could serve as a professional alternative to SereneDesk's marketing site, with clean code structure and reusable components.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **React Icons** - Comprehensive icon library

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- A Cosmic account with your content bucket

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Start the development server:
```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

export async function getProducts() {
  try {
    const response = await cosmic.objects
      .find({ type: 'products' })
      .depth(1)
    return response.objects as Product[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

### Fetching Help Articles
```typescript
export async function getArticles(category?: string) {
  try {
    const query: Record<string, any> = { type: 'articles' }
    if (category) {
      query['metadata.category'] = category
    }
    
    const response = await cosmic.objects
      .find(query)
      .depth(1)
      .limit(20)
    return response.objects as Article[]
  } catch (error) {
    if (error.status === 404) {
      return []
    }
    throw error
  }
}
```

## 🎨 Cosmic CMS Integration

This application integrates with Cosmic CMS to manage:

- **Products**: AI agents, support tools with features and pricing
- **Solutions**: Industry and business-size specific solutions
- **Articles**: Help center content with categories and tags
- **FAQs**: Frequently asked questions with categories
- **Resources**: Guides, reports, webinars, and educational content
- **Customer Stories**: Success testimonials and case studies
- **Announcements**: System updates and product releases

### Content Structure
The app expects specific metafields in your Cosmic bucket. Key content types include products with pricing tiers, articles with categories, and customer stories with business results.

## 🚀 Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Netlify
1. Build the application: `bun run build`
2. Deploy the `out` folder to Netlify
3. Configure environment variables

### Environment Variables
Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

The application will automatically connect to your Cosmic content and display your products, help articles, and other content dynamically.
<!-- README_END -->