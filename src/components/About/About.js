import React from 'react';
import About_hero from "./About_hero/About_hero";
import About_sertificate from "./About_sertificate/About_sertificate";
import About_student from "./About_student/About_student";
import About_form from "./About_form/About_form";


const About = () => {
    return (
        <div>
            <About_hero/>
            <About_sertificate/>
            <About_student/>
            <About_form/>
        </div>
    );
};

export default About;