import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export default class Growbox{
  constructor(mesh){
    this.mesh = mesh;
    this.speed = new THREE.Vector3(0,0,0);
    this.upVector = new THREE.Vector3(0, 1, 0);
  }
  render(){
    this.mesh.updateMatrixWorld()
  }
}