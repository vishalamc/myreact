import React from "react";
import { Container, Typography, Paper, Box, Grid } from "@mui/material";

function OptionalArguments() {
  return (
    <Container maxWidth="md">

      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Typography
            variant="h6"
            color="primary"
            gutterBottom
            sx={{ fontSize: { xs: "28px", md: "34px" } }}
          >
            Optional Arguments in VB.NET
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography align="justify">
          Optional arguments in VB.NET are parameters that are not necessary to provide when calling a method or function.
If a value is not given for the optional argument, VB.NET automatically uses the default value specified in the method.
          </Typography>
        </Grid>

        {/* Syntax Section */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Syntax
          </Typography>

          <Paper elevation={3}>
            <Box
              p={2}
              sx={{
                overflowX: "auto",
                backgroundColor: "#f5f5f5",
                fontSize: { xs: "13px", md: "15px" }
              }}
            >
              <pre>
{`Sub FunctionName(ByVal parameter1 As DataType,
Optional ByVal parameter2 As DataType = defaultValue)

   ' statements

End Sub`}
              </pre>
            </Box>
          </Paper>
        </Grid>

        {/* Example 1 */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Example 1
          </Typography>

          <Paper elevation={3}>
            <Box
              p={2}
              sx={{
                overflowX: "auto",
                backgroundColor: "#f5f5f5"
              }}
            >
              <pre>
{`Module Module1

Sub DisplayMessage(Optional ByVal name As String = "User")

    Console.WriteLine("Hello " & name)

End Sub

Sub Main()

    DisplayMessage("Vishal")
    DisplayMessage()

End Sub

End Module`}
              </pre>
            </Box>
          </Paper>
        </Grid>

        {/* Example 2 */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Example 2
          </Typography>

          <Paper elevation={3}>
            <Box
              p={2}
              sx={{
                overflowX: "auto",
                backgroundColor: "#f5f5f5"
              }}
            >
              <pre>
{`Sub AddNumbers(ByVal a As Integer,
Optional ByVal b As Integer = 10)

    Dim result As Integer
    result = a + b

    Console.WriteLine("Result = " & result)

End Sub`}
              </pre>
            </Box>
          </Paper>
        </Grid>

        {/* Advantages */}
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Advantages
          </Typography>

          <ul>
            <li>Reduces the number of overloaded functions.</li>
            <li>Provides default values for parameters.</li>
            <li>Makes functions easier to use.</li>
          </ul>
        </Grid>

      </Grid>
    </Container>
  );
}

export default OptionalArguments;