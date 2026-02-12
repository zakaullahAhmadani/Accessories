const ProductImages = ({ images }) => {
  return (
    <div>
      <img src={images[0]} alt="Main product" className="rounded-lg w-full mb-4" />
      <div className="flex space-x-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className="w-20 h-20 object-cover rounded border"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
