import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

const BinaryConverterGame = () => {
  const [decimalInput, setDecimalInput] = useState(0);
  const [userBinary, setUserBinary] = useState("");
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const checkAnswer = () => {
    const correct = parseInt(userBinary, 2) === parseInt(decimalInput);
    if (correct) {
      setFeedback("🎉 Congratulations! Correct conversion.");
    } else {
      setFeedback("❌ Oops! Try again.");
    }
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate("/gamedashboard")}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Go to Game dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Container style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2 style={{ textAlign: "center", color: "#1976d2" }}>🔢 Binary Converter Game</h2>

        <div style={{ maxWidth: 400, margin: "auto" }}>
          <label>Convert this decimal number to binary:</label>
          <input
            type="number"
            value={decimalInput}
            onChange={(e) => {
              setDecimalInput(e.target.value);
              setUserBinary("");
              setFeedback("");
            }}
            style={{ width: "100%", padding: "10px", fontSize: "16px", marginTop: "10px" }}
          />

          <label style={{ marginTop: "20px", display: "block" }}>Your Binary Answer:</label>
          <input
            type="text"
            value={userBinary}
            onChange={(e) => setUserBinary(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px", marginTop: "10px" }}
          />

          <button
            onClick={checkAnswer}
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "20px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Check Answer
          </button>

          {feedback && (
            <div style={{ marginTop: "20px", fontSize: "18px", textAlign: "center" }}>{feedback}</div>
          )}
        </div>
      </Container>

      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f5f5f5", marginTop: "30px" }}>
        © 2025 GyanManthan Gurukul. All Rights Reserved.
      </footer>
    </div>
  );
};

export default BinaryConverterGame;
