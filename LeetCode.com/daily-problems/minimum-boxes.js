/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
function minimumBoxes(apple, capacity) {
  capacity.sort((a, b) => b - a);

  let currentBoxIndex = 0;

  let totalApples = apple.reduce((acc, curr) => acc + curr, 0);

  while (totalApples > 0) {
    totalApples -= capacity[currentBoxIndex];
    currentBoxIndex++;
  }

  return currentBoxIndex;
}

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])); // 2
console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7])); // 4
