/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function minimumDifference(nums, k) {
  nums.sort((a, b) => a - b);

  let result = Number.MAX_SAFE_INTEGER;

  for (let i = k - 1; i < nums.length; i++) {
    const min = nums[i - (k - 1)];
    const max = nums[i];
    result = Math.min(result, max - min);
  }

  return result;
}

console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9, 4, 1, 7], 2)); // 2
