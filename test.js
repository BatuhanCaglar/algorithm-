//"aabcfed" "defcbaa"

function findDiff(x, y) {
  let sortX = [...x].sort();
  let sortY = [...y].sort();

  for (let i = 0; i < sortX.length; i++) {
    if (sortX[i] != sortY[i]) {
      return sortY[i];
    }
  }
}
