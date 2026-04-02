import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './styles/globals.css';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Router>
        <div className="page-load">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Hero />} />
            </Routes>
          </main>
        </div>
      </Router>
    </LazyMotion>
  );
}

export default App;
