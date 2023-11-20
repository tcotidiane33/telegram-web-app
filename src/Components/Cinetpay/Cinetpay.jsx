
import React from "react";
import Cart from "./Cart";
import Cinetpay from "./Cinetpay"; // Assurez-vous d'importer correctement votre composant Cinetpay
/*
const cp = new Cinetpay({
    apikey: '447088687629111c58c3573.70152188', // Votre API Key
    site_id: '911501', // Votre Site ID
    notify_url: 'https://lecompay.netlify.app/notify',
    return_url: 'https://lecompay.netlify.app/return',
    lang: 'fr',
  });
*/

function ParentComponent() {
  const handleCheckout = (amount) => {
    // Vous pouvez effectuer des actions supplémentaires ici avant de naviguer vers Cinetpay
    console.log("Paying amount:", amount);

    // Naviguer vers la page Cinetpay avec le montant total
    // Assurez-vous d'utiliser la méthode de navigation de votre framework (React Router, etc.)
    // Par exemple, avec React Router : history.push('/Cinetpay?amount=' + amount);
  };

  return (
    <div>
      {/* Autres composants ou éléments ici */}
      <Cart cartItems={/* votre tableau d'articles */} checkout={handleCheckout} />
      {/* Autres composants ou éléments ici */}
    </div>
  );
}

export default ParentComponent;
