export default class Perdedor extends Phaser.Scene {
  constructor() {
    super("perdedor");
  }

  init() {}

  preload() {
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  create() {
    this.add.image(400, 300, "backgroundInfo");
    this.add.text(350, 300, "HAS PERDIDO!", {
      fontSize: "26px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    this.add.text(250, 500, "Presiona Enter para Regresar!", {
      fontSize: "26px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    console.log("perdedor");
  }

  update() {
    if (this.enter.isDown) {
      this.scene.start("menu");
    }
  }
}
