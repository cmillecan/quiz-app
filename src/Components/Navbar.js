import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <BrowserRouter>
        <Link to="/">Quiz Menu</Link>
        <Link to="/study">Study Guide</Link>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
