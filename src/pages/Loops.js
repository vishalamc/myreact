import React from "react";
import { Box, Typography, Button, Container, Paper } from "@mui/material";
import { Link } from "react-router-dom";

const CodeBox = ({ children }) => (
  <Box
    component={Paper}
    sx={{
      backgroundColor: "rgba(29, 77, 7, 0.23)",
      padding: "12px",
      fontFamily: "monospace",
      overflowX: "auto",
      border: "1px solid #ddd",
      marginBottom: "16px",
    }}
  >
    <pre>{children}</pre>
  </Box>
);

const Loop = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Loops in C
      </Typography>

      <Typography paragraph>
       A loop means repeating the same steps, which is called iteration. Loops are used to execute a block of code repeatedly until a certain
        condition is met.There are 3 main types of loops in C:{" "}
        <b>while, do-while,</b> and <b>for</b> loops.
      </Typography>

      {/* WHILE LOOP */}
      <Typography variant="h6" gutterBottom>
        1. while Loop
      </Typography>
      <Typography paragraph>
        Executes the code block <b>as long as</b> the condition is true. The
        condition is checked <b>before</b> the loop runs.
      </Typography>
      <CodeBox>{`#include <stdio.h>
int main() {
    int i = 1;
    while (i <= 5) {
        printf("%d\\n", i);
        i++;
    }
    return 0;
}`}</CodeBox>
      <Typography>Output:</Typography>
      <CodeBox>{`1
2
3
4
5`}</CodeBox>

      {/* DO-WHILE LOOP */}
      <Typography variant="h6" gutterBottom>
        2. do-while Loop
      </Typography>
      <Typography paragraph>
        Executes the code block <b>at least once</b> before checking the
        condition.
      </Typography>
      <CodeBox>{`#include <stdio.h>
int main() {
    int i = 1;
    do {
        printf("%d\\n", i);
        i++;
    } while (i <= 5);
    return 0;
}`}</CodeBox>

      {/* FOR LOOP */}
      <Typography variant="h6" gutterBottom>
        3. for Loop
      </Typography>
      <Typography paragraph>
        Used when you know <b>exactly how many times</b> to run the loop.
      </Typography>
      <CodeBox>{`#include <stdio.h>
int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d\\n", i);
    }
    return 0;
}`}</CodeBox>

      {/* NESTED LOOP */}
      <Typography variant="h6" gutterBottom>
        4. Nested Loops
      </Typography>
      <Typography paragraph>
        A loop inside another loop. Commonly used for 2D data or patterns.
      </Typography>
      <CodeBox>{`#include <stdio.h>
int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%d %d\\n", i, j);
        }
    }
    return 0;
}`}</CodeBox>

      {/* INFINITE LOOP */}
      <Typography variant="h6" gutterBottom>
        5. Infinite Loop
      </Typography>
      <Typography paragraph>
        Runs forever unless <b>break</b> is used.
      </Typography>
      <CodeBox>{`while(1) {
    printf("Hello\\n");
}`}</CodeBox>
<CodeBox>{`for(;;) {
    printf("Hello\\n");
}`}</CodeBox>
      {/* BREAK & CONTINUE */}
      <Typography variant="h6" gutterBottom>
        6. break and continue
      </Typography>
      <Typography paragraph>
        <b>break</b> exits the loop immediately. <b>continue</b> skips the rest
        of the loop body and moves to the next iteration.
      </Typography>
      <CodeBox>{`#include <stdio.h>
int main() {
    for (int i = 1; i <= 5; i++) {
        if (i == 3) continue;
        if (i == 5) break;
        printf("%d\\n", i);
    }
    return 0;
}`}</CodeBox>

      {/* NAVIGATION */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/home/switchcase"
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/home/jumpingstatements"
        >
          Next
        </Button>
      </Box>
    </Container>
  );
};

export default Loop;
