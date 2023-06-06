import HelloWorldScene from "./assets/scenes/HelloWorldScene.js";
import Precarga from "./assets/scenes/Precarga.js";
import Juego from "./assets/scenes/Juego.js";
import Ganador from "./assets/scenes/Ganador.js";
import Perdedor from "./assets/scenes/Perdedor.js";
import MenuPrincipal from "./assets/scenes/MenuPrincipal.js";
import Informacion from "./assets/scenes/Informacion.js";

// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 800,
      height: 600,
    },
    max: {
      width: 1600,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [
    Precarga,
    Juego,
    Informacion,
    Ganador,
    Perdedor,
    MenuPrincipal,
    HelloWorldScene,
  ],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
