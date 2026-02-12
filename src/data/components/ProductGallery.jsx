import React, { useState } from "react";

const ProductGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-4 shadow">
        <img
          src={selectedImage}
          alt="Main product"
          className="object-contain max-h-full max-w-full"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`w-full h-20 object-cover rounded cursor-pointer border-2 ${
              img === selectedImage ? "border-yellow-500" : "border-transparent"
            } hover:border-yellow-500 transition`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
