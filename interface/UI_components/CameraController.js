import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import {OrbitControls} from "https://cdn.jsdelivr.net/npm/three@0.117.1/examples/jsm/controls/OrbitControls.js";

export default class CameraController{
  constructor(width,height,renderer){
    this.camera = this.createCamera(width,height);
    this.controller = this.createController(this.camera,renderer);
  }
  createCamera(width,height) {
    var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
    camera.position.z = 180;
    camera.position.y = 50;
    return camera;
  }
  createController(camera, renderer) {
    var tmpc = new OrbitControls(camera, renderer.domElement);
    tmpc.maxDistance = 100;
    tmpc.minDistance = 150;
    tmpc.maxPolarAngle = Math.PI;
    tmpc.minPolarAngle = 0;
    tmpc.autoRotate = false;
    tmpc.autoRotateSpeed = 0;
    tmpc.rotateSpeed = 0.4;
    tmpc.enableDamping = false;
    tmpc.dampingFactor = 0.1;
    tmpc.enableZoom = false;
    tmpc.enablePan = false;
    tmpc.minAzimuthAngle = -Math.PI;
    tmpc.maxAzimuthAngle = Math.PI;
    return tmpc;
  }
  getAngle = () => this.controller.getAzimuthalAngle();
  alignCamera(centerPosition){
    this.camera.position.sub(this.controller.target)
    this.controller.target.copy(centerPosition)
    this.camera.position.add(centerPosition);
  }
}