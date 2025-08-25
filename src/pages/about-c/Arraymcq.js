import React, { useState } from "react";
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ArrayMCQ() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "Which of the following correctly declares a single-dimensional array in C?",
      options: ["int arr[5];", "int arr;", "array int[5];", "int arr()"],
      answer: "int arr[5];",
    },
    {
      question: "What is the index of the first element in an array?",
      options: ["0", "1", "-1", "Depends on the compiler"],
      answer: "0",
    },
    {
      question: "Which of the following is the correct way to initialize an array in C?",
      options: ["int arr[3] = {1, 2, 3};", "int arr(3) = {1, 2, 3};", "int arr[] = 1, 2, 3;", "array arr[3] = {1, 2, 3};"],
      answer: "int arr[3] = {1, 2, 3};",
    },
    {
      question: "What will happen if you access an array element outside its bounds?",
      options: [
        "Compiler will throw an error",
        "Undefined behavior",
        "It will return 0",
        "It will wrap around to the first element"
      ],
      answer: "Undefined behavior",
    },
    {
      question: "How do you declare a two-dimensional array in C?",
      options: ["int arr[3][4];", "int arr(3,4);", "int[3][4] arr;", "array arr[3,4];"],
      answer: "int arr[3][4];",
    },
    {
      question: "What is the correct syntax to pass an array to a function?",
      options: [
        "function(int arr[]);",
        "function(int[] arr);",
        "function(array arr);",
        "function(arr[5]);"
      ],
      answer: "function(int arr[]);",
    },
    {
      question: "Which of the following statements about arrays in C is true?",
      options: [
        "Arrays are passed by value to functions",
        "Arrays are passed by reference to functions",
        "Arrays cannot be passed to functions",
        "Array elements cannot be changed inside functions"
      ],
      answer: "Arrays are passed by reference to functions",
    },
    {
      question: "In memory, array elements are stored:",
      options: ["In consecutive memory locations", "Randomly", "In reverse order", "Depends on the compiler"],
      answer: "In consecutive memory locations",
    },
    {
      question: "Which of the following can be used to find the size of an array in bytes?",
      options: ["size()", "sizeof()", "length()", "count()"],
      answer: "sizeof()",
    },
    {
      question: "What is the output of the following code?\n\nint arr[5] = {1, 2};\nprintf(\"%d\", arr[2]);",
      options: ["0", "1", "2", "Garbage value"],
      answer: "0",
    },
  ];

  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (qIndex, option) => {
    setAnswers({ ...answers, [qIndex]: option });
  };

  const handleSubmit = () => {
    let count = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) {
        count++;
      }
    });
    setScore(count);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" gutterBottom color="primary">
        Array MCQs
      </Typography>

      {questions.map((q, index) => (
        <Paper key={index} sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6">
            {index + 1}. {q.question}
          </Typography>
          <RadioGroup
            value={answers[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
          >
            {q.options.map((opt, i) => (
              <FormControlLabel
                key={i}
                value={opt}
                control={<Radio />}
                label={opt}
              />
            ))}
          </RadioGroup>
        </Paper>
      ))}

      <Grid container spacing={2} sx={{ mt: 3 }}>
       <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      {score !== null && (
        <Typography variant="h6" color="success.main" sx={{ mt: 2 }}>
          Your Score: {score} / {questions.length}
        </Typography>
      )}
    </Box>
  );
}
