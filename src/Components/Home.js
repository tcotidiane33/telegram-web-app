import { useState, useEffect } from "react";
import Card from "./Card/Card";
import Cart from "./Cart/Cart";
//import Cinetpay from "./Cinetpay/Cinetpay";
import axios from "axios";
import './Cinetpay/Payment.css';


const { getData } = require("../db/db");
const products = getData();
const telegram = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [paymentResponse, setPaymentResponse] = useState(null);


  useEffect(() => {
    telegram.ready();
  });

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, quantity: exist.quantity - 1 } : x
        )
      );
    }
  };

  const handlePayment = async () => {
    try {
      const siteId = "911501"; // Remplacez par votre Site ID
      const apiKey = "447088687629111c58c3573.70152188"; // Votre API Key
      const transactionId = Math.floor(Math.random() * 100000000).toString();

      const requestData = {
        apikey: apiKey,
        site_id: siteId,
        transaction_id: transactionId,
        amount: 100,
        currency: 'XOF',
        channels: 'ALL',
        description: 'Test de paiement',
        customer_name: "Kondro",
        customer_surname: "Network",
        customer_email: "support@kondronetwork.com",
        customer_phone_number: "0769469844",
        customer_address: "BP ABIDJAN 01",
        customer_city: "Abidjan Cocody",
        customer_country: "CI",
        customer_state: "West Africa",
        customer_zip_code: "00225"
      };

      const config = {
        method: "post",
        url: "https://api-checkout.cinetpay.com/v2/payment",
        headers: {
          "Content-Type": "application/json",
        },
        data: requestData,
      };

      const response = await axios(config);
      setPaymentResponse(response.data); // Ne pas utiliser JSON.stringify ici
    } catch (error) {
      setPaymentResponse({
        code: "ERROR",
        message: "Erreur lors du paiement",
        description: error.message,
      });
    }
  };
  

  return (
    <>
      <h1 className="heading">Shop Express</h1>
      <Cart cartItems={cartItems} onClick={handlePayment}/>
      <button className="btn" type={"checkout"} onClick={handlePayment}>Buy</button>
      {paymentResponse && (
        <div className="payment-receipt">
          <h2>Réception de paiement :</h2>
          <p><strong>Code :</strong> {paymentResponse.code}</p>
          <p><strong>Message :</strong> {paymentResponse.message}</p>
          <p><strong>Description :</strong> {paymentResponse.description}</p>
          {paymentResponse.data && (
            <div>
              <p><strong>Payment Token :</strong> {paymentResponse.data.payment_token}</p>
              
              <p>
              <strong>Payment URL :</strong>{" "}
              <a
                href={`tg://openurl?${encodeURIComponent(paymentResponse.data.payment_url)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Cliquez ici pour ouvrir le lien dans l_application Telegram.
              </a>
            </p>
              <p><strong>Payment URL :</strong> <button onClick={() => window.open(`tg://openurl?url=${encodeURIComponent(paymentResponse.data.payment_url)}`)}>Ouvrir le lien Ici!</button></p>


            </div>
          )}
        </div>
      )}
      
      <div className="cards__container">
        {products.map((product) => {
          return (
            <Card product={product} key={product.id} onAdd={onAdd}  onRemove={onRemove} />
          );
        })}
      </div>   
    </>
  );
}

export default App;
