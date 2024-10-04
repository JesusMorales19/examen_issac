import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Seccion1 from './pages/Seccion1';
import Seccion2 from './pages/Seccion2';
import Seccion3 from './pages/Seccion3';

const App = () => {
    return (
        <Router>
            <div className="app">
                <header className="header">
                    <div className="student-name">ALUMNO-Morales Hernandez Jesus Octavio</div>
                    <nav className="nav">
                        <Link to="/">INICIO</Link>
                        <Link to="/seccion1">SECCION 1</Link>
                        <Link to="/seccion2">SECCION 2</Link>
                        <Link to="/seccion3">SECCION 3</Link>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/seccion1" element={<Seccion1 />} />
                        <Route path="/seccion2" element={<Seccion2 />} />
                        <Route path="/seccion3" element={<Seccion3 />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
