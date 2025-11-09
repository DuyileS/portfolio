import { stats } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";
import OdometerCounter from "./OdometerCounter";

const StatsFacts = () => {
  return (
    <div className="h-auto font-sf-pro lg:min-h-screen 2xl:min-h-0 2xl:h-full py-4 px-8">
      <hr className="mt-30 text-gray-200" />
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-1 items-start mt-8">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Stats & Facts</span>
        </p>
        <div className="space-y-8">
          <h1 className="font-bold text-xl md:text-5xl md:mt-8">
            <span className="pl-24">
              I take pride in creating solutions that are not only visually
              stunning® but also highly functional. Every number tells a story,
              and I’m excited to bring that same dedication.
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-6 my-24">
        {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col space-y-6 w-full lg:px-12">
                <OdometerCounter value={stat.number} suffix={stat.suffix}/>
                <hr className="text-gray-200" />
                <div className="flex flex-col gap-1">
                    <p className="font-semibold text-2xl">{stat.title}</p>
                    <p className="text-gray-400 font-medium">{stat.info}</p>
                </div>
            </div>
        ))}
      </div>
      <hr className="mt-30 text-gray-200" />
    </div>
  );
};

export default StatsFacts;
