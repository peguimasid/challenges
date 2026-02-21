/**
 * @param {number} n
 * @return {boolean}
 */
function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;

  const limit = Math.floor(Math.sqrt(n));

  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}

/**
 * @param {number} n
 * @return {number}
 */
function countSetBits(n) {
  let result = 0;

  while (n > 0) {
    if (n & 1) result++;
    n = n >> 1;
  }

  return result;
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function countPrimeSetBits(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    if (isPrime(countSetBits(i))) result++;
  }

  return result;
}

console.log(countPrimeSetBits(6, 10)); // 4
console.log(countPrimeSetBits(10, 15)); // 5
