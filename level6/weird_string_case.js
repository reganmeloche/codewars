/*

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

*/

function toWeirdCase(string){
  //TODO
  var wordArray = string.split(" ");
  var resultArray = []
  
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i].toLowerCase();;
    
    for (var j = 0; j < word.length; j++) {
      if (j % 2 == 0) {
        word = toUpper(word, j);
      }
    }
    
    resultArray[i] = word;
  }
  
  return resultArray.join(" ");
}

function toUpper(word, index) {
  var character = word[index].toUpperCase();
  return word.substr(0, index) + character + word.substr(index + character.length);
}

// Test
describe('toWeirdCase', function(){
  it('should return the correct value for a single word', function(){
    Test.assertEquals(toWeirdCase('This'), 'ThIs');
    Test.assertEquals(toWeirdCase('is'), 'Is');
  });
  it('should return the correct value for multiple words', function(){
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});
