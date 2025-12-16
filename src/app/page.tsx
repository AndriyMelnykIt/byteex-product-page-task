import {Header} from "@/components/Header";
import HeroSection from "@/components/Hero";
import {ReviewCard} from "@/components/ReviewCard";
import {BestSelfSection} from "@/components/About";
import Features from "@/components/Features";
import {getHeroData, getGalleryData, getBestSelfData, getComfortSectionData, getTestimonialsData, getFAQData, getImpactData} from '@/lib/contentful';
import { AsSeenInSection } from "@/components/AsSeen";
import {ComfortSection} from "@/components/Benefits";
import {TestimonialsSection} from "@/components/Testimonials";
import {FAQSection} from "@/components/FAQ";
import {ImpactSection} from "@/components/ImpactStats";

export default async function Home() {
    const heroData = await getHeroData();
    const galleryData = await getGalleryData();
    const bestSelfData = await getBestSelfData();
    const comfortData = await getComfortSectionData();
    const testimonialsData = await getTestimonialsData();
    const faqData = await getFAQData();
    const impactData = await getImpactData();

    return (
        <main className="min-h-screen bg-white">
            <div className="w-full lg:max-w-[1465px] lg:mx-auto">
                <Header/>
                <HeroSection
                    title={heroData?.title}
                    features={heroData?.mainFeatures}
                    ctaText={heroData?.ctaButtonText}
                    heroImages={heroData?.heroImages}
                />
                <div className="relative z-10" style={{
                    background: 'linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%)'
                }}>
                    <div className="absolute left-0 right-0 -top-[84px] lg:-top-[30px]">
                        <div className="container mx-auto px-4">
                            <div className="max-w-xl">
                                <ReviewCard />
                            </div>
                        </div>
                    </div>
                    <div className="pt-[140px] lg:pt-[120px] pb-4">
                        <AsSeenInSection />
                    </div>
                </div>
                <Features gallery={galleryData?.gallery} />

                <BestSelfSection
                    beYourBestSelf={bestSelfData?.beYourBestSelf}
                    aboutImg={bestSelfData?.aboutImg}
                    aboutDescription={bestSelfData?.aboutDescription}
                    customizeYourOutfit={bestSelfData?.customizeYourOutfit}
                />
                <ComfortSection
                    comfortMadeEasy={comfortData?.comfortMadeEasy}
                    youSave={comfortData?.youSave}
                    weShip={comfortData?.weShip}
                    youEnjoy={comfortData?.youEnjoy}
                    browseOur={comfortData?.browseOur}
                    weShipYour={comfortData?.weShipYour}
                    wearHernest={comfortData?.wearHernest}
                    customizeYourOutfit={comfortData?.customizeYourOutfit}
                />
                <TestimonialsSection
                    title={testimonialsData?.title}
                    description={testimonialsData?.description}
                    galleryImages={testimonialsData?.galleryImages}
                    customizeYourOutfit={testimonialsData?.customizeYourOutfit}
                />
                <FAQSection
                    title={faqData?.title}
                    media={faqData?.media}
                />
                <ImpactSection
                    title={impactData?.title}
                    co2Saved={impactData?.co2Saved}
                    waterSaved={impactData?.waterSaved}
                    energySaved={impactData?.energySaved}
                />
            </div>
        </main>
    )
}