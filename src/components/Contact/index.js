// Imports
import React, { useState } from 'react';

import { capitalizeFirstLetter, validateEmail } from '../../util/helpers.js';

// Contact Function
function Contact() {
    // Declarations
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    // handleChange function
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('please enter a valid email');
            } else {
                setErrorMessage('');
            }

        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    };

    // handleSubmit function
    function handleSubmit(e) {
        e.preventDefault();
    }

    const style = {
        background: '#A2D2FF',
        color: '#000000',
    }

    // JSX return
    return (
        <section class="justify-content-center" id="contact-section">
            <h1 data-testid='h1tag' className="contact">Reach Out</h1>

            <hr></hr>

            <form class="justify-content-center" id="contact-form">

                <div>
                    <label htmlFor="name">Name:</label>
                    <input class="form-control" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>

                <div >
                    <label htmlFor="email">E-mail:</label>
                    <input class="form-control" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea class="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="7" />
                </div>

                {errorMessage && (
                    <div>
                        <p className="error-text">{capitalizeFirstLetter(errorMessage)}</p>
                    </div>
                )}

                <div>
                    <button style={style} data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </section>
    );
}

// Export for External
export default Contact;