const Game = require("./src/Game");
const runInteractiveConsole = require("./src/keyboard");
const inquirer = require("inquirer");
const startGame = async () => {
  const answers = await inquirer.default.prompt([
    {
      type: "input",
      name: "playerName",
      message: "Введите ваше имя:",
    },
    {
      type: "list",
      name: "skin",
      message: "Выберите скин вашего героя:",
      choices: [":smirk_cat:", ":smiley_cat:", ":smile_cat:", ":joy_cat:"],
    },
    {
      type: "list",
      name: "weapon",
      message: "Выберите оружие:",
      choices: ["Boomerang", "Shuriken"],
    },
    {
      type: "confirm",
      name: "start",
      message: "Начать игру?",
      default: true,
    },
  ]);
  if (answers.start) {
    const game = new Game({
      trackLength: 50,
      playerName: answers.playerName,
      skin: answers.skin,
      weapon: answers.weapon,
    });
    game.play();
    runInteractiveConsole(game);
  } else {
    console.log("Игра отменена.");
  }
};
startGame();
