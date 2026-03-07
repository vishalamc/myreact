import React from "react";
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const Vbclass = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>

      <Typography variant="h5" color="primary" gutterBottom>
        Declaring Classes and Public and Private Variables in VB.NET
      </Typography>

      <Typography variant="body1" paragraph align="justify" color="text.secondary">
        In VB.NET, a class is a blueprint for creating objects. A class contains
        variables (data members) and methods (functions or procedures) that define
        the behavior of the object. Variables inside a class can have different
        access modifiers such as Public and Private which control how the data
        can be accessed.
      </Typography>

      {/* Declaring Class */}
      <Typography variant="h6" color="primary">
        Declaring a Class
      </Typography>

      <Typography paragraph>
        A class is declared using the <b>Class</b> keyword.
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Class Student
    ' variables and methods
End Class`}
        </pre>
      </Paper>

      {/* Public and Private Variables */}
      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        Public and Private Variables
      </Typography>

      <Typography paragraph align="justify">
        Access modifiers control the visibility of variables and methods in a class.
        The most common access modifiers are Public and Private.
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Access Modifier</b></TableCell>
              <TableCell><b>Description</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Public</TableCell>
              <TableCell>Accessible from anywhere in the program.</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Private</TableCell>
              <TableCell>Accessible only within the same class.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Example */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        Example Program
      </Typography>

      <Typography paragraph>
        The following example demonstrates declaring a class and using public and private variables.
      </Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Public Class Student

    Public RollNo As Integer
    Public Name As String
    Private Marks As Integer

    Public Sub SetMarks(ByVal m As Integer)
        Marks = m
    End Sub

    Public Function GetMarks() As Integer
        Return Marks
    End Function

End Class`}
        </pre>
      </Paper>

      {/* Explanation */}
      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        Explanation
      </Typography>

      <Typography component="div">
        <ul>
          <li>RollNo and Name are Public variables and can be accessed outside the class.</li>
          <li>Marks is a Private variable and cannot be accessed directly from outside the class.</li>
          <li>SetMarks() method is used to assign a value to Marks.</li>
          <li>GetMarks() method is used to retrieve the value of Marks.</li>
        </ul>
      </Typography>

    </Container>
  );
};

export default Vbclass;