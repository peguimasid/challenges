/**
 * @param {number[]} nums
 * @return {number}
 */
function countPartitions(nums) {
  return nums.reduce((sum, curr) => (sum += curr)) % 2 === 0
    ? nums.length - 1
    : 0;
}

console.log(countPartitions([10, 10, 3, 7, 6])); // 4
console.log(countPartitions([1, 2, 2])); // 0
console.log(countPartitions([2, 4, 6, 8])); // 3
