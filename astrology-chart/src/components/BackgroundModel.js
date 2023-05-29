import React from 'react';
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  return <primitive object={gltf.scene} dispose={null} />;
};

const BackgroundModel = ({ backgroundModelPath }) => {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.5} />
        <Model url={backgroundModelPath} />
      </Canvas>
    </div>
  );
};

export default BackgroundModel;
