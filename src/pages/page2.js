import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome to MUI in React</h2>
      <div>
      <Button variant="contained" color="primary">
        Click Me
      </Button></div>
      <div>&nbsp;</div>
      <div>
      <TextField label="Your Name" variant="outlined" />
      </div>
      <div>&nbsp;</div>
      <div>
    <Card style={{ maxWidth: 300, margin: '20px auto' }}>
        <CardContent>
            <Typography variant="h5">React with MUI</Typography>
            <Typography color="textSecondary">This is a card</Typography>
        </CardContent>
    </Card>
      </div>
    </div>
  );
}

export default App;

