/**
 * @param {character[][]} board
 * @return {boolean}
 */
const hasValidRowsAndCols = (board) => {
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
const hasValidSubBoxes = (board) => {
  const boxes = [];

  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const box = [];
      for (let k = i; k < i + 3; k++) {
        for (let l = j; l < j + 3; l++) {
          box.push(board[k][l]);
        }
      }
      boxes.push(box);
    }
  }

  return boxes.every((box) => {
    const nums = box.filter((i) => i !== ".");
    return nums.length === [...new Set(nums)].length;
  });
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  if (!hasValidRowsAndCols(board)) return false;
  if (!hasValidSubBoxes(board)) return false;

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

console.log(isValidSudoku(board2)); // false
