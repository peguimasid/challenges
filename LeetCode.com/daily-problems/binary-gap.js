/**
 * @param {number} n
 * @return {number}
 */
function binaryGap(n) {
  let result = 0;
  let round = 0;
  let lastFound = -1;

  while (n > 0) {
    round++;
    if (n & 1) {
      if (lastFound >= 0) {
        result = Math.max(result, round - lastFound);
      }
      lastFound = round;
    }
    n = n >> 1;
  }

  return result;
}

console.log(binaryGap(22)); // 10110 -> 2
console.log(binaryGap(8)); // 1000 -> 0
console.log(binaryGap(5)); // 101 -> 2
