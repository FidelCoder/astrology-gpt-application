import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BirthDetailsForm from './FormInput';
import ThreeDModel from './ThreeDModel';

const MainContent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Astrology-GPT</h1>
          <p>Discover the secrets of your natal chart...</p>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          {/* Here you can include your form component when it's ready */}
          <p>Form goes here...</p>
          <BirthDetailsForm />
        </Col>
        <Col md={6}>
          {/* Here you can include your 3D model component when it's ready */}
          <p>3D model goes here...</p>
          <ThreeDModel/>
        </Col>
      </Row>
    </Container>
  );
}

export default MainContent;




/////////////////////////////////////////////////////////////////////////
// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';
// import styled from 'styled-components';

// const StyledModelContainer = styled.div`
//   width: 50vw;
//   height: 50vh;
//   max-width: 600px;
//   max-height: 600px;
// `;

// const ThreeDModel = () => {
//   const mount = useRef(null);

//   useEffect(() => {
//     const width = mount.current.clientWidth;
//     const height = mount.current.clientHeight;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();

//     const geometry = new THREE.SphereGeometry(1, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const sphere = new THREE.Mesh(geometry, material);

//     scene.add(sphere);

//     camera.position.z = 5;

//     const animate = function () {
//       requestAnimationFrame(animate);
//       sphere.rotation.x += 0.01;
//       sphere.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     renderer.setSize(width, height);
//     mount.current.appendChild(renderer.domElement);

//     animate();

//     // Clean up on unmount
//     return () => {
//       mount.current.removeChild(renderer.domElement);
//       scene.remove(sphere);
//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <StyledModelContainer ref={mount} />
//   );
// };

// export default ThreeDModel;
