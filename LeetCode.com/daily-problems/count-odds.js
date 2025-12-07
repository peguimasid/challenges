/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
function countOdds(low, high) {
  const eventCount = Math.floor((high - low) / 2);
  const oddCount = Math.floor((high - low) / 2 + 1);

  return low % 2 === 0 && high % 2 === 0 ? oddCount - 1 : oddCount;
}

console.log(countOdds(3, 7)); // 3
console.log(countOdds(8, 10)); // 1
console.log(countOdds(0, 10)); // 5
console.log(countOdds(2, 2)); // 0
console.log(countOdds(11, 11)); // 1
console.log(countOdds(21, 22)); // 1
