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
    this.add.image(400, 230, "menu").setScale(1.5);
    this.botonMenu = this.add.image(395, 525, "botonmenu");
    this.botonInfo = this.add.image(120, 525, "botoninfo");
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
  }

  arranqueJuego() {
    this.scene.start("gameplay");
  }

  arranqueInfo() {
    this.scene.start("informacion");
  }
}
