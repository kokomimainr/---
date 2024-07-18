// Импортируем всё необходимое.
// Или можно не импортировать,
// а передавать все нужные объекты прямо из run.js при инициализации new Game().

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const User = require('../db/models/user')
// const Boomerang = require('./game-models/Boomerang');
const View = require('./View');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength }) {
    this.trackLength = trackLength;
    this.hero = new Hero(); // Герою можно аргументом передать бумеранг.
    this.enemy = new Enemy();
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.name = "";
  }

  static async getName() {
    const { username } = await this.view.getName();
    this.name = username;
    const userData = await User.create(this.name)

  }

  regenerateTrack() {
    // Сборка всего необходимого (герой, враг(и), оружие)
    // в единую структуру данных
    this.track = (new Array(this.trackLength)).fill(' ');
    this.track[this.hero.position] = this.hero.skin;
  }

  check() {
    if (this.hero.position === this.enemy.position) {
      this.hero.die();
    }
  }

  play() {
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack();
      this.view.render(this.track);
    });
  }
}

Game.getName()

module.exports = Game;
