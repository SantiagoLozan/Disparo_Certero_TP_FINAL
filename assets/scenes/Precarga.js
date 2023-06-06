export default class Precarga extends Phaser.Scene {
  constructor() {
    super("precarga");
  }

  init() {}

  preload() {
    this.load.image("menu", "assets/images/Preload.jpg");
    this.load.image("enter", "assets/images/teclaEnter.png");
    this.load.image("botoninfo", "assets/images/BotonInfo.png");
    this.load.image("botonmenu", "assets/images/BotonMenu.png");
    this.load.image("botonatras", "assets/images/BotonAtras.png");
    this.load.image("winner", "assets/images/Winner.png");
    this.load.image("loser", "assets/images/Loser.png");
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    //this.anim.
  }

  create() {
    this.add.image(400, 230, "menu").setScale(1.5);
    this.add.image(395, 525, "enter").setScale(0.5);
  }

  update() {
    if (this.enter.isDown) {
      this.scene.start("menu");
    }
  }
}
