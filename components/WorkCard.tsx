import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  img: string;
  name: string;
  themes: string[];
  rating?: string;
  totalLength?: number;
  href?: string;
  year?: string;
}

const WorkCard = ({
  img,
  name,
  themes,
  href,
  year,
}: CardProps) => {


  return (
    <div className="w-full">
      {href ? (
        <Link href={href}>
          <div className="flex flex-col rounded-4xl bg-[#e3e3e3] border-0 p-4 cursor-pointer">
            <div className="relative p-4 md:w-full h-118">
              <Image
                src={img}
                alt="Picture of graphic design"
                fill
                className="object-cover md:object-fill 2xl:object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center justify-between gap-2 my-2 mx-4">
              <p className="font-bold">
                {name} <br /> <span className="font-semibold">{year}</span>
              </p>
              <div className="flex gap-4 mt-2 flex-wrap">
                {themes.map((theme, index: number) => (
                  <div key={index++} className="rounded-full p-3 bg-gray-300">
                    <p className="font-semibold">{theme}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className="flex flex-col rounded-4xl bg-[#e3e3e3] border-0 p-4">
          <div className="relative p-4 md:w-full h-118">
            <Image
              src={img}
              alt="Picture of graphic design"
              fill
              className="object-cover md:object-fill 2xl:object-cover rounded-xl"
            />
          </div>
          <div className="flex items-center justify-between gap-2 my-2 mx-4">
            <p className="font-bold">
              {name} <br /> <span className="font-semibold">{year}</span>
            </p>
            <div className="flex gap-4 mt-2 flex-wrap">
              {themes.map((theme, index: number) => (
                <div key={index++} className="rounded-full p-3 bg-gray-300">
                  <p className="font-semibold">{theme}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkCard;
