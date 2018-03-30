/*

Little Annie is very excited for upcoming events. She want's to know how many days she have to wait for a specific event.

Your job is to help her out.

Task: Write a function which returns the number of days from today till the given date. The function will take a Date object as parameter. You have to round the amount of days.

If the event is in the past, return "The day is in the past!" 
If the event is today, return "Today is the day!" 
Else, return "x days"

*/

function countDays(d){
  result = 'bogus';
  const today = new Date();
  const todayZeroed = new Date(today);
  todayZeroed.setHours(0);
  todayZeroed.setMinutes(0);
  todayZeroed.setSeconds(0);
  todayZeroed.setMilliseconds(0);
  
  const tomorrowZeroed = new Date(todayZeroed);
  tomorrowZeroed.setDate(tomorrowZeroed.getDate() + 1);
  
  if (d.getTime() < todayZeroed.getTime()) {
    result = "The day is in the past!";
  } 
  else if (d.getTime() > todayZeroed.getTime() && d.getTime() < tomorrowZeroed.getTime()){
    result = "Today is the day!";
  } else if (d.getTime() > tomorrowZeroed.getTime()) {
    const diff = (d - today) / (1000 * 3600 * 24);
    const rounded = Math.round(diff);
    result = `${rounded} days`;
  }
  
  console.log(result);
  return result;
}

// Test
Test.describe("Example Tests", function(){
  Test.it("Some example tests", function(){
    Test.assertEquals(countDays(new Date("February 28, 2016")), "The day is in the past!");
    Test.assertEquals(countDays(new Date()), "Today is the day!");
  })
});
