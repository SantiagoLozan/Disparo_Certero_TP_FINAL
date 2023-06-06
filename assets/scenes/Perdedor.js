export default class Perdedor extends Phaser.Scene {
  constructor() {
    super("perdedor");
  }

  init() {}

  preload() {}

  create() {
    this.add.text(5, 340, "PERDEDOR", {
      fontSize: "18px",
      fill: "#FFFFFF",
    });
    console.log("perdedor");
  }

  update() {}
}
