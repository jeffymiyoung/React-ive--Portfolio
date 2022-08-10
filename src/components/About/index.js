// Imports
import React from 'react';

// About Function
function About() {
    // JSX return
    return (
        <section className="title">
            <h1 className="about">Bio</h1>

            <hr></hr>

            {/* Information */}
            <div className="row justify-content-center">
                <div className="col-10" id="home-section">
                    <p>
                        Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
                    </p>
                    <p>
                        Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
                    </p>
                </div>
            </div>

            {/* Skills */}
            <div className="row justify-content-center">
                <div id="skills-section">
                    <div>
                        <h6 className="hText">Front End</h6>
                        <span>
                            <object data="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></object>
                            <object data="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"></object>
                            <object data="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"></object>
                            <object data="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"></object>
                            <object data="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"></object>
                        </span>
                    </div>
                
                    <div>
                        <h6 className="hText">Back End</h6>
                        <span>
                            <object data="https://img.shields.io/badge/Node.JS-%23323330.svg?style=for-the-badge&logo=nodedotjs&logoColor=brightgreen"></object>
                            <object data="https://img.shields.io/badge/Express-%23E34F26.svg?style=for-the-badge&logo=express&logoColor=white"></object>
                            <object data="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white"></object>
                        </span>
                    </div>
                
                    <div>
                        <h6 className="hText">Databases</h6>
                        <span>
                            <object data="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"></object>
                            <object data="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"></object>
                            <object data="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"></object>
                            <object data="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"></object>
                        </span>
                    </div>
                </div>
            </div>
        </section >
    );
}

// Export for External
export default About;