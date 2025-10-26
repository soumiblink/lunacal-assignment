import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutCard from './components/About'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-4 w-full' style={{background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%", height:"895px", borderRadius:"28px"}}>
      {/* <AboutCard/> */}
      <Home/>
      </div>
    </>
  )
}

export default App
