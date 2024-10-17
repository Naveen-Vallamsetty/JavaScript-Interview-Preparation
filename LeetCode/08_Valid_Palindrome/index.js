let isValidPalindrome = (str) => {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = cleanString.length - 1;

  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isValidPalindrome("race a car")); // false
console.log(isValidPalindrome(" ")); // true
