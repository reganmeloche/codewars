/*

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

*/

function testit(s){

  if (s.length%2 != 0){
    s+= s[s.length-1];
  }
  var result = '';
  
  if (s.length > 1) {
    for (var i=0; i < s.length/2; i++){
      result += String.fromCharCode(parseInt((s.charCodeAt(2*i) + s.charCodeAt(2*i + 1))/2));
    }
    return result;
  }
   else{ return s;}
  //return ???;
}


// Test
//return s ?
Test.assertSimilar(testit(""), "", "")
Test.assertSimilar(testit("a"), "a", "")
Test.assertSimilar(testit("b"), "b", "")
//return s.substr(0,1) ?
Test.assertSimilar(testit("aa"), "a", "")
Test.assertSimilar(testit("ab"), "a", "")
Test.assertSimilar(testit("bc"), "b", "")
//return s.substr(0,s.length/2) ?
Test.assertSimilar(testit("aaaa"), "aa", "")
Test.assertSimilar(testit("aaaaaa"), "aaa", "")
//click "Submit" try more testcase...
