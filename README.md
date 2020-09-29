# password-generator
-Added an index.html, script,js, and style.css files within the password generator folder
-Added the bootstrap filters in the html page
-Copied all info for HTML, style.css and script.js to the actual homework assignment
-Most of the work was updated in the script.js page:
    -Created 5 different variables with definition for each variable
    -The generate password button was already created
    -The write password box was already created
    -Next step was to create a box that asked how many characters you wanted your password to be
    -Made an If statement that said, the password needs to be greater than 8 but smaller than 120 characters and if a number is picked thats outside of the range, there would be an invalid input that would pop so the user knows they selected an invalid value
    -Added to the if statement so when the user selected the correct value they would go through multiple questions that would lead to creating their new password. I did this by added "else" to the a;ready existing if statement.
        -created the 4 different questions, do you want the following in your password: upper, lowercase, number and special characters to create your new secure password. I used confirms so the user just presses ok or cancel to remove the item from their future password
    -If for whatever reason the usser doesn't select for anything to be used to create their password, I created an alert to state "None of the options were chosen"
    -If they did select some of the items for their password there's an alert that says "Check out your new password"
    -Another variable was created to ensure all of the selections that the user selects is used when the new password is being formulated.
        -This was done by created multiple if statements that said the new variable thats been created will equal all of the old variables that we created for each portion of the password
        -New variable validCharacters = lowerCaseLetters and did this for the other 3 variables as well
        -This portion of the code will ensure that all variables if selected will be incorporated in the new password
-Final step was to create the actual password by creating a for loop
    -created a new variable and did a for loop
    -in the for loop, stated the starting point of the loop, put the length of the loop and said e wanted to always proceed to the next step whether that be go to the next question or say this is an invalid selection
    -next part of the for loop is will make the numbers we use whole numbers
    -Last portion is the retun which will spit out a new password once all questions are answered

What does this app do?
This app generates a random password. The password generator goes through a series of yes or no questions and outputs a random password of any length you choose.

Technologies Used:
Style.css
JavaScript
Alerts
Prompts
Math.random

Link to Deployed App
https://emilygoeres.github.io/password-generator/

![Password Generator](https://github.com/emilygoeres/password-generator/blob/master/password1.png)
![Password Generator](https://github.com/emilygoeres/password-generator/blob/master/password2.png)

##### Emily Goeres, 
### Univeristy of Washington