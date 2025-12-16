'use client';

export function AsSeenInSection() {
    return (
        <section className="py-12 md:py-2">
            <div className="container mx-auto px-4">
                <p className="text-xs md:text-sm text-gray-500 mb-6 text-center font-light tracking-widest">
                    as seen in
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100">
                    <span className="text-sm md:text-lg font-light tracking-wider">ECO-STYLIST</span>
                    <span className="text-sm md:text-lg font-serif italic">Canadian Living</span>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-300" />
                        <span className="text-sm md:text-base font-light tracking-wide">JILLIAN HARRIS</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        <span className="text-sm md:text-base font-light">THE ECO HUB</span>
                    </div>
                    <span className="text-sm md:text-base font-bold tracking-wide">TRENDHUNTER</span>
                </div>
            </div>
        </section>
    );
}