import { useState } from 'react'
import './App.scss'
import './index.scss'
import './sass/main.scss'
import {  Route, Routes } from 'react-router-dom'
import About from './router/About/About'
import Home from './router/Home/Home.jsx'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Admin from './router/Admin/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/laylo" element={<About/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
