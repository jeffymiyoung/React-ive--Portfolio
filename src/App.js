// Imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Import Page Components
import Footer from './components/Footer';
import Header from './components/Header';


// App Function to display
function App() {
  // JSX return
  return (
    <div className="App">
      <Header />

      <Footer />
    </div>
  );
}

// Export for External
export default App;