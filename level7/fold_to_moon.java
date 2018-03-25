/*

Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

Note: Of course you can't do half a fold. You should know what this means ;P

Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null (or whatever equivalent in your language).

*/

public class PaperFolder {
  public static Long fold(Double distance) {
    if ( distance < 0) {
      return null;
    }
    
    Double curr = 0.0001;
    Long folds = 0L;
    
    while (curr < distance) {
      curr = curr * 2;
      folds++;
    }
    return folds;
  }
}

// Test
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class SolutionTest {
    @Test
  public void sampleTests() {
    assertEquals(Long.valueOf(42L), PaperFolder.fold(new Double(384000000)));
    assertEquals(Long.valueOf(0L), PaperFolder.fold(new Double(0.00005)));
  }
}

// Recursive solution:
public class PaperFolder2 {
  public static Long fold(double d) {
    return d < 0 ? null : d <= 0.0001 ? 0 : 1 + fold(d/2);
  }
}
