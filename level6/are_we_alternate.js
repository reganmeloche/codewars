/*

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.

*/

function isAlt(word) {
  // happy codinggg
  var vowels = ['a','e','i','o','u'];
  
  for (var i = 1; i < word.length; i++) {
    if ((vowels.indexOf(word[i-1]) >= 0 && vowels.indexOf(word[i]) >= 0) || 
        (vowels.indexOf(word[i-1]) < 0 && vowels.indexOf(word[i]) < 0)) {
      return false;      
    }
  }
  return true;
}
