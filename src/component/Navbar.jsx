import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const state=useSelector((state)=>state.handleCart)
  return (
    <nav className="navbar  navbar-expand-lg bg-light py-3 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fs-4 fw-bold" to="/">
          Shopping-Mart
        </Link>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to="/login" className="btn btn-outline-dark mx-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-outline-dark mx-2">
              Register
            </Link>
            <Link to="/cart" className="btn btn-outline-dark mx-2">
              Cart({state.length})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
