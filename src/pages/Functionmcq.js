import React, { useState } from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Button,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const mcqData = [
  {
    title: "User-defined Functions",
    questions: [
      {
        question: "Which of the following is a correct example of a user-defined function in C?",
        options: [
          "printf(\"Hello\");",
          "int sum(int a, int b) { return a + b; }",
          "sqrt(16);",
          "main()"
        ],
        answer: "int sum(int a, int b) { return a + b; }",
      },
      {
        question: "What is the correct syntax for declaring a function in C?",
        options: [
          "function sum(int a, int b);",
          "declare sum(int a, int b);",
          "int sum(int a, int b);",
          "sum(int a, int b);"
        ],
        answer: "int sum(int a, int b);",
      },
      {
        question: "What is the main purpose of a user-defined function?",
        options: [
          "To store data permanently",
          "To divide the program into reusable blocks",
          "To improve internet speed",
          "To control operating system functions"
        ],
        answer: "To divide the program into reusable blocks",
      },
      {
        question: "Which keyword is used to return a value from a function in C?",
        options: ["break", "return", "continue", "goto"],
        answer: "return",
      },
      {
        question: "If a function does not return any value, which return type should be used?",
        options: ["int", "void", "float", "null"],
        answer: "void",
      },
      {
        question: "Which of the following is NOT part of a function definition?",
        options: ["Function body", "Function name", "Return type", "Header files"],
        answer: "Header files",
      },
      {
        question: "What is the process of calling a function within the same function called?",
        options: ["Overloading", "Recursion", "Iteration", "Branching"],
        answer: "Recursion",
      },
      {
        question: "Which of the following correctly calls a function named 'display' with no parameters?",
        options: ["display;", "display()", "display{}", "call display();"],
        answer: "display()",
      },
      {
        question: "What will happen if a function is declared but not defined?",
        options: [
          "The program will compile and run",
          "Compilation error",
          "Infinite loop",
          "Logical error only"
        ],
        answer: "Compilation error",
      },
      {
        question: "Where can a function be defined in a C program?",
        options: [
          "Only before main()",
          "Only inside main()",
          "Before or after main()",
          "Nowhere in C"
        ],
        answer: "Before or after main()",
      }
    ]
  },
  {
    title: "Predefined Functions",
    questions: [
      {
        question: "Which of the following is a predefined function in C?",
        options: ["myFunction()", "calculate()", "printf()", "sumNumbers()"],
        answer: "printf()",
      },
      {
        question: "Where are most predefined functions in C stored?",
        options: [
          "In user-created header files",
          "In built-in header files like stdio.h",
          "Inside the main() function",
          "In the operating system kernel"
        ],
        answer: "In built-in header files like stdio.h",
      },
      {
        question: "What is the return type of the 'sqrt()' function from math.h?",
        options: ["int", "float", "double", "long"],
        answer: "double",
      },
      {
        question: "Which header file is needed for using the strlen() function?",
        options: ["stdio.h", "string.h", "math.h", "stdlib.h"],
        answer: "string.h",
      },
      {
        question: "What does the 'abs()' function return?",
        options: [
          "Absolute value of a number",
          "Average of numbers",
          "Address of a variable",
          "ASCII value"
        ],
        answer: "Absolute value of a number",
      },
      {
        question: "Which of the following functions is used to allocate memory dynamically?",
        options: ["malloc()", "scanf()", "printf()", "exit()"],
        answer: "malloc()",
      },
      {
        question: "Which predefined function is used to terminate a C program immediately?",
        options: ["break()", "exit()", "stop()", "terminate()"],
        answer: "exit()",
      },
      {
        question: "What does the pow(x, y) function do?",
        options: [
          "Calculates y raised to the power x",
          "Calculates x raised to the power y",
          "Calculates x modulo y",
          "Multiplies x and y"
        ],
        answer: "Calculates x raised to the power y",
      },
      {
        question: "What does the getchar() function do?",
        options: [
          "Reads a single character from the keyboard",
          "Prints a character",
          "Clears the screen",
          "Reads an integer"
        ],
        answer: "Reads a single character from the keyboard",
      },
      {
        question: "Which of these is NOT a predefined function in C?",
        options: ["printf()", "scanf()", "sort()", "strlen()"],
        answer: "sort()",
      },
    ],
  },
];

const MCQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAnswers, setShowAnswers] = useState({});

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAnswers = (index) => {
    setShowAnswers((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color='primary'>
      Functions in C MCQs
      </Typography>

      <List>
        {mcqData.map((topic, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleToggle(index)}>
                <ListItemText primary={topic.title} />
                {openIndex === index ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>
            <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
              <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: 1, mt: 1 }}>
                {topic.questions.map((q, qIndex) => (
                  <Box key={qIndex} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">
                      {qIndex + 1}. {q.question}
                    </Typography>
                    <ul>
                      {q.options.map((option, oIndex) => (
                        <li key={oIndex}>{option}</li>
                      ))}
                    </ul>
                    {showAnswers[index] && (
                      <Typography variant="body2" color="green">
                        Answer: {q.answer}
                      </Typography>
                    )}
                  </Box>
                ))}
                <Button variant="outlined" onClick={() => toggleAnswers(index)}>
                  {showAnswers[index] ? 'Hide Answers' : 'Show Answers'}
                </Button>
              </Box>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default MCQPage;
