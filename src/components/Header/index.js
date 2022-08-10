// Imports
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Import Page Components
import Navigation from '../Navigation';


// Header Function
class Header extends Component {
    render() {
        return (
            <div>
                <div className="row pb-3 header" id="header">
                    <div className="home mt-3">
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                enableBackground="new 0 0 251.479 251.479"
                                version="1.1"
                                viewBox="0 0 251.479 251.479"
                                xmlSpace="preserve"
                            >
                                <path d="M209.355 135.551a7.5 7.5 0 00-7.5 7.5v76.109H49.634v-76.109a7.5 7.5 0 00-7.5-7.5 7.5 7.5 0 00-7.5 7.5v83.609a7.5 7.5 0 007.5 7.5h167.221a7.5 7.5 0 007.5-7.5v-83.609a7.5 7.5 0 00-7.5-7.5z"></path>
                                <path d="M249.282 137.748L131.035 19.515a7.5 7.5 0 00-10.606 0L2.197 137.748a7.5 7.5 0 005.304 12.803c1.92 0 3.839-.732 5.304-2.197l112.929-112.93 112.943 112.93a7.5 7.5 0 0010.605-10.606z"></path>
                            </svg>
                        </Link>
                    </div>

                    <div className="nav">
                        <Navigation />
                    </div>
                </div>

                <hr></hr>

            </div>
        );
    };
}

// Export for External
export default Header;