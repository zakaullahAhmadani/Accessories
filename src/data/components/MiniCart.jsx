import React from "react";
import { FaTimes, FaTrashAlt } from "react-icons/fa";

const MiniCart = ({
  isOpen,
  onClose,
  cartItems = [],
  subtotal = 0,
  onRemoveItem
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-600">
          <FaTimes size={20} />
        </button>
      </div>

      <div className="flex flex-col p-4 overflow-y-auto h-[calc(100%-200px)]">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between mb-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <p className="text-gray-800 font-semibold">{item.title}</p>
                <p className="text-gray-500 text-sm">
                  Qty: {item.quantity}
                </p>
                <p className="text-yellow-600 font-bold">
                  ${item.price}
                </p>
              </div>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="text-gray-700 font-medium">Subtotal</span>
          <span className="text-yellow-600 font-bold text-lg">
            ${subtotal.toFixed(2)}
          </span>
        </div>
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-full transition">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default MiniCart;
