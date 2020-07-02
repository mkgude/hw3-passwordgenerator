// Assignment Code
var generateBtn = document.querySelector("#generate");
var alphabetLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(alphabetLowercase);
var alphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
console.log(alphabetUppercase);
var nums = "1234567890".split("");
console.log(nums);
var sym = "~!@#$%^&*()?".split("");
console.log(sym);

//alphabetLowercase + alphabetUppercase + numbers + symbols;

function generatePassword() {
  var passwordLength;
  passwordLength = prompt(
    "How long would you like your password? \n\nIndicate the number of characters you need below."
  );
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Please choose a number between 8-128");
    return generatePassword();
  }
  // new password variable is an array taht will be filed with our random characters

  var numbers = false;
  var uppercase = false;
  var lowercase = false;
  var specialCharacters = false;
  var confirms = 0;

  var newpassword = [];
  var charSetBank = [];

  // ask the user what character types they would like in their password
  // Defined as false until user presses ok, will change to true, used in later conditional statements

  lowercase = confirm("Would you like to include lowercase characters?");
  console.log(lowercase);
  // var uppercase = confirm("Would you like to include uppercase characters?");
  uppercase = confirm("Would you like to include uppercase characters?");
  console.log(uppercase);
  // var numeric = confirm("Would you like to include numbers?");
  numbers = confirm("Would you like to include numbers?");
  console.log(numbers);
  // var specialCharacters = confirm("Would you like to include special characters?");
  specialCharacters = confirm("Would you like to include special characters?");
  console.log(specialCharacters);

  // checking number of confirms to check and see how many characters we are starting with
  if (lowercase) {
    charSetBank = charSetBank.concat(alphabetLowercase);
    confirms = confirms + 1;
  }
  if (numbers) {
    charSetBank = charSetBank.concat(nums);
    confirms = confirms + 1;
  }
  if (uppercase) {
    charSetBank = charSetBank.concat(alphabetUppercase);
    confirms = confirms + 1;
  }
  if (specialCharacters) {
    charSetBank = charSetBank.concat(sym);
    confirms = confirms + 1;
  }
  if (confirms === 0) {
    alert(
      "You need to select at least 1 option to include, please start over."
    );
    return generatePassword();
  }
  console.log(confirms);

  // if true, must include at least one item from each true group
  // pull the randomized characters from the individual characterset arrays when confirmed is added to confirms - should be at least 1 from each confirms and added to password
  // using the .push will be added to end of the new password

  if (numbers) {
    newpassword.push(nums[randomPull(nums)]);
  }
  if (specialCharacters) {
    newpassword.push(sym[randomPull(sym)]);
  }
  if (lowercase) {
    newpassword.push(alphabetLowercase[randomPull(alphabetLowercase)]);
  }
  if (uppercase) {
    newpassword.push(alphabetUppercase[randomPull(alphabetUppercase)]);
  }
  console.log(newpassword);

  // will come from the major string bank

  // function randomPull will take in a string and pull out a random index
  for (var i = 0; i < passwordLength - confirms; i++) {
    newpassword.unshift(charSetBank[randomPull(charSetBank)]);
  }
  // this gives newpassword array
  console.log(newpassword);
  newpassword = newpassword.join("");
  // this returns a string of newpassword
  console.log(newpassword);
  // returns the function as newpassword
  return newpassword;

  // this for loop is for grabbing the number of characters to pull from the major bank
}
// function randomPull is taking in a string and pull out a random index by * 0-1
function randomPull(string) {
  return Math.floor(Math.random() * string.length);
}
// if true, add 1 from each group and then start choosing from the larger character bank

// for loop is passwordLength-#ofchoices "passwordLength - newpasswordLength"

//newPassword = passwordLength-#ofchoices

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

// THEN I choose a length of at least 8 characters and no more than 128 characters
// If password length determined is between 8-128 next question
// else alert("Password length not within paramerters, choose a number between 8 and 128") and passwordLengthTwo = prompt("What password length do you need?")
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters

// if yes, include, else if no exclude, if none selected, end and give an notification that you have to select at least one to generate
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Write password to the #password input

// function pulling from a heigher scope
