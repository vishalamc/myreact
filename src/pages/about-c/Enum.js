// src/pages/Enum.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Enum = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color='primary'>
        Enum in C
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        An <b>enum</b> (Enumeration) in C is a user-defined data type that
        consists of a set of named integer constants.  
        <br />
         It is used to assign userdefine names to integer values, which makes a program easy to understand according our need. 
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
{`enum EnumName {
    constant1,
    constant2,
    constant3,
    ...
};`}
        </pre>
      </Box>

      <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
        Example:
      </Typography>

      <Typography variant="body1" sx={{ mt: 1 }}>
        By default, the first name starts from <b>0</b>, and increases by 1 automatically.
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
{`enum Week {
    Monday,     // 0
    Tuesday,    // 1
    Wednesday,  // 2
    Thursday,   // 3
    Friday,     // 4
    Saturday,   // 5
    Sunday      // 6
};`}
        </pre>
      </Box>

      <Typography variant="h6" fontWeight="bold" sx={{ mt: 4 }}>
        Example with Manual Values:
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
{`enum Level {
    LOW = 1,
    MEDIUM = 5,
    HIGH = 10
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

enum Week {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
};

int main() {
    enum Week today;
    today = Wednesday;

    printf("Day number: %d", today);  // Output: 2

    return 0;
}`}
        </pre>
      </Box>

      {/* -------- Navigation Buttons -------- */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button variant="contained" color="primary" href="/learnc/union">
          ⬅ Back
        </Button>

      </Box>
    </Box>
  );
};

export default Enum;
