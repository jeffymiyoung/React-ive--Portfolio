// Imports
import React from 'react';
import Button from 'react-bootstrap/Button';

// Import Resume Files
import resumePdf from '../../assets/resume/2021-Sept-Resume.pdf';
import resumePng from '../../assets/resume/2021-Sept-Resume.PNG';

// Resume Function
function Resume() {
    // JSX return
    return (
        <section className="mb-5">
            <h1 className="resume">Resume</h1>
            <hr></hr>
            <div className="row justify-content-center" id="resume">
                <div className="mt-5 pl-5 pr-5">
                    <p>You may view my resume here! Or if you'd prefer, there is a download link provided.</p>
                </div>

                <br></br>

                <div className="mt-5">
                    <a href={resumePdf} download>
                        <Button className="flRight" variant="info">Download Resume</Button>
                    </a>
                </div>
            </div>

            <br></br>

            <div>
                <div className="justify-content-center mt-5">
                    <div>
                        <img src={resumePng} alt="Jeffrey Young's Current Resume" with="100%" className="boxShad topMar" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Export for External
export default Resume;