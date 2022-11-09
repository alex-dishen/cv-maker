import React from "react";

class Experience extends React.Component {
    render() {
        return (
            <div className="experience">
                <p>Practical Experience</p>
                <form>
                    <input type="text" placeholder="Company"/>
                    <input type="text" placeholder="Your Position"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your main occupation, daily tasks and work field"></textarea>
                    <input type="text" placeholder="Start date of employment"/>
                    <input type="text" placeholder="End date of employment"/>
                </form>
                <button>New</button>
            </div>
        );
    }
}

export default Experience;