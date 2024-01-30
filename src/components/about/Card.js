import React from "react";

function Card() {
  return (
    <>
      <div style={{ marginLeft: "5vh" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="./images/3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Our Mission</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn btn-success">Read More</button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "5vh" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="./images/4.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Our Vision</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn btn-success">Read More</button>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "5vh" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src="./images/5.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Our Objective</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="btn btn-success">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
