import React from 'react';
import { Box, Typography, Paper, Divider, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Assignment = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '900px', margin: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom color="primary">
        Assignment Operators in C
      </Typography>

      <Typography variant="body1" gutterBottom>
        Assignment operators are used to assign values to variables.
        The main operator used is <code>=</code> (equal to), which assigns the value from right to left.
      </Typography>

      <Typography variant="body1" gutterBottom>
        <strong>Example:</strong> <code>int a = 10;</code>
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom fontWeight="bold">
        Important Points:
      </Typography>

      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" gutterBottom>
          • During calculation, the right-hand side (RHS) is evaluated first and then assigned to the left-hand side (LHS).
        </Typography>
        <Typography variant="body1" gutterBottom>
          <code>int a = 10;<br/>int b = 20;<br/>int result = a + b;</code>
        </Typography>

        <Typography variant="body1" gutterBottom>
          • The assignment expression itself returns the assigned value.
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: '#f9f9f9' }}>
          <code>int x;<br/>printf("%d", (x = 7));<br/>// Output: 7</code>
        </Paper>

        <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
          • Multiple assignments can be chained:
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: '#f9f9f9' }}>
          <code>int a, b;<br/>a = b = 20;  // b = 20, then a = b</code>
        </Paper>

        <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
          • Re-assignment to constants is invalid:
        </Typography>
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: '#fff0f0' }}>
          <code>const int a = 10;<br/>a = 20;  // ❌ Error: Cannot assign to a constant</code>
        </Paper>
      </Box>

      <Box display="flex" justifyContent="space-between" mt={5}>
        <Button variant="outlined" onClick={() => navigate('/home/operator')}>
          Back
        </Button>
        <Button variant="contained" onClick={() => navigate('/home/relational')}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Assignment;
