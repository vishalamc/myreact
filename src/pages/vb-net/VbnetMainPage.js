import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Typography,
  Divider,
  useMediaQuery,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import "./LearnPage.css";

// 🌟 Grouped structure
const lessons = [
  {
    group: ".Net Technology",
    items: [
      { label: "Introduction", path: "vbintroduction" },
      { label: "The .Net Framework Class Library", path: "vbintroduction" },
      { label: "Working with the .Net FCL", path: "vbintroduction" },
      { label: "Namespaces", path: "vbintroduction" },
      { label: "Types of Namespaces", path: "vbintroduction" },

    ],
  },
  {
    group: "The Visual Basic.Net Language",
    items: [
      { label: "VB.Net Data types", path: "vbbasic" },
      { label: "Operators", path: "vboperators" },
      { label: "Decision Statements", path: "vbdecision" },
      { label: "Loop Statements", path: "vbloop" },
      { label: "Arrays", path: "vbarray" },
    ],
  },
  {
    group: "OOP using VB.Net",
    items: [
      { label: "Object  Oriented  features", path: "vboops" },
      { label: "Declaring Classes", path: "vbclass" },
      { label: "Implementing Typecasting", path: "functionarray" },
      { label: "Optional arguments", path: "arraymcq" },
      { label: " Error handling in  Procedures", path: "arraymcq" },
   { label: "Properties", path: "arraymcq" },
   { label: "Public  and  Private  variables", path: "vbclass" },
   { label: "Types  of  Properties", path: "arraymcq" },
   { label: "Polymorphism", path: "arraymcq" },
    { label: "Inheritance", path: "arraymcq" },
    { label: "Method Overriding", path: "arraymcq" },
   
    ],
  },
    {
    group: "Windows Form",
    items: [
      { label: "Windows GUI", path: "string" },
      { label: "Form Controls", path: "stringfunctions" },
      { label: "Event Handlers", path: "stringfunctions" },
      { label: "Error handling", path: "stringfunctions" },
      { label: "SDI and MDI Applications", path: "stringfunctions" },
    ],
  },
  {
    group: "Data access with ADO.Net",
    items: [
      { label: "ADO.Net Architecture", path: "structure" },
      { label: "Database Operations", path: "structurefunction" },
      { label: "Using XML Data", path: "selfreferentialstructure" },
    ],
  },
 
]; 

const LearnC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const renderLessons = () =>
    lessons.map((section) => (
      <div key={section.group}>
        <Typography
          variant="subtitle1"
          sx={{ mt: 2, mb: 1, fontWeight: "bold", color: "#ddd" }}
        >
          {section.group}
        </Typography>
        <ul className="sub-list">
          {section.items.map((lesson) => (
            <li key={lesson.path}>
              <Link to={lesson.path}>{lesson.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    ));

  return (
    <>
      {isMobile ? (
        // 📱 Mobile → Navbar + Drawer
        <div className="mobile-container">
          <AppBar position="sticky" sx={{ backgroundColor: "#2e3b55" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              {/* ✅ Fixed color */}
             <Typography
  variant="h6"
  sx={{ flexGrow: 1, color: "white !important" }}
>
  C Programming Topics
</Typography>
              <Button
                component={Link}
                to="/"
                startIcon={<HomeIcon />}
                sx={{ color: "white", textTransform: "none" }}
              >
                Home
              </Button>
            </Toolbar>
          </AppBar>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <div className="drawer">
              {/* ✅ Fixed drawer title color */}
              <Typography
                variant="h6"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", color: "#2e3b55" }}
              >
                <MenuBookIcon fontSize="small" sx={{ mr: 1 }} />
                C Programming
              </Typography>
              <Divider sx={{ borderColor: "rgba(0,0,0,0.2)", mb: 1 }} />
              <List onClick={() => setDrawerOpen(false)}>
                {lessons.map((section) => (
                  <React.Fragment key={section.group}>
                    <ListItem>
                      <ListItemText
                        primary={section.group}
                        primaryTypographyProps={{
                          sx: { fontWeight: "bold", color: "#2e3b55" },
                        }}
                      />
                    </ListItem>
                    {section.items.map((lesson) => (
                      <ListItem
                        button
                        key={lesson.path}
                        component={Link}
                        to={lesson.path}
                      >
                        <ListItemText primary={lesson.label} />
                      </ListItem>
                    ))}
                  </React.Fragment>
                ))}
              </List>
            </div>
          </Drawer>

          <div className="mobile-content">
            <Outlet />
          </div>
        </div>
      ) : (
        // 💻 Desktop → Sidebar + Content
        <div className="container">
          <div className="sidebar">{renderLessons()}</div>
          <div className="main-content">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default LearnC;
