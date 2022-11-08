import React from "react";

class Education extends React.Component {
    render() {
        return (
            <div>
                <h3>Education</h3>
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