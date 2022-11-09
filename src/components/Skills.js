import React from "react";

class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <p>Skills</p>
                <form>
                    <input type="text" placeholder="Language or Technology"/>
                </form>
                <button className="newBtn">New</button>
            </div>
        );
    }
}

export default Skills;