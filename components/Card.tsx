import { Icon } from "@iconify/react";
import React from "react";

interface CardProps {
  icon?: string;
  title: string;
  description: string;
  rating?: string;
}

const Card = ({icon, title, description, rating}: CardProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-gray-200 border-0 p-4">
      <div className="flex justify-between items-start mx-4">
        <div className="rounded-md p-2 bg-gray-500">
          <Icon 
            icon={icon || "mdi:help-circle"} 
            className="w-6 h-6 text-white"
          />
        </div>
        <p>OOOO</p>
      </div>
      <div className="mt-20 mb-6 mx-4">
        <p className="flex items-center mb-3">
          <span>
            <Icon
              icon="mdi:square-rounded"
              className="w-4 h-4 text-[#5b1219]"
            />
          </span>{"  "}
          <span className="font-bold">{title}</span>
        </p>
        <p className="font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
