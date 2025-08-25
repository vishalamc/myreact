import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Text */}
        <p style={styles.text}>
          &copy; {currentYear} <span style={styles.brand}>GyanManthan Gurukul</span>. All rights reserved.
        </p>

       
      
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "rgba(18, 18, 18, 0.85)",
    backdropFilter: "blur(10px)",
    padding: "25px 15px",
    color: "#ccc",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    fontSize: "1rem",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  text: {
    margin: "6px 0 12px",
    lineHeight: 1.5,
    fontSize: "0.95rem",
  },
  brand: {
    color: "#fbbf24",
    fontWeight: "700",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 18px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    borderRadius: "8px",
    fontSize: "0.9rem",
    fontWeight: "500",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    transform: "scale(1.05)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
  },
  icon: {
    fontSize: "1rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "10px",
  },
};

export default Footer;