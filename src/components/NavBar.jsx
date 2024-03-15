import React from "react";
import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div>
      <nav>
        <Link to="/dist/home"> Home </Link>
        <Link to="/dist/about"> About </Link>{" "}
        <Link to="/dist/contact"> Contact </Link>
      </nav>
    </div>
  );
}
