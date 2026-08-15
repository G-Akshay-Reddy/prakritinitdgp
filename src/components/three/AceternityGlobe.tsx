import { Canvas, useFrame, useLoader, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AdditiveBlending,
  BackSide,
  Color,
  Group,
  MathUtils,
  Mesh,
  SRGBColorSpace,
  TextureLoader,
  Vector3
} from "three";

const textureUrls = [
  "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg",
  "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png",
  "https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-water.png"
];

const markers = [{ label: "NIT Durgapur", lat: 23.5204, lng: 87.3119 }];

function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Marker({ label, lat, lng, onActive }: (typeof markers)[number] & { onActive: (label: string | null) => void }) {
  const groupRef = useRef<Group>(null);
  const ringRef = useRef<Mesh>(null);
  const position = useMemo(() => latLngToVector3(lat, lng, 1.47), [lat, lng]);

  useFrame(({ camera, clock }) => {
    if (groupRef.current) groupRef.current.lookAt(camera.position);
    if (ringRef.current) {
      const pulse = 1 + Math.sin(clock.getElapsedTime() * 2.3) * 0.16;
      ringRef.current.scale.setScalar(pulse);
    }
  });

  const activate = (event: ThreeEvent<MouseEvent>, active: boolean) => {
    event.stopPropagation();
    onActive(active ? label : null);
  };

  return (
    <group ref={groupRef} position={position}>
      <mesh
        onClick={(event) => activate(event, true)}
        onPointerOut={(event) => activate(event, false)}
        onPointerOver={(event) => activate(event, true)}
      >
        <sphereGeometry args={[0.036, 24, 24]} />
        <meshBasicMaterial color="#d9ff73" transparent opacity={0.98} />
      </mesh>
      <mesh ref={ringRef} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.07, 0.082, 32]} />
        <meshBasicMaterial color="#b7f34a" transparent opacity={0.82} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function GlobeModel({ onMarkerActive }: { onMarkerActive: (label: string | null) => void }) {
  const globeRef = useRef<Group>(null);
  const [earthMap, bumpMap, specularMap] = useLoader(TextureLoader, textureUrls);

  useEffect(() => {
    earthMap.colorSpace = SRGBColorSpace;
  }, [earthMap]);

  useFrame(({ clock, pointer }, delta) => {
    if (!globeRef.current) return;
    globeRef.current.rotation.y += delta * 0.12;
    globeRef.current.rotation.x = MathUtils.damp(globeRef.current.rotation.x, pointer.y * 0.08 - 0.18, 3, delta);
    globeRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.55) * 0.035;
  });

  return (
    <group ref={globeRef} rotation={[-0.18, -1.82, 0]}>
      <mesh>
        <sphereGeometry args={[1.42, 96, 96]} />
        <meshPhongMaterial
          map={earthMap}
          bumpMap={bumpMap}
          bumpScale={0.085}
          specularMap={specularMap}
          specular={new Color("#4b6470")}
          shininess={16}
        />
      </mesh>
      <mesh scale={1.035}>
        <sphereGeometry args={[1.42, 80, 80]} />
        <meshBasicMaterial color="#63dfff" transparent opacity={0.12} side={BackSide} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh scale={1.095}>
        <sphereGeometry args={[1.42, 80, 80]} />
        <meshBasicMaterial color="#83f5a7" transparent opacity={0.045} side={BackSide} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
      {markers.map((marker) => (
        <Marker key={marker.label} {...marker} onActive={onMarkerActive} />
      ))}
    </group>
  );
}

function GlobeControls() {
  const controlsRef = useRef<OrbitControls | null>(null);
  const { camera, gl } = useThree();

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.rotateSpeed = 0.42;
    controlsRef.current = controls;

    return () => controls.dispose();
  }, [camera, gl]);

  useFrame(() => controlsRef.current?.update());
  return null;
}

function Scene({ onMarkerActive }: { onMarkerActive: (label: string | null) => void }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-3.8, 2.8, 4.5]} intensity={2.5} color="#effff5" />
      <pointLight position={[2.8, -1.4, 3]} intensity={1.5} color="#57d3ff" />
      <pointLight position={[-2, 1.2, -2]} intensity={0.65} color="#b5ef62" />
      <GlobeModel onMarkerActive={onMarkerActive} />
      <GlobeControls />
    </>
  );
}

export function AceternityGlobe() {
  const [activeMarker, setActiveMarker] = useState<string | null>(null);

  return (
    <div className="aceternity-globe relative h-full w-full" aria-label="Interactive 3D Earth globe">
      <div className="aceternity-globe__halo" aria-hidden="true" />
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 4.9], fov: 38, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Scene onMarkerActive={setActiveMarker} />
      </Canvas>
      <p className={`aceternity-globe__label ${activeMarker ? "is-visible" : ""}`} aria-live="polite">
        {activeMarker ?? ""}
      </p>
    </div>
  );
}
