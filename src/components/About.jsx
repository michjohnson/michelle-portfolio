import React from "react";
import "./About.css";
import { FaLaptopCode } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN — ICON OR IMAGE */}
        <div className="col-md-5 text-center mb-4 mb-md-0"
          data-aos="fade-right"
          >
  <img
    src="/michelle-profile.jpg"
    alt="Michelle Johnson"
    className="about-photo shadow rounded-circle"
  />
</div>


          {/* RIGHT COLUMN — TEXT */}
          <div className="col-md-7" data-aos="fade-left">
            <h2 className="fw-bold text-primary mb-3">About Me</h2>
            <p className="text-muted mb-3">
              I’m Michelle Johnson, an aspiring and 
              passionate React Developer with a love for creating
              clean, responsive, and engaging web experiences. My focus lies in
              building functional frontends with React.
            </p>
            <p className="text-muted">
               I’m always curious to learn, collaborate, and build projects that make
              an impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
