import React from "react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Filehandling = () => {
  return (
    
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h4" color='primary' fontWeight="bold" gutterBottom>
        File Handling in C
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        File handling in C allows storing and accessing data permanently on the hard disk. 
        A file is a storage area on the hard disk where data remains saved even after the 
        program ends.
      </Typography>

      {/* Section 1 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Steps in File Handling
          </Typography>

          <Typography variant="body1" sx={{ mb: 2 }}>
            The steps involved in file handling are:
            <br />1. Declare a file pointer  
            <br />2. Open the file  
            <br />3. Perform read/write operations  
            <br />4. Close the file  
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto"
            }}
          >
{`FILE *fp;      // Step 1: Declare file pointer
fp = fopen("file.txt", "r");  // Step 2: Open the file

// Step 3: Perform operations
// Step 4: Close the file

fclose(fp);`}
          </pre>
        </CardContent>
      </Card>

      {/* Section 2 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Common File Handling Functions
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto"
            }}
          >
{`fopen()   - Open file
fclose()  - Close file
fprintf() - Write formatted data
fscanf()  - Read formatted data
fputc()   - Write a character
fgetc()   - Read a character
fputs()   - Write a string
fgets()   - Read a string
feof()    - Check end of file`}
          </pre>
        </CardContent>
      </Card>

      {/* Section 3 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            File Opening Modes
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto"
            }}
          >
{`"r"   - Read (file must exist)
"w"   - Write (creates new file or overwrites)
"a"   - Append (adds data at end)
"r+"  - Read + Write (file must exist)
"w+"  - Read + Write (new file, clears old data)
"a+"  - Read + Write (append + read)`}
          </pre>
        </CardContent>
      </Card>

      {/* Section 4 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Writing to a File
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto"
            }}
          >
{`FILE *fp = fopen("data.txt", "w");

fprintf(fp, "Hello World!");
fputs("C Programming", fp);
fputc('A', fp);

fclose(fp);`}
          </pre>
        </CardContent>
      </Card>

      {/* Section 5 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Reading from a File
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto"
            }}
          >
{`FILE *fp = fopen("data.txt", "r");

char ch = fgetc(fp);      
char str[50];
fgets(str, 50, fp);       
fscanf(fp, "%d", &num);   

fclose(fp);`}
          </pre>
        </CardContent>
      </Card>

      {/* Section 6 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Appending Data to a File
          </Typography>

          <pre
            style={{
              background: "#f5f5f5",
              padding: "16px",
              borderRadius: "8px",
              overflowX: "auto"
            }}
          >
{`FILE *fp = fopen("data.txt", "a");

fprintf(fp, "New Line Added!");
fputs("Append Text", fp);
fputc('\\n', fp);

fclose(fp);`}
          </pre>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button variant="contained" component={Link}
          to="/learnc/fileoperations" color="primary">Next</Button>
       
      </Box>
    </Box>
  );
};
export default Filehandling;