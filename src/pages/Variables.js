// pages/Variable.js
import React from 'react';
import { Typography, Box, Grid, Card, CardMedia,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Variable = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Variable in C
      </Typography>
   
      <Typography variant="body1" sx={{ mb: 3 }}>
        A <strong>variable</strong> in C is like a container that stores data. It can be:
        <ul>
          <li>Empty</li>
          <li>Hold a single item</li>
          <li>Contain multiple items of same or different types</li>
        </ul>
           <Typography variant="h6" color="secondary" gutterBottom>
You can see these containers in our daily life:
      </Typography>
         <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '1px solid #ccc' }}>
            <CardMedia
              component="img"
              height="160"
              image="/empty.png" // Replace with your actual path
              alt="Empty Container"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '1px solid #ccc' }}>
            <CardMedia
              component="img"
              height="160"
              image="/con1.png" // Replace with your actual path
              alt="same item Container"
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ border: '1px solid #ccc' }}>
            <CardMedia
              component="img"
              height="160"
              image="/con2.png" // Replace with your actual path
              alt="Multiple Item Container"
            />
          </Card>
        </Grid>
      </Grid><br></br>
     <Typography 
      variant="body1" 
      align="justify" 
      style={{ marginBottom: '16px' }}
    >
      So, we can say that a variable is a container that occupies a memory location 
      to store a value, and this value can be changed during program execution.
    </Typography>
      </Typography>
 <Typography variant="h6" color="secondary" gutterBottom>
        Declaration:
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'monospace', mb: 2 }}>
        Variable_Type Variable_Name;<br />
        int number;
      </Typography>

      <Typography variant="h6" color="secondary" gutterBottom>
        Initialization:
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'monospace', mb: 3 }}>
        Variable_Type Variable_Name = value;<br />
        int number = 10;
      </Typography>
      <Typography variant="h5" color="secondary" gutterBottom>Naming Conventions</Typography>
      <ul>
        <li><strong>Pascal Case:</strong> <code>UserName</code></li>
        <li><strong>Camel Case:</strong> <code>userName</code></li>
        <li><strong>Snake Case:</strong> <code>user_name</code></li>
        <li><strong>Kebab Case:</strong> <code>user-name</code> (not used in C)</li>
      </ul>

      <Typography variant="h5" color="secondary" gutterBottom>Variable Classification Based on Size</Typography>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Data Type</strong></TableCell>
              <TableCell><strong>Keyword</strong></TableCell>
              <TableCell><strong>Size</strong></TableCell>
              <TableCell><strong>Range</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ["char", "char", "1 byte", "-128 to 127 / 0 to 255 (unsigned)"],
              ["Integer", "int", "2 or 4 bytes", "-32,768 to 32,767 / ~±2 billion"],
              ["Short Int", "short", "2 bytes", "-32,768 to 32,767"],
              ["Long Int", "long", "4 or 8 bytes", "Large ranges (platform-dependent)"],
              ["Float", "float", "4 bytes", "±3.4 × 10³⁸ (6-7 digit precision)"],
              ["Double", "double", "8 bytes", "±1.7 × 10³⁰⁸ (15-16 digit precision)"],
              ["Long Double", "long double", "10-16 bytes", "Even higher precision"]
            ].map(([type, keyword, size, range], i) => (
              <TableRow key={i}>
                <TableCell>{type}</TableCell>
                <TableCell>{keyword}</TableCell>
                <TableCell>{size}</TableCell>
                <TableCell>{range}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" color="secondary" gutterBottom>Variable Classification Based on Scope</Typography>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Declared In</strong></TableCell>
              <TableCell><strong>Scope / Visibility</strong></TableCell>
              <TableCell><strong>Lifetime</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ["Local", "Inside function/block", "Only within that block", "Until block ends"],
              ["Global", "Outside all functions", "Entire file", "Entire program run"],
              ["Static", "With static keyword", "Limited, retains value", "Until program ends"],
              ["Extern", "In another file", "Used globally", "Depends on origin"],
              ["Register", "With register keyword", "CPU register (if possible)", "Until block ends"]
            ].map(([type, declared, scope, life], i) => (
              <TableRow key={i}>
                <TableCell>{type}</TableCell>
                <TableCell>{declared}</TableCell>
                <TableCell>{scope}</TableCell>
                <TableCell>{life}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h5" color="secondary" gutterBottom>Format Specifiers</Typography>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Specifier</strong></TableCell>
              <TableCell><strong>Data Type</strong></TableCell>
              <TableCell><strong>Example Usage</strong></TableCell>
              <TableCell><strong>Output Example</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ["%d", "int", 'printf("%d", 25);', "25"],
              ["%f", "float / double", 'printf("%.2f", 5.6789);', "5.68"],
              ["%lf", "double", 'printf("%.15lf", 3.1415926535);', "3.141592653500000"],
              ["%c", "char", 'printf("%c", \'A\');', "A"],
              ["%s", "string", 'printf("%s", "Hello");', "Hello"]
            ].map(([specifier, dtype, example, output], i) => (
              <TableRow key={i}>
                <TableCell>{specifier}</TableCell>
                <TableCell>{dtype}</TableCell>
                <TableCell><code>{example}</code></TableCell>
                <TableCell>{output}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
  );
};
export default Variable;
