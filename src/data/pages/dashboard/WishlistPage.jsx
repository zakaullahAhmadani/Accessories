import React from "react";

const WishlistPage = ({ wishlistItems = [], onRemoveFromWishlist, onMoveToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between border p-3 rounded">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>${item.price.toFixed(2)}</p>
              </div>
              <div className="space-x-2">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  onClick={() => onMoveToCart(item)}
                >
                  Move to Cart
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => onRemoveFromWishlist(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
