/**
 * @param {number[]} nums
 * @return {number}
 */
function unequalTriplets(nums) {
  const frequencies = nums.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let result = 0;
  let previous = 0;
  let next = nums.length;

  for (const key in frequencies) {
    next -= frequencies[key];
    result += previous * frequencies[key] * next;
    previous += frequencies[key];
  }

  return result;
}

console.log(unequalTriplets([4, 4, 2, 4, 3])); // 3
console.log(unequalTriplets([1, 3, 1, 2, 4])); // 7

// [4, 4, 2, 4, 3]
// 4 appears 3 times
// 2 appears 1 time
// 3 appears 1 time
// So we have this map {4: 3, 2: 1, 3: 1}
// We just need the values so [3,1,1]
// previous = result = 0
// next = nums.length = 5
// FOR EACH VALUE OF FREQUENCIES
//    ----- FIRST ITERATION (freq = 3 for value 4) -----
//    Start: next = 5; result = 0; previous = 0; current freq = 3
//    next = 5 - 3 = 2
//    result = 0 + (0 * 3 * 2) = 0
//    previous = 0 + 3 = 3
//    End: next = 2; result = 0; previous = 3
//
//    ----- SECOND ITERATION (freq = 1 for value 2) -----
//    Start: next = 2; result = 0; previous = 3; current freq = 1
//    next = 2 - 1 = 1
//    result = 0 + (3 * 1 * 1) = 3
//    previous = 3 + 1 = 4
//    End: next = 1; result = 3; previous = 4
//
//    ----- THIRD ITERATION (freq = 1 for value 3)  -----
//    Start: next = 1; result = 3; previous = 4; current freq = 1
//    next = 1 - 1 = 0
//    result = 3 + (4 * 1 * 0) = 3
//    previous = 4 + 1 = 5
//    End: next = 0; result = 3; previous = 5
//
// Final result = 3

// [1, 3, 1, 2, 4]
// 1 appears 2 times
// 3 appears 1 time
// 2 appears 1 time
// 4 appears 1 time
// So we have this map {1: 2, 3: 1, 2: 1, 4: 1}
// We just need the values so [2,1,1,1]
// previous = result = 0
// next = nums.length = 5
// FOR EACH VALUE OF FREQUENCIES
//    ----- FIRST ITERATION (freq = 2 for value 1) -----
//    Start: next = 5; result = 0; previous = 0; current freq = 2
//    next = 5 - 2 = 3
//    result = 0 + (0 * 2 * 3) = 0
//    previous = 0 + 2 = 2
//    End: next = 3; result = 0; previous = 2
//
//    ----- SECOND ITERATION (freq = 1 for value 3) -----
//    Start: next = 3; result = 0; previous = 2; current freq = 1
//    next = 3 - 1 = 2
//    result = 0 + (2 * 1 * 2) = 4
//    previous = 2 + 1 = 3
//    End: next = 2; result = 4; previous = 3
//
//    ----- THIRD ITERATION (freq = 1 for value 2) -----
//    Start: next = 2; result = 4; previous = 3; current freq = 1
//    next = 2 - 1 = 1
//    result = 4 + (3 * 1 * 1) = 7
//    previous = 3 + 1 = 4
//    End: next = 1; result = 7; previous = 4
//
//    ----- FOURTH ITERATION (freq = 1 for value 4) -----
//    Start: next = 1; result = 7; previous = 4; current freq = 1
//    next = 1 - 1 = 0
//    result = 7 + (4 * 1 * 0) = 7
//    previous = 4 + 1 = 5
//    End: next = 0; result = 7; previous = 5
//
// Final result = 7
