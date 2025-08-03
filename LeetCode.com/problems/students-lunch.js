/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
  const preferenceFrequencyCounter = students.reduce((map, student) => {
    map[student] = (map[student] || 0) + 1;
    return map;
  }, {});

  while (true) {
    const currentSandwich = sandwiches[0];

    if (!preferenceFrequencyCounter[currentSandwich]) break;

    preferenceFrequencyCounter[currentSandwich]--;
    sandwiches.shift();
  }

  return Object.values(preferenceFrequencyCounter).reduce(
    (acc, curr) => acc + curr
  );
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
