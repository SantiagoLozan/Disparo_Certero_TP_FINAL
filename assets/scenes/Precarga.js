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
    this.load.tilemapTiledJSON("nivel1", "/assets/tilemap/Nivel1.json");
    this.load.tilemapTiledJSON("nivel2", "/assets/tilemap/Nivel2.json");
    this.load.image("cieloNivel1", "/assets/images/BG1.png");
    this.load.image("sueloNivel1", "/assets/images/BG3.png");
    this.load.image("decoNivel1", "/assets/images/Nubes.png");
    this.load.image("sueloNivel2", "/assets/images/BG2.png");
    this.load.image("decoNivel2", "/assets/images/Luna.png");
    this.load.image("cieloNivel2", "/assets/images/BG4.png");
    this.load.image("objetivo", "assets/images/Objetivo.png");

    this.load.spritesheet("arqueroCaminando", "/assets/images/Walk.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("arqueroCaminandoIZQ", "/assets/images/WalkIZQ.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("idle", "/assets/images/Idle.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
  }

  create() {
    this.add.image(400, 230, "menu").setScale(1.5);
    this.add.image(395, 525, "enter").setScale(0.5);

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("arqueroCaminando", {
        start: 0,
        end: 6,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("arqueroCaminandoIZQ", {
        start: 6,
        end: 0,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "turn",
      frames: [("idle", { frame: 1 })],
      frameRate: 20,
      repeat: 1,
    });
  }

  update() {
    if (this.enter.isDown) {
      this.scene.start("menu");
    }
  }
}
