import React from "react";
import "./about.css";
import Card from "./Card";
import Footer from "../footer/Index";

function Index() {
  return (
    <div>
      <div className="first_div">
        <h1>ABOUT US</h1>
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </p>

        <div className="second_div">
          <img className="image" src="./images/2.jpg" alt="..."></img>
          <h2>Welcome To Our Site</h2>
          <p className="para1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <button className="btn button" type="submit">
            Read More
          </button>
        </div>
        <div
          style={{
            display: "flex",
            marginLeft: "40vh",
            padding: "5vh",
            marginTop: "2vh",
          }}
        >
          <Card></Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Index;
