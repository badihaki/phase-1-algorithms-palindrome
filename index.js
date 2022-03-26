function isPalindrome(word) {
  // Write your algorithm here
  // this funciton takes in a word and finds out if it's a palindrome
  // apparently a palindrome is a word that's the same front and back
  const reserveWord = [];
  for (const letter of word){
    reserveWord.unshift(letter);
  }
  console.log(reserveWord.join(''));
  return reserveWord.join('') === word;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  Ok, so the isPalindrome function needs to take a word and see if it's the same front and back
  -SO I need to establish an ARRAY variable, 'reverseWord', to compare the original 'word' to
  -After that, I need to iterate over the length of the 'word' and UNSHIFT each letter to the front of the array
  -Finally, I need to turn 'reserseWord' into a string. String it up, and return word === reverseWord
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: True");
  console.log(`=>`, isPalindrome('mom'))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
