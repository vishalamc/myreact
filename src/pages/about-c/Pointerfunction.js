import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PointerFunction = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "900px", mx: "auto" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
      >
        Passing Pointer to a Function in C
      </Typography>

      <Typography sx={{ mb: 2 }}>
        When you pass a <b>pointer to a function</b>, you are sending the{" "}
        <b>address of a variable</b>.  
        This allows the function to:
      </Typography>

      <Typography sx={{ ml: 2 }}>
        • Modify the original variable  
        • Access the value using dereference operator (<b>*ptr</b>)
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        Syntax:
      </Typography>

      <Box
        sx={{
          ml: 2,
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
        }}
      >
{`void function_name(int *ptr)
{
    // use *ptr to access or modify the original value
}`}
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        Example:
      </Typography>

      {/* Code Block */}
      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          fontSize: "14px",
        }}
      >
{`#include <stdio.h>

void changeValue(int *p) 
{
    *p = 100;
}

int main() 
{
    int x = 10;
    printf("Before: x = %d", x);

    changeValue(&x);  // passing address of x

    printf("\\nAfter: x = %d", x);
    return 0;
}`}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/pointer"
        >
          ⬅ Back
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/pointerarithmetic">
          Next ➡
        </Button>
      </Box>
    </Box>
  );
};

export default PointerFunction;
