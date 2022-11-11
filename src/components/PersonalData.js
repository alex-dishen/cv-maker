import React from "react";
import passport from '../assets/passport.svg';

class PersonalData extends React.Component {
    render() {
        return (
            <div className="personalData">
                <h2><img src={passport} alt="passport" />Personal Data</h2>
                <form>
                    <div className="namesSection">
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <input type="text" placeholder="Niche: Font-End Developer"/>
                    <textarea placeholder="Tell something about yourself to
                                 stand out from other candidates"></textarea>
                </form>
            </div>
        );
    }
}

export default PersonalData;