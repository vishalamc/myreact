import React from "react";
import { Typography, Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function StringFunctions() {
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
        String Manipulation Functions in C
      </Typography>

      <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
        C provides built-in library functions to manipulate strings. 
        These functions are declared in the <b>string.h</b> header file. 
       We can do string operations such as copying, concatenation, comparison, 
        finding length, and more.
      </Typography>

      {/* strlen() */}
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        1. strlen() – Find length of a string
      </Typography>
      <Typography variant="body1" paragraph>
        This function returns the number of characters in a string (excluding the null character).
      </Typography>
      <Box component="pre" sx={{
        background: "rgba(29, 77, 7, 0.23)",
        padding: "10px",
        borderRadius: "5px",
        overflowX: "auto",
      }}>
        {`#include <stdio.h>
#include <string.h>

int main() {
    char name[20] = "Vishal";
    int len = strlen(name);
    printf("Length = %d", len);
    return 0;
}`}
      </Box>

      {/* strcpy() */}
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        2. strcpy() – Copy one string to another
      </Typography>
      <Typography variant="body1" paragraph>
        Copies the content of one string to another. Destination string must be large length.
      </Typography>
      <Box component="pre" sx={{
        background: "rgba(29, 77, 7, 0.23)",
        padding: "10px",
        borderRadius: "5px",
        overflowX: "auto",
      }}>
        {`#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "Hello";
    char str2[20];
    strcpy(str2, str1);
    printf("Copied String: %s", str2);
    return 0;
}`}
      </Box>

      {/* strcat() */}
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        3. strcat() – Concatenate two strings
      </Typography>
      <Typography variant="body1" paragraph>
        Appends one string at the end of another string.
      </Typography>
      <Box component="pre" sx={{
        background: "rgba(29, 77, 7, 0.23)",
        padding: "10px",
        borderRadius: "5px",
        overflowX: "auto",
      }}>
        {`#include <stdio.h>
#include <string.h>

int main() {
    char str1[30] = "Hello ";
    char str2[10] = "World!";
    strcat(str1, str2);
    printf("%s", str1);
    return 0;
}`}
      </Box>

      {/* strcmp() */}
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        4. strcmp() – Compare two strings
      </Typography>
      <Typography variant="body1" paragraph>
        It Compares two strings which returns:
        <br />→ 0 if both strings are equal
        <br />→ &gt;0 if first string is greater
        <br />→ &lt;0 if second string is greater
      </Typography>
      <Box component="pre" sx={{
        background: "rgba(29, 77, 7, 0.23)",
        padding: "10px",
        borderRadius: "5px",
        overflowX: "auto",
      }}>
        {`#include <stdio.h>
#include <string.h>

int main() {
    char str1[20] = "abc";
    char str2[20] = "abd";
    int result = strcmp(str1, str2);
    if(result == 0)
        printf("Strings are equal");
    else
        printf("Strings are not equal");
    return 0;
}`}
      </Box>

      {/* strrev() */}
      <Typography variant={isMobile ? "h6" : "h5"} gutterBottom>
        5. strrev() – Reverse a string (will work in some compilers)
      </Typography>
      <Typography variant="body1" paragraph>
        This function reverses a string in place (will work in Turbo C). 
        For portability, you can write your own reverse function.
      </Typography>
      <Box component="pre" sx={{
        background: "rgba(29, 77, 7, 0.23)",
        padding: "10px",
        borderRadius: "5px",
        overflowX: "auto",
      }}>
        {`#include <stdio.h>
#include <string.h>

int main() {
    char str[20] = "Future";
    printf("Reversed: %s", strrev(str));
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
          onClick={() => navigate("/learnc/string")}
          size={isMobile ? "medium" : "large"}
        >
          Back
        </Button>
      </Box>
    </Box>
  );
}
