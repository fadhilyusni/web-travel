import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPages from "pages/LandingPages";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";
import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPages}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/Checkout" component={Checkout}></Route>
        <Route exact path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
