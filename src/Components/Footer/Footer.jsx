import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-dark p-3">
      <section className="row">
        <span className="text-bg-dark align-middle col-12 col-sm-6 col-md-7 fs-5 p-2">
          Get connected with us on social networks:
        </span>
        <span className="d-flex col-sm-6 col-md-5  col-12 justify-content-center justify-content-lg-evenly mb-4 p-2">
          <a
            className="btn btn-outline-info text-bg-dark m-1 p-0"
            href="https://www.google.com"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="icon fs-1 m-1 text-info text-bg-dark"
            />
          </a>
          <a className="btn  btn-outline-info text-bg-dark p-0  m-1">
            <FontAwesomeIcon
              icon={faInstagram}
              className="fs-1 m-1 text-info text-bg-dark"
            />
          </a>
          <a className="btn  btn-outline-info text-bg-dark p-0 m-1">
            <FontAwesomeIcon
              icon={faGoogle}
              className="fs-1 m-1 text-info text-bg-dark"
            />
          </a>
          <a className="btn  btn-outline-info text-bg-dark p-0 m-1">
            <FontAwesomeIcon
              icon={faTwitter}
              className="fs-1 text-info m-1 text-bg-dark"
            />
          </a>
          <a className="btn  btn-outline-info text-bg-dark p-0 m-1">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="fs-1 text-info m-1 text-bg-dark"
            />
          </a>
          <a className="btn  btn-outline-info text-bg-dark p-0 m-1">
            <FontAwesomeIcon
              icon={faGithub}
              className="fs-1 text-info m-1 text-bg-dark"
            />
          </a>
        </span>
      </section>
      <section className="ContentContainer text-bg-dark mt-2">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold text-info mb-4">
                <i className="fas fa-gem me-3"></i>Rexix
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold text-info mb-4">
                Products
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  React
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Vue
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Laravel
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text">
              <h6 className="text-uppercase fw-bold text-info mb-4">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset text-decoration-none">
                  Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold text-info mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3"></i> Gujranwala, Punjab 52250,
                Pakistan
              </p>
              <p>
                <i className="fas fa-envelope me-3"></i>
                info@rexix.com
              </p>
              <p>
                <i className="fas fa-phone me-3"></i> + 92 320 715 2767
              </p>
              <p>
                <i className="fas fa-print me-3"></i> + 92 342 413 9492
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4 text-bg-dark mt-2"
        style={{ background: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold text-decoration-none"
          href="https://Rexix.com/"
        >
          Rexix.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
