import React from "react";
import Number from "./Number";
import Image from "next/image";

interface CardProps {
  img: string;
  name: string;
  themes: string[];
  rating?: string;
  totalLength?: number;
  year?: string;
}

const WorkCard = ({ img, name, themes, rating, year, totalLength }: CardProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col rounded-4xl bg-[#e3e3e3] border-0 p-4">
        <div className="relative p-4 md:w-full h-118">
          <Image
            src={img}
            alt="Picture of graphic design"
            fill
            className="object-cover md:object-fill 2xl:object-cover rounded-xl"
          />
        </div>
        <div className="flex items-start justify-between gap-2 my-2 mx-4">
            <div className="flex gap-4 items-start mt-2">
                <div className="hidden md:block">
                  <Number id={rating} totalNum={totalLength} />
                </div>
                <p className="font-bold">{name} <br /> <span className="font-semibold">{year}</span></p>
            </div>
            <div className="flex gap-4 mt-2">
                {themes.map((theme, index: number) => (
                    <div key={index++} className="rounded-full p-3 bg-gray-300">
                        <p className="font-semibold">{theme}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
