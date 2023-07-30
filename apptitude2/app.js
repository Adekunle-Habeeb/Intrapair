function findFirstRecurringCharacter(str) {
    const charMap = {};
  
    for (const char of str) {
      if (charMap[char]) {
        return char;
      }
      charMap[char] = true;
    }
  
    return null;
  }
  
console.log(findFirstRecurringCharacter("acbbac")); // Output: "b"
console.log(findFirstRecurringCharacter("abcdef")); // Output: null