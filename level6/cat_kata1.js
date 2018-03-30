/*

The story you are about to hear is true
Our cat, Balor, sadly died of cancer in 2015.

While he was alive, the three neighborhood cats Lou, Mustache Cat, and Raoul all recognized our house and yard as Balor's territory, and would behave respectfully towards him and each other when they would visit.

But after Balor died, gradually each of these three neighborhood cats began trying to claim his territory as their own, trying to drive the others away by growling, yowling, snarling, chasing, and even fighting, when one came too close to another, and no human was right there to distract or extract one of them before the situation could escalate.

It is sad that these otherwise-affectionate animals, who had spent many afternoons peacefully sitting and/or lying near Balor and each other on our deck or around our yard, would turn on each other like that. However, sometimes, if they are far enough away from each other, especially on a warm day when all they really want to do is pick a spot in the sun and lie in it, they will ignore each other, and once again there will be a Peaceable Kingdom.

Your Mission
In this, the first and simplest of a planned trilogy of cat katas :-), all you have to do is determine whether the distances between any visiting cats are large enough to make for a peaceful afternoon, or whether there is about to be an altercation someone will need to deal with by carrying one of them into the house or squirting them with water or what have you.

As input your function will receive a list of strings representing the yard as a grid, and an integer representing the minimum distance needed to prevent problems (considering the cats' current states of sleepiness). A point with no cat in it will be represented by a "-" dash. Lou, Mustache Cat, and Raoul will be represented by an upper case L, M, and R respectively. At any particular time all three cats may be in the yard, or maybe two, one, or even none.

If the number of cats in the yard is one or none, or if the distances between all cats are at least the minimum distance, your function should return True/true/TRUE (depending on what language you're using), but if there are two or three cats, and the distance between at least two of them is smaller than the minimum distance, your function should return False/false/FALSE.

Some examples
(The yard will be larger in the random test cases, but a smaller yard is easier to see and fit into the instructions here.)

In this first example, there is only one cat, so your function should return True.

["------------",
 "------------",
 "-L----------",
 "------------",
 "------------",
 "------------"], 10
In this second example, Mustache Cat is at the point yard[1][3] and Raoul is at the point yard[4][7] -- a distance of 5, so because the distance between these two points is smaller than the specified minimum distance of 6, there will be trouble, and your function should return False.

["------------",
 "---M--------",
 "------------",
 "------------",
 "-------R----",
 "------------"], 6
In this third example, Lou is at yard[0][11], Raoul is at yard[1][2], and Mustache Cat at yard[5][2]. The distance between Lou and Raoul is 9.05538513814, the distance between Raoul and Mustache Cat is 4, and the distance between Mustache Cat and Lou is 10.295630141 -- all greater than or equal to the specified minimum distance of 4, so the three cats will nap peacefully, and your function should return True.

["-----------L",
 "--R---------",
 "------------",
 "------------",
 "------------",
 "--M---------"], 4
Have fun!

*/

function peacefulYard(yard, minDistance) {
  var ct = 0;
  var rLoc = [];
  var lLoc = [];
  var mLoc = [];
  
  for (var i = 0; i< yard.length; i++) {
    var l = yard[i].indexOf('L');
    if (l >= 0) {
      lLoc = [i, l];
      ct++;
    }
    
    var r = yard[i].indexOf('R');
    if (r >= 0) {
      rLoc = [i, r];
      ct++;
    }
    
    var m = yard[i].indexOf('M');
    if (m >= 0) {
      mLoc = [i, m];
      ct++;
    }
  }
  
  if (ct < 2) {
    return true;
  }
  
  
  if (!checkDist(lLoc, rLoc, minDistance)) { return false; }
  if (!checkDist(lLoc, mLoc, minDistance)) { return false; }
  if (!checkDist(mLoc, rLoc, minDistance)) { return false; }
  
  return true;
}

function checkDist(p1, p2, minDistance) {
  if (p1[0] != undefined && p2[0] != undefined) {
    var dist = getDist(p1, p2); 
    if (dist < minDistance) {
      return false;
    }
  }
  return true;
}

function getDist(a,b) {
  return Math.sqrt(Math.pow((a[0] - b[0]),2) + Math.pow((a[1] - b[1]),2));
}

// Test
Test.describe('Example tests',_=>{
it ("Only one cat is in the yard", function(){
Test.assertEquals(peacefulYard(["------------", "------------", "-L----------", "------------", "------------", "------------"], 10), true)
});
it ("There are two cats in the yard, and they are closer than the minimum distance", function(){
Test.assertEquals(peacefulYard(["------------", "---M--------", "------------", "------------", "-------R----", "------------"], 6), false)
});
it ("All three cats are in the yard, all further apart than or equal to the minimum distance", function(){
Test.assertEquals(peacefulYard(["-----------L", "--R---------", "------------", "------------", "------------", "--M---------"], 4), true)
});
})
