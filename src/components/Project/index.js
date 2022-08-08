// Imports
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Row from 'react-bootstrap/Row';

import Contact from '../Contact';

// Project Function
function Project() {
    // Declarations
    const [projects] = useState([
        {
            name: "Casty Weather Forecast App",
            description: "Daily and 5-day Forecast for the City of your choice!",
            github: "https://github.com/jeffymiyoung/Casty-Weather-Forecast-App",
            deployed: "https://jeffymiyoung.github.io/Casty-Weather-Forecast-App/",
            imageRoute: "(../../assets/images/projects/Casty-Weather-Forecast-App-Screenshot.jpg)" 
        },
        {
            name: "Fridge 2 Food",
            description: "Group Project Application, using the Spoonacular API to search for recipes based on an ingredient query.",
            github: "https://github.com/Joshuajword/fridge2food",
            deployed: "https://joshuajword.github.io/fridge2food/",
            imageRoute: "(../../assets/images/projects/Fridge-2-Food-Screenshot.jpg)"
        },
        {   
            name: "Notary Express",
            description: "Node and Express Note taking application, which saves notes into localStorage.",
            github: "https://github.com/jeffymiyoung/Notary-Express",
            deployed: "https://murmuring-tor-25321.herokuapp.com/",
            imageRoute: "(../../assets/images/projects/Notary-Express-Screenshot.jpg)"
        },
        {
            name: "MVC Tech Journal",
            description: "Express and MySQL Application for posting Tech articles/opinions.",
            github: "https://github.com/jeffymiyoung/MVC-Tech-Journal",
            deployed: "https://young-thicket-93120.herokuapp.com/",
            imageRoute: "(../../assets/images/projects/MVC-Tech-Journal-Screenshot.jpg)"
        },
        {
            name: "Dog Meet Dog",
            description: "Group Project, utilizing handlebars, MySQL, and cloudinary - allows users to post pictures and captions about their dogs for other dog owners!",
            github: "https://github.com/AlexPap1/Dog-Meet-Dog",
            deployed: "https://dog-meet-dog-final.herokuapp.com/",
            imageRoute: "(../../assets/images/projects/Dog-Meet-Dog-Screenshot.PNG)"
        },  
        {
            name: "Poke App",
            description: "MERN Application that allows users to create their own Pokemon Team from Gen 1 Pokemon!",
            github: "https://github.com/mrsdno/poke-app",
            deployed: "",
            imageRoute: "(../../assets/images/projects/Poke-App-Screenshot.png)"
        },
    ]);

    // JSX return
    return (
        <Container>
            <Row>
                <Col sm={9}>
                    <p className="topMar footText">
                        Preview some of my past projects! Consider my <a href="https://github.com/jeffymiyoung" rel="noreferrer" target="_blank">GitHub Profile</a> as well!
                    </p>
                </Col>
                
                <Col>
                    <Contact />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                
            </Row>
        </Container>
    );
}

// Export for External
export default Project;