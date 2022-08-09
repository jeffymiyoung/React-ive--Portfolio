// Imports
import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

// Import Page Components
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import Navigation from '../Navigation';

// Header Function
class Header extends Component {
    render () {
        <HashRouter>
            <div className="row Header" id="header">
                <a href="/"><img src="../../assets/icons/icons8-home-button.png" alt="Jeffrey Young Home Page" class="icon" id="homeButton"/></a>

                <Navigation />
            </div>

            <div className="content">
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
            </div>
        </HashRouter>
    }
};

// Export for External
export default Header;