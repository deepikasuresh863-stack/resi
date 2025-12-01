import React from "react";
import "../pages/Products.css";
import { useCart } from "../context/CartContext";

const products = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Resin Wall Clock", price: 999, image: "/products/clock.jpg" },
    { id: 2, name: "Resin Keychain", price: 199, image: "/products/keychain.jpg" },
    { id: 3, name: "Resin Nameplate", price: 1299, image: "/products/nameplate.jpg" },
    { id: 4, name: "Resin Photo Frame", price: 699, image: "/products/photoframe.jpg" },
    { id: 5, name: "Wedding Rose Frame", price: 1899, image: "/products/weddingrose.jpg" },
    { id: 6, name: "Baby Clock", price: 1499, image: "/products/babyclock.jpg" },
    { id: 7, name: "Baby Things Preservation", price: 1599, image: "/products/babythings.jpg" }
  ];

  return (
    <div className="products-page">
      <h2 className="resin-title">OUR RESIN PRODUCTS</h2>

      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default products;
