// "use client";

// import { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import WorkCard from "./WorkCard";
// import { works } from "@/constants";

// export default function StackedWorks() {
//     const ref = useRef(null);
  
//     const { scrollYProgress } = useScroll({
//       target: ref,
//       offset: ["start start", "end end"],
//     });
  
//     // Transform second row from below the viewport to overlay the first row
//     const y2 = useTransform(scrollYProgress, [0, 1], [400, 0]);
  
//     const row1 = works.slice(0, 2);
//     const row2 = works.slice(2, 4);
  
//     return (
//       <div>
//         {/* Stacked cards section - tall enough to complete animation */}
//         <section ref={ref} className="relative h-[350vh]">
//           <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//             <div className="relative w-full max-w-5xl mx-auto px-4">
  
//               {/* ROW 1 — Fixed position */}
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                 {row1.map((work) => (
//                   <WorkCard key={work.id} {...work} />
//                 ))}
//               </div>
  
//               {/* ROW 2 — Slides up from below */}
//               <motion.div
//                 style={{ y: y2 }}
//                 className="absolute inset-0 pt-6"
//               >
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {row2.map((work) => (
//                     <WorkCard key={work.id} {...work} />
//                   ))}
//                 </div>
//               </motion.div>
  
//             </div>
//           </div>
//         </section>
//       </div>
//     );
//   }
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
  
    // Transform second row from completely below to overlay the first row
    // Card height (h-64 = 256px) + gap (gap-6 = 24px) = 280px minimum
    const y2 = useTransform(scrollYProgress, [0, 1], [500, 0]);
  
    const row1 = works.slice(0, 2);
    const row2 = works.slice(2, 4);
  
    return (
      <div className="h-full">
        {/* Stacked cards section - tall enough to complete animation */}
        <section ref={ref} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <div className="relative w-full max-w-5xl mx-auto px-4">
  
              {/* ROW 1 — Fixed position */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {row1.map((work) => (
                  <WorkCard key={work.id} {...work} />
                ))}
              </div>
  
              {/* ROW 2 — Slides up from below */}
              <motion.div
                style={{ y: y2 }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-24">
                  {row2.map((work) => (
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
