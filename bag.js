
import InventoryScene from './interface/inventoryScene.js';

let game;

init();

function init(){
  game = new InventoryScene(window,document);
  animate();
}
function animate() {
  requestAnimationFrame(animate);
}