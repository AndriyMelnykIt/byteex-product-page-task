'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ImpactSectionProps {
    title?: string;
    co2Saved?: string;
    waterSaved?: string;
    energySaved?: string;
}

function parseNumber(value: string): number {
    const numStr = value.replace(/[^\d]/g, '');
    return parseInt(numStr, 10) || 0;
}

function getUnit(value: string): string {
    const match = value.match(/[a-zA-Z]+/);
    return match ? ` ${match[0]}` : '';
}

function useCountUp(end: number, duration: number = 2000, isVisible: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        const startValue = 0;

        const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, isVisible]);

    return count;
}

export function ImpactSection({
                                  title,
                                  co2Saved,
                                  waterSaved,
                                  energySaved
                              }: ImpactSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    const co2Value = "3,927 kg";
    const waterValue = "2,546,167 days";
    const energyValue = "7,321 kWh";

    const co2Number = parseNumber(co2Value);
    const waterNumber = parseNumber(waterValue);
    const energyNumber = parseNumber(energyValue);

    const co2Unit = getUnit(co2Value);
    const waterUnit = getUnit(waterValue);
    const energyUnit = getUnit(energyValue);

    const co2Count = useCountUp(co2Number, 2000, isVisible);
    const waterCount = useCountUp(waterNumber, 2500, isVisible);
    const energyCount = useCountUp(energyNumber, 2000, isVisible);

    const formatNumber = (num: number): string => {
        return num.toLocaleString('en-US');
    };

    const stats = [
        {
            iconSvg: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.132 20.177 10.244 17.819 10.034C17.657 6.657 14.812 4 11.25 4C7.36 4 4.259 6.89 3.74 10.663C1.567 11.164 0 13.085 0 15.375C0 17.929 2.071 20 4.625 20H17.5V19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">CO2</text>
                </svg>
            ),
            value: `${formatNumber(co2Count)}${co2Unit}`,
            label: co2Saved || "of CO2 saved",
        },
        {
            iconSvg: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C16.4183 22 20 18.4183 20 14C20 8 12 2 12 2C12 2 4 8 4 14C4 18.4183 7.58172 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontSize="6" fontWeight="bold" fill="currentColor">H₂O</text>
                </svg>
            ),
            value: `${formatNumber(waterCount)}${waterUnit}`,
            label: waterSaved || "of drinking water saved",
        },
        {
            iconSvg: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            value: `${formatNumber(energyCount)}${energyUnit}`,
            label: energySaved || "of energy saved",
        },
    ]

    return (
        <section ref={sectionRef} className="bg-[#F0EEEF] w-full flex justify-center">
            <div className="w-full max-w-[1464px] min-h-[246px] px-4 py-8 md:py-0 flex flex-col justify-center items-center">

                <div className="w-full text-center space-y-4 md:space-y-6 lg:space-y-8">
                    <h2 className="font-['Sofia_Pro'] text-xl md:text-2xl lg:text-3xl font-normal text-[#01005B]">
                        {title || 'Our total green impact'}
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto">
                        {stats.map((stat, i) => (
                            <React.Fragment key={i}>
                                <div className={`flex-1 px-4 py-4 md:py-0 w-full md:w-auto flex flex-col items-center ${i === 2 ? 'hidden md:flex' : ''}`}>
                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#E2E2E5] flex items-center justify-center mb-3 text-[#01005B]">
                                        <div className="w-6 h-6 md:w-8 md:h-8">
                                            {stat.iconSvg}
                                        </div>
                                    </div>
                                    <div className="space-y-1 text-center">
                                        <p className="font-['Sofia_Pro'] text-xl md:text-2xl lg:text-[28px] font-bold text-[#01005B] leading-tight">
                                            {stat.value}
                                        </p>
                                        <p className="font-['Sofia_Pro'] font-normal text-xs md:text-sm lg:text-[14px] leading-[18px] md:leading-[20px] tracking-[0.03em] text-[#01005B]">
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                                {i < stats.length - 1 && i !== 2 && (
                                    <div className="w-full h-px bg-gray-300 md:hidden my-2"></div>
                                )}
                                {i < stats.length - 1 && (
                                    <div className="hidden md:block w-px h-24 bg-gray-300 mx-4"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}