import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
export default class GeometryBuilder{
  constructor(){
    this.size = {x:5,y:5,z:5};
    this.position = {x:0,y:0,z:0};
    this.color = 0xffffff;
  }
  setSize(x,y,z){
    this.size = {x:x,y:y,z:z};
    return this;
  }
  setPosition(x,y,z){
    this.position = {x:x,y:y,z:z};
    return this;
  }
  setColor(color){
    this.color = color;
    return this;
  }
  build(){
    var geometry = new THREE.BoxGeometry(this.size.x,this.size.y,this.size.z);
    var material = new THREE.MeshBasicMaterial({ color: this.color });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = this.position.x;
    mesh.position.y = this.position.y;
    mesh.position.z = this.position.z;
    return mesh;
  }
}