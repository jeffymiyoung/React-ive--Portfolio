// Imports
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Contact from '../Contact';

import resumePdf from '../../assets/resume/2021-Sept-Resume.pdf';
import resumePng from '../../assets/resume/2021-Sept-Resume.PNG';

// Resume Function
function Resume() {
    // JSX return
    return (
        <Container className="topMar">
            <Row>
                <Col>
                    <h2>My Resume</h2>
                    <p>You may view my resume here! Or if you'd prefer, there is a download link provided.</p>
                </Col>

                <Col>
                    <a href={resumePdf} download>
                        <Button className="flRight" variant="info">Download Resume</Button>
                    </a>
                </Col>
            </Row>

            <Row>
                <Contact />
            </Row>
            
            <Row>
                <div>
                    <img src={resumePng} alt="Jeffrey Young's Current Resume" with="100%" className="boxShad topMar"/>
                </div>
            </Row>
        </Container>
    )
}   

// Export for External
export default Resume;