import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Structure = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: { xs: 2, sm: 4 },
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#2e3b55",
          textAlign: "center",
        }}
      >
        User Defined Data Types in C: Structure, Union, and Enum
      </Typography>

      {/* Structure Explanation */}
      <Card sx={{ mb: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2, color: "#1976d2" }}>
            Structure
          </Typography>

          <Typography sx={{ mb: 2, textAlign: "justify" }}>
            A <b>structure</b> is a user-defined data type that allows you to group
            different types of variables together. Unlike arrays (which store only
            similar data types), structures can store variables of different data
            types together. Each member has its own memory and is accessed using
            the dot (<b>.</b>) operator through the structure variable.
          </Typography>

          {/* Syntax */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Syntax:
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
{`struct StructureName 
{
    data_type structure_member1;
    data_type structure_member2;
    ...
    data_type structure_memberN;
};`}
          </Box>

          {/* Example */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Example:
          </Typography>

          <Box
            component="pre"
            sx={{
              backgroundColor: "rgba(29, 77, 7, 0.23)",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
            }}
          >
{`// Defining a structure
struct Student {
    int rollNo;
    char name[50];
    float marks;
};

// Declaring a structure variable
struct Student s1; // here s1 is structure variable

// Assigning values
s1.rollNo = 101;`}
          </Box>

          {/* Complete Code */}
          <Typography variant="h6" sx={{ mt: 2 }}>
            Complete Code:
          </Typography>

          <Box
            component="pre"
            sx={{
              backgroundColor: "rgba(29, 77, 7, 0.23)",
              p: 2,
              borderRadius: 1,
              overflowX: "auto",
              fontSize: { xs: "0.8rem", sm: "0.9rem" },
            }}
          >
{`#include <stdio.h>
#include <string.h>

struct Student
{
   char name[20];
   int roll;
   float marks;
};

int main()
{
    struct Student s1;

    printf("Enter name\\n");
    fgets(s1.name, sizeof(s1.name), stdin);
    s1.name[strcspn(s1.name, "\\n")] = '\\0';

    printf("Enter Roll\\n");
    scanf("%d", &s1.roll);

    printf("Enter Marks\\n");
    scanf("%f", &s1.marks);

    printf("Student Records:\\n");
    printf("Name: %s", s1.name);
    printf("\\nRoll: %d", s1.roll);
    printf("\\nMarks: %.2f", s1.marks);

    return 0;
}`}
          </Box>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
           <Box display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary" onClick={() => navigate('/learnc/structurefunction')}>
                Next
              </Button>
            </Box>
    </Box>
  );
};

export default Structure;
