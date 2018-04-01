/*

Lot of museum allow you to be a member, for a certain amount amount_by_year you can have unlimitted acces to the museum.

In this kata you should complete a function in order to know after how many visit it will be better to take an annual pass. The function take 2 arguments annual_price and individual_price.

*/

function howManyTimes(annual_price, individual_price) {
  return Math.ceil(annual_price/individual_price);
}

// Test
describe("Basic test", _=>{
  Test.assertEquals(howManyTimes(40,15), 3)
  Test.assertEquals(howManyTimes(30,10), 3)
  Test.assertEquals(howManyTimes(80,15), 6)
})

