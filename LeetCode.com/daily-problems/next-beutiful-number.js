/**
 * @param {number} n
 * @return {Map}
 */
function countFrequency(n) {
  const result = new Map();

  while (n > 0) {
    result.set(n % 10, (result.get(n % 10) ?? 0) + 1);
    n = Math.floor(n / 10);
  }

  return result;
}

/**
 * @param {number} n
 * @return {boolean}
 */
function hasSameFrequency(n) {
  return [...countFrequency(n).entries()].every(([key, value]) => {
    return key === value;
  });
}

/**
 * @param {number} n
 * @return {number}
 */
function nextBeautifulNumber(n) {
  while (true) {
    if (hasSameFrequency(++n)) return n;
  }
}

console.log(nextBeautifulNumber(1)); // 22
console.log(nextBeautifulNumber(1000)); // 1333
