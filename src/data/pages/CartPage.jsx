import React from "react";

const CartPage = ({ cartItems = [], onRemoveFromCart, onClearCart }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border p-3 rounded">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => onRemoveFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right mt-4">
            <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
            <button
              className="mt-2 bg-gray-800 hover:bg-black text-white px-4 py-2 rounded"
              onClick={onClearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
