import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import styled from 'styled-components';

const StyledModelContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const isMobileDevice = () => {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

const ThreeDModel = () => {
  const mount = useRef(null);

  useEffect(() => {
    const models = ['sun_ring.glb', 'moon_ring.glb', 'Earth_ring.glb', 'Astrological_houses.glb', 'Jupiter_ring.glb', 'Uranus_ring.glb', 'Venus_ring.glb', 'Zodiac_Archetypes.glb', 'Zodiac_costellation.glb', 'Zodiac_signs.glb'];
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const loader = new GLTFLoader();

    let camera;
    if(isMobileDevice()){
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 15;
    }else{
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
    }

    const controls = new OrbitControls(camera, renderer.domElement);

    const loadedModels = [];

    models.forEach((model) => {
      loader.load(model, (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.position.set(0, 0, 0);
            child.rotation.x = Math.PI / 2;
            child.scale.set(0.5, 0.5, 0.5);  // scale down model
          }
        });
        scene.add(gltf.scene);
        loadedModels.push(gltf.scene);
        controls.target.set(0, 0, 0); // Update controls target
      });
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update(); // Required if controls.enableDamping or controls.autoRotate are set to true

      loadedModels.forEach((model) => {
        // create a circular motion
        const radius = 5; // radius of circular motion, change as needed
        const speed = 0.01; // speed of circular motion, change as needed
        const clock = new THREE.Clock();
        const elapsedTime = clock.getElapsedTime();
        model.position.x = radius * Math.cos(elapsedTime * speed);
        model.position.z = radius * Math.sin(elapsedTime * speed);
      });
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if(isMobileDevice()){
        camera.fov = 60;
        camera.position.z = 15;
      }else{
        camera.fov = 75;
        camera.position.z = 10;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    mount.current.appendChild(renderer.domElement);
    animate();

    // Clean up on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      while (mount.current.firstChild) {
        mount.current.removeChild(mount.current.lastChild);
      }
    };
  }, []);

  return <StyledModelContainer ref={mount} />;
};

export default ThreeDModel;
