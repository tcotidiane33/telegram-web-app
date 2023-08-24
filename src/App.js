import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Notify from "./Components/Cinetpay/Notify";
import Return from "./Components/Cinetpay/Return";
import Cancel from "./Components/Cinetpay/Cancel";
import Payment from "./Components/Cinetpay/PaymentButton";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notify" component={Notify} />
          <Route path="/payment" component={Payment} />
          <Route path="/return" component={Return} />
          <Route path="/cancel" component={Cancel} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;