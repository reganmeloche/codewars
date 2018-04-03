/*

Our friendly friend Pete is really a nice person, but he tends to be rather... Inappropriate.

And possibly loud, if given enough ethanol and free rein, so we ask you to write a function that should take its not always "clean" speech and cover as much as possible of it, in order not to offend some more sensible spirits.

For example, given an input like

What the hell am I doing here? And where is my wallet? PETE SMASH!
You are expected to turn it into something like:

W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!
In case you didn't figure out the rules yet: any words longer than 2 characters need to have its "inside" (meaning every character which is not the first or the last) changed into *; as we do not want Pete to scream too much, every uppercase letter which is not at the beginning of the string or coming after a punctuation mark among [".","!","?"] needs to be put to lowercase; spaces and other punctuation marks can be ignored.

Conversely, you need to be sure that the start of each sentence has a capitalized word at the beginning. Sentences are divided by the aforementioned punctuation marks.

Finally, the function will take an additional parameter consisting of an array/list of allowed words (upper or lower case) which are not to be replaced (the match has to be case insensitive).

Extra cookies if you can do it all in some efficient way and/or using our dear regexes ;)

*/

function peteTalk(speech,ok){

  if (!ok) {
    ok = [];
  }
  for (var i = 0; i < ok.length; i++){
    ok[i] = ok[i].toLowerCase();
  }
  
  var result = [];
  var wordList = speech.split(" ");
  
  
  for (var i = 0; i < wordList.length; i++) {
    var resultWord = wordList[i].toLowerCase();
    var tempWord = resultWord;
    
    if (hasPunctuation(wordList[i])) {
      tempWord = resultWord.substring(0,resultWord.length - 1);
    }
    
    if (i == 0 || hasEndPunctuation(wordList[i - 1])) {
      resultWord = replace(resultWord, 0, resultWord[0].toUpperCase());
    }

    if (tempWord.length > 2 && ok.indexOf(tempWord) == -1) {
      for (var j = 1; j < tempWord.length - 1; j++) {
        resultWord = replace(resultWord, j, '*');
        
      }
    }
    result[i] = resultWord;
  }
  
  return result.join(" ");
}


function replace(myString, index, character) {
  return myString.substr(0, index) + character + myString.substr(index+character.length);
}

function hasPunctuation(word) {
  var lastChar = word[word.length - 1];
  if (lastChar == '.' || lastChar == '!' || lastChar == '?' || lastChar == ',' || lastChar == ':' || lastChar == ';') {
    return true;
  }  
  return false;
}

function hasEndPunctuation(word) {
  var lastChar = word[word.length - 1];
  if (lastChar == '.' || lastChar == '!' || lastChar == '?') {
    return true;
  }  
  return false;
}



// Test
Test.describe("Basic tests",_=>{
Test.assertEquals(peteTalk("I want to punch someone in the face"),"I w**t to p***h s*****e in t*e f**e");
Test.assertEquals(peteTalk("uh!"),"Uh!");
Test.assertEquals(peteTalk("What the hell am I doing here? And where is my wallet? PETE SMASH!"),"W**t t*e h**l am i d***g h**e? A*d w***e is my w****t? P**e s***h!");
Test.assertEquals(peteTalk("I want to punch someone in the face",["someone","face"]),"I w**t to p***h someone in t*e face");
Test.assertEquals(peteTalk("I want to punch someone in the face",["drink","job","girls"]),"I w**t to p***h s*****e in t*e f**e");
})
