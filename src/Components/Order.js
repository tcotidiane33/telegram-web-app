// Order.js
import React, { useState } from "react";
import "./Order.css";

function Order({ selectedProducts, onPlaceOrder }) {
  const [productQuantities, setProductQuantities] = useState(
    selectedProducts
      ? selectedProducts.reduce((quantities, product) => {
          quantities[product.id] = product.quantity;
          return quantities;
        }, {})
      : {}
  );

  const handleQuantityChange = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  return (
    <div className="order-container">
      <h2>Order Summary</h2>
      {selectedProducts && selectedProducts.length > 0 ? (
        <ul>
          {selectedProducts.map((product) => (
            <li key={product.id}>
              {product.title} - Quantity:
              <input
                type="number"
                value={productQuantities[product.id] || 0}
                onChange={(e) =>
                  handleQuantityChange(product.id, parseInt(e.target.value, 10))
                }
              /> - Price:{" "}
              {product.price * (productQuantities[product.id] || 0)} XOF
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the order</p>
      )}
      {selectedProducts && selectedProducts.length > 0 && (
        <div>
          <p>
            Total Price:{" "}
            {selectedProducts.reduce(
              (total, product) =>
                total +
                product.price * (productQuantities[product.id] || 0),
              0
            )}{" "}
            XOF
          </p>
          <button className="place-order-button" onClick={onPlaceOrder}>
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}

export default Order;
