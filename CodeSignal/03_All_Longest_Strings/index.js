let allLongestStrings = (inputArray) => {
  let length = 0;
  for (let val of inputArray) {
    length = Math.max(length, val.length);
  }
  return inputArray.filter((element) => element.length === length);
};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"])); // Output: [ 'aba', 'vcd', 'aba' ]
