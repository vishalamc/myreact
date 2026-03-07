import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const Vbdecision = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>

      <Typography variant="h5" gutterBottom color="primary">
        Decision Statements in VB.NET
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph align="justify">
        Decision statements are used to control the flow of execution in a program.
        They allow the program to take different actions based on different conditions.
        In VB.NET, decision statements evaluate a condition and execute specific
        blocks of code depending on whether the condition is True or False.
      </Typography>

      <Typography variant="h6" color="primary" sx={{ mt: 3 }}>
        Types of Decision Statements in VB.NET
      </Typography>

      <Typography component="div">
        <ul>
          <li>If Statement</li>
          <li>If...Else Statement</li>
          <li>If...ElseIf...Else Statement</li>
          <li>Select Case Statement</li>
        </ul>
      </Typography>

      {/* IF Statement */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        1. If Statement
      </Typography>

      <Typography paragraph>
        The If statement executes a block of code only when the condition is True.
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`If condition Then
    ' statements
End If`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b>
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Dim num As Integer = 10

If num > 0 Then
    MessageBox.Show("Number is positive")
End If`}
        </pre>
      </Paper>

      {/* IF ELSE */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        2. If...Else Statement
      </Typography>

      <Typography paragraph>
        The If...Else statement executes one block of code when the condition is
        True and another block when the condition is False.
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`If condition Then
    ' statements if true
Else
    ' statements if false
End If`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b>
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Dim num As Integer = 5

If num Mod 2 = 0 Then
    MessageBox.Show("Even Number")
Else
    MessageBox.Show("Odd Number")
End If`}
        </pre>
      </Paper>

      {/* IF ELSEIF */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        3. If...ElseIf...Else Statement
      </Typography>

      <Typography paragraph>
        This statement is used when multiple conditions need to be checked.
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`If condition1 Then
    ' statements
ElseIf condition2 Then
    ' statements
Else
    ' default statements
End If`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b>
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Dim marks As Integer = 75

If marks >= 80 Then
    MessageBox.Show("Grade A")
ElseIf marks >= 60 Then
    MessageBox.Show("Grade B")
Else
    MessageBox.Show("Grade C")
End If`}
        </pre>
      </Paper>

      {/* SELECT CASE */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        4. Select Case Statement
      </Typography>

      <Typography paragraph>
        The Select Case statement is used as an alternative to multiple If...ElseIf
        statements. It allows the program to choose one block of code from many
        based on the value of an expression.
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Select Case expression
    Case value1
        ' statements
    Case value2
        ' statements
    Case Else
        ' default statements
End Select`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b>
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Dim day As Integer = 2

Select Case day
    Case 1
        MessageBox.Show("Sunday")
    Case 2
        MessageBox.Show("Monday")
    Case 3
        MessageBox.Show("Tuesday")
    Case Else
        MessageBox.Show("Invalid Day")
End Select`}
        </pre>
      </Paper>

    </Container>
  );
};

export default Vbdecision;