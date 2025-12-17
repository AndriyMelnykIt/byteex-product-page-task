'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Asset } from 'contentful';
import { Button } from '@/components/ui/Button';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface FeaturesProps {
  gallery?: Asset[];
}

export default function Features({ gallery }: FeaturesProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const features = [
    {
      icon: '/icon/Component 4.svg',
      title: 'Ethically sourced.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum at felis finibus consequat.',
    },
    {
      icon: '/icon/Component 11.svg',
      title: 'Responsibly made.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum at felis finibus consequat.',
    },
    {
      icon: '/icon/Component 27.svg',
      title: 'Made for living in.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum at felis finibus consequat.',
    },
    {
      icon: '/icon/Component 28.svg',
      title: 'Unimaginably comfortable.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum at felis finibus consequat.',
    },
  ];

  const galleryImages = gallery?.map((asset, index) => {
    const url = asset?.fields?.file?.url;
    const imageUrl = url ? (String(url).startsWith('//') ? `https:${url}` : String(url)) : '';
    return {
      url: imageUrl,
      title: asset?.fields?.title || asset?.fields?.file?.fileName || `Product image ${index + 1}`,
    };
  }).filter(item => item.url) || [];

  return (
      <section className="bg-white md:pt-6 lg:pt-12 pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-[100px]">
          <h2 className="text-[32px] leading-[40px] tracking-[0.04em] font-normal text-[#001058] font-['Sofia_Pro'] text-center lg:text-left mb-8 lg:mb-0 lg:hidden">
            Loungewear you can be proud of.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
            <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">

              <h2 className="hidden lg:block text-[32px] leading-[40px] tracking-[0.04em] font-normal text-[#001058] font-['Sofia_Pro'] text-center lg:text-left">
                Loungewear you can be proud of.
              </h2>

              <div className="space-y-6 lg:space-y-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4">
                      <div className="flex-shrink-0 relative w-12 h-12 lg:w-6 lg:h-6 lg:mt-1 flex items-center justify-center">
                        <div className="w-12 h-12 lg:w-5 lg:h-5 rounded-full bg-[#F9F0E5] flex items-center justify-center lg:bg-transparent">
                          <div className="relative w-6 h-6 lg:w-5 lg:h-5">
                            <Image
                                src={feature.icon}
                                alt={feature.title}
                                fill
                                className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 text-center lg:text-left w-full lg:w-auto">
                        <h3 className="text-[16px] lg:text-[18px] font-medium text-[#001058] mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      {index < features.length - 1 && (
                          <div className="w-full h-px bg-gray-200 lg:hidden mt-2"></div>
                      )}
                    </div>
                ))}
              </div>

              <div className="flex flex-col items-center mt-8 lg:hidden">
                <Button className="bg-[#01005B] hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-base font-medium flex items-center gap-2 mb-3">
                  Customize Your Outfit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="text-xs text-gray-600 ml-2">Over 500+ 5 Star Reviews Online</span>
                </div>
              </div>
            </div>

            <div className="relative lg:px-20 group order-1 lg:order-2">
              <div className="relative rounded-lg">
                <Swiper
                    style={{
                      // @ts-ignore
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    loop={galleryImages.length > 1}
                    spaceBetween={10}
                    navigation={{
                      prevEl: '.custom-prev-button',
                      nextEl: '.custom-next-button',
                    }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="rounded-lg"
                >
                  {galleryImages.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="aspect-[3/4] relative bg-gray-200 rounded-lg overflow-hidden">
                          <Image
                              src={image.url}
                              alt={String(image.title)}
                              fill
                              className="object-cover"
                              unoptimized
                          />
                        </div>
                      </SwiperSlide>
                  ))}
                </Swiper>

                <button className="custom-prev-button absolute -left-16 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer outline-none disabled:opacity-30 disabled:cursor-not-allowed hidden lg:flex">
                  <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
                </button>

                <button className="custom-next-button absolute -right-16 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer outline-none disabled:opacity-30 disabled:cursor-not-allowed hidden lg:flex">
                  <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
                </button>

                {galleryImages.length > 0 && (
                    <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center px-4">
                      <div className="flex gap-2">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={galleryImages.length > 1}
                            spaceBetween={8}
                            slidesPerView="auto"
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="thumbs-swiper"
                        >
                          {galleryImages.map((image, index) => (
                              <SwiperSlide key={index} style={{ width: '31px', height: '31px' }}>
                                <div className="w-[31px] h-[31px] relative bg-gray-200 rounded cursor-pointer opacity-70 hover:opacity-100 transition-opacity [&.swiper-slide-thumb-active]:opacity-100 [&.swiper-slide-thumb-active]:ring-1 [&.swiper-slide-thumb-active]:ring-white">
                                  <Image
                                      src={image.url}
                                      alt={String(image.title)}
                                      fill
                                      className="object-cover"
                                      unoptimized
                                  />
                                </div>
                              </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}