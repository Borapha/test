// import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutPage from './Page/about/AboutPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path= "/" element = {<HomePage/>}/>
        <Route path= "/about" element = {<AboutPage/> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
