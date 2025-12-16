import {Header} from "@/components/Header";
import {PageSections} from "@/components/PageSections";
import {getHeroData, getGalleryData, getBestSelfData, getComfortSectionData, getTestimonialsData, getFAQData, getImpactData, getProductGalleryData} from '@/lib/contentful';

export default async function Home() {
    const heroData = await getHeroData();
    const galleryData = await getGalleryData();
    const bestSelfData = await getBestSelfData();
    const comfortData = await getComfortSectionData();
    const testimonialsData = await getTestimonialsData();
    const faqData = await getFAQData();
    const impactData = await getImpactData();
    const productGalleryData = await getProductGalleryData();

    return (
        <main className="min-h-screen bg-white">
            <div className="w-full lg:max-w-[1465px] lg:mx-auto">
                <Header/>
                <PageSections
                    heroData={heroData || {}}
                    galleryData={galleryData || {}}
                    bestSelfData={bestSelfData || {}}
                    comfortData={comfortData || {}}
                    testimonialsData={testimonialsData || {}}
                    faqData={faqData || {}}
                    impactData={impactData || {}}
                    productGalleryData={productGalleryData || {}}
                />
            </div>
        </main>
    )
}