/*

Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   50 + 2 * 100 = 250
 1 1 1 3 1   1000 + 100 = 1100
 2 4 4 5 4   400 + 50 = 450

*/


function score( dice ) {
  var score = 0;
  
  switch(countDie(dice, 1)){
    case 1:
      score = 100;
      break;
    case 2:
      score = 200;
      break;
    case 3: 
      score = 1000;
      break;
    case 4: 
      score = 1100;
      break;
    case 5:
      score = 1200;
      break;
    default:
      score = 0;
      break;
  }

  for (var i = 2; i <= 6; i++) {
    if (countDie(dice, i) >= 3) {
      score += i * 100;
    }
  }
  
   switch(countDie(dice, 5)){
    case 1: 
      score += 50;
      break;
    case 2: 
      score += 100;
      break;
    case 3: 
      score += 0;
      break;
    case 4: 
      score += 50;
      break;
    case 5:
      score += 100;
      break;
    default:
      score += 0;
      break;
  }
  console.log(dice,score);
  return score;
}

function countDie(dice, n) {
  var result = 0;
  for (var i = 0; i < dice.length; i++) {
    if (dice[i] == n){
      result++;
    }
  }
  return result;
}

// Test
describe( "Scorer Function", function() {
  it( "should value this as worthless", function() {
    Test.expect( score( [2, 3, 4, 6, 2] ) == 0,   "Should be 0 :-(" );
  });
  
  it( "should value this triplet correctly", function() {
    Test.expect( score( [4, 4, 4, 3, 3] ) == 400, "Should be 400" );
  });
  
  it( "should value this mixed set correctly", function() {
    Test.expect( score( [2, 4, 4, 5, 4] ) == 450, "Should be 450" );
  });
});
