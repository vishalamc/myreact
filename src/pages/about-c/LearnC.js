// src/pages/LearnC.js
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
    group: "Fundamentals",
    items: [
      { label: "Introduction", path: "introduction" },
      { label: "Identifier", path: "identifier" },
      { label: "Keywords", path: "keyword" },
      { label: "Datatypes", path: "datatypes" },
      { label: "Constant", path: "constant" },
      { label: "Variables", path: "variables" },
      { label: "Expressions and Statements", path: "expression" },
      { label: "Operators", path: "operator" },
      { label: "MCQs", path: "practiceq" },
      { label: "C-Programs-Chapter-1", path: "chapter1" },
    ],
  },
  {
    group: "Functions",
    items: [
      { label: "User Define Functions", path: "userdefine" },
      { label: "Predefine Functions", path: "predefine" },
      { label: "Recursive Functions", path: "recursive" },
      { label: "MCQs", path: "functionmcq" },
    ],
  },
  {
    group: "Array",
    items: [
      { label: "Array", path: "array" },
      { label: "Array and its Types", path: "arraytypes" },
      { label: "Array in Functions", path: "functionarray" },
      { label: "MCQs", path: "arraymcq" },
    ],
  },
    {
    group: "String",
    items: [
      { label: "String in C", path: "string" },
      { label: "String manipulation functions", path: "stringfunctions" },
      
    ],
  },
  {
    group: "Structure",
    items: [
      { label: "User defined data types in C", path: "structure" },
      { label: "Passing structures to functions", path: "structurefunctions" },
      { label: "Self-referential structures", path: "selfreferentialstructure" },
    ],
  },
  {
    group: "Union",
    items: [
      { label: "Unions in C", path: "union" },
      { label: "Structure vs Union", path: "unionstructure" },
    ],
  },
  {
    group: "Pointer",
    items: [
      { label: "Pointer in C", path: "pointer" },
      { label: "Passing pointers to Functions ", path: "pointerfunctions" },
      { label: "Operation on Pointers", path: "pointeroperations" },
       { label: "Pointer and Arrays", path: "pointerarrays" },
       { label: "Structures and Pointers", path: "pointerstructure" },
    ],
  },
  {
    group: "File handling",
    items: [
      { label: " File Handling in C", path: "filehandling" },
      { label: "File Operations", path: "fileoperations" },
      { label: "Sequential Vs Random Access Files", path: "sequentialrandom" },
    ],
  },
  {
    group: "Preprocessor",
    items: [
      { label: " # define statement", path: "hashdefine" },
      { label: "Functional Macros", path: "functionalmacros" },
      { label: "using # include ", path: "hashinclude" },
    { label: "using #ifdef", path: "hashifdef" },
        { label: "Other Preprocessor Commands", path: "otherpreprocessor" },
         { label: "Macros Vs Functions", path: "macrofunction" },
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
