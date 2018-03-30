/*

Javascript // Lua:
Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

rAvg = runningAverage();
rAvg(10) = 10.0;
rAvg(11) = 10.5;
rAvg(12) = 11;

*/

function runningAverage() {
  var amt = 0;
  var ct = 0;

  function f(x) {
    amt += x;
    ct++;
    var num = amt/ct;
    return Math.round(num * 100) / 100;
  }
  
  return f;
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
