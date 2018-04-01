/*

Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see Example Tests: for more details.

*/


function listSquared(m, n) {
  var result = [];
    
  for (var i = m; i < n; i++) {
    var divisors = getDivisors(i);  
    
    if (divisors.length > 0) {
      var sum = sumArr(divisors);  
      if (Math.sqrt(sum)%1===0) {
        result.push([i,sum]);
      }
    }    
  }
  return result;
}

function getDivisors(n) {
  var result = [];
  var limit = Math.floor(n/2) + 1;
  
  for (var i = 1; i < limit; i++){
    if (n%i == 0) {
      result.push(i);  
    }
  }
  result.push(n);
  return result;
}

function sumArr(arr) {
  result = 0;  
  for (var i = 0; i < arr.length; i++) {
    result += arr[i]*arr[i];
  }
  return result;
}


// Test
Test.describe("Basic tests",function() {
Test.assertSimilar(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
Test.assertSimilar(listSquared(42, 250), [[42, 2500], [246, 84100]])
Test.assertSimilar(listSquared(250, 500), [[287, 84100]])

})
