import React from "react";
import "./Hero.css";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center min-vh-100">
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          {/* LEFT COLUMN — TEXT CONTENT */}
          <div className="col-md-6 text-center text-md-start">
            <div className="intro-badge mb-3 d-inline-flex align-items-center">
              <span className="badge-text">
                💡 Looking for a Passionate React Developer?
              </span>
            </div>

            <h1 className="display-5 fw-bold mb-3">
              Hi! I’m <span className="text-primary">Michelle Johnson</span>
            </h1>

            <p className="lead text-secondary mb-4">
              A React Developer passionate about building interactive, responsive,
              and efficient web applications using modern technologies like React, Spring Boot,
              and MySQL.
            </p>

            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <a
                href="/Michelle_Johnson_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2 fw-semibold"
              >
                My Resume
              </a>
              <a
                href="#contact"
                className="btn btn-outline-primary px-4 py-2 fw-semibold"
              >
                Contact Me
              </a>
            </div>

          </div>
          {/* RIGHT COLUMN — IMAGE / ILLUSTRATION */}
          <div className="col-md-6 text-center mt-5 mt-md-0">
            <img
              src="/developer-illustration.svg.png"
              alt="Developer Illustration"
              className="hero-illustration img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
