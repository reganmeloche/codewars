
/*

Your server has sixteen memory banks; each memory bank can hold any number of blocks. You must write a routine to balance the blocks between the memory banks.

The reallocation routine operates in cycles. In each cycle, it finds the memory bank with the most blocks (ties won by the lowest-numbered memory bank) and redistributes those blocks among the banks. To do this, it removes all of the blocks from the selected bank, then moves to the next (by index) memory bank and inserts one of the blocks. It continues doing this until it runs out of blocks; if it reaches the last memory bank, it wraps around to the first one.

We need to know how many redistributions can be done before a blocks-in-banks configuration is produced that has been seen before.

For example, imagine a scenario with only four memory banks:

The banks start with 0, 2, 7, and 0 blocks ([0,2,7,0]). The third bank has the most blocks (7), so it is chosen for redistribution.
Starting with the next bank (the fourth bank) and then continuing one block at a time, the 7 blocks are spread out over the memory banks. The fourth, first, and second banks get two blocks each, and the third bank gets one back. The final result looks like this: 2 4 1 2.
Next, the second bank is chosen because it contains the most blocks (four). Because there are four memory banks, each gets one block. The result is: 3 1 2 3.
Now, there is a tie between the first and fourth memory banks, both of which have three blocks. The first bank wins the tie, and its three blocks are distributed evenly over the other three banks, leaving it with none: 0 2 3 4.
The fourth bank is chosen, and its four blocks are distributed such that each of the four banks receives one: 1 3 4 1.
The third bank is chosen, and the same thing happens: 2 4 1 2. At this point, we've reached a state we've seen before: 2 4 1 2 was already seen. The infinite loop is detected after the fifth block redistribution cycle, and so the answer in this example is 5.
Return the number of redistribution cycles completed before a configuration is produced that has been seen before.

*/

function memAlloc(banks) {
  let result = 0;
  
  let storage = {};
  
  var n = banks.length;
  
  while (true) {
    const ind = findHighestIndex(banks);
    let val = banks[ind];
    banks[ind] = 0;
    let i = 1;
    while (val > 0) {
      let nextInd = (ind + i) % n;
      banks[nextInd]++;
      val--;
      i++;
    }
    
    result++;
    let data = banks.join(',');
    if (storage[data]) {
      break;
    } else {
      storage[data] = true;
    }
  }
 
  return result;
}


function findHighestIndex(arr) {
  let max = 0;
  let maxInd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxInd = i;
    }
  }
  return maxInd;
}


// Tests
Test.describe("Should pass basic tests", function() {
  Test.assertEquals(memAlloc([5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 600]), 70)
  Test.assertEquals(memAlloc([53, 21, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 60]), 316)
  Test.assertEquals(memAlloc([14, 21, 10, 0, 1, 7, 0, 14, 3, 12, 8, 10, 17, 12, 0, 19]), 826)
  Test.assertEquals(memAlloc([5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]), 5042)  
  Test.assertEquals(memAlloc([17, 17, 3, 5, 1, 10, 6, 2, 0, 12, 8, 11, 16, 2, 1, 6]), 158378)
});
