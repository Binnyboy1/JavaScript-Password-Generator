// Assignment Code
var gen = document.querySelector("#button-gen");
var lowerList = "abcdefghijklmnopqrstuvwxyz";
var upperList = lowerList.toUpperCase();
var specialList = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
/* learned from https://bobbyhadz.com/blog/javascript-check-if-string-contains-special-characters#:~:text=To%20check%20if%20a%20string,special%20character%20and%20false%20otherwise. */

// Variable set up
var length = 0;     // Must be between 8 and 128
lowerList = lowerList.split('');
upperList = upperList.split('');
var numList = "0123456789".split('');
specialList = specialList.split('');
masterList = [];

// Prompt questions
function generatePassword() {
    length = window.prompt("How long should the password be?\n(must be at least 8 characters and no more than 128 characters)");

    // break case #1
    if (length < 8 || length > 128) {
        window.alert("invalid character length");
        return;
    }

    window.alert("Please select which character types you want to include.\n(must select at least 1 type)");
    var lowerPrompt = window.confirm("Click OK to confirm including lowercase letters.");
    if (lowerPrompt) {
        window.alert("lowercase letters will be included");
        masterList = masterList.concat(lowerList);
    } else {
        window.alert("lowercase letters will NOT be included");
    }

    var upperPrompt = window.confirm("Click OK to confirm including uppercase letters.");
    if (upperPrompt) {
        window.alert("uppercase letters will be included");
        masterList = masterList.concat(upperList);
    } else {
        window.alert("uppercase letters will NOT be included");
    }

    var numPrompt = window.confirm("Click OK to confirm including numbers.");
    if (numPrompt) {
        window.alert("numbers will be included");
        masterList = masterList.concat(numList);
    } else {
        window.alert("numbers will NOT be included");
    }

    var specialPrompt = window.confirm("Click OK to confirm including special characters.");
    if (specialPrompt) {
        window.alert("special characters will be included");
        masterList = masterList.concat(specialList);
    } else {
        window.alert("special characters will NOT be included");
    }

    // break case #2
    if (!masterList.length) {
        window.alert("must select at least one type");
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