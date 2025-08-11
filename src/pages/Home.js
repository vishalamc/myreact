import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Button, List, ListItem, ListItemText, Divider, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
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
          sx={{
            backgroundColor: '#336b87',
            color: 'white',
            marginBottom: '20px',
            width: '100%',
            textTransform: 'none'
          }}
        >
          Home Page
        </Button>

        <Typography variant="h6" gutterBottom color="white">
          <MenuBookIcon fontSize="small" sx={{ mr: 1 }} />
          C Programming Topics
        </Typography>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)', mb: 1 }} />

        <List>
          <ListItem disablePadding>
            <ListItemText primary="Fundamentals" primaryTypographyProps={{ style: { color: '#ffd54f', fontWeight: 'bold' } }} />
          </ListItem>
          <ul className="sub-list">
            <li><Link to="introduction">Introduction</Link></li>
            <li><Link to="identifier">Identifier</Link></li>
            <li><Link to="keyword">Keywords</Link></li>
            <li><Link to="datatypes">Datatypes</Link></li>
            <li><Link to="constant">Constant</Link></li>
            <li><Link to="variables">Variables</Link></li>
            <li><Link to="expression">Expressions and Statements</Link></li>
            <li><Link to="operator">Operators</Link></li>
            <li><Link to="controlstructure">Control Structure</Link></li>
            <li><Link to="practiceq">MCQs</Link></li>
          
          </ul>
             <ListItem disablePadding>
            <ListItemText primary="Skill Test" primaryTypographyProps={{ style: { color: '#ffd54f', fontWeight: 'bold' } }} />
          </ListItem>
            <ul className="sub-list">
            <li><Link to="partialcode">PartialCode</Link></li>
            </ul>
        </List>
         <List>
<ListItem disablePadding>
            <ListItemText primary="Functions" primaryTypographyProps={{ style: { color: '#ffd54f', fontWeight: 'bold' } }} />
          </ListItem>
          <ul className="sub-list">
            <li><Link to="userdefine">User Define Functions</Link></li>
            <li><Link to="predefine">Predefine Functions</Link></li>
            <li><Link to="recursive">Recursive Functions</Link></li>
            <li><Link to="functionmcq">MCQs</Link></li>
           </ul>

 </List>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};
export default Home;
