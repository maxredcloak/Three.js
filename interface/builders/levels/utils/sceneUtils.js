import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import {
    OrbitControls
} from "https://cdn.jsdelivr.net/npm/three@0.117.1/examples/jsm/controls/OrbitControls.js";

export function createScene() {
  var tmps = new THREE.Scene();
  var light = new THREE.PointLight(0xffffff);
  light.position.set(-100, 200, 100);
  tmps.add(light);
  return tmps;
}