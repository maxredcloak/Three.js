import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';

export default function applyPhysics(main,objs,iobjs){
  let mainSize = getSize(main.mesh);
  let mainNext = main.getNextPosition();
  objs.forEach(e=>{
    let objSize = getSize(e)
    if(mainNext.x >= e.position.x - objSize.x
      && mainNext.x <= e.position.x + objSize.x
      && mainNext.y >= e.position.y - objSize.y
      && mainNext.y <= e.position.y + objSize.y
      && mainNext.z >= e.position.z - objSize.z
      && mainNext.z <= e.position.z + objSize.z)
    {
      main.speed = new THREE.Vector3(0,0,0);
    }
  });
  iobjs.forEach(io => {
    let e = io.mesh;
    let objSize = getSize(e)
    if (mainNext.x >= e.position.x - objSize.x &&
      mainNext.x <= e.position.x + objSize.x &&
      mainNext.y >= e.position.y - objSize.y &&
      mainNext.y <= e.position.y + objSize.y &&
      mainNext.z >= e.position.z - objSize.z &&
      mainNext.z <= e.position.z + objSize.z)
    {
      main.speed = new THREE.Vector3(0, 0, 0);
    }
  });
}
function getSize(mesh){
  return {
    x: mesh.geometry.parameters.width,
    y: mesh.geometry.parameters.height,
    z: mesh.geometry.parameters.depth
  }
}