import React from 'react';
import { Container, Typography } from '@mui/material';

const Introduction = () => {
    return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h5" gutterBottom color="primary">
        Why .Net?
      </Typography>
      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
      <ul>
    <li>
      .NET is a technology which provides us to develop different types of
      applications and services like console-based, window-based, web-based,
      mobile-based, cross-platform and cloud-based applications. We can also
      develop web services using .NET technology.
    </li>

    <li>.NET supports more than 60 programming languages.</li>

    <li>
      .NET provides a common environment for languages like C#, VB.NET and
      VC++. All these languages follow the same rules and can share code easily.
    </li>

    <li>
      .NET provides a rich Class Library containing thousands of reusable
      classes for file handling, database access, networking, UI, etc.
    </li>

    <li>
      .NET uses Garbage Collection to automatically free unused memory,
      preventing memory leaks and improving performance.
    </li>

    <li>
      .NET provides built-in security features like authentication and
      authorization to protect applications.
    </li>

    <li>
      .NET is fully object-oriented and supports encapsulation, inheritance,
      polymorphism, and abstraction.
    </li>

    <li>
      .NET allows multiple versions of an application to run without conflicts.
    </li>
  </ul>
      </Typography>

      <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
     The .Net Framework Class Library
      </Typography>
      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
       The Microsoft .NET Framework is a platform for building, deploying, and running Web Services and 
applications. 
   <ul>
    <li>
.NET Framework provides an execution environment, simplified development and 
deployment, and integration with a variety of programming languages, including Visual Basic and 
Visual C#. </li>

Two major components of .Net Framework are:
<li>.Net Class library and CLR </li>
<li>The .NET Framework Class Library (FCL) is a collection of pre-defined classes, interfaces, and methods 
that developers use to build applications quickly and efficiently. It is one of the most important 
components of the .NET Framework. </li>
<li>The FCL provides reusable code for common programming tasks such as input/output operations, file 
handling, database connectivity, string manipulation, collections, threading, networking, security, and 
GUI development. Instead of writing complex code, developers can simply use these built-in classes. 
For example, classes for file operations are available in the System.IO namespace, database 
connectivity in System.Data, and user interface controls in System.Windows.Forms or System.Web.
            </li></ul>
             </Typography>
  <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
     Working with the .Net FCL
      </Typography>
      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
	
	In VB.NET, working with the FCL is simple and efficient because VB.NET is fully integrated with the 
	.NET Framework. To use the FCL in VB.NET, the required namespace must be imported using the Imports keyword. 
	For example, Imports System allows access to basic classes like Console, String, and Math. Similarly, 
	Imports System.IO is used for file handling, and Imports System.Data is used for database operations. 
	Once a namespace is imported, developers can create objects of FCL classes and call their methods. 
	For example, the File and StreamReader classes are used to read files, while SqlConnection and SqlCommand help 
	in database connectivity. 
 <ul><li>Imports System </li></ul>
       	 <ul><li>Imports System </li></ul>
	 <ul><li>Imports System.Data</li></ul>
	<ul><li>Imports System.Data.SqlClient</li></ul>
	<ul><li>Dim con AS SqlConnection</li></ul>
    Here, con is object and SqlConnection is a Class for Database connection. If we want to use Database 
connectivity in our application then first of all we need to call the Namespace System.Data.SqlClient 
so, this namespace is available in Framework class Library.  
     </Typography>
       <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
     Namespaces
      </Typography>
      <Typography variant="body1" color="text.secondary" align="justify" paragraph>
A namespace in .NET is a collection of classes, methods, properties, events etc.. It is just like package 
in Java. It also helps to organize large programs and avoids name conflicts between classes that have 
the same name. For example, the System namespace contains basic classes like Console, String, and Math. The 
System.IO namespace contains classes related to file handling, while System.Data is used for database 
operations.
      </Typography>
        <Typography variant="h5" color="primary" gutterBottom sx={{ mt: 4 }}>
     Types of a .Net Namespace 
      </Typography>
        <Typography variant="body1" color="text.secondary" align="justify" paragraph>
.NET namespaces are mainly classified into two types: System define Namespaces and User-Defined 
Namespaces. 
<ui><li>System define Namespaces are built-in namespaces provided by Microsoft as part of the .NET 
Framework. These namespaces contain predefined classes for common tasks. Examples include 
System, System.IO, System.Data, System.Net, and System.Collections.  </li>
<li>
User-Defined Namespaces are created by developers to organize their own code. When an 
application becomes large, user-defined namespaces help group related classes and avoid naming 
conflicts. 
</li></ui>
      </Typography> 

  </Container>
   );
 };
 
export default Introduction;