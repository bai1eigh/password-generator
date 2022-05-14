// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength; 
var confirmUpper; 
var confirmLower;
var confirmSpecialCharacters;
var user;

//lower case letters 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var tagName = prompt ("How many characters will your password have? Choose between 8 and 128");

if (tagName)

        /* possible code 
        
        function generatePassword() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
} 

*/

/*prompt1

var password = prompt("Enter in the password");
        if (password=="1234") {
            //location = "media.html"
          
        }
        else 
        {
          document.getElementById("msg").value = "test";  
          //location = "error.html"
        } */