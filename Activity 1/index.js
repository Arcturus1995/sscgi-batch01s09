class Pokemon {
  constructor(name, type, level, hp, defense) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.defense = defense || 0;
    this.temporaryDefense = 0;
  }

  attack(opponent) {
    let damage = this.calculateDamage();
    damage = this.calculateCriticalDamage(damage);
    console.log(
      `${this.trainer.name}'s ${this.name} attacks ${opponent.name} with a ${this.type} attack causing ${damage} damage!`
    );
    opponent.receiveDamage(damage);
  }

  receiveDamage(damage) {
    const totalDefense = this.defense + this.temporaryDefense;
    const netDamage = Math.max(damage - totalDefense, 0);
    this.hp -= netDamage;
    this.hp = Math.max(this.hp, 0);
    console.log(
      `${
        this.name
      } received ${netDamage} damage (defense of ${totalDefense}). Remaining HP: ${
        this.hp + totalDefense
      }.`
    );

    if (this.hp <= 0) {
      console.log(`${this.name} has fainted!`);
    }
    this.temporaryDefense = 0;
  }

  heal(amount = 20) {
    this.hp += amount;
    this.hp = Math.min(this.hp, 100);
    this.temporaryDefense = 5;
    console.log(
      `💖 ${this.name} has been healed! Current HP: ${this.hp}, Temporary Defense: ${this.temporaryDefense}💖.`
    );
  }

  calculateDamage() {
    return this.level * 2;
  }

  powerUp() {
    this.level += 1;
    this.defense += 1;
    console.log(
      `${this.name} has powered up! Level: ${this.level}, Defense: ${this.defense}.`
    );
  }

  criticalHit() {
    return Math.random() < 0.1;
  }

  calculateCriticalDamage(damage) {
    if (this.criticalHit()) {
      console.log(`💥${this.name} lands a critical hit!💥`);
      return damage * 2;
    }
    return damage;
  }
}

// Define Pokémon subclasses (e.g., Electric, Fire, Water, etc.)
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Electric", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      `${this.trainer.name}'s ${this.name} attacks ${opponent.name} with Thunderbolt!`
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}
// class ElectricPokemon extends Pokemon {
//   constructor(name, level, hp, defense) {
//     super(name, "Electric", level, hp, defense);
//   }

//   attack(opponent) {
//     console.log(
//       "%c----------------------------BATTLE BEGIN----------------------------------",
//       "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
//     );
//     console.log(
//       `%c${this.trainer.name}'s:  ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
//       "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
//     );
//     console.log(
//       `%c⚡⚡⚡${this.name} uses Thunderbolt attack on ${opponent.name}⚡⚡⚡`,
//       "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
//     );
//     let damage = this.level * 3;
//     damage = this.calculateCriticalDamage(damage);
//     opponent.receiveDamage(damage);
//   }
// }
// FirePokemon subclass, extending the base Pokemon class
class FirePokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Fire", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s:  ${this.name} Attack  ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c🔥💥${this.name} uses Fireball attack on ${opponent.name}🔥💥`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

// EarthPokemon subclass, extending the base Pokemon class
class EarthPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Earth", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s: ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c🌋${this.name} uses Earthquake attack on ${opponent.name}🌋`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}
// WindPokemon subclass, extending the base Pokemon class
class WindPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Wind", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s: ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c💨${this.name} uses Tornado attack on ${opponent.name}💨`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}
// WaterPokemon subclass, extending the base Pokemon class
class WaterPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Water", level, hp, defense);
  }

  attack(opponent) {
    console.log(
      "%c----------------------------BATTLE BEGIN----------------------------------",
      "color: red; font-weight: bold; font-size: 20px; font-style: italic;"
    );
    console.log(
      `%c${this.trainer.name}'s: ⚔️ ${this.name} Attack ${opponent.name}🛡️`,
      "color: red; font-weight: bold; font-size: 15px; font-style: italic;"
    );
    console.log(
      `%c🌊${this.name} uses Water Blast attack on ${opponent.name}🌊`,
      "color:  rgb(108, 108, 7);; font-weight: bold; font-size: 20px;"
    );
    let damage = this.level * 3;
    damage = this.calculateCriticalDamage(damage);
    opponent.receiveDamage(damage);
  }
}

// Trainer class to manage Pokémon and battles
class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemonList = [];
    this.hasBattled = false;
  }

  addPokemon(pokemon) {
    pokemon.trainer = this;
    this.pokemonList.push(pokemon);
  }

  selectRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * this.pokemonList.length);
    return this.pokemonList[randomIndex];
  }
}

// Battle class to manage and execute battles
class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  start() {
    const selectedTrainer1Pokemon = this.trainer1.selectRandomPokemon();
    const selectedTrainer2Pokemon = this.trainer2.selectRandomPokemon();

    console.log(
      `⚡Battle between ${this.trainer1.name} and ${this.trainer2.name} begins!⚡`
    );
    console.log(
      `${this.trainer1.name}'s Pokemon: ${selectedTrainer1Pokemon.name}`
    );
    console.log(
      `${this.trainer2.name}'s Pokemon: ${selectedTrainer2Pokemon.name}`
    );

    while (selectedTrainer1Pokemon.hp > 0 && selectedTrainer2Pokemon.hp > 0) {
      selectedTrainer1Pokemon.attack(selectedTrainer2Pokemon);
      if (selectedTrainer2Pokemon.hp > 0)
        selectedTrainer2Pokemon.attack(selectedTrainer1Pokemon);
    }

    console.log("Battle has ended.");
    if (selectedTrainer1Pokemon.hp <= 0) {
      console.log(`${this.trainer1.name} has lost the battle!`);
      return false; // Trainer 1 lost
    } else if (selectedTrainer2Pokemon.hp <= 0) {
      console.log(`${this.trainer2.name} has lost the battle!`);
      return true; // Trainer 1 wins
    }
  }

  startRoundRobinTournament(trainers) {
    let winners = [];

    // First round battles
    for (let i = 0; i < trainers.length; i += 2) {
      if (i + 1 < trainers.length) {
        console.log(
          `Battle between ${trainers[i].name} and ${trainers[i + 1].name}`
        );
        const battle = new Battle(trainers[i], trainers[i + 1]);
        const result = battle.start();
        winners.push(result ? trainers[i] : trainers[i + 1]);
      }
    }

    console.log(`Winners of Round 1:`);
    winners.forEach((winner) => console.log(winner.name));

    // Second round: Winner vs Winner, Loser vs Loser
    if (winners.length > 1) {
      console.log("Next round: Winner vs Winner and Loser vs Loser");
      const winnerBattle = new Battle(winners[0], winners[1]);
      const finalResult = winnerBattle.start();
      const finalWinner = finalResult ? winners[0] : winners[1];
      console.log(`The Champion of the tournament is ${finalWinner.name}!`);
    }
  }
}

// Function to handle trainer input
function getTrainerCount() {
  let input = prompt("Please enter the number of Trainers (2-5):");
  let trainerCount = parseInt(input);

  if (trainerCount >= 2 && trainerCount <= 5) {
    return trainerCount;
  } else {
    alert("Invalid number of trainers. Please enter a number between 2 and 5.");
    return getTrainerCount();
  }
}

// Function to handle Pokémon input
function getPokemonCount() {
  let input = prompt("Please enter the number of Pokémon per trainer:");
  let pokemonCount = parseInt(input);

  if (pokemonCount >= 1 && pokemonCount <= 5) {
    return pokemonCount;
  } else {
    alert("Invalid number of Pokémon. Please enter a number between 1 and 5.");
    return getPokemonCount();
  }
}

// Generate Pokémon and assign to trainers
function assignPokemons(trainers, pokemonCount) {
  let availablePokemons = [
    // Electric pokemon
    new ElectricPokemon(
      "Volt",
      "Electric",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new ElectricPokemon(
      "Raikou ",
      "Electric",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new ElectricPokemon(
      "Pikachu",
      "Electric",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new ElectricPokemon(
      "Gust",
      "Electric",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new ElectricPokemon(
      "Regieleki",
      "Electric",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    // Fire pokemon
    new FirePokemon(
      "Charmander",
      "Fire",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new FirePokemon("Moltres", "Fire", 10, 100, Math.floor(Math.random() * 6)),
    new FirePokemon("Reshiram", "Fire", 10, 100, Math.floor(Math.random() * 6)),
    new FirePokemon("Flareon", "Fire", 10, 100, Math.floor(Math.random() * 6)),
    new FirePokemon("Chi-Yu", "Fire", 10, 100, Math.floor(Math.random() * 6)),
    // water pokemon
    new WaterPokemon(
      "Squirtle",
      "Water",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new WaterPokemon("Palkia", "Water", 10, 100, Math.floor(Math.random() * 6)),
    new WaterPokemon(
      "Manaphy",
      "Water",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new WaterPokemon(
      "Blastoise",
      "Water",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new WaterPokemon(
      "Pelipper",
      "Water",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    //earth pokemon
    new EarthPokemon(
      "Bulbasaur",
      "Grass",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new EarthPokemon(
      "Zygarde ",
      "Grass",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new EarthPokemon(
      "Garchomp",
      "Grass",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new EarthPokemon(
      "Palossand",
      "Grass",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new EarthPokemon(
      "Sandile",
      "Grass",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),

    // wind pokemon
    new WindPokemon(
      "Tornadus",
      "Flying",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new WindPokemon(
      "Rayquaza",
      "Flying",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new WindPokemon("Lugia", "Flying", 10, 100, Math.floor(Math.random() * 6)),
    new WindPokemon(
      "Noivern",
      "Flying",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
    new WindPokemon(
      "Swellow",
      "Flying",
      10,
      100,
      Math.floor(Math.random() * 6)
    ),
  ];

  trainers.forEach((trainer) => {
    for (let i = 0; i < pokemonCount; i++) {
      const randomIndex = Math.floor(Math.random() * availablePokemons.length);
      const selectedPokemon = availablePokemons.splice(randomIndex, 1)[0];
      trainer.addPokemon(selectedPokemon);
    }
  });
}

// Main function to orchestrate the entire tournament
function startTournament() {
  const trainerCount = getTrainerCount();
  const pokemonCount = getPokemonCount();

  // List of possible trainers
  const allTrainers = [
    new Trainer("Ash"),
    new Trainer("Misty"),
    new Trainer("Brock"),
    new Trainer("Gary"),
    new Trainer("Paul"),
  ];

  // Randomly select trainers
  const selectedTrainers = [];
  while (selectedTrainers.length < trainerCount) {
    const randomIndex = Math.floor(Math.random() * allTrainers.length);
    const selectedTrainer = allTrainers[randomIndex];
    if (!selectedTrainers.includes(selectedTrainer)) {
      selectedTrainers.push(selectedTrainer);
    }
  }

  console.log("Selected Trainers:");
  selectedTrainers.forEach((trainer) => console.log(trainer.name));

  // Assign Pokémon to trainers
  assignPokemons(selectedTrainers, pokemonCount);

  // Display Pokémon for each trainer
  selectedTrainers.forEach((trainer) => {
    console.log(`${trainer.name}'s Pokémon:`);
    trainer.pokemonList.forEach((pokemon) =>
      console.log(`- ${pokemon.name} (Type: ${pokemon.type})`)
    );
  });

  // Start the round robin tournament
  const battle = new Battle(selectedTrainers[0], selectedTrainers[1]);
  battle.startRoundRobinTournament(selectedTrainers);
}

// Start the tournament
startTournament();
