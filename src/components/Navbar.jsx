import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          RE2026/1
        </Link>
        <div className="nav-links">
          <Link to="/" className={currentPath === "/" ? "active" : ""}>
            Início
          </Link>
          <Link
            to="/seminario"
            className={currentPath === "/seminario" ? "active" : ""}
          >
            Seminário
          </Link>
          <Link
            to="/podcast"
            className={currentPath === "/podcast" ? "active" : ""}
          >
            Podcast
          </Link>
          <Link
            to="/cases"
            className={currentPath === "/cases" ? "active" : ""}
          >
            Cases
          </Link>
          <Link
            to="/storytelling"
            className={currentPath === "/storytelling" ? "active" : ""}
          >
            Storytelling
          </Link>
        </div>
      </div>
    </nav>
  );
}
