import React from "react";

class NameAndPitch extends React.Component {
    render() {
        return(
            <div>
                <h1>Name</h1>
                <div>Developer</div>
                <div>Pitch</div>
            </div>
        );
    }
}

class Contacts extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <img src="" alt="" />
                    <p>Location</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Email</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Phone</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <p>Portfolio</p>
                </div>
            </div>
        );
    }
}

export { NameAndPitch, Contacts};