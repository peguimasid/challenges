/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
function modifiedMatrix(matrix) {
  const maxColNums = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let max = -1;
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(matrix[j][i], max);
    }
    maxColNums.push(max);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === -1) matrix[i][j] = maxColNums[j];
    }
  }

  return matrix;
}

const mat = [
  [2, -1, 2, -1, 2],
  [1, 0, -1, 2, -1],
  [2, -1, -1, -1, 2],
  [2, 1, 2, -1, 2],
  [0, 1, 0, 0, 0],
  [0, 0, 0, 0, -1],
  [2, -1, 2, 2, 0],
  [0, 1, 0, 2, 2],
  [2, 2, 0, 1, -1],
];

console.log(modifiedMatrix(mat));
// [
//   [2, 2, 2, 2, 2],
//   [1, 0, 2, 2, 2],
//   [2, 2, 2, 2, 2],
//   [2, 1, 2, 2, 2],
//   [0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 2],
//   [2, 2, 2, 2, 0],
//   [0, 1, 0, 2, 2],
//   [2, 2, 0, 1, 2],
// ];
