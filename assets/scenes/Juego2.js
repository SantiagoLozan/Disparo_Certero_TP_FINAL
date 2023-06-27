export default class Juego extends Phaser.Scene {
    constructor() {
      super("gameplay2");
    }
  
    init() {
      this.isWinner;
      this.isLoser;
      this.firstVarX = 0;
      this.firstVarY = 0;
      this.finalVarX = 0;
      this.finalVarY = 0;
      this.primaryDown = false;
      this.arrow;
    }
  
    preload() {
      this.enter = this.input.keyboard.addKey(
        Phaser.Input.Keyboard.KeyCodes.ENTER
      );
      this.onClick = this.input.activePointer;
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
  
      
  
      this.line = new Phaser.Geom.Line(this.firstVarX, this.firstVarY, this.finalVarX, this.finalVarY);
      this.graphics = this.add.graphics({
        lineStyle: { width: 10, color: 0xffdd00, alpha: 0.5 },
      });
      
      this.graphics.strokeLineShape(this.line);
    //crear flecha
    //this.arrow = this.physics.add.sprite(600, 600, "arrow").setCollideWorldBounds(true);
    //this.arrow.body.allowGravity = true;
  
      
  
      this.arrowCurve = new Phaser.Curves.QuadraticBezier(
        new Phaser.Math.Vector2(this.firstVarX, this.firstVarY), // Punto de inicio
        new Phaser.Math.Vector2((this.firstVarX + this.finalVarX) / 2, this.finalVarY), // Punto de control
        new Phaser.Math.Vector2(this.finalVarX, this.finalVarY) // Punto final
      );
  
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
    //this.physics.add.collider(this.arrow, mapaLayer, this.colisionFlechaSuelo, null, this);
    //this.physics.add.collider(this.arrow, this.objetivo, this.colisionFlechaObjetivo, null, this);
    }
  
    update() {
      if (this.isWinner) {
        this.scene.start("ganador");
      }
      if (this.isLoser) {
        this.scene.start("perdedor");
      }
      
      this.playerMovement.call(this);
      this.graphics.clear(this.line);
      if (this.primaryDown === false && this.input.activePointer.isDown) {
        this.primaryDown = true;
        this.firstVarX = this.input.activePointer.x;
        this.firstVarY = this.input.activePointer.y;
        this.firstPoint = [this.firstVarX, this.firstVarY];
        console.log(this.firstPoint, "punto x y");
      }
      if (this.primaryDown && this.input.activePointer.leftButtonReleased()) {
        this.primaryDown = false;
        this.finalVarX = this.input.activePointer.x;
        this.finalVarY = this.input.activePointer.y;
        this.finalPoint = [this.finalVarX, this.finalVarY];
        console.log(this.finalPoint, "punto x y final");
        this.graphics.clear(this.line)
      }
        if (this.finalVarX && this.finalVarY !== 0) {
        this.line = new Phaser.Geom.Line(this.firstVarX, this.firstVarY, this.finalVarX, this.finalVarY);
        this.graphics = this.add.graphics({
        lineStyle: { width: 10, alpha:  1 },
      });
      this.graphics.strokeLineShape(this.line);
      this.contador = this.contador++
     }
      
     if (this.primaryDown === false && this.contador === 1 ) {
      this.graphics.clear(this.line)
      this.contador = this.contador--
     }
    
    /* if (this.contadorSuelo === 3) {
        this.scene.start("perdedor")
     }*/
         
        /*this.arrow = this.physics.add
          .sprite(500, 600, "arrow")
          .setCollideWorldBounds(true);
        this.arrow.setBounce(0);
        this.arrow.body.allowGravity = true;
        console.log(this.arrow, "creada");
  
        this.physics.add.collider(this.arrow, this.mapaLayer);
        this.physics.add.collider(this.arrow, this.objetivo);
  
        this.physics.velocityFromRotation(
          this.angle,
          600,
          this.arrow.body.velocity
        );
        this.physics.moveTo(this.arrow, this.firstVarX, this.firstVarY);
        */
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
    /*colisionFlechaObjetivo(flecha, objetivo){
    this.scene.start("gameplay2");
 }
    colisionFlechaSuelo(arrow, suelo){
    arrow.disableBody(true, true)
    this.contadorSuelo++;
  }*/
  }
  