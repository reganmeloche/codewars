/*
Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

function findOdd(A) {
  let res = 0;
  const dic = A.reduce((acc,x) => {
    acc[x] = acc[x] + 1 || 1;
    return acc;
  },{});
  
  Object.keys(dic).forEach(x => {
    if (dic[x]%2 === 1) {
      res = parseInt(x);
    }
  });

  return res;
}

// Better solution
const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);