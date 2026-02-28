/**
 * @param {number} n
 * @return {number}
 */
function concatenatedBinary(n) {
	let result = 0;
	let bitLength = 1;

	for (let i = 1; i <= n; i++) {
		if ((i & (i - 1)) === 0 && i > 1) {
			bitLength++;
		}
		result = (result * 2 ** bitLength + i) % (10 ** 9 + 7);
	}

	return result;
}

console.log(concatenatedBinary(1)); // 1

// 1,2,3 -> "1","10","11" -> 11011 -> 27
console.log(concatenatedBinary(3)); // 27

console.log(concatenatedBinary(12)); // 505379714
console.log(concatenatedBinary(42)); // 727837408
