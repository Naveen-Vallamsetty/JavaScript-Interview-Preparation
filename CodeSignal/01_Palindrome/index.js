let checkPalindrome = (inputString) => {
  inputString = inputString.toLowerCase();
  return inputString.split("").reverse().join("") === inputString;
};

console.log(checkPalindrome("Madam"));
