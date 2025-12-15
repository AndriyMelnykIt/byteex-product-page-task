import { createClient, Entry, Asset } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

// TypeScript interface for Hero Data
export interface HeroData {
  title: string;
  ctaButtonText: string;
  mainFeatures: string[];
  heroImages: Asset;
}

// Fetch Hero Section data
export async function getHeroData(): Promise<HeroData | null> {
  try {
    const entries = await client.getEntries({
      content_type: 'productPage',
      limit: 1,
      include: 10,
    });

    if (entries.items.length === 0) {
      console.log('No productPage entries found in Contentful');
      return null;
    }

    const entry = entries.items[0] as Entry;
    const fields = entry.fields as any;

    // If heroImages is a Link, fetch the asset separately
    let heroImagesAsset = fields.heroImages;
    
    if (fields.heroImages?.sys?.type === 'Link' && fields.heroImages?.sys?.id) {
      try {
        heroImagesAsset = await client.getAsset(fields.heroImages.sys.id);
        console.log('Fetched Hero Image Asset:', heroImagesAsset);
      } catch (error) {
        console.error('Error fetching hero image asset:', error);
      }
    }

    const heroData: HeroData = {
      title: fields.title || '',
      ctaButtonText: fields.ctaButtonText || '',
      mainFeatures: fields.mainFeatures || [],
      heroImages: heroImagesAsset,
    };
    
    console.log('Final Hero Data with Image:', heroData);
    
    return heroData;
  } catch (error) {
    console.error('Error fetching data from Contentful:', error);
    return null;
  }
}
