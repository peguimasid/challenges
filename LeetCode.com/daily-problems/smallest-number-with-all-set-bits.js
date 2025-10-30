/**
 * @param {number} n
 * @return {number}
 */
function smallestNumber(n) {
  for (let i = 0; i < 1000; i++) {
    if (2 ** i > n) return 2 ** i - 1;
  }
  return -1;
}

console.log(smallestNumber(5)); // 7 => 111
console.log(smallestNumber(10)); // 15 => 1111
console.log(smallestNumber(3)); // 3 => 11
