import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Logical = () => {
  const navigate = useNavigate();

  const examples = [
    {
      title: 'Example 1: Check Driving Eligibility',
      code: `int age = 20;
int hasLicense = 1;
if (age >= 18 && hasLicense == 1)
    printf("Eligible to drive");
else
    printf("Not eligible to drive");`
    },
    {
      title: 'Example 2: Apply Discount for Premium or Coupon',
      code: `int isPremium = 0;
int hasCoupon = 1;
if (isPremium || hasCoupon)
    printf("Discount applied");
else
    printf("No discount");`
    },
    {
      title: 'Example 3: Block Access if Email Not Verified',
      code: `int isEmailVerified = 0;

if (!isEmailVerified)
    printf("Access denied. Please verify your email.");
else
    printf("Welcome to your dashboard!");`
    },
    {
      title: 'Example 4: Grant Exam Access with Conditions',
      code: `#include <stdio.h>
int main() {
    int registered = 0;
    int specialPermission = 1;
    int idVerified = 1;
    if (registered || (specialPermission && idVerified)) {
        printf("Access granted to online exam");
    } else {
        printf("Access denied");
    }
    return 0;
}`
    },
    {
      title: 'Example 5: Work from Home Eligibility',
      code: `int isWeekend = 1;
int isHoliday = 0;
int hasMeetings = 0;
if ((isWeekend || isHoliday) && !hasMeetings)
    printf("Work from home granted");
else
    printf("You need to work from office");`
    }
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h4" color="primary" textAlign="center" fontWeight="bold" gutterBottom>
        Logical Operators in C
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Logical operators are used in C to combine multiple conditions. The result is either <strong>true</strong> or <strong>false</strong>. They are commonly used with <code>if</code>, <code>while</code>, <code>for</code>, and other control statements.
      </Typography>

      <Typography variant="h6" color="primary" fontWeight="bold" sx={{ mt: 3 }}>
        Types of Logical Operators
      </Typography>

      <TableContainer component={Paper} sx={{ my: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Operator</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Syntax Example</strong></TableCell>
              <TableCell><strong>Meaning</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>&&</TableCell>
              <TableCell>Logical AND</TableCell>
              <TableCell>cond1 && cond2</TableCell>
              <TableCell>True if both conditions are true</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>||</TableCell>
              <TableCell>Logical OR</TableCell>
              <TableCell>cond1 || cond2</TableCell>
              <TableCell>True if any condition is true</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>!</TableCell>
              <TableCell>Logical NOT</TableCell>
              <TableCell>!cond</TableCell>
              <TableCell>True if condition is false</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" color="primary" fontWeight="bold" gutterBottom>
        Example Programs
      </Typography>

      {examples.map((example, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 1 }}>
            {example.title}
          </Typography>
          <Paper variant="outlined" sx={{ backgroundColor: '#f9f9f9', p: 2, overflowX: 'auto' }}>
            <pre style={{ margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
              {example.code}
            </pre>
          </Paper>
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
        <Button variant="outlined" onClick={() => navigate('/home/relational')}>
          Back
        </Button>
        <Button variant="contained" onClick={() => navigate('/home/bitwise')}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Logical;
