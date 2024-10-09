let findTheDifference = (s, t) => {
  let sSum = 0;
  let tSum = 0;

  for (let char of s) {
    sSum += char.charCodeAt(0);
  }

  for (let char of t) {
    tSum += char.charCodeAt(0);
  }

  return String.fromCharCode(tSum - sSum);
};

console.log(findTheDifference("abcd", "abcde"));
