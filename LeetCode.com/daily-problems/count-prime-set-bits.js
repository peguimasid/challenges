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

// Example usage:
console.log(isPrime(17)); // true
console.log(isPrime(9)); // false
console.log(isPrime(2)); // true
console.log(isPrime(10)); // false

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function countPrimeSetBits(left, right) {
  //
}

// console.log(countPrimeSetBits(6, 10)); // 4
// console.log(countPrimeSetBits(10, 15)); // 5
