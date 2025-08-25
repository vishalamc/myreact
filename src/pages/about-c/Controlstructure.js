import React from 'react';
import { Typography, Container, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageCard from '../../components/ImageCard';

const ControlStructure = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color='primary'>
        Control Structure in C
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
        Control structures help manage how a program runs its instructions. They allow the program
        to make choices, repeat certain steps, or follow different paths depending on conditions.
        For example, using if, a program can run a part of the code only when a condition is true.
        Loops let the program repeat tasks, and statements like break can stop the process early.
        These structures make programs more logical and flexible.
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
        We can say that a control structure is a combination of decision-making statements, looping
        statements, and jumping statements.
      </Typography>

      <Box sx={{ textAlign: 'center', mb: 3 }}>
<ImageCard 
  src="/control.png" 
  alt="Control Structure" 
  caption="Control Structure"
/>
      </Box>

      <Typography variant="h5" gutterBottom color='secondary'>
        Decision-making statements:
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        Decision-making statements in C are used to control the flow of a program based on certain
        conditions. These statements check whether a condition is true and then perform a set of
        instructions accordingly. If the condition is not met, they may follow an alternative path.
        The decision-making statements are: <strong>if else</strong> and <strong>switch case</strong>.
        This is also known as selection statements.
      </Typography>

      <Typography variant="h6" gutterBottom>
      <b>1.If statement:</b>
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Syntax:</strong>
        <pre>{`if (condition) {
  // Block of code if condition is true
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
        <pre>
{`#include <stdio.h>
int main()
{
    int age = 18;
    if (age >= 18)
    {
        printf("Eligible for Vote\\n");
        printf("Welcome\\n");
    }
    return 0;
}`}
        </pre></Box>
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Output:</strong>
        <pre>{`Eligible for Vote
Welcome`}</pre>
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        If we do not use curly braces after an if statement, only one statement immediately
        following the if condition will be executed when the condition is true.
      </Typography>

      <Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>For example:</strong>
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
        <pre>
{`int age = 18;
if (age >= 18)
    printf("Eligible for vote\\n");
printf("Welcome\\n");`}
        </pre>
        </Box>
      </Typography>
<Typography variant="body1" align="justify" sx={{ mb: 2 }}>
        <strong>Output:</strong>
               <pre>{`Eligible for Vote
Welcome`}</pre>
      </Typography>
      <Typography variant="body1" align="justify" sx={{ mb: 3 }}>
        In this code, only the first <code>printf</code> is part of the <code>if</code> condition.
        The second <code>printf("Welcome")</code> will always run, whether the condition is true or
        false, because we did not use curly braces to define an if block.
      </Typography>

      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" color="primary" onClick={() => navigate('/learnc/ifelse')}>
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default ControlStructure;
