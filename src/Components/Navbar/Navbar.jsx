import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  bg-dark" data-bs-theme="dark">
      <div className="container-fluid bg-body-dark">
        <a className="navbar-brand text-info fs-3 fw-bold" href="#">
          REXIX
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-body-dark">
            <li className="nav-item">
              <a
                className="nav-link text-light fs-5 active"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5" href="#">
                Feed
              </a>
            </li>
            <li className="nav-item dropdown text-light">
              <a
                className="nav-link dropdown-toggle text-light fs-5"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider text-light" />
                </li>
                <li>
                  <a className="dropdown-item text-light" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light fs-5 active"
                aria-current="page"
                href="#"
              >
                Register
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-light fs-5 active"
                aria-current="page"
                href="#"
              >
                About
              </a>
            </li>

            <li className="nav-item"></li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn"
              style={{ background: "#CFF532" }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
