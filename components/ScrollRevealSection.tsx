"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollRevealSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Slide left block
  const leftX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);

  // Slide right block
  const rightX = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  // Slide bottom block up
  const bottomY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);

  return (
    <section ref={ref} className="relative h-[250vh] bg-black overflow-hidden">

      {/* Actual content */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <img
          src="/your-image.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      {/* MASK BLOCKS */}
      <div className="sticky top-0 h-screen w-full pointer-events-none">

        {/* Top left block */}
        <motion.div
          className="absolute top-0 left-0 bg-white h-1/2 w-1/2"
          style={{ x: leftX }}
        />

        {/* Top right block */}
        <motion.div
          className="absolute top-0 right-0 bg-white h-1/2 w-1/2"
          style={{ x: rightX }}
        />

        {/* Bottom full block */}
        <motion.div
          className="absolute bottom-0 left-0 bg-white h-1/2 w-full"
          style={{ y: bottomY }}
        />
      </div>
    </section>
  );
}
