import React from "react";
import education from '../assets/education.svg';

class Education extends React.Component {
    render() {
        return (
            <div className="education">
                <h2><img src={education} alt="Education" />Education</h2>
                <form>
                    <input type="text" placeholder="School"/>
                    <input type="text" placeholder="Degree"/>
                    <input type="text" placeholder="Time frame"/>
                </form>
            </div>
        );
    }
}

export default Education;