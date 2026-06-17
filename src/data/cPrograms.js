export const cPrograms = [
  {
    id: 1,
    title: "Login Name Validation System",
    level: "Easy",
    description: "A software company is developing a new online portal for its employees. During registration, every employee must create a Login Name. To maintain a same naming format, the company has decided that the login name should contain only alphabetical characters (A–Z or a–z). Numbers, spaces, and special characters are not allowed.",
    code: `#include <stdio.h>

int main() {
    char loginName[50];
    int i, valid = 1;

    printf("Enter Login Name: ");
    scanf("%s", loginName);

    for(i = 0; loginName[i] != '\0'; i++) {
        if(!((loginName[i] >= 'A' && loginName[i] <= 'Z') ||
             (loginName[i] >= 'a' && loginName[i] <= 'z'))) {
            valid = 0;
            break;
        }
    }

    if(valid)
        printf("Login Name Accepted.");
    else
        printf("Invalid Login Name! Only alphabets are allowed.");

    return 0;
}`,
    
input:"Rahul",
output: "Login Name Accepted."
  },

  {
    id: 2,
    title: "Validate Password",
    level: "Medium",
      description: `
A software company is launching a secure employee portal where employees can access confidential company information.
To protect user accounts from unauthorized access, the company has defined the following password policy:
• Password length must be between 8 and 15 characters.
• Password must contain at least one uppercase letter (A–Z).
• Password must contain at least one special character (such as @, #, $, %, &, *, etc.).
If the password satisfies all the above conditions, it should be accepted; otherwise, the system should display an error message.
    `,

    code: `#include <stdio.h>

int main()
{
    char password[50];
    int i;
    int length = 0;
    int uppercase = 0, special = 0;

    printf("Enter Password: ");
    scanf("%s", password);

    // Calculate password length 
    for(i = 0; password[i] != '\0'; i++)
    {
        length++;
    }

    // Check password conditions
    for(i = 0; password[i] != '\0'; i++)
    {
        // Check uppercase letter
        if(password[i] >= 'A' && password[i] <= 'Z')
        {
            uppercase = 1;
        }

        // Check special character
        if(password[i] == '@' || password[i] == '#' ||
           password[i] == '$' || password[i] == '%' ||
           password[i] == '&' || password[i] == '*')
        {
            special = 1;
        }
    }

    // validation
    if(length >= 8 && length <= 15 && uppercase == 1 && special == 1)
    {
        printf("Password Accepted.");
    }
    else
    {
        printf("Invalid Password!");
    }

    return 0;
}`,
    input:"Enter Password: Vishal@123",
    output: "Password Accepted."
  }
];