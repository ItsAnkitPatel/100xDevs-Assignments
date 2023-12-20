/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  let count =0;
  if(str.length==0){
    return 0;
  }
  const vowels = ['a','e','i','o','u'];
  str = str.toLowerCase();
  for(char of str){
    for(let vowel of vowels){
      if(char === vowel){
        ++count;
      }
    }
  }
  return count;
}

module.exports = countVowels;
