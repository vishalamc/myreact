// pages/Identifier.js
import React from 'react';
import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const Identifier = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4" gutterBottom color="primary">
            Identifier in C
          </Typography>

          <Typography variant="body1" sx={{ textAlign: 'justify', mb: 2 }}>
            An identifier is the name used to identify variables, functions, arrays, structures, etc.
            Suppose a contact list in a mobile phone contains names and phone numbers. 
            Here, the name in the contact list acts as the identifier, and the phone number is the value.
          </Typography>
<Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
  <img
    src="/identifier.png"  // <-- Place your image inside the public folder or use a URL
    alt="Identifier Example"
    width="300"
    style={{ borderRadius: '12px' }}
  />
</Box>
          <Typography variant="h6" gutterBottom color="secondary">
            Rules for Identifiers:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="• Can contain letters (A–Z, a–z), digits (0–9), and underscore (_)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="• Must begin with a letter or underscore" />
            </ListItem>
            <ListItem>
              <ListItemText primary="• Cannot be the same as a C keyword" />
            </ListItem>
            <ListItem>
              <ListItemText primary="• Case-sensitive (total, Total, and TOTAL are different)" />
            </ListItem>
            <ListItem>
              <ListItemText primary="• No special characters allowed (like @, $, %, etc.)" />
            </ListItem>
          </List>

          <Typography variant="h6" color="secondary" sx={{ mt: 2 }}>
            Example:
          </Typography>
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
            {`int age = 25;
float salary = 50000.50;`}
          </Box>

          <Typography variant="body2" sx={{ mt: 1 }}>
            Here, <strong>age</strong> and <strong>salary</strong> are identifiers used for variables.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Identifier;
