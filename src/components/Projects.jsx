import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectList = [
    {
      title: "User Registration CRUD Full Stack App",
      description:
        "A full-stack web application implementing Create, Read, Update, and Delete operations for user management. Developed using Spring Boot, React, and MySQL for seamless data handling.",
      tech: "Spring Boot • React • MySQL • REST API",
      github: "https://github.com/michjohnson/User-Registration-CRUD-FullStack",
    },
    {
      title: "Online Movie Ticket Booking System",
      description:
        "A Java-based web app that allows users to register, log in, and book movie tickets. Built using Servlets, JSP, and JDBC for database connectivity with MySQL.",
      tech: "Java • JSP • Servlets • JDBC • MySQL",
      github: "https://github.com/michjohnson/OnlineMovieTicketBookingSystem",
    },
    {
      title: "Tic Tac Toe Game using React",
      description:
        "An interactive Tic-Tac-Toe game built with React featuring a clean interface, turn-based logic, and instant win detection.",
      tech: "React • JavaScript • HTML • CSS",
      github: "https://github.com/michjohnson/tic-tac-toe-react",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="fw-bold text-primary text-center mb-5">
          💼 My Projects
        </h2>
        <div className="row g-4">
          {projectList.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm border-0 project-card">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-primary">
                    {project.title}
                  </h5>
                  <p className="card-text text-secondary flex-grow-1">
                    {project.description}
                  </p>
                  <p className="small text-muted mb-3">{project.tech}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto align-self-start"
                  >
                    <FaGithub className="me-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
