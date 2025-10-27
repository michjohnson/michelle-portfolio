import React from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section py-3 text-center">
      <p className="mb-1">
        © {new Date().getFullYear()} <strong>Michelle Johnson</strong> | Designed with{" "}
        <FaHeart className="text-danger small" /> using <strong>React</strong>
      </p>
      <p className="small text-muted">
        Built with love, learning, and a lot of coffee ☕
      </p>
    </footer>
  );
}
