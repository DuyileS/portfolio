"use client"

import FeaturedStack from "@/components/FeaturedStack";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const year = new Date().getFullYear();

const Page = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={"/aboutPage.jpg"}
          alt="Background"
          fill
          className="object-cover object-center md:object-[50%_20%] 2xl:object-[10%_30%]"
          quality={100}
          priority
        />
        <div className="relative z-10 px-8 py-12 text-white">
          <Navbar />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-80 md:pt-80 lg:pt-64">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-2xl">
                <span className="text-white">&copy;</span>
                {year}
              </p>
              <p className="text-white font-bold text-4xl md:text-6xl lg:text-[80px]">
                About David<span className="text-[#5b1219]">*</span>
              </p>
            </div>
            <div className="flex flex-col mt-8 md:mt-0 lg:w-1/3">
              <p className="font-semibold text-lg md:text-xl lg:text-2xl text-white">
                <span className="lg:pl-24">From eye-catching visuals to meaningful design stories, I bring
                ideas to life with creativity and intention.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FeaturedStack />
      <Footer />
    </>
  );
};

export default Page;
