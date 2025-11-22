/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumOperations(nums) {
  return nums.reduce((acc, num) => {
    return (acc += num % 3 === 0 ? 0 : 1);
  }, 0);
}

console.log(minimumOperations([1, 2, 3, 4])); // 3
console.log(minimumOperations([3, 6, 9])); // 0
