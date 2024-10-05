let addBorder = (arr) => {
  let picture = arr.map((element) => {
    return "*" + element + "*";
  });
  let border = [];
  for (let i = 0; i < picture[0].length; i++) {
    border.push("*");
  }
  border = border.join("");
  picture.push(border);
  picture.unshift(border);
  return picture;
};

console.log(addBorder(["abc", "ded"]));
