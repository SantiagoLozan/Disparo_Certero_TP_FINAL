export default class Informacion extends Phaser.Scene {
  constructor() {
    super("informacion");
  }

  init() {
    this.botonAtras;
  }

  preload() {}

  create() {
    this.add.image(395, 525, "enter").setScale(0.5);
    this.botonAtras = this.add.image(120, 525, "botonatras").setScale(0.5);
    this.add.image(400, 230, "menu").setScale(1.5);
    this.textoInformacion = this.add.text(
      5,
      340,
      "Las formas que reboten en el suelo, desapareceran luego de 4 rebotes",
      {
        fontSize: "18px",
        fill: "#FFFFFF",
      }
    );
  }

  update() {
    this.botonAtras
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueMenu());
  }
  arranqueMenu() {
    this.scene.start("menu");
  }
}

//BOTON onPointer / .setInteractive / > menu
