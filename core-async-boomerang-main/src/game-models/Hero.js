// Наш герой.

class Hero {
  constructor({ position }) {
    this.skin = '🐈'; // можете использовать любые emoji '💃'
    this.position = position;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '😿';
    console.log('КОТИК ГРУСТИТ!!!!!!!!🙀😾😾🙀');
    process.exit();
  }
}

module.exports = Hero;
