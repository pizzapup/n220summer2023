// Define the Character class representing a character in the battle system
class Character {
  // Constructor to initialize a character with its name, attack, defense, & default HP
  constructor(name, attack, defense) {
    // Set the character's properties based on the arguments passed to the constructor method when a new instance of Character is created
    this.name = name; // The character's name
    this.attack = attack; // The character's attack value (bonus)
    this.hp = 100; // The character's HP - default to 100
    this.defense = defense; // The character's defense value
  }

  // Method to attack a target character and update its HP based on the damage inflicted by the attacker (this character) - the target character is passed as an argument to the method
  attackTarget(target) {
    // Generate a random number between 1 and 10 to determine the base damage inflicted by the attacker (this character)
    const baseDamage = Math.floor(Math.random() * 10) + 1;

    // Calculate the total damage inflicted by the attacker by adding the base damage to the attacker's attack value (bonus) - this is the damage inflicted before the target's defense is taken into account
    const totalDamage = baseDamage + this.attack;

    // Calculate the damage inflicted on the target character by subtracting the target's defense value from the total damage inflicted by the attacker
    const damage = Math.max(0, totalDamage - target.defense);

    // Subtract the damage inflicted from the target's HP - if the damage inflicted is greater than the target's HP, the target's HP is set to 0 (no negative HP)
    target.hp = Math.max(0, target.hp - damage);

    // Log the attack details in the console and on the document
    this.logAttack(target, damage, baseDamage);

    // Update the character stats on the document
    updateStats();
  }

  // Method to log the attack details in the console and on the document - the target character, damage inflicted, and base damage are passed as arguments to the method
  logAttack(target, damage, baseDamage) {
    const attackMessage = `${this.name} attacked ${target.name} for ${damage} damage!`; // Create the attack message string using template literals

    console.log(attackMessage); // Log the attack message to the console

    console.log(
      `${damage} = Roll: ${baseDamage}, ATK: +${this.attack}, Target DEF: -${target.defense}`
    ); // Log the damage calculation details to the console using template literals

    // Get the attackLog element and create a new list item element to display the attack message on the document - append the list item element to the attackLog element to display the attack message on the document
    const attackLog = document.getElementById("attackLog"); //
    const logEntry = document.createElement("li");
    logEntry.textContent = attackMessage; // Set the text content of the list item element to the attack message string
    attackLog.appendChild(logEntry); // Append the list item element to the attackLog element to display the attack message on the document
  }
}

// Create instances of the Character class representing the player and enemy characters - pass the character name, attack, and defense values as arguments to the constructor method when creating a new instance of Character
const player = new Character("Player", 10, 5); // Create a new instance of Character representing the player character
const enemy = new Character("Enemy", 8, 3); // Create a new instance of Character representing the enemy character

// Function to update the character stats on the document - this function is called after each attack to update the character stats on the document
function updateStats() {
  // Define the array of stat objects for the player character
  const playerStats = [
    // Create an object for each stat with the stat ID and value - the stat ID is used to identify the HTML element displaying the stat value on the document
    {id: "playerAttack", value: player.attack},
    {id: "playerHP", value: player.hp},
    {id: "playerDefense", value: player.defense},
  ];

  // Define the array of stat objects for the enemy character
  const enemyStats = [
    // Create an object for each stat with the stat ID and value - the stat ID is used to identify the HTML element displaying the stat value on the document
    {id: "enemyAttack", value: enemy.attack},
    {id: "enemyHP", value: enemy.hp},
    {id: "enemyDefense", value: enemy.defense},
  ];

  // Update the player character's stats on the document - loop through the playerStats array and update the stat value for each stat on the document using the stat ID
  for (const stat of playerStats) {
    document.getElementById(stat.id).textContent = stat.value;
  }

  // Update the enemy character's stats on the document - loop through the enemyStats array and update the stat value for each stat on the document using the stat ID
  for (const stat of enemyStats) {
    document.getElementById(stat.id).textContent = stat.value;
  }
}

// Event listener for the player attack button - when the player attack button is clicked, the player character attacks the enemy
document.getElementById("playerAction").addEventListener("click", () => {
  player.attackTarget(enemy);
});

// Event listener for the enemy attack button - when the enemy attack button is clicked, the enemy character attacks the player
document.getElementById("enemyAction").addEventListener("click", () => {
  enemy.attackTarget(player);
});

// Call the updateStats function to update the character stats on the document when the page loads - this is called once when the page loads to initialize the character stats on the document
updateStats();
