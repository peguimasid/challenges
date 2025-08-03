/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
  const count = [0, 0];

  for (const student of students) {
    count[student]++;
  }

  for (const sandwich of sandwiches) {
    if (count[sandwich] === 0) break;
    count[sandwich]--;
  }

  return count[0] + count[1];
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
