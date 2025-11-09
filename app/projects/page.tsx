"use client"

import FeaturedWork from "@/components/FeaturedWork";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const year = new Date().getFullYear();

const Page = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={"/worksPage.jpg"}
          alt="Background"
          fill
          className="object-cover object-center md:object-[45%_30%]"
          quality={100}
          priority
        />
        <div className="relative z-10 px-8 py-12 text-white">
          <Navbar />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-80 md:pt-80 lg:pt-64">
            <div className="flex flex-col font-typologic gap-1">
              <p className="font-semibold text-2xl">
                <span className="text-white">&copy;</span>
                {year}
              </p>
              <p className="text-white font-typologic tracking-wider font-bold text-8xl lg:text-8xl">
                Projects<span className="text-[#5b1219]">*</span>
              </p>
            </div>
            <div className="flex font-sf-pro flex-col mt-8 md:mt-0 lg:w-[40%]">
              <p className="font-semibold text-lg lg:text-2xl text-white">
                <span className="lg:pl-24">From pixel-perfect visual identities and immersive experiences
                to print-ready collateral, every project showcases my passion
                for creative innovation.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <FeaturedWork />
      <Footer />
    </>
  );
};

export default Page;
