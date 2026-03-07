import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const Vbloop = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>

      <Typography variant="h5" color="primary" gutterBottom>
        Loop Statements in VB.NET
      </Typography>

      <Typography variant="body1" paragraph align="justify" color="text.secondary">
        A loop means repeating the same steps, which is called iteration. Loops are used to execute a block of code repeatedly until a certain condition is met.
      </Typography>

      <Typography variant="h6" color="primary">
        Types of Loop Statements in VB.NET
      </Typography>

      <Typography component="div">
        <ul>
          <li>For...Next Loop</li>
          <li>While...End While Loop</li>
          <li>Do While Loop</li>
          <li>Do Until Loop</li>
        </ul>
      </Typography>

      {/* FOR LOOP */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        1. For...Next Loop
      </Typography>

      <Typography paragraph>
        The For...Next loop is used when the number of iterations is known in advance.
      </Typography>

      <Typography><b>Syntax:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`For counter = start To end
    ' statements
Next`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`For i As Integer = 1 To 5
    ListBox1.Items.Add(i)
Next`}
        </pre>
      </Paper>

      {/* WHILE LOOP */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        2. While...End While Loop
      </Typography>

      <Typography paragraph>
        The While loop executes a block of code as long as the condition is True.
      </Typography>

      <Typography><b>Syntax:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`While condition
    ' statements
End While`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`Dim i As Integer = 1

While i <= 5
    ListBox1.Items.Add(i)
    i += 1
End While`}
        </pre>
      </Paper>

      {/* DO WHILE LOOP */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        3. Do While Loop
      </Typography>

      <Typography paragraph>
        The Do While loop checks the condition before executing the loop body.
      </Typography>

      <Typography><b>Syntax:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`Do While condition
    ' statements
Loop`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`Dim i As Integer = 1

Do While i <= 5
    ListBox1.Items.Add(i)
    i += 1
Loop`}
        </pre>
      </Paper>

      {/* DO UNTIL LOOP */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        4. Do Until Loop
      </Typography>

      <Typography paragraph>
        The Do Until loop executes the statements until the condition becomes True.
      </Typography>

      <Typography><b>Syntax:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`Do Until condition
    ' statements
Loop`}
        </pre>
      </Paper>

      <Typography sx={{ mt: 2 }}><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5", mt: 1 }}>
        <pre style={{ margin: 0 }}>
{`Dim i As Integer = 1

Do Until i > 5
    ListBox1.Items.Add(i)
    i += 1
Loop`}
        </pre>
      </Paper>

    </Container>
  );
};

export default Vbloop;