// src/pages/Keywords.js
import React from 'react';
import {
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';

const keywordsList = [
  ['auto', 'break', 'case', 'char'],
  ['const', 'continue', 'default', 'do'],
  ['double', 'else', 'enum', 'extern'],
  ['float', 'for', 'goto', 'if'],
  ['int', 'long', 'register', 'return'],
  ['short', 'signed', 'sizeof', 'static'],
  ['struct', 'switch', 'typedef', 'union'],
  ['unsigned', 'void', 'volatile', 'while'],
];

const Keywords = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Keywords in C
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
        Keywords are reserved words that have special meaning in the C language. 
        You cannot use them as identifiers (variable names, function names, etc.). 
        These keywords are part of the syntax and are used to perform specific operations.
      </Typography>

      <Typography variant="h6" sx={{ mb: 2 }}>
        List of Common C Keywords
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Keywords</strong></TableCell>
              <TableCell><strong>Keywords</strong></TableCell>
              <TableCell><strong>Keywords</strong></TableCell>
              <TableCell><strong>Keywords</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {keywordsList.map((row, index) => (
              <TableRow key={index}>
                {row.map((keyword, i) => (
                  <TableCell key={i}>{keyword}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
       <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
                  Example:
                </Typography>
                <Box
                  component="pre"
                  sx={{
                    backgroundColor: 'rgba(29, 77, 7, 0.23)',
                    p: 2,
                    borderRadius: 1,
                    fontFamily: 'monospace',
                    mt: 1,
                  }}
                >
                  {
      `int register;//Invalid
      int reg; //valid`}
                </Box>
    </Container>

    
  );
};

export default Keywords;