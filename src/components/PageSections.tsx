'use client';

import { ScrollAnimationWrapper } from './ScrollAnimationWrapper';
import HeroSection from './Hero';
import { ReviewCard } from './ReviewCard';
import { BestSelfSection } from './About';
import Features from './Features';
import { AsSeenInSection } from './AsSeen';
import { ComfortSection } from './Benefits';
import { TestimonialsSection } from './Testimonials';
import { FAQSection } from './FAQ';
import { ImpactSection } from './ImpactStats';
import { ProductGallerySection } from './ProductGallery';
import { Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

interface PageSectionsProps {
  heroData: {
    title?: string;
    mainFeatures?: string[];
    ctaButtonText?: string;
    heroImages?: Asset;
  };
  galleryData: {
    gallery?: Asset[];
  };
  bestSelfData: {
    beYourBestSelf?: string;
    aboutImg?: Asset;
    aboutDescription?: Document;
    customizeYourOutfit?: string;
  };
  comfortData: {
    comfortMadeEasy?: string;
    youSave?: string;
    weShip?: string;
    youEnjoy?: string;
    browseOur?: string;
    weShipYour?: string;
    wearHernest?: string;
    customizeYourOutfit?: string;
  };
  testimonialsData: {
    title?: string;
    description?: string;
    galleryImages?: Asset[];
    customizeYourOutfit?: string;
  };
  faqData: {
    title?: string;
    media?: Asset;
  };
  impactData: {
    title?: string;
    co2Saved?: string;
    waterSaved?: string;
    energySaved?: string;
  };
  productGalleryData: {
    title?: string;
    subtitle?: string;
    images?: Asset[];
    buttonText?: string;
  };
}

export function PageSections({
  heroData,
  galleryData,
  bestSelfData,
  comfortData,
  testimonialsData,
  faqData,
  impactData,
  productGalleryData,
}: PageSectionsProps) {
  return (
    <>
      <ScrollAnimationWrapper delay={0}>
        <HeroSection
          title={heroData?.title}
          features={heroData?.mainFeatures}
          ctaText={heroData?.ctaButtonText}
          heroImages={heroData?.heroImages}
        />
      </ScrollAnimationWrapper>

      <div className="relative z-10" style={{
        background: 'linear-gradient(180deg, #F9F0E5 0%, rgba(249, 240, 229, 0.18) 43.05%, rgba(249, 240, 229, 0) 100%)'
      }}>
        <div className="absolute left-0 right-0 -top-[84px] lg:-top-[30px]">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <ScrollAnimationWrapper delay={100}>
                <ReviewCard />
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
        <div className="pt-[140px] lg:pt-[120px] pb-4">
          <ScrollAnimationWrapper delay={200}>
            <AsSeenInSection />
          </ScrollAnimationWrapper>
        </div>
      </div>

      <ScrollAnimationWrapper delay={300}>
        <Features gallery={galleryData?.gallery} />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={400}>
        <BestSelfSection
          beYourBestSelf={bestSelfData?.beYourBestSelf}
          aboutImg={bestSelfData?.aboutImg}
          aboutDescription={bestSelfData?.aboutDescription}
          customizeYourOutfit={bestSelfData?.customizeYourOutfit}
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={500}>
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
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={600}>
        <TestimonialsSection
          title={testimonialsData?.title}
          description={testimonialsData?.description}
          galleryImages={testimonialsData?.galleryImages}
          customizeYourOutfit={testimonialsData?.customizeYourOutfit}
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={700}>
        <FAQSection
          title={faqData?.title}
          media={faqData?.media}
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={800}>
        <ImpactSection
          title={impactData?.title}
          co2Saved={impactData?.co2Saved}
          waterSaved={impactData?.waterSaved}
          energySaved={impactData?.energySaved}
        />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper delay={900}>
        <ProductGallerySection
          title={productGalleryData?.title}
          subtitle={productGalleryData?.subtitle}
          images={productGalleryData?.images}
          buttonText={productGalleryData?.buttonText}
        />
      </ScrollAnimationWrapper>
    </>
  );
}

