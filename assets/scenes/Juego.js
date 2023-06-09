export default class Juego extends Phaser.Scene {
  constructor() {
    super("gameplay");
  }

  init() {
    this.isWinner;
    this.isLoser;
    this.pos = 0;
  }

  preload() {
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER)
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

    if (this.pos === 0) {
      this.cameras.main.startFollow(this.objetivo);
      this.cam.pan(0, 0, 4000);
      this.pos++;
    }
    if (this.pos === 1) {
      this.camarajugador = this.cameras.main.startFollow(this.jugador);
      //sumar un poss para que siga la flecha.
    }

    this.arrow = this.physics.add.sprite(100, -500, "arrow").setCollideWorldBounds(true).setScale(1.2);
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

    this.physics.add.collider(this.jugador, mapaLayer);
  }

  update() {
    if (this.isWinner) {
      this.scene.start("ganador");
    }
    if (this.isLoser) {
      this.scene.start("perdedor");
    }

    if (this.cursors.left.isDown) {
      this.jugador.setVelocityX(-160);
      this.jugador.anims.play("left", true);
    }
    //move right
    else if (this.cursors.right.isDown) {
      this.jugador.setVelocityX(500);
      this.jugador.anims.play("right", true);
    }
    else if (this.cursors.up.isDown) {
      this.jugador.anims.play("shoot", true);
    }
    //stop
    else {
      this.jugador.setVelocityX(0);
      this.jugador.anims.play("idle", true);
    }
    
  
}
}
