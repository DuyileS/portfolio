import React from "react";

// Types
import { BarsProps } from "./types";

// Imports
import { clsx } from "clsx";

const Bars: React.FC<BarsProps> = ({
  color,
  heights,
  barsRef,
  className,
  containerClassName,
}) => {
  return (
    <div className={clsx("flex", containerClassName)}>
      {heights.map((height, index) => (
        <div
          key={index}
          ref={(el) => {
            if (barsRef && el) barsRef.current[index] = el;
          }}
          style={{ height, outlineColor: color, backgroundColor: color }}
          className={clsx("flex-1 outline", className)}
        />
      ))}
    </div>
  );
};

export default Bars;
