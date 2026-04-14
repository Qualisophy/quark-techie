import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface SmokeBackgroundProps {
  color?: number;
  opacity?: number;
}

export const SmokeBackground: React.FC<SmokeBackgroundProps> = ({
  color = 0x9ca3af, // Gris base
  opacity = 0.3,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(-1, 0, 1);
    scene.add(light);

    const smokeParticles: THREE.Mesh[] = [];
    const clock = new THREE.Clock();

    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = "";

    textureLoader.load(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png",
      (texture) => {
        const smokeGeo = new THREE.PlaneGeometry(300, 300);
        const smokeMaterial = new THREE.MeshLambertMaterial({
          color: color,
          map: texture,
          transparent: true,
          opacity: opacity,
          depthWrite: false,
        });

        for (let p = 0; p < 150; p++) {
          const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
          particle.position.set(
            Math.random() * window.innerWidth - window.innerWidth / 2,
            Math.random() * window.innerHeight - window.innerHeight / 2,
            Math.random() * 1000 - 100,
          );
          particle.rotation.z = Math.random() * 360;
          scene.add(particle);
          smokeParticles.push(particle);
        }
      },
    );

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      smokeParticles.forEach((particle) => {
        // Rotación más rápida
        particle.rotation.z += delta * 0.3;

        // FÍSICA NUEVA: Ascensión continua simulando humo real
        particle.position.y += delta * 40;

        // Si el humo sale por arriba, lo reaparecemos por abajo para que el bucle sea infinito
        if (particle.position.y > window.innerHeight) {
          particle.position.y = -window.innerHeight;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.clear();
    };
  }, [color, opacity]);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-80 mix-blend-screen"
    />
  );
};
