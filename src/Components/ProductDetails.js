import React from "react";

const ProductDetails = ({ products, match }) => {
  const { productId } = match.params;
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <p>Price: ${product.price}</p>
      {/* Add more details about the product, such as images and reviews */}
    </div>
  );
};

export default ProductDetails;
