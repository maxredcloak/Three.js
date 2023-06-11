import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';

function interactivePosition(position,angle){
  var upVector = new THREE.Vector3(0, 1, 0);
  var tmp = new THREE.Vector3();
  tmp.set(0, 0, 10)
    .applyAxisAngle(upVector, angle);
  tmp.x = position.x - tmp.x;
  tmp.z = position.z - tmp.z;
  return tmp;
}
export function getInteractives(position,angle,interactiveObjs){
  var position = interactivePosition(position,angle);
  var total = undefined;
  interactiveObjs.forEach(io => {
    let e = io.mesh;
    let objSize = getSize(e)
    if (position.x >= e.position.x - objSize.x &&
      position.x <= e.position.x + objSize.x &&
      position.y >= e.position.y - objSize.y &&
      position.y <= e.position.y + objSize.y &&
      position.z >= e.position.z - objSize.z &&
      position.z <= e.position.z + objSize.z)
    {
      total= e;
      return;
    }
  })
 return total;
}
export function getInteractions(position, angle,objects){
  var position = interactivePosition(position,angle);
  var total = undefined;
  objects.forEach(e => {
    let objSize = getSize(e)
    if (position.x >= e.position.x - objSize.x &&
      position.x <= e.position.x + objSize.x &&
      position.y >= e.position.y - objSize.y &&
      position.y <= e.position.y + objSize.y &&
      position.z >= e.position.z - objSize.z &&
      position.z <= e.position.z + objSize.z)
    {
      total= e;
      return;
    }
  })
 return total;
}
  function getSize(mesh){
    return {
      x: mesh.geometry.parameters.width,
      y: mesh.geometry.parameters.height,
      z: mesh.geometry.parameters.depth
    }
  }