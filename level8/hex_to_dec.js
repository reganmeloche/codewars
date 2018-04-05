/*

Complete the function which converts hex number (given as a string) to a decimal number.

*/

function hexToDec(hexString){
  //your code here
  var result = 0;
  
  var negative = false;
  if (hexString[0] == '-') {
    negative = true;
    hexString = hexString.substring(1, hexString.length);
  }
  
  for (var i = 0; i < hexString.length; i++) {
    var val = getValue(hexString[i]);
    var power = hexString.length - i - 1;
    result += val * Math.pow(16, power);
  }
  
  if (negative) {
    result = -result;
  }
  
  return result;
   
}


function getValue(character) {
  //If it's a number, then just return it
  if (parseInt(character) < 10 && parseInt(character) > 0) {
    return parseInt(character);
  } else {
    switch (character) {
      case 'a':
      case 'A': 
        return 10;
        break;
      case 'b':
      case 'B': 
        return 11;
        break;
      case 'c':
      case 'C':
        return 12;
        break;
       case 'd':
      case 'D': 
        return 13;
        break;
      case 'e':
      case 'E': 
        return 14;
        break;
      case 'f':
      case 'F':
        return 15;
        break;
      default:
        return 0;
        break;
    }
  }
}



// Test
Test.describe("Example Tests",_=>{
Test.assertEquals(hexToDec("1"), 1);
Test.assertEquals(hexToDec("a"), 10);
Test.assertEquals(hexToDec("10"), 16);
Test.assertEquals(hexToDec("FF"), 255);
Test.assertEquals(hexToDec("-C"), -12);
})
