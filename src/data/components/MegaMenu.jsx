import React from "react";

const MegaMenu = () => {
  return (
    <div
      className="
        absolute 
        left-0 
        top-full 
        w-full 
        bg-white 
        shadow-xl 
        p-10 
        hidden 
        group-hover:block 
        z-50
      "
    >
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-800">Men's Accessories</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-yellow-500">Watches</a></li>
            <li><a href="#" className="hover:text-yellow-500">Belts</a></li>
            <li><a href="#" className="hover:text-yellow-500">Hats</a></li>
            <li><a href="#" className="hover:text-yellow-500">Wallets</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-800">Women's Accessories</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-yellow-500">Scarves</a></li>
            <li><a href="#" className="hover:text-yellow-500">Jewelry</a></li>
            <li><a href="#" className="hover:text-yellow-500">Handbags</a></li>
            <li><a href="#" className="hover:text-yellow-500">Sunglasses</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-lg font-bold mb-4 text-gray-800">Featured Brands</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-yellow-500">Ray-Ban</a></li>
            <li><a href="#" className="hover:text-yellow-500">Gucci</a></li>
            <li><a href="#" className="hover:text-yellow-500">Michael Kors</a></li>
            <li><a href="#" className="hover:text-yellow-500">Diesel</a></li>
          </ul>
        </div>

        {/* Column 4 with Promo */}
        <div className="relative">
          <img
            src="https://source.unsplash.com/300x200/?accessories"
            alt="Promo"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center rounded-lg">
            <p className="text-white text-lg font-bold">Summer Sale</p>
            <a
              href="#"
              className="mt-2 px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-600 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
