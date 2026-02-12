import React from 'react';
import { FaTruck, FaUndo, FaShieldAlt } from 'react-icons/fa';

const ShippingInfo = () => {
  const infoItems = [
    {
      icon: <FaTruck className="text-yellow-500 text-xl" />,
      title: 'Free Shipping',
      description: 'Get free shipping on all orders over $50.',
    },
    {
      icon: <FaUndo className="text-yellow-500 text-xl" />,
      title: 'Easy Returns',
      description: '30-day hassle-free returns policy.',
    },
    {
      icon: <FaShieldAlt className="text-yellow-500 text-xl" />,
      title: 'Secure Checkout',
      description: 'Your payment information is processed securely.',
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4 p-6 border rounded-lg shadow-sm bg-white">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-4 border-l-4 border-yellow-500 pl-4 py-2"
        >
          {item.icon}
          <div>
            <h4 className="font-semibold text-gray-800">{item.title}</h4>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShippingInfo;
