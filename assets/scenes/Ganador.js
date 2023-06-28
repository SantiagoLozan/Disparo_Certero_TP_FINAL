export default class Ganador extends Phaser.Scene {
  constructor() {
    super("ganador");
  }

  init() {}

  preload() {
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  create() {
    this.add.image(400, 300, "backgroundInfo");
    this.add.text(350, 300, "HAS GANADO!", {
      fontSize: "26px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    this.add.text(250, 450, "Presiona Enter para Regresar!", {
      fontSize: "26px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    this.add.image(400, 525, "enter").setScale(0.5);

    console.log("ganador");
  }

  update() {
    if (this.enter.isDown) {
      this.scene.start("menu");
    }
  }
}
