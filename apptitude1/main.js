function countSmaller(nums) {
    const maxValue = Math.max(...nums);
    const bit = new Array(maxValue + 1).fill(0); // Create Binary Indexed Tree
    const result = new Array(nums.length).fill(0); // Initialize the result array
    
    function update(index) {
      while (index <= maxValue) {
        bit[index]++;
        index += index & -index;
      }
    }
    
    function query(index) {
      let count = 0;
      while (index > 0) {
        count += bit[index];
        index -= index & -index;
      }
      return count;
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
      const value = nums[i];
      result[i] = query(value - 1); // Count of smaller elements to the right
      update(value); // Update the Binary Indexed Tree
    }
    
    return result;
  }
  
  // Test the function with the given example
  const inputArray = [3, 4, 9, 6, 1];
  const resultArray = countSmaller(inputArray);
  console.log(resultArray); // Output: [1, 1, 2, 1, 0]
  