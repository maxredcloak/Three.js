
import JoystickController from './interface/UI_components/JoystickController.js';
import GameScene from './interface/GameScene.js';

let game;
let controls;
let jumpPress = false;

init();

function init(){
  document.getElementById('jumpButton').onclick = sayHello;
  game = new GameScene(window,document);
  controls = new JoystickController(document);
  animate();
}
function animate() {
  var {turn,forward} = controls.getDirection();
  game.animate(turn,forward,jumpPress);
  jumpPress = false;
  requestAnimationFrame(animate);
}
function sayHello() {
    jumpPress = true;
}