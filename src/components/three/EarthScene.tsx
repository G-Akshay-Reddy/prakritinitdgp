import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  Color,
  InstancedMesh,
  Line as ThreeLine,
  LineBasicMaterial,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  Points,
  Vector3
} from "three";

function Earth() {
  const earthRef = useRef<Mesh>(null);
  const haloRef = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime();
    if (earthRef.current) {
      earthRef.current.rotation.y = time * 0.16 + pointer.x * 0.18;
      earthRef.current.rotation.x = pointer.y * 0.1;
    }
    if (haloRef.current) {
      haloRef.current.rotation.z = -time * 0.06;
      haloRef.current.scale.setScalar(1 + Math.sin(time * 1.2) * 0.018);
    }
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.44, 96, 96]} />
        <meshStandardMaterial color="#073D20" roughness={0.68} metalness={0.14} emissive="#062A17" emissiveIntensity={0.75} />
      </mesh>
      <mesh rotation={[0, 0.38, 0]}>
        <sphereGeometry args={[1.455, 32, 16]} />
        <meshBasicMaterial color="#A3E635" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh ref={haloRef}>
        <sphereGeometry args={[1.58, 64, 64]} />
        <meshBasicMaterial color="#22C55E" transparent opacity={0.08} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.78, 64, 64]} />
        <meshBasicMaterial color="#38BDF8" transparent opacity={0.035} blending={AdditiveBlending} depthWrite={false} />
      </mesh>
    </group>
  );
}

function LeafField() {
  const meshRef = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);
  const leaves = useMemo(
    () =>
      Array.from({ length: 64 }, (_, index) => ({
        radius: MathUtils.randFloat(2.15, 4.4),
        angle: (index / 64) * Math.PI * 2 + MathUtils.randFloat(-0.2, 0.2),
        y: MathUtils.randFloat(-1.55, 1.65),
        speed: MathUtils.randFloat(0.08, 0.18),
        scale: MathUtils.randFloat(0.035, 0.095),
        tilt: MathUtils.randFloat(-0.7, 0.7)
      })),
    []
  );

  useFrame(({ clock, pointer }) => {
    const time = clock.getElapsedTime();
    leaves.forEach((leaf, index) => {
      const angle = leaf.angle + time * leaf.speed;
      dummy.position.set(
        Math.cos(angle) * leaf.radius + pointer.x * 0.28,
        leaf.y + Math.sin(time * 0.8 + index) * 0.12,
        Math.sin(angle) * leaf.radius
      );
      dummy.rotation.set(leaf.tilt + time * 0.2, angle, Math.sin(time + index) * 0.45);
      dummy.scale.set(leaf.scale * 0.55, leaf.scale * 1.65, leaf.scale);
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(index, dummy.matrix);
    });
    if (meshRef.current) meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, leaves.length]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <meshStandardMaterial color="#A3E635" roughness={0.92} metalness={0.02} transparent opacity={0.72} side={2} />
    </instancedMesh>
  );
}

function EnvironmentalParticles() {
  const pointsRef = useRef<Points>(null);
  const geometry = useMemo(() => {
    const positions = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i += 1) {
      const radius = MathUtils.randFloat(2.4, 5.2);
      const theta = MathUtils.randFloat(0, Math.PI * 2);
      const phi = MathUtils.randFloat(-Math.PI / 2, Math.PI / 2);
      positions[i * 3] = Math.cos(theta) * Math.cos(phi) * radius;
      positions[i * 3 + 1] = Math.sin(phi) * radius * 0.72;
      positions[i * 3 + 2] = Math.sin(theta) * Math.cos(phi) * radius;
    }
    const buffer = new BufferGeometry();
    buffer.setAttribute("position", new BufferAttribute(positions, 3));
    return buffer;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.025 + pointer.x * 0.05;
    pointsRef.current.rotation.x = pointer.y * 0.03;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial color="#A3E635" size={0.018} transparent opacity={0.62} blending={AdditiveBlending} depthWrite={false} />
    </points>
  );
}

function OrbitLines() {
  const lines = useMemo(() => {
    return Array.from({ length: 4 }, (_, index) => {
      const points: Vector3[] = [];
      for (let i = 0; i <= 120; i += 1) {
        const theta = (i / 120) * Math.PI * 2;
        const radius = 1.88 + index * 0.11;
        points.push(new Vector3(Math.cos(theta) * radius, Math.sin(theta) * 0.12, Math.sin(theta) * radius));
      }
      const geometry = new BufferGeometry().setFromPoints(points);
      const material = new LineBasicMaterial({
        color: new Color(index % 2 ? "#38BDF8" : "#A3E635"),
        transparent: true,
        opacity: 0.12
      });
      const line = new ThreeLine(geometry, material);
      line.rotation.set(MathUtils.degToRad(62 + index * 10), 0, MathUtils.degToRad(index * 31));
      return line;
    });
  }, []);

  return (
    <group>
      {lines.map((line, index) => (
        <primitive key={index} object={line} />
      ))}
    </group>
  );
}

function LightRays() {
  const rayRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (rayRef.current) {
      rayRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.24) * 0.06;
      (rayRef.current.material as MeshBasicMaterial).opacity = 0.055 + Math.sin(clock.getElapsedTime() * 0.8) * 0.018;
    }
  });

  return (
    <mesh ref={rayRef} position={[-1.6, 1.8, -1.1]} rotation={[MathUtils.degToRad(115), 0, MathUtils.degToRad(-24)]}>
      <coneGeometry args={[1.2, 4.4, 32, 1, true]} />
      <meshBasicMaterial color="#A3E635" transparent opacity={0.06} blending={AdditiveBlending} depthWrite={false} side={2} />
    </mesh>
  );
}

function ScrollCameraRig() {
  const { camera } = useThree();

  useFrame(() => {
    const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    const progress = MathUtils.clamp(window.scrollY / maxScroll, 0, 1);
    camera.position.x = MathUtils.lerp(camera.position.x, progress * 0.35, 0.04);
    camera.position.y = MathUtils.lerp(camera.position.y, 0.12 - progress * 0.35, 0.04);
    camera.position.z = MathUtils.lerp(camera.position.z, 5 - progress * 0.72, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050505"]} />
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 3, 5]} intensity={2.2} color="#E7F7E8" />
      <pointLight position={[-2.5, 1.7, 2.5]} intensity={2.2} color="#22C55E" />
      <pointLight position={[2.2, -1.3, -2.2]} intensity={1.2} color="#38BDF8" />
      <ScrollCameraRig />
      <LightRays />
      <group position={[0, -0.08, 0]}>
        <Earth />
        <OrbitLines />
        <LeafField />
        <EnvironmentalParticles />
      </group>
    </>
  );
}

export function EarthScene() {
  return (
    <div className="pointer-events-auto absolute inset-0 hero-mask" aria-hidden="true">
      <Canvas
        dpr={[1, 1.55]}
        camera={{ position: [0, 0.1, 5], fov: 42, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
