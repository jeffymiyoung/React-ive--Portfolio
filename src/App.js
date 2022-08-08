// Imports
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Import Page Components
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Project from './components/Project';
import Resume from './components/Resume';
// import Navigation from './componenets/Nav';
// import Contact from './components/Contact';

// App Function to display
function App() {
  // Declarations
  const [currentCategory, setCurrentCategory] = useState(0);
  const [projectSelected, setProjectSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false); 
  
  // JSX return
  return (
    <div>
      <main className="page">
        <Header
          projectSelected={projectSelected}
          setProjectSelected={setProjectSelected}
          aboutSelected={aboutSelected}
          setAboutSelected={setAboutSelected}
          resumeSelected={resumeSelected}
          setResumeSelected={setResumeSelected}
        />
        {/* Display Home as failsafe */}
        {!projectSelected && !aboutSelected && !resumeSelected ? (
          <>
            <Home />
          </>
        ) : (
          <div></div>
        )}

        {/* Project Display */}
        {projectSelected ? (
          <>
            <Project />
          </>
        ) : (
          <div />
        )}

        {/* About Me Display */}
        {aboutSelected ? (
          <>
            <About currentCategory={currentCategory} />
          </>
        ) : (
          <div />
        )}

        {/* Resume Display */}
        {resumeSelected ? (
          <>
            <Resume />
          </>
        ) : (
          <div />
        )}

        <Footer />
      </main>
    </div>
  );
}

// Export for External
export default App;