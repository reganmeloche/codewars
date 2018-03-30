/*

Introduction
A grille cipher was a technique for encrypting a plaintext by writing it onto a sheet of paper through a pierced sheet (of paper or cardboard or similar). The earliest known description is due to the polymath Girolamo Cardano in 1550. His proposal was for a rectangular stencil allowing single letters, syllables, or words to be written, then later read, through its various apertures. The written fragments of the plaintext could be further disguised by filling the gaps between the fragments with anodyne words or letters. This variant is also an example of steganography, as are many of the grille ciphers. Wikipedia Link

Task
Write a function that accepts two inputs: message and code and returns hidden message decrypted from message using the code.
The code is a nonnegative integer and it decrypts in binary the message.

grille("abcdef", 5)  => "df"

message : abcdef
code    : 000101
----------------
result  : df

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
Test.assertEquals(grille("abcdef", 5) , "df" );
Test.assertEquals(grille("", 5) , "" );
Test.assertEquals(grille("abc", 1) , "c" );
Test.assertEquals(grille("tcddoadepwweasresd",77098 ) , "codewars" );
Test.assertEquals(grille("ab", 255) , "ab" );      
Test.assertEquals(grille("ab", 256) , "" );  
Test.assertEquals(grille("abcde", 32) , "" );      
 
