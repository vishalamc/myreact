import React from "react";
import { Typography, Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function String() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3, md: 5 },
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <Typography
        variant={isMobile ? "h5" : "h4"}
        gutterBottom
        color="primary"
        sx={{ textAlign: "center" }}
      >
        String in C
      </Typography>

      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        In C, a string is a sequence of characters enclosed in double quotes and stored in a character array, ending with the null character '\0'.
For example, "Hello" is a string.
We use strings to store information made of text, such as a student’s name, course name, subject name etc..
      </Typography>
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Declaration of string syntax:
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
        {`char string_name[size];`}
      </Box>
<Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Intialization of string syntax:
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
        {
        `char string_name[size]="string_value";`
         }
      </Box>
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        Example:
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
        {`#include <stdio.h>

int main() {
    char name[20]="kumar vishal";
    printf("%s",name);
    return 0;
}`}
      </Box>
       <Box
        component="pre"
        sx={{
          background: "rgba(29, 77, 7, 0.23)",
          padding: "10px",
          borderRadius: "5px",
          overflowX: "auto",
        }}
      >
        {`#include <stdio.h>

int main() {
    char name[20];
    name="kumar vishal";// It is not allowed here
    printf("%s",name);
    return 0;
}`}
      </Box>
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom color="primary">
        String as a Input from user
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
        {`#include <stdio.h>
#include <string.h>
int main()
{
    char name[20];
    printf("Enter Name\\n");
    fgets(name,sizeof(name),stdin);
    name[strcspn(name,"\\n")]='\0';
    printf("%s",name);

    return 0;

}`}
      </Box>
      <Box
        sx={{
          mt: 4,
          textAlign: isMobile ? "center" : "right",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/learnc/arraytypes")}
          size={isMobile ? "medium" : "large"}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
