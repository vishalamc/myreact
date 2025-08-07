import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardContent,
  IconButton,
  Grid,
  Box,
  Button
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const initialCodeLines = [
  "int main() {",
  "  int arr[5] = {1, 2, 3, 4, 5};",
  "  for(int i = 0; i < 5; i++) {",
  "    printf(\"%d\\n\", arr[i]);",
  "  }",
  "  return 0;",
  "}"
];

const DraggableCodeLine = ({ line, index, moveLine }) => {
  const ref = React.useRef(null);

  const [, drop] = useDrop({
    accept: "line",
    hover(item) {
      if (item.index === index) return;
      moveLine(item.index, index);
      item.index = index;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: "line",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  });

  drag(drop(ref));

  return (
    <Card
      ref={ref}
      style={{
        marginBottom: "8px",
        opacity: isDragging ? 0.5 : 1,
        cursor: "move"
      }}
    >
      <CardContent style={{ fontFamily: "monospace" }}>{line}</CardContent>
    </Card>
  );
};

const CodeArrangeGame = () => {
  const [codeLines, setCodeLines] = useState(() => shuffle([...initialCodeLines]));
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const moveLine = (from, to) => {
    const updated = update(codeLines, {
      $splice: [
        [from, 1],
        [to, 0, codeLines[from]]
      ]
    });
    setCodeLines(updated);
  };

  const checkAnswer = () => {
    const trimmedUserCode = codeLines.map((line) => line.trim());
    const trimmedCorrectCode = initialCodeLines.map((line) => line.trim());

    if (JSON.stringify(trimmedUserCode) === JSON.stringify(trimmedCorrectCode)) {
      setFeedback("✅ Well done! Code is in correct order.");
    } else {
      setFeedback("❌ Incorrect order. Try again.");
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <AppBar position="static" color="success">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate("/gamedashboard")}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6">Arrange the C Code</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ bgcolor: "#e3f2fd", borderLeft: "6px solid #1976d2" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom><b>🧩 Problem Statement:</b></Typography>
                <Typography variant="body1" align="justify">
                  You are given a jumbled set of lines from a simple C program that initializes a one-dimensional array and prints its elements using a loop. <br /><br />
                  <b>Your Task:</b> Drag and rearrange the code lines so they form a valid and logically correct C program. The program uses a <code>for</code> loop to iterate through the array and print each element. Ensure correct use of braces and syntax. <br /><br />
                  Click the <b>“Check Order”</b> button to verify your answer. Try multiple times until you get it right!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            {codeLines.map((line, index) => (
              <DraggableCodeLine
                key={index}
                index={index}
                line={line}
                moveLine={moveLine}
              />
            ))}

            <Button
              onClick={checkAnswer}
              variant="contained"
              fullWidth
              sx={{ mt: 2, py: 1.5 }}
              color="success"
            >
              Check Result
            </Button>

            {feedback && (
              <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                {feedback}
              </Typography>
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>
              🔍 Your Order:
            </Typography>
            <Box sx={{ bgcolor: '#f5f5f5', p: 2, borderRadius: 2 }}>
              {codeLines.map((line, index) => (
                <Typography key={index} sx={{ fontFamily: 'monospace' }}>
                  {line}
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box component="footer" sx={{ p: 2, textAlign: 'center', bgcolor: 'primary.main', color: 'white' }}>
        <Typography variant="body2">© 2025 GyanManthan Gurukul. All Rights Reserved.</Typography>
      </Box>
    </DndProvider>
  );
};

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

export default CodeArrangeGame;
