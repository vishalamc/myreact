import React from 'react';
import ImageCard from '../../components/ImageCard';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const Vboperator = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>

      <Typography variant="h5" gutterBottom color="primary">
        Operators in VB.NET
      </Typography>

      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
        An operator is a symbol that tells the compiler to perform a specific
        operation on one or more operands (variables or values).
      </Typography>

      <Typography variant="body1" paragraph>
        <b>Example:</b> <br/>
        int sum = a + b;
        <br/>
        '+' is an operator; <b>a</b> and <b>b</b> are operands.
      </Typography>

      <Typography variant="h6" color="primary" sx={{ mt: 4 }}>
        Types of Operators in VB.NET
      </Typography>

      <Typography  variant="h6" color="primary" paragraph>
        Arithmetic Operators
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        Arithmetic operators are used to perform mathematical operations such as 
        addition, subtraction, multiplication, division, and modulus on numeric values.
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Operator</b></TableCell>
              <TableCell><b>Meaning</b></TableCell>
              <TableCell><b>Example</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>+</TableCell>
              <TableCell>Addition</TableCell>
              <TableCell>a + b</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>-</TableCell>
              <TableCell>Subtraction</TableCell>
              <TableCell>a - b</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>*</TableCell>
              <TableCell>Multiplication</TableCell>
              <TableCell>a * b</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>/</TableCell>
              <TableCell>Division</TableCell>
              <TableCell>a / b</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>\</TableCell>
              <TableCell>Integer Division</TableCell>
              <TableCell>a \ b</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Mod</TableCell>
              <TableCell>Modulus (Remainder)</TableCell>
              <TableCell>a Mod b</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>^</TableCell>
              <TableCell>Power</TableCell>
              <TableCell>a ^ b</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" color="primary" gutterBottom>
       Example Using Arithmetic Operators
      </Typography>

      <Typography variant="body1" paragraph>
        The following VB.NET Windows Forms program demonstrates the use of
        arithmetic operators such as addition, subtraction, multiplication,
        and division using button click events.
      </Typography>

      <Paper sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Public Class Form1

    Private Sub btnAdd_Click(sender As Object, e As EventArgs) Handles btnAdd.Click
        Dim a, b, result As Double
        a = Val(txtNum1.Text)
        b = Val(txtNum2.Text)

        result = a + b
        txtResult.Text = result
    End Sub

    Private Sub btnSub_Click(sender As Object, e As EventArgs) Handles btnSub.Click
        Dim a, b, result As Double
        a = Val(txtNum1.Text)
        b = Val(txtNum2.Text)

        result = a - b
        txtResult.Text = result
    End Sub

    Private Sub btnMul_Click(sender As Object, e As EventArgs) Handles btnMul.Click
        Dim a, b, result As Double
        a = Val(txtNum1.Text)
        b = Val(txtNum2.Text)

        result = a * b
        txtResult.Text = result
    End Sub

    Private Sub btnDiv_Click(sender As Object, e As EventArgs) Handles btnDiv.Click
        Dim a, b, result As Double
        a = Val(txtNum1.Text)
        b = Val(txtNum2.Text)

        If b = 0 Then
            MessageBox.Show("Division by zero not allowed")
        Else
            result = a / b
            txtResult.Text = result
        End If
    End Sub

End Class`}
        </pre>
      </Paper>

<ImageCard 
  src="/arithmeticex.png" 
  alt="Fruits" 
  caption="Arithmetic Calculator"
/>
<Typography variant="h6" color="primary" paragraph>
  Relational (Comparison) Operators
</Typography>

<Typography variant="body1" color="text.secondary" paragraph>
  Relational operators in VB.NET are used to compare two values or expressions. 
  The result of a relational operation is either True or False.
</Typography>

<TableContainer component={Paper} sx={{ mt: 2 }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><b>Operator</b></TableCell>
        <TableCell><b>Meaning</b></TableCell>
      </TableRow>
    </TableHead>

    <TableBody>

      <TableRow>
        <TableCell>=</TableCell>
        <TableCell>Equal to</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>{"<>"}</TableCell>
        <TableCell>Not equal to</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>{">"}</TableCell>
        <TableCell>Greater than</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>{"<"}</TableCell>
        <TableCell>Less than</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>{">="}</TableCell>
        <TableCell>Greater than or equal to</TableCell>
      </TableRow>

      <TableRow>
        <TableCell>{"<="}</TableCell>
        <TableCell>Less than or equal to</TableCell>
      </TableRow>

    </TableBody>
  </Table>
</TableContainer>

<Typography variant="h6" color="primary" gutterBottom>
  Example Using Relational Operators
</Typography>

<Paper sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
  <pre style={{ margin: 0 }}>
{`
Public Class Form1
    Private Sub btnCheck_Click(sender As Object, e As EventArgs) Handles btnCheck.Click

        Dim a As Integer
        Dim b As Integer

        a = Val(txtNum1.Text)
        b = Val(txtNum2.Text)

        If a <> b Then
            lblResult.Text = "Numbers are Not Equal"
        Else
            lblResult.Text = "Numbers are Equal"
        End If

    End Sub
End Class
`}
  </pre>
</Paper>
<Typography  variant="h6" color='primary' paragraph>
        Logical Operators 
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        Logical operators are used in Vb.net to combine multiple conditions. The result is either true or false. They are commonly used with control statements. 
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Operator</b></TableCell>
              <TableCell><b>Meaning</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>And</TableCell>
              <TableCell>True if both conditions are True</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Or</TableCell>
              <TableCell>True if at least one is True</TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Not</TableCell>
              <TableCell>Reverses result</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Xor</TableCell>
              <TableCell>True if only one condition is True</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" color="primary" gutterBottom>
       Example Using Logical Operators
      </Typography>

      <Paper sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`
Public Class Form1
    Private Sub btnCheck_Click(sender As Object, e As EventArgs) Handles btnCheck.Click
        Dim age As Integer
        age = Val(txtAge.Text)
        If age >= 18 And age <= 60 Then
            lblResult.Text = "Eligible for Job"
        Else
            lblResult.Text = "Not Eligible"
        End If
    End Sub
End Class
`}
        </pre>
      </Paper>
      <Typography color='primary' variant="h6" paragraph>
        Bitwise Operators 
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
       Bitwise operators in VB.NET are used to perform operations on the binary representation of numbers such as AND, OR, XOR, NOT, and shift operations.
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Operator</b></TableCell>
              <TableCell><b>Meaning</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>And</TableCell>
              <TableCell>Bitwise AND compares the binary bits of two numbers and returns 1 only if both bits are 1.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Or</TableCell>
              <TableCell>Bitwise OR is an operator that compares the binary bits of two numbers and returns 1 when at least one bit is 1.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Not</TableCell>
              <TableCell>Bitwise NOT is an operator that reverses (inverts) all the bits of a number, changing 1 to 0 and 0 to 1.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>{'<<'}</TableCell>
              <TableCell>Bitwise Left Shift is an operator that shifts the bits of a number to the left by a specified number of positions, and zeros are filled on the right side.</TableCell>
            </TableRow>

	   <TableRow>
              <TableCell>{'>>'}</TableCell>
              <TableCell>Bitwise Right Shift is an operator that shifts the bits of a number to the right by a specified number of positions.</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" color="primary" gutterBottom>
       Example Using Bitwise Operators
      </Typography>

      <Paper sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`
Public Class Form1

    Private Sub btnLeft_Click(sender As Object, e As EventArgs) Handles btnLeft.Click
        Dim num As Integer
        num = Val(txtNum.Text)

        lblResult.Text = "Left Shift Result: " & (num << 1)
    End Sub

    Private Sub btnRight_Click(sender As Object, e As EventArgs) Handles btnRight.Click
        Dim num As Integer
        num = Val(txtNum.Text)

        lblResult.Text = "Right Shift Result: " & (num >> 1)
    End Sub

End Class
`}
        </pre>
      </Paper>
    </Container>
  );
};

export default Vboperator;
