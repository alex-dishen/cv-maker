import React from "react";

class NameAndPitch extends React.Component {
    render() {
        return(
            <div>
                <div className="head">
                    <div>
                        <h1>Oleksandr<br/>Didyshen</h1>
                        <div>Front-End Developer</div>
                    </div>
                    <div className="image"></div>
                </div>
                <p>From the moment I produced the very first "Hello World" in
                    the console, I knew I was hooked into the world of software
                    development. But software development is not "just a job"
                    for me, it's offered an engaging challenge to continually
                    learn and improve my skills in creating high-quality
                    software. It became a full-fledged passion that only gets
                    more exciting with time. Below you'll find projects I've
                    completed that showcase my skills and general background in
                    developing software.
                </p>
                <hr />
            </div>
        );
    }
}

class Contacts extends React.Component {
    render() {
        return(
            <div>
                <hr />
                <div className="group1">
                    <div>
                        <img src="" alt="" />
                        <p>Ukraine, Khmelnytskyi</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>+380972632200</p>
                    </div>
                </div>
                <div className="group2">
                    <div>
                        <img src="" alt="" />
                        <p>didyshen.oleksandr@gmail.com</p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <p>https://github.com/alex-dishen</p>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export { NameAndPitch, Contacts};