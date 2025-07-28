import React from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';

const CheckPin = () => {
  const code = `#include <stdio.h>

int main()
{
    int pin, correctPin = 1234, attempt = 0;
    while(1)
    {
        printf("Enter pin\\n");
        scanf("%d", &pin);
        attempt++;
        if(pin == correctPin)
        {
            printf("Login Successful\\n");
            break;
        }
        if (attempt == 3)
        {
            goto wrong;
        }
        else
        {
            printf("Try again\\n");
        }
    }

    wrong:
    printf("\\nCard blocked due to 3 wrong attempts");
    return 0;
}`;

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: '1000px', mx: 'auto' }}>
      <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
        PIN Verification
      </Typography>

    <Typography
  variant="body1"
  sx={{ mb: 3, textAlign: 'justify' }}
>
  There is some logical mistake in the following code. Carefully read and analyze the code. Try to understand how it handles login attempts and what happens after three wrong attempts. Then try modifying or testing it in the embedded online compiler.
</Typography>
      <Paper variant="outlined" sx={{ p: 2, backgroundColor: '#f5f5f5', mb: 4 }}>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', margin: 0 }}>
          {code}
        </pre>
      </Paper>

      <Typography variant="h6" sx={{ mb: 1 }}>Try it online:</Typography>

      {/* Embedded Online compoler*/}
      <Box sx={{ height: '500px', mb: 5 }}>
  <iframe width="850" height="500" src="https://codehs.com/sandbox/id/pinverification-LYTBf9/embed/?display_mode=default&show_file_tree=False" frameborder="0" allowfullscreen class="video-iframe"></iframe>
      </Box>

      <Button variant="contained" color="primary" href="https://codehs.com/sandbox/id/pinverification-LYTBf9/embed/?display_mode=default&show_file_tree=False" target="_blank" rel="noopener noreferrer">
        Open Fullscreen Compiler
      </Button>
    </Box>
  );
};

export default CheckPin;
