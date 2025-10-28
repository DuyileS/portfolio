import { Icon } from "@iconify/react";

const AnimatedButton = () => {
  return (
    <button className="group relative overflow-hidden flex items-center bg-[#e3e3e3] rounded-4xl py-1 px-1 transition duration-300">
      <div className="absolute left-1 flex justify-center items-center w-10 h-10 bg-[#5b1219] rounded-full z-0 transition-all duration-500 group-hover:w-[calc(100%-0.5rem)] group-hover:rounded-3xl"></div>
      <div className="flex justify-center items-center w-10 h-10 mr-2 relative z-10">
        <Icon icon="mdi:arrow-right" className="w-6 h-6 text-white" />
      </div>
      <p className="text-black font-semibold pr-1 z-10 transition duration-500 group-hover:text-white group-hover:animate-bounce-once group-hover:translate-x-0">
        Get in Touch
      </p>
    </button>
  );
};

export default AnimatedButton;
