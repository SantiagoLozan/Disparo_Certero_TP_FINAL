export default class Informacion extends Phaser.Scene {
  constructor() {
    super("informacion");
  }

  init() {
    this.botonAtras;
  }

  preload() {}

  create() {
    this.add.image(400, 300, "backgroundInfo");
    this.botonAtras = this.add.image(120, 525, "botonatras").setScale(0.5);
    this.textoInformacion = this.add.text(
     350,
      20,
      "Instrucciones:",
      {
        fontSize: "26px",
        fontFamily: "Dosis Bold",
        fill: "#FFFFFF",
      }
    );
    this.textoInformacion = this.add.text(
      55,
      80,
      "El objetivo principal es apuntar y disparar la flecha hacia el objetivo.",
      {
        fontSize: "16px",
        fontFamily: "Dosis Bold",
        fill: "#FFFFFF",
      }
    );
    this.textoInformacion = this.add.text(
      55,
      110,
      "Al apretar click izquierdo, arrastrar y soltar, se guardaran 2 puntos de inicio y final.",
      {
        fontSize: "16px",
        fontFamily: "Dosis Bold",
        fill: "#FFFFFF",
      }
    );
    this.textoInformacion = this.add.text(
      55,
      140,
      "Con esos puntos, se trazará una linea guia del recorrido.",
      {
        fontSize: "16px",
        fontFamily: "Dosis Bold",
        fill: "#FFFFFF",
      }
    );
    this.textoInformacion = this.add.text(
      55,
      170,
      "Si la flecha colisiona con el objetivo, dependiendo del nivel puede pasar al siguiente o ganar.",
      {
        fontSize: "16px",
        fontFamily: "Dosis Bold",
        fill: "#FFFFFF",
      }
    );
    this.textoInformacion = this.add.text(
      55,
      200,
      "Tendrá tres oportunidades para ganar el nivel.",
      {
        fontSize: "16px",
        fontFamily: "Dosis Bold",
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
