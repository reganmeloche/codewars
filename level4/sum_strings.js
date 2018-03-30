/*

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

function sumStrings(a,b) { 
  var max = Math.max(a.length, b.length);
  var resultArr = [];
  var carry = 0;
  
  for (var i = 1; i <= max; i++) {
    var next = getNext(a, b, carry, i);
    resultArr[max + 1 - i] = next.nextSum;
    carry = next.carry;
  }
  resultArr[0] = carry;

  return resultArr.slice(resultArr.findIndex(x => x != 0)).join('');
}

function getNext(a,b,carry,i) {
  var aDig = parseInt(a[a.length - i]) || 0;
  var bDig = parseInt(b[b.length - i]) || 0;
  var nextSum =  aDig + bDig + carry;
  carry = 0;
  if (nextSum > 9) {
    carry = parseInt(String(nextSum)[0]);
    nextSum = parseInt(String(nextSum)[1]);
  }
  
  return { carry, nextSum };
}

function remover(x) {
  var res = (x != NaN && x != null && x != '') || (x == 0);
  console.log(x, res);
  return res;
}

// Test
Test.assertEquals(sumStrings('123','456'),'579')
