// Imports
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { capitalizeFirstLetter, validateEmail } from '../../util/helpers.js';

// Contact Function
function Contact() {
    // Declarations
    const [show, setShow] = useState(false);

    // Modal functions
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    // handleChange function
    function handleChange(e) {
        // Email Validation
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            // isValid conditional statement
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.value]: e.target.value });
        }
    };

    // handleSubmit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    // JSX return
    return (    
        <>
            <div>

            </div> 
            <br></br>
            
            <Button variant="primary" onClick={handleOpen}>
                Contact Me
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Reach Out</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h5>Fill out this form to get in contact!</h5>
                    
                    {/* Contact Me Form */}
                    <Form>
                        {/* Name Input */}
                        <Form.Group className="mb-3">
                            <Form.Label>Name: </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Please enter your name"
                                name="name"
                                defaultValue={name}
                                onBlur={handleChange}
                            />
                        </Form.Group>

                        {/* E-mail input */}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>E-mail Address: </Form.Label>
                            <Form.Control 
                                type="email"
                                placeholder="Please enter your E-mail"
                                name="email"
                                defaultValue={email}
                                onBlur={handleChange}
                            />
                        </Form.Group>

                        {/* Message Input */}
                        <Form.Group className="mb-3">
                            <Form.Label>Message: </Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Please enter the message you wish to send!"
                                name="message"
                                defaultValue={message}
                                rows={4}
                            />
                        </Form.Group>
                    </Form>

                    {/* Error Message */}
                    {errorMessage && (
                        <Alert key="warning" variant="warning">
                            {capitalizeFirstLetter(errorMessage)}
                        </Alert>
                    )}
                </Modal.Body>
                {/* Footer to send/close */}
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleSubmit}>Send</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

// Export for External
export default Contact;