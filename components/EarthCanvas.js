import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { extend } from '@react-three/fiber';
import * as THREE from "three";

import PlaneBufferGeometry from 'three'

extend({ PlaneBufferGeometry });

const Box = () => {
  const [texture, setTexture] = useState(null);

  const onLoadTexture = (texture) => {
    setTexture(texture);
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set(0, 0);
    texture.repeat.set(1, 1);
  };

  return (
    <mesh>
      <boxBufferGeometry />
      {texture && (
        <meshStandardMaterial attach="material" map={texture} />
      )}
      <mesh />
      <mesh position={[0, 0, -5]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshStandardMaterial
          attach="material"
          map={texture}
          side={THREE.DoubleSide}
        />
      </mesh>
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
    
  );
};

export default EarthCanvas;