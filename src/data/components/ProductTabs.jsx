import React, { useState } from "react";

const tabs = ["Description", "Specifications", "Reviews"];

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const renderContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <div className="text-gray-700 text-sm">
            <p>
              This is a high-quality product made from premium materials. It is
              designed to offer both comfort and style, making it a perfect
              choice for your everyday use.
            </p>
          </div>
        );
      case "Specifications":
        return (
          <ul className="text-gray-700 text-sm list-disc pl-5 space-y-1">
            <li>Material: 100% Cotton</li>
            <li>Weight: 250g</li>
            <li>Color: Black, White</li>
            <li>Sizes: S, M, L, XL</li>
          </ul>
        );
      case "Reviews":
        return (
          <div className="text-gray-700 text-sm">
            <p>No reviews yet. Be the first to leave a review!</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-10">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 text-sm font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-yellow-500 text-yellow-600"
                : "text-gray-500 hover:text-yellow-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow">{renderContent()}</div>
    </div>
  );
};

export default ProductTabs;
