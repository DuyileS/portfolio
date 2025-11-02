import { works } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";
import WorkCard from "./WorkCard";

const FeaturedWork = () => {
  const year = new Date().getFullYear();

  return (
    <div className="lg:min-h-screen 2xl:min-h-0 2xl:h-full p-4">
      <div className="flex justify-between mb-8">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-6">
        {works.map((work) => (
          <React.Fragment key={work.id}>
            <WorkCard
              img={work.img}
              name={work.name}
              themes={work.themes}
              totalLength={works.length}
              rating={work.id}
              year={work.year}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
