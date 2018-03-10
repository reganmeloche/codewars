/*
In this Kata, you will be given an array of integers and your task is to return the number of arithmetic progressions of size 3 that are possible from that list. In each progression, the differences between the elements must be the same.

solve([1,2,3,5,7,9]) = 5, as follows: [1,2,3], [1,3,5],[1,5,9],[3,5,7], and [5,7,9].
*/

function solve(arr){
  var bounds = arr[arr.length - 1] - arr[0];
  let ct = 0;
  
  let dt = arr.reduce((acc,x) => {
    acc[x] = true;
    return acc;
  }, {});

  
  for (let i = 1; i < bounds; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let t1 = arr[j];
      let t2 = arr[j] + i;
      let t3 = arr[j] + (2 * i);
      if (dt[t2] && dt[t3]) {
        ct++;
      }
    }
  }
  return ct;
  
}