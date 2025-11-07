"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CountUpProps {
  value: number;
  duration?: number;
  suffix: string
}

export default function OdometerCounter({ value, duration = 2, suffix }: CountUpProps) {
  
  const motionValue = useMotionValue(0);

  const ref = useRef(null);                // attaches to the component
  const isInView = useInView(ref, {
    once: true,                             // only animate the first time it appears
    margin: "0px 0px -20% 0px",             // starts animation a bit early
  });

  // Convert the animated number to an integer for display
  const rounded = useTransform(motionValue, (latest) =>
    Math.floor(latest).toLocaleString()
  );
  //   setHasMounted(true);
  // }, []);

  // useEffect(() => {

  //   if(!hasMounted) return;

  //   const controls = animate(motionValue, value, {
  //     duration: duration,
  //     ease: "easeOut",
  //   });

  //   return () => controls.stop();
  // }, [hasMounted, value]);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView]);

  return (
    <motion.span
      ref={ref}
      className="text-8xl font-extrabold tracking-tight flex items-end gap-1"
    >
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-[0.8em] opacity-80">{suffix}</span>}
    </motion.span>
  );
}
