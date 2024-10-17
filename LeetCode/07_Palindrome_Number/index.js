/*
let isPalindrome = function (x) {
  return x.toString().split("").reverse().join("") == x;
};
*/

// Follow up: Could you solve it without converting the integer to a string

let isPalindrome = (num) => {
  let originalNumber = num;
  if (num < 0) return false;
  let reverseNumber = [];
  while (num > 0) {
    reverseNumber.push(num % 10);
    num = Math.floor(num / 10);
  }
  return Number(reverseNumber.join("")) === originalNumber;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(12321)); // true
console.log(isPalindrome(0)); // true
