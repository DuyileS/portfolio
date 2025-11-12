"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WorkCard from "./WorkCard";
import { works } from "@/constants";

export default function StackedWorks() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Each row animates in sequence with pauses to view them
  const y2 = useTransform(scrollYProgress, [0.15, 0.3], [window.innerHeight, 0]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.5], [window.innerHeight, 0]);
  const y4 = useTransform(scrollYProgress, [0.55, 0.7], [window.innerHeight, 0]);
  const y5 = useTransform(scrollYProgress, [0.75, 0.9], [window.innerHeight, 0]);

  const row1 = works.slice(0, 2);
  const row2 = works.slice(2, 4);
  const row3 = works.slice(4, 6);
  const row4 = works.slice(6, 8);
  const row5 = works.slice(8, 10);

  return (
    <div className="h-full">
      {/* Increase height to allow time to view each row */}
      <section ref={ref} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="relative w-full max-w-5xl mx-auto px-4">
            {/* ROW 1 — Fixed position */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {row1.map((work) => (
                <WorkCard key={work.id} {...work} />
              ))}
            </div>

            {/* ROW 2 — Slides up from below */}
            <motion.div style={{ y: y2 }} className="absolute inset-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {row2.map((work) => (
                  <WorkCard key={work.id} {...work} />
                ))}
              </div>
            </motion.div>

            {/* ROW 3 */}
            <motion.div style={{ y: y3 }} className="absolute inset-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {row3.map((work) => (
                  <WorkCard key={work.id} {...work} />
                ))}
              </div>
            </motion.div>

            {/* ROW 4 */}
            <motion.div style={{ y: y4 }} className="absolute inset-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {row4.map((work) => (
                  <WorkCard key={work.id} {...work} />
                ))}
              </div>
            </motion.div>

            {/* ROW 5 */}
            <motion.div style={{ y: y5 }} className="absolute inset-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {row5.map((work) => (
                  <WorkCard key={work.id} {...work} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}