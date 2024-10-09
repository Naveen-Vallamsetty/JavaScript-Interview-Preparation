let findTheDifference = (s, t) => {
  let hashObject = {};

  // count characters in the strig s

  for (let char of s) {
    if (hashObject[char]) {
      hashObject[char]++;
    } else {
      hashObject[char] = 1;
    }
  }

  // Compare characters in string t
  for (let char of t) {
    if (!hashObject[char] || hashObject[char] === 0) {
      return char;
    } else {
      hashObject[char]--;
    }
  }
};

console.log(findTheDifference("abcd", "abcde"));
