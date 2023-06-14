export default class Juego extends Phaser.Scene {
  constructor() {
    super("gameplay");
  }

  init() {
    this.isWinner;
    this.isLoser;
    this.firstVarX = 0;
    this.firstVarY = 0;
    this.finalVarX = 0;
    this.finalVarY = 0;
    this.primaryDown = false;
  }

  preload() {
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    this.onClick = this.input.activePointer;
  }

  create() {
    const map = this.make.tilemap({ key: "nivel1" });
    const capaFondo = map.addTilesetImage("BG1", "cieloNivel1");
    const capaMapa = map.addTilesetImage("BG3", "sueloNivel1");
    const capaDeco = map.addTilesetImage("Nubes", "decoNivel1");

    const fondoLayer = map.createLayer("Fondo", capaFondo, 0, 0);
    const mapaLayer = map.createLayer("Mapa", capaMapa, 0, 0);
    const decoLayer = map.createLayer("Deco", capaDeco, 0, 0);

    const objetosLayer = map.getObjectLayer("Objetos");

    mapaLayer.setCollisionByProperty({ colision: true });

    let spawnPoint = map.findObject(
      "Objetos",
      (obj) => obj.name === "Personaje"
    );

    let spawnPointObjetivo = map.findObject(
      "Objetos",
      (obj) => obj.name === "Objetivo"
    );

    this.jugador = this.physics.add
      .sprite(spawnPoint.x, spawnPoint.y, "idle")
      .setCollideWorldBounds(true);
    this.jugador.setBounce(0.1);
    this.jugador.body.allowGravity = false;

    this.objetivo = this.physics.add
      .sprite(spawnPointObjetivo.x, spawnPointObjetivo.y, "objetivo")
      .setScale(0.25)
      .setCollideWorldBounds(true);

    this.objetivo.body.allowGravity = false;

    this.cam = this.cameras.main;

    this.cameras.main.startFollow(this.objetivo);
    this.moverCamaraJugador();

    //crear flecha
    this.arrow = this.physics.add
      .sprite(100, -500, "arrow")
      .setCollideWorldBounds(true)
      .setScale(1.2);
    this.arrow.body.allowGravity = true;

    this.cameras.main.setBounds(
      0,
      0,
      map.widthInPixels,
      map.heightInPixels,
      true
    );

    this.cameras.main.centerOn(0, 0);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.cursors = this.input.keyboard.createCursorKeys();
    this.onClick;

    this.physics.add.collider(this.jugador, mapaLayer);
    this.physics.add.collider(this.arrow, mapaLayer);
    this.physics.add.overlap(this.arrow, this.objetivo);
  }

  update() {
    if (this.isWinner) {
      this.scene.start("ganador");
    }
    if (this.isLoser) {
      this.scene.start("perdedor");
    }

    this.playerMovement.call(this);

    if (this.input.activePointer.isDown) {
      this.primaryDown = true;
      this.firstVarX = this.input.activePointer.x;
      this.firstVarY = this.input.activePointer.y;
      console.log(this.firstVarX, "pointer en x");
      console.log(this.firstVarY, "pointer en y");
    }
    if (this.primaryDown && this.input.activePointer.leftButtonReleased()) {
      this.finalVarX = this.input.activePointer.x;
      this.finalVarY = this.input.activePointer.y;
      console.log(this.finalVarX, "var x");
      console.log(this.finalVarY, "var y");
      this.primaryDown = false;
      this.physics.moveTo(this.arrow, this.finalVarX, this.finalVarY);
    }
  }

  moverCamaraJugador() {
    this.cam.pan(
      this.jugador.x,
      this.jugador.y,
      4000,
      "Sine.easeInOut",
      false,
      //The camera pan callback
      (camera, progress) => {
        if (progress === 1) {
          camera.startFollow(this.jugador);
        }
      }
    );
  }

  playerMovement() {

    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-160);
      this.jugador.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(500);
      this.jugador.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.jugador.anims.play("shoot", true);
    } else {
      this.jugador.setVelocityX(0);
      this.jugador.anims.play("idle", true);
    }
  }
}
