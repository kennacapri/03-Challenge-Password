// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var userInput = window.prompt("How long do you want your password?")

  var passwordLength = parseInt(userInput)

 if (isNaN(passwordLength)) {
  window.alert("That isn't a number")
  return

}
// || means "or"
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Password length has to be between 8-128")
  return
}

var userAddsNumbers = window.confirm("Do you want to add numbers to your password")
var userAddsSymbols = window.confirm("Do you want to add symbols to your password")
var userAddsLowercase = window.confirm("Do you want to add lowercase letters to your password")
var userAddsUppercase = window.confirm("Do you want to add uppercase letters to your password")




}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
