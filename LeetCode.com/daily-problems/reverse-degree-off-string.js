/**
 * @param {string} s
 * @return {number}
 */
function reverseDegree(s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    result += ("z".codePointAt() - s[i].codePointAt() + 1) * (i + 1);
  }

  return result;
}

console.log(reverseDegree("abc")); // 148
