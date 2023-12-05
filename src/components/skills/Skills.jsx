import React from 'react';
import "./skills.css";
import Languages from './Languages';
import Libraries from './Libraries';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Languages />

                <Libraries />
            </div>
        </section>
    )
}

export default Skills