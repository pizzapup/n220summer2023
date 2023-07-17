// Define the Character class representing a character in the battle system
class Character {
  // Constructor to initialize a character with its name, attack, defense, & default HP
  constructor(name, attack, defense) {
    this.name = name; // The character's name
    this.attack = attack; // The character's attack power/bonus
    this.hp = 100; // The character's hit points (HP)
    this.defense = defense; // The character's defense value
  }

  // Method to attack the target character
  attackTarget(target) {
    // Generate a random damage value between 1 and 10
    const baseDamage = Math.floor(Math.random() * 10) + 1;

    // Calculate the total damage by adding the character's attack value to the base damage
    const totalDamage = baseDamage + this.attack;

    // Subtract the target's defense from the total damage to determine the actual damage inflicted
    const damage = Math.max(0, totalDamage - target.defense);

    // Reduce the target's HP by the inflicted damage
    target.hp = Math.max(0, target.hp - damage);

    // Log the attack details
    this.logAttack(target, damage, baseDamage);

    // Update the character stats display on the document
    updateStats();
  }

  // Method to log the details of the attack
  logAttack(target, damage, baseDamage) {
    // Create the attack message with the character's name, target's name, and the damage inflicted
    const attackMessage = `${this.name} attacked ${target.name} for ${damage} damage!`;

    // Log the attack message in the console
    console.log(attackMessage);

    // Log the calculation details: base damage, character's attack, and target's defense values
    console.log(
      `${damage} = Roll: ${baseDamage}, ATK: +${this.attack}, Target DEF: -${target.defense}`
    );

    // Append the attack message to the attack log list on the document; creates a new list item element
    const attackLog = document.getElementById("attackLog");
    const logEntry = document.createElement("li");
    logEntry.textContent = attackMessage;
    attackLog.appendChild(logEntry);
  }
}

// Create player and enemy Character objects
const player = new Character("Player", 10, 5);
const enemy = new Character("Enemy", 8, 3);

// Function to update the character stats on the document
function updateStats() {
  // Define the array of stat objects for the player character
  const playerStats = [
    {id: "playerAttack", value: player.attack},
    {id: "playerHP", value: player.hp},
    {id: "playerDefense", value: player.defense},
  ];

  // Define the array of stat objects for the enemy character
  const enemyStats = [
    {id: "enemyAttack", value: enemy.attack},
    {id: "enemyHP", value: enemy.hp},
    {id: "enemyDefense", value: enemy.defense},
  ];

  // Loop through the arrays and update the text content of the HTML elements identified by the stat ID with the corresponding stat values

  // Update the player character's stats on the document
  for (const stat of playerStats) {
    document.getElementById(stat.id).textContent = stat.value;
  }

  // Update the enemy character's stats on the document
  for (const stat of enemyStats) {
    document.getElementById(stat.id).textContent = stat.value;
  }
}

// Event listener for the player attack button
document.getElementById("playerAction").addEventListener("click", () => {
  player.attackTarget(enemy);
});

// Event listener for the enemy attack button
document.getElementById("enemyAction").addEventListener("click", () => {
  enemy.attackTarget(player);
});

// Initialize the character stats on the document
updateStats();
