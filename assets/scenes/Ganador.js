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
    this.add.text(35, 120, "GENIAL! TU PUNTERÍA ES INFALIBLE", {
      fontSize: "42px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    this.add.text(120, 180, "COMIENZA NUEVAMENTE", {
      fontSize: "42px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    this.add.text(250, 450, "Presiona Enter para Regresar!", {
      fontSize: "26px",
      fontFamily: "Dosis Bold",
      fill: "#FFFFFF",
    });
    this.add.image(400, 325, "idleBow").setScale(1.5);
    this.botonEnter = this.add.image(400, 525, "enter").setScale(0.5);

  }

  update() {
    if (this.enter.isDown) {
      this.scene.start("menu");
    }
    this.botonEnter.setInteractive({ useHandCursor: true }).on("pointerdown", () => this.arranqueMenu());
  }
  arranqueMenu() {
    this.scene.start("menu");
  }
}
