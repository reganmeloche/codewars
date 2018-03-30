/*

Javascript // Lua:
Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

rAvg = runningAverage();
rAvg(10) = 10.0;
rAvg(11) = 10.5;
rAvg(12) = 11;

*/

function grille(message, code) {
   var result = '';
   
   var bin = (code >>> 0).toString(2);
   
   for (var i = bin.length; i < message.length; i++) {
     bin = '0' + bin;
   }

     
   if (bin.length > message.length) {
     bin = bin.substring(bin.length - message.length)
   }

   for (var j = 0; j < message.length; j++) {
     if (bin[j] == 1) {
       result += message[j];
     }
   }

   return result;
}

// Test
describe("Solution", function(){
  it("Basic Tests", function(){
    var rAvgSol = runningAverage();
    Test.assertEquals(rAvgSol(10), 10);
    Test.assertEquals(rAvgSol(11), 10.5);   
    Test.assertEquals(rAvgSol(12), 11);   
  });
});
