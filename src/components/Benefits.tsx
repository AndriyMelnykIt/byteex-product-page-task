'use client';

import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

interface ComfortSectionProps {
  comfortMadeEasy?: string;
  youSave?: string;
  weShip?: string;
  youEnjoy?: string;
  browseOur?: string;
  weShipYour?: string;
  wearHernest?: string;
  customizeYourOutfit?: string;
}

export function ComfortSection({
  comfortMadeEasy,
  youSave,
  weShip,
  youEnjoy,
  browseOur,
  weShipYour,
  wearHernest,
  customizeYourOutfit
}: ComfortSectionProps) {
  const cards = [
    {
      bgColor: 'bg-[#F0EEEF]',
      icon: '/icon/Vector.svg',
      iconAlt: 'You save',
      title: youSave || 'You save.',
      description: browseOur || 'Browse our comfort sets and save 15% when you bundle.',
    },
    {
      bgColor: 'bg-[#F9F0E6]',
      icon: '/icon/Group 4402.svg',
      iconAlt: 'We ship',
      title: weShip || 'We ship.',
      description: weShipYour || 'We ship your items within 1-2 days of receiving your order.',
    },
    {
      bgColor: 'bg-[#F0EEEF]',
      icon: '/icon/day-night-sun-moon.svg',
      iconAlt: 'You enjoy',
      title: youEnjoy || 'You enjoy!',
      description: wearHernest || 'Wear loungewear around the house, out on the town, or in bed.',
    },
  ];

  return (
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 md:space-y-8">

            <h2 className="font-['Sofia_Pro'] font-normal text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[36px] lg:leading-[40px] font-regular tracking-[0.04em] text-[#01005B] text-center">
              {comfortMadeEasy || 'Comfort made easy'}
            </h2>

            <div className="md:hidden relative">
              <Swiper
                  modules={[Navigation]}
                  spaceBetween={20}
                  slidesPerView={1}
                  centeredSlides={true}
                  navigation={{
                    prevEl: '.comfort-prev',
                    nextEl: '.comfort-next',
                  }}
                  className="comfort-swiper"
              >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className={`${card.bgColor} rounded-[8px] w-full h-[280px] p-8 flex flex-col items-center justify-center space-y-4`}>
                        <div className="relative w-12 h-12">
                          <Image
                              src={card.icon}
                              alt={card.iconAlt}
                              fill
                              className="object-contain"
                          />
                        </div>
                        <h3 className="font-['Sofia_Pro'] text-[18px] text-[#01005B]">{card.title}</h3>
                        <p className="font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869] text-center max-w-[260px]">
                          {card.description}
                        </p>
                      </div>
                    </SwiperSlide>
                ))}
              </Swiper>

              <button className="comfort-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer outline-none">
                <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
              </button>
              <button className="comfort-next absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer outline-none">
                <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
              </button>
            </div>

            <div className="hidden md:grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3 justify-items-center max-w-[1100px] mx-auto">
              {cards.map((card, index) => (
                  <div key={index} className={`${card.bgColor} rounded-[8px] w-full max-w-[346px] h-[321px] p-8 flex flex-col items-center justify-center space-y-4`}>
                    <div className="relative w-12 h-12">
                      <Image
                          src={card.icon}
                          alt={card.iconAlt}
                          fill
                          className="object-contain"
                      />
                    </div>
                    <h3 className="font-['Sofia_Pro'] text-[18px] text-[#01005B]">{card.title}</h3>
                    <p className="font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869] text-center max-w-[260px]">
                      {card.description}
                    </p>
                  </div>
              ))}
            </div>

            <div className="pt-6 flex flex-col items-center">
              <Button className="bg-[#01005B] hover:bg-blue-800 text-white px-8">
                {customizeYourOutfit || 'Customize Your Outfit'}
              </Button>
              <div className="flex items-center justify-center gap-1 mt-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                  ★
                </span>
                ))}
                <span className="text-xs text-gray-600 ml-2">Over 500+ 5 Star Reviews Online</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}