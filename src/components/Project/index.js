// Imports
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Project Function
function Project(props) {
    // JSX return
    return (
        <div className="card">
            {/* Image */}
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>

            {/* Card Information */}
            <div className="content">
                <p className="project-title" id="card-title">{props.name}</p>
                <p>
                    <a href={props.github}><img src="" alt="GitHub Repository" id="project-icon" /></a>
                    <a href={props.deploy}><img src="" alt="Deployed Application Website" id="project-icon" /></a>
                </p>

                <p id="topics">
                    ({props.description})
                </p>
            </div>
        </div>
    );
}

// Export for External
export default Project;