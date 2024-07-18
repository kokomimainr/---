// Сделаем отдельный класс для отображения игры в консоли.
const inquirer = require('inquirer')
class View {
  render() {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(this.game.track.join(''));
    console.log('\n\n');
    console.log(`Created by "${yourTeamName}" with love`);
  }

  getName() {
    return inquirer.default.prompt([
      { type: 'input', name: 'username', message: 'Введи имя:' },
    ]);
  }
}

module.exports = View;
