/**
 * @param {number} n
 * @return {number}
 */
function totalMoney(n) {
  let result = 0;
  let currentWeek = 0;

  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) currentWeek++;
    result += (i % 7) + currentWeek;
  }

  return result;
}

console.log(totalMoney(4)); // 10
console.log(totalMoney(10)); // 37
console.log(totalMoney(20)); // 96

// 28 -> 1 week (1 + 2 + 3...)
// 35 -> 2 week (2 + 3 + 4...)
// 42 -> 3 week (3 + 4 + 5...)
