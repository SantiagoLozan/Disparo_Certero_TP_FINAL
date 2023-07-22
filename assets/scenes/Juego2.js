export default class Juego extends Phaser.Scene {
  constructor() {
    super("gameplay2");
  }

  init() {
    this.arrow;
    this.contadorSuelo = 0;
    this.sonidoBackground;
  }

  preload() {
    this.enter = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    
  }

  create() {
    const map = this.make.tilemap({ key: "nivel2" });
    const capaFondo = map.addTilesetImage("BG4", "cieloNivel2");
    const capaMapa = map.addTilesetImage("BG2", "sueloNivel2");
    const capaDeco = map.addTilesetImage("Luna", "decoNivel2");

    const fondoLayer = map.createLayer("Fondo", capaFondo, 0, 0);
    const mapaLayer = map.createLayer("Mapa", capaMapa, 0, 0);
    const decoLayer = map.createLayer("Deco", capaDeco, 0, 0);

    const objetosLayer = map.getObjectLayer("Objetos");

    mapaLayer.setCollisionByProperty({ colision: true });

    this.sonidoBackground = this.sound.add("BGM2", { loop: false });
    this.sonidoBackground.play();

    let spawnPoint = map.findObject(
      "Objetos",
      (obj) => obj.name === "Personaje"
    );

    let spawnPointObjetivo = map.findObject(
      "Objetos",
      (obj) => obj.name === "Objetivo"
    );

    this.jugador = this.physics.add
      .sprite(spawnPoint.x, spawnPoint.y, "idleBow")
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

    this.arrows = this.physics.add.group();

    this.drawLine();

    this.cameras.main.setBounds(
      0,
      0,
      map.widthInPixels,
      map.heightInPixels,
      true
    );

    this.cameras.main.centerOn(0, 0);
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.physics.add.collider(this.jugador, mapaLayer);
    this.physics.add.collider(
      this.arrows,
      mapaLayer,
      this.colisionFlechaSuelo,
      null,
      this
    );
    this.physics.add.collider(
      this.arrows,
      this.objetivo,
      this.colisionFlechaObjetivo,
      null,
      this
    );
  }

  update() {
    if (this.contadorSuelo === 5) {
      this.game.sound.stopAll();
      this.scene.start("perdedor");
    }
    if (this.arrow) {
      const angle = Math.atan2(this.arrow.body.velocity.y, this.arrow.body.velocity.x);
      this.arrow.setRotation(angle);
    }

    if (this.arrow) {
      const arrowLimitX = 2400;
      const arrowLimitY = 640;
  
      if (this.arrow.x < 0 || this.arrow.x > arrowLimitX || this.arrow.y > arrowLimitY) {
        this.arrow.destroy();
        this.arrow = null;
        this.contadorSuelo++
        this.cameras.main.startFollow(this.jugador);
        }
      }  
  }
  shoot(line) {
    const arrow = this.arrows.create(this.jugador.x, this.jugador.y, "arrow");
    if (arrow) {
      this.arrow = arrow;
      var dx = line.x1 - line.x2;
      var dy = line.y1 - line.y2;
      var magnitude = Math.sqrt(dx * dx + dy * dy);
      var direction = Math.atan2(dy, dx);
      
      var speed = 5;
      arrow.setRotation(direction);
      arrow.setVelocity(
        speed * magnitude * Math.cos(direction),
        speed * magnitude * Math.sin(direction)
      );
      this.jugador.anims.play("shoot");
      this.cameras.main.startFollow(arrow);
    }
  }

  drawLine() {
    const graphics = this.add.graphics();
    const line = new Phaser.Geom.Line();
    let isDrawing = false;

    const scene = this;

    this.input.on("pointerdown", function (pointer) {
      isDrawing = true;
      line.x1 = pointer.x;
      line.y1 = pointer.y;
      scene.jugador.anims.play("aim");
    });

    this.input.on("pointermove", function (pointer) {
      if (isDrawing) {
        line.x2 = pointer.x;
        line.y2 = pointer.y;
        graphics.clear();
        graphics.lineStyle(2, 0xffffff);
        graphics.strokeLineShape(line);
      }
    }); 
    this.jugador.anims.play("shoot");
    this.input.on("pointerup", function (pointer) {
      isDrawing = false;
      scene.shoot(line);
    });
    
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


  colisionFlechaObjetivo(flecha, objetivo) {
    this.game.sound.stopAll();
    this.scene.start("ganador");
  }

  colisionFlechaSuelo(arrow, suelo) {
    arrow.destroy();
    this.arrow = null;
    this.cameras.main.startFollow(this.jugador);
    this.contadorSuelo++
  } 
}
