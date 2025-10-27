import React from "react";
import "./EducationContact.css";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function EducationContact() {
  return (
    <section id="contact" className="education-contact-section py-5">
      <div className="container">
        <div className="row g-5">
          {/* EDUCATION SECTION */}
          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-4">🎓 Education</h2>
            <div className="education-card shadow-sm p-4 rounded-3 bg-white">
              <h5 className="fw-semibold">Bachelor of Engineering (B.E.)</h5>
              <p className="text-muted mb-2">
                Major: Computer Science & Engineering
              </p>
              <p className="mb-1">University: Visvesvaraya Technological University (VTU)</p>
              <p className="mb-0">Graduation Year: 2024</p>
            </div>
          </div>

          {/* CONTACT SECTION */}
          <div className="col-md-6">
            <h2 className="fw-bold text-primary mb-4">📬 Contact</h2>
            <p className="text-muted">
              I’m always open to opportunities, collaborations, or just a
              friendly chat. Let’s connect!
            </p>

            <div className="d-flex align-items-center gap-3 mt-3">
              <a
                href="mailto:michelletsjohnson@gmail.com"
                className="btn btn-outline-primary d-flex align-items-center gap-2"
              >
                <FaEnvelope />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/michellejohnson-mj/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/michjohnson"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark d-flex align-items-center gap-2"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
