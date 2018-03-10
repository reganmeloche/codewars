/*

You will be given an array and a single item from that array. The smallest value in array has the highest kyu - 1st kyu, 2nd smallest - 2nd kyu and so on. There are 8 kyus and each one has limited spots:

 1st kyu - 1 slot
 2nd kyu - 2 slots
 3rd kyu - 2 slots
 4th kyu - 3 slots
 5th kyu - 3 slots
 6th kyu - 3 slots
 7th kyu - 4 slots
 8th kyu - 4 slots
You should return kyu for the value passed based on the array. If value isn't low enough to get a kyu then return 0.

Examples:

([66,12,90,15], 15) => 2
([1,7,2,3,4,5], 1) => 1
([1,7,2,3,4,5,9,10], 7) => 4

*/

function getKyu(allHonors, honor){
  let slots = [1,2,2,3,3,3,4,4];
  let aggSlots = [1,3,5,8,11,14,18,22];  
  let sorted = allHonors.sort((a,b) => a-b);
  let f = sorted.indexOf(honor) + 1;

  let pos = 0;
  for (let i = 0; i < aggSlots.length; i++) {
    if (f <= aggSlots[i]) {
      pos = i + 1;
      break;
    }
  }
  return pos;
}