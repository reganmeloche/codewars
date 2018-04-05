/*

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.

*/

function sumTwoSmallestNumbers(numbers) {  
  console.log(numbers);
  var min1 = numbers[0];
  var min2 = Math.max(numbers[1], numbers[2]);
  var min1ind = 0;
  
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min1) {
      min1ind = i;
      min1 = numbers[i];
    }
  }
  
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < min2 && i != min1ind) {
      min2 = numbers[i];
    }
  }
  
   return min1 + min2;
};


// Test
describe("Your function", _ => {
  it("should work for basic tests", _ => {
    Test.assertEquals(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
    Test.assertEquals(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
    Test.assertEquals(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
    Test.assertEquals(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
    Test.assertEquals(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");
  });
});
