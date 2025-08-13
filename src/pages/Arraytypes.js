import React from "react";
import {
  Typography,
  Box,
  Button,
  useTheme,
  Grid,
  useMediaQuery
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Arraytypes() {
  const navigate = useNavigate();
  const theme = useTheme(); // ✅ Get theme first
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // ✅ Use after theme

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" gutterBottom color="primary">
        Types of Arrays in C
      </Typography>

      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        In C programming, arrays can be classified based on their dimensions.
        An <strong>array type</strong> specifies how many indices are required
        to access an element. The main types of arrays are:
      </Typography>

      {/* One-Dimensional Array */}
      <Typography variant="h5" gutterBottom color="secondary">
        1. One-Dimensional Array (1D)
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        A one-dimensional array stores elements in a single row. It is the
        simplest form of an array.
      </Typography>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Syntax:
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto"
        }}
      >
        {`data_type array_name[size];`}
      </Box>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Example:
      </Typography>
      <pre
        style={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        {`#include <stdio.h>
int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    return 0;
}`}
      </pre>

      {/* Two-Dimensional Array */}
      <Typography variant="h5" gutterBottom color="secondary" sx={{ mt: 3 }}>
        2. Two-Dimensional Array (2D)
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        A two-dimensional array stores elements in rows and columns (like a
        matrix).
      </Typography>
        <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Syntax:
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto"
        }}
      >
        {`data_type array_name[rowsize][columnsize];`}
      </Box>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Example:
      </Typography>
      <pre
        style={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        {`#include <stdio.h>
int main() {
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`}
      </pre>

      {/* Multi-Dimensional Array */}
      <Typography variant="h5" gutterBottom color="secondary" sx={{ mt: 3 }}>
        3. Multi-Dimensional Array (n dimension)
      </Typography>
      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        A multi-dimensional array has more than two dimensions. In Multidimension Array, Array becomes Array of Arrays. They are mostly
        used for complex data structures like 3D matrices.
      </Typography>
       <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Syntax of 3D Array:
      </Typography>
      <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto"
        }}
      >
        {`data_type array_name[no.of 2d arrays][rowsize][columnsize];`}
      </Box>

      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Example:
      </Typography>
      <pre
        style={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        {`#include <stdio.h>
int main() {
    int cube[2][2][2] = {
        {{1, 2}, {3, 4}},
        {{5, 6}, {7, 8}}
    };
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 2; j++) {
            for (int k = 0; k < 2; k++) {
                printf("%d ", cube[i][j][k]);
            }
            printf("\\n");
        }
        printf("\\n");
    }
    return 0;
}`}
      </pre>

       {/* Navigation Buttons */}
       <Box display="flex" justifyContent="space-between" mt={5}>
               <Button variant="outlined" onClick={() => navigate('/home/array')}>
                 Back
               </Button>
               <Button variant="contained" onClick={() => navigate('/home/functionarray')}>
                 Next
               </Button>
             </Box>
       </Box>
  );
}
