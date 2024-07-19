// Бумеранг является оружием.
// В дальнейшем можно добавить другое оружие.
// Тогда можно будет создать класс Weapon и воспользоваться наследованием!

class Boomerang {
  constructor(trackLength) {
    this.skin = '🐾';
    this.position = -1;
    this.trackLength = trackLength;
  }

  fly() {
    const distance = 25;
    for (let i = 0; i <= distance; i += 1) {
      setTimeout(() => this.moveRight(), 25 * i); // запускаем бумеранг на заданное расстояние
    }

    for (let i = 0; i <= distance; i += 1) {
      setTimeout(
        () => this.moveLeft(),
        25 * (distance),
      ); // возвращаем бумеранг на заданное расстояние
    }

    setTimeout(
      () => this.reset(),
      25 * (distance * 2),
    ); // сбрасываем позицию бумеранга после возвращения
  }

  reset() {
    this.position = -1; // сброс позиции бумеранга
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }
}

module.exports = Boomerang;
