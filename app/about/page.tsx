"use client"

import FeaturedStack from "@/components/FeaturedStack";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const year = new Date().getFullYear();

const Page = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-auto">
        <Image
          src={"/aboutPage.jpg"}
          alt="Background"
          fill
          className="object-cover object-[50%_20%]"
          quality={100}
          priority
        />
        <div className="relative z-10 px-8 py-12 text-white">
          <Navbar />
          <div className="flex justify-between items-center mt-80">
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-2xl">
                <span className="text-white">&copy;</span>
                {year}
              </p>
              <p className="text-white font-bold text-8xl">
                About David<span className="text-[#5b1219]">*</span>
              </p>
            </div>
            <div className="flex flex-col w-1/3">
              <p className="font-semibold text-3xl text-white">
                From eye-catching visuals to meaningful design stories, I bring
                ideas to life with creativity and intention.
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
