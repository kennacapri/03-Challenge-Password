// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// random number. math.floor gets rid of decimal
function randomInt(min, max) {
  return Math.floor(Math.random()*(max - min) + min)
}

// Random position in list
function randomItem(list {
  return list[randomInt(0, optionsPassword.length - 1)]
}

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
var userAddsLowercase = window.confirm("Do you want to add lowercase letters to your password")
var userAddsUppercase = window.confirm("Do you want to add uppercase letters to your password")
var userAddsNumbers = window.confirm("Do you want to add numbers to your password")
var userAddsSymbols = window.confirm("Do you want to add symbols to your password")



var possibleLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var possibleUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var possibleSymbols = ["!", "@", "#", "%", "&", "*", "?", "/"]


var optionsPassword = []

if (userAddsNumbers --- true) {
  optionsPassword.push(possibleNumbers)
}
if (userAddsSymbols --- true) {
  optionsPassword.push(possibleSymbols)
}
if (userAddsLowercase --- true) {
  optionsPassword.push(possibleLowercase)
}
if (userAddsUppercase --- true) {
  optionsPassword.push(possibleUppercase)
}

var passwordGenerator = ""

// Creates a random number
for (var i = 0; i < passwordLength; i++) {
  var randomItem = optionsPassword[randomInt(0, optionsPassword.length - 1)]
  var random
}

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
