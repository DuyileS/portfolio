import { Icon } from "@iconify/react";
import React from "react";
import AnimatedButton from "./AnimatedButton";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="h-full font-sf-pro lg:min-h-screen 2xl:min-h-0 2xl:h-full p-4">
      <hr className="text-gray-200" />
      <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-2 items-start mt-8">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Hey, Just An Intro</span>
        </p>
        <div className="space-y-8">
          <h1 className="font-bold text-3xl my-0 md:my-10 lg:my-0 md:text-5xl pb-4">
            <span className="pl-24">A digital designer based in Lagos, passionate about creating
            immersive visual experiences. From crafting realistic renderings to
            dynamic animations and interactions.®</span>
          </h1>
          <Link href={"/contact"}>
             <AnimatedButton />
          </Link>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="space-y-4">
              <hr className="text-gray-200 w-3/4" />
              <p className="font-semibold">Bringing Ideas to Life</p>
              <p>
                I specialize in transforming concepts into captivating visuals.
                Whether it’s product renderings, or immersive environments, my
                portfolio is designed to tell a story.
              </p>
            </div>
            <div className="space-y-4">
              <hr className="text-gray-200 w-3/4" />
              <p className="font-semibold">Collaborate with Me</p>
              <p>
                Let’s create something extraordinary together! Whether you’re
                looking to visualize a product, animate a concept, or build an
                interactive experience.
              </p>
              <hr className="text-gray-200 w-3/4" />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-30 text-gray-200" />
    </div>
  );
};

export default Intro;
