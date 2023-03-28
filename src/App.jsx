import React from 'react';
import { Loading, NavBar } from './components/index.js';
import './app.css'
import { DetailPage } from './pages/index.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const HomePage = React.lazy(() => import('./pages/homePage/HomePage'));

function App() {
    return (
        <Router>
            <div>
            <NavBar />
            <Routes>
                    <Route path='/' element={<React.Suspense fallback={<Loading />}> <HomePage style={{ color:'white'}} /> </React.Suspense>} />
                    <Route path = '/:countryName' element = { <DetailPage />} />
            </Routes>
            </div>
        </Router>    
    )
}

export default App;