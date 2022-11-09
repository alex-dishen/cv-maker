import React from "react";

class Education extends React.Component {
    render() {
        return (
            <div className="education">
                <p>Education</p>
                <form>
                    <input type="text" placeholder="Your School"/>
                    <input type="text" placeholder="Your Degree"/>
                    <input type="text" placeholder="Time frame"/>
                </form>
            </div>
        );
    }
}

export default Education;