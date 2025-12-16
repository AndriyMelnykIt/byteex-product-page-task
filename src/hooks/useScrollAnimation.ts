'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(options?: {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, options?.delay || 0);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || '0px 0px -50px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options?.threshold, options?.rootMargin, options?.delay]);

  return { ref, isVisible };
}
