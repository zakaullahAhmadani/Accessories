// src/components/PriceFilter.jsx

import React, { useState } from "react";

const PriceFilter = ({ min, max, onChange }) => {
  const [value, setValue] = useState(max);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        Filter by Price
      </h3>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer"
      />

      <p className="text-gray-700 mt-2">
        Up to:{" "}
        <span className="font-bold text-yellow-600">${value}</span>
      </p>
    </div>
  );
};

export default PriceFilter;
