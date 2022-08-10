// Imports
import React from 'react';

// Home Function
function Home() {
    // JSX return
    return (
        <section className="title">
            <h1 className="home">Greetings!</h1>

            <hr></hr>

            <div className="row justify-content-center">
                <div className="col-10" id="home-section">
                    <h4>
                        Welcome to my newly developed Portfolio!
                    </h4>

                    <br></br>

                    <h4>
                        At the top of the page, there is a Navigation Bar, which can lead you to an About Me, Projects, Contact Form and Resume pages.
                    </h4>

                    <br></br>

                    <h4>
                        Take a look around! If you'd like to check my socials, they are located at the bottom of the page. See you soon!
                    </h4>
                </div>

                <div>
                    <img className="picture" src="https://raw.githubusercontent.com/jeffymiyoung/React-ive--Portfolio/main/src/assets/images/Young%2C%20Jeffrey%20Profile.jpg" />
                </div>

            </div>
        </section>
    );
}

// Export for External
export default Home;