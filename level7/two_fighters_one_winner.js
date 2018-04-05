/*

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

##Example:

  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"

  // Python
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
  
  */
  
  function declareWinner(fighter1, fighter2, firstAttacker) {
  
  while (true) {
    if (fighter1.name == firstAttacker) {
    
      fighter2.health -= fighter1.damagePerAttack; 
      if (fighter2.health <= 0){
        return fighter1.name;
      }
      
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0){
        return fighter2.name;
      }
    }
    else{
      fighter1.health -= fighter2.damagePerAttack;
      if (fighter1.health <= 0){
        return fighter2.name;
      }
      
      fighter2.health -= fighter1.damagePerAttack;
      if (fighter2.health <= 0){
        return fighter1.name;
      }
    }
  }
}

// Test
Test.describe("Example Test Cases", function(){
	
	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");

	Test.assertEquals(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");

	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")

	Test.assertEquals(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")

	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
    
	Test.assertEquals(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")

});
