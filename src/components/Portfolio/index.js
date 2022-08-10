// Imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// Import components
import Project from '../Project';
import assignments from './assignments.json'

// Wrapper function
function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

// Portfolio Function
function Portfolio () {
    // JSX Return
    return (
        <div>
            <section>
                <div className="project">
                    <h1 className="title">Portfolio</h1>
                    <hr></hr>
                </div>

                <Wrapper className="m-6" id="card-data">
                    {assignments.map((project) => (
                        <Project key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} description={project.description} />
                    ))}
                </Wrapper>
            </section>

            <br></br>

            <br></br>
            
            <br></br>

        </div>
    );
}

// Export for External
export default Portfolio;