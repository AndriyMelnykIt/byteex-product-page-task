import {createClient, Entry, Asset} from 'contentful';

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

export interface GalleryData {
    gallery: Asset[];
}


export interface AnnouncementBarData {
    mobileAnnouncement: string;
    desktopAnnouncement: string;
}

export interface BestSelfData {
    beYourBestSelf: string;
    aboutImg?: Asset;
    aboutDescription: any;
    customizeYourOutfit: string;
}

export interface ComfortSectionData {
    comfortMadeEasy: string;
    youSave: string;
    weShip: string;
    youEnjoy: string;
    browseOur: string;
    weShipYour: string;
    wearHernest: string;
    customizeYourOutfit: string;
}

export interface TestimonialsData {
    title: string;
    description: string;
    galleryImages: Asset[];
    customizeYourOutfit: string;
}

export interface FAQData {
    title: string;
    subtitle: string;
    media?: Asset;
}

export interface ImpactData {
    title: string;
    co2Saved: string;
    waterSaved: string;
    energySaved: string;
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

export async function getGalleryData(): Promise<GalleryData | null> {
    try {
        const entries = await client.getEntries({
            content_type: 'productPage',
            limit: 1,
            include: 10,
        });

        if (entries.items.length === 0) {
            console.log('❌ No productPage entries found in Contentful');
            return null;
        }

        const entry = entries.items[0] as Entry;
        const fields = entry.fields as any;

        let galleryAssets: Asset[] = [];
        
        if (fields.gallery && Array.isArray(fields.gallery)) {
            console.log('✅ Gallery is array with', fields.gallery.length, 'items');
            
            galleryAssets = fields.gallery
                .filter((item: any) => {
                    const hasFile = !!item?.fields?.file;
                    console.log('Item:', item, 'Has file:', hasFile);
                    return hasFile;
                })
                .map((item: any) => item as Asset);
        } else {
            console.log('❌ Gallery is not an array or is undefined');
        }

        return {
            gallery: galleryAssets,
        };
    } catch (error) {
        console.error('❌ Error fetching gallery data from Contentful:', error);
        return null;
    }
}

export async function getBestSelfData(): Promise<BestSelfData | null> {
    try {
        const entries = await client.getEntries({
            content_type: 'sectionBestSelf',
            limit: 1,
            include: 10,
            locale: 'en-US',
        });

        if (entries.items.length === 0) {
            console.log('❌ No sectionBestSelf entries found in Contentful');
            return null;
        }

        const entry = entries.items[0] as Entry;
        const fields = entry.fields as any;

        let aboutImgAsset = fields.aboutImg;
        
        if (aboutImgAsset?.sys?.type === 'Link' && aboutImgAsset?.sys?.id) {
            try {
                aboutImgAsset = await client.getAsset(aboutImgAsset.sys.id);
                console.log('🖼️ Fetched About Image Asset:', aboutImgAsset);
            } catch (error) {
                console.error('❌ Error fetching about image asset:', error);
            }
        }

        return {
            beYourBestSelf: fields.beYourBestSelf || '',
            aboutImg: aboutImgAsset,
            aboutDescription: fields.aboutDescription || null,
            customizeYourOutfit: fields.customizeYourOutfit || '',
        };
    } catch (error) {
        console.error('❌ Error fetching bestSelf data from Contentful:', error);
        return null;
    }
}

// Fetch Comfort Section data
export async function getComfortSectionData(): Promise<ComfortSectionData | null> {
    try {
        const entries = await client.getEntries({
            content_type: 'comfortSection',
            limit: 1,
            locale: 'en-US',
        });


        if (entries.items.length === 0) {
            console.log('❌ No comfortSection entries found in Contentful');
            return null;
        }

        const entry = entries.items[0] as Entry;
        const fields = entry.fields as any;

        return {
            comfortMadeEasy: fields.comfortMadeEasy || 'Comfort made easy',
            youSave: fields.youSave || 'You save.',
            weShip: fields.weShip || 'We ship.',
            youEnjoy: fields.youEnjoy || 'You enjoy!',
            browseOur: fields.browseOur || 'Browse our comfort sets and save 15% when you bundle.',
            weShipYour: fields.weShipYour || 'We ship your items within 1-2 days of receiving your order.',
            wearHernest: fields.wearHernest || 'Wear loungewear around the house, out on the town, or in bed.',
            customizeYourOutfit: fields.customizeYourOutfit || 'Customize Your Outfit',
        };
    } catch (error) {
        console.error('❌ Error fetching comfortSection data from Contentful:', error);
        return null;
    }
}

// Fetch Testimonials Section data
export async function getTestimonialsData(): Promise<TestimonialsData | null> {
    try {
        const entries = await client.getEntries({
            content_type: 'testimonialsSection',
            limit: 1,
            include: 10,
            locale: 'en-US',
        });

        if (entries.items.length === 0) {
            return null;
        }

        const entry = entries.items[0] as Entry;
        const fields = entry.fields as any;

        let galleryAssets: Asset[] = [];
        
        if (fields.testimonialsImg && Array.isArray(fields.testimonialsImg)) {
            galleryAssets = fields.testimonialsImg
                .filter((item: any) => {
                    const hasFile = !!item?.fields?.file;
                    return hasFile;
                })
                .map((item: any) => item as Asset);
        }

        return {
            title: fields.whatAreOurFansSaying || 'What are our fans saying?',
            description: fields.testimonialssubTitle || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum ut felis finibus consequat. Fusce non.',
            galleryImages: galleryAssets,
            customizeYourOutfit: fields.customizeYourOutfit || 'Customize Your Outfit',
        };
    } catch (error) {
        return null;
    }
}

// Fetch FAQ Section data
export async function getFAQData(): Promise<FAQData | null> {
    try {
        const entries = await client.getEntries({
            content_type: 'faqSection',
            limit: 1,
            include: 10,
            locale: 'en-US',
        });

        if (entries.items.length === 0) {
            return null;
        }

        const entry = entries.items[0] as Entry;
        const fields = entry.fields as any;

        // Get media asset
        let mediaAsset: Asset | undefined;
        
        if (fields.faqSectionMedia && 'sys' in fields.faqSectionMedia && fields.faqSectionMedia.sys.type === 'Link') {
            const assetId = fields.faqSectionMedia.sys.id;
            try {
                mediaAsset = await client.getAsset(assetId);
            } catch (assetError) {
                console.error('Error fetching FAQ media asset:', assetError);
            }
        } else if (fields.faqSectionMedia && 'fields' in fields.faqSectionMedia) {
            mediaAsset = fields.faqSectionMedia as Asset;
        }

        return {
            title: fields.frequentlyAskedQuestions || 'Frequently asked questions.',
            subtitle: fields.faqSectionSubTitle || '',
            media: mediaAsset,
        };
    } catch (error) {
        return null;
    }
}

// Fetch Impact Section data
export async function getImpactData(): Promise<ImpactData | null> {
    try {
        const entries = await client.getEntries({
            content_type: 'impactSection',
            limit: 1,
            locale: 'en-US',
        });

        if (entries.items.length === 0) {
            return null;
        }

        const entry = entries.items[0] as Entry;
        const fields = entry.fields as any;

        return {
            title: fields.ourTotalGreenImpact || 'Our total green impact',
            co2Saved: fields.ofCo2Saved || 'of CO2 saved',
            waterSaved: fields.ofDrinkingWaterSaved || 'of drinking water saved',
            energySaved: fields.ofEnergySaved || 'of energy saved',
        };
    } catch (error) {
        return null;
    }
}

// Fetch Announcement Bar data
export async function getAnnouncementBarData(): Promise<AnnouncementBarData | null> {
    try {
        const entries = await client.getEntries({
            content_type: 'announcementBar',
            limit: 1,
        });

        if (entries.items.length === 0) {
            console.log('No announcementBar entries found in Contentful');
            return null;
        }

        const entry = entries.items[0] as Entry;
        const fields = entry.fields as any;

        const fallbackMobile = 'FREE SHIPPING on orders > $200';
        const fallbackDesktop =
            'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.';

        return {
            mobileAnnouncement: fields.mobileAnnouncement || fallbackMobile,
            desktopAnnouncement: fields.desktopAnnouncement || fallbackDesktop,
        };
    } catch (error) {
        console.error('Error fetching announcementBar data from Contentful:', error);
        return null;
    }
}

