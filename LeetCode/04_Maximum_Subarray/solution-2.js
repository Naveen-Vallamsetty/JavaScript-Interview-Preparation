/*
    let array = [1, 2, 3]

    currentSum = 1
    maxSum = 1

    Iterrations:
    1st iteration: 
    curretSum = maximum of (2, currentSum + 2) = (2, 3) // 3
    maxSum = maximum of (currentSum, maxSum) = (3, 1) // 3

    2nd iteration: 
    currentSum = maximum of (3, currentSum + 3)  = (3, 6) // 6
    maxSum = maximum of (currentSum, maxSum) = (6, 3) // 6

*/

let maxSubArraySum = (nums) => {
  let currSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currSum = Math.max(nums[i], currSum + nums[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(nums)); // Output = 6

const nums1 = [5, 4, -1, 7, 8];
console.log(maxSubArraySum(nums1)); // Output = 23
