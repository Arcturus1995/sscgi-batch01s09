console.log(
  `%c⚔️ Welcome to the Pokémon Battle! ⚔️`,
  "color: gold; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center;"
);

// Class pokemon
class Pokemon {
  constructor(name, type, level, hp, defense, speed) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.hp = hp;
    this.maxHp = hp; // Store the maximum HP for healing
    this.defense = defense || 0;
    this.temporaryDefense = 0;
    this.hasLeveledUp = false;
    this.speed = speed;
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
      // Set the flag to true when the Pokémon levels up
      this.hasLeveledUp = true;
      console.log(` ${this.name} has leveled up! New level ${this.level}`);
      return damage + criticalDamages;
    }
    return damage;
  }
}

// Define Pokémon subclasses (e.g., Electric, Fire, Water, etc.)
class ElectricPokemon extends Pokemon {
  constructor(name, level, hp, defense, speed) {
    super(name, "Electric", level, hp, defense, speed);
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
  constructor(name, level, hp, defense, speed) {
    super(name, "Fire", level, hp, defense, speed);
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
  constructor(name, level, hp, defense, speed) {
    super(name, "Earth", level, hp, defense, speed);
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
  constructor(name, level, hp, defense, speed) {
    super(name, "Wind", level, hp, defense, speed);
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
  constructor(name, level, hp, defense, speed) {
    super(name, "Water", level, hp, defense, speed);
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
        // Determine which Pokémon attacks first based on speed
        if (trainer1Pokemon.speed >= trainer2Pokemon.speed) {
          // Trainer 1's Pokémon attacks first
          this.pokemonTurn(trainer1Pokemon, trainer2Pokemon);
          if (trainer2Pokemon.hp > 0) {
            this.pokemonTurn(trainer2Pokemon, trainer1Pokemon);
          }
        } else {
          // Trainer 2's Pokémon attacks first
          this.pokemonTurn(trainer2Pokemon, trainer1Pokemon);
          if (trainer1Pokemon.hp > 0) {
            this.pokemonTurn(trainer1Pokemon, trainer2Pokemon);
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
        console.log(`${trainer2Pokemon.name} has fainted!`);
        // Select the next available Pokemon for Trainer 2
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
      this.trainer1.fullyHealAllPokemons(); // Fully heal all lost Pokémon of Trainer 1
      return this.trainer2; // Trainer 2 wins
    } else if (!trainer2Pokemon) {
      console.log(
        `%c${this.trainer2.name} has lost the battle!`,
        "color: red; font-weight: bold; font-size: 20px;"
      );
      // Increment Trainer 2's loss count
      this.trainer2.losses += 1;
      console.log(
        `%c🏆${this.trainer1.name} has win the battle!🏆`,
        "color: green; font-weight: bold; font-size:25px; margin-right:26%; margin-left:26%; margin-top:30px; margin-bottom:30px;background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px;"
      );
      // Fully heal all Pokémon of Trainer 1
      this.trainer1.fullyHealAllPokemons();
      this.trainer2.fullyHealAllPokemons(); // Fully heal all lost Pokémon of Trainer 2
      return this.trainer1; // Trainer 1 wins
    }
  }

  // Function to handle a Pokémon's turn
  pokemonTurn(attacker, defender) {
    // Random chance (20%) for the attacking Pokémon to heal
    let randomHeal = Math.random() < 0.2;
    if (randomHeal) {
      let healAmount = Math.floor(Math.random() * 20) + 10;
      console.log(`${attacker.name} decides to heal! ${healAmount}`);
      attacker.heal(healAmount);
    } else {
      // The attacking Pokémon attacks the defending Pokémon
      attacker.attack(defender);
    }
  }

  startRoundRobinTournament(trainers) {
    if (trainers.length < 3 || trainers.length > 5) {
      console.log("This tournament format requires between 3 and 5 trainers.");
      return;
    }

    trainers.forEach((trainer) => {
      if (trainer.pokemonList.length < 3 || trainer.pokemonList.length > 5) {
        console.log(`${trainer.name} must have between 3 and 5 Pokémon.`);
        return;
      }
    });
    // stored the winner of the game
    let winners = [];
    // stored the loser of the game
    let losers = [];
    let big3 = [];

    // Log the winners and losers

    if (trainers.length === 3) {
      const battle1 = new Battle(trainers[0], trainers[1]);
      const winner1 = battle1.start();
      console.log(`Winner is: ${winner1.name}`);
      let loser1;
      if (winner1 === trainers[0]) {
        loser1 = trainers[1];
      } else {
        loser1 = trainers[0];
      }
      if (!winners.includes(winner1)) winners.push(winner1);
      if (losers.push(loser1));
      // Log the winners and losers
      console.log(
        `%cWinners:`,
        "font-size: 20px; color: green; background-color: lightgray; text-align: center; margin-right:50%; margin-left: 30%; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 12px;"
      );
      winners.forEach((trainer) => {
        console.log(
          `%c${trainer.name} (Status: Winner)`,
          "font-size: 18px; color: green; background-color: lightgray; text-align: center;padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 5px;"
        );
      });

      console.log(
        `%cLosers:`,
        "font-size: 20px; color: red; background-color: lightgray; text-align: center; margin-right:50%; margin-left: 30%; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 12px;"
      );
      losers.forEach((trainer) => {
        console.log(
          `%c${trainer.name} (Status: Loser)`,
          "font-size: 18px; color: red; background-color: lightgray; text-align: center; margin: 10px 0; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 5px;"
        );
      });
      const battle2 = new Battle(winner1, trainers[2]);
      const winner2 = battle2.start();
      console.log(`Winner is: ${winner2.name}`);
      let loser2;
      if (winner2 === winner1) {
        loser2 = trainers[2];
      } else {
        loser2 = trainers[2];
      }
      if (!winners.includes(winner2)) winners.push(winner2);
      if (losers.push(loser2));
      // Eliminate the trainer who lost both battles
      const eliminatedTrainer = losers.find(
        (trainer) => losers.filter((t) => t === trainer).length === 1
      );

      if (eliminatedTrainer) {
        console.log(
          `%c${eliminatedTrainer.name} has been eliminated!`,
          "color: red; font-weight: bold; font-size: 20px;"
        );
        losers = losers.filter((trainer) => trainer !== eliminatedTrainer);
        winners = winners.filter((trainer) => trainer !== eliminatedTrainer);
      }

      // Determine the champion
      const champion = winner2;
      console.log(
        `%c🎉🏆The Champion of the tournament is ${champion.name}!🏆🎉`,
        "color: green; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center"
      );
    } else if (trainers.length === 4) {
      const battle3 = new Battle(trainers[0], trainers[1]);
      const winner3 = battle3.start();
      console.log(`Winner is: ${winner3.name}`);
      let loser3;
      if (winner3 === trainers[0]) {
        loser3 = trainers[1];
      } else {
        loser3 = trainers[0];
      }
      if (!winners.includes(winner3)) winners.push(winner3);
      if (losers.push(loser3));

      const battle4 = new Battle(trainers[2], trainers[3]);
      const winner4 = battle4.start();
      console.log(`Winner is: ${winner4.name}`);
      let loser4;
      if (winner4 === trainers[2]) {
        loser4 = trainers[3];
      } else {
        loser4 = trainers[2];
      }
      if (!winners.includes(winner4)) winners.push(winner4);
      if (losers.push(loser4));

      console.log(
        `%cWinners:`,
        "font-size: 20px; color: green; background-color: lightgray; text-align: center; margin-right:50%; margin-left: 30%; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 12px;"
      );
      winners.forEach((trainer) => {
        console.log(
          `%c${trainer.name} (Status: Winner)`,
          "font-size: 18px; color: green; background-color: lightgray; text-align: center;padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 5px;"
        );
      });

      console.log(
        `%cLosers:`,
        "font-size: 20px; color: red; background-color: lightgray; text-align: center; margin-right:50%; margin-left: 30%; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 12px;"
      );
      losers.forEach((trainer) => {
        console.log(
          `%c${trainer.name} (Status: Loser)`,
          "font-size: 18px; color: red; background-color: lightgray; text-align: center; margin: 10px 0; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 5px;"
        );
      });

      // Eliminate the trainer who lost both battles
      const eliminatedTrainer = losers.find(
        (trainer) => losers.filter((t) => t === trainer).length === 1
      );

      if (eliminatedTrainer) {
        console.log(
          `%c${eliminatedTrainer.name} has been eliminated!`,
          "color: red; font-weight: bold; font-size: 20px;"
        );
        losers = losers.filter((trainer) => trainer !== eliminatedTrainer);
        winners = winners.filter((trainer) => trainer !== eliminatedTrainer);
      }

      const battle5 = new Battle(winner3, winner4);
      const winner5 = battle5.start();
      console.log(`Winner is: ${winner5.name}`);
      let loser5;
      if (winner5 === winner3) {
        loser5 = winner4;
      } else {
        loser5 = winner3;
      }
      if (!winners.includes(winner5)) winners.push(winner5);
      if (losers.push(loser5));
      // Log the winners and losers

      const champion = winner5;
      console.log(
        `%c🎉🏆The Champion of the tournament is ${champion.name}!🏆🎉`,
        "color: green; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center"
      );
    } else if (trainers.length === 5) {
      const battle6 = new Battle(trainers[0], trainers[1]);
      const winner6 = battle6.start();
      console.log(`Winner is: ${winner6.name}`);
      let loser6;
      if (winner6 === trainers[0]) {
        loser6 = trainers[1];
      } else {
        loser6 = trainers[0];
      }
      if (!winners.includes(winner6)) winners.push(winner6);
      if (losers.push(loser6));

      const battle7 = new Battle(trainers[2], trainers[3]);
      const winner7 = battle7.start();
      console.log(`Winner is: ${winner7.name}`);
      let loser7;
      if (winner7 === trainers[2]) {
        loser7 = trainers[3];
      } else {
        loser7 = trainers[2];
      }
      if (!winners.includes(winner7)) winners.push(winner7);
      if (losers.push(loser7));
      console.log(
        `%cWinners:`,
        "font-size: 20px; color: green; background-color: lightgray; text-align: center; margin-right:50%; margin-left: 30%; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 12px;"
      );
      winners.forEach((trainer) => {
        console.log(
          `%c${trainer.name} (Status: Winner)`,
          "font-size: 18px; color: green; background-color: lightgray; text-align: center;padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 5px;"
        );
      });

      console.log(
        `%cLosers:`,
        "font-size: 20px; color: red; background-color: lightgray; text-align: center; margin-right:50%; margin-left: 30%; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 12px;"
      );
      losers.forEach((trainer) => {
        console.log(
          `%c${trainer.name} (Status: Loser)`,
          "font-size: 18px; color: red; background-color: lightgray; text-align: center; margin: 10px 0; padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 5px;"
        );
      });

      const battle8 = new Battle(winner6, winner7);
      const winner8 = battle8.start();
      console.log(`Winner is: ${winner8.name}`);
      let loser8;
      if (winner8 === winner6) {
        loser8 = winner7;
      } else {
        loser8 = winner6;
      }
      if (!big3.includes(winner8)) big3.push(winner8);
      if (losers.push(loser8));
      // Log the winners and losers
      console.log(
        `%cBattle of loser bracket`,
        "font-size: 18px; color: red; background-color: #1c7ed6; text-align: center;padding-top:20px; padding-bottom:20px;padding-right:20px;padding-left:20px; border-radius: 5px; margin-right: 26%; margin-left:26%"
      );

      const battleLoser2 = new Battle(loser6, loser7);
      const battleLoserWin2 = battleLoser2.start();
      console.log(`Winner is: ${battleLoserWin2.name}`);
      let loser10;
      if (battleLoserWin2 === loser6) {
        loser10 = loser7;
      } else {
        loser10 = loser6;
      }
      if (losers.push(loser10));

      const battleLoser3 = new Battle(battleLoserWin2, trainers[4]);
      const battleLoserWin3 = battleLoser3.start();
      console.log(`Winner is: ${battleLoserWin3.name}`);
      let loser9;
      if (battleLoserWin3 === battleLoserWin2) {
        loser9 = trainers[4];
      } else {
        loser9 = battleLoserWin2;
      }
      if (!big3.includes(battleLoserWin3)) big3.push(battleLoserWin3);

      const battleLoser4 = new Battle(loser9, loser8);
      const battleLoserWin4 = battleLoser4.start();
      console.log(`Winner is: ${battleLoserWin4.name}`);
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

      if (!big3.includes(battleLoserWin4)) big3.push(battleLoserWin4);
      // Top 3
      console.log("The Top 3 Trainers are: ");
      big3.forEach((trainer) => {
        console.log(
          `%c${trainer.name}`,
          "color: green; font-weight: bold; font-size: 20px;"
        );
      });
      console.log("Final round: Round Robin...");
      let winCounts = new Map();
      let champion = null;

      for (let i = 0; i < big3.length; i++) {
        for (let j = i + 1; j < big3.length; j++) {
          const battle = new Battle(big3[i], big3[j]);
          const winner = battle.start();
          if (!winner) {
            console.error("Battle did not produce a winner.");
            return;
          }

          // Update win counts
          if (!winCounts.has(winner)) {
            winCounts.set(winner, 0);
          }
          winCounts.set(winner, winCounts.get(winner) + 1);

          // Check if the winner has won 2 times
          if (winCounts.get(winner) === 2) {
            champion = winner;
            break;
          }
        }
        if (champion) {
          break;
        }
      }

      if (champion) {
        console.log(
          `%c🎉🏆The Champion of the tournament is ${champion.name}!🏆🎉`,
          "color: green; font-weight: bold; font-size: 20px;margin-right:26%; margin-left:26%;margin-top:30px; margin-bottom:30px; background: white; border: 1px solid black; border-radius: 4px; padding-top:30px; padding-bottom:30px; padding-left:30px; padding-right:30px; text-align: center"
        );
      }
    }
  }
}
function getTrainerCount() {
  let input = prompt(
    "Please enter the number of Trainers (3-5):",
    "Please enter the number of Trainers (3-5)"
  );
  let trainerCount = parseInt(input);

  if (trainerCount >= 3 && trainerCount <= 5) {
    return trainerCount;
  } else {
    alert("Invalid number of trainers. Please enter a number between 3 and 5.");
    return getTrainerCount();
  }
}

// Function to handle Pokémon input
function getPokemonCount() {
  let input = prompt(
    "Please enter the number of Pokémon per Trainer (3-5):",
    "Please enter the number of Pokémon per Trainer (3-5):"
  );
  let pokemonCount = parseInt(input);

  if (pokemonCount >= 3 && pokemonCount <= 5) {
    return pokemonCount;
  } else {
    alert("Invalid number of Pokémon. Please enter a number between 3 and 5.");
    return getPokemonCount();
  }
}
function getTrainerNames(trainerCount) {
  const trainerNames = [];
  for (let i = 0; i < trainerCount; i++) {
    let name;
    do {
      name = prompt(`Enter the name for Trainer ${i + 1}:`);
      if (!name || name.trim() === "") {
        alert("Invalid name. Please enter a valid name.");
      }
    } while (!name || name.trim() === "");
    trainerNames.push(new Trainer(name.trim()));
  }
  return trainerNames;
}

// Generate Pokémon and assign to trainers
function assignPokemons(trainers, pokemonCount) {
  let availablePokemons = [
    // Electric pokemon
    new ElectricPokemon(
      "Volt",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new ElectricPokemon(
      "Raikou ",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new ElectricPokemon(
      "Pikachu",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new ElectricPokemon(
      "Gust",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new ElectricPokemon(
      "Regieleki",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    // Fire pokemon
    new FirePokemon(
      "Charmander",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new FirePokemon(
      "Moltres",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new FirePokemon(
      "Reshiram",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new FirePokemon(
      "Flareon",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new FirePokemon(
      "Chi-Yu",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    // water pokemon
    new WaterPokemon(
      "Squirtle",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WaterPokemon(
      "Palkia",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WaterPokemon(
      "Manaphy",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WaterPokemon(
      "Blastoise",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WaterPokemon(
      "Pelipper",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    //earth pokemon
    new EarthPokemon(
      "Bulbasaur",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new EarthPokemon(
      "Zygarde ",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new EarthPokemon(
      "Garchomp",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new EarthPokemon(
      "Palossand",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new EarthPokemon(
      "Sandile",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),

    // wind pokemon
    new WindPokemon(
      "Tornadus",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WindPokemon(
      "Rayquaza",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WindPokemon(
      "Lugia",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WindPokemon(
      "Noivern",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
    ),
    new WindPokemon(
      "Swellow",
      10,
      100,
      Math.floor(Math.random() * 6 + 1),
      Math.floor(Math.random() * 6 + 1)
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

// Function to get the number of trainers from the user
function startTournament() {
  const trainerCount = getTrainerCount();
  const pokemonCount = getPokemonCount();

  // Get trainer names from the user
  const selectedTrainers = getTrainerNames(trainerCount);

  console.log(
    "%cSelected Trainers:",
    "color: white; background-color: #007bff; font-weight: bold; font-size: 16px; padding: 5px; border-radius: 5px;"
  );
  selectedTrainers.forEach((trainer) =>
    console.log(
      `%c${trainer.name}`,
      "color: #007bff; background-color: #f8f9fa; font-size: 14px; padding: 3px; border-radius: 3px; margin-left: 10px;"
    )
  );

  // Assign Pokémon to trainers
  assignPokemons(selectedTrainers, pokemonCount);

  // Display Pokémon for each trainer
  selectedTrainers.forEach((trainer) => {
    console.log(
      `%c${trainer.name}'s Pokémon:`,
      "color: white; background-color: #007bff; font-weight: bold; font-size: 16px; padding: 5px; border-radius: 5px;"
    );
    trainer.pokemonList.forEach((pokemon) =>
      console.log(
        `%c- ${pokemon.name} (Type: ${pokemon.type}, Level: ${pokemon.level}, HP: ${pokemon.hp}, Defense: ${pokemon.defense}, Speed: ${pokemon.speed})`,
        "color: #007bff; background-color: #f8f9fa; font-size: 14px; padding: 3px; border-radius: 3px; margin-left: 10px;"
      )
    );
  });

  let trainer1 = selectedTrainers[0];
  let trainer2 = selectedTrainers[1];
  let trainer3 = selectedTrainers[2];
  let trainer4 = selectedTrainers[3];
  let trainer5 = selectedTrainers[4];

  if (selectedTrainers.length === 3) {
    console.log(
      `%cFirst round of fight:`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%c${trainer1.name} VS ${trainer2.name}`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%cThe ${trainer3.name} is waiting`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
  } else if (selectedTrainers.length === 4) {
    console.log(
      `%cFirst round of fight:`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%c${trainer1.name} VS ${trainer2.name}`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%cSecond round of fight:`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%c${trainer3.name} VS ${trainer4.name}`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
  } else if (selectedTrainers.length === 5) {
    console.log(
      `%cFirst round of fight:`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%c${trainer1.name} VS ${trainer2.name}`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%cSecond round of fight:`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%c${trainer3.name} VS ${trainer4.name}`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
    console.log(
      `%cThe ${trainer5.name} is waiting`,
      "font-size: 20px; color: #dee2e6; background-color: #343a40; text-align: center;padding-left:40%; padding-right:40%; border-radius: 12px;"
    );
  }
  // Start the round robin tournament
  const battle = new Battle();
  battle.startRoundRobinTournament(selectedTrainers);
}
// Start the tournament
startTournament();
