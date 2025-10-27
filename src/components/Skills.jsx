import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiPostman, SiBootstrap } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="skill-icon" /> },
        { name: "CSS3", icon: <FaCss3Alt className="skill-icon" /> },
        { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
        { name: "ReactJS", icon: <FaReact className="skill-icon" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="skill-icon" /> },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Java", icon: <FaJava className="skill-icon" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="skill-icon" /> },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", icon: <SiMysql className="skill-icon" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      items: [
        { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
        { name: "GitHub", icon: <FaGithub className="skill-icon" /> },
        { name: "Postman", icon: <SiPostman className="skill-icon" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="fw-bold text-primary text-center mb-5">🧠 Skills & Tools</h2>
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="skill-card shadow-sm p-4 h-100 rounded-3">
                <h5 className="fw-semibold text-primary mb-3 text-center">{category.title}</h5>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  {category.items.map((skill, i) => (
                    <div key={i} className="text-center">
                      {skill.icon}
                      <p className="small mt-2">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
