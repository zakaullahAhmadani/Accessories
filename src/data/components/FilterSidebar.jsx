import React, { useState } from 'react';

const FilterSidebar = ({ categories, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onFilterChange({ category, priceRange });
  };

  const handlePriceChange = () => {
    onFilterChange({ category: selectedCategory, priceRange });
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden px-4 py-2 bg-yellow-500 text-white rounded mb-4"
      >
        {isOpen ? 'Close Filters' : 'Open Filters'}
      </button>

      <aside className={`space-y-6 ${isOpen ? 'block' : 'hidden'} md:block md:w-64 p-4 bg-white border border-gray-200 rounded shadow`}>
        {/* Category Filter */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => handleCategoryChange(cat)}
                  className={`block w-full text-left px-3 py-2 rounded ${
                    selectedCategory === cat
                      ? 'bg-yellow-100 text-yellow-600 font-medium'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range Filter */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Price Range</h2>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
            <span>-</span>
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              className="w-full px-2 py-1 border border-gray-300 rounded"
            />
          </div>
          <button
            onClick={handlePriceChange}
            className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 w-full"
          >
            Apply
          </button>
        </div>
      </aside>
    </>
  );
};

export default FilterSidebar;
