/**
 * @param {number[]} nums
 * @return {boolean}
 */
function divideArray(nums) {
  const frequencyCounter = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return Object.values(frequencyCounter).every((value) => value % 2 === 0);
}

console.log(divideArray([3, 2, 3, 2, 2, 2])); //true
console.log(divideArray([1, 2, 3, 4])); //false
