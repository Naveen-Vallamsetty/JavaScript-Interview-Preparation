/*
Approach:
1. Initialize the variables: Create a variable to store the reversed number and a flag to handle negative numbers.
2. Handle negative numbers: If the input number is negative, convert it to positive for easier manipulation.
3. Extract digits: Use the modulo operator (%) to get the last digit of the number and division (/) to remove the last digit.
4. Construct the reversed number: Multiply the reversed number by 10 and add the extracted digit in each iteration.
5. Restore the sign: If the number was originally negative, reapply the negative sign at the end and check wehter reverse number geater than signed 32-bit integer if (greater return 0)
*/

const reverse = (x) => {
  let rev = 0;
  let isNegative = x < 0 ? true : false;
  x = isNegative ? -x : x;
  while (x > 0) {
    let lastDigit = x % 10;
    rev = rev * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return rev >= 2 ** 31 - 1 ? 0 : isNegative ? -rev : rev;
};
