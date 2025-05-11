/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds(arr) {
  let count = 0;

  for (const value of arr) {
    count = value % 2 ? ++count : 0;
    if (count === 3) return true;
  }

  return false;
}

console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false
// There are no three consecutive odds.

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
// [5,7,23] are three consecutive odds.
