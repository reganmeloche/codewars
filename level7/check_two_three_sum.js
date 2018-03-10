/*
Given an array with 5 string values 'a', 'b' or 'c'. Check if the array contains three and two of the same values.

For example:

['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a'

*/


function checkThreeAndTwo(array) {
  let dic = array.reduce((acc,x) => {
    acc[x] = acc[x] + 1 || 1;
    return acc;
  },{});
  
  if (Object.keys(dic).length !== 2) {
    return false;
  }
  
  const first = array[0];
  if (dic[first] === 2 || dic[first] === 3) {
    return true;
  }
  
  return false;  
}