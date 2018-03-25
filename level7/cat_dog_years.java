/*

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

*/

public class Dinglemouse {

  public static int[] humanYearsCatYearsDogYears(final int humanYears) {
    
    int dogYears = 0;
    int catYears = 0;
    if (humanYears > 0) {
      dogYears += 15;
      catYears += 15;
    }
    if (humanYears > 1) {
      dogYears += 9;
      catYears += 9;
    }
    
    dogYears += Math.max((humanYears - 2), 0) * 5;
    catYears += Math.max((humanYears - 2), 0) * 4;
    
    return new int[]{humanYears, catYears, dogYears};
  }

}

// Test
import org.junit.Test;
import static org.junit.Assert.assertArrayEquals;
import org.junit.runners.JUnit4;


public class ExampleTest {

  @Test
  public void one() {
    assertArrayEquals(new int[]{1,15,15}, Dinglemouse.humanYearsCatYearsDogYears(1)); 
  }
  
  @Test
  public void two() {
    assertArrayEquals(new int[]{2,24,24}, Dinglemouse.humanYearsCatYearsDogYears(2)); 
  }

  @Test
  public void ten() {
    assertArrayEquals(new int[]{10,56,64}, Dinglemouse.humanYearsCatYearsDogYears(10)); 
  }

}
