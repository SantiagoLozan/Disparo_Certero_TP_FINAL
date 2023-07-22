export default class Precarga extends Phaser.Scene {
  constructor() {
    super("precarga");
  }

  init() {}

  preload() {
    this.load.image("menu", "assets/images/preload.png");
    this.load.image("backgroundInfo", "assets/images/backgroundInfo.png");
    this.load.image("enter", "assets/images/teclaEnter.png");
    this.load.image("botonInfo", "assets/images/botonInfo.png");
    this.load.image("botonMenu", "assets/images/botonMenu.png");
    this.load.image("botonAtras", "assets/images/botonAtras.png");
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    this.load.tilemapTiledJSON("nivel1", "assets/tilemap/Nivel1.json");
    this.load.tilemapTiledJSON("nivel2", "assets/tilemap/Nivel2.json");
    this.load.image("cieloNivel1", "assets/images/bg1.png");
    this.load.image("sueloNivel1", "assets/images/bg3.png");
    this.load.image("decoNivel1", "assets/images/nubes.png");
    this.load.image("sueloNivel2", "assets/images/bg2.png");
    this.load.image("decoNivel2", "assets/images/luna.png");
    this.load.image("cieloNivel2", "assets/images/bg4.png");
    this.load.image("objetivo", "assets/images/objetivo.png");
    this.load.image("arrow", "assets/images/arrow.png");
    this.load.image("logoUnraf", "assets/images/logoUnraf.png");
    this.load.image("botonCreditos", "assets/images/botonCreditos.png");
    this.load.image("github", "assets/images/github.png");
    this.load.image("twitter", "assets/images/twitter.png");
    this.load.image("linkedin", "assets/images/linkedin.png");
    this.load.image("ins1", "assets/images/1.png");
    this.load.image("ins2", "assets/images/2.png");
    this.load.audio("BGM1", "assets/BGM/BGM1.mp3");
    this.load.audio("BGM2", "assets/BGM/BGM2.mp3");
    this.load.audio("win", "assets/BGM/win.ogg");
    this.load.audio("lose", "assets/BGM/lose.ogg");

    
    this.load.spritesheet("idleBow", "assets/images/shot.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("arqueroDisparando", "assets/images/shot.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
    this.load.spritesheet("arqueroApuntando", "assets/images/shot.png", {
      frameWidth: 128,
      frameHeight: 128,
    });
  }

  create() {
    this.add.image(400, 280, "menu");

    this.botonEnter = this.add.image(400, 525, "enter").setScale(0.5);

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
    this.botonEnter
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.arranqueMenu());
  }
  arranqueMenu() {
    this.scene.start("menu");
  }
}
