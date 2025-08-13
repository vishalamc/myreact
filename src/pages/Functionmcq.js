import React, { useState } from "react";
import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function FunctionMCQ() {
  const navigate = useNavigate();

  const questions = [
    // User-defined function MCQs
    {
      question: "Which keyword is used to define a user-defined function in CWhich of the following is a correct example of a user-defined function in C??",
      options: ["function", "func", "void/int/return type", "define"],
      answer: "void/int/return type",
    },
    {
      question: "In C, the 'main()' function is:",
      options: ["User-defined", "Predefined", "Both", "Neither"],
      answer: "Predefined",
    },
    {
      question: "Which of the following is NOT a valid return type for a user-defined function in C?",
      options: ["void", "int", "string", "float"],
      answer: "string",
    },
    {
      question: "What is the correct syntax to declare a function that takes two integers and returns an integer?",
      options: [
        "int sum(int a, int b);",
        "function sum(int a, int b);",
        "sum(int a, int b) int;",
        "declare sum(int, int);"
      ],
      answer: "int sum(int a, int b);",
    },
    {
      question: "Which part of the program must a function be defined before it is called?",
      options: [
        "Before main() only",
        "After main() only",
        "Either before or after main() with a declaration",
        "It cannot be after main()"
      ],
      answer: "Either before or after main() with a declaration",
    },
    {
      question: "Recursive functions are:",
      options: [
        "Functions that call themselves",
        "Functions called only once",
        "Functions without return value",
        "Functions that return arrays"
      ],
      answer: "Functions that call themselves",
    },
    {
      question: "Which of these is NOT a benefit of using user-defined functions?",
      options: [
        "Code reusability",
        "Modularity",
        "Reduced code readability",
        "Easy debugging"
      ],
      answer: "Reduced code readability",
    },
    {
      question: "In C, arguments passed to functions are:",
      options: [
        "Always passed by reference",
        "Always passed by value",
        "Passed by value, unless using pointers",
        "Passed randomly"
      ],
      answer: "Passed by value, unless using pointers",
    },
    {
      question: "What happens if a function doesn’t have a return statement and is not 'void'?",
      options: [
        "Compiler error",
        "Returns garbage value",
        "Returns 0",
        "Crashes the program"
      ],
      answer: "Returns garbage value",
    },
    {
      question: "Function prototypes are used to:",
      options: [
        "Avoid multiple definitions",
        "Declare the function’s interface before use",
        "Reduce memory usage",
        "Automatically generate function code"
      ],
      answer: "Declare the function’s interface before use",
    },

    // Predefined function MCQs
    {
      question: "Which header file contains the predefined function 'printf'?",
      options: ["stdlib.h", "stdio.h", "string.h", "math.h"],
      answer: "stdio.h",
    },
    {
      question: "The 'strlen' function is used to:",
      options: [
        "Find the number of characters in a string excluding null terminator",
        "Find the number of characters including null terminator",
        "Count spaces in a string",
        "Find ASCII value of characters"
      ],
      answer: "Find the number of characters in a string excluding null terminator",
    },
    {
      question: "What is the return type of the 'sqrt' function in C?",
      options: ["int", "float", "double", "void"],
      answer: "double",
    },
    {
      question: "Which library contains the predefined function 'pow'?",
      options: ["math.h", "stdlib.h", "string.h", "stdio.h"],
      answer: "math.h",
    },
    {
      question: "What will 'abs(-5)' return?",
      options: ["-5", "5", "0", "Error"],
      answer: "5",
    },
    {
      question: "The 'strcpy' function is used for:",
      options: [
        "Copying one string to another",
        "Comparing two strings",
        "Concatenating two strings",
        "Splitting a string"
      ],
      answer: "Copying one string to another",
    },
    {
      question: "Which predefined function is used to allocate memory at runtime?",
      options: ["malloc", "calloc", "realloc", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is the purpose of the 'exit()' function?",
      options: [
        "Terminate the program immediately",
        "Exit from a loop",
        "Close a file",
        "Pause program execution"
      ],
      answer: "Terminate the program immediately",
    },
    {
      question: "Which predefined function is used to generate a random number?",
      options: ["rand()", "random()", "generate()", "number()"],
      answer: "rand()",
    },
    {
      question: "Which of the following requires including 'time.h' header file?",
      options: ["time()", "rand()", "strlen()", "sqrt()"],
      answer: "time()",
    }
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
        Function MCQs (User-defined & Predefined)
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
