/*

No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!

*/

function testit(arr){
  return (arr[0] * arr[3]) + (arr[1] * arr[2]);
}

// Test
//Add? subtract? multiply? divide? Who and who?
Test.assertSimilar(testit([0,0,0,0]), 0, "")
Test.assertSimilar(testit([0,0,0,1]), 0, "")
Test.assertSimilar(testit([0,0,1,1]), 0, "")
Test.assertSimilar(testit([0,1,0,1]), 0, "")
Test.assertSimilar(testit([0,1,1,0]), 1, "")
Test.assertSimilar(testit([1,0,0,1]), 1, "")
//Click "Submit" try more testcase...
