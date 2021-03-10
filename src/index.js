module.exports = function reverse (n) {
  n = Math.abs(n);
  const nums = [...n.toString()];
  
  for (let i = 0; i < nums.length / 2; i++) {
    const idx = nums.length - 1 - i;
    [nums[i], nums[idx]] = [nums[idx], nums[i]];
  }
  
  return Number.parseInt(nums.join(""));
}
