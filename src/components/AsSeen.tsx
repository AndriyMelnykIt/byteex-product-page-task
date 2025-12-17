'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export function AsSeenInSection() {
    const brands = [
        { name: 'ECO-STYLIST', className: 'text-sm md:text-lg font-light tracking-wider' },
        { name: 'Canadian Living', className: 'text-sm md:text-lg font-serif italic' },
        { 
            name: 'JILLIAN HARRIS', 
            className: 'text-sm md:text-base font-light tracking-wide',
            icon: <div className="w-6 h-6 rounded-full bg-gray-300" />
        },
        { 
            name: 'THE ECO HUB', 
            className: 'text-sm md:text-base font-light',
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
            )
        },
        { name: 'TRENDHUNTER', className: 'text-sm md:text-base font-bold tracking-wide' },
    ];

    return (
        <section className="py-12 md:py-2">
            <div className="container mx-auto px-4">
                <p className="text-xs md:text-sm text-gray-500 mb-6 text-center font-light tracking-widest">
                    as seen in
                </p>
                
                <div className="hidden md:flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                    {brands.map((brand, index) => (
                        <div key={index} className="flex items-center gap-2">
                            {brand.icon}
                            <span className={brand.className}>{brand.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:hidden">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet !bg-gray-300 !opacity-50',
                            bulletActiveClass: 'swiper-pagination-bullet-active !bg-gray-900 !opacity-100',
                        }}
                        className="as-seen-swiper"
                    >
                        {brands.map((brand, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex items-center justify-center gap-2 opacity-60 grayscale">
                                    {brand.icon}
                                    <span className={brand.className}>{brand.name}</span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}