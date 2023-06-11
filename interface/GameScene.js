import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import applyPhysics from './engine/Physics.js'
import CameraController from './UI_components/CameraController.js'
import GeometryBuilder from'./builders/objects/GeometryBuilder.js'
import levelZero from './builders/levels/levelZero.js'
import {getInteractions, getInteractives} from './engine/interactiveTrigger.js'

export default class GameScene{
  constructor(window,document){
    this.objects =[];
    this.interactiveObjects = [];
    this.main = undefined;
    this.interactive = undefined;
    this.intractiveColor = undefined;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.cameraController = new CameraController(window.innerWidth,window.innerHeight,this.renderer);
    var result = levelZero(this.cameraController);
    this.objects = result.objects;
    this.main = result.main;
    this.scene = result.scene;
    this.interactiveObjects = result.interactiveObjects;
  }
  animate(turn,forward) {
    this.updatePlayer(turn,forward);
    this.checkInteract()
    this.renderer.render( this.scene, this.cameraController.camera );
    this.cameraController.controller.update();
  }
  updatePlayer(t,f){
    this.main.mesh.rotation.y = this.cameraController.getAngle()
    this.main.setSpeed(t,0,f,this.cameraController.getAngle(), this.cameraController.getAngle());
    applyPhysics(this.main,this.objects,this.interactiveObjects);
    this.main.render();
    this.cameraController.alignCamera(this.main.mesh.position);
  }
  checkInteract(){
    var tmpinteractive = getInteractives(this.main.mesh.position, this.cameraController.getAngle(), this.interactiveObjects);
    if(tmpinteractive && this.interactive !== tmpinteractive){
      if(this.interactive){
        this.interactive.material.color.setHex(this.intractiveColor);
      }
      this.interactive = tmpinteractive;
      this.intractiveColor = tmpinteractive.material.color.getHex();
      this.interactive.material.color.setHex(0x0000ff);
    }else if(!tmpinteractive && this.interactive){
      this.interactive.material.color.setHex(this.intractiveColor);
      this.interactive = undefined;
      this.intractiveColor = undefined;
    }
  }
}