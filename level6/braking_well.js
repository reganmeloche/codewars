/*


Braking distance d1 is the distance a vehicle will go from the point when it brakes to when it comes to a complete stop. It depends on the original speed v and on the coefficient of friction mu between the tires and the road surface.

The braking distance is one of two principal components of the total stopping distance. The other component is the reaction distance, which is the product of the speed and the perception-reaction time of the driver.

The kinetic energy E is 0.5*m*v**2, the work W given by braking is mu*m*g*d1. Equalling E and W gives the braking distance: d1 = v*v / 2*mu*g where g is the gravity of Earth and m the vehicle's mass.

We have v in km per hour, g as 9.81 m/s/s and in the following we suppose that the reaction time is constant and equal to 1 s. The coefficient mu is dimensionless.

There are two tasks.

The first one is to calculate the total stopping distance in meters given v, mu (and the reaction time t = 1).

dist(v, mu) -> d = total stopping distance

The second task is to calculate v in km per hour knowing d in meters and mu with the supposition that the reaction time is still t = 1.

speed(d, mu) -> v such that dist(v, mu) = d.

#Examples:

dist(100, 0.7) -> 83.9598760937531

speed(83.9598760937531, 0.7) -> 100.0

#Notes:

Remember to convert the velocity from km/h to m/s or from m/s in km/h when necessary.
Don't forget the reaction time t: t = 1
Don't truncate or round your results. See in "RUN EXAMPLES" the function assertFuzzyEquals.
Shell: only dist is tested.
*/

function dist(v, mu) {								// suppose reaction time is 1    
    const reactionTime = 1;
    const gravity = 9.81;
    var vms = v * 1000 / 3600;
    
    var brakingDistance = (vms * vms) / (2 * mu * gravity);
    var reactionDistance = 1 * vms;
    
    return brakingDistance + reactionDistance;
}

function speed(d, mu) {								// suppose reaction time is 1
    const gravity = 9.81;
    const reactionTime = 1;
    
    var a = 1 / (2 * mu * gravity);
    var b = reactionTime;
    var c = -d;
    
    var root1 = (-b + Math.sqrt(b*b - 4*a*c)) / (2 * a);
    var root2 = (-b - Math.sqrt(b*b - 4*a*c)) / (2 * a);

    return Math.max(root1, root2) * 3600 / 1000;
}


// Test
// tests results are given with lots of decimals but tested at 1e-2
function assertFuzzyEquals(actual, expected, msg){
    var inrange = Math.abs(actual - expected) <= 1e-2;
    Test.expect(inrange, msg || "At 1e-2: Expected value must be " + expected.toExponential(2) +", but got " + actual.toExponential(2));
}

Test.describe("dist",function() {
Test.it("Basic tests",function() {  
	assertFuzzyEquals(dist(144, 0.3), 311.83146449201496);
	assertFuzzyEquals(dist(92, 0.5), 92.12909477605366);
	assertFuzzyEquals(dist(142, 0.2), 435.94398509960854);
	assertFuzzyEquals(dist(96, 0.2), 207.8876429946766);
})})
Test.describe("speed",function() {
Test.it("Basic tests",function() {  
	assertFuzzyEquals(speed(159, 0.8), 153.79671564846308);
	assertFuzzyEquals(speed(164, 0.7), 147.91115701756493);
	assertFuzzyEquals(speed(153, 0.7), 142.14404997566152);
	assertFuzzyEquals(speed(88, 0.9), 113.64202099481099);
})})
