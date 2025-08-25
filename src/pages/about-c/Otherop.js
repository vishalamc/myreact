import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const levelsData = [
  // Level 1
  [
    {
      question: "Which keyword is used to declare a variable in C?",
      options: ["int", "var", "let", "define"],
      answer: 0,
    },
    {
      question: "What will be the output of: printf(\"%d\", 5 > 2);",
      options: ["true", "false", "1", "0"],
      answer: 2,
    },
  ],
  // Level 2
  [
    {
      question: "How many times will this loop run? for(int i=0; i<5; i++)",
      options: ["4", "5", "6", "Infinite"],
      answer: 1,
    },
    {
      question: "Which of these is a valid C data type?",
      options: ["float", "number", "real", "decimal"],
      answer: 0,
    },
  ],
  // Level 3
  [
    {
      question: "Which function finds string length in C?",
      options: ["size()", "len()", "strlen()", "length()"],
      answer: 2,
    },
    {
      question: "Which header is required for printf?",
      options: ["stdio.h", "stdlib.h", "string.h", "math.h"],
      answer: 0,
    },
  ],
  // Level 4
  [
    {
      question: "Which is a recursive function?",
      options: [
        "A function that calls itself",
        "A function with no parameters",
        "A function that runs only once",
        "A function that returns nothing",
      ],
      answer: 0,
    },
    {
      question: "Which loop is guaranteed to run at least once?",
      options: ["for", "while", "do-while", "none"],
      answer: 2,
    },
  ],
];

export default function CGameArena() {
  const navigate = useNavigate();
  const [level, setLevel] = useState(0); // current level index
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [selected, setSelected] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [showLevelTransition, setShowLevelTransition] = useState(false);

  const totalLevels = 4;

  // Timer countdown
  useEffect(() => {
    if (showLevelTransition || gameOver) return;
    if (timeLeft === 0) {
      handleNext();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, showLevelTransition, gameOver]);

  const handleNext = () => {
    if (selected !== "" && parseInt(selected) === levelsData[level][currentQ].answer) {
      setScore(score + 10);
    }
    setSelected("");

    if (currentQ + 1 < levelsData[level].length) {
      setCurrentQ(currentQ + 1);
      setTimeLeft(20);
    } else {
      // Level complete
      if (level + 1 < totalLevels) {
        setShowLevelTransition(true);
      } else {
        // All levels complete → Winner
        setGameOver(true);
      }
    }
  };

  const startNextLevel = () => {
    setLevel(level + 1);
    setCurrentQ(0);
    setTimeLeft(20);
    setShowLevelTransition(false);
  };

  const restartGame = () => {
    setLevel(0);
    setCurrentQ(0);
    setScore(0);
    setTimeLeft(20);
    setSelected("");
    setGameOver(false);
    setShowLevelTransition(false);
  };

  // Winner / Game Over screen
  if (gameOver) {
    return (
      <Box sx={{ textAlign: "center", p: 3 }}>
        <Typography variant="h4" gutterBottom>🏆 You Win!</Typography>
        <Typography variant="h6">Final Score: {score}</Typography>
        <Button variant="contained" onClick={restartGame} sx={{ m: 1 }}>
          Play Again
        </Button>
        <Button variant="outlined" onClick={() => navigate("/gamedashboard")} sx={{ m: 1 }}>
          Home
        </Button>
        <Footer />
      </Box>
    );
  }

  // Level transition screen
  if (showLevelTransition) {
    return (
      <Box sx={{ textAlign: "center", p: 3 }}>
        <Typography variant="h4">✅ Level {level + 1} Complete!</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>Score: {score}</Typography>
        <Button variant="contained" onClick={startNextLevel}>
          Go for Level {level + 2}
        </Button>
        <Footer />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", p: 2 }}>
      {/* Top Layout */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button variant="outlined" onClick={() => navigate("/gamedashboard")}>Home</Button>
        <Typography variant="h6">C Programming Arena</Typography>
      </Box>

      {/* Level Card */}
      <Card sx={{ mb: 2, backgroundColor: "#e3f2fd" }}>
        <CardContent>
          <Typography variant="h6">Level {level + 1} of {totalLevels}</Typography>
        </CardContent>
      </Card>

      {/* Timer Card */}
      <Card sx={{ mb: 2, backgroundColor: "#fff3e0" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>{timeLeft}s</Typography>
          <LinearProgress
            variant="determinate"
            value={(timeLeft / 20) * 100}
            sx={{ mt: 1 }}
          />
        </CardContent>
      </Card>

      {/* Question Card */}
      <Card>
        <CardContent>
          <Typography variant="body1" sx={{ fontSize: "1.2rem", fontWeight: "500" }}>
            {levelsData[level][currentQ].question}
          </Typography>

          {/* Options */}
          <RadioGroup
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            sx={{ mt: 2 }}
          >
            {levelsData[level][currentQ].options.map((opt, index) => (
              <FormControlLabel
                key={index}
                value={index.toString()}
                control={<Radio />}
                label={opt}
              />
            ))}
          </RadioGroup>

          <Button
            variant="contained"
            onClick={handleNext}
            sx={{ mt: 2 }}
            disabled={selected === ""}
          >
            Next
          </Button>

          <Typography variant="body2" sx={{ mt: 2 }}>Score: {score}</Typography>
        </CardContent>
      </Card>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

// Footer Component
function Footer() {
  return (
    <Box sx={{ textAlign: "center", mt: 3, py: 2, borderTop: "1px solid #ccc" }}>
      <Typography variant="caption">© {new Date().getFullYear()} C Game Arena. All Rights Reserved.</Typography>
    </Box>
  );
}
