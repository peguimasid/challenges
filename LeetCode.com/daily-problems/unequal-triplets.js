/**
 * @param {number[]} nums
 * @return {number}
 */
function unequalTriplets(nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const values = [nums[i], nums[j], nums[k]];
        const uniqueValues = [...new Set(values)];
        if (values.length === uniqueValues.length) result++;
      }
    }
  }

  return result;
}

console.log(unequalTriplets([4, 4, 2, 4, 3])); // 3
