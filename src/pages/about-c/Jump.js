import React from "react";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CodeBlock = ({ code }) => (
  <Paper
    elevation={3}
    sx={{
      backgroundColor: "rgba(29, 77, 7, 0.23)",
      padding: "10px",
      overflowX: "auto",
      fontFamily: "monospace",
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
    }}
  >
    {code}
  </Paper>
);

const Jump = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom color="primary">
        Jumping Statements in C
      </Typography>
      <Typography variant="body1" paragraph>
        Jumping statements in C are used to transfer control from one part of
        the program to another. They also allow you to skip parts of code.
        <b>There are different types of Jumping Statements in C:</b>  
      </Typography>

      {/* break */}
      <Typography variant="h6" gutterBottom>
        <b>1. break</b>
      </Typography>
      <Typography variant="body1" paragraph>
        The <b>break</b> statement is used to terminate loop or <code>switch case</code> immediately.
      </Typography>
      <CodeBlock
        code={`#include <stdio.h>
int main() {
    for(int i = 1; i <= 5; i++) {
        if(i == 3) break;
        printf("%d\\n", i);
    }
    return 0;
}`}
      />
      <Typography variant="body2" paragraph>
        <b>Output:</b>
        <br />
        1
        <br />
        2
      </Typography>

      {/* continue */}
      <Typography variant="h6" gutterBottom>
       <b>2. continue</b> 
      </Typography>
      <Typography variant="body1" paragraph>
        The <b>continue</b> statement skips the remaining statements in the
        current iteration and moves to the next iteration.
      </Typography>
      <CodeBlock
        code={`#include <stdio.h>
int main() {
    for(int i = 1; i <= 5; i++) {
        if(i == 3) continue;
        printf("%d\\n", i);
    }
    return 0;
}`}
      />
      <Typography variant="body2" paragraph>
       <b>Output:</b>
        <br />
        1
        <br />
        2
        <br />
        4
        <br />
        5
      </Typography>

      {/* goto */}
      <Typography variant="h6" gutterBottom>
        <b>3. goto</b>
      </Typography>
      <Typography variant="body1" paragraph>
        The <b>goto</b> statement transfers control to a labeled statement.
       </Typography>
      <CodeBlock
        code={`#include <stdio.h>
int main() {
    int num = 2;
    if(num == 2) goto label;
    printf("This will be skipped\\n");
label:
    printf("Jumped here using goto\\n");
    return 0;
}`}
      />
      <Typography variant="body2" paragraph>
        <b>Output</b>:
        <br />
        Jumped here using goto
      </Typography>

      {/* return */}
      <Typography variant="h6" gutterBottom>
        <b>4. return</b>
      </Typography>
      <Typography variant="body1" paragraph>
        The <b>return</b> statement exits from a function and optionally
        returns a value.
      </Typography>
      <CodeBlock
        code={`#include <stdio.h>
int add(int a, int b) {
    return a + b;
}
int main() {
    printf("%d\\n", add(3,4));
    return 0;
}`}
      />
      <Typography variant="body2" paragraph>
        <b>Output:</b>
        <br />
        7
      </Typography>

      {/* exit */}
      <Typography variant="h6" gutterBottom>
        <b>5.exit()</b>
      </Typography>
      <Typography variant="body1" paragraph>
        The <b>exit()</b> function terminates the program immediately. It Requires header file:{" "}
        <code>#include &lt;stdlib.h&gt;</code>.
      </Typography>
      <CodeBlock
        code={`#include <stdio.h>
#include <stdlib.h>
int main() {
    printf("Start\\n");
    exit(0);
    printf("This will not be executed\\n");
    return 0;
}`}
      />
      <Typography variant="body2" paragraph>
        <b>Output:</b>
        <br />
        Start
      </Typography>

      {/* Navigation buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
        }}
      >
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Back
        </Button>
        </Box>
    </Container>
  );
};

export default Jump;
