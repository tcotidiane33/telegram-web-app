import React from "react";
import "./Cart.css";
import Button from "../Button/Button";
function Cart({ cartItems, checkout }) {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);

  return (
    <div className="cart__container">
      {cartItems.length === 0 ? "No items in cart" : ""}
      <br /> <span className="bold">Total Price: XOF{totalPrice.toFixed(2)}</span>
      <Button
        title={`${cartItems.length === 0 ? "Welcome to shopExpress !" : "Buy"} `}
        type={"checkout"}
        disable={cartItems.length === 0 ? true : false}
        onClick={checkout}
      />
    </div>
  );
}

export default Cart;
