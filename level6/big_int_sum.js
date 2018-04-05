/*

Sum two integers, what would be easier? And what about the really big summands? Create your function, that will be able to take two or more integers as arguments and return their sum.

Result must be a string
1-digit to 500-digit integers
Only integers greater than or equal to zero
No exponent notation
Variable number of arguments (omitted arguments = zero result)
Big integers will be represented as strings
Leading zeros are possible and must be taken in account


*/

function sum() {
  
  var n = arguments.length;
  if (n == 0){
    return '0';
  }
  if (n==1){
    return arguments[0].toString();
  }
  
  var nums = [];
  var max = 0;
  
  for (var i = 0; i < n; i++) {
    nums[i] = arguments[i].toString();
    max = Math.max(max, nums[i].length);
  }
  
  var s = 0;
  var c = 0;
  var arrayResult = [];
  
  
  for (var i = 0; i < max; i++) {
    
    var col = [];
    var colTot = c;
    
    for (var j = 0; j < n; j++) {
      if (nums[j].length < i + 1) {
        col[j] = 0;
      }
      else{
        col[j] = parseInt(nums[j][nums[j].length - i - 1]);
      }   
      colTot += col[j];  
    }

    
    if (colTot > 9) {
      s = parseInt(colTot.toString()[colTot.toString().length - 1]);
      c = (colTot - s) / 10;
    } else {
       s = parseInt(colTot);
       c= 0;
    }

    arrayResult[max - i - 1] = s.toString();  
  }
  
  var result = arrayResult.join('');
  
  if (c > 0) {
    result = c.toString() + result;
  }
  
  while (result[0] == '0'){
    result = result.substr(1, result.length-1);
  }
  
  return result;  
}

// Test
Test.expect(sum(1, 2, 3) == '6', 'Wrong!')
Test.expect(sum('123456789', 2) == '123456791', 'Oops!')
Test.expect(sum(0) == '0', 'Nay!')
Test.expect(sum(
  '26171360011523479938568768502879102014147610585267',
  '54919452849484813416645827897741122706922510451922',
  '60978868971705293697898250181738038209826232123376',
  '69860150841064476785098792603416150336620574263611',
  '56168902810711637957516052113619714978796129638861'
) == '268098735484489701795727691299394128246313057063037', 'Nope!')
