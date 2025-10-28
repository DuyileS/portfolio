import React from 'react'

interface NumberProps {
    id?: string;
    totalNum?: number 
}

const Number = ({ id, totalNum }: NumberProps) => {

const number = id ? parseInt(id, 10) : 0

const totalDots = totalNum ? totalNum : 0;
const dots = Array.from({ length: totalDots }, (_, i) => i + 1);

  return (
    <div className='flex gap-2'>
        {dots.map((dot) => (
            <div key={dot} className={`w-3 h-3 rounded-full ${dot <= number ? "bg-[#5b1219]" : "bg-gray-300"}`}>
            </div>
        ))}
    </div>
  )
}

export default Number