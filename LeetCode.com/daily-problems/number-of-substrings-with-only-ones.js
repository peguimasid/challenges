/**
 * @param {string} s
 * @return {number}
 */
function numSub(s) {
  return (
    s.split("0").reduce((acc, str) => {
      return acc + ((str.length + 1) * str.length) / 2;
    }, 0) % 1000000007
  );
}

console.log(numSub("0110111")); // 9
console.log(numSub("101")); // 2
console.log(numSub("111111")); // 21
