"use client";

import { useRef } from "react";
import ApproachSection from "@/components/ApproachSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import StatsFacts from "@/components/StatsFacts";
import Testimonial from "@/components/Testimonial";
import { homeDescription } from "@/constants";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Bars from "@/components/Bars/bars";
import FeaturedPortfolio from "@/components/FeaturedPortfolio";



export default function Home() {
  const barsRef = useRef<HTMLDivElement[]>([]);
  const barsSectionRef = useRef<HTMLDivElement>(null);
  const year = new Date().getFullYear();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const bars = barsRef.current;

    const barsTimeline = gsap.timeline();

    barsTimeline
      .set(bars, { scaleY: 0, transformOrigin: "bottom" })
      .to(bars, { scaleY: 1 });

    ScrollTrigger.create({
      trigger: barsSectionRef.current,
      start: "top bottom",
      end: "top top",
      scrub: true,
      animation: barsTimeline,
    });
  });

  return (
    <>
      <div className="relative font-sf-pro min-h-screen w-full">
        <Image
          src={"/momodu.jpg"}
          alt="Background"
          fill
          className="object-cover object-center md:object-[50%_20%] max-h-screen"
          quality={100}
          priority
        />
        <div className="relative z-10 px-8 py-12 text-white overflow-x-hidden">
          <Navbar />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-[145%] md:pt-80 lg:pt-48 mt-20 md:mt-110 2xl:mt-[calc(100vh-35vh)] lg:mt-0">
            <p className="font-semibold font-typologic text-4xl">
              <span className="text-white">&copy;</span>
              {year}
            </p>
            <div className="flex flex-col mt-4 lg:mt-0 lg:w-1/3">
              <Image
                src={"/dm_globe.png"}
                alt="Globe"
                width={100}
                height={100}
                className="md:ml-16 hidden lg:inline lg:ml-48 mb-4"
              />
              <p className="font-semibold font-sf-pro-display text-lg md:text-2xl">
                <span className="lg:pl-24">{homeDescription}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <section
        ref={barsSectionRef}
        className="relative w-full h-screen custom-flex-center bg-background"
      >
        <Bars
          color="white"
          barsRef={barsRef}
          heights={[74, 102, 167, 93, 46]}
          className="origin-bottom scale-y-0" // Initial State
          containerClassName="absolute top-0 left-0 right-0 w-full h-max flex items-end -translate-y-[99%]"
        />
        <Intro />
        <ApproachSection />
        <FeaturedPortfolio />
        <StatsFacts />
        <Testimonial />
        <Contact />
        <Footer />
      </section>
    </>
  );
}
