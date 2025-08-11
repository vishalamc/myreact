import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Userdefine = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f5f545", minHeight: "100vh" }}>
      <Card sx={{ maxWidth: 900, margin: "auto", p: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            User-Defined Functions in C
          </Typography>

          <Typography variant="body1" paragraph>
            A function is a block of code that performs a specific task and can be reused whenever needed. 
            Functions are useful because we can use the same code many times and break a big program into smaller parts.
          </Typography>

          <Typography variant="h5" gutterBottom color="primary">
            Types of Functions in C
          </Typography>
          <Typography variant="body1">
            1. <b>Predefined Functions</b> – Built-in (e.g., <code>printf()</code>, <code>scanf()</code>, <code>sqrt()</code>). <br />
            2. <b>User-defined Functions</b> – Created by the programmer.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Structure of a Function
          </Typography>

          <Typography variant="h6" gutterBottom>
            1. Function Declaration (Prototype) or Function Signature
          </Typography>
          <Typography variant="body1" paragraph>
            A function without a body part. It tells the compiler the function name, its return type, and the parameters 
            which are passed in the function.
          </Typography>
          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px" }}>
            Syntax: <br />
            <code>returnType functionName(parameter list);</code> <br />
            Example: <code>int add(int a, int b);</code>
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            2. Function Definition
          </Typography>
          <Typography variant="body1" paragraph>
            A function with a body part which tells the compiler what task it will perform.
          </Typography>
          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px" }}>
            Syntax: <br />
            <code>
              returnType functionName(parameter list) {"{"} <br />
              &nbsp;&nbsp;// function body <br />
              {"}"}
            </code>
          </Typography>

          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px", mt: 1 }}>
            Example: <br />
            <code>
              int add(int a, int b) {"{"} <br />
              &nbsp;&nbsp;return a + b; <br />
              {"}"}
            </code>
          </Typography>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button variant="contained" onClick={() => navigate("/home/predefine")}>
              Next
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Userdefine;
