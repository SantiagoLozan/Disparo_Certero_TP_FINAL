export default class Ganador extends Phaser.Scene {
  constructor() {
    super("ganador");
  }

  init() {}

  preload() {}

  create() {
    this.add.text(5, 340, "GANADOR", {
      fontSize: "18px",
      fill: "#FFFFFF",
    });
    console.log("ganador");
  }

  update() {}
}
