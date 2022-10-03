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

var possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var possibleSymbols = ["!", "@", "#", "%", "&", "*", "?", "/"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
