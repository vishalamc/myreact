import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const PointerOperation = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "950px", mx: "auto" }}>
      <Typography color="primary"
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}
      >
        Operations on Pointers in C
      </Typography>

      <Typography sx={{ mb: 2 }}>
        Pointer operations allow you to work with memory addresses.  
        The main pointer operations are:
      </Typography>

      <Box sx={{ ml: 2, mb: 2 }}>
        • Pointer Assignment  
        • Dereferencing  
        • Pointer Arithmetic (p++, p--, p+n, p−n)  
        • Pointer to Pointer  
      </Box>

      {/* ===================== Pointer Assignment ===================== */}
      <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
        a) Pointer Assignment
      </Typography>

      <Typography sx={{ mt: 1 }}>
        Assigning address to a pointer:
      </Typography>

      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          mt: 2,
        }}
      >
{`int a = 10;
int *ptr;
ptr = &a;

// &a = address of a
// ptr → contains address of a
// *ptr → contains value of a (10)`}
      </Box>

      <Typography sx={{ mt: 2 }}>
        Assigning one pointer to another:
      </Typography>

      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          mt: 2,
        }}
      >
{`int a = 10;
int *p1, *p2;

p1 = &a;   // p1 holds address of a
p2 = p1;   // p2 also holds address of a`}
      </Box>

      {/* ===================== Dereferencing ===================== */}
      <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
        b) Dereferencing
      </Typography>

      <Typography sx={{ mt: 1 }}>
        Dereferencing means accessing the value stored at the address the pointer holds.
      </Typography>

      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          mt: 2,
        }}
      >
{`int x = 5;
int *p = &x;

printf("%d", *p);  // Output: 5`}
      </Box>

      {/* ===================== Pointer Arithmetic ===================== */}
      <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold" }}>
        c) Pointer Arithmetic
      </Typography>

      <Typography sx={{ mt: 1 }}>
        Pointer arithmetic moves the pointer to different memory locations.
      </Typography>

      <Typography sx={{ ml: 2, mt: 1 }}>
        • <b>p++</b> → moves to the next element  
        • <b>p--</b> → moves to the previous element  
        • <b>p + n</b> → moves n elements forward  
        • <b>p - n</b> → moves n elements backward  
      </Typography>

      {/* 1. p++ */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        1. p++ → Move to the next element
      </Typography>

      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          mt: 1,
        }}
      >
{`int arr[3] = {10, 20, 30};
int *p = arr;  // p → arr[0]

p++;           // moves to arr[1]

printf("%d", *p);  // Output: 20`}
      </Box>

      {/* 2. p-- */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        2. p-- → Move to the previous element
      </Typography>

      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          mt: 1,
        }}
      >
{`int arr[3] = {10, 20, 30};
int *p = &arr[2];  // p → arr[2]

p--;               // moves to arr[1]

printf("%d", *p);  // Output: 20`}
      </Box>

      {/* 3. p + n */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        3. p + n → Move forward n elements
      </Typography>

      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          mt: 1,
        }}
      >
{`int arr[4] = {5, 10, 15, 20};
int *p = arr;

p = p + 2;   // moves to arr[2]

printf("%d", *p);   // Output: 15`}
      </Box>

      {/* 4. p - n */}
      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        4. p - n → Move backward n elements
      </Typography>

      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          mt: 1,
        }}
      >
{`int arr[4] = {5, 10, 15, 20};
int *p = &arr[3];   // p → arr[3]

p = p - 2;          // moves to arr[1]

printf("%d", *p);   // Output: 10`}
      </Box>

      {/* ========= Navigation Buttons ========= */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/learnc/pointerfunction"
        >
          ⬅ Back
        </Button>

        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/learnc/pointerarray"
        >
          Next ➡
        </Button>
      </Box>
    </Box>
  );
};

export default PointerOperation;
