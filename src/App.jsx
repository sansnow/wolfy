import Dog from './Components/Dog'
import "./App.css"
import { Canvas } from '@react-three/fiber'

const App = () => {
  return (

      <main>
        <Canvas style={{
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundImage: "url(/background-l.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <Dog></Dog>

        </Canvas>

        <section id='section-1'></section>
        <section id='section-2'></section>
        <section id='section-3'></section>
      </main>
  )
}

export default App