import React from "react";
import { Container, Typography, Paper, Box } from "@mui/material";

function TypeCasting() {
  return (
    <Container maxWidth="md">
      
      <Typography variant="h4" gutterBottom color="primary">
        Implementing Typecasting in VB.NET
      </Typography>

      <Typography paragraph align="justify">
        Typecasting in VB.NET is the process of converting a variable from one 
        data type to another data type. It is used when we need to change the 
        type of data so that it can be used in different operations. 
        For example, converting a string to an integer before performing 
        mathematical calculations.
      </Typography>

      <Typography variant="h5" gutterBottom>
        Types of Typecasting
      </Typography>

      <Typography paragraph>
        In VB.NET there are two types of typecasting:
      </Typography>

      <ul>
        <li>Implicit Typecasting</li>
        <li>Explicit Typecasting</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        1. Implicit Typecasting
      </Typography>

      <Typography paragraph align="justify">
        Implicit typecasting is done automatically by VB.NET when converting 
        from a smaller data type to a larger data type. No special syntax is required.
      </Typography>

      <Paper elevation={3}>
        <Box p={2}>
          <pre>
{`Dim num As Integer = 10
Dim result As Double

result = num

lblResult.Text = result.ToString()`}
          </pre>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        2. Explicit Typecasting
      </Typography>

      <Typography paragraph align="justify">
        Explicit typecasting is done manually by the programmer when converting 
        from a larger data type to a smaller data type. VB.NET provides functions 
        such as CType(), CInt(), CDbl(), and CStr() for explicit conversion.
      </Typography>

      <Paper elevation={3}>
        <Box p={2}>
          <pre>
{`Dim number As Double = 15.75
Dim result As Integer

result = CInt(number)

lblResult.Text = result.ToString()`}
          </pre>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Example: String to Integer Conversion
      </Typography>

      <Paper elevation={3}>
        <Box p={2}>
          <pre>
{`Dim str As String = "25"
Dim num As Integer
Dim result As Integer
num = CInt(str)
result=num+5
lblResult.Text = result.ToString()`}
          </pre>
        </Box>
      </Paper>

    </Container>
  );
}

export default TypeCasting;