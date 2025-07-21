import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import ImageCard from '../components/ImageCard';
const Datatypes = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom color='primary'>
        C Programming - Data Types
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
        Data types define the type of data a variable can hold. It helps the compiler understand how much memory to allocate and what kind of operations can be performed on the data.
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
        Suppose we have a mix of dry fruits. It is very difficult to separate individual dry fruits from the mix. So, it is better to arrange them in different containers to make the process easier. Data types work in a similar way—we define a data type according to the kind of data, just like choosing the right container based on the item. This helps store data efficiently according to its size and type.
      </Typography>

<Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 4 }}>
<ImageCard 
  src="/dryfruits.png" 
  alt="Mix Dry Fruits" 
  caption="Mix Dry Fruits"
/>
<ImageCard 
  src="/fruit.png" 
  alt="Fruits" 
  caption="Fruit in Container"
/>
 </Box>


      <Typography variant="h6" gutterBottom color='primary'>
        C also supports different category of Datatypes
      </Typography>

<ImageCard 
  src="/datatypes.png" 
  alt="Datatype categories" 
  caption="C supports multiple data type categories."
/>

      <TableContainer component={Paper} sx={{ overflowX: 'auto', mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Types</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Data Types</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Primitive Data Types</TableCell>
              <TableCell>Used for representing simple values</TableCell>
              <TableCell>int, char, float, double, void</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Derived Types</TableCell>
              <TableCell>Derived from primitive types</TableCell>
              <TableCell>array, pointers, function</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>User Defined Data Types</TableCell>
              <TableCell>Defined by the user</TableCell>
              <TableCell>structure, union, enum</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" gutterBottom color='primary'>
        Primitive Data Types:Integer (int)
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        • Any number including positive, negative<br />
        • It can be signed and unsigned<br />
        • Signed can store both negative and positive values<br />
        • Unsigned can store only non-negative values<br />
        • Size: 4 bytes<br />
        • Range: -2,147,483,648 to 2,147,483,647
      </Typography>


      <Typography variant="h6" gutterBottom color='primary'>
        How to find out range?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        <strong>For Signed:</strong><br />
        1. Calculate total number of bits<br />
        2. Calculate -2<sup>(n-1)</sup> for minimum range<br />
        3. Calculate 2<sup>(n-1)</sup> - 1 for maximum range
        <br /><br />
        <strong>For Unsigned:</strong><br />
        1. Find number of bits<br />
        2. Minimum range is always zero for unsigned<br />
        3. Maximum range = 2<sup>n</sup> - 1
      </Typography>
<Box sx={{ textAlign: 'center', mb: 4 }}>
  
  <Typography variant="subtitle2" sx={{ mt: 1 }}>
    Range of <code>int</code> in C (Signed & Unsigned)
  </Typography>
</Box>

      <Typography variant="body1" sx={{ mb: 4 }}>
        <strong>Example:</strong><br />
        <u>int:</u><br />
        <Box
                    component="pre"
                    sx={{
                      backgroundColor: '#f5f5f5',
                      p: 2,
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      mt: 1,
                    }}
                  >
 Size: 4 Bytes<br />
        Minimum Range: -2<sup>31</sup> = -2,147,483,648<br />
        Maximum Range: 2<sup>31</sup> - 1 = 2,147,483,647<br /><br />
                  </Box>
       
        <u>unsigned int:</u><br />
         <Box
                    component="pre"
                    sx={{
                      backgroundColor: '#f5f5f5',
                      p: 2,
                      borderRadius: 1,
                      fontFamily: 'monospace',
                      mt: 1,
                    }}
                  >
        Size: 4 Bytes<br />
        Minimum Range: 0<br />
        Maximum Range: 2<sup>32</sup> - 1 = 4,294,967,295
                  </Box>
       
      </Typography>

      <Typography variant="h6">
        What happens when size increases?
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
  For example:<br />
  If we store <code>int num = 2147483648;</code>
</Typography>
<Box
  component="pre"
  sx={{
    backgroundColor: '#f5f5f5',
    padding: 2,
    borderRadius: 2,
    overflowX: 'auto',
    fontFamily: 'monospace',
    mb: 2,
  }}
>
  {`#include<stdio.h>
int main()
{
    int num = 2147483648;
    printf("%d", num);

    return 0;
}`}
</Box>

<Typography variant="body2" sx={{ fontStyle: 'italic', mb: 4 }}>
  Output: -2147483648
</Typography>
<ImageCard 
  src="/range.png" 
  alt="Integer Range" 
  caption="Out of Range"
/>
 <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom color='primary'>
        Data Modifiers
      </Typography>

      <Typography variant="body1" sx={{ textAlign: 'justify', mb: 3 }}>
        Data modifiers are keywords that change the size or sign of a data type.
        They are used with basic data types like <code>int</code>, <code>char</code>, or <code>float</code> 
        to control memory usage and range of values.
      </Typography>

      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Modifier</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>short</TableCell>
              <TableCell>Reduces the size of int (usually 2 bytes).</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>long</TableCell>
              <TableCell>Increases the size of int or double (usually 4 or 8 bytes).</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>signed</TableCell>
              <TableCell>Allows both positive and negative values (default for int and char).</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>unsigned</TableCell>
              <TableCell>Allows only positive values, doubles the maximum value range.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    <Box sx={{ p: 3 }}>
<Typography variant="h6" gutterBottom color="primary">
  Primitive Data Types: Character (char)
</Typography>

<Typography variant="body1" sx={{ mb: 2 }}>
  • Any single character defined in single quote <br />
  • It can be signed and unsigned <br />
  • Signed can store both negative and positive values <br />
  • Unsigned can store only non-negative values <br />
  • Size: 1 byte <br />
  • Range: (-128 to 127) or (0 to 255)
</Typography>
<Typography variant="h6" gutterBottom color="primary">
  Daily Life Example:
</Typography>

<Typography variant="body1" sx={{ mb: 2 }}>
  Suppose we are playing Antakshari and picking one letter from a song.
</Typography>

<ImageCard 
  src="/antrakshi.png" 
  alt="Antakshari Example" 
  caption="Daily Life Example: Picking a letter from a song is like using a char."
/>

    <Typography variant="h6" gutterBottom color="primary">
  Example Use Cases of <code>char</code>:
</Typography>
<Typography variant="body1" sx={{ mb: 2 }}>
  • <strong>Attendance Tracker:</strong> 'P' for Present, 'A' for Absent <br />
  • <strong>Voting System:</strong> 'Y' for Yes, 'N' for No <br />
  • <strong>Menu Option:</strong> 1, 2, 3… <br />
  • <strong>Online Shopping Product Size:</strong><br />
  &nbsp;&nbsp;&nbsp;&nbsp;• 'S' Small <br />
  &nbsp;&nbsp;&nbsp;&nbsp;• 'M' Medium <br />
  &nbsp;&nbsp;&nbsp;&nbsp;• 'L' Large
</Typography>
<Typography variant="h6" gutterBottom color="primary">
    Primitive Data Types (float):
</Typography>
<Typography variant="body1" sx={{ mb: 2 }}>
  <strong>Float Data Type (float)</strong><br />
  • Stores decimal (real) numbers with single precision<br />
  • <strong>Size:</strong> 4 bytes<br />
  • <strong>Range:</strong> 1.2E-38 to 3.4E+38<br />
  &nbsp;&nbsp;&nbsp;&nbsp;↳ 1.2E-38 means 1.2 × 10<sup>−38</sup><br />
  &nbsp;&nbsp;&nbsp;&nbsp;↳ 3.4E+38 means 3.4 × 10<sup>38</sup>
</Typography>
</Box>
    </Container>
  );
};

export default Datatypes;
