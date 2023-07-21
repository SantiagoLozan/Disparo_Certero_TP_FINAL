export default class Creditos extends Phaser.Scene {
    constructor() {
      super("creditos");
    }
  
    init() {
      this.botonAtras;
    }
  
    preload() {}
  
    create() {
      this.add.image(400, 300, "backgroundInfo");
      this.botonAtras = this.add.image(120, 525, "botonatras").setScale(0.5);
      this.add.image(400, 300, "logoUnraf");
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
  
  