import React from "react";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";
import { Switch, Route } from "react-router-dom";
import Services from "../../Pages/Services";
import Aboutus from "../../Pages/Aboutus";
import Customer from "../../Pages/Customer";
import ScrollToTop from "../../scoll";
export default function Routes() {
  return (
    <div>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />

        <Route exact path="/aboutus" component={Aboutus} />
        <Route exact path="/customer" component={Customer} />
      </Switch>
    </div>
  );
}
