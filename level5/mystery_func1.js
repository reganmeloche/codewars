/*

Tired of those repetitive javascript challenges? Here's a unique hackish one that should keep you busy for a while ;)

There's a mystery function which is already available for you to use. It's a simple function called mystery. It accepts a string as a parameter and outputs a string. The exercise depends on guessing what this function actually does.

You can call the mystery function like this:

var myOutput = mystery('myInput');
Using your own test cases, try to call the mystery function with different input strings and try to analyze its output in order to guess what is does. You are free to call the mystery function in your own test cases however you want.

When you think you've understood how my mystery function works, prove it by reimplementing its logic in a function that you should call 'solved(x)'. To validate your code, your function 'solved' should return the same output as my function 'mystery' given the same inputs.

Beware! Passing your own test cases doesn't imply you'll pass mine.

Cheaters are welcome :)

Have fun!

*/


//Play with the function mystery(x) in your test cases.
//When you think you've solved the mystery,
//implement the following function as your answer

function solved(str){
  var isEven = str.length % 2 == 0;
  
  if (!isEven) {
    var middle = str[(str.length - 1)/2];
    str = str.replace(middle, '');
  }
  
  return str.split('').sort().join('');
  
}

// Test
/*Uncomment this to execute inputs against the mystery function*/
//console.log(mystery('hello'));


/*Uncomment this to compare your solved function with the mystery one*/
//Test.assertEquals(solved('hello'), mystery('hello'))