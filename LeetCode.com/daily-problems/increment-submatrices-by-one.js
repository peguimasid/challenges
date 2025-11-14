/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
function rangeAddQueries(n, queries) {
  const result = Array.from({ length: n }, () => Array(n).fill(0));

  for (const [row1, col1, row2, col2] of queries) {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        result[i][j]++;
      }
    }
  }

  return result;
}

// prettier-ignore
console.log(rangeAddQueries(3, [[1,1,2,2],[0,0,1,1]])) // [[1,1,0],[1,2,1],[0,1,1]]

// prettier-ignore
console.log(rangeAddQueries(2, [[0,0,1,1]])) // [[1,1,0],[1,2,1],[0,1,1]]
