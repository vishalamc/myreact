// src/pages/PracticePrograms.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Collapse,
  Card,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const practiceData = [
  {
    topic: "Chapter-1",
    programs: [
      {
        question: "1.Write a C program to display “Hello World” on the user screen.",
        answer: `#include <stdio.h>
int main() {
    printf("Hello, World");
    return 0;
}`,
      },
      {
        question: "2.Write a C program to display your name on the user screen.",
        answer: `#include <stdio.h>
int main() {
    printf("kumar vishal");
    return 0;
}`,
      },
      {
        question: "3. Write a C program to take the details of a student (name, roll number, marks and grade) and display them on the screen.",
        answer: `#include <stdio.h>
int main() {
    char name[20];
    int rollno;
    float marks;
    char grade;
    
    printf("Enter Name\\n");
    fgets(name,sizeof(name),stdin);
    name[strcspn(name,"\\n")]='\0';
    printf("Enter Roll Number\\n");
    scanf("%d",&rollno);
    printf("Enter Marks\\n");
    scanf("%f",&marks);
    getchar();  // remove the '\\n' from buffer
    printf("Enter Grade\\n");
    grade=getchar();
    printf("Name:%s",name);
    printf("\\n Roll:%d",rollno);
    printf("\\n Marks:%.2f",marks);
    printf("\\n Grade:%c",grade);

    return 0;
}`,
      },
      {
        question: "4. Write a C program to take any character from the user and display its ASCII value on the screen.",
        answer: `#include <stdio.h>
int main() {
    char input;
    printf("Enter any character\\n");
    input=getchar();
    printf("ASCII Value: %d",input);
    
   return 0;
}`,
     },
     {
        question: "5. Write a C program to calculate the area of a rectangle.",
        answer: `#include <stdio.h>
int main() {
    
    float length, breadth, area;
    printf("Enter the length of the rectangle: ");
    scanf("%f", &length);
    printf("Enter the breadth of the rectangle: ");
    scanf("%f", &breadth);
    area = length * breadth;
    printf("The area of the rectangle is: %.2f", area);

   return 0;
}`,
      },
      {
        question: "6. Write a C program to calculate the area of a circle.",
        answer: `#include <stdio.h>
int main() {
    
    float radius, area;
    const float PI = 3.14f;  
    printf("Enter the radius of the circle: ");
    scanf("%f", &radius);
    area = PI * radius * radius;
    printf("The area of the circle is: %.2f", area);

   return 0;
}`,
      },

      {
        question: "7. Write a C program to calculate simple interest.",
        answer: `#include <stdio.h>
int main() {
    
    float p, r, t, si;
    printf("Enter the principal amount: ");
    scanf("%f", &p);
    printf("Enter the rate of interest: ");
    scanf("%f", &r);
    printf("Enter the time (in years): ");
    scanf("%f", &t);
    si = (p * r * t) / 100;
    printf("The Simple Interest is: %.2f", si);

   return 0;
}`,
      },
      {
         question: `8. Write a C program to calculate the electricity bill using the following conditions:
For the first 100 units → ₹6.50 per unit
For units above 100 → ₹9.00 per unit
Calculate the bill according to the meter reading.`,
         answer: `#include <stdio.h>
int main() {
    
     int units;
    float bill;
    printf("Enter the number of units consumed: ");
    scanf("%d", &units);

    if (units <= 100)
    {
        bill = units * 6.50;
    } 
    else 
    {
        int extraunits = units - 100;
        bill = (100 * 6.50) + (extraunits * 9.00);
    }

    printf("Electricity Bill = %.2f Rs", bill);

   return 0;
}`,
      },
      {
        question: `9. Write a C program to check a person’s age. If the age is 18 or more, 
display that the person is eligible to vote; otherwise, display that the person is not eligible to vote.
`,
answer: `#include <stdio.h>
int main() {
    
   int age;
    printf("Enter your age: ");
    scanf("%d", &age);

    if (age >= 18) {
        printf("You are eligible to vote.");
    } else {
        printf("You are not eligible to vote.");
    }

   return 0;
}`,

      }
      
    ],
  },
  
];

const PracticePrograms = () => {
  const [openTopic, setOpenTopic] = useState(null);
  const [showAnswer, setShowAnswer] = useState({});

  const toggleTopic = (index) => {
    setOpenTopic(openTopic === index ? null : index);
  };

  const toggleAnswer = (key) => {
    setShowAnswer((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom >
        List of C Programs
      </Typography>

      <List>
        {practiceData.map((topicItem, index) => (
          <Box key={index}>
            <ListItem disablePadding>
              <Button
                fullWidth
                onClick={() => toggleTopic(index)}
                sx={{
                  justifyContent: "space-between",
                  textTransform: "none",
                  backgroundColor: "#f0f0f0",
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText primary={topicItem.topic} />
                {openTopic === index ? <ExpandLess /> : <ExpandMore />}
              </Button>
            </ListItem>

            <Collapse in={openTopic === index} timeout="auto" unmountOnExit>
              <Box sx={{ ml: 2 }}>
                {topicItem.programs.map((prog, progIndex) => {
                  const key = `${index}-${progIndex}`;
                  return (
                    <Card sx={{ p: 2, mb: 2 }} key={key}>
                      <Typography variant="subtitle1">{prog.question}</Typography>
                      <Button
                        variant="outlined"
                        sx={{ mt: 1 }}
                        onClick={() => toggleAnswer(key)}
                      >
                        {showAnswer[key] ? "Hide Answer" : "Show Answer"}
                      </Button>
                      {showAnswer[key] && (
                        <Box
                          sx={{
                            mt: 1,
                            p: 1,
                            backgroundColor: "#e0e0e0",
                            borderRadius: 1,
                          }}
                        >
                          <pre>{prog.answer}</pre>
                        </Box>
                      )}
                    </Card>
                  );
                })}
              </Box>
            </Collapse>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default PracticePrograms;
