import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Relational = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Example 1: Find the Greatest of Three Numbers',
      code: `#include <stdio.h>
int main() {
    int a = 25, b = 40, c = 15;
    if (a >= b && a >= c)
        printf("Greatest number is a = %d\\n", a);
    else if (b >= a && b >= c)
        printf("Greatest number is b = %d\\n", b);
    else
        printf("Greatest number is c = %d\\n", c);
    return 0;
}`
    },
    {
      title: 'Example 2: Student Grading System',
      code: `#include <stdio.h>
int main() {
    int marks;
    printf("Enter marks: ");
    scanf("%d", &marks);
    if (marks >= 90)
        printf("Grade: A+");
    else if (marks >= 75)
        printf("Grade: A");
    else if (marks >= 60)
        printf("Grade: B");
    else if (marks >= 40)
        printf("Grade: C");
    else
        printf("Grade: Fail");
    return 0;
}`
    },
    {
      title: 'Example 3: Check if a Year is a Leap Year',
      code: `#include <stdio.h>
int main() {
    int year;
    printf("Enter year: ");
    scanf("%d", &year);
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
        printf("%d is a leap year", year);
    else
        printf("%d is not a leap year", year);
    return 0;
}`
    },
    {
      title: 'Example 4: Valid Triangle Check',
      code: `#include <stdio.h>
int main() {
    int a = 60, b = 60, c = 60;
    if (a + b + c == 180 && a > 0 && b > 0 && c > 0)
        printf("Valid triangle");
    else
        printf("Invalid triangle");
    return 0;
}`
    },
    {
      title: 'Example 5: Eligibility for Scholarship',
      code: `#include <stdio.h>
int main() {
    int marks, income;
    printf("Enter marks and family income: ");
    scanf("%d %d", &marks, &income);
    if ((marks >= 90 && income <= 500000) || (marks >= 95 && income <= 800000))
        printf("Eligible for scholarship");
    else
        printf("Not eligible");
    return 0;
}`
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h4" color="primary" textAlign="center" gutterBottom fontWeight="bold">
        Relational Operators in C
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Relational operators in C are used to compare two values or expressions. The result of a relational operation is either <strong>true</strong> or <strong>false</strong>. They are commonly used in:
        <ul>
          <li>if, else if, and else conditions</li>
          <li>Loops (while, for)</li>
          <li>Decision-making statements</li>
        </ul>
      </Typography>

      <Typography variant="h6" color="primary" fontWeight="bold" sx={{ mt: 3 }}>
        List of Relational Operators:
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Operator</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Example (a = 10, b = 5)</strong></TableCell>
              <TableCell><strong>Result</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ['==', 'Equal to', 'a == b', '0 (false)'],
              ['!=', 'Not equal to', 'a != b', '1 (true)'],
              ['>', 'Greater than', 'a > b', '1'],
              ['<', 'Less than', 'a < b', '0'],
              ['>=', 'Greater than or equal to', 'a >= b', '1'],
              ['<=', 'Less than or equal to', 'a <= b', '0'],
            ].map(([op, desc, ex, res], i) => (
              <TableRow key={i}>
                <TableCell>{op}</TableCell>
                <TableCell>{desc}</TableCell>
                <TableCell>{ex}</TableCell>
                <TableCell>{res}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        Example Programs
      </Typography>

      {examples.map((item, idx) => (
        <Box key={idx} sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            {item.title}
          </Typography>
          <Paper variant="outlined" sx={{ backgroundColor: 'rgba(29, 77, 7, 0.23)', p: 2, overflowX: 'auto' }}>
            <pre style={{ margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              {item.code}
            </pre>
          </Paper>
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
        <Button variant="outlined" onClick={() => navigate('/home/assignment')}>
          Back
        </Button>
        <Button variant="contained" onClick={() => navigate('/home/logical')}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Relational;
