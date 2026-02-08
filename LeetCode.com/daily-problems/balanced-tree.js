function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function getHeight(node) {
  let result = 0;

  function traverse(node, depth) {
    if (!node) return;
    result = Math.max(result, depth);
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }

  traverse(node, 1);

  return result;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
  if (!root) return true;

  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (Math.abs(leftHeight - rightHeight) > 1) return false;

  return isBalanced(root.left) && isBalanced(root.right);
}

const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

console.log(isBalanced(tree)); // true

tree.left.left.left = new TreeNode(6);

console.log(isBalanced(tree)); // false

const tree2 = new TreeNode(1);
tree2.right = new TreeNode(2);
tree2.right.right = new TreeNode(3);

console.log(isBalanced(tree2)); // false
