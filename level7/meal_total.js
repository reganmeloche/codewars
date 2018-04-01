/*

Create a function that returns the total of a meal including tip and tax. You should not tip on the tax.

You will be given the subtotal, the tax as a percentage and the tip as a percentage. Please round your result to two decimal places.

*/


function calculate_total(subtotal, tax, tip) {
return +(subtotal + (subtotal * tax / 100) + (subtotal * tip / 100)).toFixed(2);
}

// Test
describe("Solution", function(){
  it("Example Tests", function(){
    Test.assertEquals(calculate_total(5, 5, 10), 5.75);
    Test.assertEquals(calculate_total(36.97, 7, 15), 45.10);
    Test.assertEquals(calculate_total(0.00, 6, 18), 0.00);
    Test.assertEquals(calculate_total(80.94, 0, 20), 97.13);
    Test.assertEquals(calculate_total(54.96, 8, 0), 59.36);
  });
});
