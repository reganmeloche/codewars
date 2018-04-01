/*

Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'

*/

function switcheroo(x){
  return x.split('').map(y => mappy(y)).join(''); 
}

function mappy(x) {
  if (x === 'a') {
    return 'b';
  }
  
  if (x === 'b') {
    return 'a';
  }
  
  return x;
}

// Test
Test.describe("Example tests",_=>{
Test.assertEquals(switcheroo('abc'), 'bac');
Test.assertEquals(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
Test.assertEquals(switcheroo('ccccc'), 'ccccc'); 
});
