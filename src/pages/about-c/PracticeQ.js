// src/pages/MCQPage.js
import React, { useState } from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const mcqData = [
  {
    title: "Introduction",
    questions: [
      {
        question: "C language was developed by?",
        options: ["Dennis Ritchie", "James Gosling", "Ken Thompson", "Bjarne Stroustrup"],
        answer: "Dennis Ritchie",
      },
      {
        question: "Which year was C language developed?",
        options: ["1969", "1972", "1980", "1990"],
        answer: "1972",
      },
      {
        question: "C is considered a?",
        options: ["High-level language", "Low-level language", "Middle-level language", "Assembly language"],
        answer: "Middle-level language",
      },
      {
        question: "Which operating system was developed using C?",
        options: ["Linux", "UNIX", "Windows", "MacOS"],
        answer: "UNIX",
      },
      {
        question: "C language is?",
        options: ["Interpreted", "Compiled", "Both", "None"],
        answer: "Compiled",
      },
    ],
  },
  {
    title: "Identifiers",
    questions: [
      {
        question: "Which of the following is a valid identifier in C?",
        options: ["int", "123abc", "_value", "for"],
        answer: "_value",
      },
      {
        question: "Identifiers in C can start with?",
        options: ["Digit", "Special symbol", "Letter or underscore", "Whitespace"],
        answer: "Letter or underscore",
      },
      {
        question: "Which identifier is invalid?",
        options: ["sum", "Sum1", "1Sum", "_sum"],
        answer: "1Sum",
      },
      {
        question: "Identifiers are case sensitive in C?",
        options: ["Yes", "No", "Sometimes", "Depends on compiler"],
        answer: "Yes",
      },
      {
        question: "Maximum length of identifier in C (ANSI standard)?",
        options: ["31", "63", "127", "255"],
        answer: "31",
      },
    ],
  },
  {
    title: "Keywords",
    questions: [
      {
        question: "Which of the following is a keyword in C?",
        options: ["while", "main", "define", "printf"],
        answer: "while",
      },
      {
        question: "Keywords in C are?",
        options: ["User-defined", "Predefined", "Optional", "Case-insensitive"],
        answer: "Predefined",
      },
      {
        question: "Which of the following is NOT a keyword in C?",
        options: ["auto", "break", "goto", "switches"],
        answer: "switches",
      },
      {
        question: "How many keywords are there in ANSI C?",
        options: ["32", "48", "64", "128"],
        answer: "32",
      },
      {
        question: "Can keywords be used as variable names?",
        options: ["Yes", "No", "Only in uppercase", "Sometimes"],
        answer: "No",
      },
    ],
  },
  {
    title: "Datatypes",
    questions: [
      {
        question: "Which is NOT a basic datatype in C?",
        options: ["int", "float", "double", "string"],
        answer: "string",
      },
      {
        question: "Size of int in most C compilers is?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
        answer: "Depends on system",
      },
      {
        question: "Which datatype is used to store a single character?",
        options: ["int", "char", "float", "double"],
        answer: "char",
      },
      {
        question: "Which datatype can store real numbers?",
        options: ["int", "char", "float", "void"],
        answer: "float",
      },
      {
        question: "Void datatype means?",
        options: ["No value", "Zero value", "Garbage value", "Character type"],
        answer: "No value",
      },
    ],
  },
  {
    title: "Constants",
    questions: [
      {
        question: "Which keyword is used to define a constant in C?",
        options: ["const", "final", "constant", "define"],
        answer: "const",
      },
      {
        question: "Which symbol is used for preprocessor constants?",
        options: ["@", "#", "$", "&"],
        answer: "#",
      },
      {
        question: "Which is a valid constant?",
        options: ["10", "'A'", "3.14", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "Which constant type stores true/false values?",
        options: ["Integer constant", "Character constant", "Boolean constant", "Float constant"],
        answer: "Boolean constant",
      },
      {
        question: "Which is a symbolic constant?",
        options: ["const int a=10;", "#define PI 3.14", "int b=20;", "float c=2.5"],
        answer: "#define PI 3.14",
      },
    ],
  },
  {
    title: "Variables",
    questions: [
      {
        question: "Which of the following correctly declares a variable?",
        options: ["int x;", "x int;", "declare x;", "int = 10;"],
        answer: "int x;",
      },
      {
        question: "What is the default value of a local variable in C?",
        options: ["0", "Garbage value", "NULL", "Depends on datatype"],
        answer: "Garbage value",
      },
      {
        question: "Which storage class stores variable globally?",
        options: ["auto", "extern", "static", "register"],
        answer: "extern",
      },
      {
        question: "Which type of variable is visible only within the function?",
        options: ["Local variable", "Global variable", "Static variable", "Extern variable"],
        answer: "Local variable",
      },
      {
        question: "Which symbol is used for pointer variables?",
        options: ["*", "&", "%", "@"],
        answer: "*",
      },
    ],
  },
  {
    title: "Expressions and Statements",
    questions: [
      {
        question: "Which is an expression in C?",
        options: ["int a;", "a + b", "return", "if (x > y)"],
        answer: "a + b",
      },
      {
        question: "Which is a statement in C?",
        options: ["a + b", "int a=10;", "x+y", "(a>b)"],
        answer: "int a=10;",
      },
      {
        question: "A statement in C always ends with?",
        options: ["Comma (,)", "Semicolon (;)", "Colon (:)", "Period (.)"],
        answer: "Semicolon (;)",
      },
      {
        question: "Which is a compound statement?",
        options: ["if(x>y)", "{a=10; b=20;}", "a+b", "return"],
        answer: "{a=10; b=20;}",
      },
      {
        question: "Which is NOT a valid statement?",
        options: ["return;", "break;", "int 1x;", "x=5;"],
        answer: "int 1x;",
      },
    ],
  },
  {
    title: "Operators",
    questions: [
      {
        question: "Which operator is used for division remainder?",
        options: ["/", "%", "*", "//"],
        answer: "%",
      },
      {
        question: "Which is NOT a logical operator?",
        options: ["&&", "||", "!", "&"],
        answer: "&",
      },
      {
        question: "Which is the increment operator?",
        options: ["++", "--", "+", "add"],
        answer: "++",
      },
      {
        question: "Which operator is used to access value at address?",
        options: ["*", "&", "%", "#"],
        answer: "*",
      },
      {
        question: "Which operator has the highest precedence?",
        options: ["*", "()", "++", "="],
        answer: "()",
      },
    ],
  },
];

const MCQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSelect = (topicIndex, questionIndex, value) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`${topicIndex}-${questionIndex}`]: value,
    }));
  };

  const handleSubmit = () => {
    let total = 0;
    let correct = 0;

    mcqData.forEach((topic, tIndex) => {
      topic.questions.forEach((q, qIndex) => {
        total++;
        const key = `${tIndex}-${qIndex}`;
        if (userAnswers[key] === q.answer) {
          correct++;
        }
      });
    });

    setScore({ correct, total });
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Topic-wise MCQs
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
              <Box sx={{ p: 2, border: "1px solid #ccc", borderRadius: 1, mt: 1 }}>
                {topic.questions.map((q, qIndex) => (
                  <Box key={qIndex} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1">
                      {qIndex + 1}. {q.question}
                    </Typography>
                    <RadioGroup
                      value={userAnswers[`${index}-${qIndex}`] || ""}
                      onChange={(e) => handleSelect(index, qIndex, e.target.value)}
                    >
                      {q.options.map((option, oIndex) => (
                        <FormControlLabel
                          key={oIndex}
                          value={option}
                          control={<Radio />}
                          label={option}
                        />
                      ))}
                    </RadioGroup>
                  </Box>
                ))}
              </Box>
            </Collapse>
          </Box>
        ))}
      </List>

      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
        Submit
      </Button>

      {score && (
        <Typography variant="h6" sx={{ mt: 2, color: "green" }}>
          You scored {score.correct} out of {score.total}
        </Typography>
      )}
    </Box>
  );
};

export default MCQPage;
