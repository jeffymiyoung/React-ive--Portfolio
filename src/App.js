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
  const style = {
    backgroundColor: "#FEEAFA",
  };

  const overflow = {
    overflowX: 'hidden',
  }

  // JSX return
  return (
    <div style={overflow} className="App">
      <Router>
        <header style={style} className="sticky-top">
          <Header />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>

        <footer style={style}>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

// Export for External
export default App;