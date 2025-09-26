/**
 * @param {number[]} nums
 * @return {number}
 */
function triangleNumber(nums) {
  let result = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const a = nums[i];
    for (let j = i + 1; j < nums.length - 1; j++) {
      const b = nums[j];
      for (let k = j + 1; k < nums.length; k++) {
        const c = nums[k];
        if (a + b > c && b + c > a && a + c > b) result++;
      }
    }
  }

  return result;
}

console.log(triangleNumber([2, 2, 3, 4])); // 3 -> [2,3,4] [2,3,4] [2,2,3]
console.log(triangleNumber([4, 2, 3, 4])); // 4
