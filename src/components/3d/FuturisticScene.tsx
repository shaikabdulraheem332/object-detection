'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FuturisticScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Particle Stars Constellation System
    const particleCount = 550;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color('#00f3ff');
    const purpleColor = new THREE.Color('#9d4edd');
    const pinkColor = new THREE.Color('#ff007f');

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

      const rVal = Math.random();
      const mixedColor = rVal > 0.6 ? cyanColor : rVal > 0.3 ? purpleColor : pinkColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.3,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, particleMaterial);
    scene.add(particleSystem);

    // 3D Torus Knot Geometry (Futuristic Cyber Ring)
    const torusKnotGeo = new THREE.TorusKnotGeometry(6, 1.2, 120, 16);
    const torusKnotMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const torusKnotMesh = new THREE.Mesh(torusKnotGeo, torusKnotMat);
    torusKnotMesh.position.set(0, 0, -8);
    scene.add(torusKnotMesh);

    // Inner Glowing 3D Icosahedron Core
    const icoGeometry = new THREE.IcosahedronGeometry(4, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoMaterial);
    icoMesh.position.set(0, 0, -8);
    scene.add(icoMesh);

    // Floating Cyber Cubes
    const cubeGroup = new THREE.Group();
    const cubeGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cubeMat = new THREE.MeshBasicMaterial({
      color: 0x00f3ff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });

    for (let c = 0; c < 12; c++) {
      const cube = new THREE.Mesh(cubeGeo, cubeMat);
      cube.position.set(
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20
      );
      cube.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      cubeGroup.add(cube);
    }
    scene.add(cubeGroup);

    // Mouse interactive target
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse parallax
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 4;
      camera.position.y = -targetY * 4;
      camera.lookAt(scene.position);

      // Rotate 3D meshes
      torusKnotMesh.rotation.x = elapsedTime * 0.15;
      torusKnotMesh.rotation.y = elapsedTime * 0.2;

      icoMesh.rotation.x = -elapsedTime * 0.25;
      icoMesh.rotation.y = -elapsedTime * 0.3;

      cubeGroup.rotation.y = elapsedTime * 0.08;
      cubeGroup.rotation.x = Math.sin(elapsedTime * 0.05) * 0.15;

      // Particle subtle wave float
      particleSystem.rotation.y = elapsedTime * 0.03;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      particleMaterial.dispose();
      torusKnotGeo.dispose();
      torusKnotMat.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      cubeGeo.dispose();
      cubeMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
}
