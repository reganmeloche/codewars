/*

Count or calculate how many times the digit '0' appears in the integers from 1 to 10n-1 inclusive.

For example, when n is 4, return the number of times the digit '0' appears from 1 to 9999.

For n <= 0, return zero.

*/

using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class Kata
{
  public static long CountZeroes(int n)
  {
    long result = 0;
  
    for (int i = 0; i < n; i++) {
        result += Convert.ToInt64((i*9)*(Math.Pow(10,i-1)));
        
    }
    
    return result;
    
  }
}



// Test
using NUnit.Framework;
using System;

[TestFixture]
public class ZeroesTest
{
  [Test]
  public void Test1()
  {
    Assert.AreEqual(0, Kata.CountZeroes(1));
  }
  [Test]
  public void Test2()
  {
    Assert.AreEqual(9, Kata.CountZeroes(2));
  }
  [Test]
  public void Test3()
  {
    Assert.AreEqual(189, Kata.CountZeroes(3));
  }
  [Test]
  public void Test4()
  {
    Assert.AreEqual(2889, Kata.CountZeroes(4));
  }
}
