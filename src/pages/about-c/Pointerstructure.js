import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const PointerStructure = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Page Title */}
      <Typography color="primary"
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Pointer With Structure in C
      </Typography>

      {/* Card */}
      <Card
        elevation={4}
        sx={{
          p: 2,
          maxWidth: "900px",
          mx: "auto",
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            1. Pointer to Structure
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            A pointer to structure is a pointer variable that stores the
            <b> address of a structure variable</b>. It helps access structure
            members using the arrow operator (<b>→</b>).
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, mb: 1 }}
          >
            Syntax:
          </Typography>

          {/* Code Block */}
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
            {`struct structure_name *pointer_name;`}
          </Box>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 1, mb: 1 }}
          >
            Example:
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

struct Student {
    int roll;
    float marks;
};

int main() {
    struct Student s1 = {101, 89.5};

    struct Student *ptr;   
    ptr = &s1;    

    printf("Roll = %d\\n", ptr->roll);
    printf("Marks = %.2f\\n", ptr->marks);

    return 0;
}`}
          </Box>

          {/* Section 2 */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 3, mb: 2 }}>
            2. Accessing Structure Members Using Pointer
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            The arrow operator (<b>ptr → member</b>) is used to access the
            structure members using a pointer.
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

struct Student {
    int roll;
    float marks;
};

int main() {
    struct Student s1 = {101, 88.5};
    struct Student *ptr;

    ptr = &s1;

    printf("Roll = %d\\n", ptr->roll);
    printf("Marks = %.2f\\n", ptr->marks);

    return 0;
}`}
          </Box>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => (window.location.href = "/learnc/pointerarray")}
            >
              ⬅ Back
            </Button>

                </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PointerStructure;
