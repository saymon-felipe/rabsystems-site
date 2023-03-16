<template>
    <div class="globe-component"></div>
</template>
<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from 'tween.js';

export default {
    name: "globeComponent",
    mounted: function () {
        let container;

        let camera, scene, renderer;
        let geometry, material, mesh;

        let targetRotation = 0;
        let targetRotationOnMouseDown = 0;

        let mouseX = 0;
        let mouseXOnMouseDown = 0;

        let windowHalfX = window.innerWidth / 2;

        init();
        let controls = new OrbitControls(camera, renderer.domElement);
        controls.rotateSpeed = 0.1;
        controls.enableZoom = false;

        animate();

        function init() {
            container = document.createElement('div');
            container.classList.add("globe-container");
            let globeContainer = document.querySelector(".globe-component");
            globeContainer.appendChild(container);

            camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
            camera.position.z = 400;

            scene = new THREE.Scene();

            geometry = new THREE.SphereGeometry(200, 64, 64);

            material = new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(require('@/assets/img/earth-background.png'))
            });

            mesh = new THREE.Mesh(geometry, material);

            //const size = (window.innerHeight / 2) / (window.innerWidth / 2) * 1.7;
            //mesh.scale.set(1/size, 1/size, 1/size);
            scene.add(mesh);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(0x000000, 0); // Define o fundo como transparente
            container.appendChild(renderer.domElement);

            document.addEventListener('mousedown', onDocumentMouseDown, false);
            document.addEventListener('touchstart', onDocumentTouchStart, false);
            document.addEventListener('touchmove', onDocumentTouchMove, false);
            document.addEventListener('touchend', onDocumentTouchEnd, false);

            window.addEventListener('resize', onWindowResize, false);
        }

        function onDocumentTouchStart(event) {
            if (event.target != "canvas") {
                return;
            }

            if (event.touches.length === 1) {
                event.preventDefault();

                mouseXOnMouseDown = event.touches[0].pageX - windowHalfX;
                targetRotationOnMouseDown = targetRotation;
            }
        }

        function onDocumentTouchMove(event) {
            if (event.target != "canvas") {
                return;
            }

            if (event.touches.length === 1) {
                event.preventDefault();

                mouseX = event.touches[0].pageX - windowHalfX;
                targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.05;
            }
        }

        function onDocumentTouchEnd() {
            document.removeEventListener('touchmove', onDocumentTouchMove);
            document.removeEventListener('touchend', onDocumentTouchEnd);
        }

        function onDocumentMouseOut() {
            document.removeEventListener('mousemove', onDocumentMouseMove, false);
            document.removeEventListener('mouseup', onDocumentMouseUp, false);
            document.removeEventListener('mouseout', onDocumentMouseOut, false);
        }

        function onWindowResize() {
            // Atualiza o tamanho da cena
            const width = window.innerWidth;
            const height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        
            // Ajusta o tamanho da geometria do planeta
            //const size = (window.innerHeight / 2) / (window.innerWidth / 2) * 1.7;
            //mesh.scale.set(1/size, 1/size, 1/size);
        }

        function onDocumentMouseDown(event) {
            if (event.target != "canvas") {
                return;
            }
            event.preventDefault();

            document.addEventListener('mousemove', onDocumentMouseMove, false);
            document.addEventListener('mouseup', onDocumentMouseUp, false);
            document.addEventListener('mouseout', onDocumentMouseOut, false);

            mouseXOnMouseDown = event.clientX - windowHalfX;
            targetRotationOnMouseDown = targetRotation;
        }

        function onDocumentMouseMove(event) {
            if (event.target != "canvas") {
                return;
            }

            mouseX = event.clientX - windowHalfX;

            targetRotation = targetRotationOnMouseDown + (mouseX - mouseXOnMouseDown) * 0.02;
        }

        function onDocumentMouseUp() {
            document.removeEventListener('mousemove', onDocumentMouseMove, false);
            document.removeEventListener('mouseup', onDocumentMouseUp, false);
            document.removeEventListener('mouseout', onDocumentMouseOut, false);
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            mesh.rotation.y += 0.005;
            TWEEN.update();
            renderer.render(scene, camera);
        }
    }
}
</script>
<style scoped>
canvas {
    display: block;
    background-color: transparent;
}

.globe-component {
    position: absolute !important;
    top: 4rem;
    right: calc(-45px - 14vw);
}

.globe-component::before {
    content: "";
    width: 100vh;
    height: 100vh;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    margin: auto;
    background: radial-gradient(circle, 
        #870CCF 15%, 
        #03C7FE 45%, 
        rgba(0, 0, 0, 0) 70%
    );
    transform: skew(30deg) scale(1.5);
    border-radius: 50%;
    background-clip: padding-box;
    opacity: 0.3;
}


</style>