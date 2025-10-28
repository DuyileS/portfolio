import { Icon } from "@iconify/react";
import React from "react";
import Card from "./Card";
import { approaches } from "@/constants";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const ApproachSection = () => {
  const year = new Date().getFullYear();

  return (
    <div className="h-auto md:min-h-screen lg:min-h-screen xl:h-auto py-4 px-8">
      <div className="flex justify-between">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Approach Style</span>
        </p>
        <p className="font-semibold text-2xl">
          <span>&copy;</span>
          {year}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full gap-4 mt-12 mx-auto">
        {approaches.map((approach) => (
          <Card
            key={approach.id}
            title={approach.title}
            description={approach.description}
            rating={approach.id}
            totalLength={approaches.length}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-24">
        <Link href={"/contact"}>
            <AnimatedButton />
        </Link>
        <div className="border border-gray-200 w-1/2 border-x-0">
          {approaches.map((approach, index: number) => (
            <React.Fragment key={approach.id}>
              <div className="flex justify-between py-5">
                <p className="font-semibold">{approach.title}</p>
                <p className="font-semibold">{approach.percentage}</p>
              </div>
              {index < approaches.length - 1 && (
                <hr className="text-gray-200" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApproachSection;
