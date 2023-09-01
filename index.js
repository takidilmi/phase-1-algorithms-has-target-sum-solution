function hasTargetSum(array, target) {
  const visitedNumbers = new Set();

  for (const num of array) {
    const difference = target - num;
    
    if (visitedNumbers.has(difference)) {
      return true;
    }
    
    visitedNumbers.add(num);
  }
  
  return false;
}

/* 
  O(n)
  
*/

/* 
  1. Create an empty set called visitedNumbers to keep track of visited numbers.
  2. Iterate through each number, num, in the input array:
   a. Calculate the difference as target - num.
   b. Check if the difference is in the visitedNumbers set:
      - If yes, return true because there exists a pair of numbers that adds up to the target.
   c. Add num to the visitedNumbers set to mark it as visited.
  3. If the loop completes without finding a pair, return false because no pair adds up to the target.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
