import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-name">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>
      {product.discountPercentage && (
        <p className="product-discount">
          Discount: {product.discountPercentage}%
        </p>
      )}
      {product.rating && (
        <p className="product-rating">Rating: {product.rating.toFixed(1)}</p>
      )}
    </div>
  );
};

export default ProductCard;
