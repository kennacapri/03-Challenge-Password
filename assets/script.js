
var generateBtn = document.querySelector("#generate");

// random number. math.floor gets rid of decimal in any number
function randomInt(min, max){
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}

// Random position in list
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {

  do {
    var userInput = window.prompt("How long do you want your password? Password length has to be between 8-128")
    if (userInput === null){
      return
    }
  } while (isNaN(userInput)||userInput < 8 || userInput > 128)



  var passwordLength = parseInt(userInput)


var userAddsLowercase = window.confirm("Do you want to add lowercase letters to your password")
var userAddsUppercase = window.confirm("Do you want to add uppercase letters to your password")
var userAddsNumbers = window.confirm("Do you want to add numbers to your password")
var userAddsSymbols = window.confirm("Do you want to add symbols to your password")



var possibleLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var possibleUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var possibleSymbols = ["!", "@", "#", "%", "&", "*", "?", "/"]


var optionsPassword = []


if (userAddsLowercase) {
  optionsPassword.push(possibleLowercase)
}
if (userAddsUppercase) {
  optionsPassword.push(possibleUppercase)
}
if (userAddsNumbers) {
  optionsPassword.push(possibleNumbers)
}
if (userAddsSymbols) {
  optionsPassword.push(possibleSymbols)
}

// if (optionsPassword.length){
// optionsPassword.push(possibleLowercase)
// }

if (!userAddsLowercase && !userAddsUppercase && !userAddsNumbers && !userAddsSymbols){
  window.alert("You must select at least one option when creating your password")
  return
}


var passwordGeneratorStr = ""

// Creates a random number
for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsPassword)
  var randomCharacter = getRandomItem(randomList)
  passwordGeneratorStr += randomCharacter
}
// Generating random numbers and returning them where they're called
return passwordGeneratorStr
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
