import React from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const Vbbasic = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
 <Typography variant="h5" gutterBottom color="primary">
        Data Types in VB.NET
      </Typography>

      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
        VB.NET data types are classified into:
        <ol>
          <li>Value Data Types</li>
          <li>Reference Data Types</li>
          <li>User-Defined Data Types</li>
        </ol>
      </Typography>

      {/* Value Data Types */}
      <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
        1. Value Data Types
      </Typography>

      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
        Value data types store the actual value directly in memory.
        <ul>
          <li>Numeric Data Types (Integer, Double, Decimal, etc.)</li>
          <li>Boolean Data Type (True or False)</li>
          <li>Character Data Type (Char)</li>
          <li>Date Data Type (Stores date and time)</li>
        </ul>
      </Typography>

      {/* Reference Data Types */}
      <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
        2. Reference Data Types
      </Typography>

      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
        Reference data types store the reference (address) of the value.
        <ul>
          <li>String Data Type</li>
          <li>Object Data Type</li>
          <li>Array</li>
        </ul>
      </Typography>

      {/* User Defined Data Types */}
      <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
        3. User-Defined Data Types
      </Typography>

      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
        User-defined data types are created by programmers to store related data.
        <ul>
           <li>Structure</li>
          <li>Enumeration (Enum)</li>
           <li>Class</li>
        </ul>
      </Typography>
      {/* VALUE DATA TYPES */}
      <Typography variant="h5" gutterBottom color="primary">
        Value Data Types
      </Typography>

      {/* Numeric Data Types */}
      <Typography variant="h6" sx={{ mt: 3 }} color="secondary">
        (a) Numeric Data Types
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Data Type</b></TableCell>
              <TableCell><b>Size</b></TableCell>
              <TableCell><b>Description</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              ["Byte", "1 byte", "Stores numbers 0–255"],
              ["Short", "2 bytes", "Small integers"],
              ["Integer", "4 bytes", "Whole numbers"],
              ["Long", "8 bytes", "Large integers"],
              ["Single", "4 bytes", "Decimal values"],
              ["Double", "8 bytes", "High-precision decimals"],
              ["Decimal", "16 bytes", "Financial calculations"]
            ].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                <TableCell>{row[2]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Boolean */}
      <Typography variant="h6" sx={{ mt: 4 }} color="secondary">
        (b) Boolean Data Type
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Data Type</b></TableCell>
              <TableCell><b>Size</b></TableCell>
              <TableCell><b>Description</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Boolean</TableCell>
              <TableCell>1 byte</TableCell>
              <TableCell>Stores True or False</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b> Dim result As Boolean = True
      </Typography>

      {/* Character */}
      <Typography variant="h6" sx={{ mt: 4 }} color="secondary">
        (c) Character Data Type
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Data Type</b></TableCell>
              <TableCell><b>Size</b></TableCell>
              <TableCell><b>Description</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Char (Character)</TableCell>
              <TableCell>2 bytes</TableCell>
              <TableCell>Stores a single Unicode character</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b> Dim grade As Char = "A"c
      </Typography>

      <Typography>
        <b>Note:</b><br />
        • Double quotes " " are used for String and Char <br />
        • Single quote ' is used for comments
      </Typography>

      {/* Date */}
      <Typography variant="h6" sx={{ mt: 4 }} color="secondary">
        (d) Date Data Type
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Data Type</b></TableCell>
              <TableCell><b>Size</b></TableCell>
              <TableCell><b>Description</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>8 bytes</TableCell>
              <TableCell>Stores date and time values</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b> Dim today As Date = Date.Now
      </Typography>

      {/* REFERENCE DATA TYPES */}
      <Typography variant="h5" gutterBottom color="primary" sx={{ mt: 5 }}>
        Reference Data Types
      </Typography>

      {/* String */}
      <Typography variant="h6" sx={{ mt: 3 }} color="secondary">
        (a) String Data Type
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Data Type</b></TableCell>
              <TableCell><b>Size</b></TableCell>
              <TableCell><b>Explanation</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>String</TableCell>
              <TableCell>Variable</TableCell>
              <TableCell>Depends on number of characters</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b> Dim name As String = "Kumar Vishal"
      </Typography>

      {/* Object */}
      <Typography variant="h6" sx={{ mt: 4 }} color="secondary">
        (b) Object Data Type
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
             <TableHead>
            <TableRow>
              <TableCell><b>Data Type</b></TableCell>
              <TableCell><b>Size</b></TableCell>
              <TableCell><b>Explanation</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Object</TableCell>
              <TableCell>Variable</TableCell>
              <TableCell>Depends on stored data type</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ mt: 2 }}>
        <b>Example:</b><br />
        Dim data As Object = 100 <br />
        data = "Hello"
      </Typography>

      {/* Array */}
      <Typography variant="h6" sx={{ mt: 4 }} color="secondary">
        (c) Array
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
             <TableHead>
            <TableRow>
              <TableCell><b>Data Type</b></TableCell>
              <TableCell><b>Size</b></TableCell>
              <TableCell><b>Explanation</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Array</TableCell>
              <TableCell>Variable</TableCell>
              <TableCell>Depends on number of elements</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Typography sx={{ mt: 2 }}>
        <b>Example:</b> Dim marks(4) As Integer
      </Typography>
{/* USER DEFINED DATA TYPES */}
<Typography variant="h5" gutterBottom color="primary" sx={{ mt: 6 }}>
  3. User-Defined Data Types
</Typography>

{/* Structure */}
<Typography variant="h6" sx={{ mt: 3 }} color="secondary">
  Structure
</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
  A Structure is used to group related variables of different data types.
</Typography>

<TableContainer component={Paper} sx={{ mt: 2 }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><b>Feature</b></TableCell>
        <TableCell><b>Description</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Purpose</TableCell>
        <TableCell>Groups related variables</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Type</TableCell>
        <TableCell>Value Type</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Usage</TableCell>
        <TableCell>Used for small data collections</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

<Typography sx={{ mt: 2 }}>
  <b>Example:</b>
</Typography>

<Paper sx={{ p: 2, mt: 1, backgroundColor: "#f5f5f5" }}>
  <pre style={{ margin: 0 }}>
{`Structure Student
    Public RollNo As Integer
    Public Name As String
    Public Marks As Double
End Structure`}
  </pre>
</Paper>

{/* Class */}
<Typography variant="h6" sx={{ mt: 4 }} color="secondary">
  Class
</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
  A class is a collection of data members and member methods.
</Typography>

<TableContainer component={Paper} sx={{ mt: 2 }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><b>Feature</b></TableCell>
        <TableCell><b>Description</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Purpose</TableCell>
        <TableCell>Represents real-world objects</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Type</TableCell>
        <TableCell>Reference Type</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Contains</TableCell>
        <TableCell>Data members and methods</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

<Typography sx={{ mt: 2 }}>
  <b>Example:</b>
</Typography>

<Paper sx={{ p: 2, mt: 1, backgroundColor: "#f5f5f5" }}>
  <pre style={{ margin: 0 }}>
{`Class Employee
    Public EmpId As Integer
    Public EmpName As String
End Class`}
  </pre>
</Paper>

{/* Enum */}
<Typography variant="h6" sx={{ mt: 4 }} color="secondary">
  Enum (Enumeration)
</Typography>

<Typography variant="body1" sx={{ mt: 1 }}>
  An Enum is used to define a group of named constants.
</Typography>

<TableContainer component={Paper} sx={{ mt: 2 }}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell><b>Feature</b></TableCell>
        <TableCell><b>Description</b></TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>Purpose</TableCell>
        <TableCell>Defines fixed named constants</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Type</TableCell>
        <TableCell>Value Type</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Usage</TableCell>
        <TableCell>Improves readability and avoids magic numbers</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</TableContainer>

<Typography sx={{ mt: 2 }}>
  <b>Example:</b>
</Typography>

<Paper sx={{ p: 2, mt: 1, backgroundColor: "#f5f5f5" }}>
  <pre style={{ margin: 0 }}>
{`Enum Days
    Sunday
    Monday
    Tuesday
    Wednesday
    Thursday
    Friday
    Saturday
End Enum`}
  </pre>
</Paper>
    </Container>
  );
};
export default Vbbasic;