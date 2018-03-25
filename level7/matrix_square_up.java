/*
Welcome. Welcome all to my very second Kata. As you know, the first one was a huge success with an approval rating of 97%. This time, however, things are going to be a little bit different. Is it going to be as cool as the last one? Let's find out! Tell your friends! 

Given an integer b greater than 0, create and return a b X b matrix with the following pattern:

                     [x,1]
matrixSquareUp(2) => [2,1]

                     [x,x,1]
                     [x,2,1]
matrixSquareUp(3) => [3,2,1]

                     [x,x,x,1]
                     [x,x,2,1]
                     [x,3,2,1]
matrixSquareUp(4) => [4,3,2,1]
Those are lowercase 'x'.

50 > b > 0

*/


public class Kata {

  public static String[][] matrixSquareUp(int b) {
    String[][] result = new String[b][b];
    for (int i = 0; i < b; i++) {
      for (int j = 0; j < b; j++) {
        if (b - i - 1 > j) {
          result[i][j] = "x";
        } else {
          result[i][j] = String.valueOf(b - j);
        }
        System.out.println(i +"," + j + ":" +result[i][j]);
      }
    }
    return result;
    
  }
}

// Test
import static org.junit.Assert.*;
import java.util.Arrays;
import org.junit.Test;


public class SolutionTest {

    private static void testing(String act, String exp) {
        assertEquals(exp, act);
    }
    @Test
    public void Basic_Tests() {
        System.out.println("Basic Tests");
        String[][] t2 = new String[][]{
                { "x","1"},
                { "2","1"}  };
        for (int i=0; i<2; i++)
        testing(Arrays.toString(Kata.matrixSquareUp(2)[i]), 
                Arrays.toString(t2[i]));
        
        String[][] t3 = new String[][]{
                { "x","x","1"},
                { "x","2","1"},
                { "3","2","1"}  };
        for (int i=0; i<3; i++)
        testing(Arrays.toString(Kata.matrixSquareUp(3)[i]), 
                Arrays.toString(t3[i]));
        
        String[][] t4 = new String[][]{
                { "x","x","x","1"},
                { "x","x","2","1"},
                { "x","3","2","1"},
                { "4","3","2","1"}    };
        for (int i=0; i<4; i++)
        testing(Arrays.toString(Kata.matrixSquareUp(4)[i]), 
                Arrays.toString(t4[i]));
    }
}
