const Hero = require("./game-models/Hero");
const Enemy = require("./game-models/Enemy");
const Boomerang = require("./game-models/Boomerang");
const Shuriken = require("./game-models/Thunder");
const View = require("./View");

class Game {
  constructor({ trackLength, playerName, skin, weapon }) {
    this.trackLength = trackLength;
    this.playerName = playerName;
    this.weapon =
      weapon === "Boomerang"
        ? new Boomerang(trackLength)
        : new Shuriken(trackLength);
    this.hero = new Hero({
      position: 0,
      boomerang: this.weapon,
      scores: 0,
      skin: skin,
    });
    this.enemy = new Enemy(trackLength);
    this.view = new View();
    this.track = [];
    this.regenerateTrack();
    this.count = 0;
  }

  regenerateTrack() {
    this.track = new Array(this.trackLength).fill(" ");
    this.track[this.hero.position] = this.hero.skin;
    this.track[this.enemy.position] = this.enemy.skin;
    if (
      this.hero.boomerang.position > this.hero.position &&
      this.hero.boomerang.position < this.trackLength
    ) {
      this.track[this.hero.boomerang.position] = this.hero.boomerang.skin;
    }
  }

  check() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die();
      this.count += 1;
    }
  }

  play() {
    setInterval(() => {
      this.handleCollisions();
      this.regenerateTrack();
      console.log(this.count);

      if (this.hero.position < 0) {
        this.hero.position = 0;
      }
      if (this.hero.position > this.trackLength - 1) {
        this.hero.position = this.trackLength - 1;
      }

      this.enemy.moveLeft();

      if (this.enemy.position < 0) {
        this.enemy.position = this.trackLength - 1;
      }

      this.view.render(this.track);
    }, 70);
  }

  handleCollisions() {
    if (this.hero.position >= this.enemy.position) {
      this.hero.die();
    }

    if (this.weapon.position >= this.enemy.position) {
      this.enemy.die(this.scores);
      this.hero.scores++;
      console.log(this.hero.scores);

      this.weapon.position = -1;
      this.enemy = new Enemy(this.trackLength);
    }
  }
}

module.exports = Game;
