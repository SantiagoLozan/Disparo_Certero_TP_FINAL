export default class Ganador extends Phaser.Scene {
  constructor() {
    super("ganador");
  }

  init() {}

  preload() {}

  create() {
    this.add.image(400, 300, "backgroundInfo");
    this.add.text(350, 300, "HAZ GANADO!", {
      fontSize: "26px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    console.log("ganador");
  }

  update() {}
}
