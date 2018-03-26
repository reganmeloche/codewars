/*

Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

*/


function solution(n){
  // first check if number is in dict
  if (dic[n]) {return dic[n];}
  
  const str = String(n);
  const len = str.length;
  
  // Break into tens e.g. 1990 = 1000 + 900 + 90 + 0 => [0, 90, 900, 1000]
  let nums = [];
  for (let i = len-1; i >= 0; i--) {
    nums[i] = str[i] + Array(len - i).join('0');
  }
  console.log(nums);
  
  // Romanize each of the components
  var results = nums.map(x => romanize(parseInt(x)));
  console.log(results);
  // Join the components
  var finalResult = results.join('');
  return finalResult;
}

function romanize(num) {
  // If the number is in the preset list, then return it
  if (dic[num]) { return dic[num]; }
  
  // If 0, then return blank
  if (parseInt(num) == 0) { return ''; }
  
  // Init result to empty
  var result = '';
  
  // Copy the number
  var temp = num;
  
  // Iterate through the preset integers in reverse order
  var steps = [1000, 500, 100, 50, 10, 5, 1];
  
  for (let i = 0; i < steps.length; i++) {
    currInt = steps[i];
    nextInt = steps[i+1];
    
    let diff = 0;
    while (diff >= 0) {
      
      // Get the difference between the temp and the current preset int
      diff = temp - currInt;
      
      // If the diff is less than 0 AND the abs(diff) appears in the preset list,
      // Then concat the diff roman num with the curr roman num
      // e.g. temp = 90, currInt = 100: 90 - 100 = 10. 
      // 10 is in the list => result = rom(10) + rom(100) = XC
      if (diff < 0 && dic[Math.abs(diff)]) {
        return dic[Math.abs(diff)] + dic[currInt];
      } else if (diff >= 0) {
        // Else if the diff >= 0, then just add the roman num on and continue
        result += dic[currInt];
        temp -= currInt;
        if (temp == 0) {
          return result;
        }
      } 
    }
  }
  return result; 
}


const dic = {
1: 'I',
5: 'V',
10: 'X',
50: 'L',
100: 'C',
500: 'D',
1000: 'M'
};



// Test
Test.expect(solution(1) == 'I', '1 should == "I"')
Test.expect(solution(4) == 'IV', '4 should == "IV"')
Test.expect(solution(1000) == 'M', '1000 should == "M"')
Test.expect(solution(1990) == 'MCMXC', '1990 should == "MCMXC"')
Test.expect(solution(2007) == 'MMVII', '2007 should == "MMVII"')

