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
          src={"/BlackSymbol.png"}
          alt="Background"
          fill
          className="object-cover object-center md:object-[45%_30%]"
          quality={100}
          priority
        />
        <div className="relative z-10 px-8 py-12 text-white">
          <Navbar />
          <div className="flex flex-col space-y-4 pt-80 md:pt-80 lg:pt-64">
            <div className="flex flex-col font-typologic space-y-4 gap-1">
              <div className="flex rounded-md bg-red-200/50 backdrop-blur-sm shadow-lg w-32 h-8 justify-center text-center items-center gap-2 p-2">
                <Icon
                  icon="mdi:calendar-month"
                  className="w-4 h-4 text-[#5b1219] font-bold"
                />
                <p className="text-[#5b1219] text-xl font-semibold">{year}</p>
              </div>
              <p className="text-white font-typologic tracking-wider font-bold text-6xl lg:text-8xl">
                Tashabite
              </p>
            </div>
            <hr className="text-white w-[30%]" />
            <div className="flex font-sf-pro flex-col mt-8 md:mt-0 lg:w-[40%]">
              <p className="font-semibold text-lg lg:text-2xl text-white">
                Tashabite is a fast-food brand that delivers freshly prepared,
                flavorful, and satisfying meals to a youthful urban audience.
                The brand stands for quick service, great taste, and an
                expressive personality that connects with everyday Nigerian
                street energy and slang.
              </p>
            </div>
            <div className="flex gap-4 mt-2 flex-wrap">
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
          <h1 className="font-bold text-3xl my-0 md:my-10 lg:my-0 md:text-5xl pb-4">
            <span className="pl-28">
              Inspired by street food culture, bold graphics, and a sense of
              playful energy, the design uses a high-contrast color palette of
              black and yellow to immediately grab attention®
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
                The inspiration for Tashabite came from the vibrancy and humor
                embedded in Nigerian pop culture. I wanted to capture the
                spontaneous joy around food, how it brings people together and
                becomes a part of everyday banter. The visual language draws
                from local slang, bold typography, and playful illustrations to
                create a brand that feels familiar, authentic, and fun.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/Coffee_Cup.png"}
          alt="Product"
          fill
          className="object-contain md:object-cover object-center rounded-lg"
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
            Developing a distinct brand identity capable of standing out in a
            highly competitive market , which required the difficult task of
            balancing visual sophistication and a premium look
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <p className="font-medium">
                The client needed a distinct identity that would stand out in a
                highly competitive fast-food market. They wanted a brand that
                looked premium but still appealed to a younger demographic,
                something modern, lively, and unmistakably local. The challenge
                was to balance visual sophistication with the raw energy and
                humor of street culture.
              </p>
              <Number id={"1"} totalNum={4} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/tashabite_problem.png"}
          alt="Product"
          fill
          className="object-contain md:object-cover object-center rounded-lg"
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
            Implementing a comprehensive visual identity system that
            successfully bridges youthful playfulness with professional
            consistency , utilizing a logotype with confident strokes and a bold
            yellow and deep black color palette for instant recognition.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <p className="font-medium">
                I developed a visual identity system that bridges youthful
                playfulness with professional consistency. The logotype combines
                smooth curves and confident strokes to express approachability
                and reliability. Supporting graphic elements such as
                illustrations, catchy phrases, and pattern compositions extend
                the brand’s personality across packaging and marketing
                materials. The color palette of bold yellow and deep black
                creates strong visual contrast and instant recognition.
              </p>
              <Number id={"2"} totalNum={4} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/tashabite_solution.png"}
          alt="Product"
          fill
          className="object-contain md:object-cover object-center rounded-lg"
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
            Tashabite celebrates the joy and expression that comes with enjoying
            good pastries. Every element, from the slang-filled pattern design
            to the expressive typography, communicates energy, satisfaction, and
            cultural relevance.
          </h1>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <p className="font-medium">
                The concept centers on{" "}
                <span className="italic">“Every bite, a Vibe.” </span>
                Tashabite’s brand identity celebrates the joy and expression
                that comes with enjoying good pastries. From the slang-filled
                pattern design to the expressive typography, every element
                communicates energy, satisfaction, and cultural relevance. The
                goal was to make the brand feel like an experience. Fresh, bold,
                and proudly local.
              </p>
              <Number id={"3"} totalNum={4} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-[75vh] lg:min-h-screen rounded-lg mx-8 md:my-24">
        <Image
          src={"/tashabite_concept.png"}
          alt="Product"
          fill
          className="object-contain md:object-cover object-center rounded-lg"
          quality={100}
          priority
        />
      </div>
      <Footer />
    </>
  );
};

export default Page;
