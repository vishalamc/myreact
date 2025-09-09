import React, { useEffect } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    // Load the Elfsight script only once
    if (!document.getElementById("elfsight-script")) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      script.id = "elfsight-script";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Main Text */}
        <p style={styles.text}>
          &copy; {currentYear} <span style={styles.brand}>GyanManthan Gurukul</span>. All rights reserved.
        </p>

        {/* Visitor Counter */}
        <div
          className="elfsight-app-31b9647a-93c9-4c0b-b99a-d2a05d33d006"
          data-elfsight-app-lazy
          style={{ margin: "12px 0" }}
        ></div>

      
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
  link: {
    color: "#fbbf24",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Footer;
