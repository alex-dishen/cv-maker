import React from "react";
import skills from '../assets/skills.svg';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <h2><img src={skills} alt="Skills" />Skills</h2>
                <form>
                    <input type="text" placeholder="Language or Technology"/>
                </form>
                <button className="newBtn">+ New</button>
            </div>
        );
    }
}

export default Skills;