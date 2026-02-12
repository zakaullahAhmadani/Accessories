import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="bg-white shadow p-4 rounded">Manage Users</li>
        <li className="bg-white shadow p-4 rounded">Manage Products</li>
        <li className="bg-white shadow p-4 rounded">View Orders</li>
        <li className="bg-white shadow p-4 rounded">Reports</li>
        <li className="bg-white shadow p-4 rounded">Site Settings</li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
