'use client';

import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollAnimationWrapper({ 
  children, 
  delay = 0,
  className = '' 
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation({ delay });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
}

