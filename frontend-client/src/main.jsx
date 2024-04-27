import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Admin from './Admin'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/question"  element={<AddQuestion/>}/>
//       <Route path="/app"  element={<App/>}/>
//     </Routes>
//   </BrowserRouter>

  <React.StrictMode>
    <App />
  </React.StrictMode>
)
