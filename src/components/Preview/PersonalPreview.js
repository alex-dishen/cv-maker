import React from "react";
import location from '../../assets/location.svg';
import phone from '../../assets/phone.svg';
import mail from '../../assets/mail.svg';
import portfolio from '../../assets/portfolio.svg';

class NameAndPitch extends React.Component {
    render() {
        return(
            <div>
                <div className="head">
                    <div>
                        <h1 className="firstName">OLEKSANDR</h1>
                        <h1 className="lastName">DIDYSHEN</h1>
                        <div className="developer">Front-End Developer</div>
                    </div>
                    <div className="image"></div>
                </div>
                <p className="pitch">From the moment I produced the very first "Hello World" in
                    the console, I knew I was hooked into the world of software
                    development. But software development is not "just a job"
                    for me, it's offered an engaging challenge to continually
                    learn and improve my skills in creating high-quality
                    software. It became a full-fledged passion that only gets
                    more exciting with time. <br /> <br /> Below you'll find projects I've
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
            <>
            <hr />
            <div className="contacts">
                <div className="location-mail">
                    <div>
                        <div className="imgHolder">
                            <img src={location} alt="Location" />
                        </div>
                        <p>Ukraine, Khmelnytskyi</p>
                    </div>
                    <div>
                        <div className="imgHolder">
                            <img src={mail} alt="E-Mail" />
                        </div>
                        <p>didyshen.oleksandr@gmail.com</p>
                    </div>
                </div>
                <div className="number-portfolio">
                    <div>
                        <div className="imgHolder">
                            <img src={phone} alt="" />
                        </div>
                        <p>+380972632200</p>
                    </div>
                    <div>
                        <div className="imgHolder">
                            <img src={portfolio} alt="Portfolio" />
                        </div>
                        <p>https://github.com/alex-dishen</p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export { NameAndPitch, Contacts};