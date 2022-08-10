// Imports
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Navigation Function
function Navigation(props) {
    // JSX return
    return (
        <div className="row navigation" id="navigation">
            <div className="justify-content-evenly">
                <Link to="/about">About </Link>
                <Link to="/portfolio">Portfolio </Link>
                <Link to="/contact">Contact </Link>
                <Link to="/resume">Resume</Link>
            </div>
        </div>

    );
}

// Export for External
export default Navigation;