import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CodeBlock = ({ children }) => (
  <Box
    component="pre"
    sx={{
      backgroundColor: "rgba(29, 77, 7, 0.23)",
      padding: 2,
      borderRadius: 2,
      overflowX: "auto",
      fontFamily: "monospace",
    }}
  >
    {children}
  </Box>
);

const SwitchCase = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, px: 2 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="primary">
        Switch-Case in C
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="body1" paragraph>
            When you want to choose one option from many possible options based
            on the value of a single expression go for <b>switch-case</b>.
            Especially used for menu-driven programs.
          </Typography>

          <Typography variant="h6">Syntax:</Typography>
          <CodeBlock>
{`switch (expression) {
    case constant1:
        // code if expression == constant1
        break;

    case constant2:
        // code if expression == constant2
        break;

    ...
    default:
        // code if no case matches
}`}
          </CodeBlock>

          <Typography variant="body2" sx={{ mt: 2 }}>
            <ul>
              <li><b>Expression</b>: Can be int, char, enum (NOT float or double).</li>
              <li><b>Case labels</b>: Must be constant or literal values (e.g., case 5:, case 'A':).</li>
              <li><b>break</b>: Stops the switch from running the next cases.</li>
              <li><b>default</b>: Runs when no case matches (optional).</li>
            </ul>
          </Typography>
        </CardContent>
      </Card>

      {/* Example 1 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Example 1:</Typography>
          <CodeBlock>
{`#include <stdio.h>
int main() {
    int day = 3;
    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        default:
            printf("Weekend\\n");
    }
    return 0;
}`}
          </CodeBlock>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Output: <b>Wednesday</b>
          </Typography>
        </CardContent>
      </Card>

      {/* Example 2 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Example 2 (No break):</Typography>
          <CodeBlock>
{`#include <stdio.h>
int main() {
    int x = 2;
    switch (x) {
        case 1:
            printf("One\\n");
        case 2:
            printf("Two\\n"); // no break here
        case 3:
            printf("Three\\n");
            break;
        default:
            printf("Other\\n");
    }
    return 0;
}`}
          </CodeBlock>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Output:  
            Two  
            Three  
            (No break → continues until break or end)
          </Typography>
        </CardContent>
      </Card>

      {/* Nested Switch */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Nested Switch Example:</Typography>
          <CodeBlock>
{`switch (a) {
    case 1:
        switch (b) {
            case 10:
                printf("a=1, b=10");
                break;
        }
        break;
}`}
          </CodeBlock>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/learnc/ifelse")}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/learnc/loops")}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default SwitchCase;
