import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Orders</h2>
      <ul className="space-y-4">
        <li className="p-4 shadow rounded bg-white flex justify-between">
          <span>Order #12345</span>
          <Link to="/dashboard/orders/12345" className="text-yellow-600 underline">View</Link>
        </li>
      </ul>
    </div>
  );
};

export default Orders;
