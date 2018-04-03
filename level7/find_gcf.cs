/*

Your task here is the find the GCF (Greatest Common Factor) of any two numbers passed into a method, which will return one integer answer as an output.

Examples:

findGCF(4, 6); // Should return 2
findGCF(93, 186); // Should return 93
findGCF(20, 5); // Should return 5
Here, inputs will always be natural numbers so there's no need to worry about negative values or zero.

*/

using System;

public class Kata
{
  public static int FindGCF(int num1, int num2)
  {
    var min = Math.Max(num1, num2);
    var gcf = 1;
    
    for (var i = 1; i <= min; i++) {
      if (num1%i == 0 && num2%i == 0) {
        gcf = Math.Max(gcf, i);
      }
    }
  
    return gcf;
  }
}

// Test
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class TestGCF
{
    @Test
    public void basicTests() 
    {
      assertEquals(Kata.findGCF(8,20), 4);
      assertEquals(Kata.findGCF(5,13), 1);
      assertEquals(Kata.findGCF(100,100), 100);
    }
}
