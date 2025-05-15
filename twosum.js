function twoSuM(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
      return []
    }
  }
}
twoSuM();


//hasmap method
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const complement = target - current;

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(current, i);
  }

  return [];
};
//map.get(complement) gives its index.
//i is the index of the current number.
//map.set(current, i);---->>>>If no pair was found yet, we store the current number in the map.