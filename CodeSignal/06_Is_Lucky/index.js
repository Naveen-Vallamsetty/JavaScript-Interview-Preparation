let isLucky = (n) => {
  let s = n.toString();

  let full = s.length;
  let half = full / 2;

  let array1 = s.slice(0, half).split("");
  let array2 = s.slice(half, full).split("");

  let total1 = array1.reduce((acc, curr) => Number(acc) + Number(curr));
  let total2 = array2.reduce((acc, curr) => Number(acc) + Number(curr));

  return total1 === total2;
};

console.log(isLucky(1230));
console.log(isLucky(239017));
