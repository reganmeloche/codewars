/*

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.

*/

function encrypt(text, n) {
  
  if ( text == null) {
    return null;
  }
  
  var result = text;
  var m = text.length;

  var even = m%2 == 0;

  for (var j = 0; j < n; j++) {
    text = result;
    result = '';
    for (var i = 0; i < m; i++) {
      var ind = (2*i + 1);
      
      if (even && ind >= m) {
        ind--;
      }

      result += text[ind % m ];
    }
  }
  
  return result;
}

function decrypt(text, n) {

  if (n == 0){
    return text;
  }
  if (text == null) {
    return null;
  }
  
  var result = text.split('');
  var m = text.length;

  var even = m%2 == 0;

  for (var j = 0; j < n; j++) {
    text = result.join('');
    result = [];
    
    for (var i = 0; i < m; i++) {
      var ind = (i*2 + 1);
      
      if (even && ind >= m) {
        ind--;
      }
      
      result[ind%m] = text[i];
    }
    console.log(result.join(''));
    
  }
  
  console.log(result.join(''));
  return result.join('');
}


// Test
describe("Solution", function(){
  it("EncryptExampleTests", function(){    
    Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
    Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
    Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
    Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig");
  });
});

describe("Solution", function(){
  it("DecryptExampleTests", function(){    
    Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
    Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
    Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
    Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
    Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
    Test.assertEquals(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!");
  });
});

describe("Solution", function(){
  it("Null or Empty", function(){    
    Test.assertEquals(encrypt("", 0), "");
    Test.assertEquals(decrypt("", 0), "");
    Test.assertEquals(encrypt(null, 0), null);
    Test.assertEquals(decrypt(null, 0), null);
  });
});
