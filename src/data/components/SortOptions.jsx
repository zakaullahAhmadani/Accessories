// src/components/SortOptions.jsx

import React from "react";

const SortOptions = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="sort"
        className="block text-gray-700 font-medium mb-2"
      >
        Sort By
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
      </select>
    </div>
  );
};

export default SortOptions;
