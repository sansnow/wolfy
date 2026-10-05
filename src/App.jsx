import Dog from './Components/Dog'
import "./App.css"
import { Canvas } from '@react-three/fiber'

const App = () => {
  return (
    <>
      <Canvas>
        <Dog></Dog>

      </Canvas>
    </>
  )
}

export default App