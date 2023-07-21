export default class Creditos extends Phaser.Scene {
    constructor() {
      super("creditos");
    }
  
    init() {
      this.botonAtras;
    }
  
    preload() {}
  
    create() {
      this.add.image(400, 300, "backgroundInfo");
      this.botonAtras = this.add.image(120, 525, "botonatras").setScale(0.5);
      this.logo = this.add.image(400, 70, "logoUnraf").setScale(1.6);
      this.logoGH = this.add.image(450, 350, "github").setScale(0.7);
      this.logoTW = this.add.image(300, 350, "twitter").setScale(0.125);
      this.logoLN = this.add.image(600, 350, "linkedin").setScale(0.125);
      this.textoCreditos = this.add.text(
        85,
         150,
         "Producido por: ",
         {
           fontSize: "46px",
           fontFamily: "Dosis Bold",
           fill: "#FFFFFF",
         }
       );
       this.textoCreditos = this.add.text(
        135,
         200,
         "Santiago Lozan",
         {
           fontSize: "46px",
           fontFamily: "Dosis Bold",
           fill: "#FFFFFF",
         }
       );
    }
  
    update() {
      this.botonAtras
        .setInteractive({ useHandCursor: true })
        .on("pointerdown", () => this.arranqueMenu());
    
    this.logo.setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
        window.open("https://www.unraf.edu.ar/", "_blank");
        });

     this.logoGH.setInteractive({ useHandCursor: true })
        .on("pointerdown", () => {
        window.open("https://github.com/SantiagoLozan", "_blank");
        });

    this.logoTW.setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
        window.open("https://twitter.com/SaantiLozan", "_blank");
      });
    
    this.logoLN.setInteractive({ useHandCursor: true })
    .on("pointerdown", () => {
        window.open("https://www.linkedin.com/in/santiago-lozan-6550b11a7/", "_blank");
      });
    }
    arranqueMenu() {
      this.scene.start("menu");
    }

  }
  
  