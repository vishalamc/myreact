import React from "react";
import { Container, Typography, Paper } from "@mui/material";

const Vboop = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h5" color="primary" gutterBottom>
        Object-Oriented Features in VB.NET
      </Typography>
      <Typography variant="body1" paragraph align="justify" color="text.secondary">
        Object-Oriented Programming (OOP) is a programming paradigm that uses
        objects and classes to design applications. VB.NET is a fully
        object-oriented language that supports several OOP features such as
        encapsulation, inheritance, polymorphism, and abstraction.
      </Typography>
      <Typography variant="h6" color="primary">
        Main Object-Oriented Features
      </Typography>
      <Typography component="div">
        <ul>
          <li>Encapsulation</li>
          <li>Inheritance</li>
          <li>Polymorphism</li>
          <li>Abstraction</li>
        </ul>
      </Typography>
      {/* Encapsulation */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        1. Encapsulation
      </Typography>
      <Typography paragraph>
        Encapsulation is the process of binding data and methods together in a
        single unit called a class. It also helps in hiding the internal details
        of an object from the outside world.
      </Typography>

      <Typography><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Class Student
    Private marks As Integer

    Public Sub SetMarks(ByVal m As Integer)
        marks = m
    End Sub

    Public Function GetMarks() As Integer
        Return marks
    End Function
End Class`}
        </pre>
      </Paper>

      {/* Inheritance */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        2. Inheritance
      </Typography>

      <Typography paragraph>
        Inheritance allows one class to acquire the properties and methods of
        another class. The class that inherits is called the child class and the
        class being inherited is called the parent class.
      </Typography>

      <Typography><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Class Animal
    Public Sub Eat()
        MessageBox.show("Animal is eating")
    End Sub
End Class

Class Dog
    Inherits Animal
End Class`}
        </pre>
      </Paper>

      {/* Polymorphism */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        3. Polymorphism
      </Typography>

      <Typography paragraph>
        Polymorphism means the ability of an object to take many forms.
        In VB.NET, it is commonly achieved through method overriding.
      </Typography>

      <Typography><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`Class Shape
    Public Overridable Sub Draw()
        MessageBox.show("Drawing Shape")
    End Sub
End Class

Class Circle
    Inherits Shape

    Public Overrides Sub Draw()
        MessageBox.show("Drawing Circle")
    End Sub
End Class`}
        </pre>
      </Paper>

      {/* Abstraction */}
      <Typography variant="h6" color="secondary" sx={{ mt: 4 }}>
        4. Abstraction
      </Typography>

      <Typography paragraph>
        Abstraction means hiding the implementation details and showing only
        essential features of an object. It can be achieved using abstract
        classes or interfaces.
      </Typography>

      <Typography><b>Example:</b></Typography>

      <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
        <pre style={{ margin: 0 }}>
{`MustInherit Class Vehicle
    Public MustOverride Sub Start()
End Class

Class Car
    Inherits Vehicle

    Public Overrides Sub Start()
        MessageBox.show("Car Started")
    End Sub
End Class`}
        </pre>
      </Paper>

    </Container>
  );
};

export default Vboop;