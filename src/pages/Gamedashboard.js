import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Container,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

const games = [
  {
    title: 'Tower of Hanoi',
    description: 'Solve the classic Tower of Hanoi puzzle!',
    path: '/towerofhanoi',
  },
   {
    title: 'Binary Converter',
    description: 'Convert between decimal and binary numbers interactively!',
    path: '/computerbuilder',
    disabled: false,
  },
  {
    title: 'Coming Soon',
    description: 'More games will be added here.',
    path: '#',
    disabled: true,
  },
];

const GameDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* AppBar (Top Navigation) */}
      <AppBar position="static" color="primary" elevation={3}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Click to Go Home 
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ mt: 4 }}>
        <Box textAlign="center" mb={4}>
          <SportsEsportsIcon sx={{ fontSize: 50, color: 'primary.main' }} />
          <Typography variant="h4" fontWeight="bold" mt={2}>
            Welcome to the Game Zone!
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Select a game to play and have fun 🎮
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {games.map((game, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={5}
                sx={{
                  height: '100%',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {game.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {game.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={game.disabled}
                    onClick={() => !game.disabled && navigate(game.path)}
                    sx={{ mt: 2 }}
                  >
                    {game.disabled ? 'Coming Soon' : 'Play Now'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default GameDashboard;
