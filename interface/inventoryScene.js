import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import applyPhysics from './engine/Physics.js'
import CameraController from './UI_components/CameraController.js'
import GeometryBuilder from'./builders/objects/GeometryBuilder.js'
import {createScene} from'./builders/levels/utils/sceneUtils.js'
import getInteractions from './engine/interactiveTrigger.js'

export default class InventoryScene{
  constructor(window,document){
    this.objects =[];
    this.main = undefined;
    this.interactive = undefined;
    this.intractiveColor = undefined;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.cameraController = new CameraController(window.innerWidth,window.innerHeight,this.renderer);
    var result = this.createinv(this.cameraController)
    this.objects = result.objects;
    this.main = result.main;
    this.scene = result.scene;
  }
  animate(turn,forward) {
    this.renderer.render( this.scene, this.cameraController.camera );
    this.cameraController.controller.update();
  }
  
  createinv(cameraController){
    const objects = [];
    const scene = createScene();
  /*  var main = new GeometryBuilder()
      .setSize(5,5,5)
      .setColor(0xff0000)
      .build();*/
//    main = new Character(main);
    scene.add(cameraController.camera);
//    scene.add(main.mesh);
    var cuboblanco = new GeometryBuilder()
      .setSize(5,5,5)
      .setPosition(10,0,10)
      .build();
    scene.add(cuboblanco);
    objects.push(cuboblanco);
  //  console.log(scene)
/*    var pared1 = new GeometryBuilder()
      .setSize(2, 40, 40)
      .setPosition(-20, 20, 0)
      .build();
    scene.add(pared1);
    objects.push(pared1);
    var suelo = new GeometryBuilder()
      .setSize(200, 0, 200)
      .setPosition(0, -5, 0)
      .setColor(0xaaaaaa)
      .build();
    scene.add(suelo);
    objects.push(suelo);
    return {
      main: main,
      objects: objects,
      scene: scene
    };*/
    return {
      objects:objects,
      scene:scene
    }
  }
}