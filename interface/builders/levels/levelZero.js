import GeometryBuilder from '../objects/GeometryBuilder.js';
import Character from '../../objects/Character.js'
import {createScene} from './utils/sceneUtils.js'

export default function levelZero(cameraController){
    var objects = [];
    var scene = createScene();
    var main = new GeometryBuilder()
      .setSize(5,5,5)
      .setColor(0xff0000)
      .build();
    main = new Character(main);
    scene.add(cameraController.camera);
    scene.add(main.mesh);
    var cuboblanco = new GeometryBuilder()
      .setSize(5,5,5)
      .setPosition(10,0,10)
      .build();
    scene.add(cuboblanco);
    objects.push(cuboblanco);
    var pared1 = new GeometryBuilder()
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
    };
  }