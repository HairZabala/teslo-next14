import { Size } from "@/interfaces";
import { cn } from "@/utils/cn";
import React from "react";

export interface SizeSelectorProps {
  selectedSize?: Size;
  availableSizes: Size[];
}

const SizeSelector = ({ selectedSize, availableSizes }: SizeSelectorProps) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4">Sizes</h3>
      <div className="flex">
        {availableSizes.map((size) => (
          <button
            key={size}
            className={cn(
              "mx-2 hover:underline text-lg",
              selectedSize === size ? "underline" : ""
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
