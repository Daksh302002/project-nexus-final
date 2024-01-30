import React from "react";
import Footer from "../footer/Index";

function Home() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
        style={{ marginTop: "3vh" }}
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./images/1.jpg"
              class="d-block w-100"
              alt="..."
              style={{ opacity: 0.8 }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>Web Devlopment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="./images/1.jpg"
              class="d-block w-100"
              alt="..."
              style={{ opacity: 0.8 }}
            />
            <div class="carousel-caption d-none d-md-block">
              <h2>App Development </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua..
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Home;
