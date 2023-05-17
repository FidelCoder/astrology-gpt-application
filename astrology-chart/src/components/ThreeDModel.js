import React, { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';
import styled from 'styled-components';

const StyledModelContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const ThreeDModel = () => {
  const mount = useRef(null);

  useEffect(() => {
    const models = ['sun_ring.glb', 'moon_ring.glb', 'Earth_ring.glb', 'Astrological_houses.glb', 'Jupiter_ring.glb', 'Uranus_ring.glb', 'Venus_ring.glb', 'Zodiac_Archetypes.glb', 'Zodiac_costellation.glb', 'Zodiac_signs.glb'];
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const loader = new GLTFLoader();

    let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const controls = new OrbitControls(camera, renderer.domElement);

    models.forEach((model) => {
      loader.load(model, (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.position.set(0, 0, 0);
          }
        });
        scene.add(gltf.scene);
        controls.target.set(0, 0, 0); // Update controls target
      });
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      controls.update(); // Required if controls.enableDamping or controls.autoRotate are set to true
    };

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
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
