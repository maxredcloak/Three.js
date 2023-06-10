
import JoystickController from './interface/UI_components/JoystickController.js';
import GameScene from './interface/GameScene.js';

let game;
let controls;

init();

function init(){
  game = new GameScene(window,document);
  controls = new JoystickController(document);
  animate();
}
function animate() {
  var {turn,forward} = controls.getDirection();
  game.animate(turn,forward)
  requestAnimationFrame(animate);
}