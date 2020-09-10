// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
var upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbersCount = '0123456789'
var specialCharactersAgain = '!@#$%^&*()_'
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// var userPreference;
//         if (confirm("Would yu like to create a password?") == true) {
//             userPreference = "Data saved successfully!";
//         } else {
//             userPreference = "Save Canceled!";
//         }
//         document.getElementById("msg").innerHTML = userPreference;

function generatePassword() {
    var tenure = prompt("How many characters would you like your password? Pick a number between 8-120");
    if (tenure < 8 || tenure > 120) {
        alert("Invalid Input")
        return "Invalid Input"
    } else {
        var lowerCase = confirm("Would you like lowercase letters in your password?");
        var upperCase = confirm("Would you like Uppercase letters in your password?");
        var numbers = confirm("Would you like numbers in your password?");
        var specialCharacters = confirm("Would you like special characters in your password?");
        if (!lowerCase && !upperCase && !numbers && !specialCharacters) {
            alert("None of the options were chosen")
            return "None of the options were chosen"
        } else {
            alert("Please see your new password!")
            var validCharacters = []
            if (lowerCase) {
                validCharacters += lowerCaseLetters
            }
            if (upperCase) {
                validCharacters += upperCaseLetters
            }
            if (numbers) {
                validCharacters += numbersCount
            }
            if (specialCharacters) {
                validCharacters += specialCharactersAgain
            }
            console.log(validCharacters)
            var cougs = ""
            for (let i= 0; i<tenure; i++) {
                var index=Math.floor(Math.random() * validCharacters.length)
                cougs += validCharacters[index]
            }
            console.log(cougs)
            return cougs
        }
    }
}

