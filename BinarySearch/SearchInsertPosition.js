/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let midIndex = parseInt((startIndex + endIndex) / 2);

  if (startIndex !== endIndex) {
    while (startIndex + 1 !== endIndex) {
      if (nums[midIndex] > target) {
        endIndex = midIndex;
        midIndex = parseInt((startIndex + endIndex) / 2);
      } else if (nums[midIndex] < target) {
        startIndex = midIndex;
        midIndex = parseInt((startIndex + endIndex) / 2);
      } else {
        return midIndex;
      }
    }
  }

  if (nums[startIndex] >= target) {
    return startIndex;
  } else if (nums[endIndex] === target) {
    return endIndex;
  } else if (nums[endIndex] < target) {
    return endIndex + 1;
  } else {
    return startIndex + 1;
  }
};

console.log(searchInsert([1], 0));
