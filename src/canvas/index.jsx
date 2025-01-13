import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';

const CanvasModel = () => {
  return (
    <div className="canvas-container">
      <Canvas
        shadows
        camera={{ position: [0, 0, 2], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />

        <Center position={[0.5, 0, 0]}>
          <Shirt />
        </Center>
      </Canvas>
    </div>
  )
}

export default CanvasModel