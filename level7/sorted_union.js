/*

Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

*/

function uniteUnique() {
  
  var n = arguments.length;
  var unionArr = [];

  for (var i = 0; i < n; i++) {
    var arr = arguments[i];
    
    for (var j = 0; j < arr.length; j++) {
      if (unionArr.indexOf(arr[j]) == -1) {
        unionArr.push(arr[j]);
      }
    }
  }
  
  return unionArr;
  
}

// Test
Test.describe("Basic tests",_=>{
Test.assertSimilar(uniteUnique([1, 2], [3, 4]),[1, 2, 3, 4]);
Test.assertSimilar(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]),[1, 3, 2, 5, 4]);
Test.assertSimilar(uniteUnique([4, 3, 2, 2]),[4, 3, 2]);
Test.assertSimilar(uniteUnique([4, "a", 2], []),[4, "a", 2]);
Test.assertSimilar(uniteUnique([], [4, "a", 2]),[4, "a", 2]);
Test.assertSimilar(uniteUnique([], [4, "a", 2], []),[4, "a", 2]);
Test.assertSimilar(uniteUnique([]),[]);
Test.assertSimilar(uniteUnique([],[]),[]);
Test.assertSimilar(uniteUnique([],[1, 2]),[1, 2]);
Test.assertSimilar(uniteUnique([],[1, 2, 1, 2],[2, 1, 1, 2, 1]),[1, 2]);
})
