import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Count from './components/Count'
import Print from './components/Print'
import Api from './components/Api'
import Pokeimon from './components/Pokeimon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>WELCOME REACT</h1>
    
      <Routes>
        <Route path='/log' element={<Login />} />
        <Route path='/sign' element={<Signup />} />
        <Route path='/state' element={<StateBasics />} />
        <Route path='/count' element={<Count />} />
        <Route path='/p' element={<Print />} />
        <Route path='/a' element={<Api />} />
        <Route path='/pk' element={<Pokeimon />} />
      </Routes>
      
     
      
    
    </>
  )
}

export default App
