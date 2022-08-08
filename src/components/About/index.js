// Imports
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';

import Contact from '../Contact';

// About Function
function About() {
    // Declarations
    const [open, setOpen] = useState(true);

    // JSX return
    return (
        <Container className='boxShad topMar'>
            <Row>
                <Button
                    variant="primary"
                    onClick={() => setOpen(!open)}
                    aria-controls="about-collapse"
                    aria-expanded={open}
                >
                    <h1>Jeffrey Young's Portait</h1>
                </Button>
            </Row>

            <Collapse in={open}>
                <Row id="about-collapse" className="topMar">
                    <Col>
                        <h4 className="hText">Bio:</h4>
                        <p>Fill In Bio Later - Filler Filler Filler Filler</p>
                    </Col>
                    <Col>
                        <h4 className="hText">Skills:</h4>
                        <Col>
                            <h6 className="hText">Front End</h6>
                            <span>
                                <object data="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></object>
                                <object data="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></object>
                                <object data="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></object>
                                <object data="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></object>
                                <object data="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></object>
                            </span>
                        </Col>

                        <Col>
                            <h6 className="hText">Back End</h6>
                            <span>
                                <object data="https://img.shields.io/badge/Node.JS-%23323330.svg?style=for-the-badge&logo=nodedotjs&logoColor=brightgreen"></object>
                                <object data="https://img.shields.io/badge/Express-%23E34F26.svg?style=for-the-badge&logo=express&logoColor=white"></object>
                                <object data="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"></object>
                            </span>
                        </Col>

                        <Col>
                            <h6 className="hText">Databases</h6>
                            <span>
                                <object data="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"></object>
                                <object data="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"></object>
                                <object data="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"></object>
                                <object data="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"></object>
                            </span>
                        </Col>
                    </Col>
                </Row>
            </Collapse>
        </Container>
    );
}

// Export for External
export default About;