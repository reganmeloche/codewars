/*

Two Joggers
Description
Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

Illustration
Example where Charles (dashed line) runs a shorter lap than Bob:

Example laps

Task
Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)

The function should return an array (Tuple<int, int> in C#) containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run

Examples:

nbrOfLaps(5, 3); // returns [3, 5]
nbrOfLaps(4, 6); // returns [3, 2]

*/

var nbrOfLaps = function (x, y) {
  var max = Math.max(x,y);
  var min = Math.min(x,y);

  for (var i = 1; i <= Math.min(x,y); i++) {
    var num = i * max;
    if (num % min === 0) {
      return [num/x, num/y];
    }
  }
  return [0,0];
}


// Test
Test.expect(nbrOfLaps(5, 3)[0] == 3, 'x = 5, y = 3 The number of laps for Bob is wrong. Expected 3, got ' + nbrOfLaps(5, 3)[0] + '!')
Test.expect(nbrOfLaps(5, 3)[1] == 5, 'x = 5, y = 3 The number of laps for Charles is wrong. Expected 5, got ' + nbrOfLaps(5, 3)[1] + '!')
Test.expect(nbrOfLaps(4, 6)[0] == 3, 'x = 4, y = 6 The number of laps for Charles is wrong. Expected 3, got ' + nbrOfLaps(4, 6)[0] + '!')
Test.expect(nbrOfLaps(4, 6)[1] == 2, 'x = 4, y = 6 The number of laps for Charles is wrong. Expected 2, got ' + nbrOfLaps(4, 6)[1] + '!')
Test.expect(nbrOfLaps(5, 5)[0] == 1, 'x = 5, y = 5 The number of laps for Bob is wrong. Expected 1, got ' + nbrOfLaps(5, 5)[0] + '!')
Test.expect(nbrOfLaps(5, 5)[1] == 1, 'x = 5, y = 5 The number of laps for Charles is wrong. Expected 1, got ' + nbrOfLaps(5, 5)[1] + '!')
