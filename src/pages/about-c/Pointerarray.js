import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PointerArray = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Card sx={{ p: 2, borderRadius: 3, boxShadow: 3 }}>
        <CardContent>

          {/* Title */}
          <Typography variant="h4" fontWeight="bold" gutterBottom color='primary'>
            Pointer and Array in C
          </Typography>

          {/* Section: Accessing Array Elements Using Pointer */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 3 }}>
            Accessing Array Elements Using Pointers
          </Typography>

          <Typography sx={{ mt: 1 }}>
            You can access array elements using pointer arithmetic.
          </Typography>

          <Box
            sx={{
              mt: 2,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
{`#include <stdio.h>
int main() {
    int num[5] = {10, 20, 30, 40, 50};
    int *ptr;
    ptr = num;  // or ptr = &num[0];

    for (int i = 0; i < 5; i++) {
        printf("num[%d] = %d\\t", i, *(ptr + i));
        printf("Address = %p\\n", (ptr + i));
    }
    return 0;
}`}
          </Box>

          {/* Section: Array of Pointers */}
          <Typography variant="h5" fontWeight="bold" sx={{ mt: 4 }}>
            Array of Pointers
          </Typography>

          <Typography sx={{ mt: 1 }}>
            An array of pointers stores addresses of variables or strings.
          </Typography>

          <Box
            sx={{
              mt: 2,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
{`array_type *array_name[size];
int *ptr[3];`}
          </Box>

          {/* Example 1 */}
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
            Example 1: Array of Integer Pointers
          </Typography>

          <Box
            sx={{
              mt: 1,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
{`#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 30;
    int *ptr[3];

    ptr[0] = &a;
    ptr[1] = &b;
    ptr[2] = &c;

    for (int i = 0; i < 3; i++) {
        printf("Value of ptr[%d]: %d\\n", i, *ptr[i]);
    }

    return 0;
}`}
          </Box>

          {/* Example 2 */}
          <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
            Example 2: Array of String Pointers
          </Typography>

          <Box
            sx={{
              mt: 1,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
{`#include <stdio.h>

int main() {
    char *names[] = {"Rahul", "Parvej", "Aman"};

    for (int i = 0; i < 3; i++) {
        printf("Name[%d]: %s\\n", i, names[i]);
    }

    return 0;
}`}
          </Box>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 4,
            }}
          >
            <Link to="/learnc/pointeroperation" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="primary">
                ⬅ Back
              </Button>
            </Link>

            <Link to="/learnc/pointerstructure" style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                Next ➡
              </Button>
            </Link>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PointerArray;
