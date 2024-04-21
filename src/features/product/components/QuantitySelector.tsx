"use client";

import React, { useCallback, useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

export interface QuantitySelectorProps {
  quantity: number;
}

const QuantitySelector = ({ quantity }: QuantitySelectorProps) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = useCallback(
    (value: number) => {
      if (count + value < 1) return;

      setCount((prev) => prev + value);
    },
    [count]
  );

  return (
    <div className="flex items-center mb-4">
      <button onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded select-none">
        {count}
      </span>
      <button onClick={() => onQuantityChange(1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};

export default QuantitySelector;
