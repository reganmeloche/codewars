/*
In this Kata, you will sort elements in an array by decreasing frequency of elements. If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
--we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value
*/

function solve(arr){
  let res = [];
  
  let dic = arr.reduce((acc,x) => {
    if (!acc[x]) { acc[x] = 0; };
    acc[x]++;
    return acc;
  }, {});
  
  let inv = Object.keys(dic).reduce((acc,x) => {
    let ct = dic[x];
    if (!acc[ct]) { acc[ct] = []; }
    acc[ct].push(x);
    return acc;
  }, {});
  
  let sorts = Object.keys(inv).sort((x,y) => y - x);
  
  for (let i = 0; i < sorts.length; i++) {
    let ct = sorts[i];
    let arrToPrint = inv[ct].sort((a,b) => a - b);
    for (let j = 0; j < arrToPrint.length; j++) {
      for (let k = 0; k < ct; k++) {
        res.push(parseInt(arrToPrint[j]));
      }
    }
  }
  return res;
  
  
}

// Better solution
function solve2(arr){
  let r={}
  for (let n of arr) {
    r[n] = r[n] + 1 || 1;
  }
  return arr.slice().sort((a, b) => r[b] - r[a] || a - b);
}