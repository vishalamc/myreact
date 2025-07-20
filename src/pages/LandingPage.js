import React from 'react';
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure round-image class is in App.css

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e0f7fa, #e1bee7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          padding: 5,
          maxWidth: 800,
          textAlign: 'center',
          backgroundColor: '#ffffffcc',
          borderRadius: 4,
        }}
      >
        <Typography variant="h3" gutterBottom color="primary">
          Learn C Programming Easily
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mt: 2, textAlign: 'justify', lineHeight: 1.8 }}
        >
          This platform is designed to help you learn C programming in a clear and simple way.
          Whether you are a beginner or just want to review the basics, you’ll find step-by-step
          lessons and practical examples to guide you. Start with the fundamentals and gradually
          move to advanced topics – all explained in an easy-to-understand manner.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <img
            src="/vishal.jpeg"
            alt="C Programming"
            className="round-image"
            width="150"
            height="150"
          />
        </Box>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ mt: 5, paddingX: 4 }}
          onClick={() => navigate('/home')}
        >
          Start Learning
        </Button>
      </Paper>
    </Box>
  );
}
