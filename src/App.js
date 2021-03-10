import React, { useRef } from 'react';
import "./App.scss"

import {Canvas, useFrame } from "react-three-fiber";


const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach='geometry' args={[1,1,1]}/>
      <meshStandardMaterial attach='material' color='lightblue' />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas colorManagement camera={{position: [-5,2,10], fov: 60}}>
        <ambientLight intensity={0.3} />
        <Box/>
      </Canvas>
    </>
  )
}

export default App;
