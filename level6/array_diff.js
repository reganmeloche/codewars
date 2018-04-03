/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]

*/

function array_diff(a, b) {
  
  var result = a;
  
  for (var i = 0; i < b.length; b++) {
    while (result.indexOf(b[i]) >= 0) {
      var ind = result.indexOf(b[i]);
      result.splice(ind, 1);
    }
  }
  return result;
}

// Test
Test.expect(array_diff([], [4,5], []), "a was [], b was [4,5], expected []");
Test.expect(array_diff([3,4], [3], [4]), "a was [3,4], b was [3], expected [4]");
Test.expect(array_diff([1,8,2], [], [1,8,2]), "a was [1,8,2], b was [], expected [1,8,2]");
