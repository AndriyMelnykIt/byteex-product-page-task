import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { Asset } from 'contentful'

interface HeroSectionProps {
    title?: string;
    features?: string[];
    ctaText?: string;
    heroImages?: Asset;
}

const icons = [
    "/icon/Component 4.svg",
    "/icon/Component 27.svg",
    "/icon/Component 28.svg"
];

function HeroSection({ title, features, ctaText, heroImages }: HeroSectionProps) {
    if (!title || !features || features.length === 0 || !ctaText) {
        return null;
    }

    let imageUrl = "https://placehold.co/600x400/f5f5f5/333333?text=Loungewear";

    if (heroImages?.fields?.file?.url) {
        const url = String(heroImages.fields.file.url);
        imageUrl = url.startsWith("//") ? `https:${url}` : url;
    }

    return (
        <section className="container mx-auto px-4 py-0 pb-20 lg:pb-24">

            <div className="max-w-[375px] mx-auto lg:hidden">

                <div className="mb-2 text-center">
                    <h1 className="font-['Sofia_Pro'] font-normal text-[26px] leading-[34px] tracking-[0.04em] text-[#01005B] inline-block">
                        {title}
                    </h1>
                </div>

                <div className="mb-2">
                    <div className="relative w-full h-[260px] rounded-lg overflow-hidden bg-gray-50">
                        <Image
                            src={imageUrl}
                            alt="Comfortable loungewear"
                            fill
                            className="object-contain"
                            unoptimized
                        />
                    </div>
                </div>

                <div className="space-y-[15px] mb-6">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-orange-50/50">
                                <Image
                                    src={icons[index] || icons[0]}
                                    alt=""
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <p className="font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869]">
                                {feature}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="pb-6">
                    <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white h-[56px] rounded-[5px] text-base">
                        {ctaText}
                    </Button>
                </div>
            </div>

            {/* DESKTOP VERSION */}
            <div className="hidden lg:grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="lg:max-w-[592px] font-['Sofia_Pro'] font-normal text-[38px] leading-[45px] tracking-[0.04em] text-[#01005B]">
                            {title}
                        </h1>
                    </div>

                    <div className="space-y-[15px]">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-orange-50/50">
                                    <Image
                                        src={icons[index] || icons[0]}
                                        alt=""
                                        width={31}
                                        height={31}
                                        className="w-6 h-6 text-blue-900"
                                    />
                                </div>
                                <p className="lg:pt-2 font-['Sofia_Pro'] font-normal text-[15px] leading-[23px] tracking-[0.03em] text-[#676869]">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center lg:justify-start">
                        <Button className="bg-[#01005B] hover:bg-blue-800 text-white px-8 h-12 rounded-full text-base">
                            {ctaText}
                        </Button>
                    </div>
                </div>

                <div className="relative h-[600px]">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Image
                            src={imageUrl}
                            alt="Comfortable loungewear"
                            fill
                            className="object-cover rounded-lg"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
