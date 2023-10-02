import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Product.css';

function Product({ id, name, description, price, imageUrl, addToCart }) {
  return (
    <div>
      <h1>Products</h1>
      <div className="product-card">
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-description">{description}</p>
          <p className="product-price">${price}</p>
          <button className="product-buy-button" onClick={() => addToCart(id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductListing({ cart, setCart }) {
  const products = [
    // Sample data for products
    // ...
  ];

  const addToCart = (productId) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCart([...cart, productToAdd]); // Add the selected product to the cart
    }
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <Carousel infiniteLoop showArrows>
        {products.map((product) => (
          <div key={product.id}>
            <Product
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              addToCart={addToCart}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductListing;
