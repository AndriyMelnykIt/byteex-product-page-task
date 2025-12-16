import { Star } from 'lucide-react';
import Image from 'next/image';
import { placeholders } from '@/lib/placeholder';

export function ReviewCard() {
    return (
        <section className="relative -mt-16 lg:-mt-20 mb-8 lg:mb-12 z-10">
            <div className="container mx-auto px-4 flex justify-center">
                <div className="bg-white border-2 rounded-lg p-4 lg:p-6 max-w-[454px] w-full shadow-lg">
                    <div className="flex items-start gap-3 lg:gap-4">
                        <Image
                            src={placeholders.avatar}
                            alt="Amy P."
                            width={40}
                            height={40}
                            className="rounded-full flex-shrink-0 lg:w-12 lg:h-12"
                            unoptimized
                        />
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-sm lg:text-base text-gray-900">Amy P.</span>
                                <div className="flex gap-0.5 text-yellow-400 text-xs lg:text-sm">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>
                            <p className="text-[10px] lg:text-xs text-gray-500 mb-2">One of 500+ 5 Star Reviews Online</p>
                            <p className="text-xs lg:text-sm text-gray-700 leading-relaxed">
                                Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every
                                level. From the compostable packaging, to the supplied washing bag, even the garments smells like
                                fresh herbs when I first had them.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

