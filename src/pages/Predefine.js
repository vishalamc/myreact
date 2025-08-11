import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Predefine = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3, backgroundColor: "#f5f5f545", minHeight: "100vh" }}>
      <Card sx={{ maxWidth: 900, margin: "auto", p: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            Predefined Functions in C
          </Typography>

          <Typography variant="body1"paragraph sx={{ textAlign: "justify" }}>
            Predefined functions in C are the built-in functions provided by C libraries. 
            These functions are already defined and compiled, and can be used directly 
            in our program by including the appropriate header files. 
            </Typography>

            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Examples of Common Predefined Functions
          </Typography>
          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px" }}>
            <b>1. Input/Output Functions (stdio.h)</b> <br />
            <code>printf()</code> – prints output to the screen <br />
            <code>scanf()</code> – reads input from the user
          </Typography>

          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px", mt: 1 }}>
            <b>2. String Handling Functions (string.h)</b> <br />
            <code>strlen()</code> – returns length of a string <br />
            <code>strcpy()</code> – copies one string to another
          </Typography>

          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px", mt: 1 }}>
            <b>3. Mathematical Functions (math.h)</b> <br />
            <code>sqrt()</code> – returns square root <br />
            <code>pow()</code> – returns power of a number
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Syntax of Using Predefined Functions
          </Typography>
          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px" }}>
            <code>
              #include {"<headerFile>"} <br />
              int main() {"{"} <br />
              &nbsp;&nbsp;functionName(parameters); <br />
              &nbsp;&nbsp;return 0; <br />
              {"}"}
            </code>
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
            Example
          </Typography>
          <Typography variant="body2" sx={{ background: "rgba(29, 77, 7, 0.23)", p: 1, borderRadius: "5px" }}>
            <code>
              #include {"<stdio.h>"} <br />
              int main() {"{"} <br />
              &nbsp;&nbsp;printf("Hello, World!"); <br />
              &nbsp;&nbsp;return 0; <br />
              {"}"}
            </code>
          </Typography>
        </CardContent>
      </Card>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
              
        <Button variant="contained" onClick={() => navigate("/home/userdefine")}>
          Back
        </Button>
         <Button variant="contained" onClick={() => navigate("/home/recursive")}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Predefine;
