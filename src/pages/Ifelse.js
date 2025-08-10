import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const IfelseStructure = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Control Structure in C
      </Typography>

      {/* 2. if-else Statement */}
      <Typography variant="h6" gutterBottom>
        <b>2. if-else Statement:</b>
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
        A condition can be checked for either true or false. If the condition is true, the if block will be executed; if the condition is false, the else block will be executed.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Syntax:</strong>
        <pre>{`if (condition) {
    // executes if condition is true
} else {
    // executes if condition is false
}`}</pre>
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Example:</strong>
        <Box
          component="pre"
          sx={{
            backgroundColor: 'rgba(29, 77, 7, 0.23)',
            p: 2,
            borderRadius: 1,
            fontFamily: 'monospace',
            overflowX: 'auto',
          }}
        >
{`#include <stdio.h>
int main() {
    int num = 5;
    if (num % 2 == 0) {
        printf("Even number");
    } else {
        printf("Odd number");
    }
    return 0;
}`}
        </Box>
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Output:</strong>
        <pre>{`Odd number`}</pre>
      </Typography>

      {/* 3. if-else if-else Ladder */}
      <Typography variant="h6" gutterBottom>
        <b>3. if-else if-else Ladder (Multiple Conditions):</b>
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
        To check multiple conditions, we can use an if–else if–else ladder. The first condition that evaluates to true is executed, and the rest are skipped. Once a condition is true, all remaining conditions are ignored.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Example:</strong>
        <Box
          component="pre"
          sx={{
            backgroundColor: 'rgba(29, 77, 7, 0.23)',
            p: 2,
            borderRadius: 1,
            fontFamily: 'monospace',
            overflowX: 'auto',
          }}
        >
{`#include <stdio.h>
int main() {
    int marks = 72;
    if (marks >= 90) {
        printf("Grade A\\n");
    } else if (marks >= 75) {
        printf("Grade B\\n");
    } else if (marks >= 50) {
        printf("Grade C\\n");
    } else {
        printf("Fail\\n");
    }
    return 0;
}`}
        </Box>
      </Typography>
 <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Output:</strong>
        <pre>{`Grade C`}</pre>
      </Typography>
      {/* 4. Nested if */}
      <Typography variant="h6" gutterBottom>
        <b>4. Nested if (if inside another if):</b>
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
        Nested if is useful when one check depends on another.
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Example 1:</strong>
        <Box
          component="pre"
          sx={{
            backgroundColor: 'rgba(29, 77, 7, 0.23)',
            p: 2,
            borderRadius: 1,
            fontFamily: 'monospace',
            overflowX: 'auto',
          }}
        >
{`#include <stdio.h>
int main() {
    int age = 25;
    char citizen = 'Y'; // Y for Yes
    if (age >= 18) {
        if (citizen == 'Y') {
            printf("You can vote in India.\\n");
        }
    }
    return 0;
}`}
        </Box>
      </Typography>
 <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Output:</strong>
        <pre>{`You can vote in India.`}</pre>
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Example 2 (Else ambiguity):</strong>
        <Box
          component="pre"
          sx={{
            backgroundColor: 'rgba(29, 77, 7, 0.23)',
            p: 2,
            borderRadius: 1,
            fontFamily: 'monospace',
            overflowX: 'auto',
          }}
        >
{`#include <stdio.h>
int main() {
    int x = 5, y = 10;
    if (x > 0)
        if (y > 0)
            printf("Both positive\\n");
        else
            printf("x is positive, y is not\\n");
    return 0;
}`}
        </Box>
      </Typography>
 <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Output:</strong>
        <pre>{`Both positive`}</pre>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => navigate('/home/switchcase')}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default IfelseStructure;
