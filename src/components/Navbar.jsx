import React, { useEffect } from "react";
import "./Navbar.css";
import { Collapse } from "bootstrap"; // ✅ Import Collapse directly

export default function Navbar() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    function closeMenu() {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse =
          Collapse.getInstance(navbarCollapse) ||
          new Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
      }
    }

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", closeMenu)
      );
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          Michelle Johnson
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
