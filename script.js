// Assignment code here
function generatePassword(){

  var  studentInput = window.prompt('How Long would you like your password to be?')

  var passwordLenght = parseInt(studentInput)


//isNaN stands for is not a number 
  if (isNaN(passwordLenght)){
    window.alert('The input must be a number')
    return;
  }

  if (studentInput < 8 || studentInput > 128){
    window.alert('Your password must be between 8 and 128 characters.')
    return;
  }

  var userNumbers = window.confirm('Would you like to have numbers?')
  var userSymbols = window.confirm('Would you like to have symbols?')
  var userLowercase = window.confirm('Would you like to have lowercase?')
  var userUppercase = window.confirm('Would you like to have uppercase?')

  var numberList = ["0", "1", "2","3","4","5","6","7","8","9"]
  var symbolList = ["!","@",'#','$','%','^','&','*']
  var lowerCaseList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var userUppercaseList = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


