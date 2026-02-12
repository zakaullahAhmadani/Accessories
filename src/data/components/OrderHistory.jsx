import React from 'react';

const OrderHistory = () => {
  const orders = [
    {
      id: '#1001',
      date: '2025-07-10',
      total: '$120.00',
      status: 'Delivered',
    },
    {
      id: '#1002',
      date: '2025-07-15',
      total: '$85.50',
      status: 'Shipped',
    },
  ];

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">Order ID</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Total</th>
            <th className="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="text-center">
              <td className="py-2 px-4 border">{order.id}</td>
              <td className="py-2 px-4 border">{order.date}</td>
              <td className="py-2 px-4 border">{order.total}</td>
              <td className="py-2 px-4 border">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
