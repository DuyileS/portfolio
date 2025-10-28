import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  endValue: number;
  duration?: number; // Duration in milliseconds (default to 2000ms)
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ 
  endValue, 
  duration = 2000, 
  prefix = '', 
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // 1. Setup Intersection Observer to detect when element is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is intersecting (visible), set inView to true
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target); // Stop observing once triggered
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return; // Only run the count animation when in view

    // 2. Calculate animation details
    const startTime = Date.now();
    const interval = 10; // Update every 10ms
    const totalSteps = duration / interval;
    const stepValue = endValue / totalSteps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const timeElapsed = Date.now() - startTime;
      
      // Calculate the current value based on elapsed time (smooth ease-out)
      // This uses a simple linear calculation for simplicity.
      const newValue = Math.min(endValue, Math.floor(stepValue * currentStep));
      setCount(newValue);
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCount(endValue); // Ensure the final value is exactly the endValue
      }
    }, interval);

    // Cleanup function
    return () => clearInterval(timer);
  }, [endValue, duration, inView]); // Rerun if endValue or inView changes

  // Use toLocaleString for number formatting (e.g., 1,000)
  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default Counter;