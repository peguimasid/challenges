/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums, k) {
  let lastOneIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (lastOneIndex !== -1 && i - lastOneIndex <= k) return false;
      lastOneIndex = i;
    }
  }

  return true;
}

console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2)); // true
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2)); // false
