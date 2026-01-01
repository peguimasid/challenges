/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  let i = digits.length - 1;

  while (digits[i] === 9) {
    digits[i] = 0;
    if (i === 0) digits.unshift(1);
    i--;
  }

  if (i >= 0) digits[i]++;

  return digits;
}

console.log(plusOne([9])); // [1,0]
console.log(plusOne([9, 9, 9, 9])); // [1,0,0,0,0]
console.log(plusOne([9, 9, 9, 8])); // [9,9,9,9]
console.log(plusOne([1, 0, 0, 9])); // [1,0,1,0]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
