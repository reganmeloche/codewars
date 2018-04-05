/*

You have to build a pyramid.

This pyramid should be built from characters from a given string.

You have to create the code for these four methods:

function watchPyramidFromTheSide(characters)

function watchPyramidFromAbove(characters)

function countVisibleCharactersOfThePyramid(characters)

function countAllCharactersOfThePyramid(characters)
The first method ("FromTheSide") shows the pyramid as you would see from the side.
The second method ("FromAbove") shows the pyramid as you would see from above.
The third method ("CountVisibleCharacters") should return the count of all characters, that are visible from outside the pyramid.
The forth method ("CountAllCharacters") should count all characters of the pyramid. Consider that the pyramid is completely solid and has no holes or rooms in it.

Every character will be used for building one layer of the pyramid. So the length of the given string will be the height of the pyramid. Every layer will be built with stones from the given character. There is no limit of stones.
The pyramid should have perfect angles of 45 degrees.


Example: Given string: "abc"

Pyramid from the side:

  c
 bbb
aaaaa
Pyramid from above:

aaaaa
abbba
abcba
abbba
aaaaa
Count of visible stones/characters:

25
Count of all used stones/characters:

35

There is no meaning in the order or the choice of the characters. It should work the same for example "aaaaa" or "54321". 
Hint: Your output for the side must always be a rectangle! So spaces at the end of a line must not be deleted or trimmed! 
If the string is null or empty, you should exactly return this value for the watch-methods and -1 for the count-methods. 

Have fun coding it and please don't forget to vote and rank this kata! :-) 

I have created other katas. Have a look if you like coding and challenges.

*/


public class Pyramid
{
  public static string WatchPyramidFromTheSide(string characters)
  {
    if (characters == "" || characters == null){
       return characters;
     }
  
    var result = "";
    var len = characters.Length;
    
    for (var i=0; i<len; i++){
      for (var j=0; j<(len - 1 - i); j++){
        result += " ";
      }
      
      for (var j=0; j<(2*i+1); j++){
        result += characters[len-i-1];
      }
      
      for (var j=0; j<(len - 1 - i); j++){
        result += " ";
      }
      
      if (i < len-1){
        result += '\n';
      }
    }
    return result;
  }

  public static string WatchPyramidFromAbove(string characters)
  {
    if (characters == "" || characters == null){
       return characters;
     }
  
    var result = "";
    var len = characters.Length;
    
    for (var i=0; i<2*len-1; i++){
    
      for (var j=0; j<2*len-1; j++){
       
        var indj = j;
        var indi = i;

        if (indj >= len){
          indj = mathAbs(indj - (2 * (len - 1)));
        }
        
        if (indi >= len){
          indi = mathAbs(indi - (2 * (len - 1)));
        }
        var ind = indj;

        if (indj > indi){
          ind = indi;
        }

        result += characters[ind];
      }
      if (i < 2*len-2){
        result += '\n';
      }
    }
    return result;
  }
  
  public static int mathAbs(int a){
    
    if (a < 0){
      return a*-1;
    }
    return a;
  }
  
  public static int CountVisibleCharactersOfThePyramid(string characters)
  {
    if (characters == "" || characters == null){
       return -1;
     }
  
    var len = characters.Length;
    return (2*len-1)*(2*len-1);
  }

  public static int CountAllCharactersOfThePyramid(string characters)
  {
    if (characters == "" || characters == null){
       return -1;
     }
  
    var len = characters.Length;
    var result = 0;
    for (var i=1; i <= len; i++){
      result += (2*i-1)*(2*i-1);
    }
    return result;
  }
}


// Test
using System;
using NUnit.Framework;

[TestFixture]
public class Tests
{
  [Test]
  public void BasicTest2()
  {
    string characters = "*#";
    string expectedWatchFromSide = 
    " # \n" +
    "***";    
    string expectedWatchFromAbove = 
    "***\n" + 
    "*#*\n" + 
    "***";
    var actualWatchFromSide = Pyramid.WatchPyramidFromTheSide(characters);
    var actualWatchFromAbove = Pyramid.WatchPyramidFromAbove(characters);
    Visualisation(expectedWatchFromSide, expectedWatchFromAbove, actualWatchFromSide, actualWatchFromAbove);
    Assert.AreEqual(9, Pyramid.CountVisibleCharactersOfThePyramid(characters));
    Assert.AreEqual(10, Pyramid.CountAllCharactersOfThePyramid(characters));
  }
  
  [Test]
  public void BasicTest3()
  {
    string characters = "abc";
    string expectedWatchFromSide = 
    "  c  \n" +
    " bbb \n" +
    "aaaaa";
    string expectedWatchFromAbove = 
    "aaaaa\n" +
    "abbba\n" + 
    "abcba\n" + 
    "abbba\n" + 
    "aaaaa";
    var actualWatchFromSide = Pyramid.WatchPyramidFromTheSide(characters);
    var actualWatchFromAbove = Pyramid.WatchPyramidFromAbove(characters);
    Visualisation(expectedWatchFromSide, expectedWatchFromAbove, actualWatchFromSide, actualWatchFromAbove);
    Assert.AreEqual(25, Pyramid.CountVisibleCharactersOfThePyramid(characters));
    Assert.AreEqual(35, Pyramid.CountAllCharactersOfThePyramid(characters));
  }   
  
  private void Visualisation(string expectedWatchFromSide, string expectedWatchFromAbove, string actualWatchFromSide, string actualWatchFromAbove)
  {
    Console.WriteLine("From side correct:\n" + expectedWatchFromSide);
    Console.WriteLine("From above correct:\n" + expectedWatchFromAbove);
    Console.WriteLine("From side yours:\n" + actualWatchFromSide);
    Console.WriteLine("From above yours:\n" + actualWatchFromAbove);
    Assert.AreEqual(expectedWatchFromSide, actualWatchFromSide);
    Assert.AreEqual(expectedWatchFromAbove, actualWatchFromAbove);
  }
}
