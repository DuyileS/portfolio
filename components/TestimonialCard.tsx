import { Icon } from "@iconify/react";
import React from "react";
import Number from "./Number";
import Image from "next/image";

interface CardProps {
  img: string;
  name: string;
  review?: string;
  job?: string;
  placeOfWork?: string;
}

const TestimonialCard = ({
  img,
  name,
  review,
  job,
  placeOfWork,
}: CardProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-[#e3e3e3] border-0 p-4">
      <div className="py-2 mb-4">
        <Image
          src={img}
          alt="Image of person"
          width={70}
          height={50}
          className="object-center rounded-full"
        />
      </div>
      <div className="flex">
        <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
        <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
        <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
        <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
        <Icon icon="mdi:star" className="w-6 h-6 text-[#5b1219]" />
      </div>
      <div className="mt-4 mb-6">
        <p className="font-medium">{review}</p>
      </div>
      <hr className="text-gray-300" />
      <div className="flex flex-col mt-6">
        <p className="flex items-center gap-2">
          <span className="font-semibold">{name}</span>
          <span>
            <Icon icon="mdi-circle" className="w-1.5 h-2" />
          </span>
          <span className="font-semibold">{job}</span>
        </p>
        <p className="font-medium text-sm">{placeOfWork}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
