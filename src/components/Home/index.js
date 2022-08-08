// Imports
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Contact from './components/Contact';

// Home Function
function Home() {
    // JSX return
    return (
        <Container className="page">
            <Row>
                <Col xs={6}>
                    <h2 className="hText">Greetings!</h2>
                    <p>
                        Welcome to my newly developed Portfolio! At the top of the page, there is a Navigation Bar, which can lead you to an About Me, Projects, and Resume pages. Take a look around! If you'd like to check my socials, they are located at the bottom of the page. See you soon!
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

// Export for External
export default Home;