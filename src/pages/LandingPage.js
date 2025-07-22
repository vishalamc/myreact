import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fce4ec, #e1f5fe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: { xs: 3, md: 5 },
          maxWidth: 900,
          width: '100%',
          textAlign: 'center',
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(210, 202, 202, 0.8)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 600, mb: 2, color: '#4a148c' }}
        >
          Learn C Programming Easily
        </Typography>

        <Typography
          variant="h6"
          sx={{
            mt: 2,
            mb: 3,
            textAlign: 'justify',
            lineHeight: 1.8,
            color: '#424242',
          }}
        >
          This platform is designed to help you learn C programming in a clear and
          simple way. Whether you're a beginner or reviewing basics, you’ll find
          step-by-step lessons and hands-on examples to guide your learning journey.
          Dive into the core concepts and build strong programming fundamentals.
        </Typography>

        <Box sx={{ mt: 4, mb: 4 }}>
          <img
            src="/vishal.jpeg"
            alt="C Programming"
            className="round-image"
            style={{
              width: 160,
              height: 160,
              borderRadius: '50%',
              border: '4px solid #4a148c',
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            }}
          />
        </Box>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            mt: 2,
            px: 5,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            borderRadius: 3,
            background: '#7b1fa2',
            '&:hover': {
              background: '#4a148c',
            },
          }}
          onClick={() => navigate('/home')}
        >
          Start Learning
        </Button>
      </Paper>
    </Box>
  );
}
