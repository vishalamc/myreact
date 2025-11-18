import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Pointer = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "900px", mx: "auto" }}>
      <Typography
        variant="h4" gutterBottom color='primary'
        sx={{ fontWeight: "bold", textAlign: "center", mb: 3 }}
      >
        Pointers in C
      </Typography>

      <Typography sx={{ mb: 2 }}>
        A pointer is a variable that holds the <b>address of another variable</b>.
        There are two operators used with pointers:
      </Typography>

      <Typography sx={{ ml: 2 }}>
        • <b>* (Asterisk)</b>: Used to declare a pointer variable and to dereference (access the value stored at the address).
        <br />
        • <b>& (Ampersand)</b>: Used to get the address of a variable.
      </Typography>

      <Typography sx={{ mt: 2 }}>
        It is mandatory to declare a pointer variable with the <b>same data type</b> as the variable whose address it will store.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        Uses of Pointers in C:
      </Typography>

      <Typography sx={{ ml: 2 }}>
        • Function arguments (modify original values)
        <br />
        • Array traversal
        <br />
        • Dynamic memory allocation using malloc(), calloc(), free()
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        Pointer Declaration
      </Typography>

      <Box sx={{ ml: 2, fontFamily: "monospace" }}>
        PointerType *PointerVariableName;
        <br />
        int *ptr;
      </Box>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        Pointer Initialization
      </Typography>

      <Box sx={{ ml: 2, fontFamily: "monospace" }}>
        PointerVariableName = &NormalVariable;
      </Box>

      <Typography sx={{ mt: 2 }}>
        <b>& (Address-of operator)</b> → gets the memory address of a variable.
        <br />
        <b>* (Dereference operator)</b> → accesses the value stored at that address.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold" }}>
        Example:
      </Typography>

      {/* Code Block */}
      <Box
        sx={{
          background: "#f4f4f4",
          p: 2,
          borderRadius: 2,
          overflowX: "auto",
          whiteSpace: "pre",
          fontFamily: "monospace",
          fontSize: "14px",
        }}
      >
{`#include <stdio.h>

int main() {
    int a = 20;
    int *ptr;

    ptr = &a;

    printf("Value of a: %d\\n", a);
    printf("Address of a: %p\\n", &a);
    printf("Value of ptr: %p\\n", ptr);
    printf("Value pointed by ptr: %d\\n", *ptr);

    return 0;
}`}
      </Box>

      {/* Navigation Buttons */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button variant="contained" color="primary" component={Link} to="/learnc/unionstructure">
          ⬅ Back
        </Button>

        <Button variant="contained" color="secondary" component={Link} to="/learnc/pointerfunction">
          Next ➡
        </Button>
      </Box>
    </Box>
  );
};
export default Pointer;
