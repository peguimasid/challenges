/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums, k) {
  const onePositions = nums.reduce((acc, num, index) => {
    if (num === 1) acc.push(index);
    return acc;
  }, []);

  for (let i = 1; i < nums.length; i++) {
    const prev = onePositions[i - 1];
    const curr = onePositions[i];

    if (curr - prev <= k) return false;
  }

  return true;
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)); // false
