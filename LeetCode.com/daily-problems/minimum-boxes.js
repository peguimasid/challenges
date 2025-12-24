/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
function minimumBoxes(apple, capacity) {
  capacity.sort((a, b) => b - a);

  let currentBoxIndex = 0;
  let currentBoxApples = 0;

  for (const amount of apple) {
    for (let i = 0; i < amount; i++) {
      if (currentBoxApples >= capacity[currentBoxIndex]) {
        currentBoxIndex++;
        currentBoxApples = 0;
      }
      currentBoxApples++;
    }
  }

  return currentBoxIndex + 1;
}

console.log(minimumBoxes([1, 3, 2], [4, 3, 1, 5, 2])); // 2
console.log(minimumBoxes([5, 5, 5], [2, 4, 2, 7])); // 4
