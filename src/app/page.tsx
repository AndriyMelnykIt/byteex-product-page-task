import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { getHeroData } from '@/lib/contentful';

export default async function Home() {
  const heroData = await getHeroData();

  return (
    <div className="min-h-screen bg-white">
      <div style={{ width: '1465px', margin: '0 auto' }}>
        <Header />
        <main>
          <Hero 
            title={heroData?.title}
            ctaText={heroData?.ctaButtonText}
            features={heroData?.mainFeatures}
            heroImages={heroData?.heroImages}
          />
        </main>
      </div>
    </div>
  );
}
