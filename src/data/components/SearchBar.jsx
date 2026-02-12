import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder = "Search accessories..." }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim()) {
      console.log("Searching for:", query);
      // You could:
      // - navigate to search results page
      // - call API to fetch results
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md mx-auto"
    >
      <input
        type="text"
        className="
          w-full
          border border-gray-300
          rounded-full
          py-3
          pl-10
          pr-4
          focus:outline-none
          focus:border-yellow-500
          transition
          text-gray-700
        "
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="
          absolute 
          left-3 
          top-1/2 
          transform 
          -translate-y-1/2 
          text-gray-500 
          hover:text-yellow-500
        "
      >
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
