import { testimonials } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const year = new Date().getFullYear();

  return (
    <div className="p-4 lg:min-h-screen 2xl:min-h-0 2xl:h-full">
      <div className="flex justify-between">
        <p className="flex items-center">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{" "}
          <span className="font-medium">Voices About Me</span>
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
          <p className="text-[#5b1219] font-semibold">Testimonial</p>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <h1 className="text-center font-bold text-6xl mt-8">
          Trusted By Experts
        </h1>
        <p className="text-center mt-4 text-gray-500 font-medium">
          Real stories from real clients. See how our designs have transformed
          international and elevated <br className="hidden lg:block" />
          businesses, and created lasting impressions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-8">
        {testimonials.map((testimonial) => (
          <React.Fragment key={testimonial.id}>
            <TestimonialCard
              img={testimonial.img}
              name={testimonial.name}
              review={testimonial.review}
              job={testimonial.job}
              placeOfWork={testimonial.placeOfWork}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
