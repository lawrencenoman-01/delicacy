/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { callAPI } from './domain/api'
import './style/App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Navbar from './pages/Navbar'
import Details from './pages/Homepage/Details'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/detailRecipies/:id' element={<Details />} />
        {/* <Route path='/' element={<Navbar />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
