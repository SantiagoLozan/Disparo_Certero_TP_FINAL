export default class Precarga extends Phaser.Scene {
  constructor() {
    super("precarga");
  }

  init() {}

  preload() {
    this.load.image("menu", "assets/images/Preload.png");
    this.load.image("backgroundInfo", "assets/images/backgroundInfo.png");
    this.load.image("enter", "assets/images/teclaEnter.png");
    this.load.image("botoninfo", "assets/images/BotonInfo.png");
    this.load.image("botonmenu", "assets/images/BotonMenu.png");
    this.load.image("botonatras", "assets/images/BotonAtras.png");
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    this.load.tilemapTiledJSON("nivel1", "assets/tilemap/Nivel1.json");
    this.load.tilemapTiledJSON("nivel2", "assets/tilemap/Nivel2.json");
    this.load.image("cieloNivel1", "assets/images/BG1.png");
    this.load.image("sueloNivel1", "assets/images/BG3.png");
    this.load.image("decoNivel1", "assets/images/Nubes.png");
    this.load.image("sueloNivel2", "assets/images/BG2.png");
    this.load.image("decoNivel2", "assets/images/Luna.png");
    this.load.image("cieloNivel2", "assets/images/BG4.png");
    this.load.image("objetivo", "assets/images/Objetivo.png");
    this.load.image("arrow", "assets/images/Arrow.png");
    this.load.image("logoUnraf", "assets/images/logoUnraf.png");
    this.load.image("botoncreditos", "assets/images/BotonCreditos.png");
    this.load.audio("BGM1", "assets/BGM/BGM1.mp3");
    this.load.audio("BGM2", "assets/BGM/BGM2.mp3");

    
    this.load.spritesheet("idleBow", "assets/images/Shot.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("arqueroDisparando", "assets/images/Shot.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("arqueroApuntando", "assets/images/Shot.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
  }

  create() {
    this.add.image(400, 280, "menu");

    this.add.image(400, 525, "enter").setScale(0.5);

    this.anims.create({
      key: "idleBow",
      frames: [("idleBow", { frame: 15 })],
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "aim",
      frames: this.anims.generateFrameNumbers("arqueroApuntando", {
        start: 0,
        end: 10,
      }),
      frameRate: 20,
      repeat: 0,
    });
    this.anims.create({
      key: "shoot",
      frames: this.anims.generateFrameNumbers("arqueroDisparando", {
        start: 11,
        end: 14,
      }),
      frameRate: 20,
      repeat: 0,
    });
  }

  update() {
    if (this.enter.isDown) {
      this.scene.start("menu");
    }
  }
}
