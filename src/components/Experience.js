import React from "react";
import experience from '../assets/experience.svg';

class Experience extends React.Component {
    render() {
        return (
            <div className="experience">
                <h2><img src={experience} alt="Experience" />Experience</h2>
                <form>
                    <input type="text" placeholder="Company"/>
                    <input type="text" placeholder="Position"/>
                    <input type="text" placeholder="Start date of employment"/>
                    <input type="text" placeholder="End date of employment"/>
                    <textarea placeholder="Your main occupation, daily tasks and work field"></textarea>
                </form>
                <button className="newBtn">+ New</button>
            </div>
        );
    }
}

export default Experience;