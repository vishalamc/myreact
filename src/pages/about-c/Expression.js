import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';

const ExpressionandStatement = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Expression
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
          A combination of operands and operators is called an expression in C.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Example:</strong> c = a + b;
        </Typography>
        <Typography variant="body2">
          a and b are operands<br/>
          + is an arithmetic operator<br/>
          = is an assignment operator<br/>
          The whole part a + b is an expression.
        </Typography>
      </Paper>

      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom color="primary">
          Statement
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
          A statement is a complete instruction in C that performs an action. Every C statement usually ends with a semicolon (;).
        </Typography>

        <Typography variant="h6" gutterBottom>Types of Statements in C</Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="subtitle1"><strong>Declaration Statement</strong></Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Example: int x;</Typography>

        <Typography variant="subtitle1"><strong>Assignment Statement</strong></Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Example: x = 10;</Typography>

        <Typography variant="subtitle1"><strong>Expression Statement</strong></Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Example: a + b; or x++;</Typography>

        <Typography variant="subtitle1"><strong>Function Call Statement</strong></Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Example: printf("Hello");</Typography>

        <Typography variant="subtitle1"><strong>Control Flow Statement</strong></Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>Example: if, while, for, switch</Typography>

        <Typography variant="subtitle1"><strong>Compound Statement (Block)</strong></Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          A compound statement is a group of one or more statements enclosed within curly braces {'{}'}. It is also called a block.
        </Typography>
       <Typography variant="body2" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
  {`{
  int a;
  int b;
  int c = a + b;
}`}
</Typography>

      </Paper>
    </Box>
  );
};
export default ExpressionandStatement;