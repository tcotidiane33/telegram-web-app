import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
//import Cart from "./Components/Cart/Cart";
const { getData } = require("./db/db");
const foods = getData();

//const telegram = window.Telegram.WebApp;

function App() {
//  const [cartItems, setCartItems] = useState([]);
/*
  useEffect(() => {
    telegram.ready();
  });
*/

/*
  const onAdd = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...food, quantity: 1 }]);
    }
  };

  const onRemove = (food) => {
    const exist = cartItems.find((x) => x.id === food.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== food.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === food.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const onCheckout = () => {
    telegram.MainButton.text = "Pay :)";
    telegram.MainButton.show();
  };
*/
  return (
    <>
      <h1 className="heading">Order Food</h1>
      <div className="cards__container">
        {foods.map((food) => {
          return (
            <Card food={food} key={food.id}  />
          );
        })}
      </div>
 
      
    </>
  );
}

export default App;
