/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  let prefix = strs[0];
  let prefixLength = prefix.length;

  for (const str of strs) {
    while (prefix !== str.substring(0, prefixLength)) {
      prefixLength--;
      if (prefixLength === 0) return "";
      prefix = prefix.substring(0, prefixLength);
    }
  }

  return prefix;
}

console.log(longestCommonPrefix(["", ""])); // ""
console.log(longestCommonPrefix([""])); // ""
console.log(longestCommonPrefix(["a"])); // "a"
console.log(longestCommonPrefix(["flower", "flower"])); // "fl"
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
