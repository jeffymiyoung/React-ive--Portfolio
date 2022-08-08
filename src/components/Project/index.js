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
            imageRoute: "../../assets/images/Casty Weather Forecast App/Casty Weather Forecast App-Screenshot.png"
        },
        {
            name: "Fridge 2 Food",
            description: "Group Project Application, using the Spoonacular API to search for recipes based on an ingredient query.",
            github: "https://github.com/Joshuajword/fridge2food",
            deployed: "https://joshuajword.github.io/fridge2food/"
        },
        {
            name: "Notary Express",
            description: "Node and Express Note taking application, which saves notes into localStorage.",
            github: "https://github.com/jeffymiyoung/Notary-Express",
            deployed: "https://murmuring-tor-25321.herokuapp.com/"
        },
        {
            name: "MVC Tech Journal",
            description: "Express and MySQL Application for posting Tech articles/opinions.",
            github: "https://github.com/jeffymiyoung/MVC-Tech-Journal",
            deployed: "https://young-thicket-93120.herokuapp.com/"
        },
        {
            name: "Dog Meet Dog",
            description: "Group Project, utilizing handlebars, MySQL, and cloudinary - allows users to post pictures and captions about their dogs for other dog owners!",
            github: "https://github.com/AlexPap1/Dog-Meet-Dog",
            deployed: "https://dog-meet-dog-final.herokuapp.com/"
        },
        {
            name: "Poke App",
            description: "MERN Application that allows users to create their own Pokemon Team from Gen 1 Pokemon!",
            github: "https://github.com/mrsdno/poke-app",
            deployed: ""
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
                {projects.map((project) => (
                    <Col md="auto" className="topPad">
                        <Card className="boxShad leftMar" style={{ width: '18rem' }} key={project.name}>
                            {/* image display */}
                            <span>
                                <img
                                    className="d-block w-100 imgOpac"
                                    src={require(`${project.imageRoute}`)}
                                    alt={project.description}
                                />
                            </span>
                            <Card.Body>
                                <Card.Title>{project.name}</Card.Title>
                                <OverlayTrigger trigger="focus" placement="right"
                                    overlay={
                                        <Popover id="popover-basic" key={project.name}>
                                            <Popover.Header as="h3">{project.name}</Popover.Header>
                                            <Popover.Body>
                                                {project.description}
                                                <Row>
                                                    <Button variant="secondary" href={project.github} target="_blank">GitHub</Button>
                                                    <Button variant="success" href={project.deployed} target="_blank">Deployed Link</Button>
                                                    <Contact />
                                                </Row>
                                            </Popover.Body>
                                        </Popover>
                                    }>
                                    <Button variant="info">Click More Info</Button>
                                </OverlayTrigger>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

// Export for External
export default Project;