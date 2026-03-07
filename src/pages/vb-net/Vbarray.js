import React from "react";
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

const Vbarray = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>

      <Typography variant="h5" color="primary" gutterBottom>
        Arrays in VB.NET
      </Typography>

      <Typography variant="body1" paragraph align="justify" color="text.secondary">
        An array is a collection of elements of the same data type stored in
        contiguous memory locations. Each element in an array is accessed using
        an index number. In VB.NET, arrays are useful when we need to store
        multiple values using a single variable name.
      </Typography>

      <Typography variant="h6" color="primary">
        Features of Arrays
      </Typography>

      <Typography component="div">
        <ul>
          <li>Stores multiple values of the same data type</li>
          <li>Each value is accessed using an index</li>
          <li>Array index starts from 0</li>
          <li>Helps manage large amounts of data easily</li>
        </ul>
      </Typography>

      {/* Array Declaration Table */}
      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        Array Declaration
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Syntax</b></TableCell>
              <TableCell><b>Description</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Dim numbers(4) As Integer</TableCell>
              <TableCell>Declares an array that can store 5 integers (0 to 4)</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Dim marks() As Integer = &#123;10,20,30,40&#125;</TableCell>
              <TableCell>Declares and initializes an array</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Example */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        Example Program
      </Typography>

      <Typography paragraph>
        The following example stores numbers in an array and prints them using a loop.
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Dim numbers(4) As Integer

numbers(0) = 10
numbers(1) = 20
numbers(2) = 30
numbers(3) = 40
numbers(4) = 50

For i As Integer = 0 To 4
    ListBox1.Items.Add(numbers(i))
Next`}
        </pre>
      </Paper>

      {/* Types of Arrays */}
      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        Types of Arrays in VB.NET
      </Typography>

      <Typography component="div">
        <ul>
          <li>Single Dimensional Array</li>
          <li>Multidimensional Array</li>
        </ul>
      </Typography>

      {/* Multi Dimensional Example */}
      <Typography variant="h6" color="secondary" sx={{ mt: 3 }}>
        Multidimensional Array Example
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Private Sub btnShow_Click(sender As Object, e As EventArgs) Handles btnShow.Click

    Dim matrix(1, 1) As Integer

    matrix(0, 0) = 10
    matrix(0, 1) = 20
    matrix(1, 0) = 30
    matrix(1, 1) = 40

    For i As Integer = 0 To 1
        For j As Integer = 0 To 1
            ListBox1.Items.Add(matrix(i, j))
        Next
    Next

End Sub`}
        </pre>
      </Paper>

    </Container>
  );
};

export default Vbarray;