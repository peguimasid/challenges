/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
function maxBottlesDrunk(numBottles, numExchange) {
  let fullBottles = numBottles;
  let emptyBottles = 0;
  let drunkBottles = 0;
  let exchange = numExchange;

  while (fullBottles > 0) {
    emptyBottles += fullBottles;
    drunkBottles += fullBottles;
    fullBottles = 0;
    while (emptyBottles >= exchange) {
      fullBottles++;
      emptyBottles -= exchange;
      exchange++;
    }
  }

  return drunkBottles;
}

console.log(maxBottlesDrunk(13, 6)); // 15
console.log(maxBottlesDrunk(10, 3)); // 13
console.log(maxBottlesDrunk(20, 1)); // 26
