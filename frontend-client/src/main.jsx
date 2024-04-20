import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AddQuestion from 'component/question/AddQuestion.jsx'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/question"  element={<AddQuestion/>}/>
      <Route path="/app"  element={<App/>}/>
    </Routes>
  </BrowserRouter>
)
