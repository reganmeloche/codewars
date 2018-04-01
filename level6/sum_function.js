/*

Write a sum function which will work properly when invoked using either syntax below.

sum(2,3);  // Outputs 5
sum(2)(3); // Outputs 5
HINT : use closures

*/

function sum(x,y) {
  
  if (y != null) {
    return x + y;
  }
  return function(z) {
    return x + z;
  };
}

// Test
Test.assertEquals(sum(2,3),5);
Test.assertEquals(sum(2)(3),5);
Test.assertEquals(sum(4,6),10);
Test.assertEquals(sum(4)(6),10);
