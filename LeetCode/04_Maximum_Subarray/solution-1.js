/*
    Brute force approach 

    let array = [1, 2, 3, 4, 5]
    Outer loop: i = 0
        Inner loop: j = i ( j = 0), 1, 2, 3, 4
        [1]
        [1,2]
        [1,2,3]
        [1,2,3,4]
        [1,2,3,4,5]

*/

function maxSubArray(nums) {
  let maxSum = -Infinity; // Initialize to the smallest possible number

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      // Calculate the sum of the subarray nums[i...j]
      let currentSum = 0;
      for (let k = i; k <= j; k++) {
        currentSum += nums[k];
      }
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Output = 6

const nums1 = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums1)); // Output = 23
