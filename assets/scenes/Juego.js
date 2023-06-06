export default class Juego extends Phaser.Scene {
  constructor() {
    super("gameplay");
  }

  init() {
    this.isWinner;
    this.isLoser;
  }

  preload() {}

  create() {
    this.add.image(0, 0, "menu");
    this.add.text(5, 340, "GAMEPLAY", {
      fontSize: "18px",
      fill: "#FFFFFF",
    });
    console.log("gameplay");
  }

  update() {
    if (this.isWinner) {
      this.scene.start("ganador");
    }
    if (this.isLoser) {
      this.scene.start("perdedor");
    }
  }
}
