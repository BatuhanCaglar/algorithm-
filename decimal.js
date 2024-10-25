function decimalbinary(decimal) {
  let binary = [];
  let g = 7;

  for (let i = 0; i < 8; i++, g--) {
    let num = Math.pow(2, g);
    if (num > decimal) {
      binary.push("0");
    }
    if (num < decimal) {
      decimal = decimal - num;
      binary.push("1");
    }
  }
  return binary;
}

console.log(decimalbinary(""));
