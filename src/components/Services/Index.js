import React from "react";
import Footer from "../footer/Index";
import Product from "./Product";

function Index() {
  return (
    <div>
      <div className="first_div">
        <h1>Services</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </p>
        <Product></Product>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default Index;
