function sumLeft(nums, startIndex) {
  let result = 0;

  for (let i = startIndex; i >= 0; i--) {
    result += nums[i];
  }

  return result;
}

function sumRight(nums, startIndex) {
  let result = 0;

  for (let i = startIndex; i < nums.length; i++) {
    result += nums[i];
  }

  return result;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function countValidSelections(nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue;
    let sumL = sumLeft(nums, i);
    let sumR = sumRight(nums, i);

    if (sumL === sumR) result += 2;
    if (sumL - 1 === sumR) result += 1;
    if (sumL === sumR - 1) result += 1;
  }

  return result;
}

console.log(countValidSelections([1, 0, 2, 0, 3])); // 2
console.log(countValidSelections([2, 3, 4, 0, 4, 1, 0])); // 0

// Intuition....
// sum_left --> sum of all elements in left to nums[i]
// sum_right --> sum of all elements in right to nums[i]
// when nums[i] ==0 and sum_right == sum_left : count+=2
// when nums[i] ==0 and sum_right-1==sum_left : count +=1
// when nums[i] == 0 and sum_right == sum_left-1 : count +=1
