import React, { useState, useRef, Suspense, useMemo } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, Html, Float, Environment, Edges, Line } from "@react-three/drei";
import CanvasLoader from "../loader";

// 1. COMPONENT KHỐI LẬP PHƯƠNG KÍNH
interface CubeProps {
  position: [number, number, number];
  scale?: number;
  isCenter?: boolean;
}

const Cube = ({ position, scale = 1, isCenter = false }: CubeProps) => {
  const cubeRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (cubeRef.current) {
      // Dùng delta để tốc độ xoay luôn đồng đều trên mọi màn hình (60hz hay 144hz)
      cubeRef.current.rotation.x += delta * 0.2;
      cubeRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={isCenter ? 2 : 3} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={cubeRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />

        {/* Lớp kính bên ngoài */}
        <meshPhysicalMaterial
          color="#dfd9ff"
          emissive="#915EFF"
          emissiveIntensity={0.2}
          transmission={0.9}
          opacity={1}
          transparent={true}
          roughness={0.1}
          metalness={0.5}
        />
        <Edges scale={1.05} threshold={15} color="#ffffff" />

        {/* Khối neon lồng bên trong */}
        <mesh scale={0.5}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#b678ff" wireframe />
        </mesh>
      </mesh>
    </Float>
  );
};

// 2. COMPONENT THẺ THÔNG TIN (Đã tối ưu CSS)
interface InfoCardProps {
  position: [number, number, number];
  rotation: [number, number, number];
  title: string;
  desc: string;
  icon?: string;
}

const InfoCard = ({ position, rotation, title, desc, icon }: InfoCardProps) => {
  return (
    <Float speed={2} floatIntensity={0.3} rotationIntensity={0.1}>
      {/* Tính toán render 3D HTML nhẹ hơn */}
      <Html transform position={position} rotation={rotation} scale={0.70} zIndexRange={[100, 0]}>
        {/* TỐI ƯU: Đã gỡ bỏ backdrop-blur-md và shadow nặng, thay bằng màu nền solid opacity cao */}
        <div className="bg-[#0e0820]/95 border border-[#915EFF]/60 p-4 rounded-xl text-white w-[200px] flex flex-col items-center text-center">
          {icon && <div className="mb-3 text-4xl">{icon}</div>}
          <h3 className="text-white font-bold text-[13px] mb-2 uppercase tracking-wider">{title}</h3>
          <p className="text-[#9ca3af] text-[12px] leading-relaxed">{desc}</p>
        </div>
      </Html>
    </Float>
  );
};

// 3. CANVAS CHÍNH
const TechCubesCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // Đưa tọa độ vào useMemo để tránh khai báo lại mỗi lần render
  const coords = useMemo(() => ({
    center: [0, 1.5, 1] as [number, number, number],
    cube1: [-3, 3.5, 0] as [number, number, number],
    cube2: [3, 4, -1] as [number, number, number],
    cube3: [-3.5, -0.5, 0] as [number, number, number],
    cube4: [3.5, 0, 1] as [number, number, number],
  }), []);

  return (
    <Canvas
      // TỐI ƯU 1: Xóa frameloop="demand" để khối tự quay mượt mà, không bị khựng
      shadows
      // TỐI ƯU 2: Giới hạn dpr tối đa là 1.5 để cứu GPU trên màn hình Retina/4K
      dpr={[1, 1.5]}
      camera={{ position: [2, 0, isMobile ? 18 : 14], fov: 45 }}
      gl={{ preserveDrawingBuffer: true, antialias: false }} // Tắt antialias mặc định vì đã có độ phân giải bù lại
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 3}
          autoRotate={false}
        />

        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#915EFF" />

        <group position={[isMobile ? 0 : 4, isMobile ? 0 : -0.2, 0]}>
          {/* ĐƯỜNG KẺ NỐI */}
          <Line points={[coords.center, coords.cube1]} color="#b678ff" lineWidth={1} opacity={0.4} transparent />
          <Line points={[coords.center, coords.cube2]} color="#b678ff" lineWidth={1} opacity={0.4} transparent />
          <Line points={[coords.center, coords.cube3]} color="#b678ff" lineWidth={1} opacity={0.4} transparent />
          <Line points={[coords.center, coords.cube4]} color="#b678ff" lineWidth={1} opacity={0.4} transparent />

          {/* CÁC KHỐI LẬP PHƯƠNG */}
          <Cube position={coords.center} scale={isMobile ? 1.2 : 1.6} isCenter={true} />
          <Cube position={coords.cube1} scale={isMobile ? 0.6 : 0.6} />
          <Cube position={coords.cube2} scale={isMobile ? 0.4 : 0.55} />
          <Cube position={coords.cube3} scale={isMobile ? 0.5 : 0.65} />
          <Cube position={coords.cube4} scale={isMobile ? 0.5 : 0.6} />

          {/* CÁC BẢNG THÔNG TIN */}
          <InfoCard
            position={isMobile ? [0, 6, 0] : [-5.5, -2.8, -2]}
            rotation={isMobile ? [0, 0, 0] : [0, 0.3, 0]}
            title="ABOUT ME"
            desc="Final-year IT student. Passionate about becoming a Full Stack Developer."
            icon="👨‍💻"
          />
          <InfoCard
            position={isMobile ? [0, 3, 0] : [-2, -3.2, 0]}
            rotation={isMobile ? [0, 0, 0] : [0, 0.1, 0]}
            title="REACT & WORDPRESS"
            desc="Build a modern UI using React and WordPress."
            icon="⚛️"
          />
          <InfoCard
            position={isMobile ? [0, 0, 0] : [1.5, -3.2, 0]}
            rotation={isMobile ? [0, 0, 0] : [0, -0.1, 0]}
            title="PERFORMANCE"
            desc="Optimize the source code to ensure the website runs smoothly and loads quickly."
            icon="🚀"
          />
          <InfoCard
            position={isMobile ? [0, -3, 0] : [5.5, -2.8, -2]}
            rotation={isMobile ? [0, 0, 0] : [0, -0.3, 0]}
            title="UX DESIGN"
            desc="Focus on user experience with a beautiful and intuitive interface."
            icon="🎨"
          />
        </group>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default TechCubesCanvas;