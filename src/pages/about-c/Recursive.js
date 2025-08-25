import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Recursive() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        maxWidth: "100%",
        wordBreak: "break-word",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        color="primary"
        sx={{ fontSize: { xs: "1.5rem", sm: "2rem" } }}
      >
        Recursive Functions in C
      </Typography>

      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        A <strong>recursive function</strong> in C is a function that calls
        itself directly or indirectly to solve a problem. This method is helpful
        when a problem can be split into smaller problems of the same type.
      </Typography>

      <Typography variant="h5" gutterBottom color="primary">
        Key Features of Recursion:
      </Typography>
      <ul>
        <li>Function calls itself.</li>
        <li>
          Must contain a <strong>base case</strong> to stop the recursion.
        </li>
      </ul>

      <Typography variant="h5" gutterBottom color="primary">
        Types of Recursion:
      </Typography>
      <ul>
        <li>
          <strong>Direct Recursion</strong> – Function calls itself directly.
        </li>
        <li>
          <strong>Indirect Recursion</strong> – Function A calls Function B,
          and Function B calls Function A.
        </li>
      </ul>

      <Typography variant="h5" gutterBottom color="primary">
        General Structure of a Recursive Function:
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          p: 1.5,
          borderRadius: "5px",
          overflowX: "auto",
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        }}
      >
        {`return_type function_name(parameters) {
    if (base_condition) {
        // stop recursion
        return value;
    } else {
        // recursive call
        return function_name(modified_parameters);
    }
}`}
      </Box>

      <Typography variant="h6" gutterBottom color="primary">
        Example 1: Factorial using Recursion
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          p: 1.5,
          borderRadius: "5px",
          overflowX: "auto",
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        }}
      >
        {`#include <stdio.h>

int factorial(int n) {
    if (n == 0)  // base case
        return 1;
    else
        return n * factorial(n - 1); // recursive case
}

int main() {
    int num = 5;
    printf("Factorial of %d is %d", num, factorial(num));
    return 0;
}`}
      </Box>

      <Typography variant="h6" gutterBottom color="primary">
        Example 2: Fibonacci Series using Recursion
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          p: 1.5,
          borderRadius: "5px",
          overflowX: "auto",
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        }}
      >
        {`#include <stdio.h>

int fibonacci(int n) {
    if (n == 0) // base case
        return 0;
    else if (n == 1) // base case
        return 1;
    else
        return fibonacci(n - 1) + fibonacci(n - 2); // recursive case
}

int main() {
    int i, terms = 5;
    printf("Fibonacci series: ");
    for (i = 0; i < terms; i++) {
        printf("%d ", fibonacci(i));
    }
    return 0;
}`}
      </Box>

      <Typography variant="h5" gutterBottom color="primary">
        Advantages of Recursion:
      </Typography>
      <ul>
        <li>Reduces code size.</li>
        <li>
          Makes code easier to understand for problems like tree traversals,
          factorial, Fibonacci, etc.
        </li>
      </ul>

      <Typography variant="h5" gutterBottom color="primary">
        Disadvantages of Recursion:
      </Typography>
      <ul>
        <li>Consumes more memory (function call stack).</li>
        <li>
          Can lead to stack overflow if base case is missing or incorrect.
        </li>
      </ul>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button
          variant="contained"
          onClick={() => navigate("/learnc/predefine")}
          sx={{
            width: { xs: "100%", sm: "auto" },
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}
