// Imports
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from './components/Nav';

// Header Function
function Header(props) {
    // Declarations
    const {
        projectSelected, setProjectSelected,
        aboutSelected, setAboutSelected,
        resumeSelected, setResumeSelected
    } = props;

    const categories = [
        {
            name: 'Home',
            description: 'Home Page'
        },
        {
            name: 'About Me',
            description: 'Information about myself'
        },
        {
            name: 'Projects',
            descriptions: 'List of Projects that I have contributed to'
        },
        {
            name: 'Resume',
            description: 'Viewable / Downloadable version of my resume'
        }
    ];

    const [currentCategory, setCurrentCategory] = useState(0);
    // JSX return
    return (
        <Container>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Row className="justify-content-md-center">
                        <Accordion.Header>
                            <Col xs={8} md={8} lg={8}>
                                <h1 className='hText'>Jeffrey Young</h1>
                            </Col>
                        </Accordion.Header>
                        <Accordion.Body className="accordionBody">
                            <Nav
                                categories={categories}
                                setCurrentCategory={setCurrentCategory}
                                currentCategory={currentCategory}
                                projectSelected={projectSelected}
                                setProjectSelected={setProjectSelected}
                                aboutSelected={aboutSelected}
                                setAboutSelected={setAboutSelected}
                                resumeSelected={resumeSelected}
                                setResumeSelected={setResumeSelected}
                            />
                        </Accordion.Body>
                    </Row>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

// Export for External
export default Header;