import { Icon } from "@iconify/react"


const AnimatedButton = () => {
  return (
    <button className="flex items-center bg-white rounded-4xl py-1 px-1">
      <div className="flex justify-center items-center-safe w-10 h-10 mr-2 bg-[#5b1219] rounded-full">
        <Icon
          icon="mdi:arrow-right"
          className="w-6 h-6 text-white"
        />
      </div>
      <p className="text-black font-semibold pr-1">Get in Touch</p>
    </button>
  )
}

export default AnimatedButton