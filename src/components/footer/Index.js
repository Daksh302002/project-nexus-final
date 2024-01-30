import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBFooter
      bgColor="dark"
      className="text-center text-lg-start text-muted"
      style={{ marginTop: "20vh" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block ">
          <span class="text-light">
            Get connected with us on social networks:
          </span>
        </div>

        <div>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" className="mx-2" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" className="mx-2" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="google" className="mx-2" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" className="mx-2" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" className="mx-2" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="github" className="mx-2" />
          </Link>
        </div>
      </section>

      <section className="text-light">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Techy Software
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2 mx-2" />
                India,In
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3 mx-2" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3 mx-2" />
                +91-9321030122
              </p>
              <p>
                <MDBIcon icon="print" className="me-3 mx-2" /> +91-9321030132
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2024 Copyright:
        <Link className="text-reset fw-bold" to="">
          Techy Software
        </Link>
      </div>
    </MDBFooter>
  );
}
