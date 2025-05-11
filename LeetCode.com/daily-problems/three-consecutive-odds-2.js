/**
 * @param {number[]} arr
 * @return {boolean}
 */
function threeConsecutiveOdds(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    const isOdd = (x) => x % 2;

    if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) {
      return true;
    }
  }

  return false;
}

console.log(threeConsecutiveOdds([2, 6, 4, 1])); // false
// There are no three consecutive odds.

console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12])); // true
// [5,7,23] are three consecutive odds.
