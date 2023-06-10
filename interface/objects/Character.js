import * as THREE from 'https://unpkg.com/three/build/three.module.js';

export default class Character{
  constructor(mesh){
    this.mesh = mesh;
    this.speed = new THREE.Vector3(0,0,0);
    this.upVector = new THREE.Vector3(0, 1, 0);
  }
  setSpeed(x,y,z,angle){
    this.speed = new THREE.Vector3();
    this.speed
      .set(x, y, -z)
      .applyAxisAngle(this.upVector, angle)
  }
  getNextPosition(){
    let next = new THREE.Vector3().copy(this.mesh.position);
    next.addScaledVector(this.speed,1);
    return next;
  }
  render(){
    this.mesh.position.addScaledVector(this.speed,1)
    this.mesh.updateMatrixWorld()
  }
}