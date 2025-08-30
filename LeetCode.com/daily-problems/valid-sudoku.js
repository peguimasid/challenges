/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidRowsAndColumns = (board) => {
  for (let i = 0; i < 9; i++) {
    let row = [];
    let col = [];
    for (let j = 0; j < 9; j++) {
      row.push(board[i][j]);
      col.push(board[j][i]);
    }
    const rowNums = row.filter((i) => i !== ".");
    const colNums = col.filter((i) => i !== ".");
    if (rowNums.length !== [...new Set(rowNums)].length) return false;
    if (colNums.length !== [...new Set(colNums)].length) return false;
  }

  return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  if (!isValidRowsAndColumns(board)) return false;

  return true;
}

const board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board1)); // true

const board2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// console.log(isValidSudoku(board2)); // false
