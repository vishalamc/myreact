import React from 'react';
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

      <Typography variant="body1" paragraph>
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

    </Container>
  );
};

export default Vboperator;