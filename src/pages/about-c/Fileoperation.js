import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Fileoperation = () => {
  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
        File Operations in C
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        File operations in C include writing data to a file and reading data from a file.
        Both operations follow four main steps:
        <br />
        (1) Declare a file pointer  
        <br />
        (2) Open the file  
        <br />
        (3) Perform operations  
        <br />
        (4) Close the file  
      </Typography>

      {/* Section 1 - Writing to a File */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            1. Writing to a File
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Steps:
            <br />1. Declare a file pointer  
            <br />2. Open the file  
            <br />3. Perform operations  
            <br />4. Close the file  
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto",
            }}
          >
{`#include <stdio.h>

int main() 
{
    FILE *fp;
    // Open file in write mode
    fp = fopen("write.txt", "w");

    if (fp == NULL) {
        printf("Error opening file!");
        return 1;
    }

    // Writing text into the file
    fprintf(fp, "This is a text file.\\n");
    fprintf(fp, "File handling in C.\\n");

    // Closing the file
    fclose(fp);

    printf("Data written successfully!");

    return 0;
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Section 2 - Reading from a File */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            2. Reading from a File
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            Steps:
            <br />1. Declare a file pointer  
            <br />2. Open the file  
            <br />3. Perform operations  
            <br />4. Close the file  
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto",
            }}
          >
{`#include <stdio.h>

int main() {
    FILE *fp;
    char line[100];

    // Open the existing file write.txt in read mode
    fp = fopen("write.txt", "r");

    if (fp == NULL) {
        printf("File not found!");
        return 1;
    }

    printf("Contents of File:\\n");

    // Read the file line by line
    while (fgets(line, sizeof(line), fp)) {
        printf("%s", line);
    }

    // Close the file
    fclose(fp);

    return 0;
}`}
          </pre>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="contained" component={Link}
                  to="/learnc/filehandling" color="primary">Back</Button>
        <Button variant="contained" component={Link}
                  to="/learnc/sequentialrandom" color="primary">Next</Button>
      </Box>
    </Box>
  );
};

export default Fileoperation;
