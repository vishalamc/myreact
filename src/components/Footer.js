import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          &copy; {currentYear}{" "}
          <span style={styles.brand}>GyanManthan Gurukul</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    background: "rgba(18, 18, 18, 0.85)",
    backdropFilter: "blur(10px)",
    padding: "20px 15px",
    color: "#ccc",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    textAlign: "center",
    fontSize: "0.95rem",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  text: {
    margin: 0,
    lineHeight: 1.5,
  },
  brand: {
    color: "#fbbf24",
    fontWeight: "700",
  },
};

export default Footer;
