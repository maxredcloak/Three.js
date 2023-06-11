import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export default class InteractiveObject{
  constructor(mesh){
    this.mesh = mesh;
  }
  render(){
    this.mesh.updateMatrixWorld()
  }
}