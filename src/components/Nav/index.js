// Imports
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';

// Navigation Function
function Navigation(props) {
    // Declarations
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        projectSelected,
        setProjectSelected,
        aboutSelected,
        setAboutSelected,
        resumeSelected,
        setResumeSelected
    } = props;

    useEffect(() => {
        if (currentCategory.name) {
            document.title = (currentCategory.name);
        } else {
            document.title = 'Jeffrey Young'
        }
    },  [currentCategory]);

    // JSX return
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
            
            {/* Category Listing */}
            {categories.map((category) => (
                <Nav.Item className={`${currentCategory.name === category.name && 'navActive' } ` } key={category.name}>
                    <Nav.Link onClick={() => {
                        setCurrentCategory(category)

                        if(category.name === 'About Me'){
                            setAboutSelected(true)
                            setProjectSelected(false)
                            setResumeSelected(false) 
                        } 
                        else if(category.name === 'Projects'){
                            setProjectSelected(true)
                            setAboutSelected(false)
                            setResumeSelected(false) 
                        }
                        else if(category.name === 'Resume'){
                            setResumeSelected(true) 
                            setAboutSelected(false)
                            setProjectSelected(false)
                        }
                        else {
                            setAboutSelected(false)
                            setProjectSelected(false)
                            setResumeSelected(false) 
                        }
                    }}>{category.name}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    );
}

// Export for External
export default Navigation;