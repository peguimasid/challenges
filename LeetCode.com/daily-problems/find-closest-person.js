/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
function findClosest(x, y, z) {
  const dist1 = Math.abs(z - x);
  const dist2 = Math.abs(z - y);

  if (dist1 === dist2) return 0;

  return dist1 < dist2 ? 1 : 2;
}

// -•-*--•--
console.log(findClosest(2, 7, 4)); // 1
// -•--•*---
console.log(findClosest(2, 5, 6)); // 2
// •-*-•----
console.log(findClosest(1, 5, 3)); // 0
// •--------•-*--
console.log(findClosest(10, 1, 12)); // 1
