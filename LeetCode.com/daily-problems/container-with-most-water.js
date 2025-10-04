/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let result = 0;
  let i = 0;
  let j = height.length - 1;

  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    result = Math.max(result, area);
    if (height[i] < height[j]) i++;
    else j--;
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
