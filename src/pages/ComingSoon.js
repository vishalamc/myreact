import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #1f2937 0%, #0f172a 50%, #0b1020 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <img
        src="/comingsoon.png"
        alt="Coming Soon"
        style={{
          width: "500px",
          height: "500px",
          maxWidth: "90vw",
          maxHeight: "90vh",
          objectFit: "contain",
        }}
      />

      <button
        onClick={() => navigate("/")}
        style={{
          padding: "12px 28px",
          fontSize: "16px",
          fontWeight: "600",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          background:
            "linear-gradient(90deg, #a5b4fc 0%, #fcd34d 50%, #fca5a5 100%)",
          color: "#0b1020",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          transition: "transform 0.15s ease",
        }}
        onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
        onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
      >
        ⬅ Go Back
      </button>
    </div>
  );
};

export default ComingSoon;
