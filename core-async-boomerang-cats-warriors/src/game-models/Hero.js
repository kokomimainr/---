class Hero {
  constructor({ position, boomerang, skin }) {
    this.skin = skin;
    this.position = position;
    this.boomerang = boomerang;
    this.scores = 0;
  }

  moveLeft() {
    this.position -= 1;
  }

  moveRight() {
    this.position += 1;
  }

  attack() {
    this.boomerang.position = this.position + 1;
    this.boomerang.fly();
  }

  die() {
    this.skin = '😿';
    console.log('Игра закончилась! КОТИК ПЛАЧЕТ!!! 😿');
    process.exit();
  }
}

module.exports = Hero;