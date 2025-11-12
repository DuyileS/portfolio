"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Number from "@/components/Number";
import { Icon } from "@iconify/react";
import Image from "next/image";

const year = new Date().getFullYear();

const Page = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={"/mtc_preview.png"}
          alt="Background"
          fill
          className="object-cover object-center md:object-[45%_30%]"
          quality={100}
          priority
        />
        <div className="relative z-10 px-8 py-12 text-white">
          <Navbar />
          <div className="flex flex-col space-y-4 pt-80 md:pt-80 lg:pt-36">
            <div className="flex flex-col font-typologic space-y-4 gap-1">
              <div className="flex rounded-md bg-red-200/50 backdrop-blur-sm shadow-lg w-32 h-8 justify-center text-center items-center gap-2 p-2">
                <Icon
                  icon="mdi:calendar-month"
                  className="w-4 h-4 text-[#5b1219] font-bold"
                />
                <p className="text-[#5b1219] text-xl font-semibold">{year}</p>
              </div>
              <p className="text-white font-typologic tracking-wider font-bold text-6xl lg:text-8xl">
                More Than Conquerors
              </p>
            </div>
            <hr className="text-white w-[30%]" />
            <div className="flex font-sf-pro flex-col mt-8 md:mt-0">
              <p className="font-semibold text-lg lg:text-2xl text-white">
                More Than Conquerors is the official brand identity created for
                a university&apos;s graduating set. The theme captures the
                collective spirit of perseverance, achievement, and triumph that
                defines the graduates’ journey. The brand represents pride,
                unity, and the sense of victory that comes from overcoming
                academic and personal challenges.
              </p>
            </div>
            <div className="flex font-sf-pro gap-4 mt-2 flex-wrap">
              <div className="rounded-full p-3 bg-white/20">
                <p className="font-semibold text-black">Victory</p>
              </div>
              <div className="rounded-full p-3 bg-white/20">
                <p className="font-semibold text-black">Legacy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 font-sf-pro lg:min-h-screen lg:grid-cols-[30%_70%] gap-2 items-start px-8 mt-8">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Know More</span>
        </p>
        <div className="space-y-8">
          <h1 className="font-bold text-3xl my-0 md:my-10 lg:my-0 md:text-4xl pb-4">
            <span className="pl-28">
              The design captures the collective spirit of perseverance,
              achievement, and triumph that defines the graduates’ journey. It
              is designed to represent pride, unity, and the sense of victory
              that comes from overcoming academic and personal challenges.
            </span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <hr className="text-gray-200 w-3/4" />
              <div className="flex">
                <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
                <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
                <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
                <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
                <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
              </div>
              <p className="font-semibold">
                Best Rated Portfolio Around Everywhere
              </p>
              <p className="font-medium">
                The inspiration for this identity came from the phrase More Than
                Conquerors, which signifies strength, resilience, and purpose. I
                wanted to translate that message into a timeless visual identity
                that celebrates both the intellectual and emotional journey of
                the graduating class. The concept draws from classical symbolism
                (the warrior’s helmet) to represent courage and excellence,
                while the refined typography conveys prestige and
                accomplishment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/mtc_inspo.png"}
          alt="Product"
          fill
          className="object-contain lg:object-cover object-center rounded-lg"
          quality={100}
          priority
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] font-sf-pro gap-2 items-start px-8 mt-8 my-20">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Problem</span>
        </p>
        <div className="space-y-8">
          <h1 className="font-bold text-3xl my-0 md:my-10 lg:my-0 pb-4">
            Creating a single, cohesive identity that could visually define the
            graduates&apos; theme across all touchpoints, which required a bold,
            inspirational logo system versatile enough for applications.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <p className="font-medium">
                The graduating set required a cohesive identity that could
                visually define their theme across all touchpoints. They needed
                a logo system that felt bold and inspirational yet adaptable
                enough for diverse applications — from clothing and souvenirs to
                digital and print materials. The challenge was to create
                something that resonated with both the solemnity of graduation
                and the pride of achievement.
              </p>
              <Number id={"1"} totalNum={4} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/mtc_problem.png"}
          alt="Product"
          fill
          className="object-contain object-center rounded-lg"
          quality={100}
          priority
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] font-sf-pro gap-2 items-start px-8 mt-8 my-20">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Solution</span>
        </p>
        <div className="space-y-8">
          <h1 className="font-bold text-3xl my-0 md:my-10 lg:my-0 pb-4">
            Developing a unified branding system centered on a symbolic logo
            featuring a stylized warrior helmet and elegant serif typography,
            designed in three flexible forms (main logo, wordmark, and symbol)
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <p className="font-medium">
                I developed a unified branding system built around a symbolic
                logo featuring a stylized warrior helmet and elegant serif
                typography. The logo was designed in three forms a main logo,
                wordmark, and symbol to ensure consistency and versatility. The
                color palette of deep blue, regal gold, and clean white reflects
                strength, royalty, and purity, aligning perfectly with the
                celebratory tone of the event. The Trajan Pro typeface further
                reinforces a sense of tradition and prestige.
              </p>
              <Number id={"2"} totalNum={4} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/mtc_solution.png"}
          alt="Product"
          fill
          className="object-contain object-center rounded-lg"
          quality={100}
          priority
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] font-sf-pro gap-2 items-start px-8 mt-8 my-20">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Concept</span>
        </p>
        <div className="space-y-8">
          <h1 className="font-bold text-3xl my-0 md:my-10 lg:my-0 pb-4">
            More Than Conquerors is built around the idea of Triumph Through Perseverance, with every
            element, including the gold accents, classical letterforms, and the
            warrior symbol, specifically designed to evoke a strong sense of
            honor and victory.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <p className="font-medium">
                The concept behind{" "}
                <span className="italic">More Than Conquerors</span> centers on
                triumph through perseverance. Every element (from the gold
                accents to the classical letterforms) was designed to evoke a
                sense of honor and victory. The identity celebrates not just
                academic success but the personal growth and resilience that
                shaped the graduating set&apos;s journey. The final design
                creates a lasting emblem of pride and excellence for the class
                it represents.
              </p>
              <Number id={"3"} totalNum={4} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/mtc_concept.png"}
          alt="Product"
          fill
          className="object-contain object-center rounded-lg"
          quality={100}
          priority
        />
      </div>
      <Footer />
    </>
  );
};

export default Page;
