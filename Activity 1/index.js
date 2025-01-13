console.log(
  `%c⚔️ Welcome to the Pokémon Battle! ⚔️`,
  "color: gold; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center;"
);

// Class pokemon
class Pokemon {
  constructor(name, type, level, hp, defense) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.maxHp = hp; // Store the maximum HP for healing
    this.defense = defense || 0;
    this.temporaryDefense = 0;
    this.hasLeveledUp = false;
  }

  attack(opponent) {
    let damage = this.calculateDamage();
    damage = this.calculateCriticalDamage(damage);

    if (this.hasLeveledUp) {
      this.specialAttack(opponent, damage);
      this.hasLeveledUp = false;
    } else {
      console.log(
        `%c${this.trainer.name}: ${this.name} attacks ${opponent.name} causing ${damage} damage!`,
        "color: orange; font-weight: bold;"
      );
    }
    opponent.receiveDamage(damage);
  }

  receiveDamage(damage) {
    const totalDefense = this.defense + this.temporaryDefense;
    const netDamage = Math.max(damage - totalDefense, 0);
    this.hp -= netDamage;
    this.hp = Math.max(this.hp, 0);

    console.log(
      `%c${this.name} received ${netDamage} damage (defense of ${totalDefense}). Remaining HP: ${this.hp}.`,
      "color: red; font-weight: bold;"
    );

    this.temporaryDefense = 0;
  }

  specialAttack(opponent, damage) {
    console.log(
      `%c${this.trainer.name}: ${this.name} uses a special ${this.type} attack on ${opponent.name} causing ${damage} damage!`,
      "color: purple; font-weight: bold;"
    );
    opponent.receiveDamage(damage);
  }

  heal(amount = 20) {
    this.hp += amount;
    this.hp = Math.min(this.hp, this.maxHp);
    this.temporaryDefense = 5;
    console.log(
      `%c💖 ${this.name} has been healed! Current HP: ${this.hp}, Temporary Defense: ${this.temporaryDefense}💖.`,
      "color: green; font-weight: bold;"
    );
  }

  fullyHeal() {
    this.hp = this.maxHp;
    console.log(
      `%c💖 ${this.name} has been fully healed! Current HP: ${this.hp} 💖.`,
      "color: green; font-weight: bold;"
    );
  }

  calculateDamage() {
    return this.level * 2;
  }

  criticalHit() {
    return Math.random() < 0.1;
  }

  calculateCriticalDamage(damage) {
    if (this.criticalHit()) {
      let criticalDamages = Math.round(damage * 0.3);
      console.log(`${this.name} lands a damage! ${damage}`);
      console.log(`💥${this.name} lands a critical hit! ${criticalDamages}💥`);
      this.level += 1;
      this.hasLeveledUp = true; // Set the flag to true when the Pokémon levels up
      console.log(` ${this.name} has leveled up! New level ${this.level}`);
      return damage + criticalDamages;
    }
    return damage;
  }
}

// Define Pokémon subclasses (e.g., Electric, Fire, Water, etc.)
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Electric", level, hp, defense);
  }

  specialAttack(opponent, damage) {
    console.log(
      `%c${this.trainer.name}: ${this.name} uses Thunderbolt on ${opponent.name} causing ${damage} damage!`,
      "color: yellow; font-weight: bold;"
    );
    opponent.receiveDamage(damage);
  }
}

class FirePokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Fire", level, hp, defense);
  }

  specialAttack(opponent, damage) {
    console.log(
      `%c${this.trainer.name}: ${this.name} uses Fireball on ${opponent.name} causing ${damage} damage!`,
      "color: red; font-weight: bold;"
    );
    opponent.receiveDamage(damage);
  }
}

class EarthPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Earth", level, hp, defense);
  }

  specialAttack(opponent, damage) {
    console.log(
      `%c${this.trainer.name}: ${this.name} uses Earthquake on ${opponent.name} causing ${damage} damage!`,
      "color: brown; font-weight: bold;"
    );
    opponent.receiveDamage(damage);
  }
}

class WindPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Wind", level, hp, defense);
  }

  specialAttack(opponent, damage) {
    console.log(
      `%c${this.trainer.name}: ${this.name} uses Tornado on ${opponent.name} causing ${damage} damage!`,
      "color: lightblue; font-weight: bold;"
    );
    opponent.receiveDamage(damage);
  }
}

class WaterPokemon extends Pokemon {
  constructor(name, level, hp, defense) {
    super(name, "Water", level, hp, defense);
  }

  specialAttack(opponent, damage) {
    console.log(
      `%c${this.trainer.name}: ${this.name} uses Water Blast on ${opponent.name} causing ${damage} damage!`,
      "color: blue; font-weight: bold;"
    );
    opponent.receiveDamage(damage);
  }
}

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

  selectNextPokemon(excludePokemon = null) {
    return this.pokemonList.find(
      (pokemon) => pokemon.hp > 0 && pokemon !== excludePokemon
    );
  }

  fullyHealAllPokemons() {
    this.pokemonList.forEach((pokemon) => pokemon.fullyHeal());
  }
}

// Class battle of the trainers
class Battle {
  constructor(trainer1, trainer2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  // start function to initiate the battle
  start() {
    console.log(
      `%c⚡Battle between ${this.trainer1.name} and ${this.trainer2.name} begins!⚡`,
      "color: gold; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center;"
    );
    // Select the next available Pokemon for each trainer
    let trainer1Pokemon = this.trainer1.selectNextPokemon();
    let trainer2Pokemon = this.trainer2.selectNextPokemon();

    // Outer loop continues as long as both trainers have available Pokemon
    while (trainer1Pokemon && trainer2Pokemon) {
      console.log(`${this.trainer1.name}'s Pokemon: ${trainer1Pokemon.name}`);
      console.log(`${this.trainer2.name}'s Pokemon: ${trainer2Pokemon.name}`);

      // Inner loop continues as long as both current Pokémon have HP greater than 0
      while (trainer1Pokemon.hp > 0 && trainer2Pokemon.hp > 0) {
        // Random chance (20%) for Trainer 1's Pokémon to heal
        let randomHeal = Math.random() < 0.2;
        if (randomHeal) {
          let healAmount = Math.floor(Math.random() * 20) + 10;
          console.log(`${trainer1Pokemon.name} decides to heal! ${healAmount}`);
          trainer1Pokemon.heal(healAmount);
        } else {
          // Trainer 1's Pokemon attacks Trainer 2's Pokemon
          trainer1Pokemon.attack(trainer2Pokemon);
        }
        // If Trainer 2's Pokemon is still alive, it gets a turn
        if (trainer2Pokemon.hp > 0) {
          // Random chance (20%) for Trainer 1's Pokémon to heal
          let randomHeal = Math.random() < 0.2;
          if (randomHeal) {
            let healAmount = Math.floor(Math.random() * 20) + 10;
            console.log(
              `${trainer2Pokemon.name} decides to heal! ${healAmount}`
            );
            trainer2Pokemon.heal(healAmount);
          } else {
            // Trainer 2's Pokemon attacks Trainer 1's Pokémon
            trainer2Pokemon.attack(trainer1Pokemon);
          }
        }
      }
      // Check if Trainer 1's Pokemon has fainted
      if (trainer1Pokemon.hp <= 0) {
        console.log(`${trainer1Pokemon.name} has fainted!`);
        // Select the next available Pokemon for Trainer 1
        trainer1Pokemon = this.trainer1.selectNextPokemon(trainer1Pokemon);
      } else {
        // Trainer 1's Pokémon wins, fully heal it and select the next available Pokemon
        console.log(
          `%c${trainer1Pokemon.name} is the winner!`,
          "margin: 10%, 26%;"
        );
        trainer1Pokemon.fullyHeal();
        trainer1Pokemon = this.trainer1.selectNextPokemon(trainer1Pokemon);
      }
      // Check if Trainer 2's Pokemon has fainted
      if (trainer2Pokemon.hp <= 0) {
        // Select the next available Pokemon for Trainer
        trainer2Pokemon = this.trainer2.selectNextPokemon(trainer2Pokemon);
      } else {
        // Trainer 2's Pokemon wins, fully heal it and select the next available Pokemon
        console.log(`${trainer2Pokemon.name} is the winner!`);
        trainer2Pokemon.fullyHeal();
        trainer2Pokemon = this.trainer2.selectNextPokemon(trainer2Pokemon);
      }
    }

    // battle ended
    console.log(
      `%cBattle has ended.`,
      "color: gold; font-weight: bold; font-size: 20px;"
    );
    // Check if Trainer 1 has no more available Pokemon
    if (!trainer1Pokemon) {
      console.log(
        `%c${this.trainer1.name} has lost the battle!`,
        "color: red; font-weight: bold; font-size: 20px;"
      );
      // Increment Trainer 1's loss count
      this.trainer1.losses += 1;
      console.log(
        `%c🏆${this.trainer2.name} has win the battle!🏆`,
        "color: green; font-weight: bold; font-size:25px; margin-right:26%; margin-left:26%; margin-top:30px; margin-bottom:30px;background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px;"
      );
      // Fully heal all Pokémon of Trainer 2
      this.trainer2.fullyHealAllPokemons();
      return this.trainer2; // Trainer 2 wins
      // Check if Trainer 2 has no more available Pokémon
    } else if (!trainer2Pokemon) {
      console.log(
        `%c${this.trainer2.name} has lost the battle!`,
        "color: red; font-weight: bold; font-size: 20px;"
      );
      // Increment Trainer 1's loss count
      this.trainer2.losses += 1;
      console.log(
        `%c🏆${this.trainer1.name} has win the battle!🏆`,
        "color: green; font-weight: bold; font-size:25px; margin-right:26%; margin-left:26%; margin-top:30px; margin-bottom:30px;background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px;"
      );
      this.trainer1.fullyHealAllPokemons();
      return this.trainer1; // Trainer 1 wins
    }
  }
  startRoundRobinTournament(trainers) {
    if (trainers.length < 2 || trainers.length > 5) {
      console.log("This tournament format requires between 3 and 5 trainers.");
      return;
    }

    trainers.forEach((trainer) => {
      if (trainer.pokemonList.length < 3 || trainer.pokemonList.length > 5) {
        console.log(`${trainer.name} must have between 3 and 5 Pokémon.`);
        return;
      }
    });

    let winners = [];
    let losers = [];

    // First round
    const battle1 = new Battle(trainers[0], trainers[1]);
    const winner1 = battle1.start();
    console.log(`Winner is: ${winner1.name}`);
    const loser1 = winner1 === trainers[0] ? trainers[1] : trainers[0];

    if (trainers.length >= 3) {
      const battle2 = new Battle(trainers[2], trainers[3]);
      const winner2 = battle2.start();
      if (!winner2) {
        console.error("Battle 2 did not produce a winner.");
        return;
      }
      console.log(`Winner is: ${winner2.name}`);
      const loser2 = winner2 === trainers[2] ? trainers[3] : trainers[2];

      if (winner1) winners.push(winner1);
      if (winner2) winners.push(winner2);
      if (loser1) losers.push(loser1);
      if (loser2) losers.push(loser2);
    } else if (trainers.length === 3) {
      const battle2 = new Battle(trainers[1], trainers[2]);
      const winner2 = battle2.start();
      console.log(`Winner is: ${winner2.name}`);
      const loser2 = winner2 === trainers[1] ? trainers[2] : trainers[1];

      const battle3 = new Battle(trainers[0], trainers[2]);
      const winner3 = battle3.start();
      console.log(`Winner is: ${winner3.name}`);
      const loser3 = winner3 === trainers[0] ? trainers[2] : trainers[0];

      if (winner1) winners.push(winner1);
      if (winner2) winners.push(winner2);
      if (winner3) winners.push(winner3);
      if (loser1) losers.push(loser1);
      if (loser2) losers.push(loser2);
      if (loser3) losers.push(loser3);

      // Eliminate the trainer who lost both battles
      const eliminatedTrainer = losers.find(
        (trainer) => losers.filter((t) => t === trainer).length === 2
      );
      if (eliminatedTrainer) {
        console.log(
          `%c${eliminatedTrainer.name} has been eliminated!`,
          "color: red; font-weight: bold; font-size: 20px;"
        );
        losers = losers.filter((trainer) => trainer !== eliminatedTrainer);
        winners = winners.filter((trainer) => trainer !== eliminatedTrainer);
      }
    } else {
      winners.push(winner1);
      losers.push(loser1);
    }

    // Second round
    if (winners.length >= 1) {
      console.log("Second round:");
      const battle3 = new Battle(winners[0], winners[1]);
      const finalWinner = battle3.start();
      if (!finalWinner) {
        console.error("Battle 3 did not produce a winner.");
        return;
      }
      const waitingTrainer =
        finalWinner === winners[0] ? winners[0] : winners[1];
      const waitingLoser = finalWinner === winners[0] ? winners[1] : winners[0];

      // Re-heal losers for the next round
      losers[0].fullyHealAllPokemons();
      losers[1].fullyHealAllPokemons();

      // Fourth round Battle of the loser
      const battle4 = new Battle(losers[0], losers[1]);
      const loserWinner = battle4.start();
      if (!loserWinner) {
        console.error("Battle 4 did not produce a winner.");
        return;
      }
      const eliminatedTrainer =
        loserWinner === losers[0] ? losers[1] : losers[0];

      if (eliminatedTrainer) {
        console.log(
          `%c${eliminatedTrainer.name} has been eliminated!`,
          "color: red; font-weight: bold; font-size: 20px;"
        );
      }

      // Third round
      if (trainers.length === 5) {
        console.log("Third round:");
        const battle5 = new Battle(loserWinner, trainers[4]);
        const finalLoserWinner = battle5.start();
        if (!finalLoserWinner) {
          console.error("Battle 5 did not produce a winner.");
          return;
        }

        // Final round
        console.log("Final round:");
        waitingLoser.fullyHealAllPokemons();
        const finalBattle = new Battle(waitingTrainer, finalLoserWinner);
        const champion = finalBattle.start();
        if (!champion) {
          console.error("Final battle did not produce a champion.");
          return;
        }

        console.log(
          `%c🎉🏆The Champion of the tournament is ${champion.name}!🏆🎉`,
          "color: green; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center"
        );
      } else {
        // Final round for 4 trainers
        console.log("Final round:");
        const finalBattle = new Battle(waitingTrainer, loserWinner);
        const champion = finalBattle.start();

        console.log(
          `%c🎉🏆The Champion of the tournament is ${champion.name}!🏆🎉`,
          "color: green; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center"
        );
      }
    } else {
      // Final round for 2 or 3 trainers
      console.log("Final round:");
      const finalBattle = new Battle(winners[0], losers[0]);
      const champion = finalBattle.start();

      console.log(
        `%c🎉🏆The Champion of the tournament is ${champion.name}!🏆🎉`,
        "color: green; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center"
      );
    }
  }
}

function getTrainerCount() {
  let input = prompt("Please enter the number of Trainers (4-5):");
  let trainerCount = parseInt(input);

  if (trainerCount >= 4 && trainerCount <= 5) {
    return trainerCount;
  } else {
    alert("Invalid number of trainers. Please enter a number between 3 and 5.");
    return getTrainerCount();
  }
}

// Function to handle Pokémon input
function getPokemonCount() {
  let input = prompt("Please enter the number of Pokémon per trainer (3-5):");
  let pokemonCount = parseInt(input);

  if (pokemonCount >= 3 && pokemonCount <= 5) {
    return pokemonCount;
  } else {
    alert("Invalid number of Pokemon. Please enter a number between 3 and 5.");
    return getPokemonCount();
  }
}

// Generate Pokémon and assign to trainers
function assignPokemons(trainers, pokemonCount) {
  let availablePokemons = [
    // Electric pokemon
    new ElectricPokemon("Volt", 10, 100, Math.floor(Math.random() * 6)),
    new ElectricPokemon("Raikou ", 10, 100, Math.floor(Math.random() * 6)),
    new ElectricPokemon("Pikachu", 10, 100, Math.floor(Math.random() * 6)),
    new ElectricPokemon("Gust", 10, 100, Math.floor(Math.random() * 6)),
    new ElectricPokemon("Regieleki", 10, 100, Math.floor(Math.random() * 6)),
    // Fire pokemon
    new FirePokemon("Charmander", 10, 100, Math.floor(Math.random() * 6)),
    new FirePokemon("Moltres", 10, 100, Math.floor(Math.random() * 6)),
    new FirePokemon("Reshiram", 10, 100, Math.floor(Math.random() * 6)),
    new FirePokemon("Flareon", 10, 100, Math.floor(Math.random() * 6)),
    new FirePokemon("Chi-Yu", 10, 100, Math.floor(Math.random() * 6)),
    // water pokemon
    new WaterPokemon("Squirtle", 10, 100, Math.floor(Math.random() * 6)),
    new WaterPokemon("Palkia", 10, 100, Math.floor(Math.random() * 6)),
    new WaterPokemon("Manaphy", 10, 100, Math.floor(Math.random() * 6)),
    new WaterPokemon("Blastoise", 10, 100, Math.floor(Math.random() * 6)),
    new WaterPokemon("Pelipper", 10, 100, Math.floor(Math.random() * 6)),
    //earth pokemon
    new EarthPokemon("Bulbasaur", 10, 100, Math.floor(Math.random() * 6)),
    new EarthPokemon("Zygarde ", 10, 100, Math.floor(Math.random() * 6)),
    new EarthPokemon("Garchomp", 10, 100, Math.floor(Math.random() * 6)),
    new EarthPokemon("Palossand", 10, 100, Math.floor(Math.random() * 6)),
    new EarthPokemon("Sandile", 10, 100, Math.floor(Math.random() * 6)),

    // wind pokemon
    new WindPokemon("Tornadus", 10, 100, Math.floor(Math.random() * 6)),
    new WindPokemon("Rayquaza", 10, 100, Math.floor(Math.random() * 6)),
    new WindPokemon("Lugia", 10, 100, Math.floor(Math.random() * 6)),
    new WindPokemon("Noivern", 10, 100, Math.floor(Math.random() * 6)),
    new WindPokemon("Swellow", 10, 100, Math.floor(Math.random() * 6)),
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
  const battle = new Battle();
  battle.startRoundRobinTournament(selectedTrainers);
}

// Start the tournament
startTournament();
