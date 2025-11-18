// src/pages/UnionStructure.js
import React from "react";
import { Box, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const UnionStructure = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" color='primary' fontWeight="bold" gutterBottom>
        Difference Between Structure and Union
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Structures and Unions are both user-defined data types in C, but they
        differ in how memory is allocated and how members are accessed.
      </Typography>
      {/* ------ Responsive Comparison Table ------ */}
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Feature</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Structure</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Union</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Keyword</TableCell>
              <TableCell>The keyword <b>struct</b> is used to define a structure.</TableCell>
              <TableCell>The keyword <b>union</b> is used to define a union.</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Size</TableCell>
              <TableCell>
                Memory is allocated for <b>each member separately</b>.  
                Size = sum of all members (or slightly more due to padding).
              </TableCell>
              <TableCell>
                Memory is allocated based on the <b>largest member only</b>.  
                Size = size of largest member.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Memory</TableCell>
              <TableCell>
                Each member has its <b>own unique memory location</b>.
              </TableCell>
              <TableCell>
                All members <b>share the same memory</b>.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Value Altering</TableCell>
              <TableCell>
                Changing one member does <b>not affect</b> others.
              </TableCell>
              <TableCell>
                Changing one member <b>overwrites</b> other members.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Accessing Members</TableCell>
              <TableCell>
                <b>Multiple members</b> can be accessed at a time.
              </TableCell>
              <TableCell>
                Only <b>one member</b> can contain a valid value at a time.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Initialization</TableCell>
              <TableCell>
                Multiple members can be <b>initialized together</b>.
              </TableCell>
              <TableCell>
                Only the <b>first member</b> can be initialized.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* ---- Navigation Buttons ---- */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="primary" href="/learnc/union">
          ⬅ Back
        </Button>
        <Button variant="contained" color="primary" href="/learnc/enum">
          Next ➡
        </Button>
      </Box>
    </Box>
  );
};

export default UnionStructure;