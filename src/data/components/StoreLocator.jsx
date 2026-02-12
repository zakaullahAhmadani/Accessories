import React from 'react';

const stores = [
  {
    name: "Lahore Mega Store",
    address: "123 Mall Road, Lahore",
    phone: "042-12345678",
    mapLink: "https://www.google.com/maps?q=123+Mall+Road,+Lahore"
  },
  {
    name: "Karachi Super Outlet",
    address: "45 Clifton Block 7, Karachi",
    phone: "021-87654321",
    mapLink: "https://www.google.com/maps?q=45+Clifton+Block+7,+Karachi"
  },
  {
    name: "Islamabad Center",
    address: "G-11 Markab, Islamabad",
    phone: "051-33445566",
    mapLink: "https://www.google.com/maps?q=G-11+Markaz,+Islamabad"
  }
];

const StoreLocator = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Find a Store Near You</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {stores.map((store, index) => (
          <div key={index} className="border p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-700">{store.name}</h2>
            <p className="text-gray-600">{store.address}</p>
            <p className="text-gray-600">Phone: {store.phone}</p>
            <a
              href={store.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-yellow-600 hover:text-yellow-800 underline"
            >
              View on Map
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocator;
