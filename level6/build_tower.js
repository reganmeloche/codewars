/*

Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]

*/


function towerBuilder(nFloors) {
   var result = [];
   var maxStars = 2 * nFloors - 1;
   
   for (var i = 0; i < nFloors; i++) {
     result[i] = '';  
     var stars = 2 * i + 1;
     var spaces = maxStars - stars;
     
     for (var j = 0; j < spaces/2; j++) {
       result[i] += ' ';
     }
     for (var k = 0; k < stars; k++) {
       result[i] += '*';
     }
     for (var l = 0; l < spaces/2; l++) {
       result[i] += ' ';
     }
   }

   return result;
}

// Test
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);




