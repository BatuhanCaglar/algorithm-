function binaryDecimal(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - i - 1] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}

console.log(binaryDecimal("1101"));
