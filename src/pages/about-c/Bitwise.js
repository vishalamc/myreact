import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageCard from '../../components/ImageCard';

const Bitwise = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" gutterBottom color="primary" fontWeight="bold">
        Bitwise Operators in C
      </Typography>

      {/* Bitwise AND */}
      <Typography variant="h6" sx={{ mt: 3 }} color="primary">Bitwise AND</Typography>
      <Typography sx={{ textAlign: 'justify', mb: 2 }}>
        The bitwise AND (&) operator in C compares each bit of two integers and returns a new number.
        For each bit position, it returns 1 only if both bits are 1, otherwise it returns 0.
        Suppose there are two switches and one bulb. The bulb will turn on only if both switches are on.
      </Typography>
      <ImageCard src="/switch.png" alt="Switch bulb" caption="Switch with Bulb" />
      <ImageCard src="/bitwisetruth1.png" alt="Truth Table" caption="Bitwise AND Truth Table" />
      <Box sx={{ mt: 2 }}>
        <Typography fontWeight="bold">Example Code:</Typography>
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
    int a = 12;
    int b = 25;
    printf("%d", a & b);
    return 0;
}`}
        </Box>
        <Typography sx={{ mt: 1 }}>
          <strong>Steps to solve:</strong><br />
          a = 12 (binary: 01100)<br />
          b = 25 (binary: 11001)<br />
          a & b = 01000 = <strong>8</strong> (Answer)
        </Typography>
      </Box>

      {/* Bitwise OR */}
      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise OR</Typography>
      <Typography sx={{ textAlign: 'justify', mb: 2 }}>
        The bitwise OR operator compares each bit of two integers and returns 1 if either of the bits is 1.
        Suppose there are two switches and one bulb. The bulb will turn on if any switch is on.
      </Typography>
      <ImageCard src="/bitwisetruth2.png" alt="Truth Table" caption="Bitwise OR Truth Table" />

      <Box sx={{ mt: 2 }}>
        <Typography fontWeight="bold">Example Code:</Typography>
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
    int a = 12;
    int b = 25;
    printf("%d", a | b);
    return 0;
}`}
        </Box>
        <Typography sx={{ mt: 1 }}>
          a | b = 11101 = <strong>29</strong> (Answer)
        </Typography>
      </Box>

      {/* Bitwise XOR */}
      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise XOR</Typography>
      <Typography sx={{ textAlign: 'justify', mb: 2 }}>
        The bitwise XOR operator returns 1 if only one of the bits is 1, but not both. It returns 0 if both bits are the same.
        The bulb will turn on only if one of the switches is ON and the other is OFF.
      </Typography>
      <ImageCard src="/bitwisetruth3.png" alt="Truth Table" caption="Bitwise XOR Truth Table" />

      <Box sx={{ mt: 2 }}>
        <Typography fontWeight="bold">Example Code:</Typography>
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
    int a = 12;
    int b = 25;
    printf("%d", a ^ b);
    return 0;
}`}
        </Box>
        <Typography sx={{ mt: 1 }}>
          a ^ b = 10101 = <strong>21</strong> (Answer)
        </Typography>
      </Box>

      {/* Left Shift */}
      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise Left Shift (&lt;&lt;)</Typography>
      <Typography sx={{ textAlign: 'justify', mb: 2 }}>
        The left shift operator shifts all bits of a number to the left by a specified number of positions.
        <br />
        <strong>Step:</strong> Add 0s to the right according to the number of bits shifted.
      </Typography>
              <Typography fontWeight="bold">Example Code:</Typography>
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
    int a = 10;
    printf("%d", a << 1);
    return 0;
}`}
      </Box>
      <Typography sx={{ mt: 1 }}>
        a = 10 (binary: 1010)<br />
        a &lt;&lt; 1 = 10100 = <strong>20</strong>(Answer)<br />
        a &lt;&lt; 2 = 101000 = <strong>40</strong>(Answer)
      </Typography>

      {/* Right Shift */}
      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise Right Shift (&gt;&gt;)</Typography>
      <Typography sx={{ textAlign: 'justify', mb: 2 }}>
        The right shift operator shifts bits of a number to the right.
        <br />
        <strong>Step:</strong> Remove bits from the right side and convert to decimal.
      </Typography>
              <Typography fontWeight="bold">Example Code:</Typography>
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
    int a = 10;
    printf("%d", a >> 1);
    return 0;
}`}
      </Box>
      <Typography sx={{ mt: 1 }}>
        a = 10 (binary: 1010)<br />
        a &gt;&gt; 1 = 101 = <strong>5</strong>(Answer)<br />
        a &gt;&gt; 2 = 10 = <strong>2</strong>(Answer)
      </Typography>

      <Typography variant="h6" textAlign="left" gutterBottom color="primary">
        Bitwise NOT (~) Operator
      </Typography>

      <Typography variant="body1" gutterBottom textAlign="justify">
        The bitwise NOT operator flips each bit of a number: 1 becomes 0, and 0 becomes 1.
        In C, this is represented using the tilde symbol <code>~</code>.
      </Typography>

      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Example:
      </Typography>

      <Box variant="outlined" sx={{ p: 2, backgroundColor: 'rgba(29, 77, 7, 0.1)' }}>
        <Typography component="div" sx={{ fontFamily: 'monospace', whiteSpace: 'pre-line' }}>
          {`#include <stdio.h>

int main() {
    int x = 5;
    printf("~x = %d", ~x);
    return 0;
}`}
        </Typography>
      </Box>

      <Typography variant="body1" mt={2}>
        Binary of 5 (in 8-bit): <code>00000101</code>
        <br />
        Applying NOT: <code>11111010</code> → This is <code>-6</code> in 2’s complement representation.
      </Typography>
    
      {/* Navigation Buttons */}
      <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
        {/* You can optionally add a “Next” button here */}
      </Box>
    </Box>
  );
};

export default Bitwise;
