'use client';

import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { Asset } from 'contentful';
import { Truck, ShieldCheck, Leaf } from "lucide-react";

interface ProductGallerySectionProps {
  title?: string;
  subtitle?: string;
  images?: Asset[];
  buttonText?: string;
}

export function ProductGallerySection({
                                        title,
                                        subtitle,
                                        images,
                                        buttonText
                                      }: ProductGallerySectionProps) {

  const processedImages = images?.map((asset, index) => {
    const url = asset?.fields?.file?.url;
    const imageUrl = url ? (String(url).startsWith('//') ? `https:${url}` : String(url)) : '';
    return {
      url: imageUrl,
      title: asset?.fields?.title || asset?.fields?.file?.fileName || `Product ${index + 1}`,
    };
  }).filter(item => item.url) || [];

  return (
      <section className="relative py-16 md:py-24 bg-white overflow-hidden">

        <div className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#FFF9F5] to-transparent -z-10" />

        <div className="absolute bottom-0 left-0 w-full h-1/2 z-0"
             style={{
               background: 'linear-gradient(180deg, rgba(249, 240, 229, 0) 0%, rgba(249, 240, 229, 0.18) 43.05%, #F9F0E5 100%)',
             }}
        />

        <div className="container mx-auto px-4 relative z-10">

          <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
            <h2 className="font-['Sofia_Pro'] text-[32px] font-normal text-[#01005B] leading-[40px] tracking-[0.04em] text-center">
              {title || 'Find something you love.'}
            </h2>
            <p className="font-['Sofia_Pro'] text-[#676869] max-w-2xl mx-auto leading-relaxed text-[14px] px-4 md:hidden">
              Click below to browse our collection!
            </p>
            <p className="font-['Sofia_Pro'] text-[#676869] max-w-2xl mx-auto leading-relaxed text-[15px] px-4 hidden md:block">
              {subtitle || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12">
            {processedImages.slice(0, 3).map((image, index) => (
                <Image
                    key={index}
                    src={image.url}
                    alt={String(image.title)}
                    width={350}
                    height={450}
                    className="object-cover w-full max-w-[280px] md:max-w-[350px] h-auto rounded-lg"
                    unoptimized
                />
            ))}
          </div>

          <div className="flex flex-col items-center">
            <Button className="bg-[#01005B] hover:bg-blue-900 text-white px-6 md:px-10 py-4 md:py-6 w-full max-w-[374px] h-[48px] md:h-[56px] rounded text-sm md:text-base font-['Sofia_Pro'] tracking-wide flex items-center justify-center gap-2">
              {buttonText || 'Customize Your Outfit'}
            </Button>

            <div className="flex items-center justify-center gap-1 mt-3 md:hidden">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
              <span className="text-xs text-gray-600 ml-2">Over 500+ 5 Star Reviews Online</span>
            </div>

            <div className="hidden md:flex items-center gap-3 px-4 py-2">
              <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Ships in 1-2 Days
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex gap-1">
                <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-[6px] text-white font-bold">AMEX</div>
                <div className="w-8 h-5 bg-black rounded flex items-center justify-center text-[6px] text-white font-bold">APPLE</div>
                <div className="w-8 h-5 bg-[#F79E1B] rounded flex items-center justify-center text-[6px] text-white font-bold">MC</div>
                <div className="w-8 h-5 bg-[#1A1F71] rounded flex items-center justify-center text-[6px] text-white font-bold">VISA</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-wrap justify-center items-center gap-[10px] my-5 max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#F0EEEF] flex items-center justify-center text-[#676869] shrink-0">
                <Truck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="font-['Sofia_Pro'] text-[#676869] text-sm leading-tight">
                  FREE Shipping on <br/> Orders over $200
                </p>
              </div>
            </div>

            <div className="hidden md:block h-10 w-px bg-gray-300 mx-5"></div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#F0EEEF] flex items-center justify-center text-[#676869] shrink-0">
                <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="font-['Sofia_Pro'] text-[#676869] text-sm leading-tight">
                  Over 500+ 5 Star <br/> Reviews Online
                </p>
              </div>
            </div>

            <div className="hidden md:block h-10 w-px bg-gray-300 mx-5"></div>

            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#F0EEEF] flex items-center justify-center text-[#676869] shrink-0">
                <Leaf className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="font-['Sofia_Pro'] text-[#676869] text-sm leading-tight">
                  Made ethically <br/> and responsibly.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
  )
}