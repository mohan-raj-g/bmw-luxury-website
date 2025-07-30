import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, useGLTF } from '@react-three/drei'

function CarModel({ modelPath }: { modelPath: string }) {
  const { scene } = useGLTF(modelPath)
  return <primitive object={scene} />
}

export default function Car3DViewer({ modelPath }: { modelPath: string }) {
  return (
    <div style={{ width: 500, height: 350, borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <Environment preset="city" />
        <CarModel modelPath={modelPath} />
        <OrbitControls enableZoom enablePan />
      </Canvas>
    </div>
  )
}