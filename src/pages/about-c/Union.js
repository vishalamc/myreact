// src/pages/Union.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Union = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color='primary'>
        Union in C
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        A <b>union</b> in C is a user-defined data type similar to a structure,
        but it allows storing <b>different data types in the same memory location</b>.  
        <br />
        The size of a union is always equal to the size of its <b>largest member</b>.
      </Typography>

      <Typography variant="h6" fontWeight="bold" sx={{ mt: 3 }}>
        Syntax:
      </Typography>

      <Box
        sx={{
          mt: 2,
          p: 2,
          backgroundColor: "rgba(29, 77, 7, 0.23)",
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <pre>
{`union UnionName {
    data_type member1;
    data_type member2;
    ...
    data_type memberN;
};`}
        </pre>
      </Box>

      <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
        Example:
      </Typography>

      <Typography variant="body1" sx={{ mt: 1 }}>
        In this example, the largest member is <b>char str[20]</b>,  
        so the union size becomes <b>20 bytes</b>.
      </Typography>

      <Box
        sx={{
          mt: 2,
          p: 2,
          backgroundColor: "rgba(29, 77, 7, 0.23)",
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <pre>
{`union Data {
    int i;       // 4 bytes
    float f;     // 4 bytes
    char str[20]; // 20 bytes → largest
};`}
        </pre>
      </Box>

      <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
        Complete Program:
      </Typography>

      <Box
        sx={{
          mt: 2,
          p: 2,
          backgroundColor: "rgba(29, 77, 7, 0.23)",
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <pre>
{`#include <stdio.h>
#include <string.h>

union student {
    int roll;
    char name[20];
    float marks;
};

int main() {
    union student s1;//here s1 is a union variable

    strcpy(s1.name, "kumar");
    printf("Name: %s\\n", s1.name);

    s1.marks = 12.5f;// here s1.marks accessing the union member
    printf("Marks: %.2f", s1.marks);

    return 0;
}`}
        </pre>
      </Box>

      {/* -------- Navigation Buttons -------- */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>

        <Button variant="contained" color="primary" href="/learnc/unionstructure">
          Next ➡
        </Button>
      </Box>
    </Box>
  );
};

export default Union;
