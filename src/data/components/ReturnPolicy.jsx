import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Return Policy</h2>
      <p className="text-gray-700 mb-2">
        We want you to be completely satisfied with your purchase. If you are not happy with the product, you may return it within <strong>7 days</strong> of receiving it.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Items must be in original condition and packaging.</li>
        <li>No returns on used or damaged items unless defective.</li>
        <li>Refund will be processed within 5-7 business days after inspection.</li>
        <li>Customer is responsible for return shipping unless the item is defective or incorrect.</li>
      </ul>
      <p className="mt-4 text-gray-600">
        For any questions or to start a return, please contact our customer support team at <a href="mailto:support@accessoriesshop.com" className="text-blue-600 hover:underline">support@accessoriesshop.com</a>.
      </p>
    </div>
  );
};

export default ReturnPolicy;
