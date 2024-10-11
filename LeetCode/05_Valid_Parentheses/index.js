let isValid = (s) => {
  let stack = [];
  let strLen = s.length;

  for (let i = 0; i < strLen; i++) {
    let char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      let preVal = stack.pop();

      if (preVal === "(" && char !== ")") return false;
      else if (preVal === "[" && char !== "]") return false;
      else if (preVal === "{" && char !== "}") return false;
      else if (preVal === undefined) return false;
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
