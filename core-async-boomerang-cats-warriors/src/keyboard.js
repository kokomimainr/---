// Умеешь работать с keypress? Попробуй разобраться в этом файле.
// Вместо keypress можно использовать и стандартный readline.
// Главное не используй всё вместе!

const keypress = require("keypress");

// Управление.
// Настроим соответствия нажатий на клавиши и действий в игре.
const keypress = require("keypress");
const keyboard = {
  left: (game) => game.hero.moveLeft(),
  right: (game) => game.hero.moveRight(),
  space: (game) => game.hero.attack(),
};
function runInteractiveConsole(game) {
  keypress(process.stdin);
  process.stdin.on("keypress", (ch, key) => {
    if (key) {
      if (key.name in keyboard) {
        keyboard[key.name](game);
      }
      if (key.ctrl && key.name === "c") {
        process.exit();
      }
    }
  });
  process.stdin.setRawMode(true);
  process.stdin.resume();
}
module.exports = runInteractiveConsole;
