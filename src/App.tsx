import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LazyMotion, domAnimation } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeStrip from './components/MarqueeStrip';
import Subjects from './components/Subjects';
import FeaturedExperimentsTicker from './components/FeaturedExperimentsTicker';
import Experiments from './components/Experiments';
import YOGTutor from './components/YOGTutor';
import StatsSection from './components/StatsSection';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <Router>
        <div className="page-load">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <MarqueeStrip />
                  <Subjects />
                  <FeaturedExperimentsTicker />
                  <Experiments />
                  <YOGTutor />
                  <StatsSection />
                  <Dashboard />
                  <Testimonials />
                  <About />
                  <CTABanner />
                </>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LazyMotion>
  );
}

export default App;
