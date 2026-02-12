import React from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Account - AccessoriesShop</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <aside className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Dashboard Menu</h2>
            <ul className="space-y-3">
              <li><Link to="/dashboard/orders" className="text-yellow-600 hover:underline">My Orders</Link></li>
              <li><Link to="/dashboard/wishlist" className="text-yellow-600 hover:underline">Wishlist</Link></li>
              <li><Link to="/dashboard/profile" className="text-yellow-600 hover:underline">Edit Profile</Link></li>
              <li><Link to="/dashboard/address" className="text-yellow-600 hover:underline">Manage Addresses</Link></li>
              <li><Link to="/dashboard/settings" className="text-yellow-600 hover:underline">Account Settings</Link></li>
              <li><Link to="/logout" className="text-red-500 hover:underline">Logout</Link></li>
            </ul>
          </aside>

          {/* Content */}
          <section className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Welcome, User!</h2>
            <p className="text-gray-600 mb-4">Here you can manage your account, orders, and preferences.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-yellow-100 p-4 rounded shadow">
                <h3 className="text-lg font-bold">Total Orders</h3>
                <p className="text-2xl text-yellow-600">15</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded shadow">
                <h3 className="text-lg font-bold">Wishlist Items</h3>
                <p className="text-2xl text-yellow-600">8</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded shadow">
                <h3 className="text-lg font-bold">Saved Addresses</h3>
                <p className="text-2xl text-yellow-600">3</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded shadow">
                <h3 className="text-lg font-bold">Pending Reviews</h3>
                <p className="text-2xl text-yellow-600">2</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
