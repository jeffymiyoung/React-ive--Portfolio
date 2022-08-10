// Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Import Page Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';


// App Function to display
function App() {
  // Declaraction
  const overflow = {
    overflowX: 'hidden',
  } 

  const style = {
    background: 'linear-gradient(#FFC8DD, #FFFFFF)',
  };

  // JSX return
  return (
    <div style={overflow} className="App">

      <Router basename="/React-ive--Portfolio">
        <header style={style} className="sticky-top header">
          <Header />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

        <footer>
          <Footer />
        </footer>

      </Router>
    </div>
  );
}

// Export for External
export default App;