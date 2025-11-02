import React from "react";
import Card from "./Card";
import { Icon } from "@iconify/react";
import { tools } from "@/constants";

const year = new Date().getFullYear();

const FeaturedStack = () => {
  return (
    <div className="h-full md:min-h-screen 2xl:min-h-0 2xl:h-full p-4">
      <div className="flex justify-between">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Featured Stack</span>
        </p>
        <p className="font-semibold text-2xl">
          <span>&copy;</span>
          {year}
        </p>
      </div>
      <div className="flex justify-center mt-24">
        <div className="flex rounded-md bg-red-200 w-32 h-8 justify-center text-center items-center gap-2 p-2">
          <Icon
            icon="ph:user-circle-check-light"
            className="w-4 h-4 text-[#5b1219] font-bold"
          />
          <p className="text-[#5b1219] font-semibold">Daily Stack</p>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <h1 className="text-center font-bold text-6xl mt-8">Favourite Tools</h1>
        <p className="text-center mt-4 text-gray-500 font-medium">
          My favorite stack include Adobe Photoshop, After Effects, and other
          cutting-edge technologies to ensure seamless <br className="hidden lg:block" /> and dynamic
          designs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:max-w-[60%] gap-4 mt-4 mx-auto">
        {tools.map((tool) => (
          <Card
            key={tool.id}
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            rating={tool.rating}
            totalLength={tools.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedStack;
