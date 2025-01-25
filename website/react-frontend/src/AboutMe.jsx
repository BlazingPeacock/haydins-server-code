import React from 'react';

const AboutMe = () => (
    <div className="about-me">
        <h2>About Me</h2>
        <p>
            Hi, I’m Hunter Johnson, a results-driven DevOps engineer with experience in containerization,
            cloud platforms, and software development. Below is my professional resume.
        </p>
        <object
            data="/HunterJohnson_Resume_2024.pdf"
            type="application/pdf"
            width="100%"
            height="600px"
            className="resume-object"
        >
            <p>
                Your browser does not support displaying PDFs. Please
                <a href="/HunterJohnson_Resume_2024.pdf" download="HunterJohnson_Resume_2024.pdf">
                    download the resume
                </a>
                instead.
            </p>
        </object>
        <div className="download-button-container">
            <a
                href="/HunterJohnson_Resume_2024.pdf"
                download="HunterJohnson_Resume_2024.pdf"
                className="download-button"
            >
                Download Resume
            </a>
        </div>
    </div>
);

export default AboutMe;

