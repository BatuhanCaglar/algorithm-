/*
    take the number, preferably in string
    we make a loop go through 8 iterations
    count starts at 1, per iteration mulitply that number by 2
    if the binary has a 1 in that add the count to a list, if not i doesn't add nothing
    get the result
*/

function bincon(b, binary) {
  if (b > 8) {
    return;
  }
  let count = 1;
  let count2 = 1;
  for (let i = 0; i < 8; i++) {
    count2 *= 2;
    if (binary[i] === "1") {
      count *= 2;
    }
  }
  return count2;
}

console.log(bincon(8, "00000000"));
