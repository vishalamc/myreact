import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OperatorPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '1000px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom textAlign="center" fontWeight="bold" color="primary">
        Operators in C
      </Typography>

      <Typography variant="body1" gutterBottom>
        An <strong>operator</strong> is a symbol that tells the compiler to perform a specific operation on one or more operands (variables or values).
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>Example:</strong> <code>int sum = a + b;</code> <br />
        '+' is an operator; <code>a</code> and <code>b</code> are operands.
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        Types of Operators in C
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>Arithmetic Operators</Typography>
      <Typography variant="body2" gutterBottom>
        Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, division, and modulus on numeric values.
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Operator</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Example (a = 10, b = 3)</strong></TableCell>
              <TableCell><strong>Result</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['+', 'Addition', 'Adds two operands', 'a + b', '13'],
              ['-', 'Subtraction', 'Subtracts second operand from first', 'a - b', '7'],
              ['*', 'Multiplication', 'Multiplies two operands', 'a * b', '30'],
              ['/', 'Division', 'Divides first operand by second', 'a / b', '3 (int)'],
              ['%', 'Modulus', 'Returns remainder after division', 'a % b', '1']
            ].map(([op, name, desc, example, result], index) => (
              <TableRow key={index}>
                <TableCell>{op}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{desc}</TableCell>
                <TableCell>{example}</TableCell>
                <TableCell>{result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        Practice Problems with Solutions
      </Typography>

      {[
        {
          title: 'Problem 1: Sum, Difference, Product, Quotient, Remainder',
          code:
`#include <stdio.h>
int main() 
{
  int a, b;
  printf("Enter two numbers: ");
  scanf("%d %d", &a, &b);
  printf("Sum = %d\\n", a + b);
  printf("Difference = %d\\n", a - b);
  printf("Product = %d\\n", a * b);
  printf("Quotient = %d\\n", a / b);
  printf("Remainder = %d\\n", a % b);
  return 0;
}`
        },
        {
          title: 'Problem 2: Average of Three Numbers',
          code:
`#include <stdio.h>
int main() {
  float a, b, c;
  printf("Enter three numbers: ");
  scanf("%f %f %f", &a, &b, &c);
  float avg = (a + b + c) / 3;
  printf("Average = %.2f", avg);
  return 0;
}`
        },
        {
          title: 'Problem 3: Convert Days into Years, Weeks, Days',
          code:
`#include <stdio.h>
int main() {
  int days, years, weeks, remaining_days;
  printf("Enter total number of days: ");
  scanf("%d", &days);
  years = days / 365;
  weeks = (days % 365) / 7;
  remaining_days = (days % 365) % 7;
  printf("Years: %d, Weeks: %d, Days: %d", years, weeks, remaining_days);
  return 0;
}`
        },
        {
          title: 'Problem 4: Check Even or Odd',
          code:
`#include <stdio.h>
int main() {
  int num;
  printf("Enter a number: ");
  scanf("%d", &num);
  if(num % 2 == 0)
    printf("Even");
  else
    printf("Odd");
  return 0;
}`
        },
        {
          title: 'Problem 5: Simple Interest Calculator',
          code:
`#include <stdio.h>
int main() {
  float p, r, t, si;
  printf("Enter Principal, Rate, Time: ");
  scanf("%f %f %f", &p, &r, &t);
  si = (p * r * t) / 100;
  printf("Simple Interest = %.2f", si);
  return 0;
}`
        }
      ].map((item, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            {item.title}
          </Typography>
          <Paper variant="outlined" sx={{ p: 2, backgroundColor: 'rgba(29, 77, 7, 0.23)', overflowX: 'auto' }}>
            <Box
              component="pre"
              sx={{
                margin: 0,
                fontFamily: 'monospace',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {item.code}
            </Box>
          </Paper>
        </Box>
      ))}

      <Box textAlign="center" mt={5}>
        <Button variant="contained" onClick={() => navigate('/home/assignment')}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default OperatorPage;
