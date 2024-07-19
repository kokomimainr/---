// Сделаем отдельный класс для отображения игры в консоли.
const inquirer = require("inquirer");

class View {
  render() {
    const yourTeamName = "КОТЫ-ВОИТЕЛИ";
    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(""));
    console.log("\n\n");
    console.log(`Сделали "${yourTeamName}" с любовью`);
  }

  static async getName() {
    const name = await inquirer.default.prompt([
      { type: "input", name: "username", message: "Введи имя:" },
    ]);
    return name;
  }
}

module.exports = View;
