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
    title: "Introduction",
    questions: [
      {
        question: "What is the C programming language primarily used for?",
        options: ["Web development", "System programming", "Graphic design", "Database management"],
        answer: "System programming",
      },
      {
        question: "Who developed the C language?",
        options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"],
        answer: "Dennis Ritchie",
      },
      {
        question: "Which of the following is a feature of C?",
        options: ["Object-oriented", "Platform-independent", "Low-level access", "Garbage collection"],
        answer: "Low-level access",
      },
      {
        question: "In which year was C developed?",
        options: ["1972", "1983", "1995", "2000"],
        answer: "1972",
      },
      {
        question: "Which operating system was developed using C?",
        options: ["Windows", "Linux", "Unix", "MacOS"],
        answer: "Unix",
      },
    ],
  },
  {
 title: "Expressions and Statements",
    questions: [
      {
        question: "Which of the following is an expression in C?",
        options: ["int a;", "a + b", "return", "if (x > y)"],
        answer: "a + b",
      },
      {
        question: "A statement in C always ends with:",
        options: ["A comma (,)", "A semicolon (;)", "A colon (:)", "A period (.)"],
        answer: "A semicolon (;)",
      },
      {
        question: "Which of the following is NOT a type of statement in C?",
        options: ["Expression statement", "Control statement", "Declaration statement", "HTML statement"],
        answer: "HTML statement",
      },
      {
        question: "In C, 'x = y + 2;' is an example of:",
        options: ["Expression", "Statement", "Both expression and statement", "Neither"],
        answer: "Both expression and statement",
      },
      {
        question: "Which type of statement is used to make decisions in C?",
        options: ["Looping statement", "Jump statement", "Decision-making statement", "Compound statement"],
        answer: "Decision-making statement",
      },
    ],
  },
  {
    title: "Identifiers",
    questions: [
      {
        question: "What is an identifier in C?",
        options: ["A keyword", "A variable name", "A function call", "A library name"],
        answer: "A variable name",
      },
      {
        question: "Which of the following is a valid identifier?",
        options: ["1value", "_value", "int", "void"],
        answer: "_value",
      },
      {
        question: "Identifiers can start with:",
        options: ["A digit", "A symbol", "A letter or underscore", "A blank space"],
        answer: "A letter or underscore",
      },
      {
        question: "Which identifier is not allowed in C?",
        options: ["value1", "int", "_count", "mainFunction"],
        answer: "int",
      },
      {
        question: "Are C identifiers case-sensitive?",
        options: ["Yes", "No"],
        answer: "Yes",
      },
    ],
  },
  {
    title: "Keywords",
    questions: [
      {
        question: "Which of the following is a keyword in C?",
        options: ["main", "return", "printf", "scanf"],
        answer: "return",
      },
      {
        question: "How many keywords are there in standard C?",
        options: ["32", "40", "44", "28"],
        answer: "32",
      },
      {
        question: "Which keyword is used to define a constant in C?",
        options: ["const", "define", "fixed", "static"],
        answer: "const",
      },
      {
        question: "What is the purpose of the 'return' keyword?",
        options: ["End program", "Display output", "Exit a loop", "Exit a function and return a value"],
        answer: "Exit a function and return a value",
      },
      {
        question: "Which of the following is NOT a C keyword?",
        options: ["float", "class", "for", "void"],
        answer: "class",
      },
    ],
  },
  {
    title: "Datatypes",
    questions: [
      {
        question: "Which of the following is a basic data type in C?",
        options: ["int", "array", "struct", "pointer"],
        answer: "int",
      },
      {
        question: "Which data type is used to store decimal numbers?",
        options: ["int", "char", "float", "void"],
        answer: "float",
      },
      {
        question: "What is the size of 'int' in most 32-bit compilers?",
        options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"],
        answer: "4 bytes",
      },
      {
        question: "Which data type is used for storing characters?",
        options: ["int", "char", "float", "double"],
        answer: "char",
      },
      {
        question: "What is the purpose of 'void' data type?",
        options: ["To store integers", "To return nothing", "To store floating points", "To define arrays"],
        answer: "To return nothing",
      },
    ],
  },
  {
    title: "Constant",
    questions: [
      {
        question: "Which keyword is used to declare a constant variable in C?",
        options: ["static", "define", "const", "final"],
        answer: "const",
      },
      {
        question: "What is the output if you try to modify a const variable?",
        options: ["Runtime error", "No effect", "Compile-time error", "Warning only"],
        answer: "Compile-time error",
      },
      {
        question: "Which is used to define symbolic constants?",
        options: ["const", "define", "symbol", "enum"],
        answer: "define",
      },
      {
        question: "Constants are useful because they:",
        options: ["Save memory", "Allow flexible changes", "Improve code readability and prevent changes", "Speed up execution"],
        answer: "Improve code readability and prevent changes",
      },
      {
        question: "Which of the following is a valid constant declaration?",
        options: ["const int x = 10;", "int const = 10;", "define x = 10;", "constant int x = 10;"],
        answer: "const int x = 10;",
      },
    ],
  },
  {
    title: "Variables",
    questions: [
      {
        question: "Which of the following correctly declares a variable in C?",
        options: ["int x;", "x int;", "declare x;", "int = 10;"],
        answer: "int x;",
      },
      {
        question: "What is a variable in C?",
        options: ["A reserved keyword", "A container to store data", "An operator", "A data type"],
        answer: "A container to store data",
      },
      {
        question: "Which of these is a valid variable name?",
        options: ["int", "123number", "my_var", "#value"],
        answer: "my_var",
      },
      {
        question: "What can a variable store?",
        options: ["Only integers", "Only strings", "Any type of data", "Only characters"],
        answer: "Any type of data",
      },
      {
        question: "Which of these is an initialization?",
        options: ["int a;", "int a = 5;", "a = 5;", "declare int a;"],
        answer: "int a = 5;",
      },
    ],
  },
  {
  title: "Operators",
  questions: [
    {
      question: "Which operator is used to access the value at an address in C?",
      options: ["&", "*", "->", "."],
      answer: "*",
    },
    {
      question: "What will be the output of: printf(\"%d\", 5/2);",
      options: ["2", "2.5", "3", "Error"],
      answer: "2",
    },
    {
      question: "Which operator has the highest precedence in C?",
      options: ["++ (Increment)", "* (Multiplication)", "= (Assignment)", "&& (Logical AND)"],
      answer: "++ (Increment)",
    },
    {
      question: "What is the result of: 5 + 2 * 3 in C?",
      options: ["21", "11", "7", "17"],
      answer: "11",
    },
    {
      question: "Which of the following is a logical operator in C?",
      options: ["&&", "||", "!", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "Which operator is called the conditional operator in C?",
      options: ["?:", "&&", "||", "=="],
      answer: "?:",
    },
    {
      question: "Which statement is true about the modulus operator (%)?",
      options: [
        "It returns the remainder after division",
        "It can be used with floating-point numbers",
        "It returns quotient",
        "It multiplies two numbers"
      ],
      answer: "It returns the remainder after division",
    },
    {
      question: "Which of these is a bitwise operator in C?",
      options: ["&", "|", "^", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "In C, '==' is used for:",
      options: ["Assignment", "Comparison", "Bitwise AND", "Increment"],
      answer: "Comparison",
    },
    {
      question: "Which operator is used to access members of a structure through a pointer?",
      options: ["*", ".", "->", "&"],
      answer: "->",
    },
  ],
},
 {
    title: "Decision Making Statements",
    questions: [
      {
        question: "Which statement is used to choose between multiple options in C?",
        options: ["if", "switch", "goto", "while"],
        answer: "switch",
      },
      {
        question: "In an if-else ladder, how many branches execute?",
        options: ["All true ones", "Only first true one", "All conditions", "None"],
        answer: "Only first true one",
      },
      {
        question: "Which keyword is used to exit from a switch statement?",
        options: ["exit", "stop", "break", "continue"],
        answer: "break",
      },
      {
        question: "In C, 'else' belongs to:",
        options: ["Nearest 'if'", "First 'if' in the program", "Last 'if' in the file", "Random 'if'"],
        answer: "Nearest 'if'",
      },
      {
        question: "What happens if you omit 'break' in a switch case?",
        options: ["Compilation error", "Next case executes too", "Program stops", "Nothing"],
        answer: "Next case executes too",
      }
    ]
  },
  {
    title: "Looping Statements",
    questions: [
      {
        question: "Which loop is guaranteed to execute at least once?",
        options: ["for", "while", "do-while", "None"],
        answer: "do-while",
      },
      {
        question: "Which loop is best when the number of iterations is known?",
        options: ["while", "for", "do-while", "goto"],
        answer: "for",
      },
      {
        question: "What is the output of: for(int i=0;i<3;i++){printf(\"%d\",i);}?",
        options: ["0 1 2", "0 1 2 3", "1 2 3", "Infinite loop"],
        answer: "0 1 2",
      },
      {
        question: "Which loop checks the condition before executing the body?",
        options: ["for", "while", "do-while", "Both for and while"],
        answer: "Both for and while",
      },
      {
        question: "What will happen if the loop condition is always true?",
        options: ["Syntax error", "Infinite loop", "Run once", "Program stops automatically"],
        answer: "Infinite loop",
      }
    ]
  },
  {
    title: "Jumping Statements",
    questions: [
      {
        question: "Which statement is used to skip the current iteration in a loop?",
        options: ["break", "continue", "goto", "skip"],
        answer: "continue",
      },
      {
        question: "Which statement is used to terminate a loop immediately?",
        options: ["break", "continue", "goto", "stop"],
        answer: "break",
      },
      {
        question: "Which keyword is used to transfer control to a labeled statement?",
        options: ["goto", "label", "jump", "case"],
        answer: "goto",
      },
      {
        question: "Which statement is used to exit from a function?",
        options: ["exit", "break", "return", "stop"],
        answer: "return",
      },
      {
        question: "What happens if you use 'goto' to jump into a loop from outside?",
        options: ["Compilation error", "It works", "Infinite loop", "Program crashes"],
        answer: "It works",
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
