interface ImpactSectionProps {
    title?: string;
    co2Saved?: string;
    waterSaved?: string;
    energySaved?: string;
}

export function ImpactSection({
    title,
    co2Saved,
    waterSaved,
    energySaved
}: ImpactSectionProps) {
    const stats = [
        {
            icon: (
                <div className="w-16 h-16 rounded-full bg-[#E2E2E5] flex items-center justify-center mx-auto mb-3 text-[#01005B]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.819 10.034C17.657 6.657 14.812 4 11.25 4C7.36 4 4.259 6.89 3.74 10.663C1.567 11.164 0 13.085 0 15.375C0 17.929 2.071 20 4.625 20H17.5V19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">CO2</text>
                    </svg>
                </div>
            ),
            value: "3,927 kg",
            label: co2Saved || "of CO2 saved",
        },
        {
            icon: (
                <div className="w-16 h-16 rounded-full bg-[#E2E2E5] flex items-center justify-center mx-auto mb-3 text-[#01005B]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">H₂O</text>
                    </svg>
                </div>
            ),
            value: "2,546,167 days",
            label: waterSaved || "of drinking water saved",
        },
        {
            icon: (
                <div className="w-16 h-16 rounded-full bg-[#E2E2E5] flex items-center justify-center mx-auto mb-3 text-[#01005B]">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
            ),
            value: "7,321 kWh",
            label: energySaved || "of energy saved",
        },
    ]

    return (
        <section className="bg-[#F0EEEF] w-full flex justify-center">
            <div className="w-full max-w-[1464px] min-h-[246px] px-4 py-8 md:py-0 flex flex-col justify-center items-center">

                <div className="w-full text-center space-y-6 md:space-y-8">
                    <h2 className="font-['Sofia_Pro'] text-3xl md:text-4xl font-normal text-[#01005B]">
                        {title || 'Our total green impact'}
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center w-full md:divide-x divide-gray-300">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex-1 px-4 py-6 md:py-0 w-full md:w-auto">
                                {stat.icon}
                                <div className="space-y-1">
                                    <p className="font-['Sofia_Pro'] text-2xl md:text-[28px] font-bold text-[#01005B] leading-tight">
                                        {stat.value}
                                    </p>
                                    <p className="font-['Sofia_Pro'] font-normal text-[14px] leading-[20px] tracking-[0.03em] text-center text-[#01005B]">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
