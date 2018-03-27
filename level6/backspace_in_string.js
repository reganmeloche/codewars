/*

Assume '#' is like backspace in string. This means that string "a#bc#d" actually is "bd"

"abc#d##c" is "ac"

"abc##d######" is ""

"######" is ""

"" is ""

Your task is to process string with '#' symbols

*/

function clean_string(s) {
	var result = [];
  var bs = 0;
  var srev = s.split('').reverse();
  
  for (var i = 0; i < srev.length; i++) {
    if (srev[i] == "#") { bs++; }
    else {
      if (bs > 0) { bs--; } else { result.push(srev[i]); }
    }
  }
  
  return result.reverse().join('');
};

// Test
Test.assertEquals(clean_string('abc#d##c'), "ac")
Test.assertEquals(clean_string('abc####d##c#'), "" )
