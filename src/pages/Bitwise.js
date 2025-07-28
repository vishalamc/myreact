import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ImageCard from '../components/ImageCard';
const Bitwise = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">Bitwise Operators in C</Typography>

      <Typography variant="h6" sx={{ mt: 3 }} color="primary">Bitwise AND</Typography>
      <Typography>
        Suppose there are two switches and one bulb. The bulb will turn on only if both switches are on.
      </Typography>
      <ImageCard 
  src="/switch1.png" 
  alt="Float Example" 
  caption="Switch with Bulb"
/>
      <Typography sx={{ mt: 2 }}>Truth table:</Typography>

      <Typography sx={{ mt: 2 }}>
        <pre>
          <code>
{`#include <stdio.h>

int main() {
    int a = 12;
    int b = 25;
    printf("%d", a & b);
    return 0;
}`}
          </code>
        </pre>
        Steps to solve:<br/>
        a = 12 (binary: 01100)<br/>
        b = 25 (binary: 11001)<br/>
        a & b = 01000 = 8 (Ans)
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise OR</Typography>
      <Typography>
        Suppose there are two switches and one bulb. The bulb will turn on if any switch is on.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <pre>
          <code>
{`#include <stdio.h>

int main() {
    int a = 12;
    int b = 25;
    printf("%d", a | b);
    return 0;
}`}
          </code>
        </pre>
        a | b = 11101 = 29 (Ans)
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise XOR</Typography>
      <Typography>
        The bulb will turn on only if one of the switches is ON and the other is OFF.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        <pre>
          <code>
{`#include <stdio.h>

int main() {
    int a = 12;
    int b = 25;
    printf("%d", a ^ b);
    return 0;
}`}
          </code>
        </pre>
        a ^ b = 10101 = 21 (Ans)
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise Left Shift (&lt;&lt;)</Typography>
      <Typography sx={{ mt: 2 }}>
        Add 0s to the right according to the number of bits shifted.
        <pre>
          <code>
{`#include <stdio.h>

int main() {
    int a = 10;
    printf("%d", a << 1);
    return 0;
}`}
          </code>
        </pre>
        a = 10 (binary: 1010)<br/>
        a&lt;&lt;1 = 10100 = 20 (Ans)<br/>
        a&lt;&lt;2 = 101000 = 40 (Ans)
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }} color="primary">Bitwise Right Shift (&gt;&gt;)</Typography>
      <Typography sx={{ mt: 2 }}>
        Remove bits from the right side and convert to decimal.
        <pre>
          <code>
{`#include <stdio.h>

int main() {
    int a = 10;
    printf("%d", a >> 1);
    return 0;
}`}
          </code>
        </pre>
        a = 10 (binary: 1010)<br/>
        a&gt;&gt;1 = 101 = 5 (Ans)<br/>
        a&gt;&gt;2 = 10 = 2 (Ans)
      </Typography>

      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
   
      </Box>
    </Box>
  );
};

export default Bitwise;
