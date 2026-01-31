/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
function nextGreatestLetter(letters, target) {
  let result = null;

  for (const char of letters) {
    if (char > target && (result === null || char < result)) {
      result = char;
    }
  }

  return result ?? letters.at(0);
}

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // "f"
console.log(nextGreatestLetter(["x", "x", "y", "y"], "z")); // "x"
