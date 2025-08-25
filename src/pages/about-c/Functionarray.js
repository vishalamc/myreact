import React from "react";
import {
  Typography,
  Box,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ArrayInFunction() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {/* Title */}
      <Typography variant="h4" gutterBottom color="primary">
        Passing Arrays to Functions in C
      </Typography>

      {/* Description */}
      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        In C programming, arrays can be passed to functions to perform operations 
        like searching, sorting, and modifying elements. Since arrays are passed 
        by reference, any changes made inside the function will affect the original array.
      </Typography>

      {/* Syntax */}
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
        {`return_type function_name(data_type array_name[], int size);`}
      </Box>

      {/* Example */}
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom sx={{ mt: 2 }}>
        Example:
      </Typography>
      <pre
        style={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
{`#include <stdio.h>

// Function to display array elements
void displayArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    printf("Array elements: ");
    displayArray(numbers, 5);
    return 0;
}`}
      </pre>

      {/* Key Points */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        📌 Important Points:
      </Typography>
      <ul>
        <li>Arrays are passed to functions by reference.</li>
        <li>Changes made in the function will affect the original array.</li>
           </ul>

      {/* Navigation Buttons */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            onClick={() => navigate("/learnc/arraytypes")}
          >
            ⬅ Back
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
