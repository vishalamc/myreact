import React from "react";
import { Typography, Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Array() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 5 },
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        gutterBottom
        color="primary"
        sx={{ textAlign: "center" }}
      >
        Arrays in C
      </Typography>

      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        An <strong>array</strong> in C is a collection of elements of the same
        data type stored at contiguous memory locations. Arrays allow us to
        store multiple values under a single variable name and access them
        using an index.
      </Typography>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom color="primary">
        Important Features:
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>Stores multiple elements of the same data type.</li>
        <li>Elements are stored in consecutive memory locations.</li>
        <li>Array index starts from 0.</li>
        <li>
          We traverse array elements using an index:{" "}
          <code>array[index]</code>.
        </li>
      </Box>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Syntax:
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        {`data_type array_name[size];`}
      </Box>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Example:
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        {`#include <stdio.h>

int main() {
    int marks[5] = {90, 85, 78, 92, 88};
    for (int i = 0; i < 5; i++) {
        printf("Marks[%d] = %d\\n", i, marks[i]);
    }
    return 0;
}`}
      </Box>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom color="primary">
        Limitations of Arrays:
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>Fixed size – cannot grow or shrink dynamically.</li>
        <li>All elements must be of the same data type.</li>
      </Box>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom color="primary">
        Types of Arrays:
      </Typography>
      <Box component="ul" sx={{ pl: 3 }}>
        <li>
          <strong>One-Dimensional Array</strong> – Stores elements in a single
          row.
        </li>
        <li>
          <strong>Two-Dimensional Array</strong> – Stores elements in rows and
          columns (matrix form).
        </li>
        <li>
          <strong>Multi-Dimensional Array</strong> – More than two dimensions.
        </li>
      </Box>

      <Box
        sx={{
          mt: 4,
          textAlign: isMobile ? "center" : "right",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/learnc/arraytypes")}
          size={isMobile ? "medium" : "large"}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
