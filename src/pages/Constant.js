// pages/Constant.js
import React from 'react';
import { Typography, Box,Card, CardContent, } from '@mui/material';

const Constant = () => {
  return (
    <Box sx={{ p: 3 }}>

      <Typography variant="h4" gutterBottom color="primary">
        Constant in C
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        A <strong>constant</strong> is a fixed value that does not change during the execution of a program.
        It is also called a <strong>read-only</strong> value. Constants can be of types like integer, floating-point, string, or character.
        They must be initialized when declared; otherwise, they may hold garbage values.
      </Typography>

      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>Syntax:</strong><br />
        <code>const data_type var_name = value;</code><br />
        Example: <code>const float pi = 3.14;</code><br />
        <code>#define CONSTANT_NAME value</code><br />
        Example: <code>#define PI 3.14</code>
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary">
        Example 1: Using <code>const</code>
      </Typography>
      <Typography component="pre" sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 2 }}>
{`#include <stdio.h>
int main() {
    const float PI = 3.14; 
    printf("Value of PI: %.2f\\n", PI);
    return 0;
}`}
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="secondary" sx={{ mt: 2 }}>
        Example 2: Using <code>#define</code>
      </Typography>
      <Typography component="pre" sx={{ backgroundColor: '#f5f5f5', p: 2, borderRadius: 2 }}>
{`#include <stdio.h>
#define PI 3.14
int main() {
    printf("Value of PI: %.2f\\n", PI);
    return 0;
}`}
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }} color="primary">
        Difference Between <code>const</code> and <code>#define</code>
      </Typography>
      <Box sx={{ overflowX: 'auto', mt: 1 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#e3f2fd' }}>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>Feature</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>const</th>
              <th style={{ border: '1px solid #ccc', padding: '8px' }}>#define</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Handled by</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>✅ Compiler</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>⚠️ Preprocessor</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Memory Allocated</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>✅ Yes</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>❌ No</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Type Safety</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>✅ Enforced</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>❌ Not Enforced</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Scope Rules</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>✅ Block/Function/Global</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>❌ Global only</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Error Checking</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>✅ At compile-time</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>❌ None</td>
            </tr>
          </tbody>
        </table>
  
      </Box>
    </Box>
    
  );
};

export default Constant;
