import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../../Screens/Home/Home";
import "./Navbar.css";
import NavRouter from "./NavRouter";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md  bg-dark" data-bs-theme="dark">
      <div className="container-fluid bg-body-dark">
        <NavLink className="navbar-brand text-info fs-3 fw-bold " to="#">
          REXIX
        </NavLink>
        <button
          className="navbar-toggler bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon "
            style={{ color: "#0DCBF0" }}
          ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-body-dark">
            <li className="nav-item">
              <NavLink
                className="nav-link text-light fs-5 ms-2"
                aria-current="page"
                to={`/`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-light fs-5 ms-2" to={`feed`}>
                Feed
              </NavLink>
            </li>
            <li className="nav-item dropdown text-light">
              <NavLink
                className="nav-link dropdown-toggle text-light fs-5 ms-2"
                to={`categories`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                Categories
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item text-bg-dark"
                    to={`categories`}
                  >
                    Go to Category Page
                  </NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider text-info" />
                </li>
                <li>
                  <NavLink className="dropdown-item text-bg-dark" to="#">
                    Arts & Crafts
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item text-bg-dark" to="#">
                    Automotive
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item text-bg-dark" to="#">
                    Books
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item text-bg-dark" to="#">
                    Boys' Fashion
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item text-bg-dark" to="#">
                    Computers
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light fs-5 ms-2"
                aria-current="page"
                to={`abc`}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-light fs-5 ms-2"
                aria-current="page"
                to={`abcd`}
              >
                About
              </NavLink>
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
              style={{
                background: "#CFF532",
              }}
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      {/* <NavRouter /> */}
    </nav>
  );
};

export default Navbar;
