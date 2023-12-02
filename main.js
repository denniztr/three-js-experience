import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 10);

// Создаем рендерер
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // Черный фон
document.body.appendChild(renderer.domElement);

// Добавляем свет
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Создаем яркий свет
const brightLight = new THREE.PointLight(0xffffff, 2);
brightLight.position.set(0, 10, 0);
scene.add(brightLight);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.1;


const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
const groundTexture = new THREE.TextureLoader().load('./static/textures/rocky_trail_02_diff_4k.png');
const groundMaterial = new THREE.MeshStandardMaterial({ map: groundTexture, roughness: 0.8 });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = -Math.PI / 2;
ground.receiveShadow = true;
scene.add(ground);


function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

animate();