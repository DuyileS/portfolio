// import React from 'react'

// const AnimatedBlocks = () => {
//   return (
//     <div>AnimatedBlocks</div>
//   )
// }

// export default AnimatedBlocks

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Component that creates the staggered block reveal effect
const ScrollRevealBlocks: React.FC = () => {
  // Ref to track the intro section
  const introRef = useRef<HTMLDivElement>(null);
  
  // useInView hook triggers when the element enters viewport
  // once: true means animation only plays once
  // amount: 0.3 means trigger when 30% of element is visible
  const isInView = useInView(introRef, { 
    once: true,
    amount: 0.3 
  });

  // Container variant controls the stagger timing
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        // Stagger creates delay between each child animation
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  // Individual block animation variants
  const blockVariants = {
    hidden: {
      // Start off-screen to the left
      x: '-100%',
    },
    visible: {
      // Animate to cover the screen
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1] as const, // Custom easing for smooth motion
      }
    },
    exit: {
      // Animate out to the right
      x: '100%',
      transition: {
        duration: 0.5,
        ease: [0.65, 0, 0.35, 1] as const,
        // Delay before animating out
        delay: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-4">Welcome</h1>
          <p className="text-xl">Scroll down to see the animation</p>
          <div className="mt-8 animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Intro Section with Animation Overlay */}
      <section ref={introRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Main Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-white">
          <h2 className="text-5xl font-bold mb-6">Intro Section</h2>
          <p className="text-xl mb-4 leading-relaxed">
            This content was revealed by the animated blocks! The three white rectangles
            swept across the screen in a staggered fashion, creating a dynamic transition
            effect.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            This technique is perfect for adding visual interest to your website and
            creating memorable moments as users scroll through your content. The animation
            uses Framer Motion&apos;s powerful variants system to coordinate the timing of
            multiple elements.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-bold mb-2">Smooth</h3>
              <p className="text-sm opacity-80">Fluid animations with custom easing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-bold mb-2">Staggered</h3>
              <p className="text-sm opacity-80">Sequential timing for visual impact</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="font-bold mb-2">Responsive</h3>
              <p className="text-sm opacity-80">Works perfectly on all screen sizes</p>
            </div>
          </div>
        </div>

        {/* Animated White Blocks Overlay */}
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Three staggered blocks */}
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-white"
              variants={blockVariants}
              // Each block animates: hidden -> visible -> exit
              animate={isInView ? ["hidden", "visible", "exit"] : "hidden"}
            />
          ))}
        </motion.div>
      </section>

      {/* Additional Content Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-pink-600">
        <div className="text-center text-white px-4">
          <h2 className="text-5xl font-bold mb-4">Keep Scrolling</h2>
          <p className="text-xl">The animation only plays once when triggered</p>
        </div>
      </section>
    </div>
  );
};

export default ScrollRevealBlocks;