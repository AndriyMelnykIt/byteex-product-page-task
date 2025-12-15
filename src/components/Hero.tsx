import Image from 'next/image';
import { placeholders } from '@/lib/placeholder';
import { Sparkles, Package, Waves } from 'lucide-react';
import { Asset } from 'contentful';

interface HeroProps {
  title?: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  reviewerName?: string;
  reviewText?: string;
  reviewRating?: number;
  heroImages?: Asset;
}

function Hero({
  title,
  features,
  ctaText,
  ctaLink = "#customize",
  reviewerName = "Amy P.",
  reviewText = "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them.",
  reviewRating = 5,
  heroImages
}: HeroProps) {
  
  if (!title || !features || !ctaText) {
    return null;
  }

  let imageUrl = placeholders.hero;
  
  if (heroImages?.fields?.file?.url) {
    const url = String(heroImages.fields.file.url);
    imageUrl = url.startsWith('//') ? `https:${url}` : url;
  }
  
  return (
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        <div style={{paddingLeft: '100px', paddingRight: '100px'}}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center">
          {/* Left Content */}
          <div className="flex-1 lg:max-w-[500px]">
            <h1 style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '38px',
              lineHeight: '45px',
              letterSpacing: '0.04em',
              color: '#01005B',
              fontWeight: 400,
              marginBottom: '32px'
            }}>
              {title}
            </h1>

              <div style={{ marginBottom: '32px' }}>
                {features.map((feature, index) => {
                  const icons = [Sparkles, Package, Waves];
                  const Icon = icons[index] || Sparkles;
                  return (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        marginBottom: index < features.length - 1 ? '16px' : '0'
                      }}>
                        <Icon style={{
                          width: '20px',
                          height: '20px',
                          color: '#8786B8',
                          flexShrink: 0,
                          marginTop: '2px'
                        }} />
                        <p style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: '15px',
                          lineHeight: '23px',
                          letterSpacing: '0.03em',
                          color: '#676869',
                          fontWeight: 400
                        }}>
                          {feature}
                        </p>
                      </div>
                  );
                })}
              </div>

            <a
              href={ctaLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '362px',
                height: '56px',
                backgroundColor: '#001058',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '16px',
                marginBottom: '48px',
                transition: 'background-color 0.2s'
              }}
              className="hover:bg-[#000040]"
            >
              {ctaText}
              <span style={{ fontSize: '20px' }}>→</span>
            </a>

              <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 max-w-[454px]">
                <div className="flex items-start gap-3 lg:gap-4">
                  <Image
                      src={placeholders.avatar}
                      alt={reviewerName}
                      width={40}
                      height={40}
                      className="rounded-full flex-shrink-0 lg:w-12 lg:h-12"
                      unoptimized
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-[#001058] text-sm lg:text-base">{reviewerName}</span>
                      <div className="flex gap-0.5 text-yellow-400 text-xs lg:text-sm">
                        {'★'.repeat(reviewRating)}
                      </div>
                    </div>
                    <p className="text-[10px] lg:text-xs text-gray-500 mb-2">One of 500+ 5 Star Reviews Online</p>
                    <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                      {reviewText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative" style={{ width: '725px', height: '422px' }}>
                <Image
                  src={imageUrl}
                  alt="Hero loungewear collection"
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Hero

