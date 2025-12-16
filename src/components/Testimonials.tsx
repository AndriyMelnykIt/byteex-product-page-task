"use client"

import {Star, ChevronLeft, ChevronRight} from "lucide-react"
import Image from "next/image"
import {Button} from "@/components/ui/Button"
import {Asset} from "contentful"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

interface TestimonialsSectionProps {
    title?: string;
    description?: string;
    galleryImages?: Asset[];
    customizeYourOutfit?: string;
}

export function TestimonialsSection({title, description, galleryImages, customizeYourOutfit}: TestimonialsSectionProps) {

    const testimonials = [
        {
            name: "John S.",
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum eros et ligula vehicula, non lacinia risus ultricies. Donec efficitur, nisi id faucibus aliquam. Curabitur Lorem ipsum amet eget elit porta.",
        },
        {
            name: "Jane D.",
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum eros et ligula vehicula, non lacinia risus ultricies. Donec efficitur, nisi id faucibus aliquam. Curabitur Lorem ipsum amet eget elit porta.",
        },
        {
            name: "Mike R.",
            rating: 5,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum eros et ligula vehicula, non lacinia risus ultricies. Donec efficitur, nisi id faucibus aliquam. Curabitur Lorem ipsum amet eget elit porta.",
        },
    ]

    const processedImages = galleryImages?.map((asset, index) => {
        const url = asset?.fields?.file?.url;
        const imageUrl = url ? (String(url).startsWith('//') ? `https:${url}` : String(url)) : '';
        return {
            url: imageUrl,
            title: asset?.fields?.title || asset?.fields?.file?.fileName || `Gallery image ${index + 1}`,
        };
    }).filter(item => item.url) || [];

    return (
        <section className="pt-0 pb-16 md:pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-8">

                    <h2 className="font-['Sofia_Pro'] font-normal text-[32px] leading-[40px] tracking-[0.04em] text-[#01005B] text-center">
                        {title || 'What are our fans saying?'}
                    </h2>

                    <p className="font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869] text-center max-w-2xl mx-auto">
                        {description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.'}
                    </p>

                    <div className="pt-8 pb-8">
                        {processedImages.length > 0 ? (
                            <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                                {processedImages.map((image, i) => (
                                    <div key={i} className="relative aspect-square rounded overflow-hidden bg-gray-200">
                                        <Image
                                            src={image.url}
                                            alt={String(image.title)}
                                            fill
                                            className="object-cover"
                                            unoptimized
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="relative w-full">
                                <Image
                                    src="/Group 4522.jpg"
                                    alt="Customer testimonials gallery"
                                    width={1465}
                                    height={263}
                                    className="w-full h-auto rounded-lg"
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>

                    <div className="pt-4 relative px-4 md:px-20">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            navigation={{
                                prevEl: '.testimonials-prev',
                                nextEl: '.testimonials-next',
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 20,
                                    centeredSlides: true,
                                },
                                768: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 30,
                                    centeredSlides: true,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 40,
                                    centeredSlides: true,
                                }
                            }}
                            className="testimonials-swiper"
                        >
                            {testimonials.map((testimonial, i) => (
                                <SwiperSlide key={i}>
                                    <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col shadow-sm h-full">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold shrink-0 text-lg">
                                                {testimonial.name
                                                    .split(" ")
                                                    .map((n) => n[0])
                                                    .join("")}
                                            </div>
                                            <div>
                                                <p className="font-bold text-gray-900 text-base">
                                                    {testimonial.name}
                                                </p>
                                                <div className="flex gap-0.5 mt-1">
                                                    {Array.from({length: testimonial.rating}).map((_, j) => (
                                                        <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400"/>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {testimonial.text}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer outline-none disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronLeft className="w-10 h-10" strokeWidth={1.5} />
                        </button>
                        <button className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors cursor-pointer outline-none disabled:opacity-30 disabled:cursor-not-allowed">
                            <ChevronRight className="w-10 h-10" strokeWidth={1.5} />
                        </button>
                    </div>

                    <div className="pt-12 flex flex-col items-center">
                        <Button className="bg-[#01005B] hover:bg-blue-800 text-white px-8">
                            {customizeYourOutfit || 'Customize Your Outfit'}
                        </Button>
                        <div className="flex items-center justify-center gap-1 mt-3">
                            {Array.from({length: 5}).map((_, i) => (
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