// components/HeroSection.tsx
"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  // 1. Create a reference to the component's container element
  const targetRef = useRef<HTMLDivElement | null>(null);

  // 2. useScroll hook to track scroll progress within the container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    // Animate from the start of the element until it's fully scrolled past
    offset: ["start start", "end start"], 
  });

  // 3. Parallax for the background image
  // Move the image up by 50% of the scroll distance for a slow, subtle effect
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); 

  // 4. Transform for the foreground text and white block
  // Move the text and block up by 200% for a faster scroll-away effect
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] w-full">
      {/* We use a sticky container to keep the animation in view while scrolling */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div style={{ y: imageY }} className="absolute inset-0 z-0">
          <Image
            src="/momodu.jpg"
            alt="Background"
            fill
            className="object-cover object-center md:object-[50%_20%]"
            quality={100}
            priority
          />
        </motion.div>

        {/* Foreground Content (Text and White Block) */}
        {/* This div will move up together based on the `textY` transform */}
        <motion.div 
          style={{ y: textY }} 
          className="relative z-10 flex h-full flex-col"
        >
          {/* Top part with the large text */}
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-8xl md:text-9xl font-bold text-white">
              Momodu
              <span className="text-red-500">*</span>
            </h1>
          </div>

          {/* Bottom part which is a solid white block */}
          {/* This block moves with the text, creating the reveal effect */}
          <div className="flex-1 bg-white" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;