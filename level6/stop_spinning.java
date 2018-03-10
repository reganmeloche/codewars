/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

public class SpinWords {

  public String spinWords(String sentence) {
    String[] words = sentence.split(" ");
    String[] resArray = new String[words.length];
    String result = "";
    
    for (int i = 0; i < words.length; i++) {
      String word = words[i];
      if (word.length() >= 5) {
        String revWord = reverseWord(word);
        resArray[i] = revWord;
      } else {
        resArray[i] = word;
      }
    }
    return String.join(" ", resArray);
    
  }
  
  public String reverseWord(String word) {
    String[] sArr = word.split("");
    String[] revArr = new String[sArr.length];
    System.out.println(sArr.length);
    System.out.println(sArr.length);
    for (int i = 0; i < sArr.length; i++) {
      revArr[revArr.length - 1 - i] = sArr[i];
    }
    
    String reverse = String.join("", revArr);
    return reverse;
  }
}