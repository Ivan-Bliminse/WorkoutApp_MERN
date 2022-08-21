import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h2>Bliminse Workout App </h2>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
