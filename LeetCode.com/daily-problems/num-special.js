/**
 * @param {number[][]} mat
 * @return {number}
 */
function numSpecial(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const rowSum = new Int32Array(rows);
  const colSum = new Int32Array(cols);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1) {
        rowSum[i]++;
        colSum[j]++;
      }
    }
  }

  let result = 0;

  for (let i = 0; i < rows; i++) {
    if (rowSum[i] !== 1) continue;
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1 && colSum[j] === 1) result++;
    }
  }

  return result;
}

console.log(
  numSpecial([
    [1, 0, 0],
    [0, 0, 1],
    [1, 0, 0],
  ]),
); // 1
console.log(
  numSpecial([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]),
); // 3
