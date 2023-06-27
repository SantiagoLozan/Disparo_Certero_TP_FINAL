export default class Perdedor extends Phaser.Scene {
  constructor() {
    super("perdedor");
  }

  init() {}

  preload() {}

  create() {
    this.add.image(400, 300, "backgroundInfo");
    this.add.text(350, 300, "HAZ PERDIDO!", {
      fontSize: "26px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    console.log("perdedor");
  }

  update() {}
}
