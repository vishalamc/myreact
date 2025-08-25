import React from 'react';
import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Introduction = () => {
  const versionData = [
    { name: "K&R C", standard: "(Before ANSI)", year: "1978", features: "First version in the book by Kernighan & Ritchie" },
    { name: "ANSI C / C89", standard: "ANSI X3.159-1989", year: "1989", features: "First standardized version by ANSI" },
    { name: "C90", standard: "ISO/IEC 9899:1990", year: "1990", features: "International standard version of ANSI C" },
    { name: "C95", standard: "ISO/IEC 9899:1990/AMD1", year: "1995", features: "Minor revision, added wchar_t" },
    { name: "C99", standard: "ISO/IEC 9899:1999", year: "1999", features: "inline, // comments, long long int, stdint.h" },
    { name: "C11", standard: "ISO/IEC 9899:2011", year: "2011", features: "Multithreading, _Atomic, safer functions" },
    { name: "C17", standard: "ISO/IEC 9899:2018", year: "2018", features: "Bug fixes and clarifications" },
    { name: "C23 (latest)", standard: "ISO/IEC 9899:2024", year: "2024", features: "Improved Unicode, new attributes, type inference" },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom color="primary">
        C Programming Introduction
      </Typography>
      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
        C is a general-purpose, procedural programming language developed by Dennis Ritchie in 1972 at Bell Laboratories.
        C is a procedural programming language, which means it follows a step-by-step approach and uses functions to perform tasks.
        It is known for its speed, efficiency, and closeness to hardware, which makes it a used for creating system-level programming like operating systems, embedded systems, and compilers.
        Programs in C are written using English-like statements and can be run on almost any computer, making it a portable language.
        It has a small set of keywords and supports data types, loops, conditions, arrays, functions, and pointers.
      </Typography>

      <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
        History of C Programming
      </Typography>
      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
        The root of all modern languages is ALGOL (Algorithmic Language). ALGOL was the first computer programming language to use a block structure, and it was introduced in 1960.
        In 1967, Martin Richards developed a language called BCPL (Basic Combined Programming Language), which was derived from ALGOL.
        In 1970, Ken Thompson created a language using BCPL called B. Both BCPL and B programming languages were type-less.
        After that, C was developed using BCPL and B by Dennis Ritchie at Bell Labs in 1972.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        C Language Versions
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'rgba(29, 77, 7, 0.23)' }}>
              <TableCell><strong>Version Name</strong></TableCell>
              <TableCell><strong>Official Standard</strong></TableCell>
              <TableCell><strong>Year</strong></TableCell>
              <TableCell><strong>Key Features/Changes</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {versionData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.standard}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.features}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Introduction;
