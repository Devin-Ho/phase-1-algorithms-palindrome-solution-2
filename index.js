function isPalindrome(word) {
  // Write your algorithm here

  for (let i = 0; i< word.length / 2; i++){
    const j = word.length - 1 - i;
    const startChar = word[i];
    const endChar = word[j];

    if (startChar !== endChar) return false;
  }
  return true;
}

/* 
  Add your pseudocode here
  If the first letter is the same as the last letter, and the second letter is the same as the second to last letter, etc.
  Until we reach the middle, return true 

  Iterate from the beginning to the middle 
    check each letter to the corresponding letter from the end
      if any letters don't match, return false 
  
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}


module.exports = isPalindrome;
