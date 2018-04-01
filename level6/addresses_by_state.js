/*

Write a function that can take an array of addresses as input, and return an array with the count of addresses for each state.

The input objects will have the following structure:

{
  house: 1234,
  street: "Lonely St.",
  city: "Soldotna",
  zipcode: 99669,
  state: "AK"
}
The returned objects must have the following structure:

{
  state: "AK",
  count: 25
}
The states must be ordered by first appearance.

An error is expected if an input object doesn't have a state property.

*/

function count(addresses) {
  var result = [];
  var states = [];
  
  for (var i = 0; i < addresses.length; i++) {
     if (addresses[i].state == undefined) {
       throw Error('error!');
     }
  
    var ind = checkAddresses(result, addresses[i].state); 
    if (ind >= 0) {
      result[ind].count++;
    } else {
      result.push({
        state: addresses[i].state,
        count: 1
      });
    }    
  }

  result.sort(function(a, b){
    // Compare the 2 dates
    if(a.state < b.state) return -1;
    if(a.state > b.state) return 1;
    return 0;
  });
  
  return result;
}


function checkAddresses(states, stateToCheck) {
  for (var i = 0; i < states.length; i++) {
    if (states[i].state === stateToCheck) {
      return i;
    }
  }
  return -1;
}

// Test
describe("count", function() {
  it("should return an empty array if the input array is empty", function() {
    var counts = count([]);
    Test.expect(counts.length === 0, "returned array is not empty");
  });
  it("should group and count several states", function() {
    var counts = count(["AK", "AR", "OR", "CA", "AK", "OR", "OR"].map(function(state) {
        return {
          house: 1,
          street: "Binary St.",
          city: "Zero Value",
          state: state
        };
      })
    );
    Test.expect(counts.length === 4, "wrong count of groups");
    Test.expect(counts[0].count = 2, "wrong count of AK addresses");
    Test.expect(counts[1].count = 1, "wrong count of AR addresses");
    Test.expect(counts[2].count = 3, "wrong count of OR addresses");
    Test.expect(counts[3].count = 1, "wrong count of CA addresses");
  });
  it("should throw an error is an input object doesn't have a 'state' property", function() {
    var addresses = [
      {state: "AK"}, {name: "Mister"}
    ];
    Test.expectError("expected error not thrown", function() {
      var counts = count(addresses);
    });
  });
});
