import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Academyprocess from './pages/Academyprocess'
import Facilities from './pages/Facilities'
import Team from './pages/Team'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Academyprocess' element={<Academyprocess />} /> 
        <Route path='/Facilities' element={<Facilities />} /> 
        <Route path='/Team' element={<Team />} /> 
      </Routes>
    </>
  )
}

export default App
