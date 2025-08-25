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
        
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: 'rgba(245, 245, 245, 0.8)', mb: 2 }}>
          <Typography component="div" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
            {`int a = 10;
int b = 20;
int result = a + b;`}
          </Typography>
        </Paper>

        <Typography variant="body1" gutterBottom>
          • The assignment expression itself returns the assigned value.
        </Typography>
        
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: 'rgba(29, 77, 7, 0.1)' }}>
          <Typography component="div" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
            {`int x;
printf("%d", (x = 7));`}
          </Typography>
          <Typography variant="caption" display="block" mt={1}>
            {/* Output: 7 */}
            Output: 7
          </Typography>
        </Paper>

        <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
          • Multiple assignments can be chained:
        </Typography>
        
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: 'rgba(29, 77, 7, 0.1)' }}>
          <Typography component="div" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
            {`int a, b;
a = b = 20;`}
          </Typography>
          <Typography variant="caption" display="block" mt={1}>
            {/* b = 20, then a = b */}
            b = 20, then a = b
          </Typography>
        </Paper>

        <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
          • Re-assignment to constants is invalid:
        </Typography>
        
        <Paper variant="outlined" sx={{ p: 2, backgroundColor: 'rgba(29, 77, 7, 0.1)' }}>
          <Typography component="div" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
            {`const int a = 10;
a = 20;`}
          </Typography>
          <Typography variant="caption" display="block" mt={1} color="error">
            {/* ❌ Error: Cannot assign to a constant */}
            ❌ Error: Cannot assign to a constant
          </Typography>
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