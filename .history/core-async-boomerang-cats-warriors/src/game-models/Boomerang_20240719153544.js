class Boomerang {
  constructor(trackLength) {
    this.skin = '🐾';
    this.position = -1;
    this.trackLength = trackLength;
  }

  fly() {
    const distance = 10;

    for (let i = 0; i <= distance; i += 1) {
      setTimeout(() => this.moveRight(1), 30 * i);
    }

    for (let i = 0; i <= distance; i += 1) {
      setTimeout(
        () => this.moveLeft(1),
        30 * (distance + 1),
      );
    }

    setTimeout(
      () => this.reset(),
      30 * (distance * 2),
    );
  }

  reset() {
    this.position = -1;
  }

  moveLeft(distance) {
    this.position -= distance;
  }

  moveRight(distance) {
    this.position += distance;
  }
}

module.exports = Boomerang;