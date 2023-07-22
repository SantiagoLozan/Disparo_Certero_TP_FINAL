export default class MenuPrincipal extends Phaser.Scene {
  constructor() {
    super("menu");
  }

  init() {
    this.botonMenu;
    this.botonInfo;
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
  }

  preload() {}

  create() {
    this.add.image(400, 280, "menu");
    this.botonMenu = this.add.image(400, 525, "botonMenu").setScale(0.5);
    
    this.botonInfo = this.add.image(135, 525, "botonInfo").setScale(0.5);
    this.botonCred = this.add.image(665, 525, "botonCreditos").setScale(0.5);
  }

  update() {
    if (this.enter.isDown) {
      this.scene.start("gameplay");
    }
    this.botonMenu
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueJuego());
    this.botonInfo
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueInfo());
      this.botonCred
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueCred());
  }

  arranqueJuego() {
    this.scene.start("gameplay");
  }

  arranqueInfo() {
    this.scene.start("informacion");
  }
  arranqueCred(){
    this.scene.start("creditos")
  }
}
