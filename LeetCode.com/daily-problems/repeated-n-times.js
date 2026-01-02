/**
 * @param {number[]} nums
 * @return {number}
 */
function repeatedNTimes(nums) {
  const uniqueNums = new Set();

  for (const num of nums) {
    if (uniqueNums.has(num)) return num;
    uniqueNums.add(num);
  }

  return -1;
}

console.log(repeatedNTimes([1, 2, 3, 3])); // 3
console.log(repeatedNTimes([2, 1, 2, 5, 3, 2])); // 2
console.log(repeatedNTimes([5, 1, 5, 2, 5, 3, 5, 4])); // 5
