import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SelfReferentialStructure = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go back to the previous topic
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 3,
          color: "#2e3b55",
          textAlign: "center",
        }}
      >
        Self-Referential Structure in C
      </Typography>

      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Typography variant="body1" sx={{ mb: 2, textAlign: "justify" }}>
            A <strong>self-referential structure</strong> is a structure that
            contains a pointer to a structure of the same type.  
            This allows us to create **linked data structures** like linked lists, trees, and graphs.
          </Typography>

          <Typography sx={{ mb: 2, textAlign: "justify" }}>
            In other words we can say, one member of the structure refers to another structure variable of the same type.
                    </Typography>

          <Typography variant="h6" sx={{ mt: 2, color: "#1976d2" }}>
            🔹 Example:
          </Typography>

          <Box
            component="pre"
            sx={{
              backgroundColor: "#e0e0e0",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              mb: 2,
            }}
          >
{`#include <stdio.h>

struct Node {
    int data;
    struct Node *next; // Self-Referential Structure
};

int main() {
    struct Node n1, n2;

    n1.data = 10;
    n2.data = 20;

    n1.next = &n2;  // n1 points to n2
    n2.next = NULL; // last node

    printf("n1 data = %d\\n", n1.data);
    printf("n2 data = %d\\n", n1.next->data);

    return 0;
}`}
          </Box>

         
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleBack}
        >
          ⬅ Back
        </Button>

       
      </Stack>
    </Box>
  );
};

export default SelfReferentialStructure;

