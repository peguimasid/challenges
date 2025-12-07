/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOdds(low, high) {
  return Math.floor((high + 1) / 2) - Math.floor(low / 2);
}

console.log(countOdds(3, 7)); // 3
console.log(countOdds(8, 10)); // 1
console.log(countOdds(0, 10)); // 5
console.log(countOdds(2, 2)); // 0
console.log(countOdds(11, 11)); // 1
console.log(countOdds(21, 22)); // 1
