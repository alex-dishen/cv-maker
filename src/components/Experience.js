import React from "react";

class Experience extends React.Component {
    render() {
        return (
            <div>
                <p>Practical Experience</p>
                <div>
                    <p>Work Experience</p>
                    <form>
                        <input type="text" placeholder="Company"/>
                        <input type="text" placeholder="Company"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <input type="text" placeholder="Company"/>
                        <input type="text" placeholder="Company"/>
                    </form>
                </div>
                <button>New</button>
            </div>
        );
    }
}

export default Experience;