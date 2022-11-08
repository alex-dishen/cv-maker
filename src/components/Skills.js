import React from "react";

class Skills extends React.Component {
    render() {
        return (
            <div>
                <p>Skills</p>
                <form>
                    <div>
                        <input type="text" placeholder="Language or Technology"/>
                    </div>
                </form>
                <button>New</button>
            </div>
        );
    }
}

export default Skills;