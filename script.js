// Assignment Code
var gen = document.querySelector("#button-gen");
var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = lowerList.toUpperCase();
var specialList = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
/* learned from https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters#:~:text=To%20check%20if%20a%20string,special%20character%20and%20false%20otherwise. */

// Variable set up
var length = 0;     // Must be between 8 and 128
var lower = false;
lowerList = lowerList.split('');
var upper = false;
upperList = upperList.split('');
var num = false;
var numList = "0123456789".split('');
var special = false;
specialList = specialList.split('');

// Prompt questions
function generatePassword() {
    length = window.prompt("How long should the password be?\n(must be at least 8 characters and no more than 128 characters)");

    if (length < 8 || length > 128) {
        window.alert("invalid character length");
        return;
    }

    return;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
gen.addEventListener("click", writePassword);