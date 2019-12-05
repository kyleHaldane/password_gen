// Assignment Code
var generateBtn = document.querySelector("#generate");
var headerText = document.querySelector("h1");
var header = document.querySelector("header");
var body = document.querySelector("body");
var generateButton = document.querySelector("#generate");
//var card = document.querySelector

//styling
header.setAttribute("style", "height: 100px");
headerText.setAttribute("style", "text-align: center");
body.setAttribute("style", "backgrounds-color: grey");
generateButton.setAttribute("style", "background-color: red");

//Arrays of charachter types
specialCharachters = [
  "+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
  "~", "*", "?", ":", ];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//Prompts user for the length of password and acceptable characther types
while(1){
  while(1){
    length = prompt("How long of a password would you like");
    console.log(length);
    if(length > 1)
    break;s
    alert("Please choose a length of at least 1.");
  }
  spec_yn = confirm("Would you like your password to contain special charachters?");
  nums_yn = confirm("Would you like for your password to contain numbers?");
  low_yn = confirm("Would you like your password to contain lowercase letters?");
  upper_yn = confirm("Would you like your password to contain uppercase letters?")
  if(spec_yn == false && low_yn == false && nums_yn == false && upper_yn == false)
    alert("Please choose at least 1 charachter type option.");
  else
    break;
}

//Produces an array of the acceptable charachters
approved = []
if(spec_yn == true)
approved = approved.concat(specialCharachters);
if(nums_yn == true)
approved = approved.concat(numbers);
if(low_yn == true)
approved = approved.concat(lowercaseLetters);
if(upper_yn == true)
approved = approved.concat(uppercaseLetters);
console.log(approved);

//generates password
function generatePassword(){
  var password =[]
  for(var i = 0; i < length; ++i){
    password[i] = approved[Math.floor(Math.random() * approved.length)];
  }
  return (password.join(''));
}
// Write password to the #password input
function writePassword() {
  console.log("writing password")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
