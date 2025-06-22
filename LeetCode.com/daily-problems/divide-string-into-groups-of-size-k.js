/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
function divideString(s, k, fill) {
  const result = [];

  for (let i = 0; i < s.length; i += k) {
    result.push(s.slice(i, i + k).padEnd(k, fill));
  }

  return result;
}

console.log(divideString("abcdefghi", 3, "x")); // ["abc","def","ghi"]
console.log(divideString("abcdefghij", 3, "x")); // ["abc","def","ghi","jxx"]
