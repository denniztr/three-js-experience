import * as THREE from 'three';


export function createWalls(scene) {
  // Создаем геометрию и материал для стен
  const wallGeometry = new THREE.BoxGeometry(5, 2, 0.1);
  const wallMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });

  // Создаем стены
  const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
  wall1.position.set(0, 0, -2.5);
  scene.add(wall1);

  const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
  wall2.position.set(0, 0, 2.5);
  scene.add(wall2);

  const wall3 = new THREE.Mesh(wallGeometry, wallMaterial);
  wall3.position.set(2.5, 0, 0);
  wall3.rotation.y = Math.PI / 2;
  scene.add(wall3);

  const wall4 = new THREE.Mesh(wallGeometry, wallMaterial);
  wall4.position.set(-2.5, 0, 0);
  wall4.rotation.y = Math.PI / 2;
  scene.add(wall4);

}
