// pages/Home.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <div className="sidebar">
         <Button
          variant="contained"
          startIcon={<HomeIcon />}
          component={Link}
          to="/"
          style={{ marginBottom: '20px' }}
        >
    Main Page
        </Button>
        <h2 style={{ color: 'blue' }}>C Programming Topics</h2>

       

        <ul>
          <li><strong style={{ color: 'purple' }}>Fundamentals</strong>
            <ul>
              <li><Link to="introduction">Introduction</Link></li>
              <li><Link to="identifier">Identifier</Link></li>
              <li><Link to="variables">Variables</Link></li>
              <li><Link to="loops">Loops</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
