import React, { useRef, useState, Suspense} from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei';
import {proxy, useProxy} from "valtio";

const state = proxy({
    current: null,
    items: {
      laces: "#ffffff",
      mesh: "#ffffff",
      caps: "#ffffff",
      inner: "#ffffff",
      sole: "#ffffff",
      stripes: "#ffffff",
      band: "#ffffff",
      patch: "#ffffff",
    },
  });

function Model(props) {
    const group = useRef()
    const snap = useProxy(state);
    const { nodes, materials } = useGLTF('shoecompress.glb')
    return (
        <group
        ref={ref}
        dispose={null}
        onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (state.current = null)}
        onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}>
        <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={snap.items.laces} />
        <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={snap.items.mesh} />
        <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={snap.items.caps} />
        <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={snap.items.inner} />
        <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={snap.items.sole} />
        <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={snap.items.stripes} />
        <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={snap.items.band} />
        <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={snap.items.patch} />
      </group>
    )
  }

export default function Shoe() {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
                <Model />
            </Suspense>
        </Canvas>
    )
}