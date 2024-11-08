import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home';

export default function AppRoutes() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Router>
    </div>
  )
}
