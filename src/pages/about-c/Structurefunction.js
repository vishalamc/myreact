import React from "react";
import { Box, Typography, Card, CardContent, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StructureFunction = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/learnc/selfreferentialstructure"); // 👉 navigate to the next topic
  };

  const handleBack = () => {
    navigate(-1); // go back to the previous page
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
     Passing structures to functions
      </Typography>

      <Card sx={{ mb: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="body1" sx={{ mb: 2, textAlign: "justify" }}>
            You can pass a structure to a function just like any normal variable.
            There are three ways to do this:
          </Typography>

          <Typography component="ul" sx={{ mb: 2, ml: 3 }}>
            <li>Pass by Value</li>
            <li>Pass by Reference (using pointer)</li>
            <li>Return structure from a function</li>
          </Typography>

          {/* Pass by Value */}
          <Typography variant="h6" sx={{ mt: 3, color: "#1976d2" }}>
            1️⃣ Pass by Value
          </Typography>

          <Typography sx={{ mb: 2, textAlign: "justify" }}>
            When you pass the structure by value, a copy of the structure is sent
            to the function. Changes made inside the function do not affect the
            original structure.
          </Typography>

          <Box
            component="pre"
            sx={{
              backgroundColor: "rgba(29, 77, 7, 0.23)",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              mb: 2,
            }}
          >
{`#include <stdio.h>

struct Student {
    char name[20];
    int roll;
    float marks;
};

void display(struct Student s) {  // copy of s1 is received
    s.marks = 99.9f; // changes only local copy
    printf("Inside function: %s %d %.2f\\n", s.name, s.roll, s.marks);
}

int main() {
    struct Student s1 = {"Vishal", 101, 75.5};
    display(s1);
    printf("Outside function: %.2f\\n", s1.marks); // original not changed
    return 0;
}`}
          </Box>

          <Typography variant="subtitle1" sx={{ mb: 3 }}>
            <b>Output:</b><br />
            Inside function: Vishal 101 99.90<br />
            Outside function: 75.50
          </Typography>

          {/* Pass by Reference */}
          <Typography variant="h6" sx={{ mt: 3, color: "#1976d2" }}>
            2️⃣ Pass by Reference (Using Pointer)
          </Typography>

          <Typography sx={{ mb: 2, textAlign: "justify" }}>
            Here, we send the address of the structure. Changes made inside the
            function affect the original structure.
          </Typography>

          <Box
            component="pre"
            sx={{
              backgroundColor: "rgba(29, 77, 7, 0.23)",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              mb: 2,
            }}
          >
{`#include <stdio.h>

struct Student {
    char name[20];
    int roll;
    float marks;
};

void update(struct Student *s) {
    s->marks = 99.9f; // change original using pointer
}

int main() {
    struct Student s1 = {"Vishal", 101, 75.5};
    update(&s1); // send address
    printf("After update: %.2f\\n", s1.marks);
    return 0;
}`}
          </Box>

          <Typography variant="subtitle1" sx={{ mb: 3 }}>
            <b>Output:</b><br />
            After update: 99.90
          </Typography>

          {/* Return Structure */}
          <Typography variant="h6" sx={{ mt: 3, color: "#1976d2" }}>
            3️⃣ Return Structure from Function
          </Typography>

          <Typography sx={{ mb: 2, textAlign: "justify" }}>
            You can also return a structure from a function.
          </Typography>

          <Box
            component="pre"
            sx={{
              backgroundColor: "rgba(29, 77, 7, 0.23)",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
              mb: 2,
            }}
          >
{`struct Student getData() {
    struct Student s = {"Kumar", 102, 80.5};
    return s;
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

        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          Next ➡
        </Button>
      </Stack>
    </Box>
  );
};

export default StructureFunction;
