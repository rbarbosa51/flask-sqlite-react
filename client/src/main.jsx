import React from 'react'
import ReactDOM from 'react-dom/client'
import { App, SecondPage } from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
        <Route path='/' element={<App /> } />
        <Route path='/second' element={<SecondPage /> } />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
