import { Icon } from "@iconify/react";
import React from "react";
import WorkCard from "./WorkCard";
import { features } from "@/constants";

const FeaturedPortfolio = () => {
  const year = new Date().getFullYear();

  return (
    <div className="lg:min-h-screen font-sf-pro 2xl:min-h-0 2xl:h-full p-4">
      <hr className="text-gray-200" />
      <div className="flex justify-between mb-8 my-4">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Featured Works</span>
        </p>
        <p className="font-semibold text-2xl">
          <span>&copy;</span>
          {year}
        </p>
      </div>
      <div className="flex justify-center mt-24">
        <div className="flex rounded-md bg-red-200 w-32 h-8 justify-center text-center items-center gap-2 p-2">
          <Icon
            icon="ph:stack-fill"
            className="w-4 h-4 text-[#5b1219] font-bold"
          />
          <p className="text-[#5b1219] font-semibold">Portfolio</p>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <h1 className="text-center font-bold text-6xl mt-8">Featured Portfolio®</h1>
        <p className="text-center mt-4 text-gray-500 font-medium">
         Explore a collection of high-quality, innovative designs crafted 
         to elevate brands and captivate <br className="hidden lg:block" /> audiences. Each project 
         reflects my commitment to creativity and excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6">
        {features.map((feature) => (
          <React.Fragment key={feature.id}>
            <WorkCard
              img={feature.img}
              name={feature.name}
              themes={feature.themes}
              href={feature.href}
              year={feature.year}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPortfolio;
