/*

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

*/

function testit(a,b){
  var bina = (a >>> 0).toString(2)
  var binb = (b >>> 0).toString(2)
  return a | b;
}


// Test
//a+b?
Test.assertSimilar(testit(0,1), 1, "")
Test.assertSimilar(testit(1,2), 3, "")
Test.assertSimilar(testit(10,20), 30, "")
//a*b?
Test.assertSimilar(testit(1,1), 1, "")
Test.assertSimilar(testit(1,3), 3, "")
//try "Submit" find more...
