/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
  let result = 0;

  for (let i = 0; i < height.length - 1; i++) {
    const h1 = height[i];
    for (let j = i + 1; j < height.length; j++) {
      const h2 = height[j];
      const area = Math.min(h1, h2) * (j - i);
      result = Math.max(result, area);
    }
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
