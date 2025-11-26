import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";

const Sequentialrandom = () => {
  return (
    <Box sx={{ p: 2 }}>
      {/* Page Title */}
      <Typography
        color="primary"
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Sequential Vs Random Access Files in C
      </Typography>

      <Card
        elevation={4}
        sx={{
          p: 2,
          maxWidth: "900px",
          mx: "auto",
          borderRadius: 3,
        }}
      >
        <CardContent>
          {/* Section 1 */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            1. Sequential Access Files
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            In <b>sequential access</b>, data is read or written <b>one by one in order</b>, 
            starting from the beginning of the file to the end.  
            Common functions used are: <b>fgetc(), fgets(), fprintf(), fscanf()</b>.
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
          >
            Example:
          </Typography>

          {/* Code Block */}
          <Box
            sx={{
              mt: 1,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
{`//Sequential Access File Example
#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *fp;
    char name[20], line[100];
    int age, choice;

    do {
        printf("\\n*****SELECT CHOICE*****\\n");
        printf("1. Write Data to File\\n");
        printf("2. Read Data from File\\n");
        printf("3. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {

        case 1:
            fp = fopen("Student.txt", "a");
            if (fp == NULL) {
                printf("Error\\n");
                return 1;
            }

            printf("Enter name and age: ");
            scanf("%s %d", name, &age);
            fprintf(fp, "Name: %s\\nAge: %d\\n", name, age);
            fclose(fp);
            printf("Data written successfully!\\n");
            break;

        case 2:
            fp = fopen("student.txt", "r");
            if (fp == NULL) {
                printf("Error\\n");
                return 1;
            }

            printf("\\n----- File Content -----\\n");
            while (fgets(line, sizeof(line), fp) != NULL) {
                printf("%s", line);
            }
            fclose(fp);
            printf("\\n------------------------\\n");
            break;

        case 3:
            printf("Exiting program\\n");
            exit(0);

        default:
            printf("Please try again.\\n");
        }

    } while (1);

    return 0;
}`}
          </Box>

          {/* Section 2 */}
          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4, mb: 2 }}>
            2. Random Access Files
          </Typography>

          <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
            In <b>random access</b>, you can directly jump to any part of the file 
            without reading previous data.  
            Important functions: <b>fseek(), ftell(), rewind()</b>.
          </Typography>

          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            fseek() Syntax:
          </Typography>

          <Box
            sx={{
              mt: 1,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
            {`fseek(file_pointer, offset, position);`}
          </Box>

          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Position Options:
          </Typography>

          <Box
            sx={{
              mt: 1,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
{`SEEK_SET → Beginning of file
SEEK_CUR → Current position
SEEK_END → End of file`}
          </Box>

          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2 }}>
            Random Access – Full Example:
          </Typography>

          {/* Code Block */}
          <Box
            sx={{
              mt: 1,
              p: 2,
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              overflowX: "auto",
              fontFamily: "monospace",
              whiteSpace: "pre",
            }}
          >
{`#include <stdio.h>
#include <stdlib.h>

struct Student {
    int id;
    char name[30];
    int age;
};

int main() {
    FILE *fp;
    struct Student s;
    int choice, id, found;

    fp = fopen("students.dat", "ab+");
    if (fp == NULL) {
        printf("Error opening file!");
        return 1;
    }

    while (1) {
        printf("\\n--- RANDOM ACCESS FILE MENU ---\\n");
        printf("1. Add Student Record\\n");
        printf("2. Display All Records\\n");
        printf("3. Search Student by ID\\n");
        printf("4. Update Student Record\\n");
        printf("5. Exit\\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {

        case 1:
            fseek(fp, 0, SEEK_END);
            printf("Enter ID, Name, Age: ");
            scanf("%d %s %d", &s.id, s.name, &s.age);
            fwrite(&s, sizeof(s), 1, fp);
            printf("Record added successfully!\\n");
            break;

        case 2:
            rewind(fp);
            printf("\\nAll Student Records:\\n");
            while (fread(&s, sizeof(s), 1, fp) == 1) {
                printf("ID: %d  Name: %s  Age: %d\\n", s.id, s.name, s.age);
            }
            break;

        case 3:
            printf("Enter ID to search: ");
            scanf("%d", &id);
            rewind(fp);
            found = 0;

            while (fread(&s, sizeof(s), 1, fp) == 1) {
                if (s.id == id) {
                    printf("Record Found -> Name: %s  Age: %d\\n", s.name, s.age);
                    found = 1;
                    break;
                }
            }

            if (!found)
                printf("Record not found.\\n");
            break;

        case 4:
            printf("Enter ID to update: ");
            scanf("%d", &id);
            rewind(fp);
            found = 0;

            while (fread(&s, sizeof(s), 1, fp) == 1) {
                if (s.id == id) {
                    printf("Enter new Name and Age: ");
                    scanf("%s %d", s.name, &s.age);

                    fseek(fp, -sizeof(s), SEEK_CUR);
                    fwrite(&s, sizeof(s), 1, fp);
                    printf("Record updated successfully!\\n");
                    found = 1;
                    break;
                }
            }

            if (!found)
                printf("Record not found.\\n");
            break;

        case 5:
            fclose(fp);
            printf("Exiting program...\\n");
            exit(0);

        default:
            printf("Invalid choice. Try again!\\n");
        }
    }

    return 0;
}`}
          </Box>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 3,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => (window.location.href = "/learnc/fileoperations")}
            >
              ⬅ Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Sequentialrandom;
