import { Cinetpay, PaymentConfig } from '@azinakou/cinetpay';

const cp = new Cinetpay({
    apikey: '447088687629111c58c3573.70152188', // Votre API Key
    site_id: '911501', // Votre Site ID
    notify_url: 'https://lecompay.netlify.app/notify',
    return_url: 'https://lecompay.netlify.app/return',
    lang: 'fr',
  });


//Générer un nouveau identifiant de transaction
const s4 = () => {
return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
const uniqId = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
//Output format c2181edf-041b-0a61-3651-79d671fa3db7


const payConfig: PaymentConfig = {
    transaction_id: uniqId,
    amount: 100,
    currency: 'XOF',
    channels: 'ALL',
    description: 'Test de paiement',
    customer_name:"Kondro",//Le nom du client
    customer_surname:"Network",//Le prenom du client
    customer_email: "support@kondronetwork.com",//l'email du client
    customer_phone_number: "0769469844",//l'email du client
    customer_address : "BP ABIDJAN 01",//addresse du client
    customer_city: "Abidjan Cocody",// La ville du client
    customer_country : "Côte d'ivoire",// le code ISO du pays
    customer_state : "West Africa",// le code ISO l'état
    customer_zip_code : "00225" // code postal

};


cp.makePayment(payConfig)
    .then(response => console.log(response))
    .catch(err => console.log(err))