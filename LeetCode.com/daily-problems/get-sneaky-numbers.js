/**
 * @param {number[]} nums
 * @return {number[]}
 */
function getSneakyNumbers(nums) {
  return [
    ...nums
      .reduce((map, curr) => map.set(curr, (map.get(curr) || 0) + 1), new Map())
      .entries(),
  ]
    .filter(([, freq]) => freq === 2)
    .map(([n]) => n);
}

console.log(getSneakyNumbers([0, 1, 1, 0])); // [0, 1]
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2])); // [2, 3]
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])); // [4, 5]
