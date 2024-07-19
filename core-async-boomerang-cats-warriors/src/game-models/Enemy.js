// Враг.

class Enemy {
  constructor(trackLength) {
    this.generateSkin();
    this.position = trackLength - 1;
  }
  generateSkin() {
    const skins = [
      ":mouse2:",
      ":mouse:",
      ":fish:",
      ":yarn:",
      ":bacon:",
      ":falafel:",
      ":glass_of_milk:",
    ];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }
  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }
  die() {
    this.position = "?";
    console.log("Enemy is dead!");
  }
}
module.exports = Enemy;
