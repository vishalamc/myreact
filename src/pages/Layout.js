// src/pages/Layout.js
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Box, List, ListItemButton, ListItemText, Typography } from '@mui/material';

const Layout = () => {
  const topics = [
    { name: 'Introduction', path: 'introduction' },
    { name: 'Variables', path: 'variables' },
    { name: 'Loops', path: 'loops' },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Box sx={{ width: '240px', bgcolor: '#f5f5f5', p: 2 }}>
        <Typography variant="h6" gutterBottom>
          C Topics
        </Typography>
        <List>
          {topics.map((topic, index) => (
            <ListItemButton
              key={index}
              component={NavLink}
              to={topic.path}
              sx={{
                mb: 1,
                '&.active': { backgroundColor: '#e0e0e0', borderRadius: 1 },
              }}
            >
              <ListItemText primary={topic.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet /> {/* This will render nested route pages */}
      </Box>
    </Box>
  );
};

export default Layout;
