"use client"

import ApproachSection from "@/components/ApproachSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import StatsFacts from "@/components/StatsFacts";
import Testimonial from "@/components/Testimonial";
import { homeDescription } from "@/constants";
import Image from "next/image";

export default function Home() {

  const year = new Date().getFullYear();

  return (
    <>
      <div className="relative min-h-screen w-full">
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
            <p className="font-semibold text-4xl"><span className="text-white">&copy;</span>{year}</p>
            <div className="flex flex-col mt-4 lg:mt-0 lg:w-1/3">
              <Image
                src={"/dm_globe.png"}
                alt="Globe"
                width={100}
                height={100}
                className="md:ml-16 hidden lg:inline lg:ml-48 mb-4"
              />
              <p className="font-semibold font-sf-pro-display text-lg md:text-2xl"><span className="lg:pl-24">{homeDescription}</span></p>
            </div>
          </div>
        </div>
      </div>
      <Intro />
      <ApproachSection />
      <StatsFacts />
      <Testimonial />
      <Contact />
      <Footer/>
    </>
  );
}
