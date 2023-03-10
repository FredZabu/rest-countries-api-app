import React from 'react';
import { NavBar } from './components/index.js';
import './app.css'
import { HomePage, DetailPage } from './pages/index.js';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
            <NavBar />
            <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path = '/:id' element = { <DetailPage />} />
            </Routes>
            </div>
        </Router>    
    )
}

export default App;