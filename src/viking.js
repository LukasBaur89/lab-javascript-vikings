// Soldier
class Soldier {
  // receives two arguments (health and strength)
    constructor (health, strength){
      this.health = health;
      this.strength = strength;
    }
  
    // methods
    // attack method(): function receives no arguments, returns strength property of the soldier
    attack(){
      const soldierStrength = this.strength;
      return soldierStrength
    }
  
    // receiveDamage method(): receives 1 argument (damage), should remove the received damage from the health property,
    // shouldn't return anything
    receiveDamage(damage){
      this.health -= damage
    }
  }
  
  // Viking
  class Viking extends Soldier {
    constructor (name, health, strength){
      super(health, strength);
      this.name = name;
    }
  
    attack(){
      return this.strength;
    }
  
    receiveDamage(damage){
      super.receiveDamage(damage);
      if (this.health>0){
        return `${this.name} has received ${damage} points of damage`
      }
      return `${this.name} has died in act of combat`
    }
  
    battleCry(){
      return `Odin Owns You All!`
    }
  }
  
  // Saxon
  class Saxon extends Soldier{
  
    attack(){
      return this.strength
    }
  
    receiveDamage(damage){
      super.receiveDamage(damage);
      if (this.health>0){
        return `A Saxon has received ${damage} points of damage`
      }
      return `A Saxon has died in combat`
    }
  }
  
  // War
  class War{
  
    constructor(){
      this.vikingArmy = [];
      this.saxonArmy = [];
    }
  
    
    // methods
    addViking(Viking){
      this.vikingArmy.push(Viking)
    }
  
    addSaxon(Saxon){
      this.saxonArmy.push(Saxon)
    }
  
    vikingAttack(){
      // Pick a random Saxon/Viking out of the length of my array
      const pickRandomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      const pickRandomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      // call method on random 
      const attackSaxon = pickRandomSaxon.receiveDamage(pickRandomViking.attack());
      // remove dead saxons from army using splice 
      if (pickRandomSaxon.health <= 0){
        this.saxonArmy.splice(0)
      }
      return attackSaxon;
    }
      
  
    saxonAttack(){
      // Pick a random Saxon/Viking out of the length of my array
      const pickRandomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
      const pickRandomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)];
      // call method on random
      const attackViking = pickRandomViking.receiveDamage(pickRandomSaxon.attack());
      // remove dead vikings from the army
      if(pickRandomViking.health <= 0){
        this.vikingArmy.splice(0)
      }
      return attackViking
    }
  
    showStatus(){
  
    }
  }
  
  
  // The following is required to make unit tests work.
  /* Environment setup. Do not modify the below code. */
  if (typeof module !== 'undefined') {
    module.exports = { Soldier, Viking, Saxon, War };
  }
  
  
  